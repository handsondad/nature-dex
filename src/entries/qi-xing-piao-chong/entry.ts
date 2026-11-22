import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 和异色瓢虫易混：七星点数固定、翅鞘接缝前端跨中黑点、前胸两侧小白斑。
const entry: Entry = {
  id: "qi-xing-piao-chong",
  name: "七星瓢虫",
  pinyin: "qī xīng piáo chóng",
  scientific: "Coccinella septempunctata",
  kind: "animal",
  // 红底通常 7 黑点、接缝前端 1 点跨两翅、前胸前缘两侧白斑；点数不稳时先标 likely
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "鞘翅目", "瓢虫科", "瓢虫属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "七星瓢虫（参考照片・等我们遇见它再换上自己拍的）", shoot: "有蚜虫的叶子或花枝上，从正上方微距拍：背上的点和白色前胸都清楚；只拍不抓" },
  hello: "红红的背上通常正好七个黑点，像七颗小星星。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-top", caption: "从斜上方看一只成虫", shoot: "春到秋，在有蚜虫的叶子上找一只成虫，正上方微距拍：头朝上，两片翅鞘和前胸都在画面里" },
      points: [
        { x: 0.51, y: 0.59, label: "中间跨缝的黑点", detail: "两片翅鞘接缝最前面有 1 个黑点，正好骑在中间，左右各占一半。", cite: ["adw", "wiki-en"] },
        { x: 0.72, y: 0.49, label: "两边再各三点", detail: "每边翅鞘上通常再有 3 个黑点，加起来常常是 7 个（也可能 0～9 个）。", cite: ["adw", "wiki-en"] },
        { x: 0.48, y: 0.39, label: "前胸两侧小白斑", detail: "头后面黑色的前胸，前面两边各有一块浅白色的斑。", cite: ["adw"] },
        { x: 0.45, y: 0.72, label: "橘红到大红的背", detail: "翅鞘是橘红色或红色的，身子 6.5～7.8 毫米长；肚子底下几乎全黑。", cite: ["adw"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的前胸",
      shot: { photo: "head", caption: "迎面爬过来的七星瓢虫", shoot: "瓢虫往叶尖爬的时候，从正前方微距拍头和前胸；只拍不抓" },
      text: "黑色前胸的前面两边各有一块白斑；翅鞘最前面、跨缝黑点的两旁，还各有一小块白。异色瓢虫的前胸则大片是白的。",
      zoom: 3,
      start: [0.55, 0.47],
      cite: ["adw", "adw-ha"],
    },
    {
      type: "steps",
      title: "从一粒卵到小瓢虫",
      steps: [
        { photo: "step-egg", label: "卵", text: "妈妈把卵一小堆一小堆产在食物多又安全的地方。每粒约 1 毫米，黄色或橙色，像小纺锤。", caption: "树皮缝里一小堆黄色的卵", shoot: "春天有蚜虫的叶子背面找一小堆黄卵，凑近拍；不要碰" },
        { photo: "step-larva", label: "幼虫", text: "孵出来的幼虫灰黑色带橙斑，长长的，样子像小鳄鱼。它要经过四个龄期，从 1～2 毫米长到约 8 毫米，一路吃蚜虫。", caption: "叶子上爬的七星瓢虫幼虫", shoot: "有蚜虫的枝头找灰黑带橙斑的幼虫，侧面拍" },
        { photo: "step-pupa", label: "蛹", text: "长大的幼虫把屁股粘在叶子上，变成一动不动的蛹，大小和成虫差不多。", caption: "粘在叶面上的蛹，后面还挂着蜕下的皮", shoot: "叶面上一动不动、橙色带黑斑的小鼓包；隔几天回来再拍一次" },
        { photo: "step-adult", label: "成虫", text: "蛹壳裂开，钻出一只新瓢虫。从卵到成虫大约 6 周，一年最多能繁殖 5 代。", caption: "长好颜色的成虫", shoot: "同一片叶子附近找到刚长好颜色的成虫" },
      ],
      cite: ["adw", "wiki-en"],
    },
    {
      type: "compare",
      title: "停着和起飞",
      before: { photo: "rest", label: "停着", caption: "两片红翅鞘合得严严的", shoot: "停在叶子上的七星瓢虫，从正上方拍" },
      after: { photo: "fly", label: "起飞", caption: "翅鞘抬起，下面的薄翅张开了", shoot: "它爬到叶尖准备飞时连拍；不要去碰它" },
      text: "拖一拖看：飞之前，它先把红色的硬翅鞘抬起来，再张开藏在下面、折好的薄后翅。落下后，还要把后翅一折一折收回去。",
      cite: ["saito-2017"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4、5 月拍到它最多，10 月又多起来一些；1 月和 12 月很少有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "红底黑点，别认错",
      quiz: true,
      items: [
        {
          name: "异色瓢虫", scientific: "Harmonia axyridis",
          shot: { photo: "look-yspc", caption: "异色瓢虫" },
          tells: ["前胸大多是白的，上面 4 个黑斑常连成 M 形", "肩膀方方的", "颜色花样很多：红底点数不定，也有黑底带 2 个或 4 个红斑的"],
        },
        {
          name: "七星瓢虫", scientific: "Coccinella septempunctata", self: true,
          shot: { photo: "look-qxpc", caption: "七星瓢虫" },
          tells: ["红色背上通常是 7 个黑点", "两片翅鞘接缝最前面有 1 个黑点跨在中间", "黑色前胸只在前面两边各有一块小白斑"],
        },
      ],
      cite: ["adw", "adw-ha"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "七星瓢虫吃什么？", a: "主要吃蚜虫。蚜虫少的时候，成虫也会吃花粉；幼虫饿了有时会吃别的瓢虫幼虫。", cite: ["adw"] },
        { q: "冬天它们去哪儿？", a: "成虫会挤在茂密的矮草丛、石头缝里过冬，常常 10～15 只一堆，有时能超过 200 只。", cite: ["adw"] },
        { q: "一只能活多久？", a: "成虫一般能活 1～2 年，要看能不能顺利熬过冬天。", cite: ["adw"] },
        { q: "学名是什么意思？", a: "Coccinella 来自拉丁语的「猩红色」；septempunctata 的意思是「七个点」。", cite: ["wiki-en"] },
        { q: "越红越不好吃？", a: "科学家让幼虫吃多或吃少蚜虫：吃得饱的，长大后翅鞘里的红色素更多，身体里防身的苦味物质也更多。", cite: ["blount-2012"] },
        { q: "翅膀藏在哪儿？", a: "红色硬壳下面折着一对薄薄的后翅。科学家给它装上透明的“假翅鞘”，才看清它怎么折。起飞时，后翅不到 0.1 秒就能张开。", cite: ["saito-2017"] },
      ],
    },
  ],
  care: "只看不抓。被惹急了，它会从腿的关节挤出难闻的汁液，弄脏手和衣服。",
  nextTime: "下次数清楚：遇见的红瓢虫，背上是不是正好 7 个点？前胸有没有大片白？",
  sources: [
    { id: "adw", title: "Coccinella septempunctata", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Coccinella_septempunctata/" },
    { id: "adw-ha", title: "Harmonia axyridis", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Harmonia_axyridis/" },
    { id: "wiki-en", title: "Coccinella septempunctata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coccinella_septempunctata" },
    { id: "blount-2012", title: "How the ladybird got its spots: effects of resource limitation on the honesty of aposematic signals", by: "Functional Ecology, 2012", url: "https://doi.org/10.1111/j.1365-2435.2012.01961.x" },
    { id: "saito-2017", title: "Investigation of hindwing folding in ladybird beetles by artificial elytron transplantation and microcomputed tomography", by: "PNAS, 2017", url: "https://doi.org/10.1073/pnas.1620612114" },
  ],
  by: ["kid", "dad"],
};

export default entry;