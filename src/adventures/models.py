"""儿童今日微冒险领域模型。"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Literal

AdventureKind = Literal["discover", "revisit", "listen"]


@dataclass(frozen=True)
class ExplorationAdventure:
    """一项不超过数分钟、可在真实世界完成的探索任务。"""

    id: str
    title: str
    kind: AdventureKind
    prompt: str
    action: str
    evidence_hint: str
    safety_notice: str
    fallback_prompt: str
    rationale: str
    target_species_ids: tuple[str, ...]
    seasons: tuple[str, ...]
    locations: tuple[str, ...]
    priority: int = 100
    is_skippable: bool = True
