"""学习与图鉴 HTTP 契约；所有领域编排均经过 Agent。"""

from __future__ import annotations

from collections.abc import Callable
from typing import Annotated, Literal

from fastapi import APIRouter, HTTPException, Path, Query
from pydantic import BaseModel, ConfigDict, Field

from src.agent.core import AgentCore
from src.agent.learning import LearningCard, LearningReply
from src.agent.notebook import FindingCard, GuidePageView
from src.notebook.models import GuidePage, GuidePageContent

ChildID = Annotated[str, Path(min_length=1, max_length=128, pattern=r".*\S.*")]
AgeQuery = Annotated[Literal["4-6", "7-9", "10+"], Query()]


class LearningRequest(BaseModel):
    """可无图片发起的分龄知识问答。"""

    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")

    session_id: str = Field(min_length=1, max_length=128, description="学习会话 ID")
    message: str = Field(min_length=1, max_length=2000, description="孩子的问题")
    age_group: Literal["4-6", "7-9", "10+"] = Field(default="7-9", description="解释年龄档")
    role: Literal["child", "parent"] = Field(default="child", description="阅读视角")


class WishRequest(BaseModel):
    """只允许有效物种 ID，不让客户端写入目录事实。"""

    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")

    species_id: str = Field(min_length=1, max_length=128, description="想去观察的物种 ID")


class PageCreateRequest(GuidePageContent):
    """明确制作图鉴，不将每次问答自动伪装成一次发现。"""

    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")

    observation_id: str = Field(min_length=1, max_length=128, description="自己的观察记录 ID")


class PageEditRequest(GuidePageContent):
    """只修改表达，不能通过请求修改证据或发布。"""

    model_config = ConfigDict(str_strip_whitespace=True, extra="forbid")


def build_learning_router(get_agent: Callable[[], AgentCore]) -> APIRouter:
    """用共享 Agent 构建路由，支持测试替换和统一观察仓储。"""
    router = APIRouter(prefix="/api/v1", tags=["learning-notebook"])

    @router.post("/learning/chat", response_model=LearningReply)
    async def learn(request: LearningRequest) -> LearningReply:
        """返回答复、知识卡及依据字段；目录外问题明确返回知识缺口。"""
        try:
            return await get_agent().learn(**request.model_dump())
        except RuntimeError as error:
            raise HTTPException(status_code=409, detail=str(error)) from error

    @router.get("/learning/species", response_model=list[LearningCard])
    async def list_species(
        age_group: AgeQuery = "7-9",
        kind: Literal["plant", "animal", "fungus"] | None = None,
        category: Annotated[str | None, Query(max_length=64)] = None,
    ) -> list[LearningCard]:
        """按现有类型和分类标签浏览目录，不伪造完整分类树。"""
        return get_agent().list_learning_species(age_group, kind, category)

    @router.post("/children/{child_id}/wishes", response_model=FindingCard)
    async def add_wish(child_id: ChildID, request: WishRequest) -> FindingCard:
        """幂等保存想去见的物种，并返回寻找卡。"""
        try:
            return await get_agent().notebook.add_wish(child_id, request.species_id)
        except LookupError as error:
            raise HTTPException(status_code=404, detail=str(error)) from error

    @router.get("/children/{child_id}/wishes", response_model=list[FindingCard])
    async def list_wishes(child_id: ChildID, age_group: AgeQuery = "7-9") -> list[FindingCard]:
        """查看自己的清单，而不是已观察成果。"""
        return await get_agent().notebook.list_wishes(child_id, age_group)

    @router.delete("/children/{child_id}/wishes/{species_id}")
    async def remove_wish(child_id: ChildID, species_id: str) -> dict[str, bool]:
        """移除寻找项，不删除观察或图鉴。"""
        return {"removed": await get_agent().notebook.remove_wish(child_id, species_id)}

    @router.post("/children/{child_id}/guide/pages", response_model=GuidePage)
    async def create_page(child_id: ChildID, request: PageCreateRequest) -> GuidePage:
        """从自己的观察制作图鉴；未知发现也能成为一页。"""
        try:
            return await get_agent().notebook.create_page(
                child_id,
                request.observation_id,
                GuidePageContent(title=request.title, child_text=request.child_text),
            )
        except LookupError as error:
            raise HTTPException(status_code=404, detail=str(error)) from error

    @router.get("/children/{child_id}/guide", response_model=list[GuidePageView])
    async def list_pages(
        child_id: ChildID,
        age_group: AgeQuery = "7-9",
        limit: Annotated[int, Query(ge=1, le=200)] = 50,
    ) -> list[GuidePageView]:
        """私密回看图鉴，儿童原话和书上知识保持分开。"""
        return await get_agent().notebook.list_pages(child_id, age_group, limit)

    @router.put("/children/{child_id}/guide/pages/{page_id}", response_model=GuidePage)
    async def update_page(child_id: ChildID, page_id: str, request: PageEditRequest) -> GuidePage:
        """保存孩子对自己图鉴的修改。"""
        try:
            return await get_agent().notebook.update_page(child_id, page_id, request)
        except LookupError as error:
            raise HTTPException(status_code=404, detail=str(error)) from error

    @router.delete("/children/{child_id}/guide/pages/{page_id}")
    async def delete_page(child_id: ChildID, page_id: str) -> dict[str, bool]:
        """删除图鉴页，但不删除原始观察证据。"""
        return {"removed": await get_agent().notebook.delete_page(child_id, page_id)}

    return router
