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

if [ ${#files[@]} -eq 0 ]; then
  echo "❌ 未找到 issue 文件: ${ISSUES_DIR}/*.md" >&2
  exit 1
fi

for f in "${files[@]}"; do
  title="$(sed -n 's/^TITLE:[[:space:]]*//p' "$f" | head -1)"
  labels="$(sed -n 's/^LABELS:[[:space:]]*//p' "$f" | head -1)"
  body="$(awk 'found{print} /^---$/{found=1}' "$f")"

  if [ -z "$title" ] || [ -z "$body" ]; then
    echo "⚠️  跳过（缺少 TITLE 或正文）: $f" >&2
    continue
  fi

  cmd=(gh issue create -R "$REPO" --title "$title" --body "$body")

  if [ -n "$labels" ]; then
    IFS=',' read -ra arr <<< "$labels"
    for lb in "${arr[@]}"; do
      lb_trimmed="$(echo "$lb" | xargs)"
      [ -n "$lb_trimmed" ] && cmd+=(--label "$lb_trimmed")
    done
  fi

  echo "Creating: $title"
  "${cmd[@]}"
done
