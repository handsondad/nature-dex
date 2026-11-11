import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bang-luo-xin-fu",
  name: "棒络新妇",
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
      shot: { photo: "female-web", caption: "网中间的雌蛛", shoot: "网中间的雌蛛，从正面拍，长腿和整个肚子都在画面里；网上要是还有小个子的雄蛛，也拍进去" },
      points: [
        { x: 0.5, y: 0.45, label: "黄肚子上的蓝绿横带", detail: "成熟雌蛛的肚子长长的，是亮黄色的，背上有宽宽的蓝绿色横带。", cite: ["uga-joro"] },
        { x: 0.5, y: 0.7, label: "肚子后端的红斑", detail: "肚子靠后的地方和肚子底下，有大块的红色斑。", cite: ["uga-joro", "wiki-en"] },
        { x: 0.22, y: 0.3, label: "黑黄相间的长腿", detail: "八条腿又细又长，是黑色的，上面有一圈圈黄橙色的环。", cite: ["uga-joro"] },
        { x: 0.78, y: 0.18, label: "网上的小个子", detail: "网上常住着一只或几只小个子的雄蛛，浅褐色，不仔细找很容易漏掉。", cite: ["uga-joro", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看金色的网",
      shot: { photo: "web-gold", caption: "阳光下的一张网", shoot: "晴天侧光或逆光拍一整张网，背景暗一点，网丝要清楚；人站在网外，不碰网" },
      text: "阳光照过来，网上黄色的丝闪着金光。仔细看，中间的大圆网前面和后面，还各有一层乱乱的细丝。",
      start: [0.5, 0.5],
      cite: ["uga-joro", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 8 月到 10 月常拍到它，9、10 月最多；3 月到 5 月几乎没有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "雌蛛和雄蛛差多大？", a: "雌蛛身体 17～30 毫米长，雄蛛只有 4～8 毫米。称一称，雌蛛最多能比雄蛛重 500 倍。", cite: ["uga-joro"] },
        { q: "一张网上住着几只蜘蛛？", a: "雄蛛自己不织网，住在雌蛛的网上。科学家在一张网上最多数到过 10 只雄蛛。", cite: ["uga-joro", "wiki-en"] },
        { q: "蜘蛛是昆虫吗？", a: "不是。蜘蛛有 8 条腿，身体分成两段；昆虫有 6 条腿，身体分成三段。", cite: ["wiki-spider", "wiki-insect"] },
        { q: "冬天它们去哪儿了？", a: "秋天，雌蛛在树皮、叶子或墙上做一个白色的卵囊，里面有几百粒卵。卵在囊里过冬，春天孵出小蜘蛛。", cite: ["uga-joro", "wiki-en"] },
        { q: "小蜘蛛怎么搬家？", a: "小蜘蛛放出细丝，风一吹，丝就带着它飘走，能飘很远很远。", cite: ["uga-joro", "wiki-ja"] },
      ],
    },
  ],
  care: "只看不碰，不弄破网；路上有网就绕开走，不用棍子去挑。",
  nextTime: "下次经过同一张网看看：网破了的地方，过两天会被补好吗？",
  sources: [
    { id: "uga-joro", title: "Joro Spider: Trichonephila clavata (Circular 1273)", by: "University of Georgia Extension", url: "https://fieldreport.caes.uga.edu/publications/C1273/joro-spider-trichonephila-clavata/" },
    { id: "wiki-en", title: "Trichonephila clavata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trichonephila_clavata" },
    { id: "wiki-ja", title: "ジョロウグモ", by: "Wikipedia（日文）", url: "https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%83%AD%E3%82%A6%E3%82%B0%E3%83%A2" },
    { id: "wiki-spider", title: "Spider", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Spider" },
    { id: "wiki-insect", title: "Insect", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Insect" },
  ],
  by: ["kid", "dad"],
};

export default entry;
