import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-che-zhou-cao",
  name: "白车轴草",
  scientific: "Trifolium repens",
  kind: "plant",
  // 草坪上还有红车轴草等近缘种：确认茎贴地节上生根、圆花头白色带淡粉，再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "豆目", "豆科", "车轴草属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "草坪上成片的白车轴草",
    shoot: "4～6 月在公园草坪俯拍一片白车轴草：白色圆花头和带浅色纹的三叶都在画面里",
  },
  hello: "草坪上到处是三片一套的小叶，白花球其实挤着几十朵小花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "plant-leaf",
        caption: "白车轴草的圆花头和三片小叶",
        shoot: "俯拍一丛开花植株：一朵白色圆花头和几片清楚的三出复叶同框",
      },
      points: [
        {
          x: 0.47,
          y: 0.6,
          label: "圆圆的白花球",
          detail: "花球宽 1.5～4 厘米，其实是 20～50 朵白色或带淡粉的小花挤在一起。",
          cite: ["foc-bczc"],
        },
        {
          x: 0.54,
          y: 0.24,
          label: "三片一套的小叶",
          detail: "一片叶子分成 3 片倒卵形小叶，都从叶柄顶端的同一个点长出来。",
          cite: ["foc-bczc"],
        },
        {
          x: 0.78,
          y: 0.5,
          label: "浅色「V」字斑",
          detail: "小叶正面常有一道浅白色的「V」字形斑纹，有的清楚，有的很淡，也有的没有。",
          cite: ["ilwf-bczc", "aob-vmark"],
        },
        {
          x: 0.09,
          y: 0.36,
          label: "顶端微微凹",
          detail: "小叶顶端浅浅地凹进去或圆圆的，叶边有一圈很细的小锯齿。",
          cite: ["foc-bczc", "ilwf-bczc"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一朵「白花球」",
      shot: {
        photo: "flower-macro",
        caption: "圆花头里挤满蝶形小花",
        shoot: "凑近侧面平拍一朵盛开的白色花球，让一朵朵蝶形小花都清清楚楚",
      },
      text: "白花球不是一朵花，而是几十朵 5～12 毫米长的蝶形小花，像一颗颗小豆子花。它们有淡淡的香味，常有熊蜂和蜜蜂来采蜜。",
      zoom: 2.5,
      start: [0.5, 0.45],
      cite: ["foc-bczc", "ilwf-bczc"],
    },
    {
      type: "steps",
      title: "一个花球的一生",
      steps: [
        {
          photo: "step-bud",
          label: "花苞",
          text: "长长的花梗顶上，先冒出一个绿色的小圆球，里面是几十个挤在一起的花苞。",
          caption: "还没开的绿色花苞球",
          shoot: "找一个还没开、绿色紧紧的花苞球，凑近拍",
        },
        {
          photo: "step-open",
          label: "外圈先开",
          text: "外面一圈小花先张开，中间的还是花苞。小花从外往里一圈一圈地开。",
          caption: "外圈开了、中间还是花苞的花球",
          shoot: "拍一朵外圈白花张开、中心还是绿色花苞的花球",
        },
        {
          photo: "step-half",
          label: "往下弯",
          text: "授过粉的小花，花梗往下弯，慢慢变成褐色，把上面的位置让给还没授粉的小花。",
          caption: "下半圈垂下、上面还开着白花的花球",
          shoot: "找一朵下半圈小花垂下变褐、顶上还白的花球，从侧面拍",
        },
        {
          photo: "step-pods",
          label: "结豆荚",
          text: "最后整个花球都垂下变褐。每朵枯花里藏着一个细长的小豆荚，有 2～4 颗种子。",
          caption: "全部垂下变褐的花球",
          shoot: "找一朵全部垂下、变成褐色的花球，凑近拍",
        },
      ],
      cite: ["foc-bczc", "ahmad-2016", "ilwf-bczc"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "白车轴草 5～10 月开花结果；在中国，大家 3～5 月拍到它最多，4、5 月最常拍到成片白花球。我们是哪个月遇见它的？",
      cite: ["foc-bczc"],
    },
    {
      type: "lookalike",
      title: "草地上的「三叶草」，别认错",
      quiz: true,
      items: [
        {
          name: "酢浆草",
          scientific: "Oxalis corniculata",
          shot: { photo: "look-cjc", caption: "开黄花的酢浆草" },
          tells: [
            "开亮黄色的 5 瓣小花，不是白色圆花球",
            "小叶顶端凹得很深，像三颗小爱心",
            "结细长、有 5 条棱的小果子",
          ],
        },
        {
          name: "白车轴草",
          scientific: "Trifolium repens",
          self: true,
          shot: { photo: "look-bczc", caption: "白车轴草" },
          tells: [
            "几十朵白色小花挤成圆球，花梗长长的，比叶子高",
            "小叶顶端浅浅地凹，常带浅色「V」字斑",
            "茎贴着地面爬，节上长根",
          ],
        },
        {
          name: "红车轴草",
          scientific: "Trifolium pratense",
          shot: { photo: "look-hcz", caption: "红车轴草" },
          tells: [
            "花球多是紫红色或粉色，很少是白的",
            "花球几乎贴着叶子长，下面托着两片小叶",
            "茎直直地站起来，能长到半米多高",
          ],
        },
      ],
      cite: ["foc-bczc", "foc-cjc", "foc-hcz", "ilwf-bczc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "四叶草有多难找？",
          a: "欧洲有人数了大约 570 万片三叶草，平均约 5000 片里才有 1 片四叶草。科学家发现，长几片小叶和基因有关。",
          cite: ["wiki-4leaf", "tashiro-2010"],
        },
        {
          q: "叶子上的白色「V」字是怎么来的？",
          a: "那块地方的叶子结构不一样，把光反射得更多，看起来就发白。科学家测过：有白斑的叶子照样能好好做光合作用。",
          cite: ["aob-vmark"],
        },
        {
          q: "它的根底下藏着什么帮手？",
          a: "它是豆科植物，根上的小疙瘩（根瘤）里住着细菌，能把空气里的氮变成养料，让土地更肥。",
          cite: ["ilwf-bczc", "wiki-en"],
        },
        {
          q: "剪草机剪过，它怎么还在？",
          a: "它的茎贴着地面横着爬，一年能爬大约 18 厘米，节上不断扎根、长新叶。剪草机剪掉高处的叶子，贴地的茎还在。",
          cite: ["foc-bczc", "wiki-en"],
        },
        {
          q: "为什么花球下半截是褐色的？",
          a: "外圈的小花先开，授粉后大约一星期就往下弯、变褐，把位置让给里面的新花。花球就这样从下往上慢慢变褐。",
          cite: ["ahmad-2016"],
        },
      ],
    },
  ],
  care: "蹲在草坪边轻轻翻看找四叶草，不连根拔。草坪可能打过药，摸完洗手，叶子和花不放进嘴里。",
  nextTime: "下次在草坪上找一朵一半白、一半褐的花球，数一数垂下来的小花有几朵？",
  sources: [
    {
      id: "foc-bczc",
      title: "Trifolium repens 白车轴草",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012344",
    },
    {
      id: "foc-hcz",
      title: "Trifolium pratense 红车轴草",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012343",
    },
    {
      id: "foc-cjc",
      title: "Oxalis corniculata 酢浆草",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012375",
    },
    {
      id: "ilwf-bczc",
      title: "White Clover (Trifolium repens)",
      by: "Illinois Wildflowers",
      url: "https://home.illinoiswildflowers.info/weeds/plants/white_clover.htm",
    },
    {
      id: "ahmad-2016",
      title: "Is Recurving an Effective Strategy of Trifolium repens L. to Augment Reproduction?",
      by: "Scientifica, 2016",
      url: "https://doi.org/10.1155/2016/4741086",
    },
    {
      id: "aob-vmark",
      title: "Genetics and plasticity of white leaf mark variegation in white clover (Trifolium repens L.)",
      by: "Annals of Botany, 2024",
      url: "https://doi.org/10.1093/aob/mcae129",
    },
    {
      id: "tashiro-2010",
      title: "Leaf Trait Coloration in White Clover and Molecular Mapping of the Red Midrib and Leaflet Number Traits",
      by: "Crop Science, 2010",
      url: "https://doi.org/10.2135/cropsci2009.08.0457",
    },
    {
      id: "wiki-en",
      title: "Trifolium repens",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Trifolium_repens",
    },
    {
      id: "wiki-4leaf",
      title: "Four-leaf clover",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Four-leaf_clover",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
