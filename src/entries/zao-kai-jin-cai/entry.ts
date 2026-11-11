import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zao-kai-jin-cai",
  name: "早开堇菜",
  scientific: "Viola prionantha",
  kind: "plant",
  // 北京还有紫花地丁等好几种紫色堇菜，要对照花期、叶形和花的大小再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "堇菜科", "堇菜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛早开堇菜", shoot: "3 月初，我们遇见的那一丛：紫色的花和贴着地面的叶子都拍进去" },
  hello: "早春贴着地面开出紫色小花，每朵花后面拖着一条小尾巴。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一丛开花的早开堇菜", shoot: "从斜上方拍一整丛：叶子、花梗和侧面的花都在画面里，能看清叶子的形状和花后面的距" },
      points: [
        { x: 0.5, y: 0.78, label: "看不到茎", detail: "地面上看不到茎，叶子和花梗都从根上直接长出来，围成一丛。", cite: ["foc-zkjc"] },
        { x: 0.3, y: 0.6, label: "叶边一圈小圆齿", detail: "开花时叶子是长卵形，边上有密密的小圆齿，像一圈小波浪。", cite: ["foc-zkjc"] },
        { x: 0.42, y: 0.35, label: "花梗比叶子高", detail: "细细的花梗从叶丛里伸出来，比叶子高，一根只顶一朵花。", cite: ["foc-zkjc", "foc-viola"] },
        { x: 0.62, y: 0.2, label: "花后面的小尾巴", detail: "最下面那片花瓣往后伸出一个小口袋（距），5～9 毫米长，尖儿向上翘。", cite: ["foc-zkjc", "foc-viola"] },
      ],
    },
    {
      type: "lookalike",
      title: "紫色小花，别认错",
      quiz: true,
      items: [
        {
          name: "紫花地丁", scientific: "Viola philippica",
          shot: { photo: "look-zhdd", caption: "紫花地丁" },
          tells: ["开花晚一些，多在 4～5 月", "叶子窄窄长长，开花时叶柄比叶片还长"],
        },
        {
          name: "早开堇菜", scientific: "Viola prionantha", self: true,
          shot: { photo: "look-zkjc", caption: "早开堇菜" },
          tells: ["开花早，3～4 月就开", "叶子宽一些，基部有时微微凹进去，像心形", "花大一些，直径 1.2～2 厘米"],
        },
      ],
      cite: ["foc-zkjc", "foc-zhdd", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3 月拍到它开花最多，10 月又有一小拨。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "开完花，叶子会变吗？", a: "会变大很多！开花时叶片不到 5 厘米长，结果子时能长到 10 厘米，形状也变得有点像三角形。", cite: ["foc-zkjc"] },
        { q: "果子熟了是什么样？", a: "果子是个小椭圆，熟了裂成三瓣，里面有很多深棕色的小种子，每颗约 2 毫米。", cite: ["foc-zkjc", "foc-viola"] },
        { q: "它还会开不张开的花吗？", a: "堇菜家族常常在开过紫花之后，再长出一种不张开的小花（闭锁花）。我们这丛会不会，要自己去看。", cite: ["foc-viola"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花、不挖根。路边的植物可能打过药，不要放进嘴里。",
  nextTime: "10 月再回到同一丛看看：它是不是又开花了？",
  sources: [
    { id: "foc-zkjc", title: "Viola prionantha 早开堇菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014407" },
    { id: "foc-viola", title: "Viola 堇菜属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=134607" },
    { id: "foc-zhdd", title: "Viola philippica 紫花地丁", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014402" },
    { id: "wiki-zh", title: "早开堇菜", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%97%A9%E5%BC%80%E5%A0%87%E8%8F%9C" },
  ],
  by: ["kid", "dad"],
};

export default entry;
