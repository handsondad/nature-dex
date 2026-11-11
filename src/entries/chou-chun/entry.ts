import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// Flora of China 写作 Ailanthus altissimus，GBIF 接受的写法是 Ailanthus altissima。
const entry: Entry = {
  id: "chou-chun",
  name: "臭椿",
  scientific: "Ailanthus altissima",
  kind: "plant",
  // 常和香椿认错，拍到小叶基部的粗齿和腺点再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "苦木科", "臭椿属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵臭椿", shoot: "我们遇见的那一棵：整棵树，夏天能拍到挂着的一串串翅果更好" },
  hello: "叶子揉碎了臭臭的，满树的翅果却会转着圈飞下来。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "compound-leaf", caption: "一整片大叶子", shoot: "低处一整片羽状复叶，从叶柄基部到最顶上的小叶都在画面里，后面举一张浅色卡纸（不用摘）" },
      points: [
        { x: 0.5, y: 0.45, label: "一串是一片叶子", detail: "这一整串是一片叶子！长 40～60 厘米，上面有 13～27 片小叶。", cite: ["foc-cc"] },
        { x: 0.32, y: 0.3, label: "小叶边光滑", detail: "小叶的边是光滑的，没有一排排锯齿。", cite: ["foc-ailanthus"] },
        { x: 0.28, y: 0.62, label: "基部的粗齿", detail: "小叶基部两边各有 1～2 个粗齿，齿尖背面有小小的腺点。", cite: ["foc-ailanthus", "wiki-en"] },
        { x: 0.5, y: 0.92, label: "鼓鼓的叶柄基部", detail: "叶柄和枝条连着的地方鼓起来一块。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看小叶的“小点点”",
      shot: { photo: "leaflet-gland", caption: "一片小叶的基部", shoot: "捡一片落下的小叶，翻到背面，近拍基部的粗齿，齿尖上的小圆点要清楚" },
      text: "小叶基部粗齿的尖上，背面有小圆点，这就是腺点。长得像的漆树类没有这样的粗齿和腺点。",
      zoom: 3,
      start: [0.4, 0.6],
      cite: ["foc-ailanthus", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6 月拍到它最多，这时也最常拍到挂在树上的翅果。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "臭椿还是香椿？",
      quiz: true,
      items: [
        {
          name: "香椿", scientific: "Toona sinensis",
          shot: { photo: "look-xiang-chun", caption: "香椿" },
          tells: ["小叶边上常有细锯齿", "树皮粗糙，有裂纹", "果子熟了会裂开，种子只有一头带翅"],
        },
        {
          name: "臭椿", scientific: "Ailanthus altissima", self: true,
          shot: { photo: "look-chou-chun", caption: "臭椿" },
          tells: ["小叶边光滑，只在基部两边各有 1～2 个粗齿", "树皮比较光滑", "翅果扁扁的，种子在翅膀正中间"],
        },
      ],
      cite: ["foc-xc", "foc-cc", "foc-ailanthus", "wiki-en-toona"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "臭椿到底有多臭？", a: "有人说它的气味像花生、腰果，也有人说像放坏了的腰果。你闻起来像什么？", cite: ["wiki-en"] },
        { q: "翅果为什么会转着圈落下？", a: "翅果的两头是扭着的，落下来时就会打转，这样更容易被风带走。", cite: ["wiki-en"] },
        { q: "为什么有的臭椿不结翅果？", a: "臭椿分雄树和雌树，翅果只长在雌树上。雄树开的花比雌树多三四倍。", cite: ["wiki-en"] },
        { q: "它还有别的名字吗？", a: "古人叫它“樗”（chū）。英文叫它 tree of heaven，意思是“天堂树”。", cite: ["wiki-zh", "wiki-en"] },
        { q: "有虫子吃臭椿的叶子吗？", a: "有。樗蚕是一种大蛾子，它的幼虫吃臭椿叶。人们种臭椿养樗蚕，用来取丝。", cite: ["wiki-en", "wiki-zh"] },
      ],
    },
  ],
  care: "汁液可能让皮肤发痒。想闻气味就捡一片落叶，闻完洗手；不折枝，不放进嘴里。",
  nextTime: "冬天去看看：雌树上的翅果是不是还挂着？能一直挂到春天吗？",
  sources: [
    { id: "foc-cc", title: "Ailanthus altissimus 臭椿", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012488" },
    { id: "foc-ailanthus", title: "Ailanthus 臭椿属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=100879" },
    { id: "foc-xc", title: "Toona sinensis 香椿", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012513" },
    { id: "wiki-en", title: "Ailanthus altissima", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ailanthus_altissima" },
    { id: "wiki-en-toona", title: "Toona sinensis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Toona_sinensis" },
    { id: "wiki-zh", title: "臭椿", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%87%AD%E6%A4%BF" },
  ],
  by: ["kid", "dad"],
};

export default entry;
