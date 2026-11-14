import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// iNaturalist 与《北京陆生野生动物名录》将大山雀并入苍背山雀，GBIF 对应接受名为 Parus cinereus（或三名法 Parus cinereus minor）；《中国鸟类分类与分布名录》称 Parus minor。
const entry: Entry = {
  id: "da-shan-que",
  name: "大山雀",
  scientific: "Parus cinereus minor",
  kind: "animal",
  // 北京林间黑头白脸、白肚皮正中一条黑领带的小鸟就是它，拍清脸和肚皮就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "山雀科", "山雀属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "枝头探头张望的大山雀",
    shoot: "晴天在公园或树下停住等一会儿，手机放大远拍一只停在枝头的大山雀：黑头、白脸蛋和白肚皮上的黑领带都拍清楚，别追它",
  },
  hello: "黑脑袋配两块大白脸蛋，白肚皮正中间还系着一条帅气的黑领带！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "upside-down",
        caption: "倒挂在树枝下面找虫子的大山雀",
        shoot: "远远拍一只正在树枝上爬或倒挂找食的大山雀，把黑头白脸、黄绿上背和白肚皮中间的黑领带收进画面",
      },
      points: [
        {
          x: 0.72,
          y: 0.62,
          label: "黑头配大白脸蛋",
          detail: "脑袋和下巴乌黑发亮，两边脸颊各有一大块雪白的斑，老远就能认出来。",
          cite: ["wiki-zh", "wiki-cinereus"],
        },
        {
          x: 0.6,
          y: 0.52,
          label: "肚皮上的黑领带",
          detail: "灰白色的肚皮正中间，从下巴到尾巴根画着一条黑纵纹，雄鸟的领带比雌鸟更宽更粗。",
          cite: ["wiki-zh", "wiki-cinereus"],
        },
        {
          x: 0.56,
          y: 0.64,
          label: "黄绿色的上背",
          detail: "后脖子和上背披着黄绿色羽毛，深色翅膀上还有一道清楚的白横杠。",
          cite: ["wiki-zh"],
        },
        {
          x: 0.53,
          y: 0.36,
          label: "倒挂树枝的小爪子",
          detail: "它身长只有 12～15 厘米、重十来克，脚爪抓树枝很稳，常倒挂着在树皮缝里找小虫。",
          cite: ["wiki-zh", "adw-paridae"],
        },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年十二个月都有人拍到它，冬春树叶落光时更容易看见。北京名录里它是「留鸟」，在奥北森林公园、东小口森林公园和沙河园的树林里四季都很热闹。我们会在哪个月遇见它？",
      cite: ["bj-bird-list", "bj-aobei", "bj-shahe-park"],
    },
    {
      type: "lookalike",
      title: "树枝上的小圆球，别认错",
      quiz: true,
      items: [
        {
          name: "麻雀（树麻雀）",
          scientific: "Passer montanus",
          shot: { photo: "look-ma-que", caption: "栗色头顶、白脸上有黑豆斑的麻雀" },
          tells: [
            "头顶是栗棕色的，白脸蛋上各有一块黑豆斑",
            "灰白肚皮干干净净，正中间没有黑领带",
          ],
        },
        {
          name: "大山雀",
          scientific: "Parus cinereus minor",
          self: true,
          shot: { photo: "look-da-shan-que", caption: "黑头白脸、系着黑领带的大山雀" },
          tells: [
            "头顶乌黑发亮，大白脸蛋上没有黑斑",
            "白肚皮正中间从喉咙到肚皮系着一条醒目的黑领带",
          ],
        },
      ],
      cite: ["wiki-zh", "wiki-sparrow", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "怎么一眼分出大山雀爸爸和妈妈？",
          a: "看肚皮正中间那条「黑领带」！雄鸟的黑领带又宽又粗，一直连到肚子下面；雌鸟的黑领带明显更细一些。",
          cite: ["wiki-zh", "wiki-cinereus"],
        },
        {
          q: "大山雀说话也有「先后顺序」吗？",
          a: "科学家做实验发现，它会把表示「小心四周」和「飞过来」的叫声拼成句子；要是把顺序倒过来放录音，同伴就不认账了！",
          cite: ["suzuki-2016", "wiki-cinereus"],
        },
        {
          q: "为什么公园树上挂的小木箱里会有它？",
          a: "它自己不会凿树洞，喜欢借用天然树洞、墙缝或啄木鸟的旧洞做窝，也很乐意住进人们挂在林子里的人工巢箱。",
          cite: ["wiki-zh", "wiki-cinereus"],
        },
        {
          q: "大山雀在树枝上忙着吃什么？",
          a: "春夏主要抓毛毛虫、甲虫和蜘蛛，喂宝宝时毛毛虫和蜘蛛占了大半；到了秋冬虫子少了，也会翻落叶找果实和种子吃。",
          cite: ["wiki-zh", "wiki-cinereus"],
        },
      ],
    },
  ],
  care: "在树下安静抬头看，不追赶、不摇树枝。看到人工巢箱或树洞别敲打、别探头看，免得吓跑孵蛋的大鸟。",
  nextTime: "下次遇见大山雀，先瞄一眼它的白肚皮：这条「黑领带」是宽宽的，还是细细的？",
  sources: [
    { id: "wiki-zh", title: "远东山雀（大山雀）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%BF%9C%E4%B8%9C%E5%B1%B1%E9%9B%80" },
    { id: "wiki-cinereus", title: "Cinereous tit", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cinereous_tit" },
    { id: "wiki-sparrow", title: "Eurasian tree sparrow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_tree_sparrow" },
    { id: "adw-paridae", title: "Paridae (chickadees and titmice)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Paridae/" },
    { id: "suzuki-2016", title: "Experimental evidence for compositional syntax in bird calls", by: "Nature Communications, 2016", url: "https://doi.org/10.1038/ncomms10986" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-aobei", title: "千园之城提靓生态画卷", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml" },
    { id: "bj-shahe-park", title: "全龄乐活 观鸟寻趣！昌平这两个公园成为打卡新地标", by: "首都之窗（北京市人民政府门户网站）", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/gqzn/202606/t20260622_4710246.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
