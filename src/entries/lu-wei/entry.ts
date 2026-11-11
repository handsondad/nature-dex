import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "lu-wei",
  name: "芦苇",
  scientific: "Phragmites australis",
  kind: "plant",
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "百合纲", "禾本目", "禾本科", "芦苇属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那片芦苇", shoot: "水边大片芦苇：能看见高高的秆和顶端羽毛一样的穗" },
  hello: "水边立着一支支绿竹竿，顶上开出羽毛一样的花穗。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一丛芦苇", shoot: "拍几根完整的秆：叶子和顶端的圆锥花序都要进画面" },
      points: [
        { x: 0.5, y: 0.15, label: "羽毛一样的穗", detail: "顶端是又大又密的圆锥花序，大约 20～50 厘米长，远远看像羽毛。", cite: ["foc-lw"] },
        { x: 0.45, y: 0.45, label: "叶子又长又弯", detail: "叶子常向下弯，长可达大约 50 厘米，宽 1～3 厘米，尖端细得像丝。", cite: ["foc-lw"] },
        { x: 0.55, y: 0.7, label: "秆又高又直", detail: "秆能长到 2 米或更高，节的下面常常像有一层白粉。", cite: ["foc-lw"] },
        { x: 0.3, y: 0.85, label: "地下有长根茎", detail: "它靠长长的根状茎在湿地上蔓延，常常连成一大片。", cite: ["foc-lw"] },
      ],
    },
    {
      type: "lookalike",
      title: "水边高草，别认错",
      quiz: true,
      items: [
        {
          name: "香蒲", scientific: "Typha orientalis",
          shot: { photo: "look-xiang-pu", caption: "香蒲" },
          tells: ["顶上是棕色、像热狗一样的圆柱穗", "叶子更像一把把宽宽的长剑", "属于香蒲科，不是禾本科"],
        },
        {
          name: "芦苇", scientific: "Phragmites australis", self: true,
          shot: { photo: "look-lu-wei", caption: "芦苇" },
          tells: ["顶上是羽毛一样、松松的圆锥花序", "叶子弯弯的，尖端细细的", "属于禾本科，像巨大的草"],
        },
      ],
      cite: ["foc-lw", "foc-xp"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 10、11 月拍到它最多；冬天枯穗也常有人拍。花果期大约 7～11 月。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "小花藏在哪儿？", a: "羽毛穗里挤着许多小穗，每个小穗有 2～5 朵小花。小花底下有长长的丝毛。", cite: ["foc-lw"] },
        { q: "它只在中国有吗？", a: "不是。芦苇几乎全世界温带到热带的湿地都有，是真正的“世界旅行者”。", cite: ["foc-lw", "wiki-en"] },
        { q: "人会用它做什么？", a: "秆可以编东西、当纤维；根状茎有时入药；大片芦苇还能帮着护住水土、净化水质。", cite: ["foc-phragmites"] },
      ],
    },
  ],
  care: "只看、拍照，不折秆。水边和大人一起，不要下水，脚下要站稳。",
  nextTime: "轻轻摇一摇（别折断）：顶上的穗是松松的羽毛，还是结成一条棕色棒？",
  sources: [
    { id: "foc-lw", title: "Phragmites australis 芦苇", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242337323" },
    { id: "foc-phragmites", title: "Phragmites 芦苇属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=125116" },
    { id: "foc-xp", title: "Typha orientalis 东方香蒲", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200024681" },
    { id: "wiki-en", title: "Phragmites australis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Phragmites_australis" },
    { id: "wiki-zh", title: "芦苇", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%8A%A6%E8%8B%87" },
  ],
  by: ["kid", "dad"],
};

export default entry;
