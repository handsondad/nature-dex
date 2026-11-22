import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "sang-shu",
  name: "桑",
  pinyin: "sāng",
  scientific: "Morus alba",
  kind: "plant",
  // 北方还有蒙桑（叶边锯齿带细刺尖）和鸡桑：看清叶缘粗钝齿、雌花几乎没有花柱再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "桑科", "桑属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "绿叶间渐渐变红的桑葚",
    shoot: "5～6 月在胡同或公园拍一根低处的桑树枝：亮绿色的桑叶和正在变色的桑葚都在画面里",
  },
  hello: "同一棵树上长着好几种形状的叶子，结出一串串变色的小桑葚。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-shapes",
        caption: "同一丛桑树上，有不裂的卵形叶，也有缺裂的叶子",
        shoot: "在一棵桑树上找一根同时长着整片卵形叶和缺裂叶的枝条拍下来",
      },
      points: [
        {
          x: 0.3,
          y: 0.1,
          label: "缺裂的叶",
          detail: "桑叶有时会裂开，缺口像被咬掉了一块；和不裂的叶子长在同一丛上。",
          cite: ["iplant-sang"],
        },
        {
          x: 0.85,
          y: 0.65,
          label: "不裂的卵形叶",
          detail: "大多数叶子是卵形或宽卵形，长 5～15 厘米，叶面光滑没有毛。",
          cite: ["iplant-sang"],
        },
        {
          x: 0.33,
          y: 0.47,
          label: "粗钝的锯齿",
          detail: "叶边一圈锯齿又粗又钝，摸上去不扎手；叶子基部圆圆的或微微凹成心形。",
          cite: ["iplant-sang"],
        },
        {
          x: 0.08,
          y: 0.4,
          label: "裂得更深的叶",
          detail: "这片叶的缺口更深。翻过来看背面：只在叶脉分叉的地方有一小撮毛。",
          cite: ["iplant-sang"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一串「聚花果」",
      shot: {
        photo: "fruit-macro",
        caption: "枝条上熟透的紫黑色桑葚",
        shoot: "凑近拍一两颗成熟的桑葚，看清表面一粒粒鼓起来的小果",
      },
      text: "一颗桑葚是一整串雌花一起长成的「聚花果」。每一粒小鼓包，都是一朵雌花的花被长大变成肉质，包着里面的小瘦果。",
      zoom: 2.6,
      start: [0.54, 0.81],
      cite: ["iplant-morus", "iplant-sang"],
    },
    {
      type: "steps",
      title: "桑葚一步步变颜色",
      steps: [
        {
          photo: "step-pale",
          label: "花穗",
          text: "4～5 月，新叶旁冒出淡绿色的小花穗。桑花没有花瓣，一朵朵小花挤成一串。",
          caption: "春天嫩叶间的淡绿色花穗",
          shoot: "4 月拍桑树新枝上刚冒出来的淡绿色小花穗",
        },
        {
          photo: "step-red",
          label: "变红",
          text: "雌花的花被慢慢长大、变得多汁，包住里面的小瘦果，整串先变成红色。",
          caption: "正在变红的桑葚",
          shoot: "5 月拍枝头变红的桑葚",
        },
        {
          photo: "step-purple",
          label: "紫黑",
          text: "5～6 月熟透，长 1～2.5 厘米，变成暗紫色到紫黑色；也有熟了还是白色的桑葚。",
          caption: "快熟透的暗紫色桑葚",
          shoot: "5 月底到 6 月拍枝头变紫黑色的成熟桑葚",
        },
      ],
      cite: ["iplant-sang", "iplant-morus"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "桑树 4～5 月开花，5～6 月结果；在中国，大家 5 月拍到它最多。我们是哪个月遇见它的？",
      cite: ["iplant-sang"],
    },
    {
      type: "lookalike",
      title: "哪一张是桑？",
      quiz: true,
      items: [
        {
          name: "构树",
          scientific: "Broussonetia papyrifera",
          shot: { photo: "look-gs", caption: "构树的叶子和橙红色的果球" },
          tells: ["叶面摸着糙糙的，背面有一层毛", "果子是圆圆的球，熟了是橙红色"],
        },
        {
          name: "桑",
          scientific: "Morus alba",
          self: true,
          shot: { photo: "look-sang", caption: "桑树的叶子和颜色不一的桑葚" },
          tells: ["叶面光滑，锯齿粗钝", "果子是长椭圆的一串，红色到暗紫色"],
        },
        {
          name: "蒙桑",
          scientific: "Morus mongolica",
          shot: { photo: "look-ms", caption: "蒙桑的叶子" },
          tells: ["叶边是三角形的锯齿，齿尖拖着一根长长的细刺", "雌花有明显的花柱；北京西边的山里能见到"],
        },
      ],
      cite: ["iplant-gs", "iplant-sang", "iplant-ms", "bj-sang"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "桑树开花会「放炮」？",
          a: "雄蕊在花苞里是弯着的。开花时它不到 25 微秒就弹直，把花被往外弹的速度超过音速一半，是目前生物里观察到最快的动作！",
          cite: ["taylor-2006", "iplant-morus"],
        },
        {
          q: "蚕宝宝怎么找到桑叶？",
          a: "靠闻！桑叶会散发一种叫「顺式茉莉酮」的气味，只要极少极少一点，蚕在 20 厘米外就能闻到。",
          cite: ["tanaka-2009"],
        },
        {
          q: "人们种桑树主要为了什么？",
          a: "采叶养蚕！北宋张俞写过「遍身罗绮者，不是养蚕人」：穿绸缎的，往往不是辛苦养蚕的人。",
          cite: ["bj-sang", "iplant-sang"],
        },
        {
          q: "北京哪儿的桑树最多？",
          a: "大兴。北京的桑园大部分在大兴，那里还有古桑园。相传刘秀曾在大兴的桑林里靠吃桑葚过了 30 多天。",
          cite: ["bj-sang"],
        },
        {
          q: "桑树皮和木头能做什么？",
          a: "树皮的纤维柔细，可以纺织、造纸；木头坚硬，能做家具、乐器和雕刻。",
          cite: ["iplant-sang", "iplant-morus"],
        },
      ],
    },
  ],
  care: "马路和小区里的绿化桑树可能打过药，掉地上的桑葚也容易沾脏招虫，只看不摘不捡来吃；小心紫黑果汁染花衣服。",
  nextTime: "下次遇见一棵桑树，绕着低处的树枝找一找：能不能在同一棵树上同时找到「不裂的圆叶」和「裂成好几瓣的花叶」？",
  sources: [
    {
      id: "iplant-sang",
      title: "桑 Morus alba",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Morus%20alba",
    },
    {
      id: "iplant-morus",
      title: "桑属 Morus",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Morus",
    },
    {
      id: "iplant-ms",
      title: "蒙桑 Morus mongolica",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Morus%20mongolica",
    },
    {
      id: "iplant-gs",
      title: "构树 Broussonetia papyrifera",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Broussonetia%20papyrifera",
    },
    {
      id: "taylor-2006",
      title: "High-speed pollen release in the white mulberry tree, Morus alba L.",
      by: "Taylor et al., Sexual Plant Reproduction (2006)",
      url: "https://doi.org/10.1007/s00497-005-0018-9",
    },
    {
      id: "tanaka-2009",
      title: "Highly selective tuning of a silkworm olfactory receptor to a key mulberry leaf volatile",
      by: "Tanaka et al., Current Biology (2009)",
      url: "https://doi.org/10.1016/j.cub.2009.04.035",
    },
    {
      id: "bj-sang",
      title: "桑椹——小家碧玉别样俏",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/cy/202108/t20210815_2468582.shtml",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
