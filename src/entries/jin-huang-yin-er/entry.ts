import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "jin-huang-yin-er",
  name: "金黄银耳",
  scientific: "Tremella mesenterica",
  kind: "fungus",
  // 黄色胶质菌还有金耳属（Naematelia）和花耳属（Dacrymyces），肉眼极像；标 likely
  certainty: "likely",
  taxonomy: ["真菌界", "担子菌门", "银耳纲", "银耳目", "银耳科", "银耳属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "雨后枯木上亮黄色的金黄银耳",
    shoot: "下雨后在带树皮的阔叶树枯枝上拍：亮黄色果冻般的脑状褶皱清楚，只拍不摸",
  },
  hello: "下雨后枯枝上冒出亮黄色的小果冻，天晴晒干缩成薄片，再下雨又能鼓起来。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "jelly-branch",
        caption: "从枯枝树皮裂缝里挤出来的金黄银耳",
        shoot: "找一根带树皮的阔叶树枯枝，近拍挤出树皮缝的黄色胶质菌团；只拍不碰",
      },
      points: [
        { x: 0.45, y: 0.47, label: "脑状或叶状褶皱", detail: "一团团亮黄色到橙黄色，扭曲折叠得像小脑仁或波浪叶片，宽可达 2～7.5 厘米。", cite: ["wiki-en", "kuo"] },
        { x: 0.56, y: 0.44, label: "半透明果冻质感", detail: "湿润时表面光滑油亮、半透明，像软韧的果冻，没有菌盖、菌褶和菌柄。", cite: ["wiki-en", "kuo"] },
        { x: 0.35, y: 0.50, label: "从树皮缝钻出来", detail: "常在刚死不久、树皮还没脱落的阔叶树枯枝裂缝里冒头。", cite: ["wiki-en", "kuo"] },
      ],
    },
    {
      type: "compare",
      title: "下雨鼓起来，天晴缩回去",
      before: {
        photo: "wet-jelly",
        label: "雨后湿润",
        caption: "吸饱雨水后鼓成亮晶晶的黄色果冻",
        shoot: "刚下过雨时记住这根枯枝的位置，横构图拍它饱水鼓胀的样子",
      },
      after: {
        photo: "dry-crust",
        label: "天晴晒干",
        caption: "晴天失水后缩成深橙色硬薄片",
        shoot: "天晴几天后回到同一根枯枝，同角度拍它干缩成橘红色薄壳的样子",
      },
      text: "雨后它吸足水分，鼓成软韧透亮的黄果冻；晴天晒上几天就会缩成硬硬的一小片深橙红色薄膜，等下一场雨再来又能吸水鼓起来。",
      cite: ["wiki-en", "kuo"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国境内的研究级记录还很少，春、秋、冬潮湿下雨后都有人偶遇它。等我们遇见它，就把那个月钉在环上！",
    },
    {
      type: "lookalike",
      title: "树枝上的“黄果冻”，别认错",
      quiz: true,
      items: [
        {
          name: "金孢花耳",
          scientific: "Dacrymyces chrysospermus",
          shot: { photo: "look-dc", caption: "金孢花耳" },
          tells: [
            "专挑松树、杉树等针叶树的腐木长",
            "连着木头的基部常有一小块浅白色",
          ],
        },
        {
          name: "金黄银耳",
          scientific: "Tremella mesenterica",
          self: true,
          shot: { photo: "look-jhy", caption: "金黄银耳" },
          tells: [
            "多长在带树皮的阔叶树枯枝上，湿时油亮半透明",
            "寄生在树皮下看不见的革菌菌丝上，晒干会塌成薄片",
          ],
        },
        {
          name: "金耳（橙黄银耳）",
          scientific: "Naematelia aurantia",
          shot: { photo: "look-na", caption: "橙黄银耳" },
          tells: [
            "寄生在毛韧革菌上，旁边常能同时看到扇形的毛韧革菌子实体",
            "表面偏哑光不油亮，瓣片更厚，干后不太会塌成薄片",
          ],
        },
      ],
      cite: ["wiki-en", "kuo", "wiki-dc", "wiki-na"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它明明长在枯枝上，为什么说它不“吃”木头？",
          a: "它自己不分解木头，而是“真菌的寄生虫”！枯枝里先住着分解木头的革菌（Peniophora），金黄银耳专门吸取革菌菌丝的养分长大。",
          cite: ["zugmaier-1994", "wiki-en", "kuo"],
        },
        {
          q: "甜品店里炖汤的白银耳，和它是亲戚吗？",
          a: "是同一个银耳属（Tremella）的真亲戚！不过家里吃的白银耳是人工在已知菌种上培育的，野外的黄色胶质菌可不能采来吃。",
          cite: ["wiki-en", "volk"],
        },
        {
          q: "还没有变成“果冻”之前，它长什么样？",
          a: "它的孢子萌发后，会先变成一个个像酵母一样的单细胞，靠出芽繁殖；等两种配得上的细胞相遇牵起“交配管”，才会长出果冻般的子实体。",
          cite: ["wiki-en", "volk"],
        },
        {
          q: "它的拉丁种加词 mesenterica 是什么意思？",
          a: "来自古希腊语“肠系膜”，形容它弯弯曲曲、叠在一起的脑状褶皱。",
          cite: ["wiki-en"],
        },
      ],
    },
  ],
  care: "名字里虽然有“银耳”，但野外的胶质真菌容易混淆、还沾着腐木杂菌；只看不碰、不采也不吃。",
  nextTime: "雨后如果在阔叶树落枝上看到它，记住是哪根树枝，等晴天再去看看它是不是缩成了一小片深橙色的硬壳？",
  sources: [
    { id: "wiki-en", title: "Tremella mesenterica", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tremella_mesenterica" },
    { id: "kuo", title: "Tremella mesenterica", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/tremella_mesenterica.html" },
    { id: "zugmaier-1994", title: "Mycoparasitism of some Tremella species", by: "Mycologia, 1994", url: "https://doi.org/10.2307/3760718" },
    { id: "volk", title: "Tremella mesenterica, witch's butter", by: "Tom Volk's Fungus of the Month", url: "https://botit.botany.wisc.edu/toms_fungi/oct2000.html" },
    { id: "wiki-dc", title: "Dacrymyces chrysospermus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dacrymyces_chrysospermus" },
    { id: "wiki-na", title: "Naematelia aurantia", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Naematelia_aurantia" },
  ],
  by: ["kid", "dad"],
};

export default entry;
