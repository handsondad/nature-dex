"""本地 SQLite 事务边界；异步调用方必须在线程中使用。"""

from __future__ import annotations

import sqlite3
from collections.abc import Callable
from contextlib import closing
from pathlib import Path
from typing import TypeVar

T = TypeVar("T")

_SCHEMA = """
CREATE TABLE IF NOT EXISTS observations (
    id TEXT PRIMARY KEY,
    child_id TEXT NOT NULL,
    payload TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS observations_child ON observations(child_id);
CREATE TABLE IF NOT EXISTS wishes (
    child_id TEXT NOT NULL,
    species_id TEXT NOT NULL,
    payload TEXT NOT NULL,
    PRIMARY KEY (child_id, species_id)
);
CREATE TABLE IF NOT EXISTS guide_pages (
    id TEXT PRIMARY KEY,
    child_id TEXT NOT NULL,
    observation_id TEXT NOT NULL,
    payload TEXT NOT NULL,
    UNIQUE (child_id, observation_id)
);
CREATE INDEX IF NOT EXISTS guide_pages_child ON guide_pages(child_id);
"""


class SQLiteDatabase:
    """按操作打开连接，避免线程共享连接及未关闭句柄。"""

    def __init__(self, path: str) -> None:
        """指定本地数据库文件路径；不在导入阶段执行 I/O。"""
        if not path.strip() or path == ":memory:":
            raise ValueError("请提供可持久化的 SQLite 文件路径")
        self.path = Path(path)

    def run(self, operation: Callable[[sqlite3.Connection], T]) -> T:
        """在线程调用方中执行事务；失败回滚并向上抛出。"""
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with closing(sqlite3.connect(self.path, timeout=10)) as connection:
            connection.executescript(_SCHEMA)
            with connection:
                return operation(connection)
