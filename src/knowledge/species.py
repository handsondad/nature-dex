"""结构化物种目录与可解释的 MVP 文字检索。"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Literal

SpeciesKind = Literal["plant", "animal", "fungus"]
AgeGroup = Literal["4-6", "7-9", "10+"]


@dataclass(frozen=True)
class Species:
    """可被识别、讲解和观察记录共用的物种知识实体。"""

    id: str
    name_zh: str
    scientific_name: str
    kind: SpeciesKind
    category: str
    child_summaries: dict[AgeGroup, str]
    parent_summary: str
    safety_notice: str
    identification_features: tuple[str, ...]
    clarifying_questions: tuple[str, ...]
    seasons: tuple[str, ...]
    locations: tuple[str, ...]
    search_terms: tuple[str, ...]
    observation_tasks: tuple[str, ...]
    risk_level: Literal["low", "medium", "high"] = "low"

    def child_summary(self, age_group: AgeGroup) -> str:
        """取得指定年龄层可理解的物种解释。"""
        return self.child_summaries[age_group]


@dataclass(frozen=True)
class IdentificationCandidate:
    """一个带证据的识别候选项。"""

    species: Species
    confidence: float
    distinguishing_features: tuple[str, ...]


@dataclass(frozen=True)
class TextSearchResult:
    """文字描述检索的完整结果。"""

    candidates: tuple[IdentificationCandidate, ...]
    clarifying_questions: tuple[str, ...]
    is_uncertain: bool


class SpeciesCatalog:
    """只读物种目录，负责从文本特征召回候选物种。"""

    def __init__(self, species: tuple[Species, ...]) -> None:
        """创建目录并验证物种标识唯一。"""
        ids = [item.id for item in species]
        if len(ids) != len(set(ids)):
            raise ValueError("物种 ID 不能重复")
        self._species = species
        self._by_id = {item.id: item for item in species}
        self._by_name = {item.name_zh: item for item in species}

    def list_species(self) -> tuple[Species, ...]:
        """返回全部物种，供后台数据校验和展示使用。"""
        return self._species

    def get_by_id(self, species_id: str) -> Species | None:
        """按稳定物种 ID 获取物种。"""
        return self._by_id.get(species_id)

    def get_by_name(self, name_zh: str) -> Species | None:
        """按中文展示名获取物种，用于兼容旧版观察记录请求。"""
        return self._by_name.get(name_zh)

    def search_text(
        self,
        query: str,
        *,
        limit: int = 3,
        location_type: str | None = None,
        season: str | None = None,
    ) -> TextSearchResult:
        """根据描述、地点和季节返回可解释的候选物种。

        该 MVP 算法只使用可审计的关键词证据，避免在无视觉模型时伪造图像识别结论。
        """
        normalized = query.strip().lower()
        if not normalized:
            return self._uncertain_result()

        context_terms = tuple(
            term.lower()
            for term in (location_type, season)
            if term is not None and term.strip()
        )
        ranked: list[tuple[int, Species, tuple[str, ...]]] = []
        for item in self._species:
            matched_terms = tuple(
                term for term in item.search_terms if term.lower() in normalized
            )
            context_matches = tuple(
                term
                for term in context_terms
                if term in item.locations or term in item.seasons
            )
            score = len(matched_terms) * 3 + len(context_matches)
            if score:
                evidence = matched_terms + context_matches
                ranked.append((score, item, evidence))

        if not ranked:
            return self._uncertain_result()

        ranked.sort(key=lambda value: (-value[0], value[1].name_zh))
        top_score = ranked[0][0]
        # 仅命中一个宽泛上下文词时，证据不足以形成可靠候选。
        if top_score < 3:
            return self._uncertain_result()

        candidates = tuple(
            IdentificationCandidate(
                species=item,
                confidence=round(min(0.9, 0.45 + score * 0.1), 2),
                distinguishing_features=item.identification_features,
            )
            for score, item, _ in ranked[:limit]
        )
        questions = candidates[0].species.clarifying_questions
        return TextSearchResult(
            candidates=candidates,
            clarifying_questions=questions,
            is_uncertain=candidates[0].confidence < 0.75,
        )

    @staticmethod
    def _uncertain_result() -> TextSearchResult:
        return TextSearchResult(
            candidates=(),
            clarifying_questions=(
                "它的颜色、大小和形状像什么？",
                "你是在草地、树上、水边，还是墙角看到它的？",
            ),
            is_uncertain=True,
        )


def _species(
    identifier: str,
    name: str,
    scientific_name: str,
    kind: SpeciesKind,
    category: str,
    features: tuple[str, ...],
    terms: tuple[str, ...],
    seasons: tuple[str, ...],
    locations: tuple[str, ...],
    safety: str = "只观察、不伤害；不要采摘或食用野外发现的生物。",
    risk_level: Literal["low", "medium", "high"] = "low",
) -> Species:
    """用统一质量基线创建物种样本。"""
    return Species(
        id=identifier,
        name_zh=name,
        scientific_name=scientific_name,
        kind=kind,
        category=category,
        child_summaries={
            "4-6": f"{name}是公园里常见的小伙伴，我们轻轻看、不打扰它。",
            "7-9": f"{name}有自己的特别样子。试着找找：{'、'.join(features[:2])}。",
            "10+": f"{name}属于{category}。识别时可结合{'、'.join(features[:2])}和出现环境判断。",
        },
        parent_summary=f"{name}（{scientific_name}）为常见{category}观察对象；应以形态和环境特征交叉确认。",
        safety_notice=safety,
        identification_features=features,
        clarifying_questions=(
            f"你能再看看它有没有{'、'.join(features[:2])}吗？",
            "它出现的地方是阳光充足还是潮湿阴凉？",
        ),
        seasons=seasons,
        locations=locations,
        search_terms=terms,
        observation_tasks=(f"记录{name}出现的位置和天气", f"画下或写下它的{'、'.join(features[:2])}"),
        risk_level=risk_level,
    )


_DEFAULT_SPECIES: tuple[Species, ...] = (
    _species("plant-dandelion", "蒲公英", "Taraxacum mongolicum", "plant", "菊科草本", ("黄色花", "贴地叶", "白色绒球"), ("蒲公英", "黄色小花", "白色绒球", "贴着地面", "草地"), ("spring", "summer"), ("park", "community")),
    _species("plant-clover", "白车轴草", "Trifolium repens", "plant", "豆科草本", ("三片小叶", "白色球形花"), ("白车轴草", "三片叶", "三叶草", "白色小花"), ("spring", "summer"), ("park", "community")),
    _species("plant-chinese-rose", "月季", "Rosa chinensis", "plant", "蔷薇科灌木", ("重瓣花", "枝条有刺"), ("月季", "玫瑰", "重瓣花", "刺"), ("spring", "summer", "autumn"), ("park", "community"), "枝条可能有刺，只看不摸；不要采摘。", "medium"),
    _species("plant-osmanthus", "桂花", "Osmanthus fragrans", "plant", "木犀科乔木", ("小小四瓣花", "香味明显"), ("桂花", "香", "小花", "四瓣"), ("autumn",), ("park", "community")),
    _species("plant-ginkgo", "银杏", "Ginkgo biloba", "plant", "银杏科乔木", ("扇形叶", "秋天变黄"), ("银杏", "扇形叶", "黄叶"), ("autumn",), ("park", "community"), "不要触碰或食用掉落果实，观察后洗手。", "medium"),
    _species("plant-maple", "鸡爪槭", "Acer palmatum", "plant", "无患子科乔木", ("掌状裂叶", "秋叶变红"), ("枫叶", "红叶", "掌状叶", "鸡爪槭"), ("autumn",), ("park",)),
    _species("plant-willow", "垂柳", "Salix babylonica", "plant", "杨柳科乔木", ("细长叶", "枝条下垂"), ("柳树", "垂柳", "长叶", "下垂枝条"), ("spring", "summer"), ("park", "water")),
    _species("plant-lotus", "荷花", "Nelumbo nucifera", "plant", "莲科水生植物", ("圆大叶", "水面开花"), ("荷花", "莲花", "池塘花", "圆叶"), ("summer",), ("park", "water"), "在水边观察要有家长陪同，不靠近深水。", "medium"),
    _species("plant-reed", "芦苇", "Phragmites australis", "plant", "禾本科草本", ("高高的杆", "羽毛状花序"), ("芦苇", "水边草", "羽毛花"), ("autumn",), ("water", "park"), "在水边观察要有家长陪同，不进入湿地深处。", "medium"),
    _species("plant-plantain", "车前草", "Plantago asiatica", "plant", "车前科草本", ("贴地叶丛", "长长花穗"), ("车前草", "贴地叶", "长花穗"), ("spring", "summer"), ("park", "community")),
    _species("animal-sparrow", "麻雀", "Passer montanus", "animal", "雀形目鸟类", ("棕色小鸟", "地面蹦跳"), ("麻雀", "小鸟", "蹦跳", "棕色鸟"), ("spring", "summer", "autumn", "winter"), ("park", "community"), "远距离观察，不追逐、不投喂，也不触碰鸟巢。"),
    _species("animal-swallow", "燕子", "Hirundo rustica", "animal", "雀形目鸟类", ("剪刀形尾巴", "飞行灵活"), ("燕子", "剪刀尾", "飞得快", "低空飞"), ("spring", "summer"), ("park", "community"), "远距离观察，不靠近鸟巢或触碰幼鸟。"),
    _species("animal-magpie", "喜鹊", "Pica serica", "animal", "鸦科鸟类", ("黑白羽毛", "长尾巴"), ("喜鹊", "黑白鸟", "长尾鸟"), ("spring", "summer", "autumn", "winter"), ("park", "community"), "远距离观察，不靠近鸟巢。"),
    _species("animal-rock-pigeon", "珠颈斑鸠", "Streptopelia chinensis", "animal", "鸠鸽科鸟类", ("颈部黑白斑纹", "灰褐身体"), ("斑鸠", "珠颈斑鸠", "脖子斑点", "灰褐鸟"), ("spring", "summer", "autumn", "winter"), ("park", "community"), "远距离观察，不投喂。"),
    _species("animal-squirrel", "松鼠", "Sciurus vulgaris", "animal", "松鼠科哺乳动物", ("蓬松长尾巴", "会爬树"), ("松鼠", "大尾巴", "爬树"), ("spring", "summer", "autumn"), ("park",), "不投喂、不追赶，也不要尝试触摸野生动物。", "medium"),
    _species("animal-snail", "蜗牛", "Bradybaena similaris", "animal", "腹足纲软体动物", ("螺旋壳", "亮亮爬痕"), ("蜗牛", "壳", "亮亮痕迹", "潮湿"), ("spring", "summer", "autumn"), ("park", "community"), "不徒手抓取；观察后用肥皂洗手。", "medium"),
    _species("animal-earthworm", "蚯蚓", "Pheretima aspergillum", "animal", "环节动物", ("细长分节身体", "雨后土里出现"), ("蚯蚓", "雨后", "土里", "细长虫"), ("spring", "summer", "autumn"), ("park", "community"), "不抓取，观察土壤后洗手。", "medium"),
    _species("animal-ladybug", "瓢虫", "Coccinellidae", "animal", "鞘翅目昆虫", ("圆圆甲壳", "红色黑点"), ("瓢虫", "红色黑点", "小甲虫"), ("spring", "summer"), ("park", "community"), "不捏、不抓，观察后洗手。", "medium"),
    _species("animal-butterfly", "菜粉蝶", "Pieris rapae", "animal", "鳞翅目昆虫", ("白色翅膀", "翅尖有黑斑"), ("蝴蝶", "白色翅膀", "黑斑", "菜粉蝶"), ("spring", "summer", "autumn"), ("park", "community"), "不追逐、不抓捕，远距离观察。"),
    _species("animal-dragonfly", "蜻蜓", "Anisoptera", "animal", "蜻蜓目昆虫", ("两对透明翅", "细长身体"), ("蜻蜓", "透明翅膀", "水边飞虫"), ("summer", "autumn"), ("park", "water"), "在水边观察需要家长陪同，不抓捕昆虫。", "medium"),
    _species("animal-ant", "蚂蚁", "Formicidae", "animal", "膜翅目昆虫", ("六条腿", "排队活动"), ("蚂蚁", "排队", "小黑虫"), ("spring", "summer", "autumn"), ("park", "community"), "不触摸蚂蚁或蚁巢，避免被叮咬。", "medium"),
    _species("animal-bee", "蜜蜂", "Apis cerana", "animal", "膜翅目昆虫", ("黄黑条纹", "在花间飞"), ("蜜蜂", "黄黑条纹", "花间", "嗡嗡"), ("spring", "summer", "autumn"), ("park", "community"), "保持距离，不拍打、不触摸；若被蜇伤应立即告诉家长。", "high"),
    _species("animal-cicada", "蝉", "Cicadidae", "animal", "半翅目昆虫", ("夏天鸣叫", "透明翅膀"), ("蝉", "知了", "夏天叫", "透明翅膀"), ("summer",), ("park", "community"), "只听和看，不抓捕。"),
    _species("animal-gecko", "壁虎", "Gekko japonicus", "animal", "爬行动物", ("趾端吸盘", "夜间墙上活动"), ("壁虎", "墙上", "夜晚", "小蜥蜴"), ("spring", "summer", "autumn"), ("community", "park"), "不触摸野生爬行动物，远距离观察。", "medium"),
    _species("animal-frog", "黑斑侧褶蛙", "Pelophylax nigromaculatus", "animal", "两栖动物", ("绿色或褐色皮肤", "善跳跃"), ("青蛙", "蛙", "池塘", "跳跃"), ("spring", "summer"), ("water", "park"), "不抓捕两栖动物；水边观察需要家长陪同。", "medium"),
    _species("fungus-inkcap", "鬼伞", "Coprinus comatus", "fungus", "真菌", ("白色细长菌盖", "成熟后变黑"), ("蘑菇", "菌", "白色菌盖", "草地蘑菇"), ("summer", "autumn"), ("park", "community"), "任何野生蘑菇都不能采摘或食用；只能在家长陪同下远距离观察。", "high"),
    _species("plant-moss", "葫芦藓", "Funaria hygrometrica", "plant", "苔藓植物", ("小小绿绒毯", "潮湿处生长"), ("苔藓", "绿绒", "潮湿墙角"), ("spring", "summer", "autumn", "winter"), ("park", "community")),
    _species("plant-ivy", "常春藤", "Hedera helix", "plant", "五加科藤本", ("常绿叶", "攀爬生长"), ("常春藤", "爬墙植物", "常绿叶"), ("spring", "summer", "autumn", "winter"), ("park", "community")),
    _species("plant-pine", "雪松", "Cedrus deodara", "plant", "松科乔木", ("针形叶", "树冠像宝塔"), ("松树", "针叶", "雪松", "宝塔树"), ("spring", "summer", "autumn", "winter"), ("park", "community")),
    _species("plant-camphor", "香樟", "Cinnamomum camphora", "plant", "樟科乔木", ("揉叶有香味", "常绿树"), ("香樟", "樟树", "香味叶", "常绿"), ("spring", "summer", "autumn", "winter"), ("park", "community"), "不要揉搓或食用树叶，闻到气味后洗手。", "medium"),
    _species("plant-privet", "女贞", "Ligustrum lucidum", "plant", "木犀科灌木", ("椭圆革质叶", "秋冬有深色果"), ("女贞", "深色果", "灌木", "椭圆叶"), ("spring", "summer", "autumn", "winter"), ("park", "community"), "不要采食果实。", "medium"),
    _species("animal-myna", "乌鸫", "Turdus merula", "animal", "雀形目鸟类", ("黑色羽毛", "橙黄色嘴"), ("乌鸫", "黑鸟", "黄嘴鸟"), ("spring", "summer", "autumn", "winter"), ("park", "community"), "远距离观察，不投喂。"),
)

_DEFAULT_CATALOG = SpeciesCatalog(_DEFAULT_SPECIES)


def get_default_catalog() -> SpeciesCatalog:
    """返回进程内共享的只读 MVP 物种目录。"""
    return _DEFAULT_CATALOG
