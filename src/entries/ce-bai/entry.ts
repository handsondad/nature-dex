import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ce-bai",
  name: "侧柏",
  scientific: "Platycladus orientalis",
  kind: "plant",
  // 圆柏也常被叫作「柏树」：拍到扁平成片的小枝、带钩的球果再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "松柏纲", "松柏目", "柏科", "侧柏属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵侧柏", shoot: "我们遇见的那一棵：整棵树连同树干拍进去，树皮一条一条的也要看得见" },
  hello: "小枝扁扁的，像一把把绿色的小扇子，一年四季都不落叶。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "spray", caption: "一枝扁扁的小枝", shoot: "正对着一枝小枝拍，让它摊开占满画面；如果枝头有小球果，一起拍进去" },
      points: [
        { x: 0.5, y: 0.45, label: "小枝扁扁的", detail: "小枝是扁的，排在同一个平面上，像一把摊开的扇子。", cite: ["foc-platycladus"] },
        { x: 0.35, y: 0.7, label: "叶子像小鳞片", detail: "叶子只有 1～3 毫米长，像小鳞片一样，一对一对贴在枝上。", cite: ["foc-cebai", "foc-platycladus"] },
        { x: 0.62, y: 0.6, label: "叶子中间一道沟", detail: "排在正中间的那些叶子，背面有一条细细的沟。", cite: ["foc-cebai"] },
        { x: 0.78, y: 0.22, label: "带小钩的球果", detail: "球果有 6 或 8 片厚厚的鳞片，鳞片顶上有一个向后弯的尖钩。", cite: ["foc-platycladus"] },
      ],
    },
    {
      type: "compare",
      title: "同一串球果，夏天和秋天",
      before: { photo: "same-blue", label: "夏天", caption: "蓝绿色的小球", shoot: "找一串够得着看的球果，记住它在哪根枝上，夏天拍一张" },
      after: { photo: "same-brown", label: "10 月", caption: "红褐色、裂开了", shoot: "10 月回到同一根枝条、同一个角度，再拍一张" },
      text: "没成熟的球果是蓝绿色的；10 月种子成熟时，球果变成红褐色，鳞片张开。",
      cite: ["foc-cebai", "foc-platycladus"],
    },
    {
      type: "lookalike",
      title: "侧柏还是圆柏？",
      quiz: true,
      items: [
        {
          name: "圆柏", scientific: "Juniperus chinensis",
          shot: { photo: "look-yuan-bai", caption: "带白粉的小圆球和细叶子" },
          tells: ["常有针一样的叶子，长 6～12 毫米", "小枝圆圆的或有四条棱，不是扁的", "球果像小圆珠，常带一层白粉，熟了是褐色的"],
        },
        {
          name: "侧柏", scientific: "Platycladus orientalis", self: true,
          shot: { photo: "look-ce-bai", caption: "摊开的一枝小枝" },
          tells: ["小枝扁扁的，排成一个平面", "叶子全是小鳞片，顶端钝钝的", "球果的鳞片顶上带小钩，熟了会裂开"],
        },
      ],
      cite: ["foc-yuanbai", "foc-cebai", "foc-platycladus"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "一年里每个月都有人拍到它，10 月最多。它是常绿树，冬天也可以去看。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "北京的市树是什么？", a: "有两种：侧柏和国槐。1987 年，北京市人民代表大会通过决定，把它们定为北京的市树。", cite: ["bj-trees"] },
        { q: "侧柏开花吗？", a: "不开花。它是裸子植物，3～4 月枝上长出黄绿色的小球，撒出花粉。", cite: ["foc-cebai"] },
        { q: "它的学名是什么意思？", a: "Platycladus 来自希腊语，意思是「扁扁的枝条」。", cite: ["wiki-en"] },
        { q: "在北京，哪儿的侧柏多？", a: "皇家园林、坛庙和寺院里，常常能看到一片一片的侧柏。", cite: ["bj-en"] },
      ],
    },
  ],
  care: "只看、拍照，不折小枝。球果和种子不要放进嘴里。",
  nextTime: "扁扁的小枝是竖着立起来的，还是平着摊开的？下次站在树下看一看。",
  sources: [
    { id: "foc-cebai", title: "Platycladus orientalis 侧柏", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200005428" },
    { id: "foc-platycladus", title: "Platycladus 侧柏属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=125775" },
    { id: "foc-yuanbai", title: "Juniperus chinensis 圆柏", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=210000896" },
    { id: "wiki-en", title: "Platycladus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Platycladus" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
    { id: "bj-en", title: "City Trees and City Flowers", by: "北京市人民政府（英文网）", url: "https://english.beijing.gov.cn/beijinginfo/facts/citytreesandflowers/202005/t20200513_1895998.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
