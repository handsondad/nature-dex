"""对话体验与推荐规则模块。"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import UTC, datetime
from typing import Any, Literal
from uuid import uuid4

RoleType = Literal["child", "parent"]


@dataclass(frozen=True)
class SpeciesProfile:
    """物种知识卡片。"""

    name: str
    child_summary: str
    parent_summary: str
    safety_notice: str
    seasons: tuple[str, ...]
    locations: tuple[str, ...]
    tasks: tuple[str, ...]
    risk_level: str = "low"


# 规则知识库：键为物种中文名，值为该物种在 child/parent 视图下的解释与安全信息。
_SPECIES_PROFILES: dict[str, SpeciesProfile] = {
    "蒲公英": SpeciesProfile(
        name="蒲公英",
        child_summary="蒲公英像小太阳，开完黄花后会变成白色绒球。",
        parent_summary="蒲公英（Taraxacum）常见于草地和路边，识别点是贴地莲座叶与后期白色冠毛。",
        safety_notice="仅观察，不要随意采摘或食用野外植物。",
        seasons=("spring", "summer"),
        locations=("park", "community"),
        tasks=("观察它是否从黄花变成白绒球", "记录今天看到它的地点"),
    ),
    "蜗牛": SpeciesProfile(
        name="蜗牛",
        child_summary="蜗牛喜欢潮湿地方，慢慢爬，常会留下亮亮的痕迹。",
        parent_summary="蜗牛多在湿润环境活动，建议引导孩子观察触角和爬行轨迹，不直接接触。",
        safety_notice="不要徒手抓取，观察后请洗手。",
        seasons=("spring", "summer", "autumn"),
        locations=("park", "community"),
        tasks=("看看它爬过后有没有亮亮的痕迹", "记录它是在墙边还是草地"),
    ),
    "麻雀": SpeciesProfile(
        name="麻雀",
        child_summary="麻雀小小的、爱蹦跳，常在地面找食物。",
        parent_summary="麻雀体型较小、尾短，群居常见于居民区，可与燕子做飞行方式对比观察。",
        safety_notice="远距离观察，不追逐、不投喂陌生食物。",
        seasons=("spring", "summer", "autumn", "winter"),
        locations=("park", "community"),
        tasks=("观察它是在地上跳还是在空中滑翔", "听听它的叫声是否短促"),
    ),
    "燕子": SpeciesProfile(
        name="燕子",
        child_summary="燕子飞得很快，尾巴像小剪刀。",
        parent_summary="家燕尾叉明显，飞行灵活，常在傍晚低空捕食昆虫，易与麻雀混淆。",
        safety_notice="不靠近鸟巢，不触碰幼鸟。",
        seasons=("spring", "summer"),
        locations=("community", "park"),
        tasks=("观察尾巴是不是剪刀形", "记录它飞得高还是低"),
    ),
}

# 触发高风险提醒的关键词集合。
_HIGH_RISK_KEYWORDS = ("有毒", "采摘", "食用", "蘑菇", "蛇", "流浪狗", "流浪猫", "昆虫叮咬")


def detect_species(message: str) -> str | None:
    """从消息中识别已知物种。

    Args:
        message: 用户消息文本。

    Returns:
        识别到的物种名称；未识别返回 None。
    """
    for species in _SPECIES_PROFILES:
        if species in message:
            return species
    return None


def build_safety_reminders(
    message: str,
    confidence: float | None,
    species: str | None,
) -> list[str]:
    """生成安全提醒列表。

    Args:
        message: 用户消息文本。
        confidence: 识别置信度（0-1）。
        species: 识别到的物种名称。

    Returns:
        安全提醒文本列表。
    """
    reminders: list[str] = []
    if confidence is not None and confidence < 0.75:
        reminders.append("我还不太确定当前识别结果，请继续观察关键特征再判断。")

    if any(keyword in message for keyword in _HIGH_RISK_KEYWORDS):
        reminders.append("涉及潜在风险场景，请在家长陪同下远距离观察，不触碰、不采食。")

    if species is not None:
        profile = _SPECIES_PROFILES.get(species)
        if profile is not None and (profile.risk_level != "low" or profile.safety_notice):
            reminders.append(profile.safety_notice)

    if not reminders:
        reminders.append("安全提醒：只观察、不伤害、不采食。")

    return reminders


def build_role_summary(species: str | None, role: RoleType) -> str:
    """构建角色化解释文本。

    Args:
        species: 物种名称，允许为空。
        role: 角色类型（child/parent）。

    Returns:
        针对角色定制的解释文本。
    """
    if species is None:
        base = "我先根据你描述的颜色、形状和地点来猜测物种。"
        if role == "parent":
            return (
                f"{base} 家长补充：请引导孩子记录叶形、体型、活动环境等可验证特征，"
                "避免在信息不足时给出确定结论。"
            )
        return f"{base} 你可以再观察叶子、花朵或行动方式，我会继续帮你判断。"

    profile = _SPECIES_PROFILES[species]
    if role == "parent":
        return (
            f"孩子端解释：{profile.child_summary} "
            f"家长端补充：{profile.parent_summary} "
            f"家长延伸活动：{profile.tasks[0]}。"
        )
    return f"{profile.child_summary} 观察任务：{profile.tasks[0]}。"


def build_recommendations(
    observations: list[dict[str, Any]],
    season: str | None,
    location: str | None,
    limit: int = 3,
) -> dict[str, Any]:
    """基于观察记录生成推荐结果。

    Args:
        observations: 观察记录列表。
        season: 季节标签。
        location: 地点标签。
        limit: 推荐数量上限。

    Returns:
        包含 today_species、today_tasks 和 rationale 的推荐字典。
    """
    season_tag = (season or "").lower()
    location_tag = (location or "").lower()

    seen_species = {
        str(item.get("species", "")).strip()
        for item in observations
        if str(item.get("species", "")).strip()
    }
    seen_species.discard("")

    ranked: list[SpeciesProfile] = []
    for profile in _SPECIES_PROFILES.values():
        season_ok = not season_tag or season_tag in profile.seasons
        location_ok = not location_tag or location_tag in profile.locations
        if season_ok and location_ok:
            ranked.append(profile)

    # 优先推荐尚未记录的物种。
    ranked.sort(key=lambda profile: (profile.name in seen_species, profile.name))
    selected = ranked[:limit]

    tasks: list[str] = []
    for profile in selected:
        tasks.extend(profile.tasks[:1])
    tasks = tasks[:limit]

    rationale = [
        f"根据季节={season or '未指定'}、地点={location or '未指定'}进行基础规则匹配。",
        f"已记录物种数量：{len(seen_species)}。",
    ]
    if {"麻雀", "燕子"} & seen_species:
        rationale.append("建议复习易混淆物种：麻雀 vs 燕子。")

    return {
        "today_species": [
            {
                "name": profile.name,
                "child_summary": profile.child_summary,
                "parent_summary": profile.parent_summary,
                "safety_notice": profile.safety_notice,
            }
            for profile in selected
        ],
        "today_tasks": tasks,
        "rationale": rationale,
    }


def make_observation_record(
    *,
    species: str,
    location: str,
    note: str | None,
    image_url: str | None,
    status: str,
) -> dict[str, Any]:
    """创建观察记录。

    Args:
        species: 物种名称。
        location: 观察地点。
        note: 备注文本。
        image_url: 图片 URL。
        status: 记录状态。

    Returns:
        包含 id、species、location 等字段的观察记录字典。
    """
    return {
        "id": f"obs-{uuid4().hex}",
        "species": species,
        "location": location,
        "note": note or "",
        "image_url": image_url or "",
        "status": status,
        "observed_at": datetime.now(tz=UTC).isoformat(),
    }
