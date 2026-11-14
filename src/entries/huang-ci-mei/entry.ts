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
        caption: "亮黄色五瓣花朵与成排的椭圆形小叶",
        shoot: "开花时保持安全距离微距拍一段枝条：亮黄花瓣、成排的小叶和枝上的扁直刺同框",
      },
      points: [
        {
          x: 0.45,
          y: 0.48,
          label: "亮黄离生花瓣",
          detail: "花朵单生在叶腋，直径 3～4（偶达 5）厘米，野生型有 5 片亮黄色花瓣，公园里也常种重瓣品种，花瓣一片片分开不连成筒。",
          cite: ["foc-hcm"],
        },
        {
          x: 0.25,
          y: 0.35,
          label: "7～13 片迷你小叶",
          detail: "一整片奇数羽状复叶长只有 3～5 厘米，上面排着 7～13 片圆卵形或椭圆形小叶，每片才 6～18 毫米长。",
          cite: ["foc-hcm"],
        },
        {
          x: 0.72,
          y: 0.65,
          label: "花梗光溜溜无刺毛",
          detail: "托着花朵的花梗长 1～1.5 厘米，表面光滑无毛，也没有黏黏的腺毛。",
          cite: ["foc-hcm"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看笔直的扁硬刺",
      shot: {
        photo: "thorn-macro",
        caption: "枝条上密生的笔直扁平硬皮刺与羽状复叶",
        shoot: "小心别碰到刺，侧面拍一段黄刺玫枝条，看清基部宽扁、尖端笔直的皮刺",
      },
      text: "黄刺玫名字里的「刺」真不客气！枝条上长满笔直坚硬的皮刺，最长可达 1.2 厘米，刺身扁扁的，到底部突然张开成椭圆形底座，但枝上没有细碎的小针毛。",
      zoom: 2.5,
      start: [0.46, 0.48],
      cite: ["foc-hcm"],
    },
    {
      type: "lookalike",
      title: "公园里的黄花灌木：黄刺玫还是连翘？",
      quiz: true,
      items: [
        {
          name: "连翘",
          scientific: "Forsythia suspensa",
          shot: { photo: "look-lq", caption: "四瓣连成小钟状、枝条无刺的连翘" },
          tells: [
            "3～4 月先开花后长叶，4 片窄长花瓣在基部连成小管钟",
            "枝条光滑没有刺、节间中空，后来长出对生单叶（偶三小叶）",
          ],
        },
        {
          name: "黄刺玫",
          scientific: "Rosa xanthina",
          self: true,
          shot: { photo: "look-hcm", caption: "五瓣离生、配着小复叶和硬刺的黄刺玫" },
          tells: [
            "4～5 月长出叶子后再开花，5 片（或重瓣）宽花瓣一片片分开",
            "枝条密生笔直扁硬刺，一片复叶上有 7～13 片很小的椭圆形小叶",
          ],
        },
      ],
      cite: ["foc-hcm", "foc-lq"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "黄刺玫 4～6 月开花、7～8 月结果；在中国，大家 4～5 月拍到它最多，接在迎春、连翘谢幕之后把春末染成亮黄色。我们是哪个月遇见它的？",
      cite: ["foc-hcm", "bj-huahai"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "为什么公园里的黄刺玫有的单瓣、有的重瓣？",
          a: "《中国植物志》记录它有两个类型：山坡野生的「单瓣黄刺玫」只有 5 片花瓣；公园常种的「重瓣黄刺玫」花瓣层层叠叠像小黄玫瑰！",
          cite: ["foc-hcm"],
        },
        {
          q: "在北京北边哪些公园能看到它？",
          a: "它是北京春季赏花名录的常客！昌平区的东小口城市休闲公园、贺新公园、霍营公园和南口公园，每到 4～5 月都能见到黄刺玫花开满树。",
          cite: ["bj-huahai"],
        },
        {
          q: "花谢了以后会结什么果子？",
          a: "7～8 月会结出近球形的紫褐色或黑褐色「蔷薇果」，直径 8～10 毫米，果顶还留着向后翻卷的 5 片宿存萼片。",
          cite: ["foc-hcm"],
        },
        {
          q: "它是从外国引进的黄玫瑰吗？",
          a: "不是，它是地道的中国北方乡土灌木！河北、山西、山东、陕西、甘肃和东北的山坡灌丛里本来就长着野生的黄刺玫，耐寒又耐旱。",
          cite: ["foc-hcm", "wiki-en"],
        },
      ],
    },
  ],
  care: "枝条上全是又直又硬的扁刺，拍照和观察时一定离枝条远一点，别伸手摸花或钻进绿篱，免得扎伤手脸、勾破衣服。",
  nextTime: "不用手碰，隔着安全距离数一数：一根叶轴上到底排着几对小叶片？枝头开的是 5 瓣花还是重瓣花？",
  sources: [
    {
      id: "foc-hcm",
      title: "Rosa xanthina 黄刺玫",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200011339",
    },
    {
      id: "foc-lq",
      title: "Forsythia suspensa 连翘",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017769",
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
