"""观察记录 API 集成测试。"""

from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from src.api.routes import app


@pytest.fixture
def client() -> TestClient:
    """创建 API 测试客户端。"""
    return TestClient(app)


def test_observation_api_links_record_to_child_and_lists_it(client: TestClient) -> None:
    """保存后应能按儿童档案读取同一条结构化记录。"""
    create_response = client.post(
        "/api/v1/observations",
        json={
            "session_id": "observation-api-session",
            "child_id": "child-observation-api",
            "species_id": "plant-dandelion",
            "location": "park",
            "note": "叶子贴着地面",
        },
    )

    assert create_response.status_code == 200
    record = create_response.json()["record"]
    assert record["child_id"] == "child-observation-api"
    assert record["species_id"] == "plant-dandelion"
    assert record["species_name"] == "蒲公英"

    list_response = client.get("/api/v1/children/child-observation-api/observations")

    assert list_response.status_code == 200
    records = list_response.json()["records"]
    assert len(records) == 1
    assert records[0]["id"] == record["id"]

    recommendation_response = client.post(
        "/api/v1/recommendations",
        json={
            "session_id": "another-session",
            "child_id": "child-observation-api",
            "season": "spring",
            "location": "park",
        },
    )

    assert recommendation_response.status_code == 200
    assert "已记录物种数量：1。" in recommendation_response.json()["rationale"]


def test_confirmed_observation_rejects_unknown_species_id(client: TestClient) -> None:
    """已确认记录不能关联不存在的物种。"""
    response = client.post(
        "/api/v1/observations",
        json={
            "session_id": "invalid-species-session",
            "child_id": "child-invalid-species",
            "species_id": "unknown-species",
            "location": "park",
        },
    )

    assert response.status_code == 422
