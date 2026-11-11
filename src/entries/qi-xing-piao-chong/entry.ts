import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 和异色瓢虫易混：七星点数固定、翅鞘接缝前端跨中黑点、前胸两侧小白斑。
const entry: Entry = {
  id: "qi-xing-piao-chong",
  name: "七星瓢虫",
  scientific: "Coccinella septempunctata",
  kind: "animal",
  // 红底通常 7 黑点、接缝前端 1 点跨两翅、前胸前缘两侧白斑；点数不稳时先标 likely
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "鞘翅目", "瓢虫科", "瓢虫属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只七星瓢虫", shoot: "有蚜虫的叶子或花枝上，从正上方微距拍：背上的点和白色前胸都清楚；只拍不抓" },
  hello: "红红的背上通常正好七个黑点，像七颗小星星。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-top", caption: "从正上方看一只成虫", shoot: "春到秋，在有蚜虫的叶子上找一只成虫，正上方微距拍：头朝上，两片翅鞘和前胸都在画面里" },
      points: [
        { x: 0.5, y: 0.42, label: "中间跨缝的黑点", detail: "两片翅鞘接缝最前面有 1 个黑点，正好骑在中间。", cite: ["adw", "wiki-en"] },
        { x: 0.35, y: 0.55, label: "两边再各三点", detail: "每边翅鞘上通常再有 3 个黑点，加起来常常是 7 个（也可能 0～9 个）。", cite: ["adw", "wiki-en"] },
        { x: 0.5, y: 0.22, label: "前胸两侧小白斑", detail: "头后面的前胸前面两边，各有一块浅白色的小斑。", cite: ["adw"] },
        { x: 0.5, y: 0.7, label: "橘红到大红的背", detail: "翅鞘是橘红色或红色的，肚子几乎全黑。", cite: ["adw"] },
      ],
    },
    {
      type: "lookalike",
      title: "红底黑点，别认错",
      quiz: true,
      items: [
        {
          name: "异色瓢虫", scientific: "Harmonia axyridis",
          shot: { photo: "look-yspc", caption: "异色瓢虫" },
          tells: ["前胸大片白色，黑斑常排成 M 形", "肩膀方方的", "黑点数目不固定，也有黑底红斑的"],
        },
        {
          name: "七星瓢虫", scientific: "Coccinella septempunctata", self: true,
          shot: { photo: "look-qxpc", caption: "七星瓢虫" },
          tells: ["红色背上通常是 7 个黑点", "两片翅鞘接缝最前面有 1 个黑点跨在中间", "前胸前面两边各有一块小白斑"],
        },
      ],
      cite: ["adw", "adw-ha"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4、5 月拍到它最多，1、12 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "七星瓢虫吃什么？", a: "主要吃蚜虫。蚜虫少的时候，成虫也会吃花粉；幼虫饿了有时会吃别的瓢虫幼虫。", cite: ["adw"] },
        { q: "冬天它们去哪儿？", a: "成虫会挤在向阳的草丛、石头缝里过冬，常常十几只一堆，有时能超过 200 只。", cite: ["adw"] },
        { q: "一只能活多久？", a: "成虫一般能活 1～2 年，要看能不能顺利过冬。", cite: ["adw"] },
        { q: "学名是什么意思？", a: "septempunctata 的意思就是「七个点」。", cite: ["wiki-en"] },
        { q: "它是从哪儿来的？", a: "原本生活在欧洲和亚洲，后来被带到北美等地帮助治蚜虫，现在那边也很常见。", cite: ["adw"] },
      ],
    },
  ],
  care: "只看不抓。拿在手里它可能会咬人，还可能渗出难闻的黄水，弄脏衣服。",
  nextTime: "下次数清楚：遇见的红瓢虫，背上是不是正好 7 个点？前胸有没有大片白？",
  sources: [
    { id: "adw", title: "Coccinella septempunctata", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Coccinella_septempunctata/" },
    { id: "adw-ha", title: "Harmonia axyridis", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Harmonia_axyridis/" },
    { id: "wiki-en", title: "Coccinella septempunctata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coccinella_septempunctata" },
  ],
  by: ["kid", "dad"],
};

export default entry;
