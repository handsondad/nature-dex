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
        caption: "长在腐木上的裂褶菌簇",
        shoot: "枯树干或落枝上找一丛裂褶菌，斜拍同时露出毛茸茸的正面、波浪边和辐射状背面；只拍不碰",
      },
      points: [
        { x: 0.42, y: 0.58, label: "没有菌柄的小扇子", detail: "菌盖宽 1～4 厘米，没有菌柄，直接像小贝壳或折扇一样贴在枯木上。", cite: ["wiki-en", "kuo"] },
        { x: 0.53, y: 0.52, label: "毛茸茸的波浪边", detail: "菌盖表面密生白色到灰白色的细绒毛，边缘常常裂成一瓣一瓣的波浪形。", cite: ["wiki-en", "kuo"] },
        { x: 0.42, y: 0.65, label: "辐射散开的裂褶", detail: "背面菌褶从基部向外辐射散开，每条菌褶都沿着中间纵向裂开。", cite: ["wiki-en", "kuo"] },
        { x: 0.18, y: 0.55, label: "专挑枯木安家", detail: "它是分解木材的木腐真菌，常一朵挨一朵叠生在腐烂的阔叶树枝干上。", cite: ["wiki-zh", "kuo"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看会开合的“双层菌褶”",
      shot: {
        photo: "split-gills",
        caption: "裂褶菌背面的纵裂菌褶",
        shoot: "找一根自然掉落、背面朝外的枯枝，微距拍清从中间裂成两半的辐射状菌褶；不掰树皮",
      },
      text: "放大看背面，一条条菌褶像从中间劈开一样分成两唇。天气干燥时裂口向两边卷起，护住产孢子的表面；下雨湿润后再重新张开。",
      zoom: 2.6,
      start: [0.48, 0.46],
      cite: ["wiki-en", "kuo", "volk"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，从冬天的 1、2 月到春天的 4 月、秋天的 10 月都有人拍到它——干缩的菌盖能留在树上很久。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "树干小扇子，别认错",
      quiz: true,
      items: [
        {
          name: "毛木耳",
          scientific: "Auricularia cornea",
          shot: { photo: "look-ac", caption: "毛木耳" },
          tells: [
            "湿润时软软的有弹性，呈耳状或杯状",
            "背面光滑或只有脉状皱褶，没有辐射状菌褶",
          ],
        },
        {
          name: "裂褶菌",
          scientific: "Schizophyllum commune",
          self: true,
          shot: { photo: "look-lzj", caption: "裂褶菌" },
          tells: [
            "菌盖小（1～4 厘米），正面满是白灰色绒毛",
            "背面有辐射状菌褶，且每片菌褶从中间纵向裂开",
          ],
        },
        {
          name: "毛栓菌",
          scientific: "Trametes hirsuta",
          shot: { photo: "look-th", caption: "毛栓菌" },
          tells: [
            "菌盖更大更厚，常有浅浅的同心环纹",
            "背面是密密麻麻的小圆孔，不是菌褶",
          ],
        },
      ],
      cite: ["kuo", "wiki-th"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它真的有两万多种“性别”吗？",
          a: "真菌没有男女之分，而是看遗传上的“交配型”。科学家算出裂褶菌有 23,328 种交配型，随便遇到另一株，98% 以上都能配对成功！",
          cite: ["kothe-1996", "wiki-en"],
        },
        {
          q: "晒干好几年还能“醒”过来？",
          a: "天旱时它会干缩休眠，甚至干上好几年都不坏；只要再淋到雨水，菌褶又能吸水舒展，继续释放白色的孢子。",
          cite: ["wiki-en", "volk"],
        },
        {
          q: "它的拉丁学名是什么意思？",
          a: "Schizophyllum 来自希腊语“裂开的叶片”，说的就是纵裂的菌褶；commune 是“常见、到处都有”的意思。",
          cite: ["wiki-en", "kuo"],
        },
        {
          q: "为什么不能凑太近对着它深呼吸？",
          a: "医学上曾记录过裂褶菌孢子进入人的鼻窦或肺部引起感染的罕见病例。观察枯木上的野菌时，保持距离看就好。",
          cite: ["wiki-en", "wiki-zh"],
        },
      ],
    },
  ],
  care: "野外枯木上的真菌只看不碰、不采也不吃，更不要凑近鼻子去闻孢子。",
  nextTime: "天晴和雨后分别去看看同一根枯枝上的裂褶菌：小扇子是不是晴天卷成小团、雨后又舒展开了？",
  sources: [
    { id: "wiki-en", title: "Schizophyllum commune", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Schizophyllum_commune" },
    { id: "wiki-zh", title: "裂褶菌", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%A3%82%E8%A4%B6%E8%8F%8C" },
    { id: "kuo", title: "Schizophyllum commune", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/schizophyllum_commune.html" },
    { id: "kothe-1996", title: "Tetrapolar fungal mating types: Sexes by the thousands", by: "FEMS Microbiology Reviews, 1996", url: "https://doi.org/10.1111/j.1574-6976.1996.tb00227.x" },
    { id: "volk", title: "Schizophyllum commune, the split gill fungus", by: "Tom Volk's Fungus of the Month", url: "https://botit.botany.wisc.edu/toms_fungi/feb2000.html" },
    { id: "wiki-th", title: "Trametes hirsuta", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trametes_hirsuta" },
  ],
  by: ["kid", "dad"],
};

export default entry;
