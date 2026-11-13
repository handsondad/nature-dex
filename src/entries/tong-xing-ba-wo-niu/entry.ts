import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 花坛里还有灰巴蜗牛等近亲，需看壳宽（1.2～1.6 厘米）、螺层圈数与壳口外折唇确认，先标 likely。
const entry: Entry = {
  id: "tong-xing-ba-wo-niu",
  name: "同型巴蜗牛",
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
        photo: "adult-crawl",
        caption: "雨后在湿苔藓上爬行的同型巴蜗牛",
        shoot: "从侧上方微距拍：螺旋小壳、一长一短两对触角和贴地的腹足都在画面里；只拍不碰",
      },
      points: [
        {
          x: 0.24,
          y: 0.42,
          label: "长触角顶端的眼睛",
          detail: "头上上面那对长触角能自由伸缩，顶端各长着一颗小黑点一样的眼睛。",
          cite: ["wiki-ls"],
        },
        {
          x: 0.29,
          y: 0.56,
          label: "探路的短触角",
          detail: "下面还有一对更短的小触角，贴近地面闻气味、探路找嫩叶。",
          cite: ["wiki-ls"],
        },
        {
          x: 0.62,
          y: 0.46,
          label: "右旋的螺旋小壳",
          detail: "浅褐色小壳宽约 1.2～1.6 厘米，转约五圈半；从壳顶看，绝大多数顺时针向右旋。",
          cite: ["wiki-bs", "abe-2018"],
        },
        {
          x: 0.45,
          y: 0.6,
          label: "分泌黏液的腹足",
          detail: "肚子下面宽宽的一整片肌肉叫「腹足」，靠波浪式收缩、垫着黏液滑行，身后会留下一道亮印子。",
          cite: ["wiki-ls"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看螺旋小壳",
      shot: {
        photo: "shell-macro",
        caption: "壳顶一圈圈的螺旋纹",
        shoot: "从壳顶正上方微距拍清楚螺旋圈数和细细的生长纹；只拍不摸",
      },
      text: "凑近看壳顶的螺旋纹：正中间最小的那几圈是它刚孵出来时的幼壳，越往外越宽，是一边长大一边沿着壳口分泌碳酸钙加盖出来的，壳面上还留着细细的生长纹和褐色色带。",
      zoom: 2.5,
      start: [0.5, 0.5],
      cite: ["wiki-bs", "wiki-ls"],
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
            "背上没有螺旋形的硬壳，常被叫作「鼻涕虫」",
            "受惊没法缩进壳里，只能把软身子缩成一团",
          ],
        },
        {
          name: "同型巴蜗牛",
          scientific: "Bradybaena similaris",
          self: true,
          shot: { photo: "look-txbwn", caption: "同型巴蜗牛" },
          tells: [
            "背着一座宽约 1.2～1.6 厘米的扁圆螺旋壳",
            "遇到干燥或危险可以把头和腹足全都缩回壳里",
          ],
        },
      ],
      cite: ["wiki-bs", "wiki-ls", "wiki-mb"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4～8 月温暖多雨时拍到它最多，5 月是高峰；干冷的 12～2 月很少露面，常封住壳口躲起来休眠。我们是哪个月遇见它的？",
      cite: ["wiki-bs", "wiki-ls", "wiki-ep"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "小蜗牛嘴里有牙齿吗？",
          a: "有，而且多得惊人！它嘴里有一条带状的「齿舌」，像一把微型小锉刀，上面一排排长满细小角质齿，很多蜗牛有上万颗，磨旧了还会从后面长出新齿。",
          cite: ["wiki-rad", "wiki-ls"],
        },
        {
          q: "天干没雨时，壳口那层白膜是什么？",
          a: "那叫「厣膜」，是它用干掉的黏液封在壳口的临时小门，有时还会把壳口粘在墙上或树枝上休眠，防止身体里的水分蒸发。",
          cite: ["wiki-ep", "wiki-ls"],
        },
        {
          q: "蜗牛长大要换新壳吗？",
          a: "不用换壳！小蜗牛从浅土里的卵孵出来时（约需 2～4 周）就已经背着小壳，长大时外套膜沿着壳口一圈圈往外添新壳。",
          cite: ["wiki-bs", "wiki-ls"],
        },
        {
          q: "为什么野生蜗牛不能摸？",
          a: "同型巴蜗牛等野生蜗牛和黏液可能携带广州管圆线虫等寄生虫。我们蹲着看就好；不小心碰到了，马上用肥皂把手洗干净。",
          cite: ["cdc-rlw", "wiki-ls"],
        },
      ],
    },
  ],
  care: "只看不摸，别把野生蜗牛拿在手里玩。野生蜗牛可能携带寄生虫，万一碰到了，一定要用肥皂和流动水洗手。",
  nextTime: "雨后去花坛草丛低头找一找：从壳顶往下看，它的螺旋纹是不是顺时针向右转的？",
  sources: [
    {
      id: "wiki-bs",
      title: "Bradybaena similaris",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Bradybaena_similaris",
    },
    {
      id: "wiki-ls",
      title: "Land snail",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Land_snail",
    },
    {
      id: "wiki-ep",
      title: "Epiphragm",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Epiphragm",
    },
    {
      id: "wiki-rad",
      title: "Radula",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Radula",
    },
    {
      id: "wiki-mb",
      title: "Meghimatium bilineatum",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Meghimatium_bilineatum",
    },
    {
      id: "abe-2018",
      title: "Heterochirality results from reduction of maternal diaph expression in a terrestrial pulmonate snail",
      by: "Zoological Letters (2018)",
      url: "https://doi.org/10.1186/s40851-018-0120-0",
    },
    {
      id: "cdc-rlw",
      title: "About Rat Lungworm Disease (Angiostrongylus)",
      by: "U.S. Centers for Disease Control and Prevention",
      url: "https://www.cdc.gov/angiostrongylus/about/index.html",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
