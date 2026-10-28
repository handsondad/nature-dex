"""学习、寻找与个人图鉴的应用编排。"""

from __future__ import annotations

import asyncio

from pydantic import BaseModel, Field

from src.agent.learning import LearningCard, build_learning_card
from src.knowledge.species import AgeGroup, get_default_catalog
from src.notebook.models import GuidePage, GuidePageContent, Wish
from src.notebook.repository import NotebookRepository
from src.observations.repository import ObservationRepository


class FindingCard(BaseModel):
    """心愿和受控观察建议，和已观察成果分开。"""

    wish: Wish = Field(description="孩子想认识的物种")
    knowledge: LearningCard = Field(description="寻找线索、季节、环境和安全边界")


class GuidePageView(BaseModel):
    """儿童表达和目录知识并排呈现，不混写。"""

    page: GuidePage = Field(description="孩子制作的图鉴及真实证据")
    knowledge: LearningCard | None = Field(description="仅已确认发现可附加物种知识")


class NatureNotebook:
    """协调已有观察和持久化清单、图鉴，不代替孩子确认或发布。"""

    def __init__(self, observations: ObservationRepository, repository: NotebookRepository) -> None:
        """注入共用的观察仓储与图鉴仓储。"""
        self._observations = observations
        self._repository = repository

    async def add_wish(self, child_id: str, species_id: str) -> FindingCard:
        """将有效目录物种加入寻找清单，未知 ID 明确报错。"""
        species = get_default_catalog().get_by_id(species_id)
        if species is None:
            raise LookupError("物种不存在于目录")
        wish = await self._repository.add_wish(Wish(child_id=child_id, species_id=species_id))
        return FindingCard(wish=wish, knowledge=build_learning_card(species))

    async def list_wishes(self, child_id: str, age_group: AgeGroup) -> list[FindingCard]:
        """列出孩子想见的物种及分龄寻找卡。"""
        wishes = await self._repository.list_wishes(child_id)
        cards = []
        for wish in wishes:
            species = get_default_catalog().get_by_id(wish.species_id)
            if species is None:
                raise ValueError("寻找清单引用了不存在的目录物种")
            cards.append(FindingCard(wish=wish, knowledge=build_learning_card(species, age_group)))
        return cards

    async def remove_wish(self, child_id: str, species_id: str) -> bool:
        """移除自己的寻找项，观察和图鉴不受影响。"""
        return await self._repository.remove_wish(child_id, species_id)

    async def create_page(
        self,
        child_id: str,
        observation_id: str,
        content: GuidePageContent,
    ) -> GuidePage:
        """只能从自己的真实观察制作图鉴，神秘发现同样允许。"""
        record = await asyncio.to_thread(self._observations.get, child_id, observation_id)
        if record is None:
            raise LookupError("观察记录不存在")
        return await self._repository.create_page(
            GuidePage(
                **content.model_dump(),
                child_id=child_id,
                observation=record,
            )
        )

    async def list_pages(
        self, child_id: str, age_group: AgeGroup, limit: int
    ) -> list[GuidePageView]:
        """回看孩子自己的图鉴；未知记录永远不自动升级为已识别。"""
        pages = await self._repository.list_pages(child_id, limit=limit)
        views = []
        for page in pages:
            species = (
                get_default_catalog().get_by_id(page.observation.species_id)
                if page.observation.status == "confirmed" and page.observation.species_id
                else None
            )
            views.append(
                GuidePageView(
                    page=page,
                    knowledge=build_learning_card(species, age_group) if species else None,
                )
            )
        return views

    async def update_page(
        self, child_id: str, page_id: str, content: GuidePageContent
    ) -> GuidePage:
        """孩子可以修改标题和自己的表达，不能覆盖观察证据。"""
        return await self._repository.update_page(child_id, page_id, content)

    async def delete_page(self, child_id: str, page_id: str) -> bool:
        """删除自己的图鉴页。"""
        return await self._repository.delete_page(child_id, page_id)
