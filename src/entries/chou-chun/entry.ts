import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// Flora of China 写作 Ailanthus altissimus，GBIF 接受的写法是 Ailanthus altissima。
const entry: Entry = {
  id: "chou-chun",
  name: "臭椿",
  pinyin: "chòu chūn",
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
      shot: { photo: "leaf", caption: "一整片大叶子（羽状复叶）", shoot: "低处一整片羽状复叶，从叶柄基部到最顶上的小叶都在画面里（不用摘）" },
      points: [
        { x: 0.52, y: 0.4, label: "一串是一片叶子", detail: "这一整串是一片叶子！长 40～60 厘米，上面有 13～27 片小叶。", cite: ["foc-cc"] },
        { x: 0.37, y: 0.6, label: "小叶边光滑", detail: "小叶的边是光滑的，没有一排排锯齿。", cite: ["foc-ailanthus"] },
        { x: 0.46, y: 0.72, label: "小叶两两相对", detail: "小叶在叶轴两边一对一对地长，有时会错开一点。", cite: ["foc-cc", "wiki-en"] },
        { x: 0.485, y: 0.875, label: "叶轴基部鼓鼓的", detail: "叶轴带点红色，和枝条连着的地方鼓起来一块。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看小叶的“小点点”",
      shot: { photo: "gland", caption: "小叶基部的粗齿和腺点", shoot: "捡一片落下的小叶，翻到背面，近拍基部的粗齿，齿尖上的小圆点要清楚" },
      text: "小叶基部两边各有 1～2 个粗齿，齿尖背面有个小圆点，这就是腺点。认臭椿就找它。",
      zoom: 3,
      start: [0.41, 0.23],
      cite: ["foc-ailanthus"],
    },
    {
      type: "steps",
      title: "从小花到翅果",
      steps: [
        { photo: "step-flower", label: "开花", text: "4、5 月，枝头冒出一大串淡绿色的小花。", caption: "一串串淡绿色的小花", shoot: "4～5 月枝头的花序，靠近拍" },
        { photo: "step-green", label: "绿翅果", text: "雌树的花谢了，结出一串串扁扁的绿色翅果。", caption: "挂满绿色翅果的枝条", shoot: "夏天挂着绿色翅果的枝条" },
        { photo: "step-red", label: "变红", text: "翅果慢慢长大，染上红褐色，远看像一树花。", caption: "染上红色的翅果", shoot: "翅果变红的时候，再拍同一串" },
        { photo: "step-winter", label: "挂过冬", text: "叶子落光了，干透的翅果还挂在枝上，能一直挂到第二年春天。", caption: "冬天还挂在枝上的干翅果", shoot: "冬天光秃秃的枝上挂着的干翅果" },
        { photo: "step-seed", label: "种子", text: "捡一个对着光看：种子就藏在翅膀正中间。", caption: "落下的翅果，中间鼓起的是种子", shoot: "捡几个落地的翅果放在手心，对着光拍" },
      ],
      cite: ["foc-cc", "wiki-en"],
    },
    {
      type: "compare",
      title: "夏天和冬天",
      before: { photo: "same-summer", label: "夏天", caption: "满树羽毛一样的大叶子", shoot: "夏天在一个好记的位置拍整棵树" },
      after: { photo: "same-winter", label: "冬天", caption: "叶子落光，只剩枝条", shoot: "冬天回到同一个位置、同一个角度，再拍一张" },
      text: "臭椿是落叶树。秋天一片片大叶子整片掉下来，冬天只剩粗粗的枝条。",
      cite: ["foc-cc"],
    },
    {
      type: "magnifier",
      title: "冬天找一颗“心”",
      shot: { photo: "leaf-scar", caption: "枝条上心形的叶痕和冬芽", shoot: "冬天近拍枝条：大叶子掉下后留下的心形叶痕和上面的小芽" },
      text: "大叶子掉了，枝条上留下一个心形的叶痕。心的边上有一圈小点点，那是以前通到叶子里的“管子”留下的。心口上圆圆的是冬芽。",
      zoom: 2.5,
      start: [0.62, 0.62],
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6 月拍到它最多，这时也最常拍到挂在树上的翅果。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "臭椿、香椿还是火炬树？",
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
        {
          name: "火炬树", scientific: "Rhus typhina",
          shot: { photo: "look-huo-ju-shu", caption: "火炬树" },
          tells: ["每片小叶边上都有锯齿", "小枝上长满毛，摸起来像绒布", "果子挤成一个红红的“火炬”"],
        },
      ],
      cite: ["foc-xc", "foc-cc", "foc-ailanthus", "mbg-rhus"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "臭椿到底有多臭？", a: "揉碎的叶子有股怪味。有人说像花生、腰果，也有人说像放坏了的腰果。你闻起来像什么？", cite: ["foc-cc", "wiki-en"] },
        { q: "翅果为什么会转着圈落下？", a: "翅果两头扭着，落下时会打转，风能把它带远。掉进河里也能漂走，在水里泡了 5 个月的种子大多还能发芽。", cite: ["wiki-en", "kaproth-2008"] },
        { q: "为什么有的臭椿不结翅果？", a: "臭椿分雄树和雌树，翅果只长在雌树上。雄树开的花比雌树多三四倍。", cite: ["wiki-en", "foc-ailanthus"] },
        { q: "斑衣蜡蝉为什么总在臭椿上？", a: "斑衣蜡蝉能吸很多种植物的汁，但特别爱臭椿，长大一些以后更明显。", cite: ["insects-2020"] },
        { q: "臭椿的根皮里藏着什么？", a: "一种叫臭椿酮的东西。科学家把它喷到别的小苗上，好几种 5 天内就枯死了，臭椿自己的小苗却没事。", cite: ["heisey-1996"] },
        { q: "有虫子吃臭椿的叶子吗？", a: "有。古人叫臭椿“樗”（chū），樗蚕就是一种吃它的叶子长大的大蛾子，人们用它吐的丝织绸。", cite: ["wiki-zh", "wiki-en"] },
      ],
    },
  ],
  care: "汁液可能让皮肤发痒。想闻气味就捡一片落叶，闻完洗手；不折枝，不放进嘴里。",
  nextTime: "冬天去看看：雌树上的翅果是不是还挂着？能一直挂到春天吗？",
  sources: [
    { id: "foc-cc", title: "Ailanthus altissimus 臭椿", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Ailanthus%20altissima?t=foc" },
    { id: "foc-ailanthus", title: "Ailanthus 臭椿属", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Ailanthus?t=foc" },
    { id: "foc-xc", title: "Toona sinensis 香椿", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Toona%20sinensis?t=foc" },
    { id: "mbg-rhus", title: "Rhus typhina（staghorn sumac）", by: "Missouri Botanical Garden Plant Finder", url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?kempercode=m100" },
    { id: "heisey-1996", title: "Identification of an allelopathic compound from Ailanthus altissima (Simaroubaceae) and characterization of its herbicidal activity", by: "American Journal of Botany, 1996", url: "https://doi.org/10.1002/j.1537-2197.1996.tb12697.x" },
    { id: "kaproth-2008", title: "Seed viability and dispersal of the wind-dispersed invasive Ailanthus altissima in aqueous environments", by: "Forest Science, 2008", url: "https://doi.org/10.1093/forestscience/54.5.490" },
    { id: "insects-2020", title: "The inability of spotted lanternfly (Lycorma delicatula) to vector a plant pathogen between its preferred host, Ailanthus altissima, in a laboratory setting", by: "Insects, 2020", url: "https://doi.org/10.3390/insects11080515" },
    { id: "wiki-en", title: "Ailanthus altissima", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ailanthus_altissima" },
    { id: "wiki-zh", title: "臭椿", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%87%AD%E6%A4%BF" },
  ],
  by: ["kid", "dad"],
};

export default entry;