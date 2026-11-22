import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "lv-tou-ya",
  name: "绿头鸭",
  pinyin: "lǜ tóu yā",
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
      shot: { photo: "male-side", caption: "水面上的一只雄绿头鸭", shoot: "水面上一只雄绿头鸭的侧面：绿头、白领、胸口和尾巴都看得清；岸上远拍，别靠太近" },
      points: [
        { x: 0.27, y: 0.3, label: "翠绿发亮的头", detail: "头和脖子是亮亮的翠绿色，阳光下会闪。", cite: ["adw", "wiki-en"] },
        { x: 0.14, y: 0.45, label: "黄黄的嘴", detail: "雄鸟的嘴是黄色的，嘴尖有一小点黑。", cite: ["wiki-en"] },
        { x: 0.29, y: 0.52, label: "一圈白领子", detail: "绿头和胸口之间，有一圈细细的白色。", cite: ["wiki-en"] },
        { x: 0.25, y: 0.63, label: "紫棕色的胸口", detail: "白领下面的胸口是棕色的，还带一点紫。", cite: ["wiki-en"] },
        { x: 0.88, y: 0.46, label: "尾巴上的小卷毛", detail: "尾巴上面有几根向上卷的黑羽毛，像小小的问号。只有雄鸟有。", cite: ["adw", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看翅膀上的「蓝镜子」",
      shot: { photo: "speculum", caption: "一只雌绿头鸭在水里扇翅膀，露出蓝色的翼镜", shoot: "绿头鸭在水面上扇翅膀的一瞬间，翅膀中间那块蓝紫色羽毛要拍清楚；岸上用长焦" },
      text: "翅膀中间有一块蓝紫色、会反光的羽毛，前后各镶一道白边，叫翼镜。公鸭母鸭都有，扇翅膀或飞起来时看得最清楚。",
      zoom: 2.5,
      start: [0.59, 0.67],
      cite: ["adw", "wiki-en"],
    },
    {
      type: "compare",
      title: "雄鸟和雌鸟",
      before: { photo: "same-male", label: "雄鸟", caption: "绿头、白领、黄嘴", shoot: "同一群绿头鸭：站在岸上同一个角度，先拍雄鸟" },
      after: { photo: "same-female", label: "雌鸟", caption: "一身斑褐、橙嘴带黑斑", shoot: "不换位置、不换角度，再拍身边的雌鸟" },
      text: "雌鸟一身带斑点的褐色，没有绿头，嘴是橙色带黑斑。雄鸟胸口红棕，雌鸟胸口是褐色的。",
      cite: ["adw", "wiki-en"],
    },
    {
      type: "steps",
      title: "从一窝蛋到一串小鸭",
      steps: [
        { photo: "step-eggs", label: "下蛋", text: "鸭妈妈在水边的地上做窝，一窝下 9～13 颗蛋。蛋是奶白或淡绿色的。", caption: "窝里的一窝绿头鸭蛋", shoot: "只用参考照片：不要去找、不要靠近鸭窝" },
        { photo: "step-nest", label: "孵蛋", text: "鸭妈妈趴在窝里孵蛋，大约 26～28 天，小鸭子就出壳了。", caption: "趴在窝里孵蛋的鸭妈妈", shoot: "只用参考照片：看到孵蛋的鸭妈妈要马上走开" },
        { photo: "step-duckling", label: "出壳", text: "小鸭子一身毛茸茸的黄褐色绒毛，刚出壳就会游泳。", caption: "毛茸茸的绿头鸭小鸭子", shoot: "春夏湖边的小鸭子，岸上远远拍，别追" },
        { photo: "step-follow", label: "跟妈妈", text: "妈妈把小鸭子带到水里，不再回旧窝。大约 50～60 天后，小鸭子就会飞了。", caption: "鸭妈妈带着一串小鸭子游水", shoot: "鸭妈妈带着小鸭子排队游水，岸上远拍" },
      ],
      cite: ["adw", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，冬天和 4、5 月更多一些，9 月相对少。北京名录里它是「夏候鸟 / 旅鸟 / 冬候鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "褐色的鸭子，哪只是绿头鸭妈妈？",
      quiz: true,
      items: [
        {
          name: "斑嘴鸭", scientific: "Anas zonorhyncha",
          shot: { photo: "look-bzy", caption: "斑嘴鸭" },
          tells: ["黑嘴巴，嘴尖有一块亮黄色", "公鸭母鸭长得差不多，都没有绿头", "头和脖子比身子颜色浅"],
        },
        {
          name: "绿头鸭（雌）", scientific: "Anas platyrhynchos", self: true,
          shot: { photo: "look-self", caption: "雌绿头鸭" },
          tells: ["橙色的嘴，中间有一块黑斑", "翅膀上的翼镜是蓝紫色，镶着白边"],
        },
        {
          name: "赤膀鸭（雌）", scientific: "Mareca strepera",
          shot: { photo: "look-cby", caption: "雌赤膀鸭" },
          tells: ["嘴巴两边橙色，中间灰黑", "翼镜是白色的，飞起来像一块白方块", "肚子白，个子比绿头鸭小一点"],
        },
      ],
      cite: ["wiki-bzy", "adw-cby", "wiki-en"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "鸭子睡觉时会站岗吗？", a: "科学家让 4 只绿头鸭排成一排睡觉。排在两头的鸭子更常睁着朝外的那只眼睛，让半边脑子醒着放哨。", cite: ["rattenborg-1999"] },
        { q: "谁在「嘎嘎」叫？", a: "响亮的「嘎嘎」多半是鸭妈妈，她用这声音把小鸭子叫回身边。雄鸟也会叫，只是更低、更轻。", cite: ["adw", "wiki-en"] },
        { q: "家里养的鸭子是从哪儿来的？", a: "大多数品种的家鸭，祖先都是绿头鸭。", cite: ["wiki-en"] },
        { q: "爸爸会留下来带孩子吗？", a: "通常不会。配对之后，雄鸟不久就离开，由鸭妈妈孵蛋、带着小鸭子下水。", cite: ["adw"] },
        { q: "绿头鸭吃什么？", a: "水草、种子、小虫子、蚯蚓和螺，荤素都吃。", cite: ["adw"] },
        { q: "冬天绿头鸭都飞走吗？", a: "北方的常往南飞；食物和住处够的地方，也有留下来过冬的。", cite: ["adw"] },
      ],
    },
  ],
  care: "在岸上远远看，不投喂、不追赶，看到鸭窝马上走开。水边要和大人在一起，不下水。",
  nextTime: "下次数一数：一群绿头鸭里，绿头的多，还是褐色的多？",
  sources: [
    { id: "adw", title: "Anas platyrhynchos (mallard)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Anas_platyrhynchos/" },
    { id: "adw-cby", title: "Anas strepera (gadwall)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Anas_strepera/" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "rattenborg-1999", title: "Facultative control of avian unihemispheric sleep under the risk of predation", by: "Behavioural Brain Research, 1999", url: "https://doi.org/10.1016/s0166-4328(99)00070-4" },
    { id: "wiki-en", title: "Mallard", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mallard" },
    { id: "wiki-bzy", title: "Eastern spot-billed duck", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eastern_spot-billed_duck" },
  ],
  by: ["kid", "dad"],
};

export default entry;
