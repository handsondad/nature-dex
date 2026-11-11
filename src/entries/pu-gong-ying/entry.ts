import type { Entry } from "../../entry/types.ts";

// 示例篇：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "pu-gong-ying",
  name: "蒲公英",
  scientific: "Taraxacum mongolicum",
  kind: "plant",
  // 城市里也常见西洋蒲公英，拍到外层总苞片再确认是哪一种
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "菊目", "菊科", "蒲公英属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵蒲公英", shoot: "我们遇见的那一棵：黄花、花茎和贴地的叶子都拍进去" },
  hello: "黄色的小太阳过一两周会变成白绒球，每把小伞都带着一颗种子去旅行。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一整棵蒲公英", shoot: "从斜上方拍一整棵：贴地的叶子、花茎和花头都在画面里" },
      points: [
        { x: 0.5, y: 0.78, label: "叶子贴地围成一圈", detail: "叶子都从根上长出来，平铺在地面上，像一个绿色的盘子。", cite: ["foc-taraxacum"] },
        { x: 0.2, y: 0.62, label: "叶边有尖尖的裂片", detail: "叶子两边裂成一个个三角形，像狮子的牙齿。", cite: ["foc-pgy", "wiki-zh"] },
        { x: 0.52, y: 0.42, label: "花茎光溜溜", detail: "花茎上没有叶子、不分叉，里面是空心的，一根只顶一个花头。", cite: ["foc-taraxacum"] },
        { x: 0.52, y: 0.14, label: "黄色的花头", detail: "宽 3～4 厘米，比一元硬币还大一圈。", cite: ["foc-pgy"] },
      ],
    },
    {
      type: "steps",
      title: "从黄花到小伞",
      steps: [
        { photo: "step-bud", label: "花苞", text: "绿色的苞片把小花包得紧紧的。", caption: "还没开的花苞", shoot: "还没开的花苞，靠近拍" },
        { photo: "step-bloom", label: "开花", text: "太阳出来，黄色的花头张开了。仔细看，每一片“花瓣”都是一朵小花。", caption: "开得正好的花头", shoot: "晴天上午开得最大的一朵，从正上方拍" },
        { photo: "step-closed", label: "合起来", text: "花谢以后，花头又合拢，种子在里面慢慢长大。", caption: "合拢的花头", shoot: "花谢后合拢、像个小拳头的花头" },
        { photo: "step-ball", label: "白绒球", text: "过一两周，花头重新打开，变成圆圆的白绒球，外面的苞片向后翻。", caption: "圆圆的白绒球", shoot: "完整的白绒球，背景深一点更清楚" },
        { photo: "step-gone", label: "飞走了", text: "风一吹，小伞带着种子飞走，只剩下光光的花托。", caption: "种子飞走以后", shoot: "小伞飞走后剩下的光秃秃的花托" },
      ],
      cite: ["wiki-en", "foc-taraxacum"],
    },
    {
      type: "compare",
      title: "同一棵，不同的日子",
      before: { photo: "same-yellow", label: "黄花", caption: "第一次看到时", shoot: "选一棵好找的蒲公英，记住位置，先拍它开黄花的样子" },
      after: { photo: "same-white", label: "白绒球", caption: "过几天再去", shoot: "过几天回到同一个位置、同一个角度，再拍一张" },
      text: "黄花和白绒球是同一棵蒲公英不同时候的样子。拍的时候记下日期，算算隔了几天。",
      cite: ["wiki-en"],
    },
    {
      type: "magnifier",
      title: "凑近看一把小伞",
      shot: { photo: "seed-macro", caption: "白绒球的细节", shoot: "白绒球微距：能看清一把把小伞、伞柄和下面的种子" },
      text: "每把小伞都有一根细细的伞柄，下面挂着一颗棕色、表面有小疙瘩的种子。",
      cite: ["foc-pgy", "foc-taraxacum"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家最常在 3、4 月拍到它开花。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "黄色小花，别认错",
      quiz: true,
      items: [
        {
          name: "苦苣菜", scientific: "Sonchus oleraceus",
          shot: { photo: "look-kjc", caption: "苦苣菜" },
          tells: ["茎上长叶子，叶子基部像耳朵一样抱住茎", "一根茎分出几个枝，开好几朵花", "通常长得比蒲公英高很多"],
        },
        {
          name: "蒲公英", scientific: "Taraxacum mongolicum", self: true,
          shot: { photo: "look-pgy", caption: "蒲公英" },
          tells: ["一根光溜溜的花茎只顶一朵花", "叶子全贴在地上，花茎上没有叶子"],
        },
        {
          name: "黄鹌菜", scientific: "Youngia japonica",
          shot: { photo: "look-hac", caption: "黄鹌菜" },
          tells: ["花头比蒲公英小很多", "一根分叉的花茎上开一大串小花"],
        },
      ],
      cite: ["foc-pgy", "foc-kjc", "foc-hac"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "一朵蒲公英，真的是一朵花吗？", a: "不是哦！它是很多很多朵小花挤在一起的“花头”，每一片黄色的“花瓣”都是一朵小花。", cite: ["wiki-en", "foc-taraxacum"] },
        { q: "白绒球上的小伞是什么？", a: "每把小伞下面都挂着一颗种子。风一吹，种子就跟着小伞去旅行。", cite: ["foc-taraxacum"] },
        { q: "小伞为什么能飘那么远？", a: "科学家发现，风从小伞的绒毛缝里漏过去，会在伞上方形成一个稳稳的小旋涡，帮它飘得更久。", cite: ["cummins-2018"] },
        { q: "它的英文名为什么是“狮子牙”？", a: "Dandelion 来自法语 dent-de-lion，意思是“狮子的牙齿”，说的是它叶边尖尖的裂片。", cite: ["wiki-zh"] },
      ],
    },
  ],
  care: "只用眼睛看、用相机拍，不摘它。路边的植物可能打过药，不要放进嘴里。",
  nextTime: "下雨前后空气潮湿时，去看看白绒球上的小伞是不是收拢起来了？",
  sources: [
    { id: "foc-pgy", title: "Taraxacum mongolicum 蒲公英", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242351322" },
    { id: "foc-taraxacum", title: "Taraxacum 蒲公英属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=132314" },
    { id: "foc-kjc", title: "Sonchus oleraceus 苦苣菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200024557" },
    { id: "foc-hac", title: "Youngia japonica 黄鹌菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200024672" },
    { id: "cummins-2018", title: "A separated vortex ring underlies the flight of the dandelion", by: "Nature, 2018", url: "https://doi.org/10.1038/s41586-018-0604-2" },
    { id: "wiki-en", title: "Taraxacum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Taraxacum" },
    { id: "wiki-zh", title: "蒲公英", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%92%B2%E5%85%AC%E8%8B%B1" },
  ],
  by: ["kid", "dad"],
};

export default entry;
