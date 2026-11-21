import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// efloras（Flora of China）目前要过人机验证，形态数据改核对植物智收录的《中国植物志》描述。
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
      shot: { photo: "id-shot", caption: "一朵开着的月季和旁边排队的花苞", shoot: "靠近拍一枝：开着的花、旁边的花苞和花梗都要拍进去" },
      points: [
        { x: 0.42, y: 0.42, label: "半重瓣到重瓣", detail: "花径 4～5 厘米，花瓣一层叠一层，顶端常有个小凹缺；红、粉红、白都有。", cite: ["iplant-yj"] },
        { x: 0.53, y: 0.56, label: "花心", detail: "中间一圈是雄蕊；花柱彼此分开、伸出花萼，长短和雄蕊差不多。", cite: ["iplant-yj"] },
        { x: 0.74, y: 0.2, label: "几朵挤在一起", detail: "花常常几朵集生，很少单独一朵：一朵开了，旁边的花苞还在排队。", cite: ["iplant-yj"] },
        { x: 0.295, y: 0.72, label: "花梗", detail: "花梗长 2.5～6 厘米，有的光溜溜，有的带着细细的腺毛。", cite: ["iplant-yj"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花萼",
      shot: {
        photo: "sepal-macro",
        caption: "从下面看一朵月季：绿色的萼片托着花瓣",
        shoot: "蹲下来从花的背面拍，让绿色萼片清清楚楚",
      },
      text: "翻到花的背面，绿色的萼片先端拖着长长的尾尖，边上常常分出细细的羽状小裂片，像长了小胡子。",
      zoom: 2.2,
      start: [0.5, 0.49],
      cite: ["iplant-yj"],
    },
    {
      type: "steps",
      title: "一朵月季怎么开",
      steps: [
        {
          photo: "step-bud",
          label: "花苞",
          text: "萼片裹着花瓣，只露出一点红色的尖。",
          caption: "两个快要开的红色花苞",
          shoot: "拍一个刚露出颜色的花苞",
        },
        {
          photo: "step-open",
          label: "半开",
          text: "花瓣一片片松开，像卷着的纸慢慢摊开。左下角那朵已经谢了。",
          caption: "正在打开的粉色花苞，旁边一朵已经凋谢",
          shoot: "过两三天回到同一个花苞，再拍一次",
        },
        {
          photo: "step-bloom",
          label: "盛开",
          text: "完全打开，露出黄色的花心。花期从 4 月一直到 9 月，开完一朵又接着下一朵。",
          caption: "完全打开的粉色月季",
          shoot: "花全开时拍正面，看清花心",
        },
      ],
      cite: ["iplant-yj"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "书上写月季 4～9 月开花、6～11 月结果；北京街头从 5 月到 11 月都有月季在开，2000 多万株连成约 300 公里的「月季项链」。它多是种的，所以网上的野外记录反而很少。我们是哪个月遇见它的？",
      cite: ["iplant-yj", "bj-yueji"],
    },
    {
      type: "lookalike",
      title: "月季、玫瑰还是野蔷薇？",
      quiz: true,
      items: [
        {
          name: "玫瑰",
          scientific: "Rosa rugosa",
          shot: { photo: "look-mei-gui", caption: "玫瑰的皱叶和扁圆果" },
          tells: [
            "小叶 5～9 片，叶脉深深凹下去，皱巴巴的，背面毛茸茸",
            "枝上密密麻麻全是刺和针刺，花期 5～6 月",
          ],
        },
        {
          name: "月季",
          scientific: "Rosa chinensis",
          self: true,
          shot: { photo: "look-yue-ji", caption: "月季的花和枝叶" },
          tells: [
            "小叶 3～5 片，叶面平整，常带光泽",
            "刺短粗带钩，或几乎没刺；4～9 月一茬接一茬地开",
          ],
        },
        {
          name: "野蔷薇",
          scientific: "Rosa multiflora",
          shot: { photo: "look-yqw", caption: "一大串白色小花的野蔷薇" },
          tells: [
            "攀援灌木，长长的枝条爬在墙上、篱笆上",
            "小叶 5～9 片，白色小花一大串一大串地开",
          ],
        },
      ],
      cite: ["iplant-mg", "iplant-yj", "iplant-yqw"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "北京的市花是什么？", a: "有两种：月季和菊花。1987 年北京市人民代表大会通过决定把它们定为市花，评选时月季得了 51% 的票。", cite: ["bj-trees"] },
        { q: "为什么叫「月季」？", a: "它几乎每个月都开。明代《群芳谱》说它「一名长春花，一名月月红……逐月开放，四时不绝」。", cite: ["bj-yueji"] },
        { q: "它为什么能一直开？", a: "很多野蔷薇一年只在春天开一次。月季身上管「先别开花」的 KSN 基因被一段会跳的 DNA 卡住了，于是天气合适就一直开。", cite: ["iwata-2012"] },
        { q: "奥运会的花束里有它吗？", a: "有！2008 年北京奥运会颁奖花束里，就用了一个叫「中国红」的月季品种。", cite: ["bj-yueji"] },
        { q: "它的老祖宗长什么样？", a: "野生的单瓣月季花长在湖北、四川、贵州的山里，花瓣只有一层，是国家二级保护植物。", cite: ["iplant-yjys"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花。茎上有刺，靠近时小心别扎到手。",
  nextTime: "过两周再来同一丛：是不是又开出新花了？数一数一片叶子有几片小叶。",
  sources: [
    { id: "iplant-yj", title: "月季花 Rosa chinensis", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Rosa%20chinensis" },
    { id: "iplant-yjys", title: "单瓣月季花 Rosa chinensis var. spontanea", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Rosa%20chinensis%20var.%20spontanea" },
    { id: "iplant-mg", title: "玫瑰 Rosa rugosa", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Rosa%20rugosa" },
    { id: "iplant-yqw", title: "野蔷薇 Rosa multiflora", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Rosa%20multiflora" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
    { id: "bj-yueji", title: "花开锦绣映京城（一朵花读懂一座城）", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/jcyyshj/djsh/202506/t20250603_4104755.shtml" },
    { id: "iwata-2012", title: "The TFL1 homologue KSN is a regulator of continuous flowering in rose and strawberry", by: "Iwata et al., The Plant Journal (2012)", url: "https://doi.org/10.1111/j.1365-313x.2011.04776.x" },
  ],
  by: ["kid", "dad"],
};

export default entry;
