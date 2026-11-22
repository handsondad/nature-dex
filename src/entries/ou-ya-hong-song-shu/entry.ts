import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京叫它「北松鼠」。北京常见的多是东北亚种，毛色灰褐到黑，并不怎么红。
const entry: Entry = {
  id: "ou-ya-hong-song-shu",
  name: "欧亚红松鼠",
  pinyin: "ōu yà hóng sōng shǔ",
  scientific: "Sciurus vulgaris",
  kind: "animal",
  // 冬天耳尖一簇竖起的毛、白肚皮、在高处的树上活动，对上就能和岩松鼠、花鼠分开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "啮齿目", "松鼠科", "松鼠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只松鼠", shoot: "我们遇见的那一只：公园里在树上或树下活动的松鼠。用长焦远远拍，大尾巴和耳朵都拍进去；不走近、不投喂" },
  hello: "它在树枝间跳来跳去，秋天忙着把坚果一颗颗埋进土里。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "winter", caption: "冬天大树下的北松鼠", shoot: "冬天（11 月到第二年 2 月）在公园远远拍一只站在树下的松鼠的侧面：耳尖、背和大尾巴都在画面里。用长焦，不靠近、不投喂" },
      points: [
        { x: 0.515, y: 0.37, label: "耳尖一簇竖起的毛", detail: "冬天耳朵尖上有一簇向上的长毛，远看像头发竖了起来。", cite: ["bjd-gjzwy", "adw-sv"] },
        { x: 0.6, y: 0.62, label: "灰黑色的毛", detail: "北京的多是灰褐、棕灰或黑色，不怎么红。夏天腿和身体两侧可能带点橙黄。", cite: ["bjd-gjzwy"] },
        { x: 0.77, y: 0.42, label: "毛茸茸的大尾巴", detail: "尾巴有 15～20 厘米长，蓬蓬松松的，几乎和身子一样长。", cite: ["wiki-zh", "adw-sv"] },
        { x: 0.9, y: 0.3, label: "离不开大树", detail: "它是住在树上的松鼠，多在高高的树冠里活动。下地找吃的，一有动静就往树上跑。", cite: ["bjd-gjzwy", "adw-sv"] },
      ],
    },
    {
      type: "compare",
      title: "冬毛和夏毛",
      before: { photo: "winter-coat", label: "冬天", caption: "冬毛：耳尖长出长长的毛簇", shoot: "冬天（12 月到第二年 2 月）远远拍树林里松鼠的侧面，看耳尖有没有长出毛簇" },
      after: { photo: "sitting", label: "夏天", caption: "夏毛：耳朵上没有长毛簇，身子两侧带橙色", shoot: "夏天（6～8 月）在同一片树林、同一个角度再拍一张，看耳朵和身子两侧的颜色" },
      text: "它一年换两次毛。冬毛更厚，耳尖长出长长的毛簇，脚底也盖上更多毛。不管换成什么颜色，肚皮都是白的。",
      cite: ["adw-sv", "bjd-gjzwy"],
    },
    {
      type: "steps",
      title: "它是怎么吃松果的",
      steps: [
        { photo: "step-tree", label: "摘松果", text: "它从树上咬下一个松果，用两只前爪抱住。", caption: "抱着松果的松鼠", shoot: "秋冬在松树林里远远拍抱着松果的松鼠，用长焦，不靠近" },
        { photo: "step-ground", label: "剥鳞片", text: "它坐下来，把松果的鳞片一片片咬掉，吃藏在鳞片里的松子。", caption: "在地上啃松果的松鼠", shoot: "远远拍正在啃松果的松鼠，看它怎么转松果" },
        { photo: "step-core", label: "剩个芯", text: "鳞片剥光了，只剩一根细细的松果芯，像啃完的小玉米棒。", caption: "被松鼠啃过的松果芯", shoot: "在松树下找找被啃过的松果芯，放在地上拍；看完放回原处" },
      ],
      cite: ["miyaki-1987", "moller-1986"],
    },
    {
      type: "magnifier",
      title: "凑近看松鼠的「饭桌」",
      shot: { photo: "cone", caption: "石头上一堆被剥下的鳞片和松果芯", shoot: "松树林里的石头或树桩上，如果看到一堆剥下来的鳞片，从斜上方拍一张，鳞片和果芯都要清楚；只拍不扫" },
      text: "石头上铺满了一片片剥下来的鳞片，中间躺着几根啃光的果芯（这里是云杉的球果）。在林子里看到这样一堆，就抬头找找树上的松鼠吧。",
      zoom: 2.5,
      start: [0.61, 0.45],
      cite: ["miyaki-1987", "moller-1986"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 9、10 月拍到它最多，1、2 月最少。它不冬眠，冬天也能见到。我们是哪个月遇见它的？",
      cite: ["adw-sv"],
    },
    {
      type: "lookalike",
      title: "公园里的四种松鼠",
      quiz: true,
      items: [
        {
          name: "岩松鼠", scientific: "Sciurotamias davidianus",
          shot: { photo: "look-ys", caption: "岩松鼠" },
          tells: ["耳朵上没有长毛簇", "眼睛周围有一圈浅白色的眼圈", "多半在地上和石头上跑"],
        },
        {
          name: "欧亚红松鼠", scientific: "Sciurus vulgaris", self: true,
          shot: { photo: "look-sv", caption: "欧亚红松鼠" },
          tells: ["冬天耳尖有一簇竖起的毛", "肚皮是白色的", "多半在高高的树上"],
        },
        {
          name: "花鼠", scientific: "Tamias sibiricus",
          shot: { photo: "look-hs", caption: "花鼠" },
          tells: ["个子比岩松鼠还小", "橙黄色，脸上和背上有深浅不一的条纹"],
        },
        {
          name: "赤腹松鼠", scientific: "Callosciurus erythraeus",
          shot: { photo: "look-cf", caption: "赤腹松鼠" },
          tells: ["肚皮是棕红色或浅黄色，不是白色", "耳朵上没有毛簇", "老家在南方，被人放生后才来到北京"],
        },
      ],
      cite: ["bjd-gjzwy", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "松鼠冬天要冬眠吗？", a: "欧亚红松鼠不冬眠。天气特别坏的时候，它会在窝里待上几天，天好了再出来找吃的。", cite: ["adw-sv"] },
        { q: "埋起来的坚果，它都能找回来吗？", a: "找不全。一只松鼠一年能挖几百个浅洞藏吃的，靠记性只能找回四成到八成。", cite: ["bjd-gjzwy"] },
        { q: "忘掉的种子会怎么样？", a: "有的会发芽，长成小树。一只松鼠一辈子能种下 100～300 棵小树苗。", cite: ["bjd-gjzwy", "adw-sv"] },
        { q: "松鼠能把种子带多远？", a: "科学家在一片红松林里看到，松鼠一个小坑平均埋 3 颗多松子。有的红松小苗长在离妈妈树 600 米远的地方。", cite: ["miyaki-1987"] },
        { q: "红松鼠一定是红色的吗？", a: "不一定。它的毛色从浅红到黑色都有。北京常见的多是灰褐、棕灰或黑色的。", cite: ["adw-sv", "bjd-gjzwy"] },
        { q: "刚出生的小松鼠什么样？", a: "身上光溜溜没有毛，眼睛也看不见。大约 30 天才睁开眼，45 天后第一次自己出窝。", cite: ["adw-sv"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。它的牙齿很锋利，别把手伸过去。",
  nextTime: "秋天远远看一只松鼠埋东西：它埋在哪儿？埋完会盖上落叶吗？",
  sources: [
    { id: "adw-sv", title: "Sciurus vulgaris (Eurasian red squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Sciurus_vulgaris/" },
    { id: "bjd-gjzwy", title: "在国家植物园邂逅松鼠", by: "国家植物园（北京日报客户端·北京号）", url: "https://xinwen.bjd.com.cn/content/s68fc35c2d5de24ab683d0de6.html" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
    { id: "miyaki-1987", title: "Seed dispersal of the Korean pine, Pinus koraiensis, by the red squirrel, Sciurus vulgaris", by: "Ecological Research, 1987", url: "https://doi.org/10.1007/BF02346923" },
    { id: "moller-1986", title: "Red squirrels (Sciurus vulgaris) feeding in a Scots pine plantation in Scotland", by: "Journal of Zoology, 1986", url: "https://doi.org/10.1111/j.1469-7998.1986.tb03566.x" },
    { id: "wiki-zh", title: "欧亚红松鼠", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%AD%90%E4%BA%9E%E7%B4%85%E6%9D%BE%E9%BC%A0" },
  ],
  by: ["kid", "dad"],
};

export default entry;
