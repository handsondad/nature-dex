import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 接受名为 Prunus triloba；Flora of China 归入桃属写作异名 Amygdalus triloba。
const entry: Entry = {
  id: "yu-ye-mei",
  name: "榆叶梅",
  scientific: "Prunus triloba",
  kind: "plant",
  // 春季花期常和碧桃、麦李混种，等花后长出宽椭圆粗糙叶、看清先端常三浅裂即可确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "春日枝头繁密绽放的粉红榆叶梅",
    shoot: "4 月盛花期拍一整丛开满粉红花的榆叶梅，把一串串裹满枝条的花球拍清楚",
  },
  hello: "名字就把秘密说完了：花朵粉艳像梅花，长出的叶子宽宽糙糙像榆树叶！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-fruit",
        caption: "像榆树叶一样的宽椭圆形叶与毛茸茸的红果",
        shoot: "5～7 月靠近拍一段枝条：边缘粗锯齿的宽叶片和圆圆的毛绒小红果都在画面里",
      },
      points: [
        {
          x: 0.25,
          y: 0.35,
          label: "宽椭圆的「榆树叶」",
          detail: "叶片宽椭圆形到倒卵形，长 2～6 厘米，叶脉凹陷、表面有点糙，猛一看真像榆树叶。",
          cite: ["foc-yym"],
        },
        {
          x: 0.78,
          y: 0.42,
          label: "叶边粗锯齿与三浅裂",
          detail: "叶缘有一圈粗大锯齿或重锯齿，叶片顶端还常常浅浅分成三个小尖角！",
          cite: ["foc-yym"],
        },
        {
          x: 0.55,
          y: 0.58,
          label: "带细绒毛的红圆果",
          detail: "5～7 月结出直径 1～1.8 厘米的红色近球形核果，表面披着细软绒毛，熟透后薄果肉会裂开。",
          cite: ["foc-yym", "wiki-en"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看像榆叶的脉纹和锯齿",
      shot: {
        photo: "leaf-macro",
        caption: "叶脉清晰凹陷、边缘带粗重锯齿的叶片与幼果",
        shoot: "凑近拍一片完整的榆叶梅叶子正面，看清凹下去的羽状叶脉、粗重锯齿和叶尖裂口",
      },
      text: "它的拉丁种加词 triloba 就是「三裂」的意思——仔细找一找枝条上的叶子，不少叶片在尖端会分出三个浅浅的裂片，配上深深的叶脉和粗重锯齿，在桃花、梅花亲戚里一眼就能认出来。",
      zoom: 2.5,
      start: [0.62, 0.55],
      cite: ["foc-yym", "wiki-zh"],
    },
    {
      type: "lookalike",
      title: "春日粉红花团：榆叶梅还是碧桃？",
      quiz: true,
      items: [
        {
          name: "碧桃",
          scientific: "Prunus persica",
          shot: { photo: "look-bt", caption: "叶片窄长呈披针形的桃枝" },
          tells: [
            "叶子是窄窄长长的椭圆状披针形（长 7～15 厘米），叶面平展光滑",
            "多长成小乔木，叶尖细长不分裂",
          ],
        },
        {
          name: "榆叶梅",
          scientific: "Prunus triloba",
          self: true,
          shot: { photo: "look-yym", caption: "叶片宽扁粗糙、带粗重锯齿的榆叶梅" },
          tells: [
            "叶子宽椭圆形或倒卵形（长 2～6 厘米），叶脉凹陷、边缘粗重锯齿像榆叶",
            "叶片顶端常常浅三裂，多是一丛丛 2～3 米高的灌木",
          ],
        },
      ],
      cite: ["foc-yym", "foc-tao"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "榆叶梅先花后叶，4～5 月开花，5～7 月结果；在中国，大家 4 月拍到它最多，标注开花的也集中在 4 月。我们是哪个月遇见它的？",
      cite: ["foc-yym"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "公园里一层层像小绣球的也是它吗？",
          a: "对！野生的榆叶梅原本是 5 片花瓣的单瓣花；公园里最常种的是「重瓣榆叶梅」品种，花瓣叠成厚厚好几层，开起来把整根树枝裹得严严实实。",
          cite: ["foc-yym", "bj-hexin", "wiki-en"],
        },
        {
          q: "在北京北边去哪儿能看成片的榆叶梅？",
          a: "昌平区的东小口城市休闲公园、贺新公园和霍营公园春季百花齐放时都有它；贺新公园还把重瓣榆叶梅列为春季粉红花系的骨干树种。",
          cite: ["bj-hexin", "bj-huahai"],
        },
        {
          q: "它真是梅花和榆树生的孩子吗？",
          a: "不是！榆树属于榆科，它属于蔷薇科李属，和桃、李、杏才是亲戚，只是因为「叶似榆、花似梅」才得了这个好记的名字，古人还叫它「鸾枝」。",
          cite: ["foc-yym", "wiki-zh"],
        },
        {
          q: "它的野生老家在哪儿？",
          a: "榆叶梅原产中国北方和华东多地，在河北、内蒙古、山西、东北等地的山坡林缘灌丛里都有野生的，特别耐寒耐旱。",
          cite: ["foc-yym", "wiki-en"],
        },
      ],
    },
  ],
  care: "只看、拍照，不攀折开满花朵的枝条；夏初结出的红色毛绒小果肉薄味涩，公园绿化树还可能打过药，不要摘来吃。",
  nextTime: "等花谢长满绿叶时再去看看同一丛榆叶梅：能不能找到一片顶端正好分成「三个小尖角」的叶子？",
  sources: [
    {
      id: "foc-yym",
      title: "Amygdalus triloba 榆叶梅",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010625",
    },
    {
      id: "foc-tao",
      title: "Amygdalus persica 桃",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010618",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
    {
      id: "bj-huahai",
      title: "2024年春季全市公园赏花片区统计表",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ggfw/gyfjqyl/gyhd/202404/t20240430_3649525.shtml",
    },
    {
      id: "wiki-en",
      title: "Prunus triloba",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Prunus_triloba",
    },
    {
      id: "wiki-zh",
      title: "榆叶梅",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E6%A6%86%E5%8F%B6%E6%A2%85",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
