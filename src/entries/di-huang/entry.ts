import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "di-huang",
  name: "地黄",
  scientific: "Rehmannia glutinosa",
  kind: "plant",
  // 浑身软毛、贴地的叶子和外紫红内黄的筒状花一起看就能确认
  certainty: "sure",
  // Flora of China 把地黄属放在玄参科；这里照 GBIF 写列当科
  taxonomy: ["植物界", "维管植物门", "木兰纲", "唇形目", "列当科", "地黄属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛地黄", shoot: "4～5 月，我们遇见的那一丛：紫红色的花和贴地的毛茸茸的叶子都拍进去" },
  hello: "浑身长满软毛，开着外面紫红、里面带黄的小喇叭花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一棵开花的地黄", shoot: "从斜上方拍一整棵：贴地的一圈叶子、紫红色的茎和花都在画面里" },
      points: [
        { x: 0.5, y: 0.82, label: "叶子贴地围一圈", detail: "下面的叶子常常贴着地面围成一圈，叶边有一个个圆圆钝钝的齿。", cite: ["foc-dh"] },
        { x: 0.5, y: 0.52, label: "紫红色的茎", detail: "茎是紫红色的。整棵不高，只有 10～30 厘米。", cite: ["foc-dh"] },
        { x: 0.56, y: 0.2, label: "小喇叭一样的花", detail: "花 3～4.5 厘米长，像一个小喇叭，外面紫红色，里面带着黄色和紫色。", cite: ["foc-dh"] },
        { x: 0.28, y: 0.66, label: "浑身是软毛", detail: "叶子、茎、花的外面，都密密地长着长长的软毛。", cite: ["foc-dh"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的毛",
      shot: { photo: "hair-macro", caption: "花和茎上的毛", shoot: "微距拍花筒外面或一段茎，一根根毛清楚地立着，背景深一点" },
      text: "凑近看，地黄身上有两种毛：普通的软毛，和会分泌东西的腺毛。它的学名 glutinosa，意思就是“黏黏的”。",
      zoom: 3,
      start: [0.5, 0.5],
      cite: ["foc-dh", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家最常在 4 月拍到它开花，5 月也不少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "地下藏着什么？", a: "一段肉乎乎的根茎，最长约 5.5 厘米。很多地方专门种地黄，就是为了把这段根茎做成中药。", cite: ["foc-dh"] },
        { q: "一朵花里有几根雄蕊？", a: "4 根，两根长、两根短，都藏在花筒里面。", cite: ["foc-dh", "foc-rehmannia"] },
        { q: "地黄家族有多少种？", a: "地黄属一共 6 种，全都只长在中国。", cite: ["foc-rehmannia"] },
        { q: "Rehmannia 是谁？", a: "是一位叫约瑟夫·雷曼的医生，大约 200 年前在俄国圣彼得堡行医。地黄属的学名就是用他的名字起的。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花，也不要把花放进嘴里吸。路边的植物可能打过药。",
  nextTime: "一根茎上的花，是下面的先开，还是上面的先开？下次数一数。",
  sources: [
    { id: "foc-dh", title: "Rehmannia glutinosa 地黄", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200021237" },
    { id: "foc-rehmannia", title: "Rehmannia 地黄属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=128084" },
    { id: "wiki-en", title: "Rehmannia glutinosa", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rehmannia_glutinosa" },
  ],
  by: ["kid", "dad"],
};

export default entry;
