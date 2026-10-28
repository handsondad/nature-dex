"""寻找清单和图鉴的异步本地持久化仓储。"""

from __future__ import annotations

import asyncio
import sqlite3

from src.memory.database import SQLiteDatabase
from src.notebook.models import GuidePage, GuidePageContent, Wish


class NotebookRepository:
    """所有 SQLite I/O 在线程中执行，数据库约束保证重复请求不重复创建。"""

    def __init__(self, database: SQLiteDatabase) -> None:
        """指定与观察记录共享的本地数据库。"""
        self._database = database

    async def add_wish(self, wish: Wish) -> Wish:
        """幂等加入寻找清单，不重置最初加入的时间。"""

        def save(connection: sqlite3.Connection) -> Wish:
            connection.execute(
                "INSERT INTO wishes(child_id, species_id, payload) VALUES (?, ?, ?) "
                "ON CONFLICT(child_id, species_id) DO NOTHING",
                (wish.child_id, wish.species_id, wish.model_dump_json()),
            )
            row = connection.execute(
                "SELECT payload FROM wishes WHERE child_id = ? AND species_id = ?",
                (wish.child_id, wish.species_id),
            ).fetchone()
            return Wish.model_validate_json(row[0])

        return await asyncio.to_thread(self._database.run, save)

    async def list_wishes(self, child_id: str) -> list[Wish]:
        """列出该儿童的寻找清单。"""

        def read(connection: sqlite3.Connection) -> list[Wish]:
            rows = connection.execute(
                "SELECT payload FROM wishes WHERE child_id = ? ORDER BY rowid DESC", (child_id,)
            )
            return [Wish.model_validate_json(row[0]) for row in rows]

        return await asyncio.to_thread(self._database.run, read)

    async def remove_wish(self, child_id: str, species_id: str) -> bool:
        """仅移除指定儿童的寻找项。"""

        def remove(connection: sqlite3.Connection) -> bool:
            cursor = connection.execute(
                "DELETE FROM wishes WHERE child_id = ? AND species_id = ?",
                (child_id, species_id),
            )
            return cursor.rowcount > 0

        return await asyncio.to_thread(self._database.run, remove)

    async def create_page(self, page: GuidePage) -> GuidePage:
        """同一观察只生成一页；重试不覆盖孩子编辑过的内容。"""

        def save(connection: sqlite3.Connection) -> GuidePage:
            connection.execute(
                "INSERT INTO guide_pages(id, child_id, observation_id, payload) "
                "VALUES (?, ?, ?, ?) "
                "ON CONFLICT(child_id, observation_id) DO NOTHING",
                (page.id, page.child_id, page.observation.id, page.model_dump_json()),
            )
            row = connection.execute(
                "SELECT payload FROM guide_pages WHERE child_id = ? AND observation_id = ?",
                (page.child_id, page.observation.id),
            ).fetchone()
            return GuidePage.model_validate_json(row[0])

        return await asyncio.to_thread(self._database.run, save)

    async def list_pages(self, child_id: str, *, limit: int = 50) -> list[GuidePage]:
        """按创建顺序回看该儿童的图鉴。"""

        def read(connection: sqlite3.Connection) -> list[GuidePage]:
            rows = connection.execute(
                "SELECT payload FROM guide_pages WHERE child_id = ? ORDER BY rowid DESC LIMIT ?",
                (child_id, limit),
            )
            return [GuidePage.model_validate_json(row[0]) for row in rows]

        return await asyncio.to_thread(self._database.run, read)

    async def update_page(
        self, child_id: str, page_id: str, content: GuidePageContent
    ) -> GuidePage:
        """修改自己的表达，不允许客户端改变证据和确认状态。"""

        def update(connection: sqlite3.Connection) -> GuidePage:
            row = connection.execute(
                "SELECT payload FROM guide_pages WHERE child_id = ? AND id = ?",
                (child_id, page_id),
            ).fetchone()
            if row is None:
                raise LookupError("图鉴页不存在")
            page = GuidePage.model_validate_json(row[0]).model_copy(update=content.model_dump())
            connection.execute(
                "UPDATE guide_pages SET payload = ? WHERE child_id = ? AND id = ?",
                (page.model_dump_json(), child_id, page_id),
            )
            return page

        return await asyncio.to_thread(self._database.run, update)

    async def delete_page(self, child_id: str, page_id: str) -> bool:
        """删除图鉴页但保留原始观察记录。"""

        def remove(connection: sqlite3.Connection) -> bool:
            cursor = connection.execute(
                "DELETE FROM guide_pages WHERE child_id = ? AND id = ?", (child_id, page_id)
            )
            return cursor.rowcount > 0

        return await asyncio.to_thread(self._database.run, remove)
