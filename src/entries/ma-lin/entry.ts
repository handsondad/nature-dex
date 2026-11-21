import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 将马蔺（Iris lactea var. chinensis）合并在接受种名 Iris lactea（Flora of China 正名白花马蔺）下。
const entry: Entry = {
  id: "ma-lin",
  name: "马蔺",
  scientific: "Iris lactea",
  kind: "plant",
  // 不开花时易与麦冬等细叶地被混淆，看到浅蓝紫色鸢尾花或 6 棱带喙长蒴果即可确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "百合纲", "天门冬目", "鸢尾科", "鸢尾属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "草坡上开满蓝紫色花的马蔺",
    shoot: "4～5 月在公园林下或路边拍一整丛开着蓝紫色花的马蔺，灰绿细长叶丛也拍进去",
  },
  hello: "路边一丛灰绿的细长叶，春末冒出一朵朵蓝紫色的花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-leaf",
        caption: "一大丛正在开花的马蔺",
        shoot: "蹲下来平视拍一丛正在开花的马蔺：蓝紫花朵和细扁灰绿的叶片都清楚",
      },
      points: [
        { x: 0.8, y: 0.61, label: "外面 3 片往下垂", detail: "花被片分两轮。外轮 3 片向外展开、往下垂，长 4.5～6.5 厘米，上面有深色条纹。", cite: ["foc-ml", "cas-ml", "bj-ml"] },
        { x: 0.57, y: 0.43, label: "里面 3 片立着", detail: "内轮 3 片窄一些，直直地立着，长 4.2～4.5 厘米。整朵花直径 5～7.5 厘米。", cite: ["foc-ml"] },
        { x: 0.15, y: 0.8, label: "又窄又韧的叶", detail: "叶子都从根部长出来，灰绿色，宽只有 3～7 毫米，很坚韧，没有中脉。", cite: ["foc-ml"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花心",
      shot: {
        photo: "flower-macro",
        caption: "一朵马蔺花",
        shoot: "凑近拍一朵盛开的马蔺花中心，看清花被片的条纹和花心扁平的花柱",
      },
      text: "花心那 3 片扁扁的蓝色小片，其实是雌蕊的花柱，长得像花瓣，顶端分成两裂。雄蕊就贴在花柱外侧，花药是黄色的。",
      zoom: 2.5,
      start: [0.5, 0.48],
      cite: ["cas-ml", "foc-ml"],
    },
    {
      type: "steps",
      title: "花谢以后",
      steps: [
        { photo: "step-fruit", label: "结果", text: "花谢以后，叶丛里立起一个个绿色的蒴果。果期 6～9 月。", caption: "叶丛里的绿色蒴果", shoot: "6～7 月回到同一丛，拍叶丛里的绿色果子" },
        { photo: "step-split", label: "裂开", text: "蒴果熟了会从侧面裂开，露出里面挤在一起的种子。种子红褐色，形状像小梨。", caption: "裂开的蒴果", shoot: "夏末凑近拍裂开的果子，看看种子" },
        { photo: "step-dry", label: "干壳", text: "果壳干透变白，6 条纵棱和顶端的小尖嘴看得清清楚楚。它长 6.5～7.5 厘米。", caption: "干透的果壳", shoot: "秋天拍一个干透的果壳，旁边放把尺子" },
      ],
      cite: ["foc-ml"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 5、6 月拍到它最多，那时正开花。花期 4～6 月，果期 6～9 月。我们是哪个月遇见它的？",
      cite: ["foc-ml"],
    },
    {
      type: "lookalike",
      title: "细长叶子的亲戚，别认错",
      quiz: true,
      items: [
        {
          name: "鸢尾", scientific: "Iris tectorum",
          shot: { photo: "look-yw", caption: "鸢尾" },
          tells: ["叶子宽得多，1.5～3.5 厘米，像一把把剑", "花更大，直径约 10 厘米", "外轮花被片上有一道白色鸡冠状突起"],
        },
        {
          name: "马蔺", scientific: "Iris lactea", self: true,
          shot: { photo: "look-ml", caption: "马蔺" },
          tells: ["叶子灰绿、窄，只有 3～7 毫米", "花浅蓝紫色，直径 5～7.5 厘米", "长在山坡、草地和路边"],
        },
        {
          name: "麦冬", scientific: "Ophiopogon japonicus",
          shot: { photo: "look-md", caption: "麦冬" },
          tells: ["叶子更细，2～4 毫米，边上有细锯齿", "花很小，白色或淡紫色，常低着头", "种子圆球形，7～8 毫米"],
        },
      ],
      cite: ["foc-yw", "foc-ml", "foc-md"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "捆粽子的“绳子”是什么？", a: "北方包粽子常用芦苇叶，捆粽子的“绳子”就是马蔺叶。现在也有人改用棉绳、麻绳。", cite: ["cas-duanwu", "bj-ml"] },
        { q: "它为什么又叫“旱蒲”？", a: "它的样子像蒲草，却小一些，又长在旱地上，所以叫“旱蒲”。青藏高原的沙滩上，它也能长得好好的。", cite: ["bj-ml"] },
        { q: "公园里为什么爱种它？", a: "它耐盐碱、耐踩，根系发达，能护住泥土。昌平的贺新公园就把它当作主要的地被植物之一。", cite: ["cas-duanwu", "bj-hexin"] },
        { q: "它的根能做什么？", a: "根里的木质部又韧又细长，可以做刷子；叶子还能拿来造纸和编东西。", cite: ["cas-duanwu"] },
        { q: "马蔺的花都是蓝紫色吗？", a: "多是浅蓝紫色，也有外轮花被片乳白带紫纹的。还有一个变种叫黄花马蔺，里面那 3 片是黄色的。", cite: ["foc-ml"] },
      ],
    },
  ],
  care: "只看、拍照，不揪叶子、不拔草丛。它的根、花和种子能入药，但千万别自己尝。",
  nextTime: "夏秋再路过马蔺丛，低头找一找：有没有带 6 条棱和小尖嘴的果子？",
  sources: [
    { id: "foc-ml", title: "Iris lactea 白花马蔺", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200028182" },
    { id: "foc-yw", title: "Iris tectorum 鸢尾", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Iris%20tectorum?t=foc" },
    { id: "foc-md", title: "Ophiopogon japonicus 麦冬", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Ophiopogon%20japonicus?t=foc" },
    { id: "bj-hexin", title: "贺新公园植物配置分析与提升建议", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml" },
    { id: "bj-ml", title: "2018年第14期花主——常见露地宿根花卉（二）：马蔺", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/bzhz/201807/t20180718_759336.shtml" },
    { id: "cas-duanwu", title: "又是一年端午时", by: "中国科学院植物研究所", url: "http://www.ib.cas.cn/2019gb/kepu/yuandi/201606/t20160624_4627666.html" },
    { id: "cas-ml", title: "马蔺（Iris lactea var. chinensis）", by: "中国科学院西北高原生物研究所", url: "https://nwipb.cas.cn/zy/zyc/202204/t20220408_6441240.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
