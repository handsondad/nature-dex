import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zi-hua-di-ding",
  name: "紫花地丁",
  scientific: "Viola philippica",
  kind: "plant",
  // 北京早春还有早开堇菜等紫色堇菜：对照叶形、叶柄长短和花期再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "堇菜科", "堇菜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛紫花地丁", shoot: "4～5 月，我们遇见的那一丛：紫色的花和贴地的窄叶子都拍进去" },
  hello: "草地上探出紫色小脸，花后面还拖着一条小尾巴。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一丛开花的紫花地丁", shoot: "从斜上方拍一整丛：窄叶子、花梗和侧面的花都在画面里，能看清花后面的距" },
      points: [
        { x: 0.5, y: 0.78, label: "看不到地上茎", detail: "地面上看不到茎，叶子和花梗都从根上直接长出来，围成一丛。", cite: ["foc-zhdd"] },
        { x: 0.28, y: 0.6, label: "叶子窄窄长长", detail: "开花时叶子多是长椭圆、窄卵状披针形，大约 1.5～4 厘米长。", cite: ["foc-zhdd"] },
        { x: 0.4, y: 0.55, label: "叶柄比叶片长", detail: "开花时叶柄常常比叶片还长，大约是叶片的 1～2 倍。", cite: ["foc-zhdd"] },
        { x: 0.62, y: 0.22, label: "花后面的小尾巴", detail: "最下面那片花瓣往后伸出一个管子一样的小口袋（距），大约 3～8 毫米长。", cite: ["foc-zhdd"] },
      ],
    },
    {
      type: "lookalike",
      title: "紫色小花，别认错",
      quiz: true,
      items: [
        {
          name: "早开堇菜", scientific: "Viola prionantha",
          shot: { photo: "look-zkjc", caption: "早开堇菜" },
          tells: ["开花更早，3～4 月就开", "叶子宽一些，基部有时微微凹进去", "花大一些，直径大约 1.2～2 厘米"],
        },
        {
          name: "紫花地丁", scientific: "Viola philippica", self: true,
          shot: { photo: "look-zhdd", caption: "紫花地丁" },
          tells: ["开花稍晚，多在 4～5 月", "叶子窄窄长长，开花时叶柄比叶片还长", "花中等大小，紫色或紫堇色"],
        },
      ],
      cite: ["foc-zhdd", "foc-zkjc", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3、4 月拍到它最多，标注开花的也多在 3～4 月。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "果子熟了叶子会变吗？", a: "会变大很多！结果时叶片能长到大约 10 厘米长、4 厘米宽，叶柄上部的翅也会更明显。", cite: ["foc-zhdd"] },
        { q: "果子什么样？", a: "果子是小椭圆，长大约 5～12 毫米，成熟后会裂开，里面有浅黄色的小种子。", cite: ["foc-zhdd"] },
        { q: "它喜欢长在哪儿？", a: "田边、山坡草地、林缘、路边都常见，海拔大约 1700 米以下。", cite: ["foc-zhdd"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花、不挖根。路边的植物可能打过药，不要放进嘴里。",
  nextTime: "量一量：叶柄是不是比叶片还长？和早开堇菜的叶子比一比谁更窄。",
  sources: [
    { id: "foc-zhdd", title: "Viola philippica 紫花地丁", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014402" },
    { id: "foc-zkjc", title: "Viola prionantha 早开堇菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014407" },
    { id: "wiki-zh", title: "光瓣堇菜（紫花地丁）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%85%89%E7%93%A3%E5%A0%87%E8%8F%9C" },
  ],
  by: ["kid", "dad"],
};

export default entry;
