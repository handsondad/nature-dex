import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "sang-shu",
  name: "桑",
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
        caption: "同一株桑树上既有不裂的卵形叶，也有裂成几瓣的叶子",
        shoot: "在一棵桑树上找一根同时长着整片圆卵叶和深裂叶的枝条拍下来",
      },
      points: [
        {
          x: 0.35,
          y: 0.28,
          label: "不裂的亮绿卵形叶",
          detail: "老树枝上的叶子常常不分裂，呈卵形或宽卵形，正面亮绿色、光溜溜的。",
          cite: ["foc-sang", "wiki-en"],
        },
        {
          x: 0.62,
          y: 0.56,
          label: "裂成好几瓣的异形叶",
          detail: "幼树或徒长新枝上的叶子常常深裂成好几瓣，像戴了小手套，和整片叶长在同一棵树上！",
          cite: ["foc-sang", "wiki-en"],
        },
        {
          x: 0.42,
          y: 0.78,
          label: "粗粗的圆锯齿边",
          detail: "不管叶片裂不裂，边缘都有一圈粗粗的锯齿或圆齿，基部像浅浅的心形。",
          cite: ["foc-sang"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一串「聚花果」",
      shot: {
        photo: "fruit-macro",
        caption: "一粒粒小果挤成一串桑葚",
        shoot: "凑近拍一两颗成熟的桑葚，看清表面一粒粒鼓起来的小果肉",
      },
      text: "桑葚不是一朵花结出的单果，而是一整穗雌花一起变成的「聚花果」！表面每一小粒鼓包，原本都是一朵小雌花的肉质花萼，包着里面真正的小瘦果。",
      zoom: 2.6,
      start: [0.46, 0.5],
      cite: ["foc-morus", "foc-sang"],
    },
    {
      type: "steps",
      title: "桑葚一步步变颜色",
      steps: [
        {
          photo: "step-pale",
          label: "青白花穗",
          text: "4～5 月，叶腋里冒出短短的青绿色花穗，一朵朵小花挤在一起。",
          caption: "春天嫩叶间的青绿色花穗",
          shoot: "4 月拍桑树新枝上刚冒出来的青绿色小花穗",
        },
        {
          photo: "step-red",
          label: "变红鼓起",
          text: "授粉后，每朵雌花的花萼慢慢变厚、变多汁，整串果子先变成鲜艳的红色，这时候还酸酸的没熟透。",
          caption: "正在变红的未熟桑葚",
          shoot: "5 月拍枝头变红的桑葚",
        },
        {
          photo: "step-purple",
          label: "紫黑熟透",
          text: "5～6 月熟透后，长 1～2.5 厘米的聚花果变成紫黑色（也有成熟后仍是白绿色的栽培品种），吸引鸟儿来啄食传播种子。",
          caption: "熟透变紫黑色的桑葚",
          shoot: "5 月底到 6 月拍枝头变紫黑色的成熟桑葚",
        },
      ],
      cite: ["foc-sang", "foc-morus", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "桑树 4～5 月开花，5～8 月结果；在中国，大家 5 月拍到它最多，标注结果的也集中在 5、6 月。我们是哪个月遇见它的？",
      cite: ["foc-sang"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它的雄花真是植物界的「神射手」？",
          a: "科学家用高速摄影机拍到，桑树雄花弯曲的花丝像拉紧的小弹弓，花开瞬间在不到 25 微秒内弹直，把花粉以超过音速一半的速度弹射出去！",
          cite: ["taylor-2006", "wiki-en"],
        },
        {
          q: "蚕宝宝为什么最爱吃桑叶？",
          a: "桑树原本就产自中国华北和华中。中国人种桑养蚕已经有 4700 多年历史，家蚕世世代代都靠鲜嫩的桑叶长大吐丝。",
          cite: ["foc-sang", "wiki-en"],
        },
        {
          q: "为什么它的学名叫「白桑」？",
          a: "学名里的 alba 是「白色」的意思——因为最早命名时看到的栽培品种成熟果实偏白绿色，其实野生和常见的桑葚熟透大多是紫黑色的。",
          cite: ["foc-sang", "wiki-en", "wiki-zh"],
        },
        {
          q: "桑树皮还能拿来做什么？",
          a: "桑树皮里的纤维又长又结实，古人很早就用它来造「桑皮纸」，写字画画能保存很久。",
          cite: ["foc-sang", "wiki-en", "wiki-zh"],
        },
      ],
    },
  ],
  care: "马路和小区里的绿化桑树可能打过药，掉地上的桑葚也容易沾脏招虫，只看不摘不捡来吃；小心紫黑果汁染花衣服。",
  nextTime: "下次遇见一棵桑树，绕着低处的树枝找一找：能不能在同一棵树上同时找到「不裂的圆叶」和「裂成好几瓣的花叶」？",
  sources: [
    {
      id: "foc-sang",
      title: "Morus alba 桑",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200006379",
    },
    {
      id: "foc-morus",
      title: "Morus 桑属",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=121220",
    },
    {
      id: "taylor-2006",
      title: "High-speed pollen release in the white mulberry tree, Morus alba L.",
      by: "Sexual Plant Reproduction",
      url: "https://doi.org/10.1007/s00497-005-0018-9",
    },
    {
      id: "wiki-en",
      title: "Morus alba",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Morus_alba",
    },
    {
      id: "wiki-zh",
      title: "白桑（桑）",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E7%99%BD%E6%A1%91",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
