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
      shot: { photo: "back", caption: "趴在落叶上的黑斑侧褶蛙", shoot: "池塘或水田边，从斜上方拍一只蛙的背面：两边背侧褶、黑斑、中间脊线都在画面里。不碰它" },
      points: [
        { x: 0.54, y: 0.38, label: "两边的背侧褶", detail: "背上两边各有一道又长又鼓的棱，叫背侧褶，颜色常是金黄、浅棕或黄绿。", cite: ["ac"] },
        { x: 0.49, y: 0.475, label: "浅色的脊线", detail: "多数个体从鼻尖到屁股前，有一条淡黄或淡绿的细线。", cite: ["ac"] },
        { x: 0.43, y: 0.415, label: "大大小小的黑斑", detail: "背上有许多大小不一的黑斑。身子颜色深的时候，斑就不太明显，比如这只。", cite: ["ac"] },
        { x: 0.74, y: 0.585, label: "头侧的黑纹", detail: "从吻端顺着头侧一直到眼睛后面，有一条黑色的纹。", cite: ["ac"] },
      ],
    },
    {
      type: "magnifier",
      title: "眼睛后面的小圆鼓",
      shot: { photo: "face", caption: "黄绿色的黑斑侧褶蛙", shoot: "从侧面平拍头部：眼睛和眼后那块圆圆的鼓膜都要清楚。远远地拍，不惊动它" },
      text: "眼睛后下方那块圆圆的，是它的鼓膜。黑斑侧褶蛙的鼓膜又大又明显，差不多有眼睛的三分之二到五分之四大。",
      zoom: 2.6,
      start: [0.56, 0.34],
      cite: ["ac"],
    },
    {
      type: "steps",
      title: "从春天到夏天",
      steps: [
        { photo: "calling", label: "春天：鼓起泡泡叫", caption: "正在叫的雄蛙", text: "3 月下旬到 4 月是它的繁殖季。雄蛙嘴角两边鼓起两个大泡泡，那是声囊。", shoot: "春天傍晚的池塘边，远远拍正在叫的雄蛙，声囊鼓起来那一刻" },
        { photo: "step-tadpole", label: "卵团孵出蝌蚪", caption: "黑斑侧褶蛙的蝌蚪", text: "卵黏成一团，产在浅水里。孵出的蝌蚪像小鱼，用鳃呼吸，主要吃植物。", shoot: "池塘浅水处，从上往下拍蝌蚪，只看不捞" },
        { photo: "dorsal", label: "变成蛙：改吃肉", caption: "正在吞一条小鱼的黑斑侧褶蛙", text: "蝌蚪长出四条腿，尾巴被慢慢吸收掉。变成蛙后，舌头成了捕食工具，改吃小动物。", shoot: "夏天的水边，远远拍正在吃东西的蛙" },
      ],
      cite: ["ac", "kp-meta"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6 月拍到它最多，4～9 月都常见。12 月到第二年 2 月很少，那时它在土里冬眠。我们是哪个月遇见它的？",
      cite: ["ac"],
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
            "皮肤很粗糙，满背都是圆鼓鼓的疙瘩（瘰疣）",
            "眼睛后面连着耳后腺，背上没有背侧褶；雄的也没有声囊",
          ],
        },
        {
          name: "黑斑侧褶蛙",
          scientific: "Pelophylax nigromaculatus",
          self: true,
          shot: { photo: "look-ce-zhou-wa", caption: "黑斑侧褶蛙" },
          tells: [
            "背上两边各有一道长长的背侧褶，常有一条浅色脊线",
            "两道背侧褶比较窄，中间还有几行长短不一的细棱，背上有黑斑",
          ],
        },
        {
          name: "金线侧褶蛙",
          scientific: "Pelophylax plancyi",
          shot: { photo: "look-jin-xian", caption: "金线侧褶蛙" },
          tells: [
            "背侧褶又宽又厚，最宽的地方和上眼皮差不多宽",
            "背面多是绿色，黑斑少，个子比黑斑侧褶蛙小一点；北京也有",
          ],
        },
      ],
      cite: ["ac", "ac-jx", "ac-toad", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它有多大？", a: "雄蛙体长大约 62 毫米，雌蛙大约 74 毫米，雌的比雄的大。", cite: ["ac"] },
        { q: "冬眠时怎么喘气？", a: "青蛙有肺，也用皮肤呼吸。平时皮肤只负责大约一成的氧气，冬眠时能负责大约九成。", cite: ["kp-meta"] },
        { q: "一次产多少卵？", a: "黎明前后产在稻田、池塘的浅水里，卵黏成一团，一团有 3000～5500 粒。", cite: ["ac"] },
        { q: "什么虫子都吃吗？", a: "不是。实验里九成多的黑斑侧褶蛙都不吃会喷出约 100℃ 毒气的「放屁虫」，大多舌头一碰就停了。", cite: ["sugiura-2018"] },
        { q: "它还有别的名字吗？", a: "青蛙、青鸡、青头蛤蟆、田鸡，都是它的俗名；它以前叫黑斑蛙。", cite: ["ac"] },
        { q: "新疆也有它吗？", a: "新疆塔城有，但那是入侵种群。除了台湾、海南、青海、甘肃、宁夏，我国大部分省份都有它。", cite: ["ac"] },
      ],
    },
  ],
  care: "不抓不摸；碰到了马上洗手，别揉眼睛。水边要和大人在一起。",
  nextTime: "下次看它的背：两边那两道长棱，是不是比中间的斑更鼓、更亮？",
  sources: [
    { id: "ac", title: "黑斑侧褶蛙 Pelophylax nigromaculatus", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/416" },
    { id: "ac-jx", title: "金线侧褶蛙 Pelophylax plancyi", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/415" },
    { id: "ac-toad", title: "中华蟾蜍 Bufo gargarizans", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/289" },
    { id: "kp-meta", title: "蝌蚪变成青蛙，除了去尾长腿，还要……", by: "科普中国", url: "https://www.kepuchina.cn/article/articleinfo?ar_id=269707&business_type=100" },
    { id: "sugiura-2018", title: "Anti-predator defences of a bombardier beetle: is bombing essential for successful escape from frogs?", by: "PeerJ, 2018", url: "https://doi.org/10.7717/peerj.5942" },
    { id: "bj-list", title: "北京陆生野生动物名录—两栖爬行类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071636.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;