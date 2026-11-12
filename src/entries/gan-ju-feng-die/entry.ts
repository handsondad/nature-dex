import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "gan-ju-feng-die",
  name: "柑橘凤蝶",
  scientific: "Papilio xuthus",
  kind: "animal",
  // 黄底黑纹、后翅有尾突和蓝橙斑；幼虫吃芸香科。拍开翅成虫较易确认
  certainty: "sure",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "鳞翅目", "凤蝶科", "凤蝶属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只柑橘凤蝶", shoot: "停在花上或叶子上张开翅膀时，从上方或侧面拍：黄底黑纹和后翅尾突清楚；慢慢靠近，只拍不抓" },
  hello: "黄翅膀上画着黑格子，后翅还拖着两根细细的「小尾巴」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-open", caption: "张开翅膀的柑橘凤蝶", shoot: "春到秋晴天，等它停在花上或叶子上张开翅膀，从上方拍：四翅正面、尾突都在画面里" },
      points: [
        { x: 0.35, y: 0.4, label: "黄底黑纹", detail: "翅膀底色是黄色，上面有粗细不一的黑色条纹和斑块。", cite: ["wiki-en"] },
        { x: 0.72, y: 0.7, label: "后翅的小尾巴", detail: "后翅外侧拖出细细的尾突，是凤蝶科常见的样子。", cite: ["wiki-en"] },
        { x: 0.65, y: 0.55, label: "蓝斑和橙斑", detail: "后翅黑带之间夹着闪光的蓝鳞和橙色的鳞片。", cite: ["wiki-en"] },
        { x: 0.5, y: 0.2, label: "大大的翅膀", detail: "翅展大约 90～110 毫米，算中等到偏大的蝴蝶。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "steps",
      title: "从一粒卵到一只蝴蝶",
      steps: [
        { photo: "step-egg", label: "卵", text: "雌蝶把卵一粒一粒产在寄主植物的叶子上。", caption: "叶子上的一粒卵", shoot: "柑橘、花椒或其它芸香科植物叶子上找卵，微距拍，不摘叶子" },
        { photo: "step-larva", label: "毛毛虫", text: "小幼虫外表像鸟粪，头上有棕白斑；长大后身子变成浅绿色，带褐色斑。", caption: "毛毛虫", shoot: "寄主植物上的幼虫，侧面微距拍；只拍不碰。受惊时可能翻出臭角" },
        { photo: "step-pupa", label: "蛹", text: "幼虫阶段大约 3～5 周，蛹大约再过 2 周。", caption: "蛹", shoot: "枝条或叶背的蛹，带一点背景拍清楚" },
        { photo: "step-adult", label: "蝴蝶", text: "一年大约有 4～5 代；第一代成虫多在 4 月中到 5 月初羽化。", caption: "成虫", shoot: "停在叶子或花上的成虫，和前面几张最好拍在同一类植物附近" },
      ],
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 8、9 月拍到它最多，12 月和 1 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "毛毛虫吃什么叶子？", a: "主要吃芸香科植物：柑橘、柚子、花椒、黄檗，还有芸香等。", cite: ["wiki-en"] },
        { q: "小毛毛虫为什么像鸟粪？", a: "它身上的黑褐和白斑很像鸟粪，想吃虫子的动物常常认不出它。", cite: ["wiki-en"] },
        { q: "它能看见真正的颜色吗？", a: "能。它有色觉，还能在黄光、红光下认出花的颜色，方便找花。", cite: ["wiki-en"] },
        { q: "雌蝶会交配很多次吗？", a: "会。多次交配能让它产更多卵，宝宝的基因也更多样。", cite: ["wiki-en"] },
        { q: "北京周边常见吗？", a: "在东亚很常见，城市、郊野和橘园都能见到；整体不被认为受威胁。", cite: ["wiki-en", "wiki-zh"] },
      ],
    },
  ],
  care: "只看不抓，不用手捏翅膀。叶子上的毛毛虫也只看不碰。",
  nextTime: "下次在花椒或柑橘叶子上找找：有没有像鸟粪的小毛毛虫？",
  sources: [
    { id: "wiki-en", title: "Papilio xuthus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Papilio_xuthus" },
    { id: "wiki-zh", title: "柑橘鳳蝶", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%9F%91%E6%A9%98%E9%B3%B3%E8%9D%B6" },
  ],
  by: ["kid", "dad"],
};

export default entry;
