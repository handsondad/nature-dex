import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 花坛里还有灰巴蜗牛等近亲，需看壳宽（12～16 毫米）、螺层圈数与壳口外折唇确认，先标 likely。
const entry: Entry = {
  id: "tong-xing-ba-wo-niu",
  name: "同型巴蜗牛",
  pinyin: "tóng xíng bā wō niú",
  scientific: "Bradybaena similaris",
  kind: "animal",
  certainty: "likely",
  taxonomy: ["动物界", "软体动物门", "腹足纲", "柄眼目", "坚螺科", "巴蜗牛属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "我们遇见的那只同型巴蜗牛",
    shoot: "雨后在花坛草叶或潮湿矮墙边，蹲下来微距拍一只伸出两对触角滑行的小蜗牛；只拍不摸",
  },
  hello: "雨后花坛里背着小圆壳慢慢滑行，长触角尖尖上顶着两颗小黑点眼睛。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "body",
        caption: "在石头上爬行的同型巴蜗牛",
        shoot: "从侧面微距拍：螺旋小壳、伸长的触角和贴地的身子都在画面里；只拍不碰",
      },
      points: [
        {
          x: 0.345,
          y: 0.2,
          label: "长触角顶上的眼睛",
          detail: "头上有两对触角，后面那对长的顶端各有一只眼睛。",
          cite: ["kp-snail"],
        },
        {
          x: 0.46,
          y: 0.58,
          label: "贴着地的腹足",
          detail: "肚子下面是扁平宽大的腹足，脚底分泌黏液，减小摩擦，帮它慢慢滑着走。",
          cite: ["kp-snail"],
        },
        {
          x: 0.72,
          y: 0.58,
          label: "扁圆的螺旋壳",
          detail: "壳宽 12～16 毫米、高 9～11 毫米，转 5 圈半，颜色从近白到浅褐都有。",
          cite: ["ppp"],
        },
        {
          x: 0.6,
          y: 0.72,
          label: "细细的生长纹",
          detail: "壳面上有一道道细细的生长纹；有的壳在螺层接缝处还有一条窄窄的褐色带。",
          cite: ["ppp"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看螺旋小壳",
      shot: {
        photo: "shell-macro",
        caption: "从壳顶往下看",
        shoot: "从壳顶正上方微距拍清楚螺旋圈数和细细的生长纹；只拍不摸",
      },
      text: "从壳顶往下看，螺层从正中间一圈圈往外绕，越绕越宽，同型巴蜗牛的壳一共大约 5 圈半。凑近还能看到壳面上一道道细细的生长纹。",
      zoom: 2.5,
      start: [0.5, 0.52],
      cite: ["ppp"],
    },
    {
      type: "steps",
      title: "从小小蜗牛到大蜗牛",
      steps: [
        {
          photo: "step-hatch",
          label: "刚孵出",
          text: "卵产在湿土表层下面，大约 15 天孵出。小蜗牛一出来就会爬、会自己找吃的。",
          caption: "比指尖还小的小蜗牛",
          shoot: "雨后在花坛湿土边找刚孵出不久的小蜗牛，放一片叶子比大小，只拍不摸",
        },
        {
          photo: "step-thin",
          label: "慢慢长大",
          text: "小蜗牛的壳又薄又透光。它要长大约 6 个月，才算长大成熟。",
          caption: "壳还薄得透光的小蜗牛",
          shoot: "过几周回到同一片花坛，拍一只壳还薄、半透明的小蜗牛，只拍不摸",
        },
        {
          photo: "step-grown",
          label: "长大了",
          text: "长大的壳有 5 圈半，有的壳口边向外翻，镶着一圈白边。它能活一年多。",
          caption: "长大的同型巴蜗牛的壳",
          shoot: "拍一只长大的同型巴蜗牛，让壳口和外翻的边露出来，只拍不摸",
        },
      ],
      cite: ["ppp", "kp-snail"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5 月拍到它最多，4～8 月都常见；12 月到第二年 2 月很少。冷的地方，蜗牛冬天会封住壳口冬眠。我们是哪个月遇见它的？",
      cite: ["kp-snail"],
    },
    {
      type: "lookalike",
      title: "花坛里的软体邻居，有壳还是没壳？",
      quiz: true,
      items: [
        {
          name: "双线嗜粘液蛞蝓",
          scientific: "Meghimatium bilineatum",
          shot: { photo: "look-kuoyu", caption: "双线嗜粘液蛞蝓" },
          tells: [
            "背上没有螺旋形的壳",
            "身体两边常有深色纵线，「双线」就是这么来的",
            "身子长 4～6 厘米",
          ],
        },
        {
          name: "同型巴蜗牛",
          scientific: "Bradybaena similaris",
          self: true,
          shot: { photo: "look-txbwn", caption: "同型巴蜗牛" },
          tells: [
            "背着宽 12～16 毫米的扁圆螺旋壳",
            "受惊时头和腹足一起缩回壳里",
          ],
        },
      ],
      cite: ["gbif-slug", "ppp", "kp-snail"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "小蜗牛嘴里有牙齿吗？",
          a: "有！嘴里有一条带子一样的「齿舌」，上面排满细小的牙，像锉刀一样刮食物；牙磨钝了会被新牙换掉。",
          cite: ["kp-snail"],
        },
        {
          q: "壳口那层干干的膜是什么？",
          a: "天冷或休眠时，它缩进壳里，用黏液在壳口封一层干膜；等温度、湿度合适了，再出来活动。",
          cite: ["kp-snail"],
        },
        {
          q: "一只蜗牛是爸爸还是妈妈？",
          a: "都是！同型巴蜗牛雌雄同体，一只身上既有雄性器官也有雌性器官，还能自己给自己受精。",
          cite: ["ppp"],
        },
        {
          q: "有往左转的同型巴蜗牛吗？",
          a: "有。科学家养着一个特别的品系，同一窝小蜗牛里，有的壳往右旋，有的往左旋。",
          cite: ["noda-2019"],
        },
        {
          q: "为什么野生蜗牛不能摸、不能吃？",
          a: "蜗牛可能带着鼠肺线虫。人吃了生的或没煮熟的蜗牛会被感染；摸过蜗牛也要洗手。",
          cite: ["cdc-rlw", "ppp"],
        },
      ],
    },
  ],
  care: "只看不摸，别拿在手里玩，更不能放进嘴里。万一碰到了，用肥皂和流动水洗手。",
  nextTime: "雨后去花坛草丛低头找一找：从壳顶往下看，它的螺旋是往哪个方向转的？",
  sources: [
    {
      id: "ppp",
      title: "Asian tramp snail (369)",
      by: "Pacific Pests, Pathogens & Weeds Fact Sheets",
      url: "https://apps.lucidcentral.org/ppp_v9/text/web_full/entities/asian_tramp_snail_369.htm",
    },
    {
      id: "kp-snail",
      title: "蜗牛",
      by: "科普中国·科学百科",
      url: "https://www.kepuchina.cn/article/articleinfo?ar_id=349348&business_type=100",
    },
    {
      id: "gbif-slug",
      title: "Meghimatium bilineatum (W.H.Benson, 1842)",
      by: "GBIF（描述来自 Terrestrial Slugs Web）",
      url: "https://www.gbif.org/species/5858946",
    },
    {
      id: "noda-2019",
      title: "Heterochirality results from reduction of maternal diaph expression in a terrestrial pulmonate snail",
      by: "Zoological Letters, 2019",
      url: "https://doi.org/10.1186/s40851-018-0120-0",
    },
    {
      id: "cdc-rlw",
      title: "About Rat Lungworm Disease",
      by: "U.S. Centers for Disease Control and Prevention",
      url: "https://www.cdc.gov/angiostrongylus/about/index.html",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;