"""API 测试使用独立本地数据库，不写入开发者的数据。"""

import pytest

from src.agent.core import AgentCore
from src.api import routes
from src.memory.database import SQLiteDatabase
from src.notebook.repository import NotebookRepository
from src.observations.sqlite_repository import SQLiteObservationRepository


@pytest.fixture(autouse=True)
def isolated_api_agent(monkeypatch, tmp_path):
    """每个测试使用新 Agent，重建时仍可使用相同 SQLite 文件。"""
    database = SQLiteDatabase(str(tmp_path / "nature-dex.sqlite3"))

    def restart():
        agent = AgentCore(
            observation_repository=SQLiteObservationRepository(database),
            notebook_repository=NotebookRepository(database),
        )
        monkeypatch.setattr(routes, "_agent", agent)
        return agent

    restart()
    return restart
