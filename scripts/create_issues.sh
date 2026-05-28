#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ISSUES_DIR="${1:-${ROOT_DIR}/issues}"
REPO="${REPO:-handsondad/nature-dex}"

if ! command -v gh >/dev/null 2>&1; then
  echo "❌ 未检测到 gh，请先安装 GitHub CLI" >&2
  exit 1
fi

if [ ! -d "${ISSUES_DIR}" ]; then
  echo "❌ Issue 目录不存在: ${ISSUES_DIR}" >&2
  exit 1
fi

shopt -s nullglob
files=("${ISSUES_DIR}"/*.md)
failed=0

trim() {
  local s="$1"
  s="${s#"${s%%[![:space:]]*}"}"
  s="${s%"${s##*[![:space:]]}"}"
  printf '%s' "$s"
}

if [ ${#files[@]} -eq 0 ]; then
  echo "❌ 未找到 issue 文件: ${ISSUES_DIR}/*.md" >&2
  exit 1
fi

for f in "${files[@]}"; do
  title="$(sed -n 's/^TITLE:[[:space:]]*//p' "$f" | head -1 || true)"
  labels="$(sed -n 's/^LABELS:[[:space:]]*//p' "$f" | head -1 || true)"
  title="$(trim "$title")"
  labels="$(trim "$labels")"
  separator_count="$(grep -c '^---$' "$f" || true)"

  if [ "${separator_count}" -lt 1 ]; then
    echo "⚠️  跳过（缺少 --- 分隔符）: $f" >&2
    failed=1
    continue
  fi

  if [ "${separator_count}" -gt 1 ]; then
    echo "⚠️  提示（检测到多个 ---，将使用第一个作为正文起点）: $f" >&2
  fi

  if ! body="$(awk 'BEGIN{sep=0} /^---$/ && sep==0 {sep=1; next} sep==1 {print}' "$f")"; then
    echo "⚠️  跳过（正文解析失败）: $f" >&2
    failed=1
    continue
  fi
  body="$(printf '%s\n' "$body" | awk 'started || NF {started=1; print}')"

  if [ -z "$title" ] || [ -z "$body" ]; then
    echo "⚠️  跳过（缺少 TITLE 或正文）: $f" >&2
    failed=1
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
    echo "❌ 创建失败: $title ($f)" >&2
    echo "$output" >&2
    failed=1
    continue
  fi
  echo "$output"
done

exit "$failed"
