"""今日微冒险 API 集成测试。"""

from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from src.api.routes import app


@pytest.fixture
def client() -> TestClient:
    """创建 API 测试客户端。"""
    return TestClient(app)


def test_today_adventure_returns_a_child_safe_task(client: TestClient) -> None:
    """首页任务接口应返回一个可跳过的完整微冒险。"""
    response = client.post(
        "/api/v1/adventures/today",
        json={
            "session_id": "adventure-api-session",
            "child_id": "adventure-api-child",
            "season": "spring",
            "location_type": "park",
        },
    )

    assert response.status_code == 200
    data = response.json()
    assert data["adventure"] is not None
    assert data["adventure"]["is_skippable"] is True
    assert data["adventure"]["action"]
    assert data["adventure"]["fallback_prompt"]
    assert data["adventure"]["safety_notice"]


def test_today_adventure_can_return_no_task_without_penalizing_child(client: TestClient) -> None:
    """无匹配任务应平静地提供自由发现入口。"""
    response = client.post(
        "/api/v1/adventures/today",
        json={
            "session_id": "no-adventure-session",
            "season": "winter",
            "location_type": "water",
        },
    )

    assert response.status_code == 200
    data = response.json()
    assert data["adventure"] is None
    assert "自由发现" in data["empty_state_message"]
