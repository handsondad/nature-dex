import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bang-luo-xin-fu",
  name: "棒络新妇",
  pinyin: "bàng luò xīn fù",
  scientific: "Trichonephila clavata",
  kind: "animal",
  // 成熟雌蛛黄肚子上的蓝绿横带、肚子下的红斑和金色大网放在一起，没有别的蜘蛛像它
  certainty: "sure",
  taxonomy: ["动物界", "节肢动物门", "蛛形纲", "蜘蛛目", "络新妇科", "毛络新妇属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只棒络新妇", shoot: "九十月在公园树丛或灌木间，一张大网中间的雌蛛，背景暗一点、侧光拍，网和蜘蛛都清楚；只拍不碰网" },
  hello: "秋天树间挂着金闪闪的大网，网中间的大个子是雌蛛，小个子是雄蛛。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "female-web", caption: "网上的成熟雌蛛", shoot: "网中间的雌蛛，从侧面稍高处拍，长腿和整个肚子都在画面里；只拍不碰网" },
      points: [
        { x: 0.69, y: 0.6, label: "黄肚子上的花纹带", detail: "成熟雌蛛的肚子又长又大，是亮黄色的，背上横着几道蓝绿色的宽带。", cite: ["uga-joro"] },
        { x: 0.77, y: 0.51, label: "肚子上的红色", detail: "肚子末端带着一片红；从网背面看，肚子底下还有大块的红斑。", cite: ["uga-joro"] },
        { x: 0.39, y: 0.79, label: "黑黄相间的长腿", detail: "八条腿又细又长，是黑色的，上面有一圈圈黄橙色的环。", cite: ["uga-joro"] },
        { x: 0.57, y: 0.53, label: "长细毛的前半身", detail: "前半身（头胸部）颜色深，上面长着一层金色、银色的细毛。", cite: ["psu-joro"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看肚子底下",
      shot: { photo: "female", caption: "从网的背面看一只雌蛛", shoot: "绕到网的另一面，从下往上拍雌蛛的肚子底下；人站在网外，不碰网" },
      text: "把放大镜移到它的肚子上：从网的背面看，黄黑花纹中间夹着大块的红斑，这是成熟雌蛛的记号。",
      zoom: 3,
      start: [0.42, 0.63],
      cite: ["uga-joro"],
    },
    {
      type: "steps",
      title: "从一个卵囊到一张大网",
      steps: [
        {
          photo: "step-egg",
          label: "卵囊",
          caption: "贴在树皮上的白色卵囊",
          shoot: "十一月以后在树皮、墙角找一团白色丝囊，只拍不碰",
          text: "秋天雌蛛在树皮、叶子或墙上织一个白色丝囊，里面有 400～500 粒卵。卵就在丝囊里过冬。",
        },
        {
          photo: "step-young",
          label: "亚成蛛",
          caption: "还没长大的雌蛛，肚子是黑黄花纹",
          shoot: "七八月在灌木间找小一些的网，拍网中间的半大蜘蛛",
          text: "初夏小蜘蛛钻出卵囊，放丝随风飘走，再各自织网长大。半大的雌蛛肚子是黑黄相间的花纹。",
        },
        {
          photo: "step-adult",
          label: "成蛛",
          caption: "网中间的雌蛛，右上方守着一只小个子雄蛛",
          shoot: "九十月找一张大网，把雌蛛和网上的小个子雄蛛一起拍进去",
          text: "八月底雄蛛先长大，跑到雌蛛网上等；九月到十月初雌蛛最后一次蜕皮，换上黄底蓝绿横带的新衣。",
        },
      ],
      cite: ["uga-joro", "psu-joro", "miyashita-1993"],
    },
    {
      type: "compare",
      title: "雌蛛 vs 雄蛛",
      before: { photo: "step-adult", label: "雌蛛", caption: "又大又鲜艳的雌蛛", shoot: "在网上找大个子的雌蛛，横着拍下整只" },
      after: { photo: "male", label: "雄蛛", caption: "又小又朴素的雄蛛", shoot: "在同一张网边找小个子的浅褐色雄蛛，用同样横画幅拍" },
      text: "雌蛛身体 17～30 毫米，黄肚子配蓝绿横带；雄蛛只有 4～8 毫米，浅褐色，前半身两侧各有一道深色纹。雄蛛自己不织网，就住在雌蛛的网上。",
      cite: ["uga-joro", "psu-joro"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 8 月到 10 月常拍到它，9、10 月拍到的次数多；3 月到 5 月几乎没有人拍到，那时它还在卵囊里或刚出来。我们是哪个月遇见它的？",
      cite: ["uga-joro", "psu-joro"],
    },
    {
      type: "lookalike",
      title: "秋天网上的大蜘蛛，哪只是它？",
      quiz: true,
      items: [
        {
          name: "横纹金蛛",
          scientific: "Argiope bruennichi",
          shot: { photo: "look-hwjz", caption: "横纹金蛛" },
          tells: ["肚子上是黄、白、黑一道道横纹，像小黄蜂", "网中间常有一条白色的「之」字形粗丝带，网多挂在草丛里贴近地面"],
        },
        {
          name: "棒络新妇",
          scientific: "Trichonephila clavata",
          self: true,
          shot: { photo: "female", caption: "棒络新妇" },
          tells: ["肚子长长的，黄底配蓝绿横带，底下有大块红斑", "网很大、丝发黄，网上常还住着几只小个子雄蛛"],
        },
        {
          name: "大腹园蛛",
          scientific: "Araneus ventricosus",
          shot: { photo: "look-dfyz", caption: "大腹园蛛" },
          tells: ["肚子又圆又鼓，褐色、黑色或灰色，没有鲜艳的黄色", "夜里才织网，早上就把网收掉"],
        },
      ],
      cite: ["wiki-ab", "wiki-av", "uga-joro"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "雌蛛和雄蛛差多大？", a: "雌蛛身体 17～30 毫米长，雄蛛只有 4～8 毫米。称一称，雌蛛能比雄蛛重到 500 倍。", cite: ["uga-joro"] },
        { q: "一张网上住着几只蜘蛛？", a: "雄蛛自己不织网，住在雌蛛的网上，一张网上数到过多达 10 只。个子大的雄蛛常占着离雌蛛最近的位置。", cite: ["uga-joro", "miyashita-1993"] },
        { q: "它的网只有一层吗？", a: "不止！中间是一张大圆网，前面和后面还各挂着一层乱乱的细丝，像三层的网。", cite: ["wiki-en"] },
        { q: "小蜘蛛怎么搬家？", a: "小蜘蛛放出细丝，风一吹，丝就带着它飘走，能飘几十到几百英里。它在美国越来越多，主要就靠这样飘。", cite: ["psu-joro", "chuang-2023"] },
        { q: "它会咬人吗？", a: "很少。它的毒牙小、毒性弱，遇到人多半躲开；研究发现，它几乎只在被人硬抓住时才会咬。还是只看不碰。", cite: ["psu-joro", "nelsen-2025"] },
        { q: "蜘蛛是昆虫吗？", a: "不是。蜘蛛有 8 条腿，身体分成两段；昆虫有 6 条腿，身体分成三段。", cite: ["wiki-spider", "wiki-insect"] },
      ],
    },
  ],
  care: "只看不碰，不弄破网；路上有网就绕开走，不用棍子去挑。",
  nextTime: "下次经过同一张网看看：网破了的地方，过两天会被补好吗？",
  sources: [
    { id: "uga-joro", title: "Joro Spider: Trichonephila clavata (Circular 1273)", by: "University of Georgia Extension", url: "https://fieldreport.caes.uga.edu/publications/C1273/joro-spider-trichonephila-clavata/" },
    { id: "psu-joro", title: "Jorō Spiders", by: "Penn State Extension", url: "https://extension.psu.edu/joro-spiders" },
    { id: "miyashita-1993", title: "Male-male competition and mating success in the orb-web spider, Nephila clavata, with reference to temporal factors", by: "Ecological Research 8: 93–102 (1993)", url: "https://doi.org/10.1007/bf02348612" },
    { id: "chuang-2023", title: "The Jorō spider (Trichonephila clavata) in the southeastern U.S.: an opportunity for research and a call for reasonable journalism", by: "Biological Invasions 25: 17–26 (2023)", url: "https://doi.org/10.1007/s10530-022-02914-3" },
    { id: "nelsen-2025", title: "Keep calm and carry on: bites from Trichonephila clavata are unlikely and cause minimal discomfort", by: "Journal of Medical Entomology 62(6): 1396–1408 (2025)", url: "https://doi.org/10.1093/jme/tjaf103" },
    { id: "wiki-en", title: "Trichonephila clavata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trichonephila_clavata" },
    { id: "wiki-ab", title: "Argiope bruennichi", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Argiope_bruennichi" },
    { id: "wiki-av", title: "Araneus ventricosus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Araneus_ventricosus" },
    { id: "wiki-spider", title: "Spider", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Spider" },
    { id: "wiki-insect", title: "Insect", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Insect" },
  ],
  by: ["kid", "dad"],
};

export default entry;