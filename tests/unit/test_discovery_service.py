"""发现台草稿状态机单元测试。"""

from __future__ import annotations

from src.discoveries.models import DiscoveryStatus
from src.discoveries.service import DiscoveryService


class TestDiscoveryService:
    """验证一问一证据与神秘发现降级路径。"""

    def test_start_returns_one_observable_question_for_candidate(self) -> None:
        """有候选时只提出第一个真实世界可验证的问题。"""
        service = DiscoveryService()

        draft = service.start(
            child_id="child-a",
            location="park",
            description="草地边黄色小花",
            season="spring",
        )

        assert draft.status is DiscoveryStatus.AWAITING_EVIDENCE
        assert draft.current_question is not None
        assert draft.evidence_round == 0
        assert draft.candidates[0].species_id == "plant-dandelion"

    def test_submit_evidence_limits_questions_to_two_rounds(self) -> None:
        """两轮证据后草稿应变为可确认状态，不能无限追问。"""
        service = DiscoveryService()
        draft = service.start(
            child_id="child-a",
            location="park",
            description="草地边黄色小花",
            season="spring",
        )

        after_first = service.submit_evidence(draft.id, "叶子贴着地面")
        after_second = service.submit_evidence(after_first.id, "还看到了白色绒球")

        assert after_second.status is DiscoveryStatus.READY_TO_CONFIRM
        assert after_second.current_question is None
        assert after_second.evidence_round == 2

    def test_save_as_mystery_keeps_child_description_without_fake_species(self) -> None:
        """孩子随时可以把未知事物保存为神秘发现。"""
        service = DiscoveryService()
        draft = service.start(
            child_id="child-a",
            location="community",
            description="墙角有一个亮亮的小东西",
        )

        record = service.save_as_mystery(draft.id)

        assert record.status.value == "pending"
        assert record.species_id is None
        assert "亮亮" in record.species_name
