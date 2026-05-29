#!/usr/bin/env python3
"""检查 issues 文档与 GitHub Issue 模板是否对齐。"""

from __future__ import annotations

import argparse
import ast
import re
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class TemplateField:
    """Issue 模板字段。"""

    label: str
    field_type: str
    required: bool
    options: tuple[str, ...] = ()


@dataclass(frozen=True)
class IssueTemplate:
    """Issue 模板定义。"""

    kind: str
    title_prefix: str
    labels: tuple[str, ...]
    fields: tuple[TemplateField, ...]


@dataclass(frozen=True)
class ValidationResult:
    """单个 issue 文档的检查结果。"""

    path: Path
    template_kind: str
    aligned_items: tuple[str, ...]
    misaligned_items: tuple[str, ...]

    @property
    def is_aligned(self) -> bool:
        """是否已完全对齐。"""
        return not self.misaligned_items


def parse_args() -> argparse.Namespace:
    """解析命令行参数。"""

    repo_root = Path(__file__).resolve().parent.parent
    return argparse.ArgumentParser(
        description="检查 issues 文档与 .github/ISSUE_TEMPLATE 模板是否对齐，并输出清单。",
    ).parse_args(
        namespace=argparse.Namespace(
            issues_dir=repo_root / "issues",
            templates_dir=repo_root / ".github" / "ISSUE_TEMPLATE",
            report=repo_root / "issues" / "reports" / "template-alignment.md",
        )
    )


def parse_template(path: Path) -> IssueTemplate:
    """解析单个模板文件。"""

    lines = path.read_text(encoding="utf-8").splitlines()
    title_prefix = ""
    labels: tuple[str, ...] = ()
    fields: list[TemplateField] = []
    index = 0

    while index < len(lines):
        line = lines[index]
        if line.startswith("title:"):
            title_prefix = line.split(":", 1)[1].strip().strip('"')
        elif line.startswith("labels:"):
            labels = tuple(ast.literal_eval(line.split(":", 1)[1].strip()))
        elif re.match(r"^\s{2}- type:\s+", line):
            block: list[str] = [line]
            index += 1
            while index < len(lines) and not re.match(r"^\s{2}- type:\s+", lines[index]):
                block.append(lines[index])
                index += 1
            field = parse_field_block(block)
            if field is not None:
                fields.append(field)
            continue
        index += 1

    return IssueTemplate(
        kind=path.stem,
        title_prefix=title_prefix,
        labels=labels,
        fields=tuple(fields),
    )


def parse_field_block(block: list[str]) -> TemplateField | None:
    """解析模板中的字段块。"""

    field_type_match = re.match(r"^\s{2}- type:\s+(.+)$", block[0])
    if field_type_match is None:
        return None

    field_type = field_type_match.group(1).strip()
    label = ""
    required = False
    options: list[str] = []
    in_dropdown_options = False

    for line in block[1:]:
        stripped = line.strip()
        label_match = re.match(r"^label:\s*(.+)$", stripped)
        if label_match is not None:
            label = label_match.group(1).strip()
            continue

        if stripped == "options:" and field_type == "dropdown":
            in_dropdown_options = True
            continue

        if in_dropdown_options:
            option_match = re.match(r"^\s*-\s+(.+)$", line)
            if option_match is not None:
                options.append(option_match.group(1).strip())
                continue
            if stripped and ":" in stripped:
                in_dropdown_options = False

        if field_type == "checkboxes":
            checkbox_label_match = re.match(r"^\s*-\s+label:\s*(.+)$", line)
            if checkbox_label_match is not None:
                options.append(checkbox_label_match.group(1).strip())
                continue

        if stripped == "required: true":
            required = True

    if not label:
        return None

    return TemplateField(
        label=label,
        field_type=field_type,
        required=required,
        options=tuple(options),
    )


def load_templates(templates_dir: Path) -> dict[str, IssueTemplate]:
    """加载模板目录。"""

    return {
        template.kind: template
        for template in (
            parse_template(path) for path in sorted(templates_dir.glob("*.yml"))
        )
    }


def detect_template_kind(title: str, labels: list[str]) -> str:
    """根据 labels 或标题前缀推断模板类型。"""

    if "task" in labels:
        return "task"
    if "feature" in labels:
        return "feature"
    if "bug" in labels:
        return "bug"
    if title.startswith("chore:"):
        return "task"
    if title.startswith("feat:"):
        return "feature"
    if title.startswith("fix:"):
        return "bug"
    msg = "无法根据 TITLE/LABELS 推断模板类型"
    raise ValueError(msg)


