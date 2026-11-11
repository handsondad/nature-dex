import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "guo-huai",
  name: "国槐",
  scientific: "Styphnolobium japonicum",
  kind: "plant",
  // 刺槐也是羽状复叶、开白花，拍到小叶尖、花序或念珠状的豆荚再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "豆目", "豆科", "槐树属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵国槐", shoot: "我们遇见的那一棵：整棵树连同树干拍进去，7～8 月开花或秋天挂满豆荚时最好认" },
  hello: "七八月它才开花，满树乳白色的小花，豆荚像一串串珠子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "branch-pods", caption: "挂着豆荚的一根枝条", shoot: "8～10 月拍一根低处的枝条：上半边是一整片叶子，下面垂着几串豆荚，绿色的小枝也拍进去" },
      points: [
        { x: 0.35, y: 0.25, label: "一片叶子上排着很多小叶", detail: "一片叶子长 15～25 厘米，上面排着 9～15 片小叶。数一数有几片？", cite: ["foc-guohuai"] },
        { x: 0.6, y: 0.15, label: "小叶顶端尖尖的", detail: "小叶是卵形的，越往顶端越窄，最尖上还有一个小尖头。", cite: ["foc-guohuai"] },
        { x: 0.2, y: 0.55, label: "绿色的小枝", detail: "今年新长出来的小枝是绿色的，光溜溜的。", cite: ["foc-guohuai"] },
        { x: 0.65, y: 0.75, label: "豆荚像一串珠子", detail: "豆荚在种子和种子之间缩得细细的，一节一节，肉肉的，熟了也不裂开。", cite: ["foc-guohuai"] },
      ],
    },
    {
      type: "compare",
      title: "同一根枝条，夏天和秋天",
      before: { photo: "same-flower", label: "夏天", caption: "开满小花", shoot: "7～8 月选一根好找的低枝，记住站的位置，拍它开花的样子" },
      after: { photo: "same-pods", label: "秋天", caption: "挂满豆荚", shoot: "9～10 月回到同一个位置、同一个角度，再拍一张" },
      text: "国槐 7、8 月开花，8～10 月结出豆荚。拍的时候记下日期，算算花谢了多久，豆荚就挂满了枝头。",
      cite: ["foc-guohuai"],
    },
    {
      type: "lookalike",
      title: "国槐还是刺槐？",
      quiz: true,
      items: [
        {
          name: "刺槐", scientific: "Robinia pseudoacacia",
          shot: { photo: "look-ci-huai", caption: "一串串垂下来的白花" },
          tells: ["枝上长着尖刺，最长约 2 厘米", "4～6 月开花，白花一串串往下垂，很香", "小叶顶端圆圆的，常凹进去一点", "豆荚是扁扁的长条"],
        },
        {
          name: "国槐", scientific: "Styphnolobium japonicum", self: true,
          shot: { photo: "look-guo-huai", caption: "枝头一大簇乳白色的小花" },
          tells: ["7～8 月才开花，一大簇长在枝条顶上", "小叶顶端尖尖的", "豆荚一节一节，像一串珠子"],
        },
      ],
      cite: ["foc-guohuai", "foc-cihuai"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "这里的数字很小：城里的槐树多是人栽的，在 iNaturalist 上常被标成「栽培」，不算在这里。能看出 5～10 月拍到的多一些，冬天几乎没有。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "北京的市树是什么？", a: "有两种：国槐和侧柏。1987 年，北京市人民代表大会通过决定，把它们定为北京的市树。", cite: ["bj-trees"] },
        { q: "国槐和刺槐，谁先开花？", a: "刺槐先开，4～6 月就开了。国槐要等到 7、8 月，花是白色或乳黄色的。", cite: ["foc-guohuai", "foc-cihuai"] },
        { q: "一串豆荚里有几颗种子？", a: "1～6 颗。种子刚长好时是黄绿色的，晒干以后变成黑褐色。", cite: ["foc-guohuai"] },
        { q: "国槐的芽藏在哪儿？", a: "藏在叶柄底下！叶柄的底部鼓起来，把芽包在里面，从外面看不到。", cite: ["foc-guohuai"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条。落下的花、豆荚和种子不要放进嘴里，路边的树可能打过药。",
  nextTime: "冬天叶子落光以后，树上还挂着一串串豆荚吗？下次路过去看看。",
  sources: [
    { id: "foc-guohuai", title: "Styphnolobium japonicum 槐", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012322" },
    { id: "foc-cihuai", title: "Robinia pseudoacacia 刺槐", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012304" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
