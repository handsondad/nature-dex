import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 赤子爱胜蚓和近亲安德爱胜蚓外观极像，野外还有远环蚓等其他蚯蚓，单靠照片难完全定种，先标 likely。
const entry: Entry = {
  id: "chi-zi-ai-sheng-yin",
  name: "赤子爱胜蚓",
  pinyin: "chì zǐ ài shèng yǐn",
  scientific: "Eisenia fetida",
  kind: "animal",
  certainty: "likely",
  taxonomy: ["动物界", "环节动物门", "环带纲", "厚环带目", "正蚓科", "爱胜蚓属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "我们遇见的那条红蚯蚓",
    shoot: "雨后在花坛落叶堆旁或湿泥土边，俯拍一整条红褐色的蚯蚓，拍清楚一圈圈体节和靠前鼓起的环带；不捏不踩",
  },
  hello: "没有眼睛也没有腿，靠一圈圈肌肉和短短的刚毛，在腐叶湿土里钻行。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它，哪头是头？",
      shot: {
        photo: "body-full",
        caption: "一条成年赤子爱胜蚓",
        shoot: "俯拍一整条成年蚯蚓，头、光滑鼓起的环带、一圈圈环节和尾巴都在画面里",
      },
      points: [
        {
          x: 0.745,
          y: 0.7,
          label: "离环带近的是头",
          detail: "它没有眼睛，但皮肤里有感光细胞能察觉亮光；离环带更近的那一端就是头，最前面一节有嘴和探路的前叶。",
          cite: ["wiki-ew"],
        },
        {
          x: 0.65,
          y: 0.37,
          label: "光滑鼓起的环带",
          detail: "成年蚯蚓靠前的位置有一圈浅色、光滑鼓起的「环带」，既能帮我们分清头尾，还能分泌包住卵的卵茧。",
          cite: ["wiki-ew", "wiki-ef"],
        },
        {
          x: 0.3,
          y: 0.56,
          label: "一圈圈环节与刚毛",
          detail: "身体由许多圆环一样的体节组成，除了头尾两节，每节都长着短短的刚毛，一伸一缩像小爪子一样抓紧泥土往前爬。",
          cite: ["wiki-ef", "wiki-ew"],
        },
        {
          x: 0.33,
          y: 0.07,
          label: "离环带远的是尾",
          detail: "另一头就是尾巴。全身湿漉漉的皮肤就是它呼吸氧气的器官，所以它总待在潮湿的地方。",
          cite: ["wiki-ew"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看湿润的环节",
      shot: {
        photo: "ring-macro",
        caption: "深浅相间的环节",
        shoot: "微距拍蚯蚓身体中前段，拍清楚一圈圈深红与浅黄相间的纹路；只拍不碰",
      },
      text: "凑近看它湿润发亮的皮肤：一节深红褐、一节浅粉黄相间，所以英文也叫它「虎纹蚓」。皮肤表面总覆着一层薄薄的黏液，氧气就是穿过这层湿皮肤进入血管的。",
      zoom: 2.5,
      start: [0.52, 0.65],
      cite: ["wiki-ef", "wiki-ew"],
    },
    {
      type: "steps",
      title: "从小柠檬卵茧里钻出来",
      steps: [
        {
          photo: "step-cocoon",
          label: "卵茧",
          caption: "蚯蚓旁边那颗黄绿色的小「柠檬」就是卵茧",
          shoot: "在堆肥或腐叶下找到卵茧时，连同旁边的蚯蚓一起拍；拍完原样盖回去",
          text: "成年蚯蚓的环带分泌一圈黏液管，从头上脱下时把受精卵包在里面，两头一封，变成柠檬形的卵茧，留在湿土里。",
        },
        {
          photo: "step-hatch",
          label: "孵出",
          caption: "小蚯蚓正从卵茧的一头钻出来",
          shoot: "卵茧裂开、小蚯蚓钻出时拍特写；不要用手去剥卵茧",
          text: "大约 23 天后，小蚯蚓从卵茧的一头钻出来。研究里每个卵茧平均孵出 2～3 条小蚯蚓。",
        },
        {
          photo: "step-young",
          label: "小蚓",
          caption: "细细的、颜色浅的小蚯蚓，还没有环带",
          shoot: "在落叶背面找到细小的浅粉色蚯蚓时拍一张",
          text: "刚孵出的小蚯蚓又细又浅，身上还没有环带。它先慢慢长三周左右，再进入飞快长大的阶段。",
        },
      ],
      cite: ["venter-1988", "neuhauser-1980", "wiki-ef"],
    },
    {
      type: "compare",
      title: "小蚯蚓 vs 长出环带的大蚯蚓",
      before: {
        photo: "step-young",
        label: "小蚓",
        caption: "还没有环带的小蚯蚓",
        shoot: "拍一条细小、还没有环带的小蚯蚓",
      },
      after: {
        photo: "body-full",
        label: "成蚓",
        caption: "身体前段鼓起环带的大蚯蚓",
        shoot: "在同样的背景上拍一条长出环带的大蚯蚓（横竖方向一致）",
      },
      text: "小蚯蚓孵出后 40～60 天长成大蚯蚓，身体前段鼓起一圈光滑的环带，这时就能交配了；交配后 4 天内就能产下第一个卵茧。",
      cite: ["venter-1988", "wiki-ef"],
    },
    {
      type: "lookalike",
      title: "湿地上长长的，哪条是蚯蚓？",
      quiz: true,
      items: [
        {
          name: "温室马陆",
          scientific: "Oxidus gracilis",
          shot: { photo: "look-malu", caption: "温室马陆" },
          tells: [
            "披着一节节扁平的硬外骨骼，头上有两根触角",
            "身体两侧排满浅色小短腿，长大后有 60 条腿",
          ],
        },
        {
          name: "赤子爱胜蚓",
          scientific: "Eisenia fetida",
          self: true,
          shot: { photo: "look-czas", caption: "赤子爱胜蚓" },
          tells: [
            "全身软软湿润，没有硬壳、没有触角也没有腿",
            "身体一圈圈分节，成年后靠前有一圈光滑鼓起的环带",
          ],
        },
        {
          name: "笄蛭涡虫",
          scientific: "Bipalium kewense",
          shot: { photo: "look-jzwc", caption: "笄蛭涡虫" },
          tells: [
            "身体扁扁的、不分节，头像一把半圆的小铲子",
            "背上有几条深色纵纹；它是专吃蚯蚓的捕食者",
          ],
        },
      ],
      cite: ["wiki-ef", "wiki-ew", "wiki-og", "tamu-planarian"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "大雨过后，蚯蚓为什么钻出地面？",
          a: "蚯蚓靠湿润的皮肤呼吸。研究发现，有些蚯蚓泡在水里撑不久、夜里又更耗氧，大雨把土灌满水后，就会爬出地面透气。",
          cite: ["chuang-2008", "wiki-ew"],
        },
        {
          q: "一个卵茧里有几条蚯蚓宝宝？",
          a: "研究里，每个卵茧平均孵出 2～3 条小蚯蚓，大约要 23 天才孵出来；小蚯蚓再过 40～60 天就长大了。",
          cite: ["venter-1988"],
        },
        {
          q: "它平时吃什么？",
          a: "它很少钻进深土，爱住在腐烂的落叶层和堆肥里，一口口吃掉腐烂的植物，人们常请它帮忙把厨余变成肥料。",
          cite: ["wiki-ef"],
        },
        {
          q: "学名 fetida 是什么意思？",
          a: "被粗暴地捏时，它会渗出一股难闻的液体保护自己，学名 fetida 就是「有臭味的」意思。",
          cite: ["wiki-ef"],
        },
        {
          q: "它身体里有「杀菌液」吗？",
          a: "它的体腔液里有一种叫溶细胞素的蛋白，能在钻进身体的外来细胞和细菌的膜上打孔，帮它抵抗病菌。",
          cite: ["bruhn-2006"],
        },
        {
          q: "一条蚯蚓能活多久？",
          a: "在人工饲养条件下能活 1～5 年；有研究记录到它连续繁殖了 500 多天。",
          cite: ["wiki-ef", "venter-1988"],
        },
      ],
    },
  ],
  care: "不捏、不踩、不拉扯。若见它困在雨后发烫的水泥路上，可和大人用湿树叶轻轻托回湿土，回家用肥皂洗手。",
  nextTime: "下次雨后在花坛边低头看看：你能找到蚯蚓身上光滑鼓起的环带，分清哪一头是头吗？",
  sources: [
    {
      id: "wiki-ef",
      title: "Eisenia fetida",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Eisenia_fetida",
    },
    {
      id: "wiki-ew",
      title: "Earthworm",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Earthworm",
    },
    {
      id: "wiki-og",
      title: "Greenhouse millipede (Oxidus gracilis)",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Greenhouse_millipede",
    },
    {
      id: "chuang-2008",
      title: "Role of diurnal rhythm of oxygen consumption in emergence from soil at night after heavy rain by earthworms",
      by: "Invertebrate Biology 127: 80–86 (2008)",
      url: "https://doi.org/10.1111/j.1744-7410.2007.00117.x",
    },
    {
      id: "neuhauser-1980",
      title: "Growth of the Earthworm Eisenia Foetida in Relation to Population Density and Food Rationing",
      by: "Oikos 35: 93–98 (1980)",
      url: "https://doi.org/10.2307/3544730",
    },
    {
      id: "venter-1988",
      title: "The life-cycle of the compost worm Eisenia fetida (Oligochaeta)",
      by: "South African Journal of Zoology 23: 161–165 (1988)",
      url: "https://doi.org/10.1080/02541858.1988.11448096",
    },
    {
      id: "bruhn-2006",
      title: "Dissection of the mechanisms of cytolytic and antibacterial activity of lysenin, a defence protein of the annelid Eisenia fetida",
      by: "Developmental & Comparative Immunology 30: 597–606 (2006)",
      url: "https://doi.org/10.1016/j.dci.2005.09.002",
    },
    {
      id: "tamu-planarian",
      title: "Land planarians",
      by: "Texas A&M AgriLife Extension",
      url: "https://citybugs.tamu.edu/factsheets/landscape/others/ent-1004/",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;