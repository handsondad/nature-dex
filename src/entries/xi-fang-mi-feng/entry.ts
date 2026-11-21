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
  cover: { photo: "cover", caption: "西方蜜蜂（参考照片・等我们遇见它再换上自己拍的）", shoot: "春天花坛或果树花下，一只停在花上采蜜的蜜蜂，侧面拍清楚肚子上的环纹；站远一点用长焦，不靠近蜂箱" },
  hello: "找到好花的蜜蜂回到家，会跳一段“8 字舞”，告诉同伴往哪儿飞。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "on-flower", caption: "花上的工蜂，右上角还有一只正飞过来", shoot: "晴天上午，一只趴在花上的蜜蜂，从侧上方拍：胸、肚子、后腿和翅膀都在画面里；只拍不碰，拍完慢慢走开" },
      points: [
        { x: 0.66, y: 0.17, label: "肚子上一圈圈环纹", detail: "肚子红褐色，上面有一圈圈黑色和橙黄色的环纹。", cite: ["adw-apis"] },
        { x: 0.52, y: 0.56, label: "毛茸茸的胸", detail: "胸上长满了毛，肚子上的毛少一些。", cite: ["adw-apis"] },
        { x: 0.43, y: 0.62, label: "后腿上的“花粉篮”", detail: "后腿上有个“花粉篮”。工蜂把身上沾的花粉刷下来，装在这里带回家。", cite: ["adw-apis"] },
        { x: 0.58, y: 0.6, label: "两对翅膀", detail: "蜜蜂有两对翅膀，一共四片。长得像蜜蜂的蚜蝇只有一对。", cite: ["edis-eristalis", "wiki-eristalis"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看后腿上的花粉团",
      shot: { photo: "pollen-basket", caption: "工蜂后腿上挂着一团黄色的花粉", shoot: "采蜜回来的工蜂，侧面拍后腿上鼓鼓的花粉团；用长焦，不靠近" },
      text: "工蜂后腿上有一块光滑的地方，周围一圈长毛，叫“花粉篮”。它把身上沾的花粉刷下来，压成一团挂在这里，飞回家喂宝宝。",
      zoom: 2.5,
      start: [0.66, 0.42],
      cite: ["adw-apis"],
    },
    {
      type: "steps",
      title: "蜂房里的 21 天",
      steps: [
        { photo: "step-egg", label: "卵", text: "蜂王在小格子底部产下一粒白色的卵。大约 3 天后孵化。", caption: "蜂房底部的一粒卵", shoot: "只能看养蜂人打开的蜂箱或科普展板，不自己去开蜂箱" },
        { photo: "step-larva", label: "幼虫", text: "孵出来的是白白胖胖、没有脚的小幼虫。工蜂不停地喂它，工蜂幼虫吃 4～5 天。", caption: "格子里弯着的白色幼虫，旁边还有细细的卵", shoot: "养蜂人展示的巢脾：能看见格子里的白色幼虫" },
        { photo: "step-pupa", label: "蛹", text: "工蜂用蜡把格子封上。幼虫在里面吐丝结茧，变成蛹，工蜂的蛹要变 12 天左右。", caption: "切开的蜂房里一排正在变样的蛹（这几只是雄蜂）", shoot: "封了蜡盖的巢脾（不要自己去切开）" },
        { photo: "step-emerge", label: "咬开盖", text: "从卵算起大约 21 天，新工蜂自己咬开蜡盖，爬出来。以后它就不再长大了。", caption: "一只新蜜蜂咬开蜡盖爬出来（连拍）", shoot: "养蜂人展示时，正在咬开蜡盖往外爬的新蜜蜂" },
      ],
      cite: ["adw-apis"],
    },
    {
      type: "compare",
      title: "工蜂和雄蜂",
      before: { photo: "worker", label: "工蜂", caption: "眼睛在头两边", shoot: "停着的一只工蜂，从上面或侧上方拍头和眼睛" },
      after: { photo: "drone", label: "雄蜂", caption: "大眼睛占了大半个头", shoot: "春夏蜂箱附近偶尔能看到的雄蜂，从上面拍；不靠近蜂箱" },
      text: "拖一拖看：雄蜂的眼睛比工蜂大得多，身子也更粗壮。螫针只长在工蜂和蜂王身上，雄蜂没有。",
      cite: ["adw-apis"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4、5 月拍到它最多，10 月又多起来一些；12 月和 1 月很少有人拍到。我们是哪个月遇见它的？",
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
          tells: ["是一种苍蝇，只有一对翅膀", "胸和肚子之间没有细腰", "眼睛很大，雄的两只眼睛几乎碰在一起", "在花上停多久、怎么飞，都和蜜蜂很像，光看动作分不出来"],
        },
      ],
      cite: ["adw-apis", "wiki-cerana", "wiki-zh-zhfm", "edis-eristalis", "wiki-eristalis", "golding-2000", "golding-2001"],
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
        { q: "蜜蜂懂“零”吗？", a: "科学家教蜜蜂挑图上东西更少的那张。后来给它看一张上面什么都没有的卡片，它也知道“没有”比“1 个”还少。", cite: ["howard-2018"] },
      ],
    },
  ],
  care: "它会蜇人。蜜蜂飞过来别拍打、别挥手，站定慢慢走开；不抓它，不靠近蜂箱和蜂窝。",
  nextTime: "看看采蜜回来的蜜蜂后腿上挂的花粉团是什么颜色？不同的花，颜色一样吗？",
  sources: [
    { id: "adw-apis", title: "Apis mellifera (honey bee)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Apis_mellifera/" },
    { id: "edis-eristalis", title: "Drone fly, rat-tailed maggot Eristalis tenax", by: "University of Florida, EDIS", url: "https://ask.ifas.ufl.edu/publication/IN809" },
    { id: "golding-2000", title: "Behavioural mimicry of honeybees (Apis mellifera) by droneflies (Diptera: Syrphidae: Eristalis spp.)", by: "Proceedings of the Royal Society B, 2000", url: "https://doi.org/10.1098/rspb.2000.1088" },
    { id: "golding-2001", title: "Similarity in flight behaviour between the honeybee Apis mellifera and its presumed mimic, the dronefly Eristalis tenax", by: "Journal of Experimental Biology, 2001", url: "https://doi.org/10.1242/jeb.204.1.139" },
    { id: "howard-2018", title: "Numerical ordering of zero in honey bees", by: "Science, 2018", url: "https://doi.org/10.1126/science.aar4975" },
    { id: "wiki-waggle", title: "Waggle dance", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Waggle_dance" },
    { id: "wiki-cerana", title: "Apis cerana", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Apis_cerana" },
    { id: "wiki-zh-zhfm", title: "中华蜜蜂", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E8%9C%9C%E8%9C%82" },
    { id: "wiki-eristalis", title: "Eristalis tenax", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eristalis_tenax" },
  ],
  by: ["kid", "dad"],
};

export default entry;