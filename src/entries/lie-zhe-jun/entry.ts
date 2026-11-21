import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "lie-zhe-jun",
  name: "裂褶菌",
  scientific: "Schizophyllum commune",
  kind: "fungus",
  // 无柄毛绒小扇子加纵裂菌褶很好认；未拍到背面特写前先标 likely
  certainty: "likely",
  taxonomy: ["真菌界", "担子菌门", "伞菌纲", "伞菌目", "裂褶菌科", "裂褶菌属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "枯木上毛茸茸的裂褶菌",
    shoot: "在枯枝或老树桩上拍一簇白色毛茸茸的小扇子，背景干净，只拍不碰",
  },
  hello: "枯木上长出一朵朵白色毛绒小扇子，翻看背面，每片菌褶都从中间裂成两半。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "fans-wood",
        caption: "长在腐木上的裂褶菌：左边露出背面，右边是毛茸茸的正面",
        shoot: "枯树干或落枝上找一丛裂褶菌，斜拍同时露出毛茸茸的正面、波浪边和辐射状背面；只拍不碰",
      },
      points: [
        { x: 0.52, y: 0.43, label: "没有菌柄的小扇子", detail: "菌盖宽 1～4 厘米，没有菌柄，像小扇子或小贝壳一样直接贴在枯木上。", cite: ["kuo", "mdc"] },
        { x: 0.68, y: 0.27, label: "正面毛茸茸", detail: "菌盖正面干干的，长满白色到灰白色的细毛，摸上去像绒布，又韧又像皮革。", cite: ["kuo", "mdc"] },
        { x: 0.42, y: 0.56, label: "背面一条条“褶”", detail: "背面不是小孔，是从基部向外散开的一条条褶，每条都从中间纵向裂成两半。", cite: ["kuo", "mdc"] },
        { x: 0.36, y: 0.24, label: "长在枯枝枯木上", detail: "它常常一群群长在阔叶树的枯枝、倒木上，连木板上都能长。", cite: ["kuo", "mdc"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看裂成两半的菌褶",
      shot: {
        photo: "split-gills",
        caption: "裂褶菌背面的纵裂菌褶",
        shoot: "找一根自然掉落、背面朝外的枯枝，微距拍清从中间裂成两半的辐射状菌褶；不掰树皮",
      },
      text: "放大看背面：每条“菌褶”其实是一道折起来的褶子，从中间裂开，像两片贴在一起的薄片。孢子就长在这些褶子的表面上。",
      zoom: 2.6,
      start: [0.27, 0.42],
      cite: ["kuo", "mdc", "volk"],
    },
    {
      type: "steps",
      title: "从小白圈到小扇子",
      steps: [
        {
          photo: "step-young",
          label: "冒出来",
          text: "菌丝藏在枯枝里吃木头。准备好了，就从树皮上冒出一个个小白圈。",
          caption: "枯木上刚冒出来的一个个小白圈",
          shoot: "在长过裂褶菌的枯枝上找米粒大的小白点、小白圈，近一点拍；只拍不碰",
        },
        {
          photo: "step-cup",
          label: "小毛杯",
          text: "小白圈长成毛茸茸的小杯子，杯底已经能看到一条条褶。",
          caption: "毛茸茸的小杯子，里面露出褶",
          shoot: "从正面拍一个刚长成小杯子的裂褶菌，能看到杯里的褶",
        },
        {
          photo: "step-fan",
          label: "小扇子",
          text: "杯子一边长一边张开，变成一层层叠起来的小扇子，开始放出白色的孢子。",
          caption: "树干上一层层张开的裂褶菌",
          shoot: "过几周回到同一根枯枝，拍长成扇形、一层层叠起来的样子",
        },
      ],
      cite: ["mdc", "kuo"],
    },
    {
      type: "compare",
      title: "下雨后和天干时",
      before: {
        photo: "same-wet",
        label: "湿润时",
        caption: "湿润时张开的裂褶菌，背面的褶清清楚楚",
        shoot: "雨后第二天去拍一丛裂褶菌的背面，记住位置和角度",
      },
      after: {
        photo: "same-dry",
        label: "天干时",
        caption: "干燥时缩成一团、边缘卷起的裂褶菌",
        shoot: "连着晴几天后，在同一个位置、同一个角度再拍一张",
      },
      text: "天一干，裂褶菌就皱缩卷起来，变得硬硬的；等再下雨，它又吸水张开，接着放孢子。同一批小扇子一年里能这样开开合合好多次。",
      cite: ["volk", "mdc", "kuo"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年 12 个月都有人拍到它，4 月最多，6 月最少。它一年四季都在：天干就缩起来，等着下一场雨。我们是哪个月遇见它的？",
      cite: ["kuo", "mdc"],
    },
    {
      type: "lookalike",
      title: "枯木上的“小耳朵”“小扇子”，别认错",
      quiz: true,
      items: [
        {
          name: "毛木耳",
          scientific: "Auricularia cornea",
          shot: { photo: "look-ac", caption: "毛木耳" },
          tells: ["新鲜时软软的、像果冻，形状像耳朵，能长到 9 厘米宽", "背面光光的，没有一条条褶"],
        },
        {
          name: "裂褶菌",
          scientific: "Schizophyllum commune",
          self: true,
          shot: { photo: "look-lzj", caption: "裂褶菌" },
          tells: ["小小的，菌盖只有 1～4 厘米，正面白白的、毛茸茸", "背面是一条条从中间裂开的褶"],
        },
        {
          name: "毛栓菌",
          scientific: "Trametes hirsuta",
          shot: { photo: "look-th", caption: "毛栓菌" },
          tells: ["菌盖更大更厚，能长到 10 厘米，有一圈圈浅浅的环纹", "背面是密密麻麻的小圆孔，不是褶"],
        },
      ],
      cite: ["kuo", "mdc", "wu-2021", "kuo-th"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它真的有两万多种“性别”吗？",
          a: "真菌没有男女，而是分“交配型”。科学家估计裂褶菌有两万多种交配型，随便遇到一株陌生的裂褶菌，几乎都能配上对。",
          cite: ["volk", "wiki-en", "kothe-1996"],
        },
        {
          q: "干得硬邦邦，还能“醒”过来？",
          a: "能！天旱时它皱缩起来不长了，等雨来了再吸水张开、继续放孢子。一丛小扇子能这样用上一年多。",
          cite: ["volk", "mdc", "kuo"],
        },
        {
          q: "它的名字是什么意思？",
          a: "Schizophyllum 里的“Schiza”是“裂开”，说的就是裂开的菌褶；commune 是“常见、到处都有”。除了南极洲，每个大洲都找得到它。",
          cite: ["eid-2022", "volk", "kuo"],
        },
        {
          q: "蘑菇怎么从湿木头里钻到空气中？",
          a: "裂褶菌的菌丝伸进空气时，外面会穿上一层防水的“疏水蛋白”。科学家最早就是在裂褶菌身上找到这种蛋白的。",
          cite: ["wessels-1991", "wiki-en"],
        },
        {
          q: "为什么不要凑近闻它？",
          a: "医生记录过一些病例：裂褶菌进了人的鼻子、肺里，让人生病，主要是身体弱的人。看蘑菇时保持一点距离就好。",
          cite: ["chowdhary-2014", "volk"],
        },
      ],
    },
  ],
  care: "枯木上的蘑菇只看不碰、不采、不吃，好看的、像能吃的都一样；也别凑近鼻子闻。",
  nextTime: "天晴和雨后分别去看看同一根枯枝上的裂褶菌：小扇子是不是晴天卷成小团、雨后又舒展开了？",
  sources: [
    { id: "kuo", title: "Schizophyllum commune", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/schizophyllum_commune.html" },
    { id: "mdc", title: "Common Split Gill", by: "Missouri Department of Conservation", url: "https://mdc.mo.gov/discover-nature/field-guide/common-split-gill" },
    { id: "volk", title: "Schizophyllum commune, the split gill fungus", by: "Tom Volk's Fungus of the Month", url: "https://botit.botany.wisc.edu/toms_fungi/feb2000.html" },
    { id: "eid-2022", title: "Etymologia: Schizophyllum commune", by: "Emerging Infectious Diseases, 2022", url: "https://doi.org/10.3201/eid2803.211051" },
    { id: "kothe-1996", title: "Tetrapolar fungal mating types: Sexes by the thousands", by: "FEMS Microbiology Reviews, 1996", url: "https://doi.org/10.1111/j.1574-6976.1996.tb00227.x" },
    { id: "wessels-1991", title: "Hydrophobin Genes Involved in Formation of Aerial Hyphae and Fruit Bodies in Schizophyllum", by: "The Plant Cell, 1991", url: "https://doi.org/10.1105/tpc.3.8.793" },
    { id: "chowdhary-2014", title: "Recognizing filamentous basidiomycetes as agents of human disease: A review", by: "Medical Mycology, 2014", url: "https://doi.org/10.1093/mmy/myu047" },
    { id: "wu-2021", title: "Global Diversity and Updated Phylogeny of Auricularia (Auriculariales, Basidiomycota)", by: "Journal of Fungi, 2021", url: "https://doi.org/10.3390/jof7110933" },
    { id: "kuo-th", title: "Trametes hirsuta", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/trametes_hirsuta.html" },
    { id: "wiki-en", title: "Schizophyllum commune", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Schizophyllum_commune" },
  ],
  by: ["kid", "dad"],
};

export default entry;
