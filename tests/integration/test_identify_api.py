"""文字物种识别 API 集成测试。"""

from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from src.api.routes import app


@pytest.fixture
def client() -> TestClient:
    """创建 API 测试客户端。"""
    return TestClient(app)


def test_identify_text_returns_child_safe_candidates(client: TestClient) -> None:
    """文字识别应返回候选、置信度、儿童解释与安全提醒。"""
    response = client.post(
        "/api/v1/identify/text",
        json={
            "query": "在公园草地看到黄色小花，叶子贴着地面",
            "age_group": "7-9",
            "location_type": "park",
            "limit": 3,
        },
    )

    assert response.status_code == 200
    data = response.json()
    assert data["is_uncertain"] is False
    assert data["candidates"][0]["species"]["name_zh"] == "蒲公英"
    assert 0 < data["candidates"][0]["confidence"] < 1
    assert data["candidates"][0]["child_explanation"]
    assert data["candidates"][0]["safety_notice"]
    assert data["clarifying_questions"]


def test_identify_text_marks_weak_evidence_as_uncertain(client: TestClient) -> None:
    """弱描述必须明确返回不确定状态和澄清问题。"""
    response = client.post(
        "/api/v1/identify/text",
        json={"query": "不知道是什么", "age_group": "4-6"},
    )

    assert response.status_code == 200
    data = response.json()
    assert data["is_uncertain"] is True
    assert data["candidates"] == []
    assert data["clarifying_questions"]
