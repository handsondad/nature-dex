import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 页面上的照片都是转载的参考照片；文件名沿用旧的待拍位（male-top 实际是黄色的雌蜻蜓或年轻雄蜻蜓，step-emerge、step-shell 是成熟雄蜻蜓）。
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
  cover: { photo: "cover", caption: "参考照片：正在吃一只豆娘的白尾灰蜻", shoot: "夏天公园池塘边，一只停在地面、石头或木桩上的蜻蜓，从斜上方拍全身；和大人一起站在岸上拍" },
  hello: "小时候它住在水里，叫水虿；爬上草茎蜕掉最后一层皮，就飞起来了。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "male-side", caption: "参考照片：停在枝头的成熟雄蜻蜓", shoot: "一只停在枝头或石头上的雄蜻蜓，从侧上方拍：四片翅膀和整条肚子都在画面里" },
      points: [
        { x: 0.565, y: 0.33, label: "蓝色的大眼睛", detail: "成熟的雄蜻蜓复眼是蓝色的，雌蜻蜓的是绿色的。", cite: ["wiki-ja"] },
        { x: 0.36, y: 0.455, label: "蒙着粉的肚子", detail: "肚子前半段蒙着一层淡蓝灰色的粉，太阳底下看几乎是白的。", cite: ["bioobs", "wiki-ja"] },
        { x: 0.212, y: 0.56, label: "黑色的肚尾", detail: "肚子最后三节（第 8～10 节）是黑色的，和前面的蓝灰色分得很清楚。", cite: ["bioobs", "wiki-de"] },
        { x: 0.125, y: 0.605, label: "白色的“小尾巴”", detail: "肚子最末端有一对白色的小尾巴（肛附器），雄的、雌的都有。“白尾”说的就是它。", cite: ["bioobs", "wiki-de"] },
        { x: 0.885, y: 0.53, label: "翅膀上的黑点", detail: "每片翅膀前边靠近翅尖的地方，有一块黑色的小斑，叫翅痣。", cite: ["bioobs"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看白色的小尾巴",
      shot: { photo: "male-top", caption: "参考照片：黄色的雌蜻蜓或年轻雄蜻蜓", shoot: "一只黄色带黑纹的蜻蜓停在草叶上，从正上方拍，肚子末端要清楚" },
      text: "黄色的这只，肚子末端也有那对白色的小尾巴。欧洲几种长得像的灰蜻，这对小尾巴是黑的，所以先看尾巴尖。",
      zoom: 3,
      start: [0.31, 0.61],
      cite: ["bioobs"],
    },
    {
      type: "steps",
      title: "从水虿到蓝灰色的蜻蜓",
      steps: [
        { photo: "step-nymph", label: "水虿", text: "小时候它住在池塘、水田里，叫水虿。要蜕十来次皮，最后长到 2 厘米多；冬天就在水里过。", caption: "参考照片：水底的水虿", shoot: "春天在池塘、水田边的浅水处往水底看，拍趴在水底的水虿；和大人一起站在岸上，不下水、不捞" },
        { photo: "young", label: "年轻时", text: "水虿爬上草茎、木桩或岸边的墙，蜕皮飞起来。刚长大的雄蜻蜓还是黄色带黑斑，和雌蜻蜓很像。", caption: "参考照片：年轻的雄蜻蜓", shoot: "夏天水边草茎上一只黄色带黑纹的蜻蜓，侧面拍全身，肚子末端要清楚" },
        { photo: "step-emerge", label: "成熟", text: "慢慢地，雄蜻蜓身上变黑，胸和肚子前半段蒙上一层灰白色的粉，肚尾还是黑的。", caption: "参考照片：成熟的雄蜻蜓", shoot: "同一片水边，一只停在草茎上的蓝灰色雄蜻蜓，和上一张同样的角度拍" },
      ],
      cite: ["wiki-ja", "bioobs"],
    },
    {
      type: "lookalike",
      title: "都是蓝灰色，别认错",
      quiz: true,
      items: [
        {
          name: "异色灰蜻", scientific: "Orthetrum melania",
          shot: { photo: "look-yshq", caption: "异色灰蜻" },
          tells: ["个子比白尾灰蜻大一些", "后翅的翅根有一块明显的深褐色"],
        },
        {
          name: "白尾灰蜻", scientific: "Orthetrum albistylum", self: true,
          shot: { photo: "step-shell", caption: "白尾灰蜻" },
          tells: ["翅根是透明的", "肚子最后三节是黑的", "肚子最末端有一对白色的小尾巴"],
        },
      ],
      cite: ["wiki-ja", "bioobs"],
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
        { q: "雄蜻蜓身上的灰白粉像什么？", a: "像撒了一层盐。日本人叫它“盐辛蜻蜓”（シオカラトンボ），名字就从这层像盐的粉来。雌蜻蜓和年轻的雄蜻蜓没有粉，是黄色带黑斑的。", cite: ["wiki-ja"] },
        { q: "蓝灰色的一定是雄蜻蜓吗？", a: "不一定。偶尔也有雌蜻蜓身上蒙了粉，看起来和雄的一样。这时看眼睛：雄的复眼是蓝色的，雌的是绿色的。", cite: ["wiki-ja"] },
        { q: "水虿怎么抓虫子？", a: "它的下唇像一个能弹出去的“面具”，平时折在脸下面。科学家发现，下唇靠两个先拉紧的“弹簧”一起松开，一下弹出去抓住小虫、蝌蚪。", cite: ["wiki-dragonfly", "busse-2021"] },
        { q: "水虿怎么游得快？", a: "它从肚子末端喷出一股水，“嗖”的一下就往前冲出去了。", cite: ["wiki-dragonfly"] },
        { q: "为什么它会在汽车上“点水”？", a: "雌蜻蜓用肚子末端点水产卵。它们靠水面反射的一种光（水平偏振光）找水，黑亮的车身反射的光很像，所以有时点在引擎盖上。", cite: ["wiki-ja", "kriska-2009"] },
      ],
    },
  ],
  care: "只看不抓。去水边要和大人一起，站在岸上看水虿，不下水，不伸手去捞。",
  nextTime: "在池塘边找一只停着的白尾灰蜻：它飞走一会儿，还会回到原来的地方吗？",
  sources: [
    { id: "bioobs", title: "Orthetrum albistylum (Selys, 1848)：Fiche espèce", by: "BioObs 物种页，据 Boudot 等 2019、Dijkstra 2015", url: "https://bioobs.fr/fiches-especes/4459" },
    { id: "wiki-de", title: "Östlicher Blaupfeil (Orthetrum albistylum)", by: "Wikipedia（德文）", url: "https://de.wikipedia.org/wiki/%C3%96stlicher_Blaupfeil" },
    { id: "wiki-ja", title: "シオカラトンボ (Orthetrum albistylum speciosum)", by: "Wikipedia（日文）", url: "https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%AA%E3%82%AB%E3%83%A9%E3%83%88%E3%83%B3%E3%83%9C" },
    { id: "wiki-dragonfly", title: "Dragonfly", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dragonfly" },
    { id: "busse-2021", title: "A controllable dual-catapult system inspired by the biomechanics of the dragonfly larvae's predatory strike", by: "Büsse et al., Science Robotics 2021", url: "https://doi.org/10.1126/scirobotics.abc8170" },
    { id: "kriska-2009", title: "Degrees of polarization of reflected light eliciting polarotaxis in dragonflies (Odonata), mayflies (Ephemeroptera) and tabanid flies (Tabanidae)", by: "Kriska et al., Journal of Insect Physiology 2009", url: "https://doi.org/10.1016/j.jinsphys.2009.08.013" },
  ],
  by: ["kid", "dad"],
};

export default entry;