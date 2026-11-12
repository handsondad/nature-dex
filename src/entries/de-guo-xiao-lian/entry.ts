import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京家里常见的「小蟑螂」多半是德国小蠊；更大的红褐色多是美洲大蠊等，用前胸两条纹区分。
const entry: Entry = {
  id: "de-guo-xiao-lian",
  name: "德国小蠊",
  scientific: "Blattella germanica",
  kind: "animal",
  // 前胸两条平行黑纹是关键特征；屋里若见到很大只的红褐色，先别急着定种
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "蜚蠊目", "姬蠊科", "小蠊属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只德国小蠊", shoot: "厨房或卫生间墙角、柜门缝附近，从正上方或斜上方微距拍：头后面的两条黑纹要清楚；只拍不抓，拍完洗手" },
  hello: "大家常叫它小蟑螂：浅褐色、小小的，头后面有两条黑纹。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-dorsal", caption: "从正上方看一只成虫", shoot: "成虫趴着时从正上方拍：头、前胸和翅膀都在画面里，两条黑纹要清楚" },
      points: [
        { x: 0.5, y: 0.28, label: "前胸两条黑纹", detail: "头后面那块盾牌（前胸背板）上，有两条又直又深的平行黑纹，是认出它的好记号。", cite: ["ncsu", "wiki-zh"] },
        { x: 0.5, y: 0.55, label: "身子小小的", detail: "成虫大约只有 1.3～1.6 厘米长，比很多大人的指甲盖还短一点。", cite: ["ncsu"] },
        { x: 0.5, y: 0.72, label: "浅褐到茶色", detail: "身体浅褐色到茶色，翅膀盖住大半个肚子。", cite: ["ncsu", "adw"] },
        { x: 0.25, y: 0.45, label: "很长的触角", detail: "两根细细的触角特别长，像两根探测棒。", cite: ["adw"] },
      ],
    },
    {
      type: "lookalike",
      title: "小蟑螂还是大蟑螂？",
      quiz: true,
      items: [
        {
          name: "美洲大蠊", scientific: "Periplaneta americana",
          shot: { photo: "look-mei-zhou", caption: "美洲大蠊" },
          tells: ["身子大得多，常常有 3～4 厘米长", "红褐色更重", "前胸没有那两条细细的平行黑纹"],
        },
        {
          name: "德国小蠊", scientific: "Blattella germanica", self: true,
          shot: { photo: "look-dgxl", caption: "德国小蠊" },
          tells: ["身子小，大约 1.3～1.6 厘米", "前胸有两条平行黑纹", "北京家里最常见的「小蟑螂」多半是它"],
        },
      ],
      cite: ["ncsu", "wiki-zh", "wiki-en-pa"],
    },
    {
      type: "steps",
      title: "它怎么长大",
      steps: [
        { photo: "step-egg", label: "卵鞘", text: "妈妈把卵装在一个大约 8 毫米长的小胶囊（卵鞘）里，夹在肚子后面带着走，快孵化时才放下。", caption: "雌虫带着卵鞘", shoot: "若看到雌虫屁股后面拖着一个浅褐色小胶囊，远远微距拍；不碰、不抓" },
        { photo: "step-nymph", label: "若虫", text: "小蟑螂从卵鞘里爬出来时没有翅膀，颜色更深，像缩小版的大人。大概要蜕皮五六次。", caption: "还没长翅膀的若虫", shoot: "墙上或柜缝旁较小、颜色更深、没有翅膀的小蟑螂，微距拍全身" },
        { photo: "step-adult", label: "成虫", text: "长出翅膀以后就是成虫。从卵到成虫，温暖时大约要两三个月。", caption: "长出翅膀的成虫", shoot: "浅褐色、有翅膀的成虫，正面或侧面拍清楚两条黑纹" },
      ],
      cite: ["ncsu", "adw"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "它几乎只住在人盖的房子里，冬天外面太冷，家里却一年到头都能碰到。在中国，大家夏秋拍到它更多一些。我们是哪个月遇见它的？",
      cite: ["ncsu"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么叫「德国」小蠊？", a: "科学家最早在欧洲中部记下它，名字里就带了「德国」。后来研究发现，它其实起源于亚洲，跟着人迁徙传到世界各地。", cite: ["ncsu"] },
        { q: "一只妈妈能带多少宝宝？", a: "雌虫一生大约会产 5～8 个卵鞘，一共大约 200～250 粒卵。每个卵鞘里平均大约有 40 粒。", cite: ["ncsu"] },
        { q: "它们吃什么？", a: "几乎什么有机的东西都吃：掉在地上的饭渣、宠物粮，有时连书本的装订胶也会啃。", cite: ["ncsu"] },
        { q: "为什么夜里更常见？", a: "它们多半夜里出来找吃的。要是大白天也成群出现，常常说明家里已经很多了。", cite: ["ncsu"] },
      ],
    },
  ],
  care: "只看、拍照，不徒手抓、不踩扁。看见了告诉大人；药喷剂让大人处理，别对着食物和孩子喷。拍完洗手。",
  nextTime: "下次在厨房数一数：看见的小蟑螂，头后面是不是有两条黑纹？有没有更大只、红褐色的？",
  sources: [
    { id: "ncsu", title: "Biology and Behavior of the German Cockroach", by: "NC State Extension", url: "https://content.ces.ncsu.edu/biology-behavior-of-the-german-cockroach" },
    { id: "adw", title: "Blattella germanica", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Blattella_germanica/" },
    { id: "wiki-zh", title: "德国小蠊", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%9C%8B%E5%A7%AC%E8%A0%8A" },
    { id: "wiki-en-pa", title: "American cockroach", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/American_cockroach" },
  ],
  by: ["kid", "dad"],
};

export default entry;
