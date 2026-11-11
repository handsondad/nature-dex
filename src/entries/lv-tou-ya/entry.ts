import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "lv-tou-ya",
  name: "绿头鸭",
  scientific: "Anas platyrhynchos",
  kind: "animal",
  // 雄鸟翠绿头+白领圈，翅膀上蓝紫色翼镜；拍到雄鸟很容易确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雁形目", "鸭科", "鸭属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只绿头鸭", shoot: "湖面或岸边的绿头鸭，最好有雄鸟：绿头、白领和身子都清楚；岸上远远拍，别投喂、别下水" },
  hello: "绿头鸭爸爸的头像一块绿玻璃，脖子上还围着一圈白围巾。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出雄绿头鸭",
      shot: { photo: "male-side", caption: "水面上的一只雄绿头鸭", shoot: "水面上一只雄绿头鸭的侧面：绿头、白领、胸口和翅膀都看得清；岸上远拍，别靠太近" },
      points: [
        { x: 0.28, y: 0.32, label: "翠绿发亮的头", detail: "头和脖子是亮亮的翠绿色，阳光下会闪。", cite: ["wiki-en", "adw"] },
        { x: 0.38, y: 0.48, label: "一圈白领子", detail: "绿头和棕色胸口之间，有一圈细细的白色。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.42, label: "翅膀上的蓝镜子", detail: "翅膀上有一块蓝紫色、镶白边的羽毛，叫翼镜。公鸭母鸭都有。", cite: ["wiki-en", "adw"] },
        { x: 0.72, y: 0.58, label: "尾巴上的小卷毛", detail: "尾巴上面有几根向上卷的黑羽毛，像小小的问号。", cite: ["adw"] },
      ],
    },
    {
      type: "compare",
      title: "雄鸟和雌鸟",
      before: { photo: "same-male", label: "雄鸟", caption: "绿头白领", shoot: "同一群绿头鸭：站在岸上同一个角度，先拍雄鸟" },
      after: { photo: "same-female", label: "雌鸟", caption: "一身斑褐", shoot: "不换位置、不换角度，再拍身边的雌鸟" },
      text: "雌鸟一身带斑点的褐色，没有绿头。两只翅膀上都有那块蓝紫色的「小镜子」。",
      cite: ["wiki-en", "adw"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，4、5 月更多一些，9 月相对少。北京名录里它是「夏候鸟 / 旅鸟 / 冬候鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "绿头鸭吃什么？", a: "水草、种子、小虫子、螺丝，还有田里落下的谷粒，荤素都吃。", cite: ["adw"] },
        { q: "谁在「嘎嘎」叫？", a: "我们常听到的「嘎嘎」多半是雌鸟。雄鸟的叫声更低、更轻。", cite: ["wiki-en", "adw"] },
        { q: "蛋要孵多久？", a: "雌鸟一次大约下 9～13 颗蛋，孵大约 26～28 天。小鸭子出壳就会游泳。", cite: ["adw", "wiki-en"] },
        { q: "爸爸会留下来带孩子吗？", a: "通常不会。配对之后，雄鸟不久就离开，由雌鸟带着小鸭子下水。", cite: ["adw"] },
        { q: "冬天绿头鸭都飞走吗？", a: "北方的常往南飞；食物和住处够的地方，也有留下来过冬的。", cite: ["adw"] },
      ],
    },
  ],
  care: "在岸上远远看，不投喂、不追赶。水边要和大人在一起，不下水。",
  nextTime: "下次数一数：一群绿头鸭里，绿头的多，还是褐色的多？",
  sources: [
    { id: "adw", title: "Anas platyrhynchos (mallard)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Anas_platyrhynchos/" },
    { id: "wiki-en", title: "Mallard", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mallard" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
