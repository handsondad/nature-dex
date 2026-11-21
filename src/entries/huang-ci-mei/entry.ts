import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "huang-ci-mei",
  name: "黄刺玫",
  scientific: "Rosa xanthina",
  kind: "plant",
  // 北方偶见重瓣或近似的峨眉蔷薇、刺梨等，看清花梗光滑无腺毛、扁直皮刺无细刚毛再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "蔷薇属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "枝头缀满亮黄色花朵的黄刺玫灌木",
    shoot: "4～5 月在公园绿篱边拍一整丛盛开的黄刺玫，亮黄花串和羽状小叶都清楚",
  },
  hello: "四五月的公园绿篱上，带硬刺的枝条开出一串串亮黄色的「小玫瑰」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-thorn",
        caption: "一朵单瓣黄刺玫、旁边的花苞和一串串小叶",
        shoot: "开花时保持安全距离拍一段枝条：黄花、花苞和成排的小叶同框",
      },
      points: [
        {
          x: 0.5,
          y: 0.48,
          label: "黄色的花，一朵一朵",
          detail: "花一朵一朵长在叶腋里，直径 3～4 厘米。单瓣的有 5 片宽宽的花瓣，顶端微微凹进去。",
          cite: ["iplant-dbhcm"],
        },
        {
          x: 0.3,
          y: 0.24,
          label: "一串迷你小叶",
          detail: "一片叶子由 7～13 片小叶排成，整片连叶柄才 3～5 厘米长，小叶圆圆的，边上有圆钝的锯齿。",
          cite: ["iplant-hcm"],
        },
        {
          x: 0.63,
          y: 0.25,
          label: "花梗光溜溜",
          detail: "托着花苞的花梗长 1～1.5 厘米，没有毛，也没有黏黏的腺点。",
          cite: ["iplant-dbhcm"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看枝上的硬刺",
      shot: {
        photo: "thorn-macro",
        caption: "灰白老枝和红褐色小枝上的硬皮刺",
        shoot: "小心别碰到刺，侧面拍一段黄刺玫枝条，看清枝上一根根的皮刺",
      },
      text: "名字里的「刺」可不是白叫的！枝条上散生着一根根硬硬的皮刺，叶轴和叶柄上也有小皮刺，但没有密密麻麻的细针刺。",
      zoom: 2.5,
      start: [0.39, 0.48],
      cite: ["iplant-hcm"],
    },
    {
      type: "steps",
      title: "从花苞到蔷薇果",
      steps: [
        {
          photo: "step-bud",
          label: "花苞",
          text: "4 月，小枝上冒出一个个尖尖的花苞，绿色的萼片包着淡黄的花瓣。",
          caption: "枝条上一个个还没开的花苞",
          shoot: "4 月拍一段挂满花苞的枝条",
        },
        {
          photo: "step-bloom",
          label: "开花",
          text: "4～6 月花开了，宽宽的黄花瓣中间是一大团黄色的雄蕊。",
          caption: "开满黄花的枝条",
          shoot: "花开最盛时拍几朵正面的花",
        },
        {
          photo: "step-hip",
          label: "结果",
          text: "7～8 月结出圆圆的蔷薇果，顶上的萼片向后翻。书上说熟透时是紫褐或黑褐色，去看看是不是这样？",
          caption: "顶着翻卷萼片的圆形蔷薇果",
          shoot: "7～8 月拍一颗蔷薇果，看清果顶翻卷的萼片和果子的颜色",
        },
      ],
      cite: ["iplant-hcm", "iplant-dbhcm"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "黄刺玫 4～6 月开花、7～8 月结果；在中国，大家 5 月拍到它最多，开花的照片多在 4 月。我们是哪个月遇见它的？",
      cite: ["iplant-hcm"],
    },
    {
      type: "lookalike",
      title: "春天的黄花灌木，别认错",
      quiz: true,
      items: [
        {
          name: "连翘",
          scientific: "Forsythia suspensa",
          shot: { photo: "look-lq", caption: "花瓣窄长、下面连成小管的连翘" },
          tells: ["3～4 月先开花、后长叶", "窄长的花瓣下面连成一根小管", "折断的枝条里面是空心的"],
        },
        {
          name: "黄刺玫",
          scientific: "Rosa xanthina",
          self: true,
          shot: { photo: "look-hcm", caption: "宽花瓣、小复叶、带刺枝条的黄刺玫" },
          tells: ["叶子长出来以后才开花", "宽宽的花瓣一片片分开", "一片叶子是一串 7～13 片小叶，枝上有刺"],
        },
        {
          name: "棣棠",
          scientific: "Kerria japonica",
          shot: { photo: "look-dt", caption: "绿色细枝、单片尖叶的棣棠" },
          tells: ["小枝是绿色的，常常弯垂下来", "一片叶子就是一整片，尖尖的，边上有尖锯齿"],
        },
      ],
      cite: ["iplant-lq", "iplant-hcm", "iplant-dt"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "为什么有的黄刺玫花瓣一层层，有的只有一圈？",
          a: "公园常种的黄刺玫是重瓣或半重瓣的；山坡上野生的「单瓣黄刺玫」只有一圈花瓣，它就是栽培黄刺玫的原始种。",
          cite: ["iplant-hcm", "iplant-dbhcm"],
        },
        {
          q: "它是从外国引进的黄玫瑰吗？",
          a: "不是！单瓣黄刺玫就长在黑龙江、内蒙古、河北、山西、陕西、甘肃等地向阳的山坡和灌丛里。",
          cite: ["iplant-dbhcm", "wiki-en"],
        },
        {
          q: "它有多不怕冷？",
          a: "野生的黄刺玫耐寒、耐旱、少生病，是培育月季的宝贵「家底」。科学家把它放到零下 20℃，研究它是怎么扛住冷的。",
          cite: ["zhuang-2021"],
        },
        {
          q: "花谢了以后会结什么果子？",
          a: "结出近球形的蔷薇果，直径 8～10 毫米，熟时紫褐或黑褐色，果顶的萼片向后翻。",
          cite: ["iplant-dbhcm"],
        },
        {
          q: "在北京哪些公园能看到它？",
          a: "北海公园、柳荫公园、万芳亭公园和昌平的东小口城市休闲公园等，春天的赏花名单里都有黄刺玫。",
          cite: ["bj-huahai"],
        },
      ],
    },
  ],
  care: "枝条上有很多硬刺，离远一点看和拍，别伸手摸花、别钻进绿篱。路边植物可能打过药，不放进嘴里。",
  nextTime: "隔着安全距离数一数：一片叶子上有几片小叶？枝头开的是单瓣花还是重瓣花？",
  sources: [
    {
      id: "iplant-hcm",
      title: "黄刺玫 Rosa xanthina",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Rosa%20xanthina",
    },
    {
      id: "iplant-dbhcm",
      title: "单瓣黄刺玫 Rosa xanthina f. normalis",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Rosa%20xanthina%20f.%20normalis",
    },
    {
      id: "iplant-lq",
      title: "连翘 Forsythia suspensa",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Forsythia%20suspensa",
    },
    {
      id: "iplant-dt",
      title: "棣棠 Kerria japonica",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Kerria%20japonica",
    },
    {
      id: "zhuang-2021",
      title: "Transcriptome and de novo analysis of Rosa xanthina f. spontanea in response to cold stress",
      by: "BMC Plant Biology, 2021",
      url: "https://doi.org/10.1186/s12870-021-03246-5",
    },
    {
      id: "bj-huahai",
      title: "2024年春季全市公园赏花片区统计表",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ggfw/gyfjqyl/gyhd/202404/t20240430_3649525.shtml",
    },
    {
      id: "wiki-en",
      title: "Rosa xanthina",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Rosa_xanthina",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
