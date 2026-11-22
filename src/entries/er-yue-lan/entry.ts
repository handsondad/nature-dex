import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "er-yue-lan",
  name: "二月兰",
  pinyin: "èr yuè lán",
  scientific: "Orychophragmus violaceus",
  kind: "plant",
  // 四瓣紫花、抱茎的上部叶和细长角果一起看就能确认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "十字花目", "十字花科", "诸葛菜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那片二月兰", shoot: "春天 3～4 月，我们遇见的那一片：紫色的花和一两枝细长的果子都拍进去" },
  hello: "四片紫色花瓣排成一个十字，春天在树下铺成一大片紫色。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一枝开花的二月兰", shoot: "春天从侧面拍一整枝：顶上的花和花苞、茎上抱着茎的叶子都在画面里" },
      points: [
        { x: 0.49, y: 0.36, label: "四片花瓣排成十字", detail: "4 片花瓣排成十字，有深紫、淡紫，也有白色的；每片约两厘米长。", cite: ["foc-eyl", "foc-brassicaceae"] },
        { x: 0.71, y: 0.32, label: "顶上一串花苞", detail: "花一朵接一朵开，茎顶上总挤着一串还没开的紫色花苞。", cite: ["frps-eyl"] },
        { x: 0.55, y: 0.58, label: "叶子抱住茎", detail: "茎上部的叶子，基部长着两只“小耳朵”，把茎抱在中间；边上有不整齐的齿。", cite: ["foc-eyl", "frps-eyl"] },
        { x: 0.27, y: 0.3, label: "宽宽的大叶子", detail: "下面的叶子顶上一片大大的，像心形或圆形，边上有粗齿，两边常挂几片小的。", cite: ["foc-eyl"] },
      ],
    },
    {
      type: "steps",
      title: "从一丛叶子到细长的果子",
      steps: [
        { photo: "flower-stem", caption: "还没开花的一丛叶子", shoot: "开花前去拍贴着地面的一丛叶子", label: "一丛叶子", text: "开花前，先长出一丛叶子：顶上一片又大又圆，下面挂几片小的。" },
        { photo: "step-bud", caption: "顶上一串紫色花苞", shoot: "春天拍一枝刚要开的：顶上的花苞和下面开了的花都在", label: "花苞", text: "茎顶上挤着一串细长的紫色花苞，下面的先开。" },
        { photo: "cover", caption: "开满了花", label: "开花", text: "花开了，直径 2～4 厘米。开久了，颜色会慢慢变淡，最后几乎变成白色。" },
        { photo: "step-pod", caption: "花下面挂着细长的果子", shoot: "5 月回去拍同一片：花下面一根根细长的果子", label: "长角果", text: "花谢后结出细长的果子（长角果），有 4 条棱，常有 7～10 厘米长，里面是 2 毫米左右的小黑种子。" },
      ],
      cite: ["foc-eyl", "frps-eyl", "bj-shzn"],
    },
    {
      type: "magnifier",
      title: "凑近数一数",
      shot: { photo: "flower-macro", caption: "正对着看一朵花", shoot: "正对一朵刚开的花拍特写：4 片花瓣和中间的雄蕊都清楚，背景简单" },
      text: "4 片花瓣中间，有 6 根雄蕊：4 根长、2 根短。它的亲戚们，花大多也是这样。",
      zoom: 3,
      start: [0.43, 0.32],
      cite: ["foc-brassicaceae"],
    },
    {
      type: "lookalike",
      title: "春天的紫色小花，别认错",
      quiz: true,
      items: [
        {
          name: "紫花地丁",
          scientific: "Viola philippica",
          shot: { photo: "look-zhdd", caption: "贴地一丛的紫花地丁" },
          tells: ["没有直立的茎，叶子全从根上长出来，围成一丛", "5 片花瓣，最下面那片后头拖着一根小“距”", "很矮，只有 4～14 厘米"],
        },
        {
          name: "二月兰",
          scientific: "Orychophragmus violaceus",
          self: true,
          shot: { photo: "step-bud", caption: "二月兰" },
          tells: ["4 片花瓣排成十字", "有直立的茎，上部叶子抱着茎", "花谢后结出细长的角果"],
        },
        {
          name: "鸢尾",
          scientific: "Iris tectorum",
          shot: { photo: "look-yw", caption: "叶子像宝剑的鸢尾" },
          tells: ["叶子又长又宽，像一把把宝剑，排成扇形", "花大得多，直径约 10 厘米，外面 3 片花瓣上有白色鸡冠一样的突起"],
        },
      ],
      cite: ["foc-zhdd", "foc-eyl", "foc-yw"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家最常在 3、4 月拍到它开花。北京的公园里，它大约 3 月底开到 4 月底，圆明园能开到 5 月下旬。我们是哪个月遇见它的？",
      cite: ["bj-shzn"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它为什么有好几个名字？", a: "植物志上的正式名字叫“诸葛菜”；北京人叫它“二月蓝”，也写成“二月兰”。它还叫“紫金菜”“菜子花”。", cite: ["frps-eyl"] },
        { q: "为什么叫十字花科？", a: "这一家的花，多是 4 片花瓣摆成一个“十”字，所以这一科以前的学名叫 Cruciferae，就是“十字”的意思。", cite: ["foc-brassicaceae"] },
        { q: "树底下为什么一大片都是它？", a: "它不怕树荫，种子落下就能自己长出新的一片。所以北京很多公园的树下，春天都铺成紫色的花毯。", cite: ["bj-shzn"] },
        { q: "它能吃吗？", a: "在中国，有人把它当蔬菜种，吃嫩茎叶；种子还能榨油。可是公园和路边的不能摘来吃。", cite: ["mbg-eyl", "frps-eyl"] },
        { q: "它是从哪里来的？", a: "它是中国本来就有的野花，朝鲜半岛也有。后来到了日本，在那里也长了起来。", cite: ["foc-eyl"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花、不挖。公园和路边的植物可能打过药，不要放进嘴里。",
  nextTime: "记住一朵刚开的花，隔几天再去看：它的颜色会不会变浅？",
  sources: [
    { id: "foc-eyl", title: "Orychophragmus violaceus 诸葛菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200009631" },
    { id: "frps-eyl", title: "诸葛菜 Orychophragmus violaceus（中国植物志 第 33 卷）", by: "中国植物志 · 植物智", url: "https://www.iplant.cn/info/Orychophragmus%20violaceus?t=z" },
    { id: "foc-brassicaceae", title: "Brassicaceae 十字花科", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10120" },
    { id: "bj-shzn", title: "花开北京 · 赏花指南：二月兰", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/jcyyshj/shzn/202603/t20260324_4564593.shtml" },
    { id: "mbg-eyl", title: "Orychophragmus violaceus", by: "Missouri Botanical Garden Plant Finder", url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?taxonid=278083" },
    { id: "foc-zhdd", title: "Viola philippica 紫花地丁", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014402" },
    { id: "foc-yw", title: "Iris tectorum 鸢尾", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200028218" },
  ],
  by: ["kid", "dad"],
};

export default entry;
