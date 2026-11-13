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
          x: 0.48,
          y: 0.56,
          label: "圆圆的白花球",
          detail: "圆球花头宽约 1.5～4 厘米，其实是 20～50 朵白色或带淡粉的小花挤在一起。",
          cite: ["foc-bczc"],
        },
        {
          x: 0.72,
          y: 0.28,
          label: "三片一套的小叶",
          detail: "每片叶子通常分成 3 片倒卵形小叶，顶端微微凹进去，边上有细细的小锯齿。",
          cite: ["foc-bczc", "wiki-zh"],
        },
        {
          x: 0.25,
          y: 0.74,
          label: "浅色「V」字斑",
          detail: "小叶正面常常有一道浅白色或浅绿色的「V」字形斑纹，有的清晰，有的很淡。",
          cite: ["wiki-en", "aob-vmark"],
        },
        {
          x: 0.55,
          y: 0.86,
          label: "贴地爬行的茎",
          detail: "光滑的匍匐茎贴着地面生长，长 10～30 厘米，碰到泥土的节上会长出新根。",
          cite: ["foc-bczc", "wiki-en"],
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
      text: "白花球不是一朵花，而是几十朵长 5～12 毫米的蝶形小花。花有淡淡香味，常引来熊蜂和蜜蜂采蜜。",
      zoom: 2.5,
      start: [0.5, 0.45],
      cite: ["foc-bczc", "wiki-en"],
    },
    {
      type: "steps",
      title: "小花授粉前后的变化",
      steps: [
        {
          photo: "step-open",
          label: "朝上盛开",
          text: "刚开的时候，一朵朵白色小花朝上或朝外张开，等着蜂类飞来传粉。",
          caption: "朝上盛开的白色花头",
          shoot: "拍一朵刚盛开、小花全都朝上挺立的纯白花球",
        },
        {
          photo: "step-fade",
          label: "下垂变褐",
          text: "开过花、授完粉以后，2～5 毫米长的小花梗会往下弯垂，花瓣也慢慢变成褐色，里面结出藏着 2～4 颗种子的小豆荚。",
          caption: "部分小花下垂变褐的花头",
          shoot: "在同一片草坪找一朵外圈下垂变褐、中心还白的花球拍下来",
        },
      ],
      cite: ["foc-bczc", "wiki-en"],
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
            "开亮黄色 5 瓣小花，不是白色圆花球",
            "小叶顶端凹得很深，像三颗小爱心，上面没有白色「V」字斑",
            "叶子含草酸，又叫「三叶酸」，结细长角果",
          ],
        },
        {
          name: "白车轴草",
          scientific: "Trifolium repens",
          self: true,
          shot: { photo: "look-bczc", caption: "白车轴草" },
          tells: [
            "几十朵白粉色蝶形小花挤成圆球花头",
            "小叶倒卵形、浅浅凹口，常带浅色「V」字斑",
            "豆科植物，贴地匍匐茎节上生根",
          ],
        },
      ],
      cite: ["foc-bczc", "foc-cjc", "wiki-cjc"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "白车轴草花果期在 5～10 月；在中国，大家 3～5 月拍到它最多，4、5 月最常遇见成片白花球。我们是哪个月遇见它的？",
      cite: ["foc-bczc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "为什么偶尔能找到「四叶草」？",
          a: "受隐性基因和环境影响，叶芽发育时偶尔多长出一片小叶。欧洲调查了 570 万片三叶草，大约每 5000 片里就有 1 片四叶草！",
          cite: ["wiki-4leaf"],
        },
        {
          q: "它的根底下藏着什么帮手？",
          a: "它是豆科植物，根上长着小小的根瘤，里面住着共生的固氮菌，能把空气里的氮变成土壤养分，让身边的草也长得更好。",
          cite: ["wiki-en", "wiki-zh"],
        },
        {
          q: "剪草机剪过，它怎么还在？",
          a: "它的主茎贴着地面横着爬，一年能往前爬大约 18 厘米，节上不断扎根长新叶，所以剪草机剪掉高叶子也伤不到它的茎。",
          cite: ["foc-bczc", "wiki-en"],
        },
        {
          q: "为什么同一朵花球上半白下半褐？",
          a: "花球里的小花从外圈往中心一圈圈开。外圈先授完粉的小花会垂下花梗变褐，把显眼的中心位置留给还没授粉的新花。",
          cite: ["foc-bczc"],
        },
      ],
    },
  ],
  care: "蹲在草坪边轻轻翻看找四叶草就好，不连根拔起。公园草坪常喷养护药水，摸完洗洗手，不要把叶子和花放进嘴里。",
  nextTime: "下次在草坪上找一朵一半白、一半褐的花球，数一数外圈垂下来的小花有几朵？",
  sources: [
    {
      id: "foc-bczc",
      title: "Trifolium repens 白车轴草",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012344",
    },
    {
      id: "foc-cjc",
      title: "Oxalis corniculata 酢浆草",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012375",
    },
    {
      id: "wiki-en",
      title: "Trifolium repens",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Trifolium_repens",
    },
    {
      id: "wiki-zh",
      title: "白三叶草（白车轴草）",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E7%99%BD%E4%B8%89%E8%91%89%E8%8D%89",
    },
    {
      id: "wiki-4leaf",
      title: "Four-leaf clover",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Four-leaf_clover",
    },
    {
      id: "wiki-cjc",
      title: "酢浆草",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E9%85%A2%E6%B5%86%E8%8D%89",
    },
    {
      id: "aob-vmark",
      title: "Genetics and plasticity of white leaf mark variegation in white clover",
      by: "Annals of Botany",
      url: "https://doi.org/10.1093/aob/mcae129",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
