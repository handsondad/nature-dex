import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "da-ban-zhuo-mu-niao",
  name: "大斑啄木鸟",
  scientific: "Dendrocopos major",
  kind: "animal",
  // 北京还有别的黑白花啄木鸟，拍到肩上的大白斑和尾巴下面的红色再改 sure
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "䴕形目", "啄木鸟科", "啄木鸟属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只大斑啄木鸟", shoot: "趴在树干上的一只，肩上的白斑和尾巴下面的红色都拍进去；秋冬叶子落了更好找，听到「笃笃笃」再顺着声音找，远拍，别靠近树洞" },
  hello: "它用嘴敲树干，一秒能敲十几下，「笃笃笃」的声音能传很远。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side", caption: "趴在白桦树干上的雄鸟", shoot: "一只趴在树干上的侧面，头朝上：后脑勺、肩上的白斑、尾巴和尾巴下面的红色都在画面里；远拍" },
      points: [
        { x: 0.565, y: 0.22, label: "后脑勺有没有红？", detail: "雄鸟后脑勺有一块红，雌鸟没有。刚离窝的小鸟是整个头顶红。", cite: ["wiki-en", "rspb"] },
        { x: 0.535, y: 0.38, label: "肩上一大块白", detail: "黑色的背两边，各有一大块白斑。", cite: ["wiki-en"] },
        { x: 0.505, y: 0.53, label: "翅膀上的白点", detail: "合起来的翅膀上是一排排黑白相间的小白点，像横纹。", cite: ["wiki-en"] },
        { x: 0.47, y: 0.7, label: "尾巴下面红红的", detail: "肚子下半截和尾巴下面是鲜红色的。", cite: ["wiki-en", "rspb"] },
        { x: 0.49, y: 0.86, label: "撑着树的硬尾巴", detail: "尾羽又硬又直，爬树的时候顶在树干上，帮它稳住身子。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "compare",
      title: "红帽子的小鸟",
      before: { photo: "young", label: "刚离窝的小鸟", caption: "整个头顶都是红色的小鸟", shoot: "初夏远远拍一只头顶一片红的小啄木鸟，侧面；别在树洞附近久留" },
      after: { photo: "adult", label: "雄鸟", caption: "只有后脑勺一小块红的雄鸟", shoot: "远远拍一只成鸟的侧脸，看清后脑勺有没有红" },
      text: "刚离窝的小鸟整个头顶都是红的，像戴了一顶小红帽。长大以后，雄鸟只剩后脑勺一小块红，雌鸟头上一点红也没有。",
      cite: ["wiki-en", "rspb"],
    },
    {
      type: "steps",
      title: "树洞里的一家",
      steps: [
        {
          photo: "step-dig",
          label: "凿洞",
          text: "春天，夫妻俩在树干上凿一个新洞当窝。洞口 5～6 厘米宽，往里 25～35 厘米深，洞里不铺草，只有凿下来的木屑。",
          caption: "树干上有两个圆洞，旁边趴着一只大斑啄木鸟",
          shoot: "远远拍树干上的圆洞和啄木鸟；别靠近、别敲树、别往洞里看",
        },
        {
          photo: "step-chick",
          label: "喂宝宝",
          text: "一窝通常 4～6 枚白蛋。宝宝刚出壳时光溜溜的，什么都不会，爸爸妈妈轮流叼着虫子回来，塞进探出洞口的小嘴里。",
          caption: "雄鸟在洞口喂一只红头顶的宝宝",
          shoot: "初夏听到树洞里吵吵的叫声，用长焦远远拍洞口；拍几张就走",
        },
        {
          photo: "step-fledge",
          label: "离窝",
          text: "大约三周后，小鸟爬出树洞。离窝后的头十来天，爸爸妈妈还会接着喂它。",
          caption: "刚离窝、头顶红红的小鸟趴在树干上",
          shoot: "远远拍一只头顶红红的小鸟；它飞不远，也别去追",
        },
      ],
      cite: ["wiki-en", "bto", "rspb"],
    },
    {
      type: "magnifier",
      title: "凑近看它的脚",
      shot: { photo: "feet", caption: "叼着松果、抓在树干上的雄鸟", shoot: "用长焦拍一张抓着树干的啄木鸟，脚和尾巴要清楚" },
      text: "它的脚两个脚趾朝前、两个朝后，钩子一样的爪子抠进树皮里，再用硬尾巴往下一撑，就能稳稳地趴在竖直的树干上。",
      zoom: 2.5,
      start: [0.74, 0.52],
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，7、8 月拍到的少很多。北京名录里它是「留鸟」：一年四季都住在北京。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "北京树干上的黑白啄木鸟",
      quiz: true,
      items: [
        {
          // 维基与 iNaturalist 归入 Yungipicus canicapillus，北京名录记作 Dendrocopos canicapillus
          name: "星头啄木鸟",
          scientific: "Yungipicus scintilliceps",
          shot: { photo: "look-xing-tou", caption: "星头啄木鸟" },
          tells: [
            "个子比大斑啄木鸟小一圈",
            "背上是一道道黑白横斑，肩部没有两大块白斑，尾巴下面也不红",
          ],
        },
        {
          name: "大斑啄木鸟",
          scientific: "Dendrocopos major",
          self: true,
          shot: { photo: "look-da-ban", caption: "大斑啄木鸟" },
          tells: [
            "黑色的背两边，肩上各有一大块醒目的白斑",
            "肚子下半截和尾巴下面是鲜红色的",
          ],
        },
        {
          name: "白背啄木鸟",
          scientific: "Dendrocopos leucotos",
          shot: { photo: "look-bai-bei", caption: "白背啄木鸟（雄鸟）" },
          tells: [
            "肩上没有两大块白斑，翅膀上是一道道白横纹，下背是白的",
            "雄鸟整个头顶是红的，雌鸟头顶是黑的",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-gcpw", "wiki-wbw", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "「笃笃笃」是在找虫子吗？", a: "不全是。有时它在凿洞找吃的；有时是在枯树上「打鼓」，让伴侣知道它在哪儿，也让别的啄木鸟知道这块地方有主了。", cite: ["wiki-en"] },
        { q: "以前人们以为打鼓声是什么？", a: "直到 100 多年前，还有人以为那是它叫出来的声音。1943 年才证明，那完全是用嘴敲出来的。", cite: ["wiki-en"] },
        { q: "它的舌头有多长？", a: "能伸到嘴巴外面 4 厘米，舌头上有小刺和黏黏的口水，能把木头里的虫子粘出来。", cite: ["wiki-en"] },
        { q: "天天敲树，脑袋受得了吗？", a: "很多人以为它的头像「减震器」。2022 年科学家测量发现，它的头几乎不减震，像一把硬锤子，敲起来才有劲；它的脑袋小，受到的冲击还不到让人脑震荡的程度。", cite: ["vanwassenbergh-2022"] },
        { q: "松果卡在树缝里是谁干的？", a: "它有自己的「砧板」：把松果、云杉果这些硬东西放上去卡好，再一下一下地啄，把里面的种子啄出来。", cite: ["wiki-en"] },
        { q: "大斑啄木鸟能活多少年？", a: "在英国给鸟套环的记录里，最老的一只活了 11 年 10 个月。", cite: ["bto"] },
      ],
    },
  ],
  care: "远远看，不追。树干上看到圆圆的洞，别靠近、别去掏，那可能是它的窝。",
  nextTime: "下次去松树多的地方，找找树缝里有没有卡着被啄碎的松果？那可能是啄木鸟的「砧板」。",
  sources: [
    { id: "wiki-en", title: "Great spotted woodpecker", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Great_spotted_woodpecker" },
    { id: "wiki-gcpw", title: "Grey-capped pygmy woodpecker", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grey-capped_pygmy_woodpecker" },
    { id: "wiki-wbw", title: "White-backed woodpecker", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/White-backed_woodpecker" },
    { id: "bto", title: "Great Spotted Woodpecker | BTO BirdFacts", by: "British Trust for Ornithology", url: "https://www.bto.org/learn/about-birds/birdfacts/great-spotted-woodpecker" },
    { id: "rspb", title: "Great Spotted Woodpecker", by: "RSPB", url: "https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker" },
    { id: "vanwassenbergh-2022", title: "Woodpeckers minimize cranial absorption of shocks", by: "Van Wassenbergh et al., Current Biology 32(14), 2022", url: "https://doi.org/10.1016/j.cub.2022.05.052" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
