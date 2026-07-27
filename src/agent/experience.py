"""对话体验与推荐规则模块。"""

from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Literal
from uuid import uuid4

from src.knowledge.species import Species, get_default_catalog

RoleType = Literal["child", "parent"]

_HIGH_RISK_KEYWORDS = ("有毒", "采摘", "食用", "蘑菇", "蛇", "流浪狗", "流浪猫", "昆虫叮咬")


def detect_species(message: str) -> str | None:
    """从消息中识别已知物种。

    Args:
        message: 用户消息文本。

    Returns:
        识别到的物种名称；未识别返回 None。
    """
    for species in get_default_catalog().list_species():
        if species.name_zh in message:
            return species.name_zh
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
        profile = _get_species_by_name(species)
        if profile is not None:
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

    profile = _get_species_by_name(species)
    if profile is None:
        return build_role_summary(None, role)
    if role == "parent":
        return (
            f"孩子端解释：{profile.child_summary('7-9')} "
            f"家长端补充：{profile.parent_summary} "
            f"家长延伸活动：{profile.observation_tasks[0]}。"
        )
    return f"{profile.child_summary('7-9')} 观察任务：{profile.observation_tasks[0]}。"


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

    ranked: list[Species] = []
    for profile in get_default_catalog().list_species():
        season_ok = not season_tag or season_tag in profile.seasons
        location_ok = not location_tag or location_tag in profile.locations
        if season_ok and location_ok:
            ranked.append(profile)

    # 优先推荐尚未记录的物种。
    ranked.sort(key=lambda profile: (profile.name_zh in seen_species, profile.name_zh))
    selected = ranked[:limit]

    tasks: list[str] = []
    for profile in selected:
        tasks.extend(profile.observation_tasks[:1])
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
                "name": profile.name_zh,
                "child_summary": profile.child_summary("7-9"),
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
        "observed_at": datetime.now(tz=timezone.utc).isoformat(),
    }


def _get_species_by_name(name: str) -> Species | None:
    """按中文名查找目录物种，兼容遗留体验函数。"""
    return next(
        (item for item in get_default_catalog().list_species() if item.name_zh == name),
        None,
    )
