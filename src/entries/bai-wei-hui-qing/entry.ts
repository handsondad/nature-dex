import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-wei-hui-qing",
  name: "白尾灰蜻",
  scientific: "Orthetrum albistylum",
  kind: "animal",
  // 灰蜻属里还有几种长得像的，拍清肚子末端那对白色的肛附器再确认
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "蜻蜓目", "蜻科", "灰蜻属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只白尾灰蜻", shoot: "夏天公园池塘边，一只停在地面、石头或木桩上的蜻蜓，从斜上方拍全身；和大人一起站在岸上拍" },
  hello: "小时候它住在水里，叫水虿；爬上草茎蜕掉最后一层皮，就飞起来了。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "male-top", caption: "停着的一只雄蜻蜓", shoot: "一只停在地面或石头上的雄蜻蜓，从正上方拍：头朝左，四片翅膀和整条肚子都在画面里" },
      points: [
        { x: 0.16, y: 0.5, label: "蓝色的大眼睛", detail: "成熟的雄蜻蜓复眼是蓝色的，雌蜻蜓的是绿色的。", cite: ["wiki-ja"] },
        { x: 0.48, y: 0.5, label: "蒙着粉的肚子", detail: "成熟的雄蜻蜓，肚子前半段蒙着一层淡蓝灰色的粉。", cite: ["wiki-de", "wiki-ja"] },
        { x: 0.74, y: 0.5, label: "黑色的肚尾", detail: "肚子后面一段是黑色的，和前面的蓝灰色分得很清楚。", cite: ["wiki-de"] },
        { x: 0.9, y: 0.5, label: "白色的“小尾巴”", detail: "肚子最末端有一对白色的小尾巴（肛附器），雄的、雌的一般都有。", cite: ["wiki-de"] },
        { x: 0.38, y: 0.12, label: "翅膀上的黑点", detail: "翅膀前边靠近翅尖的地方，有一块黑色的小斑（翅痣），还挺大。", cite: ["wiki-de"] },
      ],
    },
    {
      type: "steps",
      title: "从水虿到蜻蜓",
      steps: [
        { photo: "step-nymph", label: "水虿", text: "小时候它住在池塘、水田里，叫水虿。水虿也吃肉，捉小虫子吃，冬天就在水里过。", caption: "趴在水底的稚虫", shoot: "春天在池塘、水田边的浅水处往水底看，拍趴在水底的水虿；和大人一起站在岸上，不下水、不捞" },
        { photo: "step-out", label: "爬出水", text: "要变成蜻蜓了，水虿不再吃东西，爬上露出水面的草茎、木桩或岸边的墙。", caption: "爬上草茎的水虿", shoot: "春夏在池塘边看露出水面的草茎和木桩，拍一只正往上爬的水虿" },
        { photo: "step-emerge", label: "羽化", text: "它用爪子抓牢，头后面的背上裂开。蜻蜓从壳里钻出来，吸进空气，把翅膀慢慢撑开。", caption: "正在钻出来的蜻蜓", shoot: "碰到正在羽化的蜻蜓，站远一点静静拍，不碰它、不碰草茎" },
        { photo: "step-shell", label: "空壳", text: "空壳还抓在草茎上。刚出来的蜻蜓颜色很浅，要过几天才变成自己的颜色。", caption: "水虿蜕下的皮", shoot: "水边草茎或岸墙上留下的水虿空壳，靠近拍" },
      ],
      cite: ["wiki-ja", "wiki-dragonfly"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4 月到 9 月都常拍到它，7 月最多；11 月到第二年 3 月几乎没有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "雄蜻蜓和雌蜻蜓长得一样吗？", a: "不一样。成熟的雄蜻蜓身上蒙着灰白色的粉，像撒了一层盐；雌蜻蜓和年轻的雄蜻蜓是黄色的，带着黑色斑纹。", cite: ["wiki-ja", "wiki-de"] },
        { q: "水虿怎么抓虫子？", a: "它的下唇像一个能弹出去的“面具”，平时折在脸下面，一下子弹出来，抓住蚊子幼虫、蝌蚪和小鱼。", cite: ["wiki-dragonfly"] },
        { q: "水虿怎么游得快？", a: "它从肚子末端喷出一股水，“嗖”的一下就往前冲出去了。", cite: ["wiki-dragonfly"] },
        { q: "为什么它会在汽车上“点水”？", a: "雌蜻蜓在水面上飞，用肚子末端一下一下点水产卵。看到平平的、反光的地方，它也会这样点，有时点在汽车引擎盖上。", cite: ["wiki-ja"] },
      ],
    },
  ],
  care: "只看不抓。去水边要和大人一起，站在岸上看水虿，不下水，不伸手去捞。",
  nextTime: "在池塘边找一只停着的白尾灰蜻：它飞走一会儿，还会回到原来的地方吗？",
  sources: [
    { id: "wiki-de", title: "Östlicher Blaupfeil (Orthetrum albistylum)", by: "Wikipedia（德文）", url: "https://de.wikipedia.org/wiki/%C3%96stlicher_Blaupfeil" },
    { id: "wiki-ja", title: "シオカラトンボ (Orthetrum albistylum speciosum)", by: "Wikipedia（日文）", url: "https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%AA%E3%82%AB%E3%83%A9%E3%83%88%E3%83%B3%E3%83%9C" },
    { id: "wiki-dragonfly", title: "Dragonfly", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dragonfly" },
  ],
  by: ["kid", "dad"],
};

export default entry;
