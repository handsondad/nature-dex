import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "mao-tou-gui-san",
  name: "毛头鬼伞",
  pinyin: "máo tóu guǐ sǎn",
  scientific: "Coprinus comatus",
  kind: "fungus",
  // 草坪上也有大青褶伞等有毒伞菌；先标 likely，提醒只远看拍照
  certainty: "likely",
  taxonomy: ["真菌界", "担子菌门", "伞菌纲", "伞菌目", "鬼伞科", "鬼伞属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "草地上冒出的毛头鬼伞",
    shoot: "雨后在草坪边蹲下来平视拍：圆筒形菌盖和翘起的鳞片清楚，只拍不碰",
  },
  hello: "雨后草坪冒出一根白毛筒，不到一天就自己化成黑墨水滴下来。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "id-lawn",
        caption: "草坪上一根还没打开的毛头鬼伞",
        shoot: "找一朵还没变黑的毛头鬼伞，蹲下侧面拍全貌：菌盖顶、鳞片、菌盖下缘和白菌柄都在画面里；只拍不碰",
      },
      points: [
        { x: 0.535, y: 0.25, label: "头顶浅褐色", detail: "菌盖白色，最顶上常有一块光滑的浅褐色，像戴了一顶小帽子。", cite: ["kuo"] },
        { x: 0.55, y: 0.45, label: "翘起的鳞片", detail: "年轻时菌盖是高高的卵形到圆筒形，盖满一片片翘起来的毛鳞片，所以叫“毛头”。", cite: ["kuo", "mdc"] },
        { x: 0.56, y: 0.65, label: "裹住菌柄的下缘", detail: "菌盖约 4～15 厘米高，年轻时下缘紧紧裹着菌柄，菌褶藏在里面。", cite: ["mdc"] },
        { x: 0.53, y: 0.81, label: "中空的白菌柄", detail: "菌柄白色光滑，里面是空心的，还吊着一根细线一样的纤维。", cite: ["kuo"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看菌盖边缘",
      shot: {
        photo: "zoom-edge",
        caption: "菌盖边缘已经开始变黑",
        shoot: "找一朵菌盖刚撑开、边缘发黑的，从斜上方微距拍边缘的鳞片和菌褶；只拍不碰",
      },
      text: "放大看边缘：鳞片下面是一条条挤得很密的菌褶，从白变粉再变黑，而且是从菌盖边缘开始往上变黑、化成墨汁。",
      zoom: 2.4,
      start: [0.3, 0.47],
      cite: ["kuo", "mdc"],
    },
    {
      type: "steps",
      title: "一朵毛头鬼伞的一生",
      steps: [
        {
          photo: "whole-fungus",
          label: "冒出来",
          text: "菌丝平时藏在土里分解烂草烂叶。雨后它从地里顶出一根洁白的卵形“毛头”，菌盖还紧紧包着菌柄。",
          caption: "刚从地里冒出来的白色毛头",
          shoot: "雨后在长过它的草坪边找刚冒头的白色卵形小蘑菇，蹲低平视拍",
        },
        {
          photo: "step-bell",
          label: "撑成钟",
          text: "菌盖慢慢撑开成钟形，下缘离开菌柄，边上一圈先变黑；菌柄上能看到一圈松松的菌环。",
          caption: "撑成钟形、边缘变黑的菌盖，菌柄上有一圈菌环",
          shoot: "隔几个小时回到同一朵，平视拍钟形菌盖和菌柄上的菌环",
        },
        {
          photo: "step-drip",
          label: "化成墨",
          text: "菌褶从边缘往上一点点化成黑色墨汁，菌盖边缘向上翻卷，墨滴里带着黑色的孢子。",
          caption: "边缘翻卷、正在滴黑墨汁的菌盖",
          shoot: "再隔半天回来，从低处往上拍菌盖下面滴落的黑墨汁；不要用手摸",
        },
      ],
      cite: ["kuo", "mdc", "wiki-en"],
    },
    {
      type: "compare",
      title: "从白毛头到黑墨水",
      before: {
        photo: "young-white",
        label: "刚冒出来",
        caption: "洁白挺立的毛头鬼伞",
        shoot: "记住位置，先拍刚冒出来的一丛白色毛头鬼伞，横构图",
      },
      after: {
        photo: "mature-ink",
        label: "一天以后",
        caption: "一丛已经化成黑墨水的毛头鬼伞",
        shoot: "隔一天回到同一位置，同一角度、同样横构图再拍一张",
      },
      text: "毛头鬼伞来得快、走得也快：从冒出地面到化成墨汁，通常只有一天左右。",
      cite: ["mdc"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 10 月拍到它最多，其次是 11 月和 4、5 月的雨后；1、2 月一次也没拍到。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "草坪白蘑菇：长得像，不代表能吃",
      quiz: true,
      items: [
        {
          name: "墨汁鬼伞",
          scientific: "Coprinopsis atramentaria",
          shot: { photo: "look-mjgs", caption: "墨汁鬼伞" },
          tells: [
            "菌盖灰褐色、有细细的放射纹，没有翘起的大白鳞片；常一丛丛长在烂木头旁",
            "也会化成墨汁；人吃了它前后三天内碰酒，会心慌、头痛、恶心",
          ],
        },
        {
          name: "毛头鬼伞",
          scientific: "Coprinus comatus",
          self: true,
          shot: { photo: "look-mtgs", caption: "毛头鬼伞" },
          tells: [
            "年轻时菌盖是高高的白色圆筒，满是翘起的鳞片，头顶浅褐色",
            "菌柄上有菌环，老了从菌盖边缘化成黑墨水",
          ],
        },
        {
          name: "大青褶伞",
          scientific: "Chlorophyllum molybdites",
          shot: { photo: "look-qzhs", caption: "大青褶伞（有毒）" },
          tells: [
            "菌盖展开后像一把平平的大伞，菌褶从白慢慢变灰绿色，不会化成墨汁",
            "草坪上很常见的毒蘑菇，小时候的样子像超市里的蘑菇；误食会剧烈呕吐、腹泻",
          ],
        },
      ],
      cite: ["mdc", "mdc-ca", "mdc-cm", "nowakowski-2020"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它为什么要把自己化成“黑墨水”？",
          a: "它的菌褶挤得特别密。从菌盖边缘开始一点点化成墨汁、边缘往上卷开，藏在里面的孢子才能散出去。",
          cite: ["kuo", "mdc"],
        },
        {
          q: "一朵毛头鬼伞能活多久？",
          a: "通常从冒出地面到化成墨汁只有大约 24 小时。就算被人摘下来，几个小时也会化成一摊黑水。",
          cite: ["mdc"],
        },
        {
          q: "藏在泥土下面的菌丝还会“打猎”？",
          a: "科学家发现，它的菌丝上长着带刺的小球，能刺破土里小线虫的表皮，还会放出毒素把线虫定住。",
          cite: ["luo-2007"],
        },
        {
          q: "它和墨汁鬼伞是近亲吗？",
          a: "不是！DNA 研究发现，它和超市里白蘑菇所在的蘑菇属更近，和同样会化墨汁的墨汁鬼伞反而是远亲。",
          cite: ["kuo"],
        },
        {
          q: "听说它就是“鸡腿菇”，路边的能采吗？",
          a: "绝对不能！草坪上有长得像的毒蘑菇，野生的还会吸收土里的有害元素，摘下后也会很快自己化掉。",
          cite: ["nowakowski-2020", "mdc-cm"],
        },
      ],
    },
  ],
  care: "草坪野蘑菇常和毒蘑菇长得像，还会吸收土里的污染物；只看不碰、不采、不吃，也别让小狗去啃。",
  nextTime: "雨后在草坪边看到它，记住位置不碰它，隔半天再来看看菌盖边缘是不是开始变黑滴墨水了？",
  sources: [
    { id: "kuo", title: "Coprinus comatus: The Shaggy Mane", by: "Michael Kuo, MushroomExpert.Com", url: "https://www.mushroomexpert.com/coprinus_comatus.html" },
    { id: "mdc", title: "Shaggy Mane (Coprinus comatus)", by: "Missouri Department of Conservation Field Guide", url: "https://mdc.mo.gov/discover-nature/field-guide/shaggy-mane" },
    { id: "mdc-ca", title: "Alcohol Inky (Coprinopsis atramentaria)", by: "Missouri Department of Conservation Field Guide", url: "https://mdc.mo.gov/discover-nature/field-guide/alcohol-inky" },
    { id: "mdc-cm", title: "Green-Spored Lepiota (Chlorophyllum molybdites)", by: "Missouri Department of Conservation Field Guide", url: "https://mdc.mo.gov/discover-nature/field-guide/green-spored-lepiota" },
    { id: "nowakowski-2020", title: "The two faces of Coprinus comatus—Functional properties and potential hazards", by: "Nowakowski et al., Phytotherapy Research, 2020", url: "https://doi.org/10.1002/ptr.6741" },
    { id: "luo-2007", title: "Coprinus comatus Damages Nematode Cuticles Mechanically with Spiny Balls and Produces Potent Toxins To Immobilize Nematodes", by: "Luo et al., Applied and Environmental Microbiology, 2007", url: "https://doi.org/10.1128/AEM.02770-06" },
    { id: "wiki-en", title: "Coprinus comatus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coprinus_comatus" },
  ],
  by: ["kid", "dad"],
};

export default entry;