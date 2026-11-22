import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京家里常见的「小蟑螂」多半是德国小蠊；更大的红褐色多是美洲大蠊等，用前胸两条纹区分。
const entry: Entry = {
  id: "de-guo-xiao-lian",
  name: "德国小蠊",
  pinyin: "dé guó xiǎo lián",
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
        { x: 0.515, y: 0.57, label: "前胸两条黑纹", detail: "头后面那块“盾牌”（前胸背板）上，有两条差不多平行的深色纹，一直伸到翅膀根。", cite: ["wiki-en", "wiki-zh"] },
        { x: 0.56, y: 0.33, label: "小小的身子", detail: "成虫只有 1.1～1.6 厘米长，浅褐色到深褐色，身子扁扁的。", cite: ["wiki-en", "wiki-zh"] },
        { x: 0.25, y: 0.75, label: "很长的触角", detail: "两根细细的触角很长，像两根探测棒。", cite: ["adw"] },
        { x: 0.67, y: 0.41, label: "带刺的长腿", detail: "腿上长着一根根小刺。它擅长飞快地跑，有翅膀却几乎不会飞。", cite: ["adw", "wiki-en"] },
      ],
    },
    {
      type: "steps",
      title: "它怎么长大",
      steps: [
        { photo: "with-egg", label: "卵鞘", text: "妈妈把卵装在一个像小香肠的卵鞘里，挂在肚子末端一直带着，快孵化时才放下。一个卵鞘能孵出 30～40 只若虫。", caption: "屁股后面带着卵鞘的雌虫", shoot: "若看到雌虫屁股后面拖着一个红褐色小胶囊，远远微距拍；不碰、不抓" },
        { photo: "step-nymph", label: "若虫", text: "刚孵出的若虫只有 3 毫米长，黑黑的，没有翅膀。它要蜕皮 6～7 次才长大。", caption: "还没长翅膀的若虫", shoot: "墙上或柜缝旁较小、颜色更深、没有翅膀的小蟑螂，微距拍全身" },
        { photo: "step-adult", label: "成虫", text: "最后一次蜕皮后长出翅膀，就是成虫。条件好的时候，从卵到能生宝宝大约只要两个月。", caption: "长出翅膀的成虫", shoot: "浅褐色、有翅膀的成虫，正面或侧面拍清楚两条黑纹" },
      ],
      cite: ["kepuchina", "wiki-en", "adw"],
    },
    {
      type: "magnifier",
      title: "凑近看卵鞘",
      shot: { photo: "step-egg", caption: "一个掉在地上的卵鞘", shoot: "墙角或柜子缝里找到的空卵鞘，旁边放一粒米比大小，微距拍；拍完让大人清理" },
      text: "卵鞘弯弯细长，像一根小香肠，身上一道道横纹。刚长出来时半透明，两天里慢慢变成栗子壳那样的红褐色。上面一条像船底的棱，小若虫就从那里钻出来。",
      zoom: 2.5,
      start: [0.5, 0.3],
      cite: ["kepuchina", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "它几乎只住在人盖的房子里，野外几乎找不到它。屋里暖和，一年到头都能碰到；在中国，大家夏秋拍到它更多一些。我们是哪个月遇见它的？",
      cite: ["pnas-2024"],
    },
    {
      type: "lookalike",
      title: "小蟑螂还是大蟑螂？",
      quiz: true,
      items: [
        {
          name: "美洲大蠊", scientific: "Periplaneta americana",
          shot: { photo: "look-mei-zhou", caption: "美洲大蠊" },
          tells: ["身子大得多，平均约 4 厘米长", "红褐色", "前胸背板边上一圈黄色，没有两条平行黑纹"],
        },
        {
          name: "德国小蠊", scientific: "Blattella germanica", self: true,
          shot: { photo: "look-dgxl", caption: "德国小蠊" },
          tells: ["身子小，1.1～1.6 厘米", "前胸有两条平行黑纹", "浅褐色到深褐色"],
        },
      ],
      cite: ["wiki-en", "wiki-en-pa"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么叫「德国」小蠊？", a: "它最早是约 250 年前在欧洲中部被记下来的，所以叫“德国”。其实它约 2100 年前由亚洲的一种蟑螂变来，很可能在印度或缅甸。", cite: ["pnas-2024"] },
        { q: "在德国，人们叫它什么？", a: "说英语的地方叫它“德国蟑螂”，可在德国，人们反倒叫它“俄罗斯蟑螂”。", cite: ["wiki-zh"] },
        { q: "一只妈妈能有多少宝宝？", a: "雌虫一生大约产 4～8 个卵鞘，每个卵鞘能孵出 30～40 只若虫。", cite: ["kepuchina", "adw"] },
        { q: "大白天看见它说明什么？", a: "它们多半夜里出来找吃的、喝水。要是大白天也看见，常常说明藏身的缝里已经挤满了。", cite: ["kepuchina"] },
        { q: "它们吃什么？", a: "几乎什么都吃：肉、淀粉、甜的、油的。实在没吃的，连肥皂、胶水和牙膏也啃。", cite: ["wiki-en", "adw"] },
        { q: "为什么有的蟑螂不吃甜毒饵？", a: "有些地方的德国小蠊尝到葡萄糖会觉得苦，就不吃用葡萄糖做的毒饵了。这是它们在毒饵面前很快演化出来的。", cite: ["science-2013"] },
      ],
    },
  ],
  care: "只看、拍照，不徒手抓、不踩扁。看见了告诉大人；药喷剂让大人处理，别对着食物和孩子喷。拍完洗手。",
  nextTime: "下次在厨房数一数：看见的小蟑螂，头后面是不是有两条黑纹？有没有更大只、红褐色的？",
  sources: [
    { id: "kepuchina", title: "德国小蠊", by: "科普中国", url: "https://www.kepuchina.cn/article/articleinfo?business_type=100&ar_id=346326" },
    { id: "pnas-2024", title: "Solving the 250-year-old mystery of the origin and global spread of the German cockroach, Blattella germanica", by: "Tang et al., PNAS, 2024", url: "https://doi.org/10.1073/pnas.2401185121" },
    { id: "science-2013", title: "Changes in Taste Neurons Support the Emergence of an Adaptive Behavior in Cockroaches", by: "Wada-Katsumata, Silverman & Schal, Science, 2013", url: "https://doi.org/10.1126/science.1234854" },
    { id: "adw", title: "Blattella germanica", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Blattella_germanica/" },
    { id: "wiki-en", title: "German cockroach", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/German_cockroach" },
    { id: "wiki-zh", title: "德国小蠊", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%9C%8B%E5%A7%AC%E8%A0%8A" },
    { id: "wiki-en-pa", title: "American cockroach", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/American_cockroach" },
  ],
  by: ["kid", "dad"],
};

export default entry;