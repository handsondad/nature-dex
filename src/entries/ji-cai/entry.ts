import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ji-cai",
  name: "荠菜",
  scientific: "Capsella bursa-pastoris",
  kind: "plant",
  // 倒三角形、顶上凹进去的扁果子很好认；荠属只有这一种
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "十字花目", "十字花科", "荠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵荠菜", shoot: "早春，我们遇见的那一棵：贴地的叶子、白色小花和三角形的小果子都拍进去" },
  hello: "小白花下面挂着一个个心形的小扁果，像牧羊人的小钱包。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一棵开花结果的荠菜", shoot: "春天从侧面拍一整棵：贴地的一圈叶子、花茎、顶上的白花和下面的小果子都在画面里" },
      points: [
        { x: 0.5, y: 0.14, label: "4 片小白花瓣", detail: "花很小，只有 2.5 毫米宽，4 片白色花瓣。", cite: ["wiki-en", "foc-jc"] },
        { x: 0.6, y: 0.32, label: "三角形的扁果子", detail: "果子扁扁的，像倒过来的三角形，顶上凹进去一点，4～9 毫米长。", cite: ["foc-jc", "foc-capsella"] },
        { x: 0.45, y: 0.56, label: "叶子抱着茎", detail: "茎上的叶子少，没有柄，基部像箭头一样抱住茎。", cite: ["foc-jc", "wiki-en"] },
        { x: 0.5, y: 0.86, label: "叶子贴地围一圈", detail: "下面的叶子贴着地面围成一圈，边上常裂成一片一片，也有不裂的。", cite: ["foc-jc"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看小钱包",
      shot: { photo: "pod-macro", caption: "花茎上的小果子", shoot: "微距拍花茎上的几个果子：扁扁的三角形和顶上的小缺口都看得清" },
      text: "每个小果子（短角果）扁扁的，像一颗倒过来的心。里面分成两格，装着好几颗小种子。",
      zoom: 3,
      start: [0.5, 0.45],
      cite: ["wiki-en", "foc-capsella"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3、4 月拍到它开花最多，秋冬也偶尔有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么说它像牧羊人的钱包？", a: "它的学名 bursa-pastoris 就是“牧羊人的钱包”。小果子的样子，像牧羊人装干粮的小皮袋。", cite: ["wiki-en"] },
        { q: "荠菜的种子会“抓虫子”？", a: "种子沾了水会变黏。科学家发现，小线虫会被种子吸引过去，很多三天内就死了；有线虫时，种子发芽更好。", cite: ["foc-capsella", "roberts-2018"] },
        { q: "荠菜多不多？", a: "中国各地都有。植物志里说，它是地球上第二常见的杂草。", cite: ["foc-jc"] },
        { q: "人们吃荠菜吗？", a: "吃。中国人吃荠菜的记录能追到周朝。现在常用来包馄饨、饺子，或者和年糕一起炒。", cite: ["wiki-en", "wiki-zh"] },
      ],
    },
  ],
  care: "路边的荠菜可能打过药。挖不挖、能不能吃，让大人判断，自己不要放进嘴里。",
  nextTime: "数一数：一根花茎上挂着几个小钱包？最下面的和最上面的，哪个大？",
  sources: [
    { id: "foc-jc", title: "Capsella bursa-pastoris 荠", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200009292" },
    { id: "foc-capsella", title: "Capsella 荠属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=105575" },
    { id: "roberts-2018", title: "Evidence for facultative protocarnivory in Capsella bursa-pastoris seeds", by: "Scientific Reports, 2018", url: "https://doi.org/10.1038/s41598-018-28564-x" },
    { id: "wiki-en", title: "Capsella bursa-pastoris", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Capsella_bursa-pastoris" },
    { id: "wiki-zh", title: "荠菜", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%8D%A0%E8%8F%9C" },
  ],
  by: ["kid", "dad"],
};

export default entry;
