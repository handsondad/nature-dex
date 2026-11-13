import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 赤子爱胜蚓和近亲安德爱胜蚓外观极像，野外还有远环蚓等其他蚯蚓，单靠照片难完全定种，先标 likely。
const entry: Entry = {
  id: "chi-zi-ai-sheng-yin",
  name: "赤子爱胜蚓",
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
        caption: "一整条成年赤子爱胜蚓",
        shoot: "俯拍一整条成年蚯蚓，头、光滑鼓起的环带、一圈圈环节和尾巴都在画面里",
      },
      points: [
        {
          x: 0.73,
          y: 0.24,
          label: "离环带近的是头",
          detail: "它没有眼睛，但皮肤里有感光细胞能察觉亮光；离环带更近的那一端就是头，最前面一节有嘴和探路的前叶。",
          cite: ["wiki-ew"],
        },
        {
          x: 0.67,
          y: 0.34,
          label: "光滑鼓起的环带",
          detail: "成年蚯蚓靠前的位置有一圈浅色、光滑鼓起的「环带」，既能帮我们分清头尾，还能分泌包住卵的卵茧。",
          cite: ["wiki-ew", "wiki-ef"],
        },
        {
          x: 0.45,
          y: 0.56,
          label: "一圈圈环节与刚毛",
          detail: "身体由许多圆环一样的体节组成。除头尾和环带外，每节都长着短短的刚毛，像小爪子一样抓紧泥土往前爬。",
          cite: ["wiki-ef", "wiki-ew"],
        },
        {
          x: 0.28,
          y: 0.78,
          label: "偏淡黄的尾巴尖",
          detail: "红褐色的身体到了尾巴尖常偏淡黄色，全身湿漉漉的皮肤就是它呼吸氧气的器官。",
          cite: ["wiki-ef", "wiki-ew"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看湿润的环节",
      shot: {
        photo: "ring-macro",
        caption: "深浅相间的环节和环带",
        shoot: "微距拍蚯蚓身体中前段，拍清楚一圈圈深红与浅黄相间的纹路；只拍不碰",
      },
      text: "凑近看它湿润发亮的皮肤：一节深红褐、一节浅粉黄相间，所以英文也叫它「虎纹蚓」。皮肤表面总覆着一层薄薄的黏液，氧气就是穿过这层湿皮肤进入血管的。",
      zoom: 2.5,
      start: [0.52, 0.65],
      cite: ["wiki-ef", "wiki-ew"],
    },
    {
      type: "lookalike",
      title: "湿石头底下，没腿还是多腿？",
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
            "靠前有一圈光滑鼓起的环带，靠肌肉伸缩和短刚毛爬行",
          ],
        },
      ],
      cite: ["wiki-ef", "wiki-ew", "wiki-og"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "大雨过后，蚯蚓为什么钻出地面？",
          a: "蚯蚓没有肺，靠湿润的皮肤呼吸。大雨把土缝灌满水、土里氧气变少时，需氧较多的蚯蚓就会爬出地面透气；湿漉漉的地面也让它爬得更快。",
          cite: ["wiki-ew", "chuang-2008"],
        },
        {
          q: "蚯蚓宝宝是从哪儿孵出来的？",
          a: "成年蚯蚓的环带会分泌一圈黏液管，从头上脱下来时把受精卵包在里面，两头一封变成小柠檬形状的卵茧，温暖时大约 3 周孵出小蚯蚓。",
          cite: ["wiki-ef", "wiki-ew", "neuhauser-1980"],
        },
        {
          q: "它平时吃什么？",
          a: "和钻深土的大蚯蚓不同，赤子爱胜蚓爱住在腐烂的落叶层和堆肥里，一口口吃掉腐殖质，帮土壤把枯叶和厨余变成好肥料。",
          cite: ["wiki-ef", "wiki-ew"],
        },
        {
          q: "为什么不能用手去捏它？",
          a: "人的手指既干又带盐分，会让它难受地扭动；受到粗暴挤压时，它还会渗出一股难闻的体腔液防身，学名里的 fetida 就是「有臭味的」。",
          cite: ["wiki-ef", "wiki-ew"],
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
      by: "Invertebrate Biology (2008)",
      url: "https://doi.org/10.1111/j.1744-7410.2007.00117.x",
    },
    {
      id: "neuhauser-1980",
      title: "Growth of the Earthworm Eisenia Foetida in Relation to Population Density and Food Rationing",
      by: "Oikos (1980)",
      url: "https://doi.org/10.2307/3544730",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
