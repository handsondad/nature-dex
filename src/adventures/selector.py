"""根据真实观察情境选择今日微冒险。"""

from __future__ import annotations

from typing import Any

from src.adventures.models import ExplorationAdventure

_ADVENTURES: tuple[ExplorationAdventure, ...] = (
    ExplorationAdventure(
        id="spring-dandelion-change",
        title="寻找会变装的小太阳",
        kind="discover",
        prompt="在草地边找黄色的小花，看看它会不会有白色绒球朋友。",
        action="停下来观察一朵花和它旁边的叶子。",
        evidence_hint="你只要发现黄色小花、贴地叶或白色绒球中的一个线索就很好。",
        safety_notice="只用眼睛看，不采摘；让花和小虫都留在原来的地方。",
        fallback_prompt="没看到花也没关系：找一片边缘不一样的叶子，记成今天的神秘发现。",
        rationale="春天的公园草地容易遇到会变化的蒲公英。",
        target_species_ids=("plant-dandelion",),
        seasons=("spring",),
        locations=("park", "community"),
        priority=10,
    ),
    ExplorationAdventure(
        id="spring-three-leaf-clue",
        title="三片叶子的秘密",
        kind="discover",
        prompt="找找看，草地上有没有三片小叶子挨在一起。",
        action="数一数同一根小茎上连着几片叶子。",
        evidence_hint="发现三片小叶或白色小圆花，就是一个好线索。",
        safety_notice="蹲下来看看就好，不拔起植物，也不放进嘴里。",
        fallback_prompt="没找到三片叶？找一片你觉得形状最特别的叶子，画下它的轮廓。",
        rationale="你已经找过黄色小花，今天试试从叶子开始发现植物。",
        target_species_ids=("plant-clover",),
        seasons=("spring", "summer"),
        locations=("park", "community"),
        priority=20,
    ),
    ExplorationAdventure(
        id="all-season-sparrow-listen",
        title="听一听地面上的小脚步",
        kind="listen",
        prompt="在安全的路边或公园停 10 秒，看看有没有小鸟在地上蹦跳。",
        action="远远观察小鸟是在地上跳，还是在空中飞。",
        evidence_hint="看到棕色小鸟、短短的跳跃，或听到连续短叫声都可以记录。",
        safety_notice="站在成人身边，远距离看鸟；不追赶、不投喂，也不靠近鸟巢。",
        fallback_prompt="没遇到小鸟？听听风吹树叶的声音，用一句话形容它。",
        rationale="麻雀在小区和公园一年四季都可能出现。",
        target_species_ids=("animal-sparrow",),
        seasons=("spring", "summer", "autumn", "winter"),
        locations=("park", "community"),
        priority=30,
    ),
    ExplorationAdventure(
        id="summer-water-wing-watch",
        title="透明翅膀的远距离观察",
        kind="discover",
        prompt="和家长在水边远远找找，会不会有细长身体、透明翅膀的小访客。",
        action="站在安全区域，观察它飞得高还是低。",
        evidence_hint="透明翅膀或细长身体都是有用线索。",
        safety_notice="必须有家长陪同，不靠近水边、不抓捕昆虫。",
        fallback_prompt="不去水边也可以：在树荫下找一片被虫子咬出小洞的叶子。",
        rationale="夏秋的水边可能观察到蜻蜓，安全距离最重要。",
        target_species_ids=("animal-dragonfly",),
        seasons=("summer", "autumn"),
        locations=("park", "water"),
        priority=10,
    ),
)


def select_today_adventure(
    *,
    observations: list[dict[str, Any]],
    season: str | None,
    location_type: str | None,
    exclude_adventure_id: str | None = None,
) -> ExplorationAdventure | None:
    """选择一项安全、可解释且可跳过的今日探索任务。

    无匹配任务时返回 ``None``，由界面引导孩子进行自由发现，而不是制造未完成压力。
    """
    season_tag = (season or "").lower()
    location_tag = (location_type or "").lower()
    observed_species_ids = {
        str(item.get("species_id", "")).strip()
        for item in observations
        if str(item.get("species_id", "")).strip()
    }

    eligible = [
        adventure
        for adventure in _ADVENTURES
        if adventure.id != exclude_adventure_id
        and (not season_tag or season_tag in adventure.seasons)
        and (not location_tag or location_tag in adventure.locations)
    ]
    if not eligible:
        return None

    eligible.sort(
        key=lambda adventure: (
            bool(set(adventure.target_species_ids) & observed_species_ids),
            adventure.priority,
            adventure.id,
        )
    )
    return eligible[0]
