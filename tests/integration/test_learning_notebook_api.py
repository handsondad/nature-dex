"""从学习到孩子图鉴的完整本地持久化闭环。"""

import asyncio

import pytest
from fastapi.testclient import TestClient

from src.api.routes import app
from src.notebook.models import GuidePageContent
from src.observations.models import ObservationRecord


@pytest.fixture
def client():
    return TestClient(app)


def create_observation(client, child_id="child", status="confirmed"):
    response = client.post(
        "/api/v1/observations",
        json={
            "session_id": "journey",
            "child_id": child_id,
            "species_id": "plant-dandelion" if status == "confirmed" else None,
            "species": "蒲公英" if status == "confirmed" else "我看到的亮点",
            "location": "park",
            "note": "我看到叶子贴着地面",
            "status": status,
        },
    )
    assert response.status_code == 200
    record = response.json()["record"]
    record.pop("species")
    return record


def test_learning_to_wish_observation_and_editable_guide_survives_restart(
    client, isolated_api_agent
):
    learned = client.post(
        "/api/v1/learning/chat",
        json={"session_id": "journey", "message": "介绍蒲公英", "age_group": "7-9"},
    )
    assert learned.status_code == 200
    species_id = learned.json()["cards"][0]["species_id"]
    wish = client.post("/api/v1/children/child/wishes", json={"species_id": species_id})
    assert wish.status_code == 200
    assert wish.json()["knowledge"]["safety_notice"]
    assert wish.json()["knowledge"]["observation_prompt"]
    duplicate = client.post("/api/v1/children/child/wishes", json={"species_id": species_id})
    assert duplicate.json()["wish"] == wish.json()["wish"]
    assert client.get("/api/v1/children/child/guide").json() == []

    record = create_observation(client)
    made = client.post(
        "/api/v1/children/child/guide/pages",
        json={"observation_id": record["id"], "title": "我的小太阳", "child_text": "我找到它啦"},
    )
    assert made.status_code == 200
    page_id = made.json()["id"]
    edited = client.put(
        f"/api/v1/children/child/guide/pages/{page_id}",
        json={"title": "花坛里的小太阳", "child_text": "下次看看花有没有变化"},
    )
    assert edited.status_code == 200
    assert edited.json()["observation"] == record
    retry = client.post(
        "/api/v1/children/child/guide/pages",
        json={"observation_id": record["id"], "title": "不能覆盖孩子的修改"},
    )
    assert retry.json() == edited.json()

    isolated_api_agent()
    pages = client.get("/api/v1/children/child/guide").json()
    assert len(pages) == 1
    assert pages[0]["page"]["child_text"] == "下次看看花有没有变化"
    assert pages[0]["page"]["visibility"] == "private"
    assert pages[0]["knowledge"]["species_id"] == species_id
    assert len(client.get("/api/v1/children/child/wishes").json()) == 1
    records = client.get("/api/v1/children/child/observations").json()["records"]
    assert [ObservationRecord.model_validate(item) for item in records] == [
        ObservationRecord.model_validate(record)
    ]
    assert client.get("/api/v1/children/another/guide").json() == []
    assert client.get("/api/v1/children/another/wishes").json() == []

    assert client.delete(f"/api/v1/children/child/wishes/{species_id}").json() == {"removed": True}
    assert client.delete(f"/api/v1/children/child/guide/pages/{page_id}").json() == {
        "removed": True
    }
    assert client.get("/api/v1/children/child/guide").json() == []
    records = client.get("/api/v1/children/child/observations").json()["records"]
    assert [ObservationRecord.model_validate(item) for item in records] == [
        ObservationRecord.model_validate(record)
    ]


def test_mystery_guide_never_receives_confirmed_knowledge(client):
    record = create_observation(client, status="pending")
    response = client.post(
        "/api/v1/children/child/guide/pages",
        json={"observation_id": record["id"], "title": "神秘亮点"},
    )
    assert response.status_code == 200
    page = client.get("/api/v1/children/child/guide").json()[0]
    assert page["page"]["observation"]["status"] == "pending"
    assert page["page"]["observation"]["species_id"] is None
    assert page["knowledge"] is None


def test_guide_rejects_another_childs_observation_and_edits(client):
    record = create_observation(client)
    created = client.post(
        "/api/v1/children/child/guide/pages",
        json={"observation_id": record["id"], "title": "小花"},
    ).json()
    attempt = client.post(
        "/api/v1/children/other/guide/pages",
        json={"observation_id": record["id"], "title": "不是我的发现"},
    )
    assert attempt.status_code == 404
    assert (
        client.put(
            f"/api/v1/children/other/guide/pages/{created['id']}",
            json={"title": "不能修改"},
        ).status_code
        == 404
    )
    assert client.delete(f"/api/v1/children/other/guide/pages/{created['id']}").json() == {
        "removed": False
    }


