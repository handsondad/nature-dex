"""基于受控目录的学习对话，不补写目录外的事实。"""

from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field

from src.agent.experience import build_safety_reminders
from src.knowledge.species import AgeGroup, Species, SpeciesCatalog, get_default_catalog

_SEASONS = {"spring": "春季", "summer": "夏季", "autumn": "秋季", "winter": "冬季"}
_LOCATIONS = {"park": "公园", "community": "小区", "water": "水边（需成人陪同）"}


class LearningCard(BaseModel):
    """可阅读、可加入寻找清单的目录知识卡。"""

    species_id: str = Field(description="稳定物种 ID，不表示野外识别已确认")
    name: str = Field(description="目录名称")
    scientific_name: str = Field(description="目录中的学名或分类单元名")
    kind: str = Field(description="动物、植物或真菌")
    category: str = Field(description="现有目录的分类标签，并非完整分类树")
    explanation: str = Field(description="分龄解释或家长补充")
    features: list[str] = Field(description="可观察特征")
    seasons: list[str] = Field(description="目录记载的观察季节，不保证一定遇见")
    locations: list[str] = Field(description="可观察的环境类型，不是具体坐标")
    observation_prompt: str = Field(description="一个可跳过的观察建议")
    safety_notice: str = Field(description="不可省略的安全边界")
    source: str = Field(description="当前资料来源及其局限")


class LearningReply(BaseModel):
    """结构化学习答复，兼容文字聊天与物种卡展示。"""

    session_id: str = Field(description="对话会话标识")
    status: Literal["answered", "needs_topic", "knowledge_gap"] = Field(
        description="是否有直接支持当前问题的目录事实"
    )
    answer: str = Field(description="学习正文及安全提示")
    cards: list[LearningCard] = Field(description="正文对应的目录知识卡")
    evidence_fields: list[str] = Field(description="正文使用的目录字段，而非外部权威引文")


def build_learning_card(
    species: Species,
    age_group: AgeGroup = "7-9",
    role: Literal["child", "parent"] = "child",
) -> LearningCard:
    """从唯一事实源构建知识卡，不伪造食性、生态关系或分类层级。"""
    explanation = species.child_summary(age_group)
    if role == "parent":
        explanation += f" 家长端补充：{species.parent_summary}"
    return LearningCard(
        species_id=species.id,
        name=species.name_zh,
        scientific_name=species.scientific_name,
        kind=species.kind,
        category=species.category,
        explanation=explanation,
        features=list(species.identification_features),
        seasons=[_SEASONS[item] for item in species.seasons],
        locations=[_LOCATIONS[item] for item in species.locations],
        observation_prompt=species.observation_tasks[0],
        safety_notice=species.safety_notice,
        source=f"nature-dex 内置样本目录：{species.id}；不是外部权威文献。",
    )


class LearningService:
    """提供可审计的介绍、比较、特征、季节、环境和分类问答基线。"""

    def __init__(self, catalog: SpeciesCatalog | None = None) -> None:
        """指定学习使用的受控物种目录。"""
        self._catalog = catalog or get_default_catalog()

    def answer(
        self,
        *,
        session_id: str,
        message: str,
        age_group: AgeGroup = "7-9",
        role: Literal["child", "parent"] = "child",
        topic_ids: tuple[str, ...] = (),
        confidence: float | None = None,
    ) -> LearningReply:
        """只回答有直接字段支持的问题，允许指代上一轮话题。"""
        named = [item for item in self._catalog.list_species() if item.name_zh in message]
        if not named and (
            message.startswith(("它", "它们"))
            or message in ("再讲讲", "继续", "怎么区分", "有什么不同")
        ):
            named = [
                item
                for species_id in topic_ids
                if (item := self._catalog.get_by_id(species_id)) is not None
            ]
        if len(named) > 2:
            return LearningReply(
                session_id=session_id,
                status="needs_topic",
                answer="我们先选一两种来认识。你想先了解哪一种？只观察、不触碰、不采食。",
                cards=[],
                evidence_fields=[],
            )
        cards = [build_learning_card(item, age_group, role) for item in named]
        reminders = build_safety_reminders(message, confidence, named[0].name_zh if named else None)
        reminders.extend(card.safety_notice for card in cards)
        safety = "\n安全提醒：" + "；".join(dict.fromkeys(reminders))
        if not cards:
            return LearningReply(
                session_id=session_id,
                status="needs_topic",
                answer=(
                    "你想认识哪一种动植物？可以问“麻雀和燕子怎么区分”。"
                    "如果不知道名字，可以去发现台描述特征，也可以先记成神秘发现。" + safety
                ),
                cards=[],
                evidence_fields=[],
            )

        # 机制、食性等尚无专门资料；宁可留下问题，也不以通用介绍冒充答案。
        if any(word in message for word in ("为什么", "为何", "吃什么", "寿命", "多久", "原理")):
            status: Literal["answered", "knowledge_gap"] = "knowledge_gap"
            body = (
                "这个问题的答案还没有收录在我的资料里，我不能猜。可以先留下问题，和大人一起查证。"
            )
            fields: list[str] = []
        elif any(word in message for word in ("区别", "区分", "不同", "比较")):
            if len(cards) != 2:
                return LearningReply(
                    session_id=session_id,
                    status="needs_topic",
                    answer="你想把它和哪一种比较？告诉我另一个名字吧。" + safety,
                    cards=cards,
                    evidence_fields=[],
                )
            status = "answered"
            body = "\n".join(f"{card.name}：{'、'.join(card.features)}。" for card in cards)
            fields = ["identification_features"]
        elif any(word in message for word in ("哪里", "哪儿", "地方", "季节", "什么时候")):
            status = "answered"
            body = "\n".join(
                f"{card.name}：可以在{'、'.join(card.seasons)}，"
                f"到{'、'.join(card.locations)}留意它；不保证一定能遇见。"
                for card in cards
            )
            fields = ["seasons", "locations"]
        elif any(word in message for word in ("分类", "什么科", "家族", "属于")):
            status = "answered"
            body = "\n".join(f"{card.name}的目录分类标签是“{card.category}”。" for card in cards)
            fields = ["category"]
        elif any(word in message for word in ("特征", "样子", "辨认", "怎么认")):
            status = "answered"
            body = "\n".join(f"{card.name}：{'、'.join(card.features)}。" for card in cards)
            fields = ["identification_features"]
        elif any(word in message for word in ("安全", "触摸", "采摘", "食用", "能吃", "有毒")):
            status = "answered"
            body = "\n".join(f"{card.name}：{card.safety_notice}" for card in cards)
            fields = ["safety_notice"]
        elif any(word in message for word in ("介绍", "认识", "了解", "讲讲", "是什么")) or (
            message.strip("？?。！! ") in {item.name_zh for item in named}
        ):
            status = "answered"
            body = "\n".join(card.explanation for card in cards)
            fields = ["child_summaries" if role == "child" else "parent_summary"]
        else:
            status = "knowledge_gap"
            body = (
                "我目前不能依据目录直接回答这个问题。"
                "可以先看看知识卡，或问它的特征、分类和观察环境。"
            )
            fields = []
        if role == "parent" and "家长端补充" not in body:
            body += "\n" + "\n".join(f"家长端补充：{item.parent_summary}" for item in named)
        return LearningReply(
            session_id=session_id,
            status=status,
            answer=body + safety,
            cards=cards,
            evidence_fields=fields,
        )
