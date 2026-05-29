"""scripts/create_issues.sh 行为测试。"""

from __future__ import annotations

import os
import stat
import subprocess
from pathlib import Path


def _write_fake_gh(fake_bin: Path, script_content: str) -> None:
    gh_path = fake_bin / "gh"
    gh_path.write_text(script_content, encoding="utf-8")
    gh_path.chmod(gh_path.stat().st_mode | stat.S_IEXEC)


def test_write_mode_skips_duplicate_title(tmp_path: Path) -> None:
    repo_root = Path(__file__).resolve().parents[2]
    script_path = repo_root / "scripts" / "create_issues.sh"

    issues_dir = tmp_path / "issues"
    issues_dir.mkdir()
    (issues_dir / "duplicate.md").write_text(
        "TITLE: feat: duplicated\nLABELS: feature\n---\nbody\n",
        encoding="utf-8",
    )

    fake_bin = tmp_path / "bin"
    fake_bin.mkdir()
    calls_file = tmp_path / "calls.log"

    _write_fake_gh(
        fake_bin,
        """#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$*" >> "$GH_CALLS_FILE"
if [ "$1" = "issue" ] && [ "$2" = "list" ]; then
  echo "feat: duplicated"
  exit 0
fi
if [ "$1" = "issue" ] && [ "$2" = "create" ]; then
  echo "unexpected-create" >> "$GH_CALLS_FILE"
  exit 0
fi
""",
    )

    env = os.environ.copy()
    env["PATH"] = f"{fake_bin}:{env['PATH']}"
    env["GH_CALLS_FILE"] = str(calls_file)
    env["REPO"] = "handsondad/nature-dex"

    result = subprocess.run(  # noqa: S603
        ["/usr/bin/bash", str(script_path), str(issues_dir), "write"],
        cwd=repo_root,
        env=env,
        capture_output=True,
        text=True,
        check=False,
    )

    assert result.returncode == 0
    assert "跳过重复 issue" in result.stdout
    assert "unexpected-create" not in calls_file.read_text(encoding="utf-8")


def test_read_mode_exports_remote_issue_to_local_file(tmp_path: Path) -> None:
    repo_root = Path(__file__).resolve().parents[2]
    script_path = repo_root / "scripts" / "create_issues.sh"

    issues_dir = tmp_path / "issues"
    issues_dir.mkdir()

    fake_bin = tmp_path / "bin"
    fake_bin.mkdir()

    _write_fake_gh(
        fake_bin,
        """#!/usr/bin/env bash
set -euo pipefail
if [ "$1" = "issue" ] && [ "$2" = "list" ]; then
  cat <<'JSON'
[
  {
    "title": "feat: sync from github",
    "body": "## 背景\\nremote content",
    "labels": [{"name": "feature"}, {"name": "ai-ready"}]
  }
]
JSON
  exit 0
fi
""",
    )

    env = os.environ.copy()
    env["PATH"] = f"{fake_bin}:{env['PATH']}"
    env["REPO"] = "handsondad/nature-dex"

    result = subprocess.run(  # noqa: S603
        ["/usr/bin/bash", str(script_path), str(issues_dir), "read"],
        cwd=repo_root,
        env=env,
        capture_output=True,
        text=True,
        check=False,
    )

    assert result.returncode == 0

    output_file = issues_dir / "feat-sync-from-github.md"
    assert output_file.exists()

    content = output_file.read_text(encoding="utf-8")
    assert "TITLE: feat: sync from github" in content
    assert "LABELS: feature,ai-ready" in content
    assert "## 背景\nremote content" in content
