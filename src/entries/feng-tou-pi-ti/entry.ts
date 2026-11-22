import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "feng-tou-pi-ti",
  name: "凤头䴙䴘",
  pinyin: "fèng tóu pì tī",
  scientific: "Podiceps cristatus",
  kind: "animal",
  // 修长白脖子、头顶双簇黑羽冠和栗红镶黑大围脖，拍到就能一眼认准
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "䴙䴘目", "䴙䴘科", "䴙䴘属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "水面上竖起黑羽冠、围着栗红围脖的凤头䴙䴘",
    shoot: "春夏在湖边或水库岸边，用长焦远拍水面上的凤头䴙䴘：长脖子、黑羽冠和栗红围脖都拍清楚；岸上观看，别下水",
  },
  hello: "头顶竖着黑羽冠，夏天围着栗红大围脖，小宝宝还爱趴在它背上！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "ruff",
        caption: "繁殖季的凤头䴙䴘，羽冠和围脖都竖了起来",
        shoot: "远远拉近拍凤头䴙䴘的侧面：黑羽冠、栗红围脖、长嘴和白脖子都在画面里；岸上用长焦",
      },
      points: [
        { x: 0.39, y: 0.18, label: "黑色的羽冠", detail: "头顶有一撮能竖起来的黑羽冠，一年四季都有。", cite: ["adw-gcg"] },
        { x: 0.43, y: 0.3, label: "栗红色的「大围脖」", detail: "繁殖季脸后长出一圈红橙色饰羽，末端是黑的。只在繁殖季才有。", cite: ["adw-gcg"] },
        { x: 0.22, y: 0.31, label: "又直又尖的长嘴", detail: "它潜到水下追着鱼抓，主要吃鱼，也吃虫子、虾和螺。", cite: ["adw-gcg"] },
        { x: 0.31, y: 0.64, label: "白白的长脖子", detail: "脖子又细又长，前面和肚子是白的，后脖子是深褐色。", cite: ["adw-gcg"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的脚",
      shot: { photo: "step-chick", caption: "大鸟潜水时翘出水面的一只脚", shoot: "长焦拍它潜水前翘出水面的脚，脚趾上的瓣要拍清楚；岸上看，别下水" },
      text: "它的脚长在身体很靠后的地方。每根脚趾两边都有宽宽的瓣，像一片片小桨，和鸭子连成一整片的蹼不一样。",
      zoom: 2.5,
      start: [0.31, 0.48],
      cite: ["adw-gcg", "wiki-grebe"],
    },
    {
      type: "compare",
      title: "夏天和冬天，像换了只鸟",
      before: { photo: "plumage-summer", label: "夏羽", caption: "栗红围脖、黑羽冠" },
      after: { photo: "plumage-winter", label: "冬羽", caption: "围脖没了，脸白白的" },
      text: "春夏繁殖季，脸后有一圈栗红镶黑的饰羽。冬天饰羽没了，眼睛上面变白，嘴是粉色的，头顶还留着一小撮黑羽冠。",
      cite: ["adw-gcg", "wiki-en"],
    },
    {
      type: "steps",
      title: "跳舞、搭窝、背娃",
      steps: [
        { photo: "head-crest", label: "换新装", caption: "长齐了栗红饰羽的凤头䴙䴘", text: "冬天，它头上的饰羽就开始慢慢长出来，到了春天全长齐了，正好去找对象。" },
        { photo: "step-dance", label: "对舞", caption: "面对面伸直脖子的一对凤头䴙䴘", text: "春天配对时，两只面对面伸直脖子、摇晃脑袋，有时还一起潜下去，衔来水草送给对方。" },
        { photo: "step-nest", label: "浮巢", caption: "趴在芦苇丛里浮巢上孵蛋的大鸟", text: "夫妻俩用水草和芦苇搭一个浮在水上的窝，一窝常有 3～4 颗蛋，两口子轮流孵。", shoot: "只用参考照片：看到浮巢要马上走开，不要靠近" },
        { photo: "step-back", label: "搭船", caption: "头上黑白条纹的小鸟趴在大鸟背上", text: "孵 27～29 天，头上黑白条纹的小鸟出壳了。头 3 个星期，它们常趴在爸爸妈妈背上。", shoot: "只用参考照片：带娃的亲鸟很敏感，别靠近" },
        { photo: "look-feng-tou", label: "分头带", caption: "两只大鸟各带着自己的小鸟", text: "小鸟再大一些，一家会分成两队，爸爸和妈妈各带几只，教它们潜水抓鱼。", shoot: "夏天水面上带娃的一家子，岸上远远拍，别追" },
      ],
      cite: ["adw-gcg", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国全年都有人拍到它，3 月最多，7 月最少。北京名录里它是夏候鸟和旅鸟、北京市重点保护动物；春天冰一化，野鸭湖的凤头䴙䴘就陆续回来繁殖了。",
      cite: ["bj-bird-list", "bj-yyh"],
    },
    {
      type: "lookalike",
      title: "湖上的䴙䴘，哪只是凤头䴙䴘？",
      quiz: true,
      items: [
        {
          name: "小䴙䴘",
          scientific: "Tachybaptus ruficollis",
          shot: { photo: "look-xiao-pi-ti", caption: "圆脑袋、短脖子的小䴙䴘" },
          tells: ["个子小，只有 23～29 厘米，像个小绒球", "圆脑袋，没有羽冠，也没有白白的长脖子"],
        },
        {
          name: "凤头䴙䴘",
          scientific: "Podiceps cristatus",
          self: true,
          shot: { photo: "look-self", caption: "白脖子长长的凤头䴙䴘" },
          tells: ["大个子，46～61 厘米，白脖子又细又长", "头顶黑羽冠，夏天有栗红镶黑的大围脖"],
        },
        {
          name: "黑颈䴙䴘",
          scientific: "Podiceps nigricollis",
          shot: { photo: "look-hjpt", caption: "夏天眼后有一扇金色羽毛的黑颈䴙䴘" },
          tells: ["只有 28～34 厘米，比凤头䴙䴘小一大圈", "夏天头和脖子全是黑的，眼后有一扇金黄色羽毛"],
        },
      ],
      cite: ["adw-gcg", "wiki-lg", "wiki-hjpt"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它为什么吃自己的羽毛？", a: "它会吃下自己的软羽毛！科学家认为，羽毛在胃里能裹住鱼刺，还能减少胃里的寄生虫。", cite: ["piersma-1989", "adw-gcg"] },
        { q: "离开窝时，怎么藏住鸟蛋？", a: "大鸟离开前会用水草把蛋盖起来。这样能防住偷吃它鸟蛋的白骨顶。", cite: ["adw-gcg", "keller-1989"] },
        { q: "背着宝宝的大鸟潜水了怎么办？", a: "小鸟会浮在水面上。大鸟在几步外冒出头，小鸟再游过去爬回背上，就这样学游泳。", cite: ["wiki-en"] },
        { q: "学名 Podiceps 是什么意思？", a: "拉丁语里是「屁股」加「脚」，说的就是它的脚长在身体最后面。", cite: ["wiki-en"] },
        { q: "它什么时候抓鱼最多？", a: "清晨和傍晚。那时小鱼游得离水面近，好找，也不用潜太深。", cite: ["adw-gcg"] },
        { q: "以前为什么有人抓它？", a: "一百多年前，英国人拿它漂亮的羽毛装饰衣服，它们受到很大威胁。后来有人组织起来保护鸟类。", cite: ["adw-gcg"] },
      ],
    },
  ],
  care: "北京市重点保护动物。在岸边安静远看，不投喂、不追，看到浮巢和背娃的亲鸟就走远。水边要和大人一起，不下水。",
  nextTime: "春天去湖边用望远镜找找：有没有一对凤头䴙䴘面对面摇头跳舞？",
  sources: [
    { id: "adw-gcg", title: "Podiceps cristatus (great crested grebe)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Podiceps_cristatus/" },
    { id: "piersma-1989", title: "Feather eating in Great Crested Grebes Podiceps cristatus: a unique solution to the problems of debris and gastric parasites in fish-eating birds", by: "Ibis, 1989", url: "https://doi.org/10.1111/j.1474-919x.1989.tb04784.x" },
    { id: "keller-1989", title: "Egg-Covering Behaviour by Great Crested Grebes Podiceps cristatus", by: "Ornis Scandinavica, 1989", url: "https://doi.org/10.2307/3676880" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-yyh", title: "野鸭湖迎来春归候鸟", by: "首都之窗（北京市人民政府门户网站），2026", url: "https://www.beijing.gov.cn/tsbj/sxym/202603/t20260311_4554933.html" },
    { id: "wiki-en", title: "Great crested grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Great_crested_grebe" },
    { id: "wiki-grebe", title: "Grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grebe" },
    { id: "wiki-lg", title: "Little grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Little_grebe" },
    { id: "wiki-hjpt", title: "Black-necked grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Black-necked_grebe" },
  ],
  by: ["kid", "dad"],
};

export default entry;