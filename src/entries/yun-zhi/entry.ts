import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yun-zhi",
  name: "云芝",
  scientific: "Trametes versicolor",
  kind: "fungus",
  // 林间同属栓孔菌和韧革菌很多，要核对背面细密管孔和绒毛彩带；先标 likely
  certainty: "likely",
  taxonomy: ["真菌界", "担子菌门", "伞菌纲", "多孔菌目", "多孔菌科", "栓孔菌属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "老木头上层层叠叠的云芝",
    shoot: "在老树桩或倒木上俯拍一丛云芝：一圈圈彩色同心环带和白边清楚，只拍不掰",
  },
  hello: "老树桩上叠着一圈圈像火鸡尾巴的彩色小扇，背面藏着数不清的小圆孔。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "caps-stump",
        caption: "树桩侧面叠生的云芝",
        shoot: "老树桩侧面拍叠成好几层的菌盖：同心彩带、浅色波浪边和树皮都在画面里；只拍不碰",
      },
      points: [
        { x: 0.45, y: 0.36, label: "像瓦片一样叠生", detail: "没有菌柄，一片片半圆形或扇形菌盖像屋瓦一样层层叠在枯木上。", cite: ["wiki-en", "kuo"] },
        { x: 0.55, y: 0.56, label: "一圈圈彩色环带", detail: "菌盖宽 2～8 厘米，表面长着细绒毛，排成深褐、灰蓝、浅褐相间的同心环带。", cite: ["wiki-en", "kuo"] },
        { x: 0.65, y: 0.50, label: "最外一圈浅白边", detail: "正在生长的菌盖边缘薄而呈波浪状，最外一圈通常是浅白色的。", cite: ["wiki-en", "kuo"] },
        { x: 0.48, y: 0.80, label: "薄而韧的革质", detail: "菌肉只有 1～3 毫米厚，质地像皮革一样坚韧，不是软乎乎的肉质蘑菇。", cite: ["wiki-en", "kuo"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看背面的“小蜂窝”",
      shot: {
        photo: "pores-under",
        caption: "云芝背面密密麻麻的白色管孔",
        shoot: "蹲低从下方仰拍菌盖背面（不要掰下来），微距拍清细密的小圆孔",
      },
      text: "云芝背面没有一片片菌褶，而是密密麻麻的白色到浅褐色小圆孔（管孔）——每 1 毫米里就挤着 3～5 个小孔，孢子就从孔里掉出来。",
      zoom: 2.8,
      start: [0.5, 0.5],
      cite: ["wiki-en", "kuo"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "它的革质菌盖很耐放，在中国一年四季都有人拍到它，秋冬季的 10 月到次年 2 月也很常见。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "真假“火鸡尾巴”，看背面",
      quiz: true,
      items: [
        {
          name: "韧革菌（假火鸡尾）",
          scientific: "Stereum ostrea",
          shot: { photo: "look-so", caption: "扁韧革菌" },
          tells: [
            "正面也有一圈圈红褐、橙黄色的同心环纹",
            "背面平平滑滑，一个管孔也没有",
          ],
        },
        {
          name: "云芝",
          scientific: "Trametes versicolor",
          self: true,
          shot: { photo: "look-yz", caption: "云芝" },
          tells: [
            "正面有深浅分明的多色同心环带和细绒毛",
            "背面布满细密的小圆孔（每毫米 3～5 个）",
          ],
        },
        {
          name: "毛栓菌",
          scientific: "Trametes hirsuta",
          shot: { photo: "look-th", caption: "毛栓菌" },
          tells: [
            "菌盖偏灰白色，粗毛更明显，没有鲜艳的多色深浅环带",
            "菌盖比云芝更厚实",
          ],
        },
      ],
      cite: ["kuo", "wiki-so", "wiki-th"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它在英文里为什么叫“火鸡尾巴”？",
          a: "它的英文名叫 Turkey tail。半圆形的扇状菌盖一圈圈排开深浅彩纹，就像野生火鸡展开的尾羽一样。",
          cite: ["wiki-en", "kuo"],
        },
        {
          q: "硬邦邦的老木头，它怎么“吃”得动？",
          a: "云芝是一种“白腐菌”，能分泌特殊的酶，把木头里最坚硬的木质素分解掉，只留下白色的纤维素，帮森林把枯木变回养分。",
          cite: ["wiki-en", "wiki-wd"],
        },
        {
          q: "有些云芝上面为什么泛着绿色？",
          a: "长了很久的老菌盖表面常常住进微小的绿藻，绿藻借它的菌盖晒太阳，就给彩带添上了一圈绿意。",
          cite: ["wiki-en"],
        },
        {
          q: "拉丁学名里的 versicolor 是什么意思？",
          a: "意思是“好几种颜色的”。同一截树桩上的云芝，也能长出褐、灰、黑、奶白等不同配色的花纹。",
          cite: ["wiki-en", "kuo"],
        },
      ],
    },
  ],
  care: "树桩上的真菌正在帮森林分解枯木，还住着小甲虫和蕈蚊幼虫；只看不碰、不采也不吃。",
  nextTime: "下次在老树桩上看到彩色扇形菌盖，别掰它，弯腰从下面看看：背面是密密的小圆孔，还是光滑一片？",
  sources: [
    { id: "wiki-en", title: "Trametes versicolor", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trametes_versicolor" },
    { id: "kuo", title: "Trametes versicolor: The Turkey Tail", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/trametes_versicolor.html" },
    { id: "wiki-so", title: "Stereum ostrea", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stereum_ostrea" },
    { id: "wiki-th", title: "Trametes hirsuta", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trametes_hirsuta" },
    { id: "wiki-wd", title: "Wood-decay fungus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wood-decay_fungus" },
  ],
  by: ["kid", "dad"],
};

export default entry;
