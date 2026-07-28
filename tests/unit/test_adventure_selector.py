"""今日微冒险选择器单元测试。"""

from __future__ import annotations

from src.adventures.selector import select_today_adventure


class TestTodayAdventureSelector:
    """验证儿童优先的任务选择规则。"""

    def test_selects_safe_single_spring_park_adventure(self) -> None:
        """任务应提供一个明确动作、证据、安全边界和替代路线。"""
        adventure = select_today_adventure(
            observations=[],
            season="spring",
            location_type="park",
        )

        assert adventure is not None
        assert adventure.id == "spring-dandelion-change"
        assert adventure.action
        assert adventure.evidence_hint
        assert adventure.safety_notice
        assert adventure.fallback_prompt
        assert len(adventure.target_species_ids) > 0

    def test_prefers_new_theme_after_same_target_was_observed(self) -> None:
        """已有相同物种记录时应先推荐新的观察主题。"""
        adventure = select_today_adventure(
            observations=[{"species_id": "plant-dandelion", "species": "蒲公英"}],
            season="spring",
            location_type="park",
        )

        assert adventure is not None
        assert adventure.id != "spring-dandelion-change"

    def test_can_exclude_current_adventure_when_child_wants_another_one(self) -> None:
        """孩子选择换一个时不应再次返回同一任务。"""
        adventure = select_today_adventure(
            observations=[],
            season="spring",
            location_type="park",
            exclude_adventure_id="spring-dandelion-change",
        )

        assert adventure is not None
        assert adventure.id != "spring-dandelion-change"

    def test_returns_none_when_context_has_no_safe_matching_adventure(self) -> None:
        """没有可验证的安全任务时返回空，由客户端提供自由发现入口。"""
        adventure = select_today_adventure(
            observations=[],
            season="winter",
            location_type="water",
        )

        assert adventure is None
