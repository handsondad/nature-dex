import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yue-ji",
  name: "月季",
  scientific: "Rosa chinensis",
  kind: "plant",
  // 花园里月季品种很多，还有蔷薇、玫瑰：拍到茎上的刺、小叶数目和花再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "蔷薇属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛月季", shoot: "我们遇见的那一丛：整株或几朵开得正好的花，颜色清楚" },
  hello: "从春天开到秋天，路边的花墙常常是它在接力。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-stem", caption: "花和带刺的茎", shoot: "靠近拍一朵花和下面一段茎：花瓣、小叶和刺都要看得见" },
      points: [
        { x: 0.5, y: 0.25, label: "大而鲜艳的花", detail: "花大约 4～5 厘米宽，常常半重瓣或重瓣，红、粉、白、紫都有。", cite: ["foc-yj"] },
        { x: 0.35, y: 0.55, label: "小叶 3～5 片", detail: "一片“叶子”其实是 3～5 片（偶尔 7 片）小叶，边缘有尖锯齿。", cite: ["foc-yj"] },
        { x: 0.7, y: 0.7, label: "茎上有刺", detail: "枝条上常有弯曲、扁扁的刺，有的品种刺很多，有的几乎没有。", cite: ["foc-yj"] },
        { x: 0.55, y: 0.85, label: "成串或几朵一起", detail: "花常常 4～5 朵挤在一起，偶尔也一朵单独开。", cite: ["foc-yj"] },
      ],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "月季花期很长，大约 4～9 月都能开花。北京街上从暮春到初冬都能碰到它。我们是哪个月遇见它的？",
      cite: ["foc-yj", "bj-yueji"],
    },
    {
      type: "lookalike",
      title: "月季还是玫瑰？",
      quiz: true,
      items: [
        {
          name: "玫瑰",
          scientific: "Rosa rugosa",
          shot: { photo: "look-mei-gui", caption: "玫瑰的皱叶和密刺" },
          tells: [
            "小叶 5～7 片（偶尔 9 片），表面叶脉深深凹陷，皱巴巴像皱纸",
            "枝条上密密麻麻全是细直刺，花期多在 5～6 月",
          ],
        },
        {
          name: "月季",
          scientific: "Rosa chinensis",
          self: true,
          shot: { photo: "look-yue-ji", caption: "月季的花和枝叶" },
          tells: [
            "小叶通常 3～5 片，叶面平整有光泽",
            "枝上多是稀疏的扁弯刺，从春到秋一茬接一茬地开",
          ],
        },
      ],
      cite: ["foc-yj", "foc-mg"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "北京的市花是什么？", a: "有两种：月季和菊花。1987 年，北京市人民代表大会通过决定，把它们定为北京的市花。", cite: ["bj-trees"] },
        { q: "为什么叫“月季”？", a: "因为它能一茬接一茬地开，几乎每个月都有花，古人也叫它长春花、月月红。", cite: ["bj-yueji", "wiki-zh"] },
        { q: "果子什么样？", a: "花谢以后结出红色的小果子（蔷薇果），卵形或梨形，直径大约 1～2 厘米。", cite: ["foc-yj"] },
        { q: "它原来住在哪儿？", a: "野生的月季花原产贵州、湖北、四川一带，现在全国各地公园和路边都在种。", cite: ["foc-yj"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花。茎上有刺，靠近时小心别扎到手。",
  nextTime: "过两周再来同一丛：是不是又开出新花了？数一数这一次有几朵。",
  sources: [
    { id: "foc-yj", title: "Rosa chinensis 月季花", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200011233" },
    { id: "foc-mg", title: "Rosa rugosa 玫瑰", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200011310" },
    { id: "wiki-zh", title: "月季 (物种)", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%9C%88%E5%AD%A3_(%E7%89%A9%E7%A7%8D)" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
    { id: "bj-yueji", title: "花开锦绣映京城（一朵花读懂一座城）", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/jcyyshj/djsh/202506/t20250603_4104755.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