@pytest.mark.parametrize(
    ("path", "payload"),
    [
        ("/learning/chat", {"session_id": " ", "message": "介绍蒲公英"}),
        ("/learning/chat", {"session_id": "s", "message": " "}),
        ("/learning/chat", {"session_id": "s", "message": "介绍蒲公英", "age_group": "3"}),
        ("/children/child/wishes", {"species_id": " "}),
        ("/children/child/guide/pages", {"observation_id": "missing", "title": " "}),
        (
            "/children/child/guide/pages",
            {"observation_id": "missing", "title": "小花", "visibility": "public"},
        ),
    ],
)
def test_learning_notebook_validates_external_input(client, path, payload):
    assert client.post("/api/v1" + path, json=payload).status_code == 422


def test_invalid_catalog_references_are_explicit_errors(client):
    assert (
        client.post("/api/v1/children/child/wishes", json={"species_id": "not-real"}).status_code
        == 404
    )
    assert (
        client.post(
            "/api/v1/observations",
            json={
                "session_id": "s",
                "species_id": "not-real",
                "species": "假名字",
                "location": "park",
            },
        ).status_code
        == 422
    )
    assert (
        client.post(
            "/api/v1/children/child/guide/pages",
            json={"observation_id": "not-real", "title": "不能凭空创建"},
        ).status_code
        == 404
    )


def test_guide_rejects_forged_evidence_and_unbounded_queries(client):
    record = create_observation(client)
    page = client.post(
        "/api/v1/children/child/guide/pages",
        json={"observation_id": record["id"], "title": "小花"},
    ).json()
    assert (
        client.put(
            f"/api/v1/children/child/guide/pages/{page['id']}",
            json={"title": "小花", "observation": {"status": "confirmed"}},
        ).status_code
        == 422
    )
    assert client.get("/api/v1/children/child/guide?limit=0").status_code == 422
    assert client.get("/api/v1/children/child/guide?limit=201").status_code == 422


def test_classification_browsing_and_legacy_chat_remain_available(client):
    cards = client.get("/api/v1/learning/species?kind=plant&age_group=4-6").json()
    assert cards and all(card["kind"] == "plant" for card in cards)
    filtered = client.get("/api/v1/learning/species", params={"category": "菊科草本"}).json()
    assert [card["species_id"] for card in filtered] == ["plant-dandelion"]
    assert client.get("/api/v1/learning/species?age_group=invalid").status_code == 422
    reply = client.post(
        "/api/v1/chat",
        json={"session_id": "legacy", "message": "介绍麻雀", "stream": False},
    ).json()
    assert "麻雀" in reply["response"]
    assert "今日推荐" in reply["response"]
    stream = client.post(
        "/api/v1/chat",
        json={"session_id": "stream", "message": "麻雀和燕子怎么区分"},
    )
    assert stream.status_code == 200
    assert "data: [DONE]\n\n" in stream.text
    for event in stream.text.strip().split("\n\n"):
        assert all(line.startswith("data: ") for line in event.splitlines())


def test_discovery_preserves_original_words_and_maximum_evidence(client):
    description = "黄色小花" + "花" * 496
    draft = client.post(
        "/api/v1/discoveries",
        json={
            "session_id": "s",
            "child_id": "child",
            "description": description,
            "location": "park",
        },
    ).json()
    for _ in range(2):
        response = client.post(
            f"/api/v1/discoveries/{draft['id']}/evidence",
            json={"answer": "我" * 500},
        )
        assert response.status_code == 200
    saved = client.post(f"/api/v1/discoveries/{draft['id']}/save-mystery")
    assert saved.status_code == 200
    assert description in saved.json()["record"]["note"]


@pytest.mark.asyncio
async def test_concurrent_retries_do_not_duplicate_wishes_or_pages(isolated_api_agent):
    agent = isolated_api_agent()
    wishes = await asyncio.gather(
        *(agent.notebook.add_wish("child", "plant-dandelion") for _ in range(5))
    )
    assert len({wish.wish.created_at for wish in wishes}) == 1
    record = await asyncio.to_thread(
        agent.create_observation,
        session_id="s",
        child_id="child",
        species="蒲公英",
        location="park",
    )
    pages = await asyncio.gather(
        *(
            agent.notebook.create_page("child", record["id"], GuidePageContent(title="小花"))
            for _ in range(5)
        )
    )
    assert len({page.id for page in pages}) == 1


@pytest.mark.asyncio
async def test_concurrent_discovery_save_creates_only_one_observation(isolated_api_agent):
    agent = isolated_api_agent()
    draft = agent.start_discovery(
        session_id="s", child_id="child", description="小小亮点", location="park"
    )
    results = await asyncio.gather(
        *(asyncio.to_thread(agent.save_discovery_as_mystery, draft.id) for _ in range(2)),
        return_exceptions=True,
    )
    assert sum(isinstance(result, dict) for result in results) == 1
    assert sum(isinstance(result, ValueError) for result in results) == 1
    records = await asyncio.to_thread(agent.get_observation_records, "child")
    assert len(records) == 1
