"""API 集成测试。"""

from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from src.api.routes import app


@pytest.fixture
def client() -> TestClient:
    """创建 FastAPI 测试客户端。"""
    return TestClient(app)


class TestHealthCheck:
    """健康检查端点测试。"""

    def test_health_check_returns_ok(self, client: TestClient) -> None:
        """健康检查应该返回 200 和 ok 状态。"""
        response = client.get("/health")

        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "ok"
        assert "active_sessions" in data


class TestChatEndpoint:
    """聊天端点集成测试。"""

    def test_chat_returns_response(self, client: TestClient) -> None:
        """POST /api/v1/chat 应该返回 Agent 响应。"""
        response = client.post(
            "/api/v1/chat",
            json={
                "session_id": "integration-test-1",
                "message": "你好",
                "stream": False,
            },
        )

        assert response.status_code == 200
        data = response.json()
        assert data["session_id"] == "integration-test-1"
        assert len(data["response"]) > 0

    def test_chat_empty_session_id_returns_400(self, client: TestClient) -> None:
        """空的 session_id 应该返回 422 错误。"""
        response = client.post(
            "/api/v1/chat",
            json={
                "session_id": "",
                "message": "你好",
                "stream": False,
            },
        )

        assert response.status_code == 422

    def test_chat_empty_message_returns_400(self, client: TestClient) -> None:
        """空消息应该返回 422 错误。"""
        response = client.post(
            "/api/v1/chat",
            json={
                "session_id": "session-1",
                "message": "",
                "stream": False,
            },
        )

        assert response.status_code == 422

    def test_chat_parent_role_returns_parent_content(self, client: TestClient) -> None:
        """家长角色应返回家长端补充内容。"""
        response = client.post(
            "/api/v1/chat",
            json={
                "session_id": "parent-view-1",
                "message": "这是蒲公英吗",
                "role": "parent",
                "stream": False,
            },
        )

        assert response.status_code == 200
        assert "家长端补充" in response.json()["response"]

    def test_chat_invalid_confidence_returns_422(self, client: TestClient) -> None:
        """无效置信度应返回 422。"""
        response = client.post(
            "/api/v1/chat",
            json={
                "session_id": "conf-invalid",
                "message": "你好",
                "confidence": 1.2,
                "stream": False,
            },
        )
        assert response.status_code == 422


class TestSessionEndpoint:
    """会话管理端点测试。"""

    def test_terminate_existing_session(self, client: TestClient) -> None:
        """终止存在的会话应该返回 terminated=true。"""
        # 先创建一个会话
        client.post(
            "/api/v1/chat",
            json={"session_id": "to-delete", "message": "你好", "stream": False},
        )

        # 再终止它
        response = client.delete("/api/v1/sessions/to-delete")
        assert response.status_code == 200
        assert response.json()["terminated"] is True

    def test_terminate_nonexistent_session(self, client: TestClient) -> None:
        """终止不存在的会话应该返回 terminated=false。"""
        response = client.delete("/api/v1/sessions/nonexistent-session-xyz")
        assert response.status_code == 200
        assert response.json()["terminated"] is False


class TestObservationAndRecommendationEndpoint:
    """观察记录与推荐端点测试。"""

    def test_observation_to_recommendation_flow(self, client: TestClient) -> None:
        """应支持记录后生成推荐，覆盖主链路。"""
        create_resp = client.post(
            "/api/v1/observations",
            json={
                "session_id": "loop-1",
                "species": "麻雀",
                "location": "park",
                "note": "看到三只小鸟",
                "status": "pending",
            },
        )
        assert create_resp.status_code == 200
        assert create_resp.json()["saved"] is True

        recommend_resp = client.post(
            "/api/v1/recommendations",
            json={"session_id": "loop-1", "season": "spring", "location": "park"},
        )
        assert recommend_resp.status_code == 200
        data = recommend_resp.json()
        assert len(data["today_species"]) > 0
        assert len(data["today_tasks"]) > 0
        assert len(data["rationale"]) > 0
