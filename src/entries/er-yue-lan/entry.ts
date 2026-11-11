import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "er-yue-lan",
  name: "二月兰",
  scientific: "Orychophragmus violaceus",
  kind: "plant",
  // 四瓣紫花、抱茎的上部叶和细长角果一起看就能确认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "十字花目", "十字花科", "诸葛菜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那片二月兰", shoot: "春天 3～4 月，我们遇见的那一片：紫色的花和一两枝细长的果子都拍进去" },
  hello: "四片紫色花瓣排成一个十字，三月起就在路边、树下开花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-stem", caption: "一枝开花的二月兰", shoot: "春天从侧面拍一整枝：顶上的花、茎上的叶子、下面细长的果子和贴近地面的叶子都在画面里" },
      points: [
        { x: 0.5, y: 0.14, label: "四片花瓣排成十字", detail: "4 片花瓣排成十字，有深紫、淡紫，也有白色的；每片约两厘米长。", cite: ["foc-eyl", "foc-brassicaceae"] },
        { x: 0.45, y: 0.48, label: "叶子抱住茎", detail: "茎上部的叶子，基部长着两只“小耳朵”，把茎抱在中间。", cite: ["foc-eyl"] },
        { x: 0.7, y: 0.6, label: "细长的果子", detail: "花谢以后结出细细长长的果子（长角果），常有 4.5～11 厘米长。", cite: ["foc-eyl"] },
        { x: 0.5, y: 0.86, label: "下面的叶子顶上一片大", detail: "下面的叶子有长柄，顶上一片大大的，像心形或圆形，两边常挂着几片小的。", cite: ["foc-eyl"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近数一数",
      shot: { photo: "flower-macro", caption: "正对着看一朵花", shoot: "正对一朵刚开的花拍特写：4 片花瓣和中间的雄蕊都清楚，背景简单" },
      text: "4 片花瓣中间，有 6 根雄蕊：4 根长、2 根短。它的亲戚们，花大多也是这样。",
      zoom: 3,
      start: [0.5, 0.5],
      cite: ["foc-brassicaceae"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家最常在 3、4 月拍到它开花。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它为什么有两个名字？", a: "“二月兰”是大家常叫的名字，植物志上的正式名字叫“诸葛菜”。它还叫“二月蓝”“紫金草”。", cite: ["foc-eyl", "wiki-zh"] },
        { q: "为什么叫十字花科？", a: "这一家的花，多是 4 片花瓣摆成一个“十”字，所以这一科以前的学名叫 Cruciferae，就是“十字”的意思。", cite: ["foc-brassicaceae"] },
        { q: "它能吃吗？", a: "在中国，有人把它当蔬菜种，吃它的嫩茎。可是公园和路边的不能摘来吃。", cite: ["wiki-en"] },
        { q: "它是从哪里来的？", a: "它是中国本来就有的野花，朝鲜半岛也有。后来到了日本和美国，在那里也长了起来。", cite: ["foc-eyl", "wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花、不挖。公园和路边的植物可能打过药，不要放进嘴里。",
  nextTime: "记住一朵刚开的花，隔几天再去看：它的颜色会不会变浅？",
  sources: [
    { id: "foc-eyl", title: "Orychophragmus violaceus 诸葛菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200009631" },
    { id: "foc-brassicaceae", title: "Brassicaceae 十字花科", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10120" },
    { id: "wiki-en", title: "Orychophragmus violaceus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Orychophragmus_violaceus" },
    { id: "wiki-zh", title: "诸葛菜", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%AF%B8%E8%91%9B%E8%8F%9C" },
  ],
  by: ["kid", "dad"],
};

export default entry;
