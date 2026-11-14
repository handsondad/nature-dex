import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 接受种名为 Prunus cerasifera（野生原种中文名樱桃李）；华北常见的紫叶李为紫叶栽培类型 f. atropurpurea。
const entry: Entry = {
  id: "zi-ye-li",
  name: "紫叶李",
  scientific: "Prunus cerasifera",
  kind: "plant",
  // 北方公园还有紫叶矮樱（叶基有腺点、叶窄倒卵形）和美人梅（重瓣），拍到单瓣5瓣长梗花与叶缘再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "满冠紫红色叶片的紫叶李树",
    shoot: "在公园或路边拍一整棵紫叶李：浓密的紫红色树冠和深色树干都拍进画面",
  },
  hello: "从春到秋一身紫红叶子，春天一边冒新叶一边开满粉白小花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-leaf",
        caption: "花叶同放的紫叶李枝条",
        shoot: "3～4 月开花时靠近低枝拍一张：粉白 5 瓣小花、细长暗红花梗和刚展开的紫红嫩叶同框",
      },
      points: [
        {
          x: 0.45,
          y: 0.36,
          label: "粉白五瓣小花",
          detail: "花朵单瓣、有 5 片花瓣，直径约 2～2.5 厘米，白色或淡粉色，中间簇拥着 25～30 根雄蕊。",
          cite: ["foc-ytl", "wiki-en"],
        },
        {
          x: 0.62,
          y: 0.52,
          label: "暗红细长花梗",
          detail: "花朵不是贴着树枝开的，每朵底下都托着一根 1～2.2 厘米长的细花梗，连花萼也常带暗红色。",
          cite: ["foc-ytl"],
        },
        {
          x: 0.25,
          y: 0.65,
          label: "花叶一起长出来",
          detail: "开花的同时，枝条上已经冒出一簇簇紫红色的椭圆形新叶，边上有细钝齿。",
          cite: ["foc-ytl", "wiki-en"],
        },
      ],
    },
    {
      type: "steps",
      title: "从粉白春花到暗红小李子",
      steps: [
        {
          photo: "step-flower",
          label: "春花盛开",
          text: "3～4 月，暗红色的花梗和花萼托起一朵朵粉白色 5 瓣小花，满树清香。",
          caption: "暗红花萼与粉白色五瓣花特写",
          shoot: "3～4 月微距拍一朵盛开的紫叶李花和暗红花萼",
        },
        {
          photo: "step-leaf",
          label: "满枝紫叶",
          text: "花谢之后，叶片越长越密，从春天、夏天到秋天一直保持醒目的紫红色。",
          caption: "春夏阳光下紫红色的叶片",
          shoot: "5～6 月拍一枝阳光下透亮的紫红色叶片",
        },
        {
          photo: "step-fruit",
          label: "结圆李子",
          text: "到了夏秋（7～8 月），枝头会挂起直径 2～3 厘米的球形暗红色小李子，表面蒙着薄薄白粉。",
          caption: "枝头成熟的暗红色球形果实",
          shoot: "7～8 月拍挂在紫红树叶间的暗红色圆果实",
        },
      ],
      cite: ["foc-ytl", "wiki-en", "bj-huahai"],
    },
    {
      type: "lookalike",
      title: "早春粉白花：紫叶李还是山桃？",
      quiz: true,
      items: [
        {
          name: "山桃",
          scientific: "Prunus davidiana",
          shot: { photo: "look-st", caption: "先花后叶、花朵贴枝盛开的山桃" },
          tells: [
            "先花后叶：开花时枝条光秃秃的还没有叶子，花谢后长出绿叶",
            "花朵几乎没有花梗，一朵朵直接贴在树枝上开",
          ],
        },
        {
          name: "紫叶李",
          scientific: "Prunus cerasifera",
          self: true,
          shot: { photo: "look-zyl", caption: "花梗细长、边长叶边开花的樱桃李（紫叶李）" },
          tells: [
            "花叶同放，每朵花底下都有一根 1～2 厘米的细长花梗",
            "紫叶品种的叶子从春到秋一年到头都是紫红色的",
          ],
        },
      ],
      cite: ["foc-ytl", "foc-st"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "紫叶李一般 3～4 月开花、8 月前后果熟，紫红叶子能从春赏到秋；在中国，大家 3～5 月拍到它最多。我们是哪个月遇见它的？",
      cite: ["foc-ytl", "bj-huahai"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它的野生祖先也长紫叶子吗？",
          a: "不是哦！这个物种的野生原种叫「樱桃李」，在我国新疆天山峡谷就有野生分布，原本是绿叶；北方常种的「紫叶李」（f. atropurpurea）是选育出的紫叶品种。",
          cite: ["foc-ytl", "wiki-zh"],
        },
        {
          q: "在北京北边哪些公园容易见到它？",
          a: "特别常见！昌平贺新公园把它列为全园骨干小乔木，东小口城市休闲公园、贺新公园、霍营公园的春季赏花名录里全都有紫叶李。",
          cite: ["bj-hexin", "bj-huahai"],
        },
        {
          q: "我们吃的大李子和它有关系吗？",
          a: "植物学家研究认为，樱桃李很可能就是欧洲栽培李（Prunus domestica）的野生亲本之一，许多果树还会用它当砧木。",
          cite: ["wiki-en"],
        },
        {
          q: "树上掉下来的暗红小李子能捡来吃吗？",
          a: "虽然樱桃李的果实本身无毒、有些地方会拿来做果酱，但城市公园和路边的绿化树常喷洒养护农药，而且味道很酸涩，千万别摘来吃。",
          cite: ["foc-ytl", "wiki-en"],
        },
      ],
    },
  ],
  care: "只看、拍照，不折花枝，也不摇树晃落花瓣雨；公园和路边树上结的小李子可能打过药，不摘也不捡来吃。",
  nextTime: "春天看花时低头找一找：紫叶李的花梗有多长？枝条上是不是已经同时冒出紫红色的小嫩叶了？",
  sources: [
    {
      id: "foc-ytl",
      title: "Prunus cerasifera 樱桃李",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200011156",
    },
    {
      id: "foc-st",
      title: "Amygdalus davidiana 山桃",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010610",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
    {
      id: "bj-huahai",
      title: "2024年春季全市公园赏花片区统计表",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ggfw/gyfjqyl/gyhd/202404/t20240430_3649525.shtml",
    },
    {
      id: "wiki-en",
      title: "Prunus cerasifera",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Prunus_cerasifera",
    },
    {
      id: "wiki-zh",
      title: "樱桃李",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E6%A8%B1%E6%A1%83%E6%9D%8E",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
