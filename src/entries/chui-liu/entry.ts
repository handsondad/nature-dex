import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "chui-liu",
  name: "垂柳",
  scientific: "Salix babylonica",
  kind: "plant",
  // 河边还有旱柳、馒头柳：拍到细长下垂的枝条和窄叶子再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "杨柳科", "柳属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵垂柳", shoot: "我们遇见的那一棵：整棵树拍进去，能看见长长的枝条垂下来" },
  hello: "河边的树把绿头发垂到水面上，风一吹就轻轻晃。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "branch-leaf", caption: "垂下来的枝条和叶子", shoot: "靠近拍一段下垂的枝条：细枝和几片窄叶子都要清楚" },
      points: [
        { x: 0.5, y: 0.15, label: "枝条往下垂", detail: "小枝细细的、光溜溜的，黄褐色或略带紫色，整段往下垂着。", cite: ["foc-cl"] },
        { x: 0.55, y: 0.45, label: "叶子又窄又长", detail: "叶子像窄窄的矛头，长 9～16 厘米，宽大约只有 0.5～1.5 厘米。", cite: ["foc-cl"] },
        { x: 0.35, y: 0.55, label: "叶边有细锯齿", detail: "叶子两边有细细的锯齿，尖儿拖得长长的。", cite: ["foc-cl"] },
        { x: 0.7, y: 0.7, label: "短短的叶柄", detail: "叶柄只有大约半厘米到一厘米长。", cite: ["foc-cl"] },
      ],
    },
    {
      type: "lookalike",
      title: "垂柳还是旱柳？",
      quiz: true,
      items: [
        {
          name: "旱柳", scientific: "Salix matsudana",
          shot: { photo: "look-han-liu", caption: "枝条比较直立的柳树" },
          tells: ["小枝多斜着往上长，不怎么垂到地面", "北京路边、院子里也很常见", "有人叫它馒头柳的，树冠更圆"],
        },
        {
          name: "垂柳", scientific: "Salix babylonica", self: true,
          shot: { photo: "look-chui-liu", caption: "枝条垂下来的垂柳" },
          tells: ["小枝细长，整段往下垂，像绿头发", "喜欢长在水边、河边", "叶子又窄又长，叶边有细锯齿"],
        },
      ],
      cite: ["foc-cl", "foc-hl", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 5、8、10 月拍到它较多。大约 3～4 月开花，春天枝上会挂出毛茸茸的花序。我们是哪个月遇见它的？",
      cite: ["foc-cl"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它能长多高？", a: "能长到大约 18 米高。树皮灰黑色，老了会裂出不规则的沟。", cite: ["foc-cl"] },
        { q: "垂柳开花吗？", a: "开！不过花很小，挤在毛茸茸的穗子上（葇荑花序）。雄花穗大约 1.5～3 厘米，雌花穗大约 2～6 厘米。", cite: ["foc-cl"] },
        { q: "什么时候开花、结果？", a: "大约 3～4 月开花，4～5 月结果。果子小小的，只有 3～4 毫米。", cite: ["foc-cl"] },
        { q: "它从哪儿来？", a: "原产中国北方，后来沿着丝绸之路传到欧洲和亚洲别的地方。", cite: ["wiki-zh"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条。河边和大人一起，不要靠近水边玩。",
  nextTime: "站在树下仰头看：所有小枝是不是都往下垂？和旁边别的柳树比一比。",
  sources: [
    { id: "foc-cl", title: "Salix babylonica 垂柳", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200005760" },
    { id: "foc-hl", title: "Salix matsudana 旱柳", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200005705" },
    { id: "wiki-zh", title: "垂柳", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%9E%82%E6%9F%B3" },
    { id: "wiki-en", title: "Salix babylonica", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Salix_babylonica" },
  ],
  by: ["kid", "dad"],
};

export default entry;
