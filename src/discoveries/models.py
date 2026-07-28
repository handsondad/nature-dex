"""发现台草稿领域模型。"""

from __future__ import annotations

from datetime import UTC, datetime
from enum import StrEnum
from uuid import uuid4

from pydantic import BaseModel, Field


class DiscoveryStatus(StrEnum):
    """发现草稿在儿童探索流程中的状态。"""

    AWAITING_EVIDENCE = "awaiting_evidence"
    READY_TO_CONFIRM = "ready_to_confirm"
    SAVED = "saved"


class DiscoveryCandidate(BaseModel):
    """供孩子选择的候选朋友快照。"""

    species_id: str = Field(description="物种目录的稳定标识")
    name_zh: str = Field(description="物种中文展示名")
    confidence: float = Field(ge=0.0, le=1.0, description="可解释候选置信度")
    distinguishing_features: tuple[str, ...] = Field(description="可观察的区分线索")


class DiscoveryDraft(BaseModel):
    """一段可恢复的发现台探索过程。"""

    id: str = Field(default_factory=lambda: f"discovery-{uuid4().hex}")
    session_id: str = Field(min_length=1, max_length=128)
    child_id: str = Field(min_length=1, max_length=128)
    description: str = Field(min_length=1, max_length=500)
    location: str = Field(min_length=1, max_length=64)
    season: str | None = Field(default=None, max_length=32)
    candidates: tuple[DiscoveryCandidate, ...] = ()
    questions: tuple[str, ...] = ()
    evidence_answers: tuple[str, ...] = ()
    status: DiscoveryStatus = DiscoveryStatus.READY_TO_CONFIRM
    created_at: datetime = Field(default_factory=lambda: datetime.now(tz=UTC))

    @property
    def evidence_round(self) -> int:
        """返回已完成的澄清轮数。"""
        return len(self.evidence_answers)

    @property
    def current_question(self) -> str | None:
        """返回当前唯一需要回答的观察问题。"""
        if self.status is not DiscoveryStatus.AWAITING_EVIDENCE:
            return None
        if self.evidence_round >= len(self.questions):
            return None
        return self.questions[self.evidence_round]
