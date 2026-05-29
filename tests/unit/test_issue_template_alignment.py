"""Issue 模板对齐检查脚本测试。"""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPT_PATH = REPO_ROOT / "scripts" / "check_issue_template_alignment.py"
TEMPLATES_DIR = REPO_ROOT / ".github" / "ISSUE_TEMPLATE"


def load_script_module():
    """加载对齐检查脚本模块。"""

    spec = importlib.util.spec_from_file_location("issue_template_alignment", SCRIPT_PATH)
    assert spec is not None
    assert spec.loader is not None
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


class TestIssueTemplateAlignmentScript:
    """Issue 模板对齐检查脚本测试。"""

    def test_repository_issue_docs_are_aligned(self, tmp_path: Path) -> None:
        """仓库内现有 issue 文档应全部通过对齐检查。"""

        module = load_script_module()
        report_path = tmp_path / "report.md"
        result = module.main(
            [
                "--issues-dir",
                str(REPO_ROOT / "issues"),
                "--templates-dir",
                str(TEMPLATES_DIR),
                "--report",
                str(report_path),
            ]
        )

        assert result == 0
        assert report_path.exists()
        assert "未对齐：0" in report_path.read_text(encoding="utf-8")

    def test_script_reports_missing_template_sections(self, tmp_path: Path) -> None:
        """缺少模板字段时应写入未对齐清单。"""

        module = load_script_module()
        issues_dir = tmp_path / "issues"
        issues_dir.mkdir()
        (issues_dir / "feat-missing-checklist.md").write_text(
            "\n".join(
                [
                    "TITLE: feat: 缺少检查项的需求",
                    "LABELS: feature,ai-ready",
                    "---",
                    "## 用户故事",
                    "作为用户，我希望需求文档完整，以便 AI 可以自动处理。",
                    "",
                    "## 验收标准",
                    "- [ ] 字段完整",
                    "",
                    "## 技术规格（可选）",
                    "- 涉及模块：src/agent/",
                    "",
                    "## 背景与上下文",
                    "需要补齐模板字段。",
                    "",
                    "## 优先级",
                    "🟡 P2 - 中（计划内功能）",
                ]
            )
            + "\n",
            encoding="utf-8",
        )
        report_path = tmp_path / "report.md"

        result = module.main(
            [
                "--issues-dir",
                str(issues_dir),
                "--templates-dir",
                str(TEMPLATES_DIR),
                "--report",
                str(report_path),
            ]
        )

        report = report_path.read_text(encoding="utf-8")
        assert result == 1
        assert "缺少字段：提交前检查" in report
