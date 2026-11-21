import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ju-hua",
  name: "菊花",
  scientific: "Chrysanthemum × morifolium",
  kind: "plant",
  // 栽培菊花是巨大的杂交复合体，学名仍有争议；公园里的要和野菊对照叶形与花头大小
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "菊目", "菊科", "菊属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛菊花", shoot: "公园或花坛里我们遇见的那一丛：整株或开得正好的花头，颜色清楚" },
  hello: "秋天花坛里一盆盆的花球，每一朵都是好多小花挤在一起。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-head", caption: "开花的菊花，旁边还有花苞", shoot: "从斜上方拍一朵开得正好的花头，旁边的花苞和裂开的叶子也拍进去" },
      points: [
        { x: 0.71, y: 0.52, label: "外圈的“花瓣”", detail: "每一片“花瓣”其实是一朵小花，叫舌状花。栽培的菊花常有好几圈。", cite: ["foc-chrys"] },
        { x: 0.5, y: 0.57, label: "中间一粒粒的小花", detail: "中间挤着许多管子形的小花（管状花），黄色，顶上裂成 5 个小尖。", cite: ["foc-chrys"] },
        { x: 0.6, y: 0.12, label: "圆圆的花苞", detail: "花苞外面包着 4～5 层总苞片，边上是白色或褐色的薄边。", cite: ["foc-chrys"] },
        { x: 0.85, y: 0.21, label: "叶子裂开，有锯齿", detail: "叶子一片一片交错着长，像手掌或羽毛一样裂开，边上有锯齿。", cite: ["foc-chrys"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花心",
      shot: { photo: "flower-macro", caption: "一朵单瓣紫菊花的花心", shoot: "找一朵中间露出黄色花心的单瓣菊花，从正面靠近拍" },
      text: "紫色的“花瓣”是舌状花。中间那一片黄色，是许多管状花挤在一起。看看靠外圈的小花已经张开，正中间的还是一个个小圆头。",
      zoom: 2.5,
      start: [0.6, 0.55],
      cite: ["foc-chrys"],
    },
    {
      type: "steps",
      title: "从花苞到一盆花球",
      steps: [
        { photo: "step-bud", label: "花苞", text: "绿色的总苞片包着花苞，顶上已经露出一点粉色。", caption: "露出颜色的花苞", shoot: "快开的花苞，靠近拍，能看见绿色的总苞片和露出的颜色" },
        { photo: "step-half", label: "半开", text: "外面一圈“花瓣”先张开，中间的还卷成一团。", caption: "外圈张开、中间还卷着", shoot: "同一盆里开到一半的那朵，从正面拍" },
        { photo: "step-bloom", label: "开满", text: "一盆里开着的花和还没开的花苞挤在一起，像一个大花球。", caption: "开满花的一盆菊花", shoot: "隔几天再去，从正上方拍整盆" },
      ],
      cite: ["foc-chrys"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，网上能当数据用的菊花记录很少：人种的花一般不算野生观察。菊花要等夜晚变长才开花，所以多在秋天开。我们是哪个月遇见它的？",
      cite: ["inat-dqa", "higuchi-2013"],
    },
    {
      type: "lookalike",
      title: "哪个是花坛里的菊花？",
      quiz: true,
      items: [
        {
          name: "野菊", scientific: "Chrysanthemum indicum",
          shot: { photo: "look-ye-ju", caption: "野菊" },
          tells: ["山坡、路边自己长出来", "花头小，“花瓣”只有黄色，长约 1 厘米", "很多小花头排成平平的一簇"],
        },
        {
          name: "菊花", scientific: "Chrysanthemum × morifolium", self: true,
          shot: { photo: "look-ju-hua", caption: "菊花" },
          tells: ["花坛、花盆里人种的", "白、黄、红、粉、紫，颜色很多", "“花瓣”常常一圈又一圈"],
        },
        {
          name: "万寿菊", scientific: "Tagetes erecta",
          shot: { photo: "look-wsj", caption: "万寿菊" },
          tells: ["叶子像羽毛，分成 9～25 片细长的小叶", "一根长花梗只顶一个花头", "花多是黄色、橙色"],
        },
      ],
      cite: ["foc-yeju", "foc-chrys", "foc-wsj"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "一朵菊花真的是一朵花吗？", a: "不是哦！它是一个“花头”：外圈每片“花瓣”是一朵舌状花，中间每一粒是一朵管状花。", cite: ["foc-chrys"] },
        { q: "菊花为什么多在秋天开？", a: "菊花的叶子能“量”夜晚有多长，夜晚够长才开花。种花的人用灯光调节，一年四季都能让它开花。", cite: ["higuchi-2013"] },
        { q: "菊花有多少个品种？", a: "多极了！1630 年中国的一本书里，就记下了 500 多个菊花品种。它主要的祖先之一是野菊。", cite: ["foc-chrys"] },
        { q: "北京的市花是什么？", a: "月季和菊花。1987 年北京评市花，菊花得票排第二，最后和月季一起当上了北京市花。", cite: ["bj-trees"] },
        { q: "菊花的细胞有什么特别？", a: "花坛里的菊花有 6 套染色体，叫六倍体；它的一种野生亲戚只有 2 套。所以研究菊花的基因特别难。", cite: ["plants-2023", "seticuspe-2021"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花。花坛里的花是大家一起看的，不要用手摸。",
  nextTime: "数一数花坛里有几种颜色的菊花？再找一朵露出花心的，看看中间的小管子花。",
  sources: [
    { id: "foc-chrys", title: "Chrysanthemum 菊属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=106957" },
    { id: "foc-yeju", title: "Chrysanthemum indicum 野菊", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=220002857" },
    { id: "foc-wsj", title: "Tagetes erecta 万寿菊", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200024576" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
    { id: "higuchi-2013", title: "The gated induction system of a systemic floral inhibitor, antiflorigen, determines obligate short-day flowering in chrysanthemums", by: "PNAS, 2013", url: "https://doi.org/10.1073/pnas.1307617110" },
    { id: "plants-2023", title: "Overcoming Difficulties in Molecular Biological Analysis through a Combination of Genetic Engineering, Genome Editing, and Genome Analysis in Hexaploid Chrysanthemum morifolium", by: "Plants, 2023", url: "https://doi.org/10.3390/plants12132566" },
    { id: "seticuspe-2021", title: "A chromosome-level genome sequence of Chrysanthemum seticuspe, a model species for hexaploid cultivated chrysanthemum", by: "Communications Biology, 2021", url: "https://doi.org/10.1038/s42003-021-02704-y" },
    { id: "inat-dqa", title: "What is the Data Quality Assessment and how do observations qualify to become Research Grade?", by: "iNaturalist Help", url: "https://help.inaturalist.org/en/support/solutions/articles/151000169936-what-is-the-data-quality-assessment-dqa-and-how-do-observations-qualify-to-become-research-grade-" },
  ],
  by: ["kid", "dad"],
};

export default entry;