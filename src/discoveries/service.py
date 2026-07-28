"""发现台草稿状态机。"""

from __future__ import annotations

from src.discoveries.models import DiscoveryCandidate, DiscoveryDraft, DiscoveryStatus
from src.discoveries.repository import (
    DiscoveryDraftRepository,
    InMemoryDiscoveryDraftRepository,
)
from src.knowledge.species import SpeciesCatalog, get_default_catalog
from src.observations.models import ObservationCreate, ObservationRecord, ObservationStatus
from src.observations.repository import InMemoryObservationRepository, ObservationRepository

_MAX_EVIDENCE_ROUNDS = 2


class DiscoveryService:
    """协调文字候选、儿童证据与观察记录保存。"""

    def __init__(
        self,
        *,
        catalog: SpeciesCatalog | None = None,
        draft_repository: DiscoveryDraftRepository | None = None,
        observation_repository: ObservationRepository | None = None,
    ) -> None:
        """创建发现台服务。"""
        self._catalog = catalog or get_default_catalog()
        self._drafts = draft_repository or InMemoryDiscoveryDraftRepository()
        self._observations = observation_repository or InMemoryObservationRepository(
            catalog=self._catalog
        )

    def start(
        self,
        *,
        session_id: str = "discovery-session",
        child_id: str,
        description: str,
        location: str,
        season: str | None = None,
    ) -> DiscoveryDraft:
        """以孩子描述创建草稿，并只准备第一个可观察问题。"""
        result = self._catalog.search_text(
            description,
            location_type=location,
            season=season,
        )
        questions = result.clarifying_questions[:_MAX_EVIDENCE_ROUNDS]
        draft = DiscoveryDraft(
            session_id=session_id,
            child_id=child_id,
            description=description,
            location=location,
            season=season,
            candidates=tuple(
                DiscoveryCandidate(
                    species_id=item.species.id,
                    name_zh=item.species.name_zh,
                    confidence=item.confidence,
                    distinguishing_features=item.distinguishing_features,
                )
                for item in result.candidates
            ),
            questions=questions,
            status=(
                DiscoveryStatus.AWAITING_EVIDENCE
                if questions
                else DiscoveryStatus.READY_TO_CONFIRM
            ),
        )
        return self._drafts.create(draft)

    def get(self, draft_id: str) -> DiscoveryDraft:
        """读取草稿，不存在时明确报错。"""
        draft = self._drafts.get(draft_id)
        if draft is None:
            raise ValueError("发现草稿不存在")
        return draft

    def submit_evidence(self, draft_id: str, answer: str) -> DiscoveryDraft:
        """记录一条孩子证据；回答“不知道”同样是有效进展。"""
        normalized_answer = answer.strip()
        if not normalized_answer:
            raise ValueError("观察回答不能为空白")
        draft = self.get(draft_id)
        if draft.status is not DiscoveryStatus.AWAITING_EVIDENCE:
            raise ValueError("当前草稿不需要更多观察回答")

        updated_answers = (*draft.evidence_answers, normalized_answer)
        next_status = (
            DiscoveryStatus.READY_TO_CONFIRM
            if len(updated_answers) >= min(len(draft.questions), _MAX_EVIDENCE_ROUNDS)
            else DiscoveryStatus.AWAITING_EVIDENCE
        )
        updated = draft.model_copy(
            update={"evidence_answers": updated_answers, "status": next_status}
        )
        return self._drafts.update(updated)

    def confirm(
        self,
        draft_id: str,
        *,
        species_id: str | None = None,
    ) -> ObservationRecord:
        """把选择的候选朋友保存为已确认观察记录。"""
        draft = self.get(draft_id)
        if draft.status is not DiscoveryStatus.READY_TO_CONFIRM:
            raise ValueError("请先完成当前观察问题，或保存为神秘发现")
        selected_id = species_id or (draft.candidates[0].species_id if draft.candidates else None)
        if selected_id is None or selected_id not in {
            candidate.species_id for candidate in draft.candidates
        }:
            raise ValueError("请从当前候选朋友中选择一个")
        species = self._catalog.get_by_id(selected_id)
        if species is None:
            raise ValueError("候选物种不存在于目录")
        record = self._observations.create(
            ObservationCreate(
                child_id=draft.child_id,
                species_id=species.id,
                species_name=species.name_zh,
                location=draft.location,
                note=self._build_note(draft),
                status=ObservationStatus.CONFIRMED,
            )
        )
        self._drafts.update(draft.model_copy(update={"status": DiscoveryStatus.SAVED}))
        return record

    def save_as_mystery(self, draft_id: str) -> ObservationRecord:
        """把未确认的真实发现保存为神秘发现，不伪造物种标识。"""
        draft = self.get(draft_id)
        if draft.status is DiscoveryStatus.SAVED:
            raise ValueError("此发现草稿已经保存")
        record = self._observations.create(
            ObservationCreate(
                child_id=draft.child_id,
                species_name=draft.description,
                location=draft.location,
                note=self._build_note(draft),
                status=ObservationStatus.PENDING,
            )
        )
        self._drafts.update(draft.model_copy(update={"status": DiscoveryStatus.SAVED}))
        return record

    @staticmethod
    def _build_note(draft: DiscoveryDraft) -> str:
        """将证据保存在观察备注中，方便未来回看与再识别。"""
        if not draft.evidence_answers:
            return "发现台记录：等待下次一起再看看。"
        answers = "；".join(draft.evidence_answers)
        return f"发现台证据：{answers}"
