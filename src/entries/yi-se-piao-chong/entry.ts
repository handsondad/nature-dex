import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yi-se-piao-chong",
  name: "异色瓢虫",
  pinyin: "yì sè piáo chóng",
  scientific: "Harmonia axyridis",
  kind: "animal",
  // 背上的花纹变化太多，要拍到白色前胸上的 M 形黑斑和方肩膀再确认
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "鞘翅目", "瓢虫科", "和瓢虫属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "参考照片：停在嫩枝上的异色瓢虫", shoot: "我们遇见的那一只：从斜上方微距拍，背上的花纹和白色前胸都清楚；只拍不抓，让它待在原来的叶子上" },
  hello: "同一种瓢虫，有的红底黑点，有的黑底红斑，背上的黑点从 0 个到 20 多个。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "head", caption: "从正上方看一只成虫", shoot: "春天或秋天，在有蚜虫的树叶、花枝上找一只成虫，从正上方微距拍，头朝上，白色前胸、两边肩膀和整片背都在画面里" },
      points: [
        { x: 0.535, y: 0.4, label: "白色前胸上的 M", detail: "头后面的前胸是白色的，上面的黑斑常排成一个“M”。也有黑斑多到前胸几乎全黑的。", cite: ["adw-ha", "wiki-en"] },
        { x: 0.475, y: 0.47, label: "方方的肩膀", detail: "翅鞘最前面两边的“肩膀”方方的，很明显。", cite: ["adw-ha"] },
        { x: 0.52, y: 0.555, label: "花纹不一定", detail: "红底或橙底配 0 到 22 个黑点，也有黑底配 2 个或 4 个红斑的。", cite: ["adw-ha", "wiki-en"] },
        { x: 0.605, y: 0.5, label: "圆圆鼓鼓", detail: "身体椭圆、背高高拱起，只有 5～8 毫米长，比小指甲盖还小。", cite: ["adw-ha"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看白色的前胸",
      shot: { photo: "adult-top", caption: "参考照片：正在吃蚜虫的异色瓢虫", shoot: "它停在有蚜虫的叶子上时，从侧前方微距拍头和前胸，看清白底上的黑色花纹；只拍不抓" },
      text: "头后面那块白色的就是前胸，上面的黑斑连起来像个“M”。七星瓢虫的前胸是黑的，只在前面两边各有一小块白斑。",
      zoom: 3,
      start: [0.49, 0.45],
      cite: ["adw-ha", "adw-cs"],
    },
    {
      type: "steps",
      title: "从一粒卵到一只瓢虫",
      steps: [
        { photo: "step-egg", label: "卵", text: "黄色的卵一堆二三十粒，每粒只有约 1.2 毫米。快孵化时会变成灰黑色，平均不到 3 天就孵出来。", caption: "参考照片：叶背上的一小堆卵", shoot: "春夏在有蚜虫的枝叶上找一小堆黄色的卵，微距拍，不摘叶子" },
        { photo: "step-larva", label: "幼虫", text: "幼虫黑底带橙纹，身上有分叉的小刺，像一条小鳄鱼。它分 4 龄，最后能长到 7.5～10.7 毫米，常比成虫还长。", caption: "参考照片：像小鳄鱼的幼虫", shoot: "在蚜虫多的嫩枝上找黑底橙纹、身上带刺的幼虫，侧面微距拍，只拍不碰" },
        { photo: "step-pupa", label: "蛹", text: "蛹是橙色的小圆顶，粘在叶子上，尾巴后面还连着最后一次蜕下的皮。平均 4 天半后，成虫就钻出来了。", caption: "参考照片：粘在叶子上的蛹", shoot: "叶面上粘着的橙色蛹，连同后面皱皱的旧皮一起拍进去" },
        { photo: "step-new", label: "刚出蛹", text: "刚钻出蛹壳的成虫淡黄色，背上还没有黑点，前胸的 M 倒已经看得出来。大约 2 小时后，黑色才开始一点点长出来。", caption: "参考照片：刚出蛹的成虫，旁边是蛹壳", shoot: "守着一个快羽化的蛹，成虫一钻出来就拍，隔一两个小时在同一个角度再拍一张，看黑点长出来" },
        { photo: "step-adult", label: "成虫", text: "卵、幼虫、蛹、成虫，它是完全变态的昆虫。实验里把各阶段的平均天数加起来，从卵到成虫约 17 天半。", caption: "参考照片：变成成虫", shoot: "一只停着的成虫，和前面几张拍在同一类植物上更好" },
      ],
      cite: ["adw-ha", "ando-2018"],
    },
    {
      type: "lookalike",
      title: "红底黑点，别认错",
      quiz: true,
      items: [
        {
          name: "七星瓢虫", scientific: "Coccinella septempunctata",
          shot: { photo: "look-qxpc", caption: "七星瓢虫" },
          tells: ["红色背上通常是 7 个黑点", "两片翅鞘接缝最前面有 1 个黑点跨在中间", "前胸是黑的，前面两边各有一块小白斑"],
        },
        {
          name: "异色瓢虫", scientific: "Harmonia axyridis", self: true,
          shot: { photo: "look-ysp", caption: "异色瓢虫" },
          tells: ["前胸大片白色，黑斑常排成 M 形", "肩膀方方的", "黑点数目不固定，也有黑底红斑的"],
        },
      ],
      cite: ["adw-ha", "adw-cs"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5 月拍到它最多，10 月又多起来一些；1、2 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "异色瓢虫吃什么？", a: "主要吃蚜虫和介壳虫。因为它特别能吃这些害虫，北美和欧洲都曾把它请去保护庄稼。", cite: ["adw-ha", "wiki-en"] },
        { q: "背上的花纹有多少种？", a: "科学家数出来的就有 200 多种！管这些花纹的，主要是一个叫 pannier 的基因。", cite: ["ando-2018"] },
        { q: "秋天它们为什么往房子上飞？", a: "秋天暖和（21℃ 以上）的下午，它们成群飞出来找地方过冬。实验发现，它们最爱落在黑白对比强的条纹上，并不是只认白色。", cite: ["nalepa-2005"] },
        { q: "瓢虫能活多久？", a: "成虫一般活 30～90 天，天冷天热会不一样；也有活了 3 年多的记录。要过冬的那一批，会一直熬到第二年春天再产卵。", cite: ["adw-ha"] },
        { q: "它的怪味有多厉害？", a: "被惹急时，它会从腿的关节渗出带怪味的液体。实验里往每升葡萄汁里放 10 只，酿出的酒就有了花生和青椒味。", cite: ["adw-ha", "pickering-2004"] },
      ],
    },
  ],
  care: "只看不抓。拿在手里它可能会轻轻咬人，腿上的关节还会渗出难闻的液体，弄脏衣服。",
  nextTime: "下次数一数：遇见的异色瓢虫里，红底黑点的多，还是黑底红斑的多？",
  sources: [
    { id: "adw-ha", title: "Harmonia axyridis", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Harmonia_axyridis/" },
    { id: "adw-cs", title: "Coccinella septempunctata", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Coccinella_septempunctata/" },
    { id: "wiki-en", title: "Harmonia axyridis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Harmonia_axyridis" },
    { id: "ando-2018", title: "Repeated inversions within a pannier intron drive diversification of intraspecific colour patterns of ladybird beetles", by: "Ando et al., Nature Communications 2018", url: "https://doi.org/10.1038/s41467-018-06116-1" },
    { id: "nalepa-2005", title: "Role of Visual Contrast in the Alighting Behavior of Harmonia axyridis at Overwintering Sites", by: "Nalepa, Kennedy & Brownie, Environmental Entomology 2005", url: "https://doi.org/10.1603/0046-225X-34.2.425" },
    { id: "pickering-2004", title: "Influence of Harmonia axyridis on the Sensory Properties of White and Red Wine", by: "Pickering et al., American Journal of Enology and Viticulture 2004", url: "https://doi.org/10.5344/ajev.2004.55.2.153" },
  ],
  by: ["kid", "dad"],
};

export default entry;