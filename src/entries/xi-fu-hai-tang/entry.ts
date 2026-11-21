import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 与 iNaturalist 接受名为 Malus × kaido；Flora of China 和《中国植物志》写作异名 Malus × micromalus。
const entry: Entry = {
  id: "xi-fu-hai-tang",
  name: "西府海棠",
  scientific: "Malus × kaido",
  kind: "plant",
  // 华北常见海棠还有海棠花、垂丝海棠和各种北美海棠，拍到花梗、树形和果再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "苹果属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "一朵粉色的西府海棠花，旁边是红红的花苞", shoot: "4 月开花时拍一簇花：开了的花和红花苞都拍进去" },
  hello: "春天花苞红红的，开了变成粉白；秋天枝上挂满小果子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-branch", caption: "一簇刚开的花，周围还有花苞", shoot: "开花时靠近拍一簇花：红花苞、开了的花和叶子都在画面里" },
      points: [
        { x: 0.625, y: 0.33, label: "红红的花苞", detail: "花没开的时候，花苞是深红色的，像一点点胭脂。", cite: ["bj-haitang"] },
        { x: 0.3, y: 0.62, label: "开了变浅", detail: "花开以后颜色慢慢变浅，成了粉红、粉白色。花瓣长约 1.5 厘米。", cite: ["bj-haitang", "frps-xfht"] },
        { x: 0.47, y: 0.5, label: "几朵一束", detail: "4～7 朵花挤在小枝顶上，凑成一束。每朵花下面有一根 2～3 厘米的花梗。", cite: ["frps-xfht"] },
        { x: 0.78, y: 0.27, label: "长椭圆的叶", detail: "叶子长椭圆形，长 5～10 厘米，边上有尖尖的锯齿，叶柄细长。", cite: ["frps-xfht"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花心",
      shot: { photo: "flower-macro", caption: "西府海棠的花心，有一圈黄色的雄蕊", shoot: "开花时靠近拍一朵花的正面，让花心的雄蕊清楚" },
      text: "花心有一圈黄色的雄蕊，书上说大约 20 根，长短不一样。雄蕊中间还藏着 5 根花柱，找得到吗？",
      start: [0.48, 0.56],
      cite: ["frps-xfht"],
    },
    {
      type: "steps",
      title: "从红花苞到小果子",
      steps: [
        { photo: "step-bud", label: "红花苞", text: "花开前，一簇花苞红艳艳的，像胭脂点点。", caption: "一簇红色的花苞，周围是新叶", shoot: "花开前几天，拍一簇还没开的花苞" },
        { photo: "step-bloom", label: "开花", text: "4 月花开了，颜色变成粉红、粉白，几朵凑成一束。", caption: "雨后刚开的一束花", shoot: "花开时，拍同一簇花" },
        { photo: "step-fruit", label: "结果", text: "8～9 月结出小果子，直径 1～1.5 厘米。书上写果子是红的，品种不同，颜色也会不一样。", caption: "秋天挂满枝头的小果子", shoot: "8～9 月，拍同一根枝上的果子" },
      ],
      cite: ["frps-xfht", "bj-haitang"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "书上说它 4～5 月开花，8～9 月结果。在北京，看海棠最好是 4 月上旬到中旬。在中国，网上还几乎没有确认过的观察记录。",
      cite: ["frps-xfht", "bj-haitang"],
    },
    {
      type: "lookalike",
      title: "春天的海棠，是哪一种？",
      quiz: true,
      items: [
        {
          name: "垂丝海棠",
          scientific: "Malus halliana",
          shot: { photo: "look-cs", caption: "垂丝海棠：花梗细长，花垂下来" },
          tells: ["花梗细长、紫色，花开后垂下来", "花瓣常常不止 5 片", "树枝向四周张开"],
        },
        {
          name: "西府海棠",
          scientific: "Malus × kaido",
          self: true,
          shot: { photo: "look-xfht", caption: "西府海棠：红花苞，粉白花" },
          tells: ["树枝向上长，树形瘦高", "花苞深红，开了变粉红、粉白", "果子小，直径 1～1.5 厘米"],
        },
        {
          name: "海棠花",
          scientific: "Malus spectabilis",
          shot: { photo: "look-htm", caption: "海棠花：花瓣白色，花苞带粉" },
          tells: ["花瓣白色，只有花苞带粉红", "花大，直径 4～5 厘米", "果子黄色，约 2 厘米，顶上留着萼片"],
        },
      ],
      cite: ["frps-xfht", "foc-cs", "foc-htm", "bj-haitang"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "「西府」是哪儿？", a: "西府就是今天陕西宝鸡一带，西府海棠因此得名。它还是宝鸡的市花。", cite: ["bj-haitang"] },
        { q: "它是怎么来的？", a: "植物学家推测，它是海棠花和山荆子杂交出来的。", cite: ["frps-xfht", "foc-xfht"] },
        { q: "古书里叫它什么？", a: "明代的《群芳谱》就叫它西府海棠，《本草纲目》叫它海红，河北有的地方叫它子母海棠。", cite: ["frps-xfht"] },
        { q: "它的果子能吃吗？", a: "它的果子酸甜，可以鲜吃，也能加工。不过公园里的果子可能打过药，我们只看不摘。", cite: ["frps-xfht"] },
        { q: "它和苹果有什么关系？", a: "它们都是苹果属的。华北有些地方用它当苹果的砧木：把苹果的枝条嫁接到它身上。", cite: ["frps-xfht", "foc-xfht"] },
        { q: "北京哪儿看它？", a: "故宫御花园和颐和园的西府海棠很有名。颐和园耕织图一带，春天也能看到它。", cite: ["bj-haitang", "bj-huahai"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花和果子；公园里的果子可能打过药，不放进嘴里。",
  nextTime: "看到海棠先看花梗：花是垂下来的吗？再看树枝是向上长，还是向四周张开。",
  sources: [
    { id: "foc-xfht", title: "Malus × micromalus 西府海棠", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242411229" },
    { id: "frps-xfht", title: "西府海棠 Malus × micromalus", by: "中国植物志 第36卷", url: "https://www.iplant.cn/info/%E8%A5%BF%E5%BA%9C%E6%B5%B7%E6%A3%A0?t=z" },
    { id: "foc-cs", title: "Malus halliana 垂丝海棠", by: "Flora of China", url: "https://www.iplant.cn/info/Malus%20halliana?t=foc" },
    { id: "foc-htm", title: "Malus spectabilis 海棠花", by: "Flora of China", url: "https://www.iplant.cn/info/Malus%20spectabilis?t=foc" },
    { id: "bj-haitang", title: "本期花主：海棠", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/bzhz/201604/t20160426_758330.shtml" },
    { id: "bj-huahai", title: "2024年春季全市公园赏花片区统计表", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ggfw/gyfjqyl/gyhd/202404/t20240430_3649525.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
