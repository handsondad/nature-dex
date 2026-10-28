"""本地持久化观察仓储；同步端口由 API 在线程池调用。"""

from __future__ import annotations

import sqlite3

from src.knowledge.species import get_default_catalog
from src.memory.database import SQLiteDatabase
from src.observations.models import ObservationCreate, ObservationRecord
from src.observations.repository import build_observation_record


class SQLiteObservationRepository:
    """复用领域校验，将观察证据保存到本地数据库。"""

    def __init__(self, database: SQLiteDatabase) -> None:
        """指定共享数据库。"""
        self._database = database

    def create(self, observation: ObservationCreate) -> ObservationRecord:
        """校验物种引用并持久化观察记录。"""
        record = build_observation_record(observation, get_default_catalog())

        def save(connection: sqlite3.Connection) -> ObservationRecord:
            connection.execute(
                "INSERT INTO observations(id, child_id, payload) VALUES (?, ?, ?)",
                (record.id, record.child_id, record.model_dump_json()),
            )
            return record

        return self._database.run(save)

    def list_by_child(self, child_id: str, *, limit: int = 50) -> list[ObservationRecord]:
        """返回指定儿童最近保存的观察记录。"""

        def read(connection: sqlite3.Connection) -> list[ObservationRecord]:
            rows = connection.execute(
                "SELECT payload FROM observations WHERE child_id = ? ORDER BY rowid DESC LIMIT ?",
                (child_id, max(0, limit)),
            )
            return [ObservationRecord.model_validate_json(row[0]) for row in rows]

        return self._database.run(read)

    def get(self, child_id: str, observation_id: str) -> ObservationRecord | None:
        """按儿童和记录 ID 查找，不能跨儿童引用证据。"""

        def read(connection: sqlite3.Connection) -> ObservationRecord | None:
            row = connection.execute(
                "SELECT payload FROM observations WHERE child_id = ? AND id = ?",
                (child_id, observation_id),
            ).fetchone()
            return ObservationRecord.model_validate_json(row[0]) if row else None

        return self._database.run(read)
