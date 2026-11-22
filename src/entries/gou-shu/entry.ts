import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// efloras（Flora of China）目前要过人机验证，形态数据改核对植物智收录的《中国植物志》描述。
const entry: Entry = {
  id: "gou-shu",
  name: "构树",
  pinyin: "gòu shù",
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
      shot: { photo: "branch", caption: "一根结果的枝条", shoot: "6～7 月雌树上低处的一根枝条：叶子、小枝和红果、绿果都在画面里（不用折下来）" },
      points: [
        { x: 0.33, y: 0.57, label: "橙红色的果球", detail: "球果直径 1.5～3 厘米，熟了是橙红色，软软的，表面冒出一根根小果。", cite: ["iplant-gs"] },
        { x: 0.65, y: 0.55, label: "还没熟的绿球", detail: "没熟的果球是绿色的，6～7 月一个接一个变成橙红色。", cite: ["iplant-gs"] },
        { x: 0.49, y: 0.48, label: "毛糙的小枝", detail: "小枝上密生灰色粗毛；折断会流出白色的乳汁，所以别折它。", cite: ["iplant-gs", "wiki-zh"] },
        { x: 0.12, y: 0.3, label: "粗锯齿的大叶子", detail: "叶边一圈粗锯齿，正面摸着糙糙的；背面灰绿色，有一层长柔毛。", cite: ["iplant-gs", "wiki-zh"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一个红果球",
      shot: { photo: "fruit-macro2", caption: "一个熟了的红果球", shoot: "一个熟透的红果球特写，能看清一根根冒出来的小果" },
      text: "一个红果球不是一颗果子：许多朵雌花挤成一团，各自长成一根橙红色、肉乎乎的小果，合起来叫「聚花果」。",
      zoom: 2.5,
      start: [0.5, 0.48],
      cite: ["iplant-gs"],
    },
    {
      type: "steps",
      title: "雄树开花，雌树结果",
      steps: [
        {
          photo: "step-male",
          label: "雄花",
          text: "4～5 月，雄树挂出一条条下垂的雄花序，像一条条毛毛虫。雄树不结果。",
          caption: "雄树枝上一条条下垂的雄花序",
          shoot: "4～5 月拍一根挂着雄花序的枝条",
        },
        {
          photo: "step-female",
          label: "雌花",
          text: "雌树开的是一个个毛茸茸的小圆球，这叫头状雌花序。",
          caption: "雌树枝上毛茸茸的圆球形雌花序",
          shoot: "4～5 月在另一棵树上找毛茸茸的小圆球",
        },
        {
          photo: "step-green",
          label: "青果",
          text: "雌花序慢慢长大，变成一个个绿色的果球。",
          caption: "枝上挂着的绿色果球",
          shoot: "过一个月回到同一棵雌树，拍长大的绿果",
        },
        {
          photo: "step-red",
          label: "红果",
          text: "6～7 月熟了，果球变成橙红色、软软的。旁边还有没熟的绿球。",
          caption: "一个熟透的红果球和两个绿球",
          shoot: "6～7 月拍同一根枝上的红果",
        },
      ],
      cite: ["iplant-gs", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "构树 4～5 月开花，6～7 月结果。在中国，大家 4 月拍到它开花最多，7、8 月拍到红果最多。我们是哪个月遇见它的？",
      cite: ["iplant-gs"],
    },
    {
      type: "lookalike",
      title: "构树还是桑树？",
      quiz: true,
      items: [
        {
          name: "桑",
          scientific: "Morus alba",
          shot: { photo: "look-sang", caption: "桑树的叶子和桑葚" },
          tells: [
            "叶面光滑没毛，背面只在叶脉分叉处有一小撮毛",
            "果子是长椭圆的桑葚，1～2.5 厘米，红到暗紫色",
          ],
        },
        {
          name: "构树",
          scientific: "Broussonetia papyrifera",
          self: true,
          shot: { photo: "look-gs", caption: "构树的叶子：有的不裂，有的裂成好几片" },
          tells: [
            "叶面糙糙的，背面一层长柔毛；同一棵树上叶子不裂到 5 裂都有",
            "果子是圆球，熟了橙红色",
          ],
        },
      ],
      cite: ["iplant-sang", "iplant-gs", "wiki-zh"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么有的构树结红果，有的不结？", a: "构树分雄树和雌树。雌树结红果球；雄树只挂一条条雄花序，不结果。", cite: ["iplant-gs", "wiki-zh"] },
        { q: "构树和造纸有什么关系？", a: "构树皮里的纤维又长又韧，可以造纸。科学家说，古代蔡伦造纸用的就有构树。", cite: ["iplant-gs", "peng-2019"] },
        { q: "它坐过船吗？", a: "坐过！太平洋小岛上的构树，大多带着来自台湾的遗传记号：古人划船出海时一路带着它，用树皮做树皮布。", cite: ["chang-2015"] },
        { q: "为什么台湾叫它「鹿仔树」？", a: "构树叶可以喂猪、牛、羊、兔和鹿，所以台湾民间叫它「鹿仔树」。", cite: ["wiki-zh"] },
        { q: "它为什么长得那么快？", a: "科学家在构树根上发现了会固氮的细菌，它们可能在帮构树从空气里「拿」氮肥。", cite: ["peng-2019"] },
      ],
    },
  ],
  care: "枝叶折断会流白色乳汁，不折枝、不摘果，红果不放进嘴里。春天的花粉会让有的人过敏。",
  nextTime: "夏天在结红果的构树下等一会儿：有没有鸟或虫子来吃果子？",
  sources: [
    { id: "iplant-gs", title: "构 Broussonetia papyrifera", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Broussonetia%20papyrifera" },
    { id: "iplant-sang", title: "桑 Morus alba", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Morus%20alba" },
    { id: "wiki-zh", title: "构树", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%9E%84%E6%A0%91" },
    { id: "peng-2019", title: "A Chromosome-Scale Genome Assembly of Paper Mulberry (Broussonetia papyrifera) Provides New Insights into Its Forage and Papermaking Usage", by: "Peng et al., Molecular Plant (2019)", url: "https://doi.org/10.1016/j.molp.2019.01.021" },
    { id: "chang-2015", title: "A holistic picture of Austronesian migrations revealed by phylogeography of Pacific paper mulberry", by: "Chang et al., PNAS (2015)", url: "https://doi.org/10.1073/pnas.1503205112" },
  ],
  by: ["kid", "dad"],
};

export default entry;
