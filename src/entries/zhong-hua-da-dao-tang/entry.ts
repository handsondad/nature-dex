import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zhong-hua-da-dao-tang",
  name: "中华大刀螳",
  scientific: "Tenodera sinensis",
  kind: "animal",
  // 大刀螳属里还有长得很像的近亲，要拍清脸板、前足基部和翅边再确认
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "螳螂目", "螳科", "大刀螳属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只中华大刀螳", shoot: "我们遇见的那一只：停在草丛或灌木上，从侧面拍一整只，三角形的头和折起来的前足都清楚；只拍不抓" },
  hello: "三角形的小脑袋能左右转，它一动不动地等，虫子一靠近就伸出“大刀”。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-side", caption: "从侧面看一只成虫", shoot: "8～10 月，在高草丛或灌木上找一只成虫，从侧面拍一整只，头在左边，脸、前足、翅膀边和翅膀末端都在画面里" },
      points: [
        { x: 0.1, y: 0.28, label: "会转的三角头", detail: "头是三角形的，能左右转。它不用挪身子，就能盯着虫子看。", cite: ["mdc-ts"] },
        { x: 0.13, y: 0.4, label: "方方的脸板", detail: "两眼之间、触角下面那块“脸板”方方的，上面有竖条纹。", cite: ["mdc-ts", "ncsu-ts"] },
        { x: 0.24, y: 0.58, label: "折起来的“大刀”", detail: "前足平时折在胸前，虫子一靠近就飞快伸出去抓住。", cite: ["mdc-ts", "ncsu-ts"] },
        { x: 0.58, y: 0.42, label: "翅边一条绿线", detail: "身体多是黄褐色，前翅前边有一条绿线；也有全身偏绿的。", cite: ["mdc-ts", "ncsu-ts"] },
        { x: 0.88, y: 0.5, label: "翅膀盖到尾巴", detail: "成虫的翅膀一直盖到肚子末端。", cite: ["ncsu-ts"] },
      ],
    },
    {
      type: "steps",
      title: "从卵鞘到大螳螂",
      steps: [
        { photo: "step-ootheca", label: "卵鞘", text: "夏末秋初，雌螳螂把卵产在树枝上，裹在一团泡沫里。泡沫变硬后像一块烤过的棉花糖，乒乓球那么大。", caption: "树枝上的卵鞘", shoot: "秋冬在灌木和小树的细枝上找一个黄褐色、圆鼓鼓的卵鞘，拍清楚，不掰不摘" },
        { photo: "step-hatch", label: "孵化", text: "卵鞘护着卵过冬。到了春天，小螳螂几乎同时从卵鞘里钻出来。", caption: "刚钻出来的小螳螂", shoot: "春天回去看同一个卵鞘，拍刚钻出来的一群小若虫（不一定碰得上，多去几次）" },
        { photo: "step-nymph", label: "若虫", text: "若虫长得很像成虫，只是翅膀还没长好；很小的若虫常把肚子尖翘起来。它边吃边长，一次次蜕皮。", caption: "还没长翅膀的若虫", shoot: "5～7 月在草丛里找翘着肚子尖的小若虫，微距拍，只拍不碰" },
        { photo: "step-adult", label: "成虫", text: "最后一次蜕皮后长出翅膀。卵、若虫、成虫，它没有蛹，是不完全变态的昆虫。", caption: "长出翅膀的成虫", shoot: "8～10 月一只长好翅膀的成虫，从侧面拍一整只" },
      ],
      cite: ["mdc-ts", "wiki-mantis"],
    },
    {
      type: "lookalike",
      title: "两种大螳螂，别认错",
      quiz: true,
      items: [
        {
          name: "薄翅螳", scientific: "Mantis religiosa",
          shot: { photo: "look-btt", caption: "薄翅螳" },
          tells: ["前足基部内侧有一个圆圆的黑点，有时中间带白心", "个子小一些，约 7.5 厘米"],
        },
        {
          name: "中华大刀螳", scientific: "Tenodera sinensis", self: true,
          shot: { photo: "look-zhddt", caption: "中华大刀螳" },
          tells: ["前足基部没有大黑点", "前翅只有前边一条是绿的", "个子大，能长到 11 厘米多"],
        },
      ],
      cite: ["mdc-ts", "ncsu-ts", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7～10 月拍到它最多，8 月是高峰；12 月到第二年 5 月都很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "一个卵鞘里有多少颗卵？", a: "最多能有约 300 颗。卵裹在泡沫里，泡沫变硬后摸起来像干硬的泡沫塑料，能护着卵过冬。", cite: ["wiki-en", "mdc-ts"] },
        { q: "螳螂吃什么？", a: "各种昆虫和蜘蛛都吃。它一动不动地等，虫子到了跟前才出手。很少的时候，大个子雌螳螂还抓到过小蜥蜴和蜂鸟。", cite: ["mdc-ts"] },
        { q: "螳螂能活多久？", a: "大多只活一年左右：春天孵出来，夏天边吃边长，夏末产卵，天冷结冰时就死了。只有卵鞘里的卵熬过冬天。", cite: ["mdc-ts", "wiki-mantis"] },
        { q: "它的名字里为什么有“中华”？", a: "学名 sinensis 的意思就是“中华的”。它原本生活在中国、日本、朝鲜半岛一带，1896 年被不小心带到了美国。", cite: ["wiki-zh", "wiki-en"] },
      ],
    },
  ],
  care: "只看不抓。它对人基本无害，但别用手去捏；秋冬看到树枝上的卵鞘，也不要掰下来。",
  nextTime: "秋冬去灌木丛找一找：细树枝上有没有像烤棉花糖的卵鞘？春天再回去看看。",
  sources: [
    { id: "mdc-ts", title: "Chinese Mantis", by: "Missouri Department of Conservation", url: "https://mdc.mo.gov/discover-nature/field-guide/chinese-mantis" },
    { id: "ncsu-ts", title: "Chinese Mantid", by: "NC State Extension", url: "https://entomology.ces.ncsu.edu/biological-control-information-center/beneficial-predators/chinese-mantid/" },
    { id: "wiki-en", title: "Tenodera sinensis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tenodera_sinensis" },
    { id: "wiki-mantis", title: "Mantis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mantis" },
    { id: "wiki-zh", title: "中华大刀螳", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E5%A4%A7%E5%88%80%E8%9E%B3" },
  ],
  by: ["kid", "dad"],
};

export default entry;