def parse_issue_document(path: Path) -> tuple[str, list[str], dict[str, list[str]]]:
    """解析单个 issue 文档。"""

    title = ""
    labels: list[str] = []
    body_lines: list[str] = []
    separator_found = False

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.rstrip()
        if line.startswith("TITLE:"):
            title = line.split(":", 1)[1].strip()
        elif line.startswith("LABELS:"):
            labels = [item.strip() for item in line.split(":", 1)[1].split(",") if item.strip()]
        elif separator_found:
            body_lines.append(line)
        elif line.strip() == "---":
            separator_found = True

    sections: dict[str, list[str]] = {}
    current_heading: str | None = None
    for line in body_lines:
        heading_match = re.match(r"^##\s+(.+)$", line)
        if heading_match is not None:
            current_heading = heading_match.group(1).strip()
            sections[current_heading] = []
            continue
        if current_heading is not None:
            sections[current_heading].append(line)

    return title, labels, sections


def normalize_text(lines: list[str]) -> str:
    """整理段落内容。"""

    return "\n".join(line.rstrip() for line in lines).strip()


def validate_issue(path: Path, templates: dict[str, IssueTemplate]) -> ValidationResult:
    """校验单个 issue 文档。"""

    title, labels, sections = parse_issue_document(path)
    template_kind = detect_template_kind(title, labels)
    template = templates[template_kind]
    aligned_items = [
        f"TITLE 使用 `{template.title_prefix}` 前缀",
    ]
    misaligned_items: list[str] = []

    if not title.startswith(template.title_prefix):
        misaligned_items.append(f"TITLE 未使用 `{template.title_prefix}` 前缀：{title}")

    missing_labels = [label for label in template.labels if label not in labels]
    if missing_labels:
        misaligned_items.append(f"LABELS 缺少：{', '.join(missing_labels)}")
    else:
        aligned_items.append(f"LABELS 包含模板标签：{', '.join(template.labels)}")

    for field in template.fields:
        content_lines = sections.get(field.label)
        if content_lines is None:
            missing_prefix = "缺少必填字段" if field.required else "缺少字段"
            misaligned_items.append(f"{missing_prefix}：{field.label}")
            continue

        content = normalize_text(content_lines)
        if not content:
            misaligned_items.append(f"字段为空：{field.label}")
            continue

        if field.field_type == "dropdown":
            value = next((line.strip() for line in content.splitlines() if line.strip()), "")
            if value not in field.options:
                misaligned_items.append(
                    f"{field.label} 取值不在模板选项中：{value}",
                )
                continue

        if field.field_type == "checkboxes":
            checklist_lines = [line.strip()[5:] for line in content.splitlines() if re.match(r"^- \[[ xX]\]\s+", line.strip())]
            missing_options = [option for option in field.options if option not in checklist_lines]
            if missing_options:
                misaligned_items.append(
                    f"{field.label} 缺少勾选项：{', '.join(missing_options)}",
                )
                continue

        aligned_items.append(field.label)

    return ValidationResult(
        path=path,
        template_kind=template_kind,
        aligned_items=tuple(aligned_items),
        misaligned_items=tuple(misaligned_items),
    )


def render_report(results: list[ValidationResult]) -> str:
    """渲染 Markdown 报告。"""

    aligned_count = sum(result.is_aligned for result in results)
    total_count = len(results)
    report_lines = [
        "# issues 与 ISSUE_TEMPLATE 对齐清单",
        "",
        f"- 扫描文档数：{total_count}",
        f"- 已对齐：{aligned_count}",
        f"- 未对齐：{total_count - aligned_count}",
        "",
    ]

    for result in results:
        status = "✅ 已对齐" if result.is_aligned else "⚠️ 未对齐"
        report_lines.extend(
            [
                f"## {result.path.name} — {status}",
                "",
                f"- 模板：`{result.template_kind}.yml`",
                "",
                "### 对齐项",
            ]
        )
        report_lines.extend(f"- [x] {item}" for item in result.aligned_items)
        report_lines.extend(["", "### 不对齐项"])
        if result.misaligned_items:
            report_lines.extend(f"- [ ] {item}" for item in result.misaligned_items)
        else:
            report_lines.append("- [x] 无")
        report_lines.append("")

    return "\n".join(report_lines)


def write_report(report_path: Path, content: str) -> None:
    """写入报告。"""

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(content + "\n", encoding="utf-8")


def main() -> int:
    """CLI 入口。"""

    args = parse_args()
    templates = load_templates(args.templates_dir)
    results = [
        validate_issue(path, templates) for path in sorted(args.issues_dir.glob("*.md"))
    ]
    report = render_report(results)
    write_report(args.report, report)
    return 0 if all(result.is_aligned for result in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
