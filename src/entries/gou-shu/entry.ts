import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "gou-shu",
  name: "构树",
  scientific: "Broussonetia papyrifera",
  kind: "plant",
  // 叶面糙、叶背密毛、小枝密毛、橙红色毛球果，对上就能确认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "桑科", "构属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵构树", shoot: "我们遇见的那一棵：整棵树，夏天（6～7 月）雌树挂着红果时最好认" },
  hello: "雌树夏天挂满橙红色的毛球果，雄树挂着一条条像毛毛虫的花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "branch", caption: "一根结果的枝条", shoot: "6～7 月雌树上低处的一根枝条：不同形状的叶子、毛茸茸的小枝和一两个红果都在画面里（不用折下来）" },
      points: [
        { x: 0.3, y: 0.4, label: "叶子形状不一样", detail: "有的叶子是一整片，有的裂成 3～5 片，同一棵树上也会不一样。", cite: ["foc-gs", "wiki-en"] },
        { x: 0.18, y: 0.6, label: "粗粗的锯齿", detail: "叶边有一圈粗锯齿，叶子顶端长长地尖出去。", cite: ["foc-gs"] },
        { x: 0.45, y: 0.62, label: "正面糙、背面毛", detail: "叶子正面摸起来糙糙的，背面密密地长着软毛。", cite: ["foc-gs"] },
        { x: 0.55, y: 0.18, label: "毛茸茸的小枝", detail: "小枝上长满了密密的毛。", cite: ["foc-gs"] },
        { x: 0.72, y: 0.5, label: "橙红色的球果", detail: "雌树上的球果 1.5～3 厘米，熟了是橙红色的，软软的，表面有毛。", cite: ["foc-gs"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一个红果球",
      shot: { photo: "fruit-macro", caption: "一个熟了的红果球", shoot: "一个熟透的红果球特写，能看清一颗颗冒出来的小果子" },
      text: "一个红果球不是一颗果子，而是许多颗小果子挤在一起，每颗都从球面上冒出来。",
      zoom: 3,
      start: [0.5, 0.45],
      cite: ["wiki-en", "foc-gs"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4 月拍到它开花最多，7、8 月拍到红果最多。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么有的构树结红果，有的不结？", a: "构树分雄树和雌树。雌树结红果球；雄树开一条条 3～8 厘米长的花，不结果。", cite: ["foc-gs", "wiki-en"] },
        { q: "学名 papyrifera 是什么意思？", a: "说的是用它的树皮造纸。构树皮里的纤维可以用来做纸。", cite: ["wiki-en", "foc-broussonetia"] },
        { q: "树皮还能做成布？", a: "能！太平洋岛上的人很早就把构树带到一个个小岛上，用它的内层树皮做成树皮布。", cite: ["wiki-en"] },
        { q: "为什么台湾叫它“鹿仔树”？", a: "以前人们拿构树叶喂鹿、牛和羊，所以叫它“鹿仔树”，就是“小鹿的树”。", cite: ["wiki-en", "wiki-zh"] },
      ],
    },
  ],
  care: "枝叶折断会流白色乳汁，不折枝、不摘果，红果不放进嘴里。春天的花粉会让有的人过敏。",
  nextTime: "夏天在结红果的构树下等一会儿：有没有鸟或虫子来吃果子？",
  sources: [
    { id: "foc-gs", title: "Broussonetia papyrifera 构树", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200006341" },
    { id: "foc-broussonetia", title: "Broussonetia 构属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=104684" },
    { id: "wiki-en", title: "Paper mulberry", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Paper_mulberry" },
    { id: "wiki-zh", title: "构树", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%9E%84%E6%A0%91" },
  ],
  by: ["kid", "dad"],
};

export default entry;
