import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-gu-ding",
  name: "白骨顶",
  pinyin: "bái gǔ dǐng",
  scientific: "Fulica atra",
  kind: "animal",
  // 全身石板黑、嘴巴和额甲雪白的水鸟，拍清脑袋就能一眼和黑水鸡区分开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "鹤形目", "秧鸡科", "骨顶属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "水面上游着的一只白骨顶",
    shoot: "在公园湖面或湿地岸上远远拍一只白骨顶：黑身子、白嘴和额头的白盾牌都拍清楚；站稳岸边，别下水",
  },
  hello: "一身黑羽毛，额头顶着一块雪白的「小盾牌」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "mag-feet",
        caption: "游水的白骨顶，水下露出一点脚趾",
        shoot: "当白骨顶游到浅水边或走上岸边草地时，远拍它的全身：白嘴、白额甲和脚趾都收进画面",
      },
      points: [
        { x: 0.77, y: 0.37, label: "白嘴和白额甲", detail: "嘴是白的，往上连着额头一块没长羽毛的白皮，叫额甲。", cite: ["wiki-en"] },
        { x: 0.6, y: 0.37, label: "乌黑的脑袋", detail: "脑袋和脖子乌黑发亮。公鸟和母鸟长得一个样。", cite: ["wiki-en"] },
        { x: 0.5, y: 0.6, label: "黑灰色的身子", detail: "身长 36～38 厘米，除了嘴和额甲，几乎全身都是黑的。", cite: ["wiki-en"] },
        { x: 0.425, y: 0.685, label: "水下的大脚", detail: "长长的脚趾很有力，上面长着一部分蹼。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看水下的脚",
      shot: {
        photo: "paddling-feet",
        caption: "清水里看得见它的长脚趾",
        shoot: "等它上岸或游过清浅水面时，放大拍清长脚趾和上面的蹼",
      },
      text: "看它水下的脚：长脚趾上只长了一部分蹼，不像鸭子那样连成一整片。它很会游泳，还会从水面一跳，钻进水里潜一小会儿。",
      zoom: 2.6,
      start: [0.77, 0.65],
      cite: ["wiki-en"],
    },
    {
      type: "steps",
      title: "从红头绒球到白盾牌",
      steps: [
        {
          photo: "step-nest",
          label: "水上的窝",
          caption: "水面上的白骨顶窝，窝里是刚出壳的小鸟",
          text: "窝用水草的茎和叶搭成，有的浮在水上。一窝常有 6～10 颗蛋，爸爸妈妈轮流孵 21～24 天。",
          shoot: "只用参考照片：看到窝要马上走开，不要靠近",
        },
        {
          photo: "step-chick",
          label: "红头绒球",
          caption: "跟着大鸟的两只白骨顶雏鸟",
          text: "小鸟一身黑绒毛，脑袋周围是橙红色的长绒毛，额甲鲜红，红嘴有个白尖，一点不像爸妈。",
          shoot: "初夏水边跟着大鸟的小绒球，岸上远远拍，别追",
        },
        {
          photo: "step-juv",
          label: "白胸脯",
          caption: "胸前发白、还没有额甲的半大白骨顶",
          text: "半大的小鸟颜色浅，胸前发白，还没有额甲。大约 30 天能自己找吃的，55～60 天会飞。",
          shoot: "夏天水面上颜色浅、胸前白的半大小鸟，岸上远拍",
        },
        {
          photo: "step-adult",
          label: "白盾牌",
          caption: "换上黑羽毛和白额甲的成年白骨顶",
          text: "3～4 个月大换上一身黑羽毛；额头的白盾牌要到一岁左右才完全长好。",
        },
      ],
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国全年都能拍到它，1、2 月最多，9 月最少。北京名录里它是夏候鸟和旅鸟；3 月它们回到野鸭湖准备繁殖，麋鹿苑等湿地也常见。北方水面结冰后，很多往南飞，到长江边的大湖过冬。",
      cite: ["bj-bird-list", "bj-yyh", "bj-guanniao", "wiki-en", "hashimoto-2013"],
    },
    {
      type: "lookalike",
      title: "白盾牌还是红盾牌？",
      quiz: true,
      items: [
        {
          name: "黑水鸡",
          scientific: "Gallinula chloropus",
          shot: { photo: "look-hei-shui-ji", caption: "黑水鸡" },
          tells: ["额甲和嘴是红的，嘴尖黄，身子侧面有白线", "黄绿色的细长脚趾，中间没有蹼"],
        },
        {
          name: "白骨顶",
          scientific: "Fulica atra",
          self: true,
          shot: { photo: "look-bai-gu-ding", caption: "白骨顶" },
          tells: ["额甲和嘴都是白的，全身几乎都是黑的", "长脚趾上有一部分蹼"],
        },
      ],
      cite: ["wiki-en", "wiki-moorhen"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "白骨顶怎么起飞？", a: "它不爱飞。要起飞时，得先扑着翅膀在水面上一路踩水快跑，溅起一串水花才飞得起来。", cite: ["wiki-en"] },
        { q: "白骨顶是鸭子吗？", a: "不是！它是秧鸡科的，和黑水鸡是亲戚。鸭子的脚趾间连着一整片蹼，它的长脚趾上只有一部分蹼。", cite: ["wiki-en", "bj-bird-list"] },
        { q: "它爱吃水草吗？", a: "春天忙着占地盘做窝时，它吃水草很少；到了夏天，水草成了主食，吃得最多能是春天的 76 倍。", cite: ["perrow-1997"] },
        { q: "白骨顶会打架吗？", a: "会！它很护地盘，打架时冲向对手，用一双长脚去踢，特别爱和别的白骨顶打。", cite: ["wiki-en"] },
        { q: "冬天它们去哪儿？", a: "北方水面结冰后，很多白骨顶往南飞。上世纪 90 年代，长江边的鄱阳湖、洞庭湖曾有大批白骨顶过冬。", cite: ["wiki-en", "hashimoto-2013"] },
        { q: "英语里怎么笑话「秃顶」？", a: "英语有句老话「秃得像只白骨顶」，说的就是它那块没长羽毛的白额头，1430 年就有人这么说了。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "在岸边护栏后远远看，不喂面包零食，不轰赶，也别靠近水上的窝。水边要和大人一起，不下水。",
  nextTime: "下次看它起飞：是不是要先在水面上踩水跑一段？",
  sources: [
    { id: "perrow-1997", title: "Interactions between coot (Fulica atra) and submerged macrophytes: the role of birds in the restoration process", by: "Hydrobiologia, 1997", url: "https://doi.org/10.1023/A:1017007911190" },
    { id: "hashimoto-2013", title: "Population Trends of Wintering Eurasian Coot Fulica atra in East Asia", by: "Ornithological Science, 2013", url: "https://doi.org/10.2326/osj.12.91" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-yyh", title: "野鸭湖迎来春归候鸟", by: "首都之窗（北京市人民政府门户网站），2026", url: "https://www.beijing.gov.cn/tsbj/sxym/202603/t20260311_4554933.html" },
    { id: "bj-guanniao", title: "观鸟季倒计时（一） 现在就出发！", by: "首都之窗（北京市人民政府门户网站），2026", url: "https://www.beijing.gov.cn/renwen/zt/bjgnzn/qszn/202603/t20260311_4554668.html" },
    { id: "wiki-en", title: "Eurasian coot", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_coot" },
    { id: "wiki-moorhen", title: "Common moorhen", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_moorhen" },
  ],
  by: ["kid", "dad"],
};

export default entry;