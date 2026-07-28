"""发现台 API 集成测试。"""

from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from src.api.routes import app


@pytest.fixture
def client() -> TestClient:
    """创建 API 测试客户端。"""
    return TestClient(app)


def test_discovery_flow_asks_two_questions_then_confirms(client: TestClient) -> None:
    """描述到证据确认的流程最多两轮，并可保存已确认记录。"""
    start = client.post(
        "/api/v1/discoveries",
        json={
            "session_id": "discovery-api-session",
            "child_id": "discovery-api-child",
            "location": "park",
            "description": "草地边黄色小花",
            "season": "spring",
        },
    )

    assert start.status_code == 200
    first = start.json()
    assert first["status"] == "awaiting_evidence"
    assert first["current_question"]

    evidence_one = client.post(
        f"/api/v1/discoveries/{first['id']}/evidence",
        json={"answer": "叶子贴着地面"},
    )
    evidence_two = client.post(
        f"/api/v1/discoveries/{first['id']}/evidence",
        json={"answer": "我还看到了白色绒球"},
    )

    assert evidence_one.status_code == 200
    assert evidence_two.status_code == 200
    final_draft = evidence_two.json()
    assert final_draft["status"] == "ready_to_confirm"
    assert final_draft["current_question"] is None

    confirm = client.post(f"/api/v1/discoveries/{first['id']}/confirm")

    assert confirm.status_code == 200
    record = confirm.json()["record"]
    assert record["status"] == "confirmed"
    assert record["species_id"] == "plant-dandelion"


def test_discovery_can_be_saved_as_mystery_at_any_time(client: TestClient) -> None:
    """弱证据发现不必回答问题也能保存。"""
    start = client.post(
        "/api/v1/discoveries",
        json={
            "session_id": "mystery-api-session",
            "child_id": "mystery-api-child",
            "location": "community",
            "description": "墙角有亮亮的小东西",
        },
    )

    assert start.status_code == 200
    save = client.post(f"/api/v1/discoveries/{start.json()['id']}/save-mystery")

    assert save.status_code == 200
    record = save.json()["record"]
    assert record["status"] == "pending"
    assert record["species_id"] is None
