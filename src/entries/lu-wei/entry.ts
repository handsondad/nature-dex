import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "lu-wei",
  name: "芦苇",
  scientific: "Phragmites australis",
  kind: "plant",
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "百合纲", "禾本目", "禾本科", "芦苇属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那片芦苇", shoot: "水边大片芦苇：能看见高高的秆和顶端羽毛一样的穗" },
  hello: "水边立着一支支绿竹竿，顶上开出羽毛一样的花穗。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "reed-plant", caption: "一丛芦苇", shoot: "站在岸上拍一丛完整的芦苇：秆、叶子和顶上的穗都进画面" },
      points: [
        { x: 0.47, y: 0.22, label: "叶子长又宽", detail: "叶子长可达大约 50 厘米，宽 1～3 厘米，常常向下弯，尖端细得像丝。", cite: ["foc-lw"] },
        { x: 0.5, y: 0.66, label: "秆又高又直", detail: "秆一般 2 米多高，节下面常像蒙着一层白粉。有的地方能长到 5 米。", cite: ["foc-lw", "packer-2017"] },
        { x: 0.15, y: 0.5, label: "一丛连一丛", detail: "地下有横着走的根状茎，新秆从上面一根根冒出来，慢慢连成一大片。", cite: ["foc-lw", "packer-2017"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看羽毛穗",
      shot: { photo: "spikelet-macro", caption: "一个个小穗和它们的丝毛", shoot: "微距拍穗子的一小段：小穗和小穗之间的白丝毛都看得清" },
      text: "每个小穗 10～18 毫米长，里面有 2～5 朵小花。小花底下长着一撮丝毛，和小花差不多长，穗子就显得毛茸茸的。",
      zoom: 2.5,
      start: [0.5, 0.3],
      cite: ["foc-lw"],
    },
    {
      type: "steps",
      title: "从冒尖到飘絮",
      steps: [
        { photo: "step-sprout", label: "冒尖", text: "春天，新芽从地下的根状茎里钻出来，尖尖的，像一根根小竹笋。", caption: "春天浅水里冒出的尖芽", shoot: "春天去同一片芦苇，拍刚从泥里冒出的尖芽" },
        { photo: "step-bloom", label: "开花", text: "7 月以后，秆顶上抽出圆锥形的大穗。这一支刚开花，带着紫红色。", caption: "刚开花、带紫红色的穗", shoot: "夏末凑近拍刚抽出来的穗，看看是什么颜色" },
        { photo: "step-seed", label: "飘絮", text: "秋天到冬天，穗子变得又白又蓬松，远看像一片白茫茫的雪。", caption: "秋冬白茫茫的芦花", shoot: "秋冬回到同一片，拍白蓬蓬的芦花" },
      ],
      cite: ["foc-lw", "packer-2017"],
    },
    {
      type: "compare",
      title: "夏天绿，冬天黄",
      before: { photo: "same-summer", label: "夏天", caption: "水边一片绿", shoot: "选一片好找的芦苇，记住站的位置，夏天拍一张" },
      after: { photo: "whole-plant", label: "冬天", caption: "叶子枯黄，芦花还挂着", shoot: "冬天回到同一个位置、同一个角度，再拍一张" },
      text: "这两张是在不同地方拍的：夏天的芦苇又绿又密，到了冬天，叶子和秆都变得枯黄，顶上还挂着芦花。",
      cite: ["foc-lw"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 10、11 月拍到它最多；冬天枯黄的芦花也常有人拍。花果期大约 7～11 月。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "水边高草，别认错",
      quiz: true,
      items: [
        {
          name: "荻", scientific: "Miscanthus sacchariflorus",
          shot: { photo: "look-di", caption: "荻" },
          tells: ["穗子白亮，像一把银丝", "小穗底下的丝毛约有小穗的两倍长", "秆是实心的，个子比芦苇矮"],
        },
        {
          name: "芦苇", scientific: "Phragmites australis", self: true,
          shot: { photo: "look-lu-wei", caption: "芦苇" },
          tells: ["穗子大而蓬松，常带一点紫或棕", "小穗长，丝毛和小花差不多长", "秆常高过 2 米"],
        },
        {
          name: "香蒲", scientific: "Typha orientalis",
          shot: { photo: "look-xiang-pu", caption: "香蒲" },
          tells: ["顶上是棕色、像香肠一样的圆柱穗", "叶子窄长，像一把把长剑", "属于香蒲科，不是禾本科"],
        },
      ],
      cite: ["foc-di", "foc-lw", "foc-xp"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "一个穗能结多少种子？", a: "每根能结籽的秆顶上只有一个丝绒一样的穗，能结 500～2000 粒种子。", cite: ["packer-2017"] },
        { q: "谁来帮芦苇传粉？", a: "是风！芦苇靠风传粉，不需要招蜜蜂来帮忙。", cite: ["packer-2017"] },
        { q: "一大片芦苇是怎么长出来的？", a: "主要靠地下横着长的根状茎往外扩张，所以一大片里的很多秆，其实在地下连在一起。", cite: ["packer-2017"] },
        { q: "它只在中国有吗？", a: "不是。除了南极洲，每个大洲都有天然生长的芦苇。", cite: ["packer-2017"] },
        { q: "谁住在芦苇荡里？", a: "北京汉石桥湿地有一大片芦苇沼泽，东方大苇莺就在芦苇荡里筑巢、唱歌。", cite: ["bj-hsq"] },
        { q: "为什么有的芦苇冬天不割？", a: "北京翠湖湿地会晚割或不割一些芦苇，给鸟儿留下躲藏、歇脚的地方。", cite: ["bj-cuihu"] },
      ],
    },
  ],
  care: "只看、拍照，不折秆。水边要和大人一起、不下水，脚下要站稳。",
  nextTime: "轻轻摇一摇（别折断）：顶上的穗是松松的羽毛，还是结成一条棕色棒？",
  sources: [
    { id: "foc-lw", title: "Phragmites australis 芦苇", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242337323" },
    { id: "foc-di", title: "Miscanthus sacchariflorus 荻", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Miscanthus%20sacchariflorus?t=foc" },
    { id: "foc-xp", title: "Typha orientalis 东方香蒲", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200024681" },
    { id: "packer-2017", title: "Biological Flora of the British Isles: Phragmites australis", by: "Journal of Ecology, 2017", url: "https://doi.org/10.1111/1365-2745.12797" },
    { id: "bj-hsq", title: "“京东大芦荡”鸟类住户持续增长，志愿者长期守护", by: "北京市水务局（转北京日报）", url: "https://swj.beijing.gov.cn/swdt/ztzl/sstxczl/sstzx/202606/t20260623_4712072.html" },
    { id: "bj-cuihu", title: "北京观鸟基地——翠湖国家城市湿地公园", by: "北京市园林绿化局", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/sqzn/202609/t20260904_4850794.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
