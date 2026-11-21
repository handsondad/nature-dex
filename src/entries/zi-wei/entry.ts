import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 现代分类（APG / GBIF）将石榴属并入 Lythraceae，中文正式科名为千屈菜科（iNaturalist 中文库译作石榴科）。
const entry: Entry = {
  id: "zi-wei",
  name: "紫薇",
  scientific: "Lagerstroemia indica",
  kind: "plant",
  // 园林里还有矮生紫薇及杂交品种，看清6片皱边有长爪的花瓣、四棱小枝和光滑脱皮树干即可确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "桃金娘目", "千屈菜科", "紫薇属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "盛夏枝头开成一大团的紫薇花",
    shoot: "7～8 月在公园拍一整丛或一整枝开满皱纱花朵的紫薇，把光滑树干也拍进去更好",
  },
  hello: "夏天少花的时候它一开就是一百天，每片花瓣都像揉皱的彩纱。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-branch",
        caption: "圆珠一样的花苞、皱边的花和叶子",
        shoot: "夏天靠近低枝拍一串紫薇花序：盛开的 6 瓣皱边花、圆球花苞和小枝上的叶片同框",
      },
      points: [
        { x: 0.33, y: 0.47, label: "6 片皱皱的花瓣", detail: "每朵花 6 片花瓣，边缘皱皱的，像揉过的纱；有紫、红、粉、白几种颜色。", cite: ["foc-zw", "frps-zw"] },
        { x: 0.762, y: 0.495, label: "一圈金黄的雄蕊", detail: "花心有 36～42 根雄蕊，外圈 6 根比其余的长得多。", cite: ["foc-zw", "frps-zw"] },
        { x: 0.655, y: 0.5, label: "圆珠一样的花苞", detail: "没开的花苞像一颗颗绿色小圆珠，挤成一大串，花序有 7～20 厘米长。", cite: ["foc-zw", "frps-zw"] },
        { x: 0.71, y: 0.17, label: "几乎没有柄的叶子", detail: "叶子椭圆形或倒卵形，2.5～7 厘米长，叶柄很短，或者干脆没有。", cite: ["foc-zw", "frps-zw"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花瓣的「爪」",
      shot: {
        photo: "petal-macro",
        caption: "一朵紫薇花：细长的花爪和中间的花蕊",
        shoot: "正对一朵盛开的紫薇花拍微距，看清每片花瓣底下细长的花爪和中间的花蕊",
      },
      text: "6 片皱花瓣并不直接贴在花心上，每片底下都举着一根细长的柄，叫「爪」，有 6～9 毫米长。整片花瓣连爪一起 1.2～2 厘米。",
      zoom: 2.5,
      start: [0.42, 0.42],
      cite: ["foc-zw", "frps-zw"],
    },
    {
      type: "steps",
      title: "从一团花到紫黑色的果子",
      steps: [
        { photo: "cover", caption: "枝头开成一大团", label: "开花", text: "6～9 月，枝头的花一朵接一朵往上开，一大团能开很久。" },
        { photo: "step-fruit", caption: "花谢后留下圆圆的绿果子", shoot: "9 月回去拍同一枝：花谢了，留下一颗颗圆果子", label: "结果", text: "花谢以后，留下椭圆形的果子（蒴果），1～1.3 厘米长，底下还托着花萼。" },
        { photo: "step-open", caption: "秋冬变成紫黑色的果子", shoot: "秋冬再去拍：果子变黑、裂开", label: "裂开", text: "果子熟了变成紫黑色，从背上裂成 4～6 瓣，放出带翅膀的种子，连翅膀约 8 毫米。" },
      ],
      cite: ["foc-zw", "frps-zw", "bj-tiantan"],
    },
    {
      type: "lookalike",
      title: "同科亲戚比一比：紫薇和千屈菜",
      quiz: true,
      items: [
        {
          name: "千屈菜",
          scientific: "Lythrum salicaria",
          shot: { photo: "look-qqc", caption: "开紫红小花的千屈菜" },
          tells: ["是草，不是树，高 0.3～1.5 米，常长在湿草地和河岸边", "紫红色小花挤成一根长长的花穗，15～35 厘米", "花瓣窄长，只有 1 厘米左右，没有长爪"],
        },
        {
          name: "紫薇",
          scientific: "Lagerstroemia indica",
          self: true,
          shot: { photo: "look-zw", caption: "紫薇" },
          tells: ["是灌木或小树，能长到 7 米高", "花瓣皱皱的，底下有一根细长的爪", "花聚成一大团圆锥形"],
        },
      ],
      cite: ["foc-qqc", "foc-zw"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 6～9 月拍到它最多。植物志上说它 6～9 月开花、9～12 月结果；北京天坛的紫薇能从 6 月开到 10 月。我们是哪个月遇见它的？",
      cite: ["frps-zw", "bj-tiantan"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么有人叫它「痒痒树」？", a: "轻轻摸它光光的树干，树梢就会晃起来，像怕痒。为什么会这样？有好几种说法，现在还没有定论。", cite: ["cas-zw", "frps-zw"] },
        { q: "它的树干为什么光溜溜的？", a: "年轻的紫薇年年长出新树皮，又年年自己脱掉；老树的树皮都脱光了，所以它还叫「无皮树」。", cite: ["cas-zw", "frps-zw"] },
        { q: "为什么又叫「百日红」？", a: "它的花一朵接一朵往上开，在北京天坛能从 6 月开到 10 月，加起来差不多一百天。", cite: ["bj-tiantan", "frps-zw"] },
        { q: "石榴是它的亲戚？", a: "是的。科学家比较了基因，发现石榴、菱角和紫薇都是千屈菜科的一家人。", cite: ["foc-lyth"] },
        { q: "紫薇能活多久？", a: "它寿命很长，有的能活到 200 岁。可它怕冷，北京冬天低于零下 5℃ 就可能被冻伤。", cite: ["frps-zw", "bj-tiantan"] },
        { q: "北京哪儿能看到它？", a: "很多公园都种。比如贺新公园，夏天开花的灌木里就有红花紫薇；天坛公园也有。", cite: ["bj-hexin", "bj-tiantan"] },
      ],
    },
  ],
  care: "只看、拍照，不折花枝。想试试「痒痒树」，用指尖轻轻摸一下树干就好，不摇、不抠树皮。",
  nextTime: "数一数：一朵花是不是 6 片带「爪」的皱花瓣？秋天再去看看紫黑色的果子裂开没有。",
  sources: [
    { id: "foc-zw", title: "Lagerstroemia indica 紫薇", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014643" },
    { id: "frps-zw", title: "紫薇 Lagerstroemia indica（中国植物志 第 52(2) 卷）", by: "中国植物志 · 植物智", url: "https://www.iplant.cn/info/Lagerstroemia%20indica?t=z" },
    { id: "foc-lyth", title: "Lythraceae 千屈菜科", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10529" },
    { id: "foc-qqc", title: "Lythrum salicaria 千屈菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014658" },
    { id: "bj-tiantan", title: "天坛公园植物科普｜紫薇", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/xxgk/xxgk_ywdt/202501/t20250106_3981076.html" },
    { id: "bj-hexin", title: "贺新公园植物配置分析与提升建议", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml" },
    { id: "cas-zw", title: "“怕痒痒”的树——紫薇", by: "中国科学院武汉植物园", url: "https://wbg.cas.cn/KPPJ/zrjy/hbsjt/201309/t20130917_3932636.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
