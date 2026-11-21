import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "chui-liu",
  name: "垂柳",
  scientific: "Salix babylonica",
  kind: "plant",
  // 北京还有旱柳和它垂枝的品种绦柳，很难分；iNaturalist 把旱柳并进了垂柳，GBIF 仍分开。拍到叶子和花序再定
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "杨柳科", "柳属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "湖边一棵枝条垂下来的柳树", shoot: "我们遇见的那一棵：整棵树拍进去，能看见长长的枝条垂下来" },
  hello: "河边的树把绿头发垂到水面上，风一吹就轻轻晃。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "branch-leaf", caption: "一段垂下来的枝条，后面是老树干", shoot: "靠近拍一段下垂的枝条：细枝和几片窄叶子都要清楚" },
      points: [
        { x: 0.53, y: 0.59, label: "枝条往下垂", detail: "小枝又细又长，光溜溜的没有毛，整段往下垂着。", cite: ["iplant-cl"] },
        { x: 0.6, y: 0.34, label: "又窄又长的叶", detail: "叶子像窄窄的矛头，长 9～16 厘米，叶边有细锯齿。", cite: ["iplant-cl"] },
        { x: 0.45, y: 0.5, label: "叶背浅一些", detail: "翻过来看，叶子背面是淡绿色，比正面浅。", cite: ["iplant-cl"] },
        { x: 0.85, y: 0.6, label: "灰黑的树皮", detail: "老树的树皮灰黑色，裂成一道道竖着的沟。", cite: ["iplant-cl", "mobot-cl"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看叶柄和叶边",
      shot: { photo: "twig", caption: "一根垂枝和几片叶子", shoot: "对着一根垂枝近拍，叶柄和叶边要清楚" },
      text: "叶子连在枝上的叶柄很短，大约只有半厘米到 1 厘米。再顺着叶边看，有一排细细的小锯齿。",
      zoom: 2.5,
      start: [0.43, 0.27],
      cite: ["iplant-cl"],
    },
    {
      type: "compare",
      title: "刚发芽和叶子长满",
      before: { photo: "early-spring", label: "刚发芽", caption: "北京早春，枝条上刚冒出嫩叶", shoot: "早春记住一棵垂柳和站的位置，拍下刚变绿的枝条" },
      after: { photo: "full-tree", label: "叶子长满", caption: "叶子长满以后的垂柳", shoot: "过一两个月回到同一个位置，再拍一张" },
      text: "春分前后，柳树是最早冒出嫩绿新芽的树之一，远看像一层淡绿的纱。叶子长满以后，整棵树变成垂下来的绿帘子。",
      cite: ["bj-stjz"],
    },
    {
      type: "steps",
      title: "从新芽到柳絮",
      steps: [
        { photo: "step-sprout", label: "新芽", text: "早春，垂下的枝条上冒出一个个嫩绿的小叶。", caption: "北京早春，枝条上的嫩叶", shoot: "3 月近拍枝条上刚冒出的嫩叶" },
        { photo: "step-flower", label: "开花", text: "3～4 月，花序和叶子差不多一起长出来，是一串串毛毛虫一样的葇荑花序。", caption: "枝条上一串串绿色的花序", shoot: "3～4 月近拍枝条上的花序" },
        { photo: "step-green-fruit", label: "结果", text: "雌花序结出一串小蒴果。4～5 月蒴果裂开，白色绒毛带着种子飞走，这就是柳絮。", caption: "一串青绿色的小蒴果", shoot: "4～5 月找一串快裂开、冒出白絮的蒴果" },
      ],
      cite: ["iplant-cl", "bj-kxld"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 5、8、10 月拍到它最多，12 月和 1 月最少。3～4 月去看新叶和花序，4 月上旬到 5 月上旬是北京飘柳絮的时候。我们是哪个月遇见它的？",
      cite: ["iplant-cl", "bj-fx"],
    },
    {
      type: "lookalike",
      title: "垂柳还是旱柳？",
      quiz: true,
      items: [
        {
          name: "旱柳", scientific: "Salix matsudana",
          shot: { photo: "look-han-liu", caption: "山西山沟里树冠圆圆的旱柳" },
          tells: ["枝条直立或斜着往上长，不往下垂", "叶子短一些，5～10 厘米，背面发白", "它有个枝条下垂的品种叫「绦柳」，常被当成垂柳"],
        },
        {
          name: "垂柳", scientific: "Salix babylonica", self: true,
          shot: { photo: "look-chui-liu", caption: "一根根垂下来的枝条" },
          tells: ["小枝细长，整段往下垂，像绿头发", "叶子长 9～16 厘米，背面淡绿色", "常种在水边、路边和院子里"],
        },
      ],
      cite: ["iplant-cl", "iplant-hl"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "学名为什么叫「巴比伦的」？", a: "林奈以为它是《圣经》里写到的巴比伦的柳树，就叫它 babylonica。其实它的老家在中国北方。", cite: ["mobot-cl"] },
        { q: "柳絮是什么？", a: "是雌树种子上的白绒毛，带着不到芝麻粒大的种子随风飞走。雄树不飞絮。", cite: ["bj-kxld", "bj-fx"] },
        { q: "柳絮会让人过敏吗？", a: "北京市园林绿化局说，飞絮本身致敏作用极小，和棉花絮差不多，并不是过敏源。", cite: ["bj-kxld"] },
        { q: "柳树在北京排第几？", a: "杨、柳、榆、槐、椿是北京五大乡土树种，柳树排第二。", cite: ["bj-stjz"] },
        { q: "一棵柳树能吸多少二氧化碳？", a: "北京调查过：一棵胸径 20 厘米的柳树，一年大约能吸收 281 千克二氧化碳。", cite: ["bj-stjz"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条。柳树常长在水边：和大人一起，不靠近水边玩。",
  nextTime: "春分前后去看看：柳树是不是比旁边别的树先变绿？",
  sources: [
    { id: "iplant-cl", title: "垂柳 Salix babylonica", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Salix%20babylonica" },
    { id: "iplant-hl", title: "旱柳 Salix matsudana", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Salix%20matsudana" },
    { id: "mobot-cl", title: "Salix babylonica", by: "Missouri Botanical Garden Plant Finder", url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?kempercode=c148" },
    { id: "bj-fx", title: "治理杨柳飞絮 共创宜居环境", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/zlylfxgcyjhj/index.shtml" },
    { id: "bj-kxld", title: "科学理性对待杨柳飞絮", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/zlylfxgcyjhj/ylfxkpzs/202403/t20240308_3583528.shtml" },
    { id: "bj-stjz", title: "杨柳树生态价值", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/zlylfxgcyjhj/ylfxkpzs/202403/t20240308_3583529.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;