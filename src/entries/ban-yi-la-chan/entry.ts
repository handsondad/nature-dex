import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ban-yi-la-chan",
  name: "斑衣蜡蝉",
  scientific: "Lycorma delicatula",
  kind: "animal",
  // 成虫灰褐色前翅上的黑点、红色后翅，若虫黑底白点或红底黑白斑，对上就能确认
  certainty: "sure",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "半翅目", "蜡蝉科", "斑衣蜡蝉属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只斑衣蜡蝉", shoot: "我们遇见的那一只：停在树干上的成虫或若虫，从侧面拍，翅上的黑点或身上的白点清楚；只拍不抓" },
  hello: "小时候黑底白点，后来换成红身子，长大后披上灰褐色带黑点的翅膀。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-rest", caption: "停在树干上的成虫", shoot: "7～10 月，在臭椿等树干上找一只停着的成虫，从正上方拍，头朝上，整对前翅和翅尖都在画面里" },
      points: [
        { x: 0.5, y: 0.12, label: "黑色的头", detail: "头是黑褐色到黑色的，和灰褐色的翅膀分得很清楚。", cite: ["adw-ld", "wiki-en"] },
        { x: 0.42, y: 0.42, label: "前翅上的黑点", detail: "灰褐色的前翅上散着二十多个黑点。", cite: ["bjnews-ld", "adw-ld"] },
        { x: 0.6, y: 0.58, label: "透出来的红", detail: "停着时，鲜红的后翅藏在半透明的前翅下面，整只虫看起来带一点红。", cite: ["wiki-en", "bjnews-ld"] },
        { x: 0.5, y: 0.86, label: "翅尖的“砖墙”", detail: "前翅末端是一格一格的黑色短条纹，有人说像砖墙的砖缝。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "steps",
      title: "黑点点、红衣服、灰翅膀",
      steps: [
        { photo: "step-eggs", label: "卵块", text: "卵一粒粒排得整整齐齐，外面盖着一层蜡，常在树干朝南的一面过冬，看起来像一块泥巴。", caption: "树干上的卵块", shoot: "冬天到早春，在臭椿等树干朝南的一面找盖着灰黄色蜡的卵块，拍清楚，不刮不抠" },
        { photo: "step-black", label: "黑若虫", text: "4 月底到 5 月孵出来。1～3 龄的若虫全身黑色，点缀着许多白点，没有翅膀。", caption: "黑底白点的小若虫", shoot: "5～6 月在臭椿嫩枝、叶背上找黑底白点的小若虫，微距拍；它一受惊就蹦，慢慢靠近" },
        { photo: "step-red", label: "红若虫", text: "4 龄时换上鲜红的身子，还带着黑白斑纹。若虫后腿有劲，一受惊就蹦走。", caption: "红身子的大若虫", shoot: "6～7 月找红身子、带黑白斑的大若虫，微距拍" },
        { photo: "step-adult", label: "成虫", text: "6 月中旬起变成成虫，长出翅膀，一直活动到 10 月下旬。它不经过蛹，是不完全变态的昆虫。", caption: "长出翅膀的成虫", shoot: "7～10 月树干上停着的成虫，从侧面拍，翅上的黑点清楚" },
      ],
      cite: ["bj-ld", "bjnews-ld", "adw-ld", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6～10 月拍到它最多，7 月是高峰；12 月到第二年 3 月很少有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么叫它“椿蹦蹦”？", a: "它的若虫后腿有劲，稍一惊动就蹦走；它又爱待在臭椿上。北京人还叫它“花姑娘”“花大姐”。", cite: ["bjnews-ld", "adw-ld"] },
        { q: "树下黏黏的是什么？", a: "是它的便便，叫“蜜露”，是过滤树汁后排出的糖水。蜜露本身没毒，但会招来蚂蚁，还会让叶子上长黑霉。", cite: ["bjnews-ld", "adw-ld"] },
        { q: "它飞得好吗？", a: "飞不远。它更会跳，翅膀主要帮它跳得更远。人走近时，它也常常不飞走。", cite: ["wiki-en", "adw-ld", "bjnews-ld"] },
        { q: "飞起来为什么一下变红了？", a: "停着时，后翅藏在前翅下面。一张开，红、白、黑三色的后翅和黄黑条纹的肚子才露出来。", cite: ["adw-ld"] },
      ],
    },
  ],
  care: "只看不抓，别用手拍。树下的蜜露黏黏的，沾到了用清水洗掉；看到很多只聚在树上，可以告诉园林部门。",
  nextTime: "找一棵臭椿看看：树干上的斑衣蜡蝉，是头朝上停着，还是头朝下？",
  sources: [
    { id: "bj-ld", title: "北京林业昆虫——斑衣蜡蝉", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/sdlh/yhsw/yhswfz/202207/t20220711_2768623.shtml" },
    { id: "bjnews-ld", title: "京城树上斑衣蜡蝉增多，排泄物黏脚怎么办？", by: "新京报，2026", url: "https://www.bjnews.com.cn/detail/1785314959129002.html" },
    { id: "adw-ld", title: "Lycorma delicatula", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Lycorma_delicatula/" },
    { id: "wiki-en", title: "Spotted lanternfly", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Spotted_lanternfly" },
  ],
  by: ["kid", "dad"],
};

export default entry;
