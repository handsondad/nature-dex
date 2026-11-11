import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// Flora of China 写作 Populus tomentosa；GBIF 接受的是杂交种写法 Populus × tomentosa。
const entry: Entry = {
  id: "mao-bai-yang",
  name: "毛白杨",
  scientific: "Populus × tomentosa",
  kind: "plant",
  // 叶背也发白的杨树不止一种，拍到长枝叶子的形状、波状齿和扁叶柄再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "杨柳科", "杨属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵毛白杨", shoot: "我们遇见的那一棵：整棵树，灰白色的树干和树冠都拍进去" },
  hello: "春天，它的果子裂开，白白的杨絮带着种子满天飞。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf", caption: "一根长枝上的叶子", shoot: "低处一根长枝：一片叶子正面朝上、一片翻过来露出叶背，叶柄要拍清楚（不用摘）" },
      points: [
        { x: 0.35, y: 0.35, label: "宽宽的三角形叶子", detail: "叶子是宽卵形到三角状卵形，长枝上的叶子 10～15 厘米长，边上是波浪一样的粗齿。", cite: ["foc-mby"] },
        { x: 0.7, y: 0.5, label: "叶背的白绒毛", detail: "翻过来看，叶背盖着一层白色绒毛。叶子老了，绒毛会慢慢掉。", cite: ["foc-mby", "wiki-zh"] },
        { x: 0.45, y: 0.78, label: "扁扁的叶柄", detail: "叶柄是从两边压扁的，像一根扁面条。", cite: ["foc-mby"] },
        { x: 0.4, y: 0.6, label: "叶子基部的小点", detail: "长枝上叶子的基部，常有 2 个小小的腺点。", cite: ["foc-mby"] },
      ],
    },
    {
      type: "steps",
      title: "杨絮是怎么来的",
      steps: [
        { photo: "step-catkin", label: "花序", text: "三月，叶子还没长出来，枝头先垂下一条条花序。", caption: "垂下来的花序", shoot: "3 月枝头垂下的花序，抬头从下往上拍" },
        { photo: "step-fruit", label: "果序", text: "雌树的花序长成一串小果子，可以长到 14 厘米。", caption: "一串小果子", shoot: "4 月雌树上一串绿色的小果子" },
        { photo: "step-open", label: "裂开", text: "四五月，小果子裂成两瓣，里面的白色长毛露了出来。", caption: "裂开的小果子", shoot: "4～5 月刚裂开、露出白毛的果序，靠近拍" },
        { photo: "step-fluff", label: "飞絮", text: "长毛和小种子一起掉出来，被风带着飘走，这就是杨絮。", caption: "飘落的杨絮", shoot: "地上或空中的杨絮，背景深一点更清楚" },
      ],
      cite: ["foc-mby", "foc-salicaceae", "wiki-populus", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，它的研究级观察一年才 28 次，看不出季节。城里的毛白杨多是人种的，这样的观察不算研究级。",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "杨絮是什么？", a: "是杨树果子里的白色长毛。果子熟了裂开，长毛和小种子一起掉出来，靠风飘走。", cite: ["foc-salicaceae", "wiki-populus"] },
        { q: "风一吹，叶子为什么晃个不停？", a: "它的叶柄是扁的，风一吹，叶子就容易左右摆。难怪它还有个名字叫“响杨”。", cite: ["foc-mby", "wiki-populus", "wiki-zh"] },
        { q: "毛白杨的爸爸妈妈是谁？", a: "科学家一直怀疑它是两种杨树杂交出来的，可到现在还不知道是哪两种。", cite: ["wiki-en"] },
        { q: "外国也有毛白杨吗？", a: "它原本只长在中国，是中国特有的树。后来被带到了美国的路易斯安那州。", cite: ["wiki-zh", "wiki-en"] },
        { q: "毛白杨能长多高？", a: "能长到 30 米，差不多有十层楼那么高。", cite: ["foc-mby"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不剥树皮。杨絮飞进眼睛别揉，告诉大人。",
  nextTime: "树干上那些像眼睛的疤是怎么来的？下次凑近看看，再数数一棵树上有几只。",
  sources: [
    { id: "foc-mby", title: "Populus tomentosa 毛白杨", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200005722" },
    { id: "foc-salicaceae", title: "Salicaceae 杨柳科", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10787" },
    { id: "wiki-en", title: "Populus × tomentosa", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Populus_%C3%97_tomentosa" },
    { id: "wiki-populus", title: "Populus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Populus" },
    { id: "wiki-zh", title: "毛白杨", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%AF%9B%E7%99%BD%E6%9D%A8" },
  ],
  by: ["kid", "dad"],
};

export default entry;
