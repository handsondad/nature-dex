#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ISSUES_DIR="${ROOT_DIR}/issues"
REPO="${REPO:-handsondad/nature-dex}"
MODE="${MODE:-sync}"
GH_ISSUE_LIMIT="${GH_ISSUE_LIMIT:-200}"

if [ $# -ge 1 ]; then
  ISSUES_DIR="$1"
fi
if [ $# -ge 2 ]; then
  MODE="$2"
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "❌ 未检测到 gh，请先安装 GitHub CLI" >&2
  exit 1
fi

trim() {
  local s="$1"
  s="${s#"${s%%[![:space:]]*}"}"
  s="${s%"${s##*[![:space:]]}"}"
  printf '%s' "$s"
}

slugify() {
  local text="$1"
  text="$(printf '%s' "$text" | tr '[:upper:]' '[:lower:]')"
  text="$(printf '%s' "$text" | sed 's/[^[:alnum:]]\+/-/g; s/^-*//; s/-*$//; s/-\{2,\}/-/g')"
  if [ -z "$text" ]; then
    text="issue"
  fi
  printf '%s' "$text"
}

parse_local_issue() {
  local file="$1"
  local separator_count

  title="$(sed -n 's/^TITLE:[[:space:]]*//p' "$file" | head -1 || true)"
  labels="$(sed -n 's/^LABELS:[[:space:]]*//p' "$file" | head -1 || true)"
  title="$(trim "$title")"
  labels="$(trim "$labels")"
  separator_count="$(grep -c '^---$' "$file" || true)"

  if [ "$separator_count" -lt 1 ]; then
    echo "⚠️  跳过（缺少 --- 分隔符）: $file" >&2
    return 1
  fi

  if [ "$separator_count" -gt 1 ]; then
    echo "⚠️  提示（检测到多个 ---，将使用第一个作为正文起点）: $file" >&2
  fi

  if ! body="$(awk 'BEGIN{sep=0} /^---$/ && sep==0 {sep=1; next} sep==1 {print}' "$file")"; then
    echo "⚠️  跳过（正文解析失败）: $file" >&2
    return 1
  fi

  body="$(printf '%s\n' "$body" | awk 'started || NF {started=1; print}')"

  if [ -z "$title" ] || [ -z "$body" ]; then
    echo "⚠️  跳过（缺少 TITLE 或正文）: $file" >&2
    return 1
  fi

  return 0
}

load_remote_titles() {
  mapfile -t remote_titles < <(
    gh issue list \
      -R "$REPO" \
      --state all \
      --limit "$GH_ISSUE_LIMIT" \
      --json title \
      --jq '.[].title'
  )
}

title_exists_in_array() {
  local needle="$1"
  shift
  local item
  for item in "$@"; do
    if [ "$item" = "$needle" ]; then
      return 0
    fi
  done
  return 1
}

sync_local_to_remote() {
  local failed=0
  local files=()
  local output
  local file

  if [ ! -d "$ISSUES_DIR" ]; then
    echo "❌ Issue 目录不存在: ${ISSUES_DIR}" >&2
    return 1
  fi

  shopt -s nullglob
  files=("${ISSUES_DIR}"/*.md)
  shopt -u nullglob

  if [ ${#files[@]} -eq 0 ]; then
    echo "ℹ️  未找到本地 issue 文件，跳过写入远端。"
    return 0
  fi

  load_remote_titles

  for file in "${files[@]}"; do
    if ! parse_local_issue "$file"; then
      failed=1
      continue
    fi

    if title_exists_in_array "$title" "${remote_titles[@]}"; then
      echo "⏭️  跳过重复 issue: $title"
      continue
    fi

    cmd=(gh issue create -R "$REPO" --title "$title" --body "$body")

    if [ -n "$labels" ]; then
      IFS=',' read -ra arr <<< "$labels"
      for lb in "${arr[@]}"; do
        lb_trimmed="$(trim "$lb")"
        [ -n "$lb_trimmed" ] && cmd+=(--label "$lb_trimmed")
      done
    fi

    echo "创建中: $title"
    if ! output="$("${cmd[@]}" 2>&1)"; then
      echo "❌ 创建失败: $title ($file)" >&2
      echo "$output" >&2
      failed=1
      continue
    fi

    echo "$output"
    remote_titles+=("$title")
  done

  return "$failed"
}

sync_remote_to_local() {
  local failed=0
  local local_titles_file
  local issues_json_file
  local local_files=()

  mkdir -p "$ISSUES_DIR"

  local_titles_file="$(mktemp)"
  issues_json_file="$(mktemp)"

  shopt -s nullglob
  local_files=("$ISSUES_DIR"/*.md)
  shopt -u nullglob

  if [ ${#local_files[@]} -gt 0 ]; then
    if ! grep -h '^TITLE:[[:space:]]*' "${local_files[@]}" | sed 's/^TITLE:[[:space:]]*//' >"$local_titles_file"; then
      echo "❌ 读取本地 issue 标题失败" >&2
      rm -f "$local_titles_file" "$issues_json_file"
      return 1
    fi
  fi

  if ! gh issue list \
    -R "$REPO" \
    --state all \
    --limit "$GH_ISSUE_LIMIT" \
    --json title,body,labels >"$issues_json_file"; then
    rm -f "$local_titles_file" "$issues_json_file"
    echo "❌ 读取 GitHub Issues 失败" >&2
    return 1
  fi

  if ! python - "$ISSUES_DIR" "$local_titles_file" "$issues_json_file" <<'PY'; then
import json
import re
import sys
from pathlib import Path

issues_dir = Path(sys.argv[1])
local_titles_path = Path(sys.argv[2])
issues_json_path = Path(sys.argv[3])

local_titles = {
    line.strip()
    for line in local_titles_path.read_text(encoding="utf-8").splitlines()
    if line.strip()
}

issues = json.loads(issues_json_path.read_text(encoding="utf-8"))


def slugify(text: str) -> str:
    slug = "".join(ch.lower() if ch.isalnum() else "-" for ch in text)
    slug = re.sub(r"-{2,}", "-", slug).strip("-")
    return slug or "issue"

for issue in issues:
    title = (issue.get("title") or "").strip()
    body = issue.get("body") or ""
    labels = ",".join(label.get("name", "") for label in issue.get("labels", []) if label.get("name"))

    if not title:
      continue

    if title in local_titles:
      print(f"⏭️  跳过重复本地 issue: {title}")
      continue

    file_path = issues_dir / f"{slugify(title)}.md"
    suffix = 2
    while file_path.exists():
      file_path = issues_dir / f"{slugify(title)}-{suffix}.md"
      suffix += 1

    body = body.lstrip("\n")
    content = f"TITLE: {title}\nLABELS: {labels}\n---\n{body}\n"
    file_path.write_text(content, encoding="utf-8")
    print(f"已写入: {file_path}")
    local_titles.add(title)
PY
    echo "❌ 本地 issue 写入失败" >&2
    failed=1
  fi

  rm -f "$local_titles_file" "$issues_json_file"
  return "$failed"
}

case "$MODE" in
sync)
  sync_remote_to_local
  sync_local_to_remote
  ;;
read|read-only)
  sync_remote_to_local
  ;;
write|write-only)
  sync_local_to_remote
  ;;
*)
  echo "❌ 不支持的模式: $MODE（可选: sync/read/write）" >&2
  exit 1
  ;;
esac
