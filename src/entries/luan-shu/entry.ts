import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "luan-shu",
  name: "栾树",
  scientific: "Koelreuteria paniculata",
  kind: "plant",
  // 复羽叶栾树很像：拍到叶子（一回还是二回羽状）和果子顶端（尖还是圆）再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "无患子科", "栾属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵栾树", shoot: "我们遇见的那一棵：整棵树拍进去，6～8 月满树黄花或秋天挂满果子时最好认" },
  hello: "夏天满树小黄花，秋天挂满三片薄皮围成的「小灯笼」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "branch-fruit", caption: "叶子和一串果子", shoot: "9～10 月拍一根低处的枝条：左边一整片大叶子，右边一串「小灯笼」，都要看得清" },
      points: [
        { x: 0.3, y: 0.35, label: "一片大叶子像羽毛", detail: "一片叶子最长能到 50 厘米，上面排着很多小叶，常有 11～18 片。", cite: ["foc-luan"] },
        { x: 0.18, y: 0.6, label: "小叶边上有粗齿", detail: "小叶边上是不整齐的圆钝锯齿，有的地方裂得更深。", cite: ["foc-luan"] },
        { x: 0.7, y: 0.45, label: "三条棱的小灯笼", detail: "果子是圆锥形的，长 4～6 厘米，有三条棱，顶端尖尖的。", cite: ["foc-luan"] },
        { x: 0.75, y: 0.7, label: "果皮薄得像纸", detail: "果皮像一层薄膜，上面有网一样的纹路，整个果子鼓鼓的。", cite: ["foc-koel", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一朵小黄花",
      shot: { photo: "flower-macro", caption: "一小簇栾树花", shoot: "6～8 月，凑近拍一小簇花：看清向后翻的花瓣和花中间橙红色的一点" },
      text: "每朵小花有 4 片花瓣，开花时向后翻。花瓣底下有小鳞片，先是黄色，开花时变成橙红色。",
      zoom: 2.5,
      start: [0.5, 0.5],
      cite: ["foc-luan"],
    },
    {
      type: "compare",
      title: "同一串果子，变颜色了",
      before: { photo: "same-green", label: "夏末", caption: "绿色的小灯笼", shoot: "果子刚长出来时，选一串好找的低处果子，记住站的位置拍一张" },
      after: { photo: "same-orange", label: "秋天", caption: "变色的小灯笼", shoot: "过几周回到同一个位置、同一个角度，再拍一张" },
      text: "小灯笼先是绿色的，到了秋天慢慢变成橙色、粉红色。拍的时候记下日期，算算隔了几天。",
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 7、8 月拍到它最多；标注开花的集中在 6～8 月。冬天也有人拍到树上挂着果子。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "栾树的英文名叫什么？", a: "叫 goldenrain tree，意思是「金雨树」。夏天它开出一大串一大串的小黄花，一串能有 25～40 厘米长。", cite: ["wiki-en", "foc-luan"] },
        { q: "小灯笼里装着什么？", a: "果子里分成 3 个小格，每格有一颗圆圆的黑色种子，直径 6～8 毫米。", cite: ["foc-koel", "foc-luan"] },
        { q: "栾树的老家在哪儿？", a: "在中国和朝鲜半岛。1747 年它被带到欧洲，后来又到了北美洲，现在世界各地都有人种它。", cite: ["wiki-en"] },
        { q: "秋天它的叶子变成什么颜色？", a: "会变黄。北京秋天变黄的树里，除了银杏，还有栾树、洋白蜡、白桦。", cite: ["bj-qiuye"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条。落下的小灯笼可以捡起来看，但别放进嘴里，路边的树可能打过药。",
  nextTime: "小黄花谢的时候，树下会铺上一层黄色吗？夏天去树下看看。",
  sources: [
    { id: "foc-luan", title: "Koelreuteria paniculata 栾树", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200013201" },
    { id: "foc-koel", title: "Koelreuteria 栾树属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=117200" },
    { id: "wiki-en", title: "Koelreuteria paniculata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Koelreuteria_paniculata" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
