"""观察记录领域模型。"""

from __future__ import annotations

from datetime import UTC, datetime
from enum import StrEnum
from uuid import uuid4

from pydantic import BaseModel, ConfigDict, Field, model_validator


class ObservationStatus(StrEnum):
    """物种确认状态。"""

    CONFIRMED = "confirmed"
    PENDING = "pending"


class ObservationCreate(BaseModel):
    """创建观察记录所需的经过验证的数据。"""

    model_config = ConfigDict(str_strip_whitespace=True)

    child_id: str = Field(min_length=1, max_length=128, description="儿童档案的稳定标识")
    location: str = Field(min_length=1, max_length=64, description="观察地点")
    species_id: str | None = Field(
        default=None,
        max_length=128,
        description="目录物种的稳定标识；已确认记录必须提供",
    )
    species_name: str | None = Field(
        default=None,
        max_length=64,
        description="待确认观察保留的原始物种描述",
    )
    note: str = Field(default="", max_length=500, description="儿童或家长填写的观察备注")
    image_url: str | None = Field(default=None, max_length=2048, description="可选图片地址")
    status: ObservationStatus = Field(
        default=ObservationStatus.CONFIRMED,
        description="已确认或待确认状态",
    )

    @model_validator(mode="after")
    def validate_species_reference(self) -> ObservationCreate:
        """确保每条记录在当前状态下都有可追溯的物种信息。"""
        if self.status is ObservationStatus.CONFIRMED and not self.species_id:
            raise ValueError("已确认记录必须提供 species_id")
        if self.status is ObservationStatus.PENDING and not (self.species_id or self.species_name):
            raise ValueError("待确认记录必须提供 species_id 或 species_name")
        return self


class ObservationRecord(BaseModel):
    """已保存的儿童观察记录。"""

    id: str = Field(default_factory=lambda: f"obs-{uuid4().hex}", description="记录唯一标识")
    child_id: str = Field(description="所属儿童档案标识")
    species_id: str | None = Field(description="目录物种稳定标识")
    species_name: str = Field(description="用于展示的物种名称或原始描述")
    location: str = Field(description="观察地点")
    note: str = Field(description="观察备注")
    image_url: str | None = Field(description="可选图片地址")
    status: ObservationStatus = Field(description="物种确认状态")
    observed_at: datetime = Field(
        default_factory=lambda: datetime.now(tz=UTC),
        description="记录创建的 UTC 时间",
    )
