"""观察记录仓储单元测试。"""

from __future__ import annotations

from src.observations.models import ObservationCreate, ObservationStatus
from src.observations.repository import InMemoryObservationRepository


class TestInMemoryObservationRepository:
    """验证观察记录的用户隔离和稳定关联。"""

    def test_create_resolves_known_species_to_stable_identifier(self) -> None:
        """已确认记录应使用物种目录的稳定 ID。"""
        repository = InMemoryObservationRepository()

        record = repository.create(
            ObservationCreate(
                child_id="child-a",
                species_id="plant-dandelion",
                location="park",
                note="黄色小花",
            )
        )

        assert record.child_id == "child-a"
        assert record.species_id == "plant-dandelion"
        assert record.species_name == "蒲公英"
        assert record.status is ObservationStatus.CONFIRMED

    def test_pending_record_allows_unresolved_species_name(self) -> None:
        """待确认记录允许保存儿童的原始观察，不伪造物种 ID。"""
        repository = InMemoryObservationRepository()

        record = repository.create(
            ObservationCreate(
                child_id="child-a",
                species_name="一种不认识的小花",
                location="community",
                status=ObservationStatus.PENDING,
            )
        )

        assert record.species_id is None
        assert record.species_name == "一种不认识的小花"
        assert record.status is ObservationStatus.PENDING

    def test_list_by_child_is_isolated_and_newest_first(self) -> None:
        """儿童只能获取自己的记录，列表按最近观察优先。"""
        repository = InMemoryObservationRepository()
        first = repository.create(
            ObservationCreate(
                child_id="child-a",
                species_id="plant-dandelion",
                location="park",
            )
        )
        second = repository.create(
            ObservationCreate(
                child_id="child-a",
                species_id="animal-sparrow",
                location="community",
            )
        )
        repository.create(
            ObservationCreate(
                child_id="child-b",
                species_id="animal-swallow",
                location="park",
            )
        )

        records = repository.list_by_child("child-a")

        assert [record.id for record in records] == [second.id, first.id]
