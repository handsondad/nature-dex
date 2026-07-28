"""发现台草稿仓储端口与内存实现。"""

from __future__ import annotations

from typing import Protocol

from src.discoveries.models import DiscoveryDraft


class DiscoveryDraftRepository(Protocol):
    """保存可恢复探索草稿的最小端口。"""

    def create(self, draft: DiscoveryDraft) -> DiscoveryDraft:
        """保存新草稿。"""

    def get(self, draft_id: str) -> DiscoveryDraft | None:
        """根据标识读取草稿。"""

    def update(self, draft: DiscoveryDraft) -> DiscoveryDraft:
        """更新已存在草稿。"""


class InMemoryDiscoveryDraftRepository:
    """面向开发与测试的进程内草稿仓储。"""

    def __init__(self) -> None:
        """初始化空草稿集合。"""
        self._drafts: dict[str, DiscoveryDraft] = {}

    def create(self, draft: DiscoveryDraft) -> DiscoveryDraft:
        """保存新草稿，拒绝重复标识。"""
        if draft.id in self._drafts:
            raise ValueError("发现草稿 ID 已存在")
        self._drafts[draft.id] = draft
        return draft

    def get(self, draft_id: str) -> DiscoveryDraft | None:
        """读取草稿。"""
        return self._drafts.get(draft_id)

    def update(self, draft: DiscoveryDraft) -> DiscoveryDraft:
        """更新草稿，拒绝不存在的标识。"""
        if draft.id not in self._drafts:
            raise ValueError("发现草稿不存在")
        self._drafts[draft.id] = draft
        return draft
