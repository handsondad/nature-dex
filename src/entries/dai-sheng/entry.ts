import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "dai-sheng",
  name: "戴胜",
  scientific: "Upupa epops",
  kind: "animal",
  // 头上能立起的花冠、又长又弯的嘴，北京几乎没有第二种鸟长这样
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "犀鸟目", "戴胜科", "戴胜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只戴胜", shoot: "草地上或矮树上的一只戴胜，侧面最好：花冠、长嘴和翅膀条纹都清楚；站远一点拍，别追" },
  hello: "头上竖着一排「小扇子」，嘴巴又长又弯，像一把小镊子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-bird", caption: "草地上的戴胜", shoot: "草地上找吃的戴胜，侧面拍：花冠、长嘴、身子和翅膀条纹都在画面里；站远一点，用长焦" },
      points: [
        { x: 0.47, y: 0.28, label: "头上的花冠", detail: "头顶一排长羽毛，羽毛尖是黑的。平常向后收着，能一下子竖起来。", cite: ["bow", "wiki-en"] },
        { x: 0.32, y: 0.37, label: "又长又弯的嘴", detail: "嘴巴细长，微微向下弯，像一把小镰刀，能扎进土里找虫子。", cite: ["bow"] },
        { x: 0.45, y: 0.52, label: "橘粉色的身子", detail: "头、脖子和肚子是橘粉色或淡棕色，像披着一件黑白条纹的小斗篷。", cite: ["bow"] },
        { x: 0.6, y: 0.6, label: "翅膀上的黑白条", detail: "翅膀和尾巴上是一道一道的黑白横条，飞起来特别显眼。", cite: ["bow"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的长嘴",
      shot: { photo: "bill", caption: "嘴尖夹着一只虫子", shoot: "戴胜刚从土里叼出虫子的那一下，用长焦拍头和嘴的特写" },
      text: "嘴尖上夹着一只虫子。戴胜把长嘴整根扎进松软的土里，把藏在里面的幼虫和蛹夹出来。",
      zoom: 2.5,
      start: [0.22, 0.41],
      cite: ["bow", "wiki-en"],
    },
    {
      type: "compare",
      title: "花冠收起和竖起",
      before: { photo: "side-crest", label: "收起来", caption: "花冠向后收着的戴胜", shoot: "停在树枝上、花冠向后收平的戴胜，侧面拍" },
      after: { photo: "crest-up", label: "竖起来", caption: "花冠一下子张开的戴胜", shoot: "花冠完全竖起、像扇子一样张开的戴胜，侧面拍" },
      text: "都是戴胜。花冠收起来时，头像一把尖尖的小锤子；竖起来时，像一把打开的扇子，羽毛尖上一排黑点。",
      cite: ["wiki-en", "bow"],
    },
    {
      type: "steps",
      title: "树洞里长大",
      steps: [
        { photo: "step-egg", label: "下蛋", text: "妈妈在树洞或墙洞里下蛋。一窝常有六七个，多的能到十个。", caption: "博物馆收藏的戴胜蛋，右下角横线是 1 厘米", shoot: "只用转载照片：千万不要去找鸟窝看蛋" },
        { photo: "step-chicks", label: "孵出来", text: "孵 15～18 天，小鸟破壳。洞里挤满了毛茸茸的小家伙。", caption: "洞里挤成一团的戴胜雏鸟", shoot: "只用转载照片：不靠近、不打开鸟窝" },
        { photo: "step-feed", label: "喂虫子", text: "爸爸妈妈叼着虫子飞回来，塞进洞口张大的小嘴里。", caption: "大戴胜在树洞口喂小戴胜", shoot: "远远看见大鸟叼虫子飞进树洞时，在原地用长焦拍一张，不走近" },
        { photo: "step-peek", label: "探出头", text: "羽毛长齐了，小戴胜挤到洞口，往外看看。", caption: "从树洞口探出头的小戴胜", shoot: "只用转载照片，或远远用长焦拍" },
        { photo: "step-fledge", label: "飞出来", text: "出壳后大约 28 天，小鸟飞出树洞。再过一个月左右，它就能自己生活了。", caption: "刚离开树洞不久的小戴胜", shoot: "初夏草地上嘴还有点短的小戴胜，远远拍" },
      ],
      cite: ["bow", "martin-vivaldi-2014"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，4、5 月更多一些。北京名录里它是夏候鸟，也是留鸟，还是北京市重点保护的鸟。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "黑白翅膀，别认错",
      quiz: true,
      items: [
        {
          name: "松鸦", scientific: "Garrulus glandarius",
          shot: { photo: "look-sy", caption: "松鸦" },
          tells: ["翅膀上有一小块亮蓝色的花斑", "嘴巴短短粗粗，嘴边有一道黑“胡子”", "飞走时屁股上露出一块白"],
        },
        {
          name: "戴胜", scientific: "Upupa epops", self: true,
          shot: { photo: "flight", caption: "飞起来的戴胜" },
          tells: ["嘴又细又长，向下弯", "头上有橘色的扇子冠，尖上是黑的", "翅膀上是一道道整齐的黑白宽条"],
        },
        {
          name: "大斑啄木鸟", scientific: "Dendrocopos major",
          shot: { photo: "look-dbz", caption: "大斑啄木鸟" },
          tells: ["常贴在树干上往上爬、敲木头", "肚子下面、尾巴根是红色的", "嘴直直的，像一把小凿子"],
        },
      ],
      cite: ["adw-jay", "wiki-dbz", "bow"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "戴胜爱吃什么？", a: "蟋蟀、蚱蜢、甲虫和它们的幼虫，还有蛾子的幼虫和蛹。偶尔也吃小蜥蜴、小青蛙。", cite: ["bow"] },
        { q: "它会自己挖洞做窝吗？", a: "不会。它找现成的洞：树洞、墙缝、啄木鸟留下的旧洞。有的还把窝做在兔子洞、旧汽车里。", cite: ["bow"] },
        { q: "戴胜的窝为什么臭臭的？", a: "孵蛋的妈妈身上有个小腺体，里面住着有益的细菌，帮它做出一种臭臭的油。这股味可能帮它赶走敌人，还能挡住坏细菌。", cite: ["bow", "soler-2008"] },
        { q: "戴胜蛋上有小坑？", a: "科学家用显微镜看，发现戴胜蛋壳上有很多小坑。妈妈把那种油抹在蛋上，小坑把油留住，蛋就更容易孵出来。", cite: ["martin-vivaldi-2014"] },
        { q: "一窝下那么多蛋，都能长大吗？", a: "不一定。虫子多的年份能多养大几只；虫子少时，爸爸妈妈只能先喂大一点的孩子。", cite: ["bow"] },
        { q: "它的名字是怎么来的？", a: "英文 hoopoe 和学名 Upupa epops，都是学它“呼—噗—噗”的叫声。", cite: ["bow"] },
      ],
    },
  ],
  care: "远远看，不追不抓。看见树洞鸟窝别靠近，别伸手进去；捡到小鸟先告诉大人。",
  nextTime: "下次看它找吃的：它是把嘴整根扎进土里，还是只啄地面上的虫子？",
  sources: [
    { id: "bow", title: "Common Hoopoe (Upupa epops) — Introduction", by: "Birds of the World, Cornell Lab of Ornithology", url: "https://birdsoftheworld.org/bow/species/hoopoe/cur/introduction" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "soler-2008", title: "Symbiotic association between hoopoes and antibiotic-producing bacteria that live in their uropygial gland", by: "Functional Ecology, 2008", url: "https://doi.org/10.1111/j.1365-2435.2008.01448.x" },
    { id: "martin-vivaldi-2014", title: "Special structures of hoopoe eggshells enhance the adhesion of symbiont-carrying uropygial secretion that increase hatching success", by: "Journal of Animal Ecology, 2014", url: "https://doi.org/10.1111/1365-2656.12243" },
    { id: "adw-jay", title: "Garrulus glandarius (Eurasian jay)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Garrulus_glandarius/" },
    { id: "wiki-dbz", title: "Great spotted woodpecker", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Great_spotted_woodpecker" },
    { id: "wiki-en", title: "Hoopoe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hoopoe" },
  ],
  by: ["kid", "dad"],
};

export default entry;
