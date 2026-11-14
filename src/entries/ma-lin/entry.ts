import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 将马蔺（Iris lactea var. chinensis）合并在接受种名 Iris lactea（Flora of China 正名白花马蔺）下。
const entry: Entry = {
  id: "ma-lin",
  name: "马蔺",
  scientific: "Iris lactea",
  kind: "plant",
  // 不开花时易与麦冬、莎草混淆，看到蓝紫色无附属物花被片或6棱带喙长蒴果即可确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "百合纲", "天门冬目", "鸢尾科", "鸢尾属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "旱地草坡上一整丛盛开蓝紫色花朵的马蔺",
    shoot: "4～5 月在公园林下或路边拍一整丛开着蓝紫色花的马蔺，灰绿细长叶丛也拍进去",
  },
  hello: "路边又扁又韧的灰绿草丛里，春末会冒出一朵朵蓝紫色的鸢尾花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-leaf",
        caption: "密丛挺立的灰绿扁叶与蓝紫色马蔺花",
        shoot: "蹲下来平视拍一丛正在开花的马蔺：蓝紫花朵、绿色苞片和细扁灰绿叶片都清楚",
      },
      points: [
        {
          x: 0.48,
          y: 0.35,
          label: "蓝紫花被分内外两轮",
          detail: "花朵直径 5～7.5 厘米，6 片花被片分成两轮：外轮 3 片宽一些、向外弯垂并带白底紫纹，内轮 3 片窄一些、直立向上。",
          cite: ["foc-ml", "cas-ml"],
        },
        {
          x: 0.25,
          y: 0.72,
          label: "又窄又韧的灰绿扁叶",
          detail: "叶片全部从基部长出，条形扁平，宽只有 3～7 毫米、长 14～70 厘米，没有明显突出的中脉，质地十分坚韧。",
          cite: ["foc-ml", "bj-ml"],
        },
        {
          x: 0.68,
          y: 0.78,
          label: "老叶纤维包着根茎",
          detail: "贴近地面的根状茎粗壮斜伸，外面常裹着一层棕红色或紫红色的老叶残留纤维，底下扎着又深又密的细根。",
          cite: ["foc-ml", "cas-ml"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花瓣上的条纹和「花瓣状花柱」",
      shot: {
        photo: "flower-macro",
        caption: "马蔺花朵微距：带紫纹的外轮垂瓣与扁平蓝紫花柱分枝",
        shoot: "凑近拍一朵盛开的马蔺花中心，看清外轮花被片的脉纹和花心扁平的花柱分枝",
      },
      text: "马蔺花心里藏着鸢尾属的拿手好戏：中间那 3 片顶端分叉的蓝紫色小片其实不是花瓣，而是变成花瓣模样的雌蕊花柱分枝！3 根雄蕊和黄色花药就贴着藏在花柱分枝底下。",
      zoom: 2.5,
      start: [0.5, 0.48],
      cite: ["foc-ml", "cas-ml"],
    },
    {
      type: "lookalike",
      title: "公园里的鸢尾亲戚：马蔺还是黄菖蒲？",
      quiz: true,
      items: [
        {
          name: "黄菖蒲",
          scientific: "Iris pseudacorus",
          shot: { photo: "look-hcp", caption: "长在浅水里、宽剑叶开亮黄花的黄菖蒲" },
          tells: [
            "爱长在池塘和河岸浅水里，植株高大可达 1～1.5 米",
            "叶片宽达 2～3 厘米、正中有明显凸起的中肋，开鲜黄色大花",
          ],
        },
        {
          name: "马蔺",
          scientific: "Iris lactea",
          self: true,
          shot: { photo: "look-ml", caption: "旱地成丛生长、窄叶开蓝紫花的马蔺" },
          tells: [
            "长在旱地山坡、公园林下和路边，又叫「旱蒲」",
            "灰绿色叶片只有 3～7 毫米窄、没有中脉，开蓝紫色或浅蓝色花",
          ],
        },
      ],
      cite: ["foc-ml", "bj-ml", "wiki-hcp"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "马蔺 4～6 月开花，6～9 月结出有 6 条纵棱、顶端带小尖嘴的圆柱形蒴果；在中国，大家 5～6 月拍到它最多。我们是哪个月遇见它的？",
      cite: ["foc-ml"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "古人端午节包粽子为什么要用马蔺叶？",
          a: "因为马蔺叶片里的纤维又细密又结实，煮过也不容易断！北方以前包粽子，常用芦苇叶裹糯米，再拿几根柔韧的马蔺叶当天然绑绳。",
          cite: ["cas-duanwu", "bj-ml"],
        },
        {
          q: "为什么北京公园树林底下到处爱种它？",
          a: "它是北京超皮实的乡土地被植物，耐旱、耐寒、耐盐碱还耐踩踏，发达的根系能牢牢抓住泥土；昌平贺新公园就把它列为第 1 层优势草坪地被。",
          cite: ["bj-hexin", "cas-duanwu"],
        },
        {
          q: "马蔺为什么又叫「旱蒲」？",
          a: "它的窄长扁叶一丛丛立着，有点像水塘边缩小的香蒲，却偏偏能长在干巴巴的山坡、路边甚至高原沙地里，所以得了「旱蒲」和「马莲」的别名。",
          cite: ["bj-ml", "foc-ml"],
        },
        {
          q: "花谢之后它的果子长什么样？",
          a: "夏秋叶丛里会立起长 6.5～7.5 厘米的狭圆柱形蒴果，侧面有清清楚楚的 6 条纵棱，顶端还有个小尖喙，干透裂开后露出红褐色梨形种子。",
          cite: ["foc-ml", "wiki-en"],
        },
      ],
    },
  ],
  care: "只看、拍照，别去揪扯马蔺叶子试力气——扁叶边缘比较硬，猛拽容易勒伤手指；它的根茎和种子可入药但不能乱尝，千万别放进嘴里。",
  nextTime: "夏秋路过公园树下的马蔺叶丛时，低头找一找：能不能找到长着「6 条棱和小尖嘴」的圆柱形果荚？",
  sources: [
    {
      id: "foc-ml",
      title: "Iris lactea 白花马蔺",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200028182",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
    {
      id: "bj-ml",
      title: "2018年第14期花主——常见露地宿根花卉（二）：马蔺",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/bzhz/201807/t20180718_759336.shtml",
    },
    {
      id: "cas-duanwu",
      title: "又是一年端午时",
      by: "中国科学院植物研究所",
      url: "http://www.ib.cas.cn/2019gb/kepu/yuandi/201606/t20160624_4627666.html",
    },
    {
      id: "cas-ml",
      title: "马蔺（Iris lactea var. chinensis）",
      by: "中国科学院西北高原生物研究所",
      url: "https://nwipb.cas.cn/zy/zyc/202204/t20220408_6441240.html",
    },
    {
      id: "wiki-en",
      title: "Iris lactea",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Iris_lactea",
    },
    {
      id: "wiki-hcp",
      title: "Iris pseudacorus",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Iris_pseudacorus",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
