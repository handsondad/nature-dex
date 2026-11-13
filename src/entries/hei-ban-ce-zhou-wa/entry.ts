import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 和中华蟾蜍的区别：有背侧褶、黑斑、常有浅色脊线，皮肤没有满身圆疙瘩。
const entry: Entry = {
  id: "hei-ban-ce-zhou-wa",
  name: "黑斑侧褶蛙",
  scientific: "Pelophylax nigromaculatus",
  kind: "animal",
  // 背侧褶+黑斑+常有浅色脊线；北京还有金线侧褶蛙，拍清背再确认
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "两栖纲", "无尾目", "蛙科", "侧褶蛙属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只黑斑侧褶蛙", shoot: "夏天雨后或傍晚，水田、池塘边。和大人一起远远拍背面或侧面：背侧褶、黑斑和脊线都清楚；不抓不摸" },
  hello: "背上两边各有一道鼓鼓的长棱，中间常有一条浅色线。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "dorsal", caption: "趴着的黑斑侧褶蛙", shoot: "池塘或水田边，从斜上方拍一只蛙的背面：两边背侧褶、黑斑、中间脊线都在画面里。不碰它" },
      points: [
        { x: 0.35, y: 0.4, label: "两边的背侧褶", detail: "背上两边各有一道又长又鼓的棱，叫背侧褶，颜色常偏金黄或浅绿。", cite: ["ac", "wiki-en"] },
        { x: 0.5, y: 0.35, label: "浅色的脊线", detail: "很多个体从鼻子到屁股前有一条淡黄或淡绿的细线。", cite: ["ac", "wiki-en"] },
        { x: 0.55, y: 0.48, label: "大大小小的黑斑", detail: "背面上有许多大小不一的黑斑。身子颜色深的时候，斑会不太明显。", cite: ["ac", "wiki-en"] },
        { x: 0.48, y: 0.78, label: "后脚趾间的蹼", detail: "后脚趾之间有蹼；第四趾的蹼到不了趾尖，其余趾的蹼更深一些。", cite: ["ac"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5、6 月拍到它最多。11 月到第二年 2 月很少，那时它多半在冬眠。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "青蛙还是蟾蜍？",
      quiz: true,
      items: [
        {
          name: "中华蟾蜍",
          scientific: "Bufo gargarizans",
          shot: { photo: "look-chan-chu", caption: "中华蟾蜍" },
          tells: [
            "皮肤粗糙，满背都是圆鼓鼓的疙瘩（瘰疣）",
            "眼睛后面有一对大大的耳后腺鼓包，背上没有背侧褶",
          ],
        },
        {
          name: "黑斑侧褶蛙",
          scientific: "Pelophylax nigromaculatus",
          self: true,
          shot: { photo: "look-ce-zhou-wa", caption: "黑斑侧褶蛙" },
          tells: [
            "背上两边各有一道长长的背侧褶",
            "皮肤相对湿滑，背上有大小不一的黑斑，常有一条浅色脊线",
          ],
        },
      ],
      cite: ["ac", "wiki-en", "wiki-toad", "ac-toad"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它有多大？", a: "雄蛙体长大约 62 毫米，雌蛙大约 74 毫米。", cite: ["ac", "wiki-en"] },
        { q: "冬天躲到哪儿？", a: "大约 10～11 月钻进松软的土里或落叶下面冬眠，第二年 3～5 月再出来。", cite: ["ac"] },
        { q: "蛋产在哪儿？", a: "大约 3 月下旬到 4 月，产在稻田、池塘的浅水里。卵黏成一团，一团能有好几千粒。", cite: ["ac"] },
        { q: "雄蛙喉咙会鼓起来吗？", a: "会。它有成对的声囊，叫的时候喉咙两边能鼓起来。中华蟾蜍就没有声囊。", cite: ["ac", "wiki-en"] },
        { q: "北京名录里有它吗？", a: "有。北京陆生野生动物名录—两栖爬行类里收录了黑斑侧褶蛙。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "不抓不摸；碰到了马上洗手，别揉眼睛。水边要和大人在一起。",
  nextTime: "下次看它的背：两边那两道长棱，是不是比中间的斑更鼓、更亮？",
  sources: [
    { id: "ac", title: "黑斑侧褶蛙 Pelophylax nigromaculatus", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/416" },
    { id: "ac-toad", title: "中华蟾蜍 Bufo gargarizans", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/289" },
    { id: "wiki-en", title: "Pelophylax nigromaculatus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pelophylax_nigromaculatus" },
    { id: "wiki-toad", title: "Asiatic toad", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Asiatic_toad" },
    { id: "bj-list", title: "北京陆生野生动物名录—两栖爬行类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071636.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
