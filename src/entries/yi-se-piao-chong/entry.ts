import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yi-se-piao-chong",
  name: "异色瓢虫",
  scientific: "Harmonia axyridis",
  kind: "animal",
  // 背上的花纹变化太多，要拍到白色前胸上的 M 形黑斑和方肩膀再确认
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "鞘翅目", "瓢虫科", "和瓢虫属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只异色瓢虫", shoot: "我们遇见的那一只：从斜上方微距拍，背上的花纹和白色前胸都清楚；只拍不抓，让它待在原来的叶子上" },
  hello: "同一种瓢虫，有的红底黑点，有的黑底红斑，背上的黑点从 0 个到 20 多个。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-top", caption: "从正上方看一只成虫", shoot: "春天或秋天，在有蚜虫的树叶、花枝上找一只成虫，从正上方微距拍，头朝上，白色前胸、两边肩膀和整片背都在画面里" },
      points: [
        { x: 0.5, y: 0.22, label: "白色前胸上的 M", detail: "头后面的前胸是白色的，上面的黑斑常排成一个“M”。也有黑斑多到前胸几乎全黑的。", cite: ["adw-ha", "wiki-en"] },
        { x: 0.28, y: 0.36, label: "方方的肩膀", detail: "翅鞘前端两边的“肩膀”方方的，很明显。", cite: ["adw-ha"] },
        { x: 0.6, y: 0.62, label: "花纹不一定", detail: "红底或橙底配 0 到 20 多个黑点，也有黑底配 2 个或 4 个红斑的。", cite: ["adw-ha", "wiki-en"] },
        { x: 0.22, y: 0.8, label: "红褐色的腿", detail: "不管背上是什么颜色，它的腿总是红褐色的。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "steps",
      title: "从一粒卵到一只瓢虫",
      steps: [
        { photo: "step-egg", label: "卵", text: "黄色的卵一堆二三十粒，每粒只有约 1.2 毫米。快孵化时，卵会变成灰黑色。", caption: "一小堆黄色的卵", shoot: "春夏在有蚜虫的枝叶上找一小堆黄色的卵，微距拍，不摘叶子" },
        { photo: "step-larva", label: "幼虫", text: "幼虫黑色带橙色花纹，身上有分叉的小刺，像一条小鳄鱼。它分 4 龄，最后常比成虫还长。", caption: "像小鳄鱼的幼虫", shoot: "在蚜虫多的嫩枝上找黑底橙纹、身上带刺的幼虫，侧面微距拍，只拍不碰" },
        { photo: "step-pupa", label: "蛹", text: "蛹是橙色的小圆顶，常粘在叶子上，后面还挂着最后一次蜕下的皮。", caption: "粘在叶子上的蛹", shoot: "叶面上粘着的橙色蛹，连同后面皱皱的旧皮一起拍进去" },
        { photo: "step-adult", label: "成虫", text: "卵、幼虫、蛹、成虫，它是完全变态的昆虫。实验里各阶段平均加起来，从卵到成虫约 17 天半。", caption: "变成成虫", shoot: "一只停在叶子上的成虫，和前面几张拍在同一类植物上更好" },
      ],
      cite: ["adw-ha"],
    },
    {
      type: "lookalike",
      title: "红底黑点，别认错",
      quiz: true,
      items: [
        {
          name: "七星瓢虫", scientific: "Coccinella septempunctata",
          shot: { photo: "look-qxpc", caption: "七星瓢虫" },
          tells: ["红色背上通常是 7 个黑点", "两片翅鞘接缝最前面有 1 个黑点跨在中间，两边各有一小块白斑", "前胸前面两边各有一块小白斑"],
        },
        {
          name: "异色瓢虫", scientific: "Harmonia axyridis", self: true,
          shot: { photo: "look-ysp", caption: "异色瓢虫" },
          tells: ["前胸大片白色，黑斑常排成 M 形", "肩膀方方的", "黑点数目不固定，也有黑底红斑的"],
        },
      ],
      cite: ["adw-ha", "adw-cs"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5 月拍到它最多，10 月又多起来一些；1、2 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "异色瓢虫吃什么？", a: "主要吃蚜虫和介壳虫。因为它特别能吃这些害虫，很多国家把它引进去保护庄稼。", cite: ["adw-ha"] },
        { q: "冬天瓢虫去哪儿了？", a: "成虫会钻进石缝、墙缝这类干燥的小缝里过冬，常常很多只挤在一起。暖到约 10℃ 时，它们还会出来走动。", cite: ["adw-ha", "wiki-en"] },
        { q: "瓢虫能活多久？", a: "成虫一般活 30～90 天，天冷天热会不一样；也有活了 3 年多的记录。", cite: ["adw-ha"] },
        { q: "背上的红和黑有什么用？", a: "鲜艳的红黑色像一块警告牌，能吓退一些天敌。被惹急时，它腿上的关节还会渗出难闻的液体。", cite: ["adw-ha"] },
      ],
    },
  ],
  care: "只看不抓。拿在手里它可能会咬人，腿上的关节还会渗出难闻的液体，弄脏衣服。",
  nextTime: "下次数一数：遇见的异色瓢虫里，红底黑点的多，还是黑底红斑的多？",
  sources: [
    { id: "adw-ha", title: "Harmonia axyridis", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Harmonia_axyridis/" },
    { id: "adw-cs", title: "Coccinella septempunctata", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Coccinella_septempunctata/" },
    { id: "wiki-en", title: "Harmonia axyridis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Harmonia_axyridis" },
  ],
  by: ["kid", "dad"],
};

export default entry;
