"""目录问答的事实边界与儿童安全。"""

import pytest

from src.agent.core import AgentCore
from src.agent.learning import LearningService
from src.agent.session import SessionStatus
from src.knowledge.species import get_default_catalog


def answer(message, **kwargs):
    return LearningService().answer(session_id="test", message=message, **kwargs)


@pytest.mark.parametrize("age_group", ["4-6", "7-9", "10+"])
def test_learning_uses_age_specific_catalog_facts(age_group):
    reply = answer("介绍蒲公英", age_group=age_group)
    species = get_default_catalog().get_by_id("plant-dandelion")
    assert reply.status == "answered"
    assert species.child_summary(age_group) in reply.answer
    assert reply.cards[0].species_id == species.id
    assert "不是外部权威文献" in reply.cards[0].source
    assert "safety" not in reply.evidence_fields


@pytest.mark.parametrize(
    ("message", "field", "expected"),
    [
        ("麻雀和燕子怎么区分", "identification_features", "剪刀形尾巴"),
        ("蒲公英在哪里能找到", "locations", "公园"),
        ("蒲公英属于什么科", "category", "菊科草本"),
        ("蜜蜂有什么特征", "identification_features", "黄黑条纹"),
        ("蜜蜂可以触摸吗", "safety_notice", "不拍打"),
    ],
)
def test_learning_answers_only_supported_fields(message, field, expected):
    reply = answer(message)
    assert reply.status == "answered"
    assert field in reply.evidence_fields
    assert expected in reply.answer
    assert "安全提醒" in reply.answer


@pytest.mark.parametrize("message", ["蒲公英为什么会飞", "麻雀吃什么", "蒲公英能治病吗"])
def test_learning_declares_knowledge_gap_instead_of_inventing_answer(message):
    reply = answer(message)
    assert reply.status == "knowledge_gap"
    assert reply.evidence_fields == []
    assert reply.cards


@pytest.mark.parametrize("message", ["你好", "大象是什么", "麻雀燕子蒲公英"])
def test_learning_requests_topic_for_unknown_or_too_many_species(message):
    reply = answer(message)
    assert reply.status == "needs_topic"
    assert reply.cards == []
    assert reply.evidence_fields == []


def test_learning_comparison_requires_two_species():
    reply = answer("麻雀怎么区分")
    assert reply.status == "needs_topic"
    assert "另一个名字" in reply.answer


def test_learning_does_not_confirm_a_wild_sighting():
    reply = answer("这是蒲公英吗")
    assert reply.status == "knowledge_gap"
    assert "确认" not in reply.answer


@pytest.mark.asyncio
async def test_learning_remembers_topics_without_leaking_across_sessions():
    agent = AgentCore()
    await agent.learn(session_id="a", message="介绍蒲公英")
    followup = await agent.learn(session_id="a", message="它在哪里能看到")
    other = await agent.learn(session_id="b", message="它在哪里能看到")
    assert followup.status == "answered"
    assert followup.cards[0].species_id == "plant-dandelion"
    assert other.status == "needs_topic"
    agent.terminate_session("a")
    reset = await agent.learn(session_id="a", message="它在哪里能看到")
    assert reset.status == "needs_topic"


@pytest.mark.asyncio
async def test_learning_unknown_new_topic_clears_previous_topic():
    agent = AgentCore()
    await agent.learn(session_id="a", message="介绍蒲公英")
    await agent.learn(session_id="a", message="介绍大象")
    reply = await agent.learn(session_id="a", message="它在哪里")
    assert reply.status == "needs_topic"


def test_learning_parent_view_and_low_confidence_keep_safety():
    reply = answer("介绍蜜蜂", role="parent", confidence=0.2)
    assert "家长端补充" in reply.answer
    assert "不太确定" in reply.answer
    assert "不拍打" in reply.answer


@pytest.mark.asyncio
async def test_chat_keeps_busy_guard_until_stream_is_consumed_or_closed():
    agent = AgentCore()
    stream = agent.chat("s", "介绍蒲公英")
    await anext(stream)
    with pytest.raises(RuntimeError, match="正在处理中"):
        await agent.learn(session_id="s", message="介绍麻雀")
    await stream.aclose()
    assert agent.get_or_create_session("s").status is SessionStatus.IDLE
