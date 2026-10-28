"""观察记录仓储端口及内存实现。"""

from __future__ import annotations

from collections import defaultdict
from typing import Protocol

from src.knowledge.species import SpeciesCatalog, get_default_catalog
from src.observations.models import ObservationCreate, ObservationRecord


class ObservationRepository(Protocol):
    """观察记录持久化端口。"""

    def create(self, observation: ObservationCreate) -> ObservationRecord:
        """保存一条已验证的观察记录。"""

    def list_by_child(self, child_id: str, *, limit: int = 50) -> list[ObservationRecord]:
        """按儿童档案读取最近的观察记录。"""

    def get(self, child_id: str, observation_id: str) -> ObservationRecord | None:
        """按所属儿童与 ID 读取观察记录。"""


def build_observation_record(
    observation: ObservationCreate, catalog: SpeciesCatalog
) -> ObservationRecord:
    """统一校验目录引用并规范化展示名，供各仓储实现复用。"""
    species_name = observation.species_name
    if observation.species_id is not None:
        species = catalog.get_by_id(observation.species_id)
        if species is None:
            raise ValueError("species_id 不存在于物种目录")
        species_name = species.name_zh
    if species_name is None:
        raise ValueError("观察记录缺少物种名称")
    return ObservationRecord(
        **observation.model_dump(exclude={"species_name"}),
        species_name=species_name,
    )


class InMemoryObservationRepository:
    """用于本地开发和测试的进程内观察记录仓储。"""

    def __init__(self, catalog: SpeciesCatalog | None = None) -> None:
        """初始化仓储。

        Args:
            catalog: 物种目录；省略时使用默认只读目录。
        """
        self._catalog = catalog or get_default_catalog()
        self._records_by_child: dict[str, list[ObservationRecord]] = defaultdict(list)

    def create(self, observation: ObservationCreate) -> ObservationRecord:
        """保存观察记录，并验证目录物种引用。"""
        record = build_observation_record(observation, self._catalog)
        self._records_by_child[record.child_id].append(record)
        return record

    def list_by_child(self, child_id: str, *, limit: int = 50) -> list[ObservationRecord]:
        """返回指定儿童最近创建的观察记录。"""
        if limit < 1:
            return []
        return list(reversed(self._records_by_child.get(child_id, [])))[:limit]

    def get(self, child_id: str, observation_id: str) -> ObservationRecord | None:
        """按所属儿童查找，不跨儿童引用记录。"""
        return next(
            (
                item
                for item in self._records_by_child.get(child_id, [])
                if item.id == observation_id
            ),
            None,
        )
