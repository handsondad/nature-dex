import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "xi-fang-mi-feng",
  name: "西方蜜蜂",
  scientific: "Apis mellifera",
  kind: "animal",
  // 东方蜜蜂（中蜂）和它长得很像，拍到后看身体颜色、在哪儿遇见再确认
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "膜翅目", "蜜蜂科", "蜜蜂属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只蜜蜂", shoot: "春天花坛或果树花下，一只停在花上采蜜的蜜蜂，侧面拍清楚肚子上的环纹；站远一点用长焦，不靠近蜂箱" },
  hello: "找到好花的蜜蜂回到家，会跳一段“8 字舞”，告诉同伴往哪儿飞。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "on-flower", caption: "花上的一只工蜂", shoot: "晴天上午，一只趴在花上的蜜蜂，从侧上方拍：胸、肚子、后腿和翅膀都在画面里；只拍不碰，拍完慢慢走开" },
      points: [
        { x: 0.68, y: 0.55, label: "肚子上一圈圈环纹", detail: "肚子红褐色，上面有一圈圈黑色和橙黄色的环纹。", cite: ["adw-apis"] },
        { x: 0.42, y: 0.4, label: "毛茸茸的胸", detail: "胸上长满了毛，肚子上的毛少一些。", cite: ["adw-apis"] },
        { x: 0.55, y: 0.78, label: "后腿上的“花粉篮”", detail: "后腿上有个“花粉篮”。工蜂把身上沾的花粉刷下来，装在这里带回家。", cite: ["adw-apis"] },
        { x: 0.5, y: 0.2, label: "两对翅膀", detail: "蜜蜂有两对翅膀，一共四片。长得像蜜蜂的蚜蝇只有一对。", cite: ["edis-eristalis"] },
      ],
    },
    {
      type: "lookalike",
      title: "是蜜蜂吗？别认错",
      quiz: true,
      items: [
        {
          name: "东方蜜蜂", scientific: "Apis cerana",
          shot: { photo: "look-zhmf", caption: "东方蜜蜂" },
          tells: ["和西方蜜蜂长得非常像，身子偏黑，肚子是黄黑相间的条纹", "个子稍小一点", "中国的叫中华蜜蜂（中蜂），黄河以北只在少数山区还有"],
        },
        {
          name: "西方蜜蜂", scientific: "Apis mellifera", self: true,
          shot: { photo: "look-xfmf", caption: "西方蜜蜂" },
          tells: ["肚子偏红褐、橙黄，带黑色环纹", "两对翅膀，胸和肚子之间有细腰", "后腿的花粉篮里常装着花粉"],
        },
        {
          name: "长尾管蚜蝇", scientific: "Eristalis tenax",
          shot: { photo: "look-cwgyy", caption: "长尾管蚜蝇" },
          tells: ["是一种苍蝇，只有一对翅膀", "胸和肚子之间没有细腰", "眼睛很大，雄的两只眼睛几乎碰在一起"],
        },
      ],
      cite: ["adw-apis", "wiki-cerana", "wiki-zh-zhfm", "edis-eristalis", "wiki-eristalis"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4、5 月拍到它最多，10 月又多起来一些；12 月和 1 月很少有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "蜜蜂怎么告诉同伴花在哪儿？", a: "花很近，它在巢里跳“圆圈舞”；花远，就跳“摇摆舞”，走出一个 8 字，用方向和扭动的时间说出花在哪边、有多远。", cite: ["adw-apis", "wiki-waggle"] },
        { q: "蜜蜂蜇了人会怎样？", a: "工蜂的螫针上有倒钩，蜇进去就拔不出来，连着毒囊一起从身上扯下，这只工蜂会死掉。", cite: ["adw-apis"] },
        { q: "蜜蜂看到的花和我们一样吗？", a: "不一样。蜜蜂能看见紫外线，有的花瓣上有只在紫外线下才看得见的花纹。", cite: ["adw-apis"] },
        { q: "冬天蜜蜂怎么取暖？", a: "工蜂和蜂王在巢里挤成一个紧紧的球，抖动飞行用的肌肉发热，互相取暖。", cite: ["adw-apis"] },
        { q: "一只工蜂能活多久？", a: "夏天出生的工蜂只活 2～4 个星期；赶上过冬的，能活到 11 个月。", cite: ["adw-apis"] },
      ],
    },
  ],
  care: "它会蜇人。蜜蜂飞过来别拍打、别挥手，站定慢慢走开；不抓它，不靠近蜂箱和蜂窝。",
  nextTime: "看看采蜜回来的蜜蜂后腿上挂的花粉团是什么颜色？不同的花，颜色一样吗？",
  sources: [
    { id: "adw-apis", title: "Apis mellifera (honey bee)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Apis_mellifera/" },
    { id: "wiki-waggle", title: "Waggle dance", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Waggle_dance" },
    { id: "wiki-cerana", title: "Apis cerana", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Apis_cerana" },
    { id: "wiki-zh-zhfm", title: "中华蜜蜂", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E8%9C%9C%E8%9C%82" },
    { id: "edis-eristalis", title: "Drone fly, rat-tailed maggot Eristalis tenax", by: "University of Florida, EDIS", url: "https://ask.ifas.ufl.edu/publication/IN809" },
    { id: "wiki-eristalis", title: "Eristalis tenax", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eristalis_tenax" },
  ],
  by: ["kid", "dad"],
};

export default entry;
