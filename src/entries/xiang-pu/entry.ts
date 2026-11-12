import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "xiang-pu",
  name: "香蒲",
  scientific: "Typha orientalis",
  kind: "plant",
  // FOC 中文名东方香蒲；北京水边还有狭叶香蒲等：拍到雌雄花序是否相连再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "百合纲", "禾本目", "香蒲科", "香蒲属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛香蒲", shoot: "水边我们遇见的那一丛：长叶子和棕色圆柱穗都拍进去" },
  hello: "水边竖着一根棕色的“热狗”，风一吹叶子沙沙响。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "spike", caption: "香蒲的花穗", shoot: "靠近拍一根完整的花穗：棕色圆柱和上方的雄花部分都要看得见" },
      points: [
        { x: 0.5, y: 0.55, label: "棕色的圆柱穗", detail: "下面这一段是雌花序，圆柱形，长大约 4.5～15 厘米，像一根棕色的棒。", cite: ["foc-xp"] },
        { x: 0.5, y: 0.25, label: "上面还有一截", detail: "雄花序在上面，长大约 2.7～9 厘米。东方香蒲的雌雄两段常常连在一起，中间没有大空隙。", cite: ["foc-xp"] },
        { x: 0.3, y: 0.7, label: "叶子又长又直", detail: "叶子长大约 40～70 厘米，宽 4～9 毫米，背面鼓鼓的，横切面像半个圆。", cite: ["foc-xp"] },
        { x: 0.7, y: 0.85, label: "秆高高的", detail: "茎大约 1.3～2 米高，粗壮，立在浅水或沼泽里。", cite: ["foc-xp"] },
      ],
    },
    {
      type: "lookalike",
      title: "水边高草，别认错",
      quiz: true,
      items: [
        {
          name: "芦苇", scientific: "Phragmites australis",
          shot: { photo: "look-lu-wei", caption: "芦苇" },
          tells: ["顶上是羽毛一样、松松的穗", "叶子常向下弯，尖端细细的", "属于禾本科"],
        },
        {
          name: "香蒲", scientific: "Typha orientalis", self: true,
          shot: { photo: "look-xiang-pu", caption: "香蒲" },
          tells: ["顶上是棕色圆柱穗", "雌雄花序常常连在一起", "属于香蒲科"],
        },
      ],
      cite: ["foc-xp", "foc-lw"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "花果期大约 5～8 月。在中国，夏天拍到它的人稍多一些。我们是哪个月遇见它的？",
      cite: ["foc-xp"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "上面和下面都是花吗？", a: "是的。上面是雄花，下面是雌花，密密麻麻挤在一起。香蒲属的花都没有花瓣。", cite: ["foc-typha"] },
        { q: "和宽叶香蒲怎么分？", a: "东方香蒲的柱头像小勺子（匙形），雌花柄上的毛和花柱差不多长；宽叶香蒲柱头更像披针形。", cite: ["foc-typha"] },
        { q: "它喜欢长在哪儿？", a: "湖泊、池塘、沟渠、沼泽和水流缓慢的河边。", cite: ["foc-xp"] },
      ],
    },
  ],
  care: "只看、拍照，不折叶子和花穗。水边和大人一起，不要下水。",
  nextTime: "找一找：棕色圆柱上面，是不是还连着一截更细的雄花序？中间有空隙吗？",
  sources: [
    { id: "foc-xp", title: "Typha orientalis 东方香蒲", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200024681" },
    { id: "foc-typha", title: "Typha 香蒲属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=134063" },
    { id: "foc-lw", title: "Phragmites australis 芦苇", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242337323" },
  ],
  by: ["kid", "dad"],
};

export default entry;
