import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// Flora of China 仍用异名 Sophora japonica，这里按 GBIF 接受名写 Styphnolobium japonicum。
const entry: Entry = {
  id: "guo-huai",
  name: "国槐",
  pinyin: "guó huái",
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
      shot: { photo: "branch-pods", caption: "挂着青豆荚的一根枝条", shoot: "8～10 月拍一根低处的枝条：一整片叶子和下面垂着的几串豆荚都在画面里" },
      points: [
        { x: 0.66, y: 0.45, label: "一片叶子上排着很多小叶", detail: "一片叶子长 15～25 厘米，上面排着 9～15 片小叶。数一数有几片？", cite: ["foc-guohuai"] },
        { x: 0.82, y: 0.67, label: "小叶顶端尖尖的", detail: "小叶是卵形的，越往顶端越窄，最尖上还有一个小尖头。", cite: ["foc-guohuai"] },
        { x: 0.31, y: 0.4, label: "豆荚像一串珠子", detail: "豆荚在种子和种子之间缩得细细的，一节一节，肉肉的，熟了也不裂开。", cite: ["foc-guohuai"] },
        { x: 0.42, y: 0.8, label: "一大串长在枝头", detail: "花一大簇长在枝条顶上，能有 30 厘米长，所以豆荚也是一大串一大串挂着。", cite: ["foc-guohuai"] },
      ],
    },
    {
      type: "steps",
      title: "从花苞到一串串豆荚",
      steps: [
        { photo: "step-bud", label: "花苞", text: "7 月，枝头冒出一大簇绿色的小花苞，像一粒粒小米。", caption: "一簇花苞，有几朵已经开了", shoot: "7 月开花前，拍一簇绿色的花苞" },
        { photo: "step-bloom", label: "开花", text: "小花白色或乳黄色，像一只张开翅膀的小蝴蝶，上面那片花瓣最大。", caption: "一朵开着的槐花", shoot: "凑近拍一朵开着的小花，从正面拍" },
        { photo: "step-green", label: "青豆荚", text: "花谢以后，8～10 月结出绿色的豆荚，有几颗种子就鼓起几节。", caption: "一串串绿色的豆荚", shoot: "9 月拍一串绿色的豆荚，能看出一节一节" },
        { photo: "step-winter", label: "变干", text: "豆荚慢慢变黄、变皱，可它不会裂开，种子在里面晒干成黑褐色。", caption: "叶子落光后枝头的干豆荚", shoot: "冬天叶子落光后，拍枝头还挂着的干豆荚" },
      ],
      cite: ["foc-guohuai"],
    },
    {
      type: "magnifier",
      title: "凑近看一串「珠子」",
      shot: { photo: "pods-macro", caption: "落在地上的一串豆荚", shoot: "捡起来不如低头看：拍地上一整串豆荚的特写，能看清一节一节" },
      text: "每鼓起来的一节里藏着一颗种子，节和节之间缩得细细的。豆荚摸起来肉肉的，不像刺槐的豆荚那样扁扁薄薄。",
      zoom: 2.5,
      start: [0.73, 0.5],
      cite: ["foc-guohuai", "foc-cihuai"],
    },
    {
      type: "compare",
      title: "夏天开花，秋天挂荚",
      before: { photo: "same-flower", label: "夏天", caption: "满树乳白色的小花", shoot: "7～8 月选一棵好找的国槐，记住站的位置，拍它开花的样子" },
      after: { photo: "same-pods", label: "秋天", caption: "挂满绿色的豆荚", shoot: "9～10 月回到同一个位置、同一个角度，再拍一张" },
      text: "国槐 7、8 月开花，8～10 月结出豆荚。拍的时候记下日期，算算花谢了多久，豆荚就挂满了枝头。",
      cite: ["foc-guohuai"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "这里的数字很小：城里的槐树多是人栽的，在 iNaturalist 上常被标成「栽培」，不算在这里。能看出 5～10 月拍到的多一些，冬天几乎没有。我们是哪个月遇见它的？",
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
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "北京的市树是什么？", a: "有两种：国槐和侧柏。当年大家投票时，推荐国槐的选票占了 46%，排第一。1987 年，北京定下了这两种市树。", cite: ["bj-trees"] },
        { q: "树上吊着的绿虫子是谁？", a: "是槐尺蠖的幼虫，外号“吊死鬼”。它会吐一根丝，把自己吊在半空，还能随风荡到别处去。", cite: ["bj-chihuo"] },
        { q: "北京的老树里，国槐多吗？", a: "北京有 4 万多株古树名木，主要是侧柏、油松、桧柏和国槐这四种，加起来占九成以上。", cite: ["bj-gushu"] },
        { q: "国槐和刺槐，谁先开花？", a: "刺槐先开，4～6 月就开了。国槐要等到 7、8 月，花是白色或乳黄色的。", cite: ["foc-guohuai", "foc-cihuai"] },
        { q: "国槐的芽藏在哪儿？", a: "藏在叶柄底下！叶柄的底部鼓起来，把芽包在里面，从外面看不到。", cite: ["foc-guohuai"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条。落下的花、豆荚和种子不要放进嘴里，路边的树可能打过药。",
  nextTime: "冬天叶子落光以后，树上还挂着一串串豆荚吗？下次路过去看看。",
  sources: [
    { id: "foc-guohuai", title: "Sophora japonica（= Styphnolobium japonicum）槐", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012322" },
    { id: "foc-cihuai", title: "Robinia pseudoacacia 刺槐", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012304" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
    { id: "bj-chihuo", title: "槐尺蠖（防治检疫常识）", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/sdlh/yhsw/yhswfz/201803/t20180301_118065.shtml" },
    { id: "bj-gushu", title: "首都古树名木保护的前世今生", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202402/t20240207_3558912.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
