"""对话体验规则单元测试。"""

from __future__ import annotations

from src.agent.experience import (
    build_recommendations,
    build_role_summary,
    build_safety_reminders,
    detect_species,
)


class TestExperienceRules:
    """体验规则测试。"""

    def test_detect_species_by_keyword(self) -> None:
        """应识别消息中的已知物种。"""
        assert detect_species("今天看到一朵蒲公英") == "蒲公英"

    def test_build_parent_summary_contains_parent_hint(self) -> None:
        """家长视图应包含家长补充文本。"""
        summary = build_role_summary("燕子", "parent")
        assert "家长端补充" in summary

    def test_low_confidence_adds_uncertainty_reminder(self) -> None:
        """低置信度应触发不确定性提醒。"""
        reminders = build_safety_reminders("这是什么", 0.2, None)
        assert any("不太确定" in item for item in reminders)

    def test_high_risk_keyword_adds_guardrail(self) -> None:
        """风险关键词应触发强安全提醒。"""
        reminders = build_safety_reminders("这个能采摘食用吗", 0.8, None)
        assert any("不触碰" in item for item in reminders)

    def test_recommendations_return_consumable_fields(self) -> None:
        """推荐结果应包含可消费字段。"""
        result = build_recommendations(
            observations=[{"species": "麻雀", "location": "park"}],
            season="spring",
            location="park",
            limit=2,
        )
        assert len(result["today_species"]) > 0
        assert len(result["today_tasks"]) > 0
        assert len(result["rationale"]) > 0
