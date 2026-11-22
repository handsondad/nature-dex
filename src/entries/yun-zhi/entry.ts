import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yun-zhi",
  name: "云芝",
  pinyin: "yún zhī",
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
        { x: 0.3, y: 0.3, label: "像瓦片一样叠生", detail: "没有菌柄，一片片半圆形或扇形的菌盖像屋瓦一样层层叠在枯木上。", cite: ["kuo", "mdc"] },
        { x: 0.62, y: 0.44, label: "一圈圈彩色环带", detail: "菌盖宽 2～8 厘米，表面有细绒毛，白、灰、褐、红褐色一圈圈相间。", cite: ["kuo", "mdc"] },
        { x: 0.91, y: 0.52, label: "最外一圈浅色边", detail: "菌盖边缘薄，呈波浪状，最外面一圈总是颜色最浅的。", cite: ["mdc", "wiki-en"] },
        { x: 0.4, y: 0.84, label: "薄而韧的革质", detail: "菌肉只有 1～2 毫米厚，新鲜时能弯不易断，像皮革，不是软软的肉质蘑菇。", cite: ["kuo", "mdc"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看背面的小孔",
      shot: {
        photo: "pores-under",
        caption: "云芝背面密密麻麻的白色管孔",
        shoot: "蹲低从下方仰拍菌盖背面（不要掰下来），微距拍清细密的小圆孔",
      },
      text: "云芝背面没有一片片菌褶，而是白色到浅褐色的小圆孔（管孔）。每 1 毫米里挤着 3～6 个甚至更多，孢子就从孔里掉出来。",
      zoom: 2.8,
      start: [0.5, 0.62],
      cite: ["kuo", "mdc"],
    },
    {
      type: "steps",
      title: "从小圆盘到一面墙",
      steps: [
        {
          photo: "step-young",
          label: "冒出来",
          text: "菌丝在木头里吃饱了，就从树皮上冒出小圆点和小圆盘。",
          caption: "枯木上刚长出来的小云芝和白色小圆点",
          shoot: "在枯木上找刚冒出来的小圆盘或白色小疙瘩，近一点拍；只拍不碰",
        },
        {
          photo: "step-margin",
          label: "长白边",
          text: "菌盖一圈一圈往外长，正在长的边是浅白色的。",
          caption: "菌盖外面一圈宽宽的浅白边",
          shoot: "拍菌盖正在长的浅白色边缘，过几周回到同一丛再拍一张",
        },
        {
          photo: "step-layers",
          label: "叠成墙",
          text: "菌盖越长越多，一层压一层，有的连成一片，把树桩包起来。",
          caption: "一层层叠满树桩侧面的云芝",
          shoot: "退后一点拍整个树桩，看看云芝叠了多少层",
        },
        {
          photo: "step-old",
          label: "变老",
          text: "老菌盖上常常住进绿藻，彩带里多出一圈圈绿色。",
          caption: "表面长了绿藻、发绿的老云芝",
          shoot: "冬天或早春找颜色发绿的老菌盖，拍正面",
        },
      ],
      cite: ["mdc", "kuo", "zavada-2004"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年 12 个月都有人拍到它，10 月最多，6 月最少。它的菌盖又韧又耐放，冬天也挂在枯木上。我们是哪个月遇见它的？",
      cite: ["mdc", "kuo"],
    },
    {
      type: "lookalike",
      title: "真假“火鸡尾巴”，翻过来看背面",
      quiz: true,
      items: [
        {
          name: "扁韧革菌（假火鸡尾）",
          scientific: "Stereum ostrea",
          shot: { photo: "look-so", caption: "扁韧革菌" },
          tells: ["正面也有一圈圈红褐、橙黄色的环纹", "背面平平滑滑，一个小孔也没有"],
        },
        {
          name: "云芝",
          scientific: "Trametes versicolor",
          self: true,
          shot: { photo: "look-yz", caption: "云芝" },
          tells: ["正面深浅分明的彩色环带，摸上去有细绒毛", "背面是密密的小圆孔，要凑近才看得清"],
        },
        {
          name: "桦革褶菌",
          scientific: "Trametes betulina",
          shot: { photo: "look-lb", caption: "桦革褶菌：背面像菌褶" },
          tells: ["正面也有绒毛和环纹", "背面是一条条放射状的硬“褶子”，不是小圆孔"],
        },
        {
          name: "毛栓菌",
          scientific: "Trametes hirsuta",
          shot: { photo: "look-th", caption: "毛栓菌" },
          tells: ["菌盖灰白色，毛很粗很密", "环纹只是浅浅的灰、白、褐，不鲜艳"],
        },
      ],
      cite: ["mdc", "mdc-so", "mdc-lb", "kuo-so", "kuo-th"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它在英文里为什么叫“火鸡尾巴”？",
          a: "它的英文名叫 turkey tail。一丛彩色的扇形菌盖排开，很像野火鸡展开的尾羽。",
          cite: ["wiki-en", "kuo"],
        },
        {
          q: "硬邦邦的老木头，它怎么“吃”得动？",
          a: "云芝会让木头“白腐”：它分解木头里又硬又难拆开的木质素，枯木慢慢变软，养分回到土里。",
          cite: ["kuo", "mdc", "wiki-en"],
        },
        {
          q: "有些云芝为什么是绿色的？",
          a: "老菌盖表面常住着绿藻。科学家让绿藻吸进带记号的二氧化碳，4～8 天后，云芝的菌丝里也有了记号：绿藻做的养分，云芝能分到一点。",
          cite: ["zavada-2004"],
        },
        {
          q: "云芝都是一个颜色吗？",
          a: "不是！白、灰、褐、肉桂、橙、红褐都有，有时还带蓝和绿。学名 versicolor 在拉丁文里就是“好多颜色的”。",
          cite: ["kuo", "wiktionary"],
        },
        {
          q: "这么硬的云芝，有谁吃它？",
          a: "有！一种蕈蛾的毛毛虫、一种扁足蝇的幼虫，还有蕈蚊的幼虫，都会啃它。",
          cite: ["wiki-en"],
        },
      ],
    },
  ],
  care: "树桩上的云芝在帮森林分解枯木，也是小虫子的食物；只看不碰、不采、不吃。",
  nextTime: "下次在老树桩上看到彩色扇形菌盖，别掰它，弯腰从下面看看：背面是密密的小圆孔、一条条褶子，还是光滑一片？",
  sources: [
    { id: "kuo", title: "Trametes versicolor: The Turkey Tail", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/trametes_versicolor.html" },
    { id: "mdc", title: "Turkey Tail Mushroom", by: "Missouri Department of Conservation", url: "https://mdc.mo.gov/discover-nature/field-guide/turkey-tail-mushroom" },
    { id: "zavada-2004", title: "The demi-lichenization of Trametes versicolor: the transfer of fixed 14CO2 from epiphytic algae to T. versicolor", by: "Northeastern Naturalist, 2004", url: "https://doi.org/10.1656/1092-6194(2004)011[0033:TDOTVL]2.0.CO;2" },
    { id: "kuo-so", title: "Stereum ostrea", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/stereum_ostrea.html" },
    { id: "mdc-so", title: "False Turkey Tail", by: "Missouri Department of Conservation", url: "https://mdc.mo.gov/discover-nature/field-guide/false-turkey-tail" },
    { id: "mdc-lb", title: "Multicolor Gill Polypore (Lenzites betulina)", by: "Missouri Department of Conservation", url: "https://mdc.mo.gov/discover-nature/field-guide/multicolor-gill-polypore" },
    { id: "kuo-th", title: "Trametes hirsuta", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/trametes_hirsuta.html" },
    { id: "wiki-en", title: "Trametes versicolor", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trametes_versicolor" },
    { id: "wiktionary", title: "versicolor (Latin)", by: "Wiktionary", url: "https://en.wiktionary.org/wiki/versicolor#Latin" },
  ],
  by: ["kid", "dad"],
};

export default entry;
