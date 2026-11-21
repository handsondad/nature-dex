import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 《中国植物志》用的旧名是 Amygdalus davidiana，GBIF 接受名是 Prunus davidiana。
const entry: Entry = {
  id: "shan-tao",
  name: "山桃",
  scientific: "Prunus davidiana",
  kind: "plant",
  // 早春开粉白花的还有山杏、桃、榆叶梅，拍到树皮和花萼再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵山桃", shoot: "我们遇见的那一棵：3 月开满花时拍整棵树，紫红色的树干也拍进去" },
  hello: "3 月，枝上一片叶子还没有，粉色的花就先开满了。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-branch", caption: "刚开花的山桃枝条，花苞和花挤在光秃秃的枝上", shoot: "3 月开花时，靠近拍一段开满花、还没长叶的枝条，能看清花瓣和花后面的花萼" },
      points: [
        { x: 0.265, y: 0.34, label: "五片粉白花瓣", detail: "花瓣圆圆的，粉色或带一点白，一朵花 2～3 厘米宽。", cite: ["foc-st", "bjrb-guide"] },
        { x: 0.4, y: 0.69, label: "花贴着枝条开", detail: "花梗非常短，花几乎直接长在枝条上，一朵一朵单独开。", cite: ["foc-st"] },
        { x: 0.42, y: 0.12, label: "紫红色的花萼", detail: "花瓣后面托着紫红色的花萼，外面光光的，没有毛。桃花的花萼外面有细毛。", cite: ["foc-st", "foc-amygdalus"] },
        { x: 0.71, y: 0.61, label: "枝上还没有叶子", detail: "山桃先开花后长叶，开花时枝上看不到叶子。", cite: ["foc-st", "bjrb-guide"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看毛茸茸的小桃",
      shot: { photo: "fruit-macro", caption: "夏天枝头的山桃果子，淡黄绿色，表面有细毛", shoot: "7～8 月，靠近拍一个挂在枝上的果子，果子表面的细毛要清楚" },
      text: "山桃的果子比乒乓球还小一点，淡黄色，外面盖着一层短短的细毛。凑近看，像不像穿了一件绒衣？",
      start: [0.39, 0.63],
      cite: ["foc-st", "frps-st"],
    },
    {
      type: "steps",
      title: "山桃的一年",
      steps: [
        { photo: "step-bloom", caption: "3 月，山桃满树开花，枝上还没有叶子", shoot: "3 月花开最多时，拍同一棵树的树冠", label: "先开花", text: "3～4 月，粉白的花先开满光秃秃的枝条。" },
        { photo: "step-leaf", caption: "长出来的山桃叶，细长、尖尖的，小枝带红色", shoot: "花谢以后，拍一段刚长出叶子的枝条", label: "再长叶", text: "花谢了，叶子才长出来。叶子细长，尖尖的，边上有细锯齿。" },
        { photo: "step-fruit", caption: "夏天，山坡上的山桃树挂满了淡黄色的果子", shoot: "7～8 月，拍同一棵树挂果的样子", label: "结果子", text: "7～8 月果子成熟，淡黄色。果肉又薄又干，熟了也不裂开。" },
      ],
      cite: ["foc-st", "frps-st"],
    },
    {
      type: "compare",
      title: "春天和夏天，认得出吗",
      before: { photo: "same-spring", label: "3 月", caption: "树枝光光的，只有花", shoot: "3 月花开时，站在树下抬头拍树冠" },
      after: { photo: "same-summer", label: "夏天", caption: "只剩一丛绿叶，看不到花了", shoot: "夏天站在同一个地方，用同样的角度再拍一张" },
      text: "春天它满身是花，很好认；到了夏天只剩绿叶子，混在别的树里就难找了。春天先记住它在哪儿，夏天再去找它的果子。",
      cite: ["foc-st"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 3 月拍到它最多，开花的照片也大多在 3 月。北京的西山，3 月底山坡上开满山桃、山杏，远看像下了一场雪。",
      cite: ["bj-xishan"],
    },
    {
      type: "lookalike",
      title: "早春的粉白花，别认错",
      quiz: true,
      items: [
        {
          name: "山杏", scientific: "Prunus sibirica",
          shot: { photo: "look-sx", caption: "山杏：白花，花萼向后翻" },
          tells: ["开花时，花萼向后翻过去", "花瓣白色带粉色细纹，或淡粉色", "树皮深灰色，看着粗糙、沧桑"],
        },
        {
          name: "山桃", scientific: "Prunus davidiana", self: true,
          shot: { photo: "look-st", caption: "山桃" },
          tells: ["树干紫红色，光滑发亮", "花萼紫红色，紧紧托着花瓣", "开花时一片叶子都没有"],
        },
        {
          name: "碧桃", scientific: "Prunus persica",
          shot: { photo: "look-bt", caption: "桃花：花和绿叶一起出来" },
          tells: ["开花时叶子也一起长出来", "花是更深的粉红色", "树干是灰色的"],
        },
        {
          name: "榆叶梅", scientific: "Prunus triloba",
          shot: { photo: "look-yym", caption: "榆叶梅：矮矮一丛，花挤得满满的" },
          tells: ["矮矮的一丛灌木，常只有 2～3 米高", "花密密地挤在枝上", "4 月才开，比山桃晚一些"],
        },
      ],
      cite: ["foc-sx", "foc-st", "bjrb-guide", "foc-yym", "bj-yym"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "山桃的桃子能吃吗？", a: "不能。果子只有 2.5～3.5 厘米，毛茸茸的，果肉又薄又干，《中国植物志》写着「不可食」。", cite: ["foc-st", "frps-st"] },
        { q: "山桃核能拿来干什么？", a: "山桃核圆圆的，上面有横横竖竖的沟和小坑。人们拿它做小玩具，或者串成一串珠子。", cite: ["foc-st", "frps-st"] },
        { q: "果园里的桃树，为什么要山桃帮忙？", a: "山桃不怕旱、不怕冷。华北的人常用它当「树根」，把桃、梅、李嫁接在上面，这叫砧木。", cite: ["frps-st"] },
        { q: "山桃古时候叫什么？", a: "两千多年前的字典《尔雅》里，它叫「榹桃」。现在也有人叫它山毛桃、野桃。", cite: ["frps-st"] },
        { q: "山桃花都是粉色的吗？", a: "不一定。有一种白山桃开白花，还有一种红山桃开玫瑰红色的花。", cite: ["frps-st"] },
        { q: "「西山晴雪」是真的雪吗？", a: "春天不一定。3 月底北京西山开满山桃、山杏，白白粉粉一大片，人们说又见到了「西山晴雪」。", cite: ["bj-xishan"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花。路边的树可能打过药，花和果子都不放进嘴里。",
  nextTime: "花谢以后过多久才长出叶子？下次去同一棵树，记下看到第一片叶子的日子。",
  sources: [
    { id: "foc-st", title: "Amygdalus davidiana 山桃", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010610" },
    { id: "frps-st", title: "山桃 Amygdalus davidiana（第 38 卷）", by: "中国植物志（植物智）", url: "https://www.iplant.cn/info/Amygdalus%20davidiana?t=z" },
    { id: "foc-amygdalus", title: "Amygdalus 桃属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=101512" },
    { id: "foc-sx", title: "Armeniaca sibirica 山杏", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010634" },
    { id: "foc-yym", title: "Amygdalus triloba 榆叶梅", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010625" },
    { id: "bjrb-guide", title: "早春桃李杏梅樱花，该如何分辨？市园林绿化局指南来了", by: "北京日报", url: "https://www.sohu.com/a/768507762_163278" },
    { id: "bj-yym", title: "【榆叶梅】榆叶梅与碧桃及美人梅的区别", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hhzs/201604/t20160415_118513.shtml" },
    { id: "bj-xishan", title: "花开北京·2024全民赏花季暨北京森林文化系列活动启动", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/jj/202405/t20240522_3691237.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
