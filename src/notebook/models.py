"""个人图鉴保留儿童表达，并与目录知识分开。"""

from datetime import UTC, datetime
from typing import Literal
from uuid import uuid4

from pydantic import BaseModel, ConfigDict, Field

from src.observations.models import ObservationRecord


class Wish(BaseModel):
    """想去观察的物种，不代表已经遇见。"""

    child_id: str = Field(description="所属儿童标识")
    species_id: str = Field(description="目录物种 ID")
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC), description="加入清单的时间"
    )


class GuidePageContent(BaseModel):
    """只有孩子或家长明确提交的标题和表达，不由 AI 代写经历。"""

    model_config = ConfigDict(str_strip_whitespace=True)

    title: str = Field(min_length=1, max_length=80, description="孩子自己的图鉴标题")
    child_text: str = Field(default="", max_length=1000, description="孩子原话，可留空")


class GuidePage(GuidePageContent):
    """由真实观察生成的图鉴页；确认状态完全继承观察证据。"""

    id: str = Field(default_factory=lambda: f"page-{uuid4().hex}", description="图鉴页 ID")
    child_id: str = Field(description="所属儿童标识")
    observation: ObservationRecord = Field(description="观察证据快照，未知发现也可以制作图鉴")
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC), description="创建时间")
    visibility: Literal["private"] = Field(
        default="private", frozen=True, description="仅提供个人查询，不支持发布"
    )
