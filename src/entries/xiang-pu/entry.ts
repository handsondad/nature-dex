import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "xiang-pu",
  name: "香蒲",
  scientific: "Typha orientalis",
  kind: "plant",
  // FOC 中文名东方香蒲；北京水边还有水烛（狭叶香蒲）等：拍到雌雄花序是否相连再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "百合纲", "禾本目", "香蒲科", "香蒲属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛香蒲", shoot: "水边我们遇见的那一丛：长叶子和棕色圆柱穗都拍进去" },
  hello: "水边竖着一根根棕色的“热狗”，风一吹叶子沙沙响。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "spike", caption: "秋天的香蒲穗", shoot: "靠近拍一根完整的花穗：棕色圆柱和上方的雄花部分都要看得见" },
      points: [
        { x: 0.67, y: 0.31, label: "棕色的圆柱", detail: "这一段是雌花序，圆柱形，长大约 4.5～15 厘米，密密地挤满了小雌花。", cite: ["foc-xp", "foc-typha"] },
        { x: 0.665, y: 0.2, label: "顶上一截细轴", detail: "雄花序长在雌花序上面，长 2.7～9 厘米。这根穗开完了花，只剩一截细细的轴。", cite: ["foc-xp"] },
        { x: 0.8, y: 0.4, label: "上下连在一起", detail: "香蒲的雄花序和雌花序紧挨着，中间没有空出一段光秆。", cite: ["foc-xp"] },
        { x: 0.06, y: 0.6, label: "又长又窄的叶", detail: "叶子长 40～70 厘米，宽只有 4～9 毫米，像一根根长带子，基部包着秆。", cite: ["foc-xp", "foc-typha"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看雄花",
      shot: { photo: "spike-macro", caption: "正在开花的穗：上段撒着黄色花粉", shoot: "初夏凑近拍刚开花的穗，看上面那截有没有黄粉" },
      text: "上半截是雄花，每朵只有 1～3 枚雄蕊，围着细毛，没有花瓣。黄色的粉就是花粉，下面的雌花序也沾上了一层。",
      zoom: 2.5,
      start: [0.5, 0.3],
      cite: ["foc-typha"],
    },
    {
      type: "steps",
      title: "从长叶到飘絮",
      steps: [
        { photo: "step-shoot", label: "长叶", text: "春天，新叶从泥里横着长的根状茎上冒出来，扁扁长长，一片抱着一片。", caption: "刚长出新叶的小苗", shoot: "春天去同一片水边，拍刚冒出来的新叶" },
        { photo: "step-bloom", label: "开花", text: "初夏，秆顶抽出花穗：上面的雄花开过后变成褐色，下面的雌花序正在长成圆柱。", caption: "开过花的雄花序和下面的雌花序", shoot: "初夏凑近拍刚抽出的花穗，上下两段都拍进去" },
        { photo: "step-fluff", label: "飘絮", text: "秋冬，棕色的穗慢慢松开。很小的果实连着带细毛的小柄一起脱落，蓬成一团团棉絮。", caption: "裂开、冒出棉絮的穗", shoot: "秋冬回到同一片，拍裂开冒絮的穗" },
      ],
      cite: ["foc-typha", "foc-xp"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国被记下来的香蒲还不多，夏天 6～9 月稍多一些。花果期大约 5～8 月。我们是哪个月遇见它的？",
      cite: ["foc-xp"],
    },
    {
      type: "lookalike",
      title: "水边高草，别认错",
      quiz: true,
      items: [
        {
          name: "水烛", scientific: "Typha angustifolia",
          shot: { photo: "look-sz", caption: "水烛" },
          tells: ["雄花序和雌花序之间隔开 2.5～7 厘米", "叶子更长，52～120 厘米", "秆 1.5～3 米高"],
        },
        {
          name: "香蒲", scientific: "Typha orientalis", self: true,
          shot: { photo: "look-xp", caption: "香蒲" },
          tells: ["雌雄花序连在一起，没有空隙", "雌花序 4.5～15 厘米长", "叶子 40～70 厘米长"],
        },
        {
          name: "芦苇", scientific: "Phragmites australis",
          shot: { photo: "look-lu-wei", caption: "芦苇" },
          tells: ["顶上是羽毛一样、松松的大穗", "秆是一节一节的", "属于禾本科"],
        },
      ],
      cite: ["foc-sz", "foc-xp", "foc-lw"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "上面和下面都是花吗？", a: "是的。上面一段是雄花，下面一段是雌花，又小又密地挤在一根穗上，都没有花瓣。", cite: ["foc-typha"] },
        { q: "冬天的“棉絮”是什么？", a: "每朵雌花都长在细长的小柄上，柄上有很多细毛。果实很小，连着带毛的小柄一起脱落，就成了絮。", cite: ["foc-typha"] },
        { q: "香蒲有几种？", a: "全世界大约 16 种，中国有 12 种。水烛、宽叶香蒲都是它的亲戚。", cite: ["foc-typha"] },
        { q: "和宽叶香蒲怎么分？", a: "香蒲的柱头像小勺子（匙形），雌花柄上的毛和花柱差不多长；宽叶香蒲的柱头像披针，毛比花柱短。", cite: ["foc-typha"] },
        { q: "它能帮忙让水变干净吗？", a: "人们常在人工湿地里种它的亲戚宽叶香蒲，用来处理污水。从前，香蒲还被拿来当食物和盖房子的材料。", cite: ["zymela-2025"] },
        { q: "北京哪儿能看到它？", a: "顺义的汉石桥湿地有大片芦苇沼泽，那里把芦苇、香蒲当作湿地植物介绍给来参观的人。", cite: ["bj-hsq"] },
      ],
    },
  ],
  care: "只看、拍照，不折叶子和花穗。水边要和大人一起、不下水，脚下要站稳。",
  nextTime: "找一找：棕色圆柱上面，是紧连着一截细细的雄花序，还是中间空了一段？",
  sources: [
    { id: "foc-xp", title: "Typha orientalis 东方香蒲", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200024681" },
    { id: "foc-typha", title: "Typha 香蒲属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=134063" },
    { id: "foc-sz", title: "Typha angustifolia 水烛", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Typha%20angustifolia?t=foc" },
    { id: "foc-lw", title: "Phragmites australis 芦苇", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242337323" },
    { id: "zymela-2025", title: "Optimized Method for Cultivation and Microbial Bioaugmentation of Typha latifolia (Cattail)", by: "Zymela & Muench, JoVE (2025)", url: "https://doi.org/10.3791/67729" },
    { id: "bj-hsq", title: "“京东大芦荡”鸟类住户持续增长，志愿者长期守护", by: "北京市水务局（转北京日报）", url: "https://swj.beijing.gov.cn/swdt/ztzl/sstxczl/sstzx/202606/t20260623_4712072.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
