import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 接受名为 Prunus triloba；Flora of China、《中国植物志》归入桃属写作异名 Amygdalus triloba。
const entry: Entry = {
  id: "yu-ye-mei",
  name: "榆叶梅",
  scientific: "Prunus triloba",
  kind: "plant",
  // 春季花期常和碧桃、美人梅混种，等花后长出宽椭圆粗糙叶、看清先端常三浅裂即可确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "山坡上开满粉红花的一丛榆叶梅",
    shoot: "4 月盛花期拍一整丛开满粉红花的榆叶梅，把一串串裹满枝条的花球拍清楚",
  },
  hello: "叶子像榆树叶，花像梅花，所以叫它榆叶梅。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-branch",
        caption: "重瓣榆叶梅：一层层的粉花挤在枝条上",
        shoot: "4 月开花时靠近拍一段枝条：花、圆圆的花苞和枝条的树皮都要拍进去",
      },
      points: [
        { x: 0.52, y: 0.45, label: "一层层的花瓣", detail: "公园里常种重瓣榆叶梅，花瓣叠成好几层，粉红色。野生的只有 5 片花瓣。", cite: ["frps-yym", "foc-yym"] },
        { x: 0.55, y: 0.25, label: "花把枝条包住", detail: "花一簇一簇贴着枝条开，密密实实，把枝头挤得满满的。", cite: ["bj-yym"] },
        { x: 0.84, y: 0.66, label: "圆圆的花苞", detail: "花苞红红的、圆圆的。碧桃的花苞顺着枝条排开，形状长一点。", cite: ["bj-yym"] },
        { x: 0.31, y: 0.73, label: "叶子才冒头", detail: "先开花后长叶。花开时只冒出几片带粗锯齿的小嫩叶。", cite: ["foc-yym"] },
        { x: 0.22, y: 0.2, label: "枝条有裂皱", detail: "榆叶梅的枝干上有一道道裂皱，碧桃的枝干光滑一些。", cite: ["bj-yym"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看毛茸茸的小红果",
      shot: {
        photo: "leaf-fruit",
        caption: "夏天的榆叶梅：边缘有粗锯齿的宽叶子，和毛茸茸的红果子",
        shoot: "5～7 月靠近拍一段枝条：边缘粗锯齿的宽叶片和圆圆的毛绒小红果都在画面里",
      },
      text: "果子红红的，只有 1～1.8 厘米，外面盖着一层短毛。再看旁边的叶子：边上的锯齿大的套着小的，像榆树叶一样糙糙的。",
      zoom: 2.5,
      start: [0.56, 0.6],
      cite: ["frps-yym", "foc-yym"],
    },
    {
      type: "steps",
      title: "从花苞到果子",
      steps: [
        {
          photo: "step-bud", label: "花苞",
          caption: "圆圆的粉色花苞，旁边已经开了一朵",
          shoot: "3 月底到 4 月初，拍一段挂满圆花苞的枝条",
          text: "花苞圆圆的、粉红色，一簇一簇贴在枝条上。",
        },
        {
          photo: "step-bloom", label: "开花",
          caption: "山坡上一丛开花的榆叶梅，枝条细细直直，叶子才刚冒头",
          shoot: "4 月盛花时，拍同一丛榆叶梅的全身",
          text: "4 月满枝开花，叶子才刚冒出一点。花刚开时颜色深，后来慢慢变淡。",
        },
        {
          photo: "leaf-macro", label: "结果",
          caption: "花谢以后结出的青果，外面有一层细毛",
          shoot: "5～6 月，回到同一丛拍挂在枝上的小青果",
          text: "5～7 月结出小圆果，外面有毛，熟了变成红色。",
        },
      ],
      cite: ["bj-yym", "foc-yym", "frps-yym"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 4 月拍到它最多，开花的照片也多在 4 月。北京的榆叶梅一般 4 月上中旬开，花期只有 10 天左右，别错过。",
      cite: ["bj-yym"],
    },
    {
      type: "lookalike",
      title: "粉红一大片：榆叶梅、碧桃还是美人梅？",
      quiz: true,
      items: [
        {
          name: "碧桃",
          scientific: "Prunus persica",
          shot: { photo: "look-bt", caption: "碧桃：花朵之间夹着细长的绿叶" },
          tells: ["树干比较光滑", "花朵之间夹着细长的绿叶子", "叶子窄长，像对折的柳叶，亮亮的"],
        },
        {
          name: "榆叶梅",
          scientific: "Prunus triloba",
          self: true,
          shot: { photo: "look-yym", caption: "榆叶梅" },
          tells: ["矮矮一丛灌木，常只有 2～3 米高", "花一簇簇挤满枝头，密密实实", "枝干上有一道道裂皱"],
        },
        {
          name: "美人梅",
          scientific: "Prunus × blireana",
          shot: { photo: "look-mrm", caption: "美人梅：一棵小树，枝条紫红" },
          tells: ["是一棵小树，小枝细长、紫红色", "叶子紫红色，像杏树叶", "花是浅紫粉色，下面有明显的花柄"],
        },
      ],
      cite: ["bj-yym", "foc-yym"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "公园里一团团像小绒球的，也是榆叶梅吗？", a: "是。那是「重瓣榆叶梅」，花瓣叠成好几层。山上野生的榆叶梅，一朵花只有 5 片花瓣。", cite: ["frps-yym", "foc-yym"] },
        { q: "「鸾枝」是什么？", a: "古书《群芳谱》里写的「鸾枝」，是榆叶梅的一个变种，花瓣和萼片各有 10 枚，也有人叫它「兰枝」。", cite: ["frps-yym"] },
        { q: "小红果熟了会怎样？", a: "果子红色，外面有短毛。熟透的时候，薄薄的果肉会自己裂开。", cite: ["frps-yym", "foc-yym"] },
        { q: "榆叶梅和桃是一家吗？", a: "都是蔷薇科的亲戚。《中国植物志》把它和蒙古扁桃、长梗扁桃分在一个小组，山桃和桃在另一个小组。", cite: ["frps-yym", "frps-st"] },
        { q: "同一枝上的花，颜色怎么深浅不一样？", a: "榆叶梅的花刚开时颜色深，以后慢慢变淡。早开的和晚开的挨在一起，就有深有浅。", cite: ["bj-yym"] },
        { q: "在北京去哪儿看它？", a: "颐和园耕织图、天坛、地坛春天都能看到。昌平的贺新公园还把重瓣榆叶梅当成主角树之一。", cite: ["bj-huahai", "bj-hexin"] },
      ],
    },
  ],
  care: "只看、拍照，不折花枝。公园的花木可能打过药，小红果不要摘来吃。",
  nextTime: "花谢后再去看同一丛：找一片顶上分成三个小尖的叶子，再看看果子哪天变红。",
  sources: [
    { id: "foc-yym", title: "Amygdalus triloba 榆叶梅", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010625" },
    { id: "frps-yym", title: "榆叶梅 Amygdalus triloba（第 38 卷）", by: "中国植物志（植物智）", url: "https://www.iplant.cn/info/Amygdalus%20triloba?t=z" },
    { id: "frps-st", title: "山桃 Amygdalus davidiana（第 38 卷）", by: "中国植物志（植物智）", url: "https://www.iplant.cn/info/Amygdalus%20davidiana?t=z" },
    { id: "bj-yym", title: "【榆叶梅】榆叶梅与碧桃及美人梅的区别", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hhzs/201604/t20160415_118513.shtml" },
    { id: "bj-huahai", title: "2024年春季全市公园赏花片区统计表", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ggfw/gyfjqyl/gyhd/202404/t20240430_3649525.shtml" },
    { id: "bj-hexin", title: "贺新公园植物配置分析与提升建议", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
