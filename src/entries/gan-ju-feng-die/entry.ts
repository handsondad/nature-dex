import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "gan-ju-feng-die",
  name: "柑橘凤蝶",
  scientific: "Papilio xuthus",
  kind: "animal",
  // 黄底黑纹、后翅有尾突和蓝橙斑；幼虫吃芸香科。拍开翅成虫较易确认
  certainty: "sure",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "鳞翅目", "凤蝶科", "凤蝶属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只柑橘凤蝶", shoot: "停在花上或叶子上张开翅膀时，从上方或侧面拍：黄底黑纹和后翅尾突清楚；慢慢靠近，只拍不抓" },
  hello: "黄翅膀上画着黑格子，后翅还拖着两根细细的「小尾巴」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-open", caption: "张开翅膀的柑橘凤蝶", shoot: "春到秋晴天，等它停在花上或叶子上张开翅膀，从上方拍：四翅正面、尾突都在画面里" },
      points: [
        { x: 0.4, y: 0.46, label: "放射状条纹", detail: "前翅靠身体的那一格里，有 4～5 条放射状的黑纹，这是认它的关键。", cite: ["kp-gjfd", "wiki-ja"] },
        { x: 0.345, y: 0.765, label: "后翅的小尾巴", detail: "后翅外侧拖出细细的尾突，是凤蝶科常见的样子。", cite: ["wiki-en"] },
        { x: 0.42, y: 0.645, label: "一串蓝斑", detail: "后翅黑带里排着一串蓝色的斑，在阳光下会闪。", cite: ["kp-gjfd", "wiki-en"] },
        { x: 0.46, y: 0.7, label: "橙色眼斑", detail: "后翅靠近身体的角上有一个橙红色的环形斑，像一只小眼睛。", cite: ["kp-gjfd"] },
        { x: 0.73, y: 0.39, label: "大大的翅膀", detail: "翅展大约 9～11 厘米，是中大型的蝴蝶。", cite: ["kp-gjfd", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看毛毛虫的「秘密武器」",
      shot: { photo: "osmeterium", caption: "翻出臭角的大幼虫", shoot: "花椒或柑橘叶上的大青虫，侧面微距拍头部；只拍不碰，不去逗它" },
      text: "受惊时，它从头后翻出橙黄色的「臭丫腺」，散出臭味赶走蚂蚁等敌人。旁边那只「大眼睛」是假眼，用来吓唬鸟。",
      start: [0.53, 0.33],
      cite: ["kp-gjfd", "wiki-ja", "kp-njau"],
    },
    {
      type: "steps",
      title: "从一粒卵到一只蝴蝶",
      steps: [
        { photo: "step-egg", label: "卵", text: "雌蝶把卵一粒一粒产在嫩芽和嫩叶背面。卵圆圆的，约 1 毫米，刚产下是黄色。", caption: "枝条上的一粒卵", shoot: "柑橘、花椒的嫩芽和叶背找卵，微距拍，不摘叶子" },
        { photo: "larva-young", label: "像鸟粪", text: "小幼虫黑褐色、背上带白斑，趴在叶子上像一坨鸟粪，鸟就不爱吃它。", caption: "像鸟粪的小幼虫", shoot: "叶面上找黑白相间的小虫，从上方微距拍；只拍不碰" },
        { photo: "larva-old", label: "大青虫", text: "一共长 5 龄。最后一龄变成草绿色，胸前有一对大假眼，能长到约 4 厘米。", caption: "最后一龄的绿色幼虫", shoot: "侧面拍出假眼和身上的斑纹；只拍不碰" },
        { photo: "step-pupa", label: "蛹", text: "用一根丝带把自己斜斜地绑在枝条上。蛹期约 2 周；过冬的蛹常是黄褐色。", caption: "绑着丝带的蛹", shoot: "枝条或墙角找蛹，带一点背景拍清楚，不要扯下来" },
        { photo: "step-adult", label: "蝴蝶", text: "破蛹而出。北方一年约 3 代，日本 4～5 代；冬天以蛹的样子过冬。", caption: "停在花丛里的成虫", shoot: "停在叶子或花上的成虫，和前面几张最好拍在同一类植物附近" },
      ],
      cite: ["kp-gjfd", "kp-njau", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "黄黑大凤蝶，别认错",
      quiz: true,
      items: [
        {
          name: "金凤蝶", scientific: "Papilio machaon",
          shot: { photo: "look-jfd", caption: "金凤蝶" },
          tells: ["前翅靠身体的地方整片是黑的，没有放射状条纹", "整体颜色更黄一些"],
        },
        {
          name: "柑橘凤蝶", scientific: "Papilio xuthus", self: true,
          shot: { photo: "cover", caption: "柑橘凤蝶" },
          tells: ["前翅靠身体处有 4～5 条放射状的黑纹", "毛毛虫吃花椒、柑橘的叶子"],
        },
      ],
      cite: ["kp-gjfd", "wiki-ja"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 8、9 月拍到它最多，12 月和 1 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么北方人叫它「花椒凤蝶」？", a: "在北方，它的毛毛虫常吃花椒叶，所以又叫花椒凤蝶。", cite: ["kp-njau"] },
        { q: "小毛毛虫出生后第一口吃什么？", a: "吃自己的卵壳，吃完才开始啃叶子。", cite: ["wiki-ja"] },
        { q: "翅膀上的蓝色是颜料吗？", a: "不是。蓝鳞片里没有色素，蓝光是鳞片里一层层很薄的结构反射出来的，叫结构色。", cite: ["stavenga-2015"] },
        { q: "换成彩色的灯光，它还认得出颜色吗？", a: "能。科学家训练它认颜色，在彩色灯光下它照样挑对，这叫颜色恒常性。", cite: ["kinoshita-2000"] },
        { q: "春天和夏天的它一样吗？", a: "不一样。春型个子小、颜色淡；夏型更大，黑色更深。", cite: ["kp-gjfd", "wiki-ja"] },
        { q: "北京周边常见吗？", a: "很常见，城市、郊野和果园都能见到；整体不被认为受威胁。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "只看不抓，不用手捏翅膀。毛毛虫也只看不碰，别逗它翻出臭角。",
  nextTime: "下次在花椒或柑橘叶子上找找：有没有像鸟粪的小毛毛虫？",
  sources: [
    { id: "kp-gjfd", title: "柑桔凤蝶", by: "科普中国", url: "https://www.kepuchina.cn/article/articleinfo?business_type=100&ar_id=345451" },
    { id: "kp-njau", title: "柑橘凤蝶的秘密", by: "科普中国 / 南京农业大学", url: "https://www.kepuchina.cn/article/articleinfo?business_type=100&ar_id=496117" },
    { id: "stavenga-2015", title: "Combined pigmentary and structural effects tune wing scale coloration to color vision in the swallowtail butterfly Papilio xuthus", by: "Stavenga, Matsushita & Arikawa, Zoological Letters (2015)", url: "https://doi.org/10.1186/s40851-015-0015-2" },
    { id: "kinoshita-2000", title: "Colour constancy in the swallowtail butterfly Papilio xuthus", by: "Kinoshita & Arikawa, Journal of Experimental Biology (2000)", url: "https://doi.org/10.1242/jeb.203.23.3521" },
    { id: "wiki-en", title: "Papilio xuthus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Papilio_xuthus" },
    { id: "wiki-ja", title: "ナミアゲハ", by: "ウィキペディア", url: "https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%9F%E3%82%A2%E3%82%B2%E3%83%8F" },
  ],
  by: ["kid", "dad"],
};

export default entry;
