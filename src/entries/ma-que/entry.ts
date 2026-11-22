import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ma-que",
  // 正式名是树麻雀；北京城里的「麻雀」就是它，用孩子熟悉的叫法
  name: "麻雀",
  pinyin: "má què",
  scientific: "Passer montanus",
  kind: "animal",
  // 白脸蛋上一块黑斑，和山麻雀、家麻雀都分得开，拍清脸就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "雀科", "麻雀属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只麻雀", shoot: "远远拍一只在地上找吃的或停在矮枝上的麻雀，脸和身子都清楚。蹲下来、慢慢等，别冲过去把它们吓飞" },
  hello: "白白的脸蛋上一块小黑斑，麻雀爸爸和麻雀妈妈都有。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "地上找吃的麻雀", shoot: "手机放大，拍一只侧身站着的麻雀：头顶、脸蛋、下巴和翅膀都看得清。晴天上午光线好，站远一点等它不动的时候拍" },
      points: [
        { x: 0.49, y: 0.245, label: "栗色的头顶", detail: "头顶到后脖子是栗子一样的棕色。", cite: ["wiki-en", "cern-mq"] },
        { x: 0.44, y: 0.35, label: "脸蛋上的黑斑", detail: "白白的脸蛋上，两边各有一块黑斑，形状像一颗芸豆。", cite: ["wiki-en", "cern-mq"] },
        { x: 0.55, y: 0.5, label: "翅膀上两道白线", detail: "棕色的翅膀上，有两道细细的白条。", cite: ["wiki-en"] },
        { x: 0.64, y: 0.44, label: "带黑纹的背", detail: "背是浅褐色的，上面有一道道黑色的纵纹。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看看它的脸",
      shot: { photo: "side-view", caption: "麻雀的脸和脖子" },
      text: "白脸蛋上一块黑斑，像贴了一颗芸豆；下巴有一小块黑，比家麻雀和山麻雀的都小；脖子后面绕着一圈灰白色的「领环」，像围了一条小围巾。家麻雀和山麻雀的脸上都没有这块黑斑。",
      zoom: 2.5,
      start: [0.46, 0.34],
      cite: ["cern-mq", "wiki-en"],
    },
    {
      type: "steps",
      title: "麻雀一家",
      steps: [
        { photo: "step-nest", caption: "从墙洞里钻出来的麻雀", label: "找洞安家", text: "窝做在树洞、石缝或房顶的空隙里。一窝常有 5～6 颗蛋，爸爸妈妈轮流孵 12～13 天。" },
        { photo: "step-young", caption: "刚离窝不久的小麻雀", label: "刚出窝", text: "小鸟孵出来再过 15～18 天就能离窝。小麻雀颜色比大鸟暗淡，嘴根还带着黄色。" },
        { photo: "step-adult", caption: "树枝上的三只麻雀", label: "长大了", text: "长成大鸟后，栗色头顶、白脸蛋和黑脸斑都清清楚楚。不到一年，它就能自己当爸爸妈妈了。" },
      ],
      cite: ["wiki-en", "cern-mq"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有很多人拍到它，5 月最多。北京名录里它是「留鸟」：一年到头都住在北京。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "麻雀和它的两个亲戚",
      quiz: true,
      items: [
        {
          name: "家麻雀",
          scientific: "Passer domesticus",
          shot: { photo: "look-jia-ma-que", caption: "雄性家麻雀" },
          tells: [
            "雄鸟头顶是灰色的，白脸蛋上没有黑斑",
            "公鸟和母鸟羽毛差别很大，母鸟全身朴素的灰褐色",
          ],
        },
        {
          name: "麻雀（树麻雀）",
          scientific: "Passer montanus",
          self: true,
          shot: { photo: "look-ma-que", caption: "树麻雀" },
          tells: [
            "栗棕色的头顶，白脸蛋上有一块醒目的黑斑",
            "雌雄同色，麻雀爸爸和麻雀妈妈长得一样",
            "在北京是留鸟，城里一年四季都有",
          ],
        },
        {
          name: "山麻雀",
          scientific: "Passer cinnamomeus",
          shot: { photo: "look-shan-ma-que", caption: "雄性山麻雀" },
          tells: [
            "雄鸟头顶和背是亮亮的栗色，脸颊发白、没有黑斑",
            "雌鸟颜色暗，有一道深色贯眼纹和一条长长的白眉",
            "在北京是夏候鸟和旅鸟，多在山边的林子和灌丛里",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-hs", "cern-mq", "cern-sms", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "哪只是麻雀爸爸，哪只是麻雀妈妈？", a: "看不出来！麻雀的公鸟和母鸟羽毛长得一样，这在它的亲戚里很少见。小麻雀的颜色淡一些。", cite: ["wiki-en", "cern-mq"] },
        { q: "麻雀吃什么？", a: "主要吃草籽和谷粒。养宝宝的时候，它会抓小虫子、蜘蛛来喂小鸟。", cite: ["wiki-en"] },
        { q: "冬天那么冷，麻雀怎么熬过去？", a: "黑龙江的研究发现：冬天的麻雀比夏天重，心、肝、胃都变大，身体「烧」得更旺，靠多产热来抗冷。", cite: ["zheng-2008"] },
        { q: "青藏高原上也有麻雀吗？", a: "有。它们跟着人们种庄稼上了高原，才几千年，高原麻雀的肌肉就和平原的不一样了。", cite: ["qu-2020"] },
        { q: "欧洲的城里也到处是它吗？", a: "不是。在欧洲，它多住在乡下，城里多是它的亲戚家麻雀。在中国东部，城里的麻雀就是它。", cite: ["wiki-en", "cern-mq"] },
        { q: "美国也有它吗？", a: "有。1870 年，有人从德国运来二十几只，放飞在美国圣路易斯，它们就在那一带住了下来。", cite: ["bow-mq"] },
      ],
    },
  ],
  care: "远远看，不追不抓。春夏捡到不会飞的小麻雀，先别带走，告诉大人。",
  nextTime: "麻雀的嘴是什么颜色？冬天和夏天各看一次，比一比有没有变。",
  sources: [
    { id: "cern-mq", title: "麻雀", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E9%BA%BB%E9%9B%80" },
    { id: "wiki-en", title: "Eurasian tree sparrow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_tree_sparrow" },
    { id: "wiki-hs", title: "House sparrow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/House_sparrow" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "cern-sms", title: "山麻雀", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%B1%B1%E9%BA%BB%E9%9B%80" },
    { id: "bow-mq", title: "Eurasian Tree Sparrow (Passer montanus)", by: "Birds of the World, Cornell Lab of Ornithology", url: "https://birdsoftheworld.org/bow/species/eutspa/cur/introduction" },
    { id: "zheng-2008", title: "Seasonal acclimatization of metabolism in Eurasian tree sparrows (Passer montanus)", by: "Comparative Biochemistry and Physiology Part A, 2008", url: "https://doi.org/10.1016/j.cbpa.2008.07.009" },
    { id: "qu-2020", title: "Rapid phenotypic evolution with shallow genomic differentiation during early stages of high elevation adaptation in Eurasian Tree Sparrows", by: "National Science Review, 2020", url: "https://doi.org/10.1093/nsr/nwz138" },
  ],
  by: ["kid", "dad"],
};

export default entry;
