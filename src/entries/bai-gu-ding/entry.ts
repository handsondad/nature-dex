import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-gu-ding",
  name: "白骨顶",
  scientific: "Fulica atra",
  kind: "animal",
  // 全身石板黑、嘴巴和额甲雪白的水鸟，拍清脑袋就能一眼和黑水鸡区分开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "鹤形目", "秧鸡科", "骨顶属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "水面上顶着雪白额甲游动的白骨顶",
    shoot: "在沙河水库、沙河园或公园湖岸上远远拍一只白骨顶：石板黑的身体、雪白的嘴巴和额头白盾牌都拍清楚；站稳岸边，别下水",
  },
  hello: "一身石板黑羽毛配一块雪白额头盾牌，大脚趾两边还镶着荷叶边一样的瓣蹼！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "mag-feet",
        caption: "游动时露出白额甲、红眼睛与脚趾的白骨顶",
        shoot: "当白骨顶游到浅水边或走上岸边草地时，远拍它的全身和脚趾：雪白额甲、红眼睛和一瓣一瓣的脚蹼都收进画面",
      },
      points: [
        {
          x: 0.7,
          y: 0.34,
          label: "雪白的嘴和额甲",
          detail: "尖嘴是白色的，往额头上连着一块光滑无毛的雪白「小盾牌」（额甲），英文谚语 bald as a coot 就来自它。",
          cite: ["wiki-en", "wiki-zh"],
        },
        {
          x: 0.63,
          y: 0.32,
          label: "红宝石似的小眼睛",
          detail: "乌黑发亮的脑袋上嵌着一双深红色眼睛，离近一点看特别醒目。",
          cite: ["wiki-en"],
        },
        {
          x: 0.42,
          y: 0.45,
          label: "全身石板黑羽毛",
          detail: "身长 36～38 厘米，全身深灰黑色，身体侧面没有白条纹，公鸟和母鸟长得一个样。",
          cite: ["wiki-en", "wiki-zh"],
        },
        {
          x: 0.25,
          y: 0.56,
          label: "露出水面的黄绿瓣蹼脚",
          detail: "它的脚趾没有像鸭子那样连成整张皮，而是每根长脚趾两边长出一瓣一瓣宽叶，划水有劲，上岸踩泥草也不滑。",
          cite: ["wiki-en", "adw-coot"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看水下的荷叶边大脚",
      shot: {
        photo: "paddling-feet",
        caption: "水下张开的灰绿色瓣蹼",
        shoot: "等它上岸或游过清浅水面时，放大拍清一根根长脚趾两侧的瓣蹼",
      },
      text: "滑动放大镜看看它水下的左脚：每根脚趾两侧都长着一节节圆弧形皮瓣，叫「瓣蹼」。往后蹬水时皮瓣张开像船桨，往前收脚时又顺着水合拢减少阻力。",
      zoom: 2.6,
      start: [0.36, 0.64],
      cite: ["wiki-en", "adw-coot"],
    },
    {
      type: "steps",
      title: "从红头绒球到白盾成鸟",
      steps: [
        {
          photo: "step-chick",
          label: "红头雏鸟",
          caption: "脑袋长着鲜红与橙黄绒毛的白骨顶雏鸟",
          text: "刚出壳的小白骨顶跟爸妈一点不像！它身披黑绒毛，额甲和嘴巴却是鲜红的，脑袋和脖子周围还炸着一圈橙红色的长绒毛。",
        },
        {
          photo: "step-adult",
          label: "白盾成鸟",
          caption: "换上乌黑羽毛和雪白额甲的成年白骨顶",
          text: "长到 3～4 个月大，它会换上石板黑的成鸟羽毛；等到大约一岁大时，额头那块标志性的雪白额甲就完全长成啦。",
        },
      ],
      cite: ["wiki-en", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，全年都能拍到它，秋冬季节湖面上常聚成好几十只的大群，1、2 月记录最多。北京名录里它是「夏候鸟 / 旅鸟」，在昌平沙河水库、沙河园和各大湿地公园的开阔水面成群游弋。我们会在哪个月遇见它？",
      cite: ["bj-bird-list", "bj-shahe-res", "bj-shahe-park", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "白盾牌还是红盾牌？",
      quiz: true,
      items: [
        {
          name: "黑水鸡",
          scientific: "Gallinula chloropus",
          shot: { photo: "look-hei-shui-ji", caption: "红额甲、黄嘴尖、身侧有白纹的黑水鸡" },
          tells: [
            "额甲和嘴巴鲜红，只有嘴尖蘸了一点黄，身体侧面有一道白线",
            "黄绿色的细长脚趾两侧没有宽宽的瓣蹼",
          ],
        },
        {
          name: "白骨顶",
          scientific: "Fulica atra",
          self: true,
          shot: { photo: "look-bai-gu-ding", caption: "雪白额甲白嘴、全身石板黑的白骨顶" },
          tells: [
            "额甲和嘴巴都是雪白色的，全身石板黑，身侧和尾下都没有白斑纹",
            "灰绿色的脚趾两边长着宽宽的荷叶边「瓣蹼」",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-moorhen", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "白骨顶起飞时为什么要在水面上「助跑」？",
          a: "它体重有七八百克，翅膀却偏短圆，没办法原地拔起。起飞或追赶对手时，它得扇着翅膀在水面上啪啪踩水狂奔好长一段，溅起一串白水花！",
          cite: ["wiki-en", "adw-coot"],
        },
        {
          q: "白骨顶是鸭子吗？",
          a: "不是哦！鸭子属于雁形目鸭科，脚趾间连着整片鸭蹼；白骨顶属于鹤形目秧鸡科，和黑水鸡是亲戚，脚上是分开一瓣一瓣的瓣蹼。",
          cite: ["wiki-en", "bj-bird-list"],
        },
        {
          q: "它在湖里和岸边都吃些什么？",
          a: "它是个不挑食的杂食家：既会像小潜艇一样一头扎进水里捞水草、水绵藻，也会上岸啄青草和草籽，还会抓水生小虫、小螺和小虾。",
          cite: ["wiki-en", "adw-coot"],
        },
        {
          q: "它以前为什么还叫「骨顶鸡」？",
          a: "旧书里常叫它骨顶鸡或白冠鸡；2022 年《中国鸟类名录》10.0 版把它的正式中文名改成了「白骨顶」，一听就记住了它雪白的脑门顶！",
          cite: ["wiki-zh"],
        },
      ],
    },
  ],
  care: "在岸边护栏后远远观赏，不投喂面包零食，也不轰赶岸边吃草的白骨顶。水库和湖岸水深坡滑，一定牵紧大人，不下水。",
  nextTime: "下次在湖边碰到上岸吃草的白骨顶，仔细瞧瞧它抬起的脚：能不能数清脚趾两边像荷叶边一样的瓣蹼？",
  sources: [
    { id: "wiki-en", title: "Eurasian coot", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_coot" },
    { id: "wiki-zh", title: "骨顶鸡（白骨顶）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E9%AA%A8%E9%A1%B6%E9%B8%A1" },
    { id: "wiki-moorhen", title: "Common moorhen", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_moorhen" },
    { id: "adw-coot", title: "Fulica americana (American coot)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Fulica_americana/" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-shahe-res", title: "北京水库湿地推荐观鸟地——沙河水库", by: "京报网", url: "https://news.bjd.com.cn/2024/05/06/10764985.shtml" },
    { id: "bj-shahe-park", title: "全龄乐活 观鸟寻趣！昌平这两个公园成为打卡新地标", by: "首都之窗（北京市人民政府门户网站）", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/gqzn/202606/t20260622_4710246.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
