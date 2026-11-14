import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "meng-gu-tu",
  name: "蒙古兔",
  scientific: "Lepus tolai",
  kind: "animal",
  // 《北京陆生野生动物名录》里唯一一种野生兔科动物就是蒙古兔，看到耳尖带黑斑、长后腿的野兔就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "兔形目", "兔科", "兔属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "草丛空地上竖起黑尖长耳朵的蒙古兔",
    shoot: "清晨或傍晚在郊野公园留野草丛边安静慢走，远远用长焦或手机放大拍下它的黑耳尖、黄褐毛色和长后腿，千万别追赶或钻进密灌丛",
  },
  hello: "长耳朵尖上点着一块黑斑，不挖深地洞住，刚出生的小兔睁着眼、长满毛就能跑！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "side-view",
        caption: "趴在石砾枯草间警惕张望的蒙古兔",
        shoot: "远远拍一只停下来竖耳听动静的蒙古兔侧面：黑耳尖、浅色眼圈、黄褐背毛和黑白尾巴都在画面里",
      },
      points: [
        {
          x: 0.45,
          y: 0.12,
          label: "耳尖一块醒目黑斑",
          detail: "耳朵长达 8～12 厘米，顶端各有一块乌黑的斑，像戴了黑耳套，是认出它的头号记号。",
          cite: ["wiki-en", "adw-leporidae"],
        },
        {
          x: 0.56,
          y: 0.45,
          label: "像枯草一样的黄褐毛色",
          detail: "体长 40～59 厘米，背毛沙黄或黄褐色带深色细纹，肚皮纯白；趴在草窝里一动不动时，简直和枯草地融为一体。",
          cite: ["wiki-en", "adw-leporidae"],
        },
        {
          x: 0.66,
          y: 0.66,
          label: "弹簧似的大长后腿",
          detail: "后脚长 11～12.7 厘米，后腿比前腿长而有力得多，一受惊就能在开阔草地上飞快奔跑跳跃。",
          cite: ["wiki-en", "adw-leporidae"],
        },
        {
          x: 0.78,
          y: 0.53,
          label: "黑面孔白肚皮的短尾巴",
          detail: "毛茸茸的小短尾巴上面有一道宽宽的黑褐色条纹，下面则是雪白色的。",
          cite: ["wiki-en"],
        },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "蒙古兔不冬眠，一年四季都在野外活动；中国境内的观察记录在 5～8 月最多，多半因为夏天草木茂盛、清晨傍晚出门的人也多。它在《北京陆生野生动物名录》和国家「三有」保护名录中，常躲在奥北森林公园留野的「自然核」、东小口森林公园灌草丛和沙河水库沿岸荒滩里。我们会在哪个月撞见它？",
      cite: ["bj-mammal-list", "wiki-zh", "bj-aobei", "bj-shahe-res"],
    },
    {
      type: "lookalike",
      title: "野外的蒙古兔，不是跑丢的家兔！",
      quiz: true,
      items: [
        {
          name: "穴兔（家兔的祖先）",
          scientific: "Oryctolagus cuniculus",
          shot: { photo: "look-xue-tu", caption: "耳朵较短、喜欢挖洞群居的欧洲穴兔" },
          tells: [
            "老家在欧洲西南部，爱挖深深的地下洞穴（兔窟）成群生活，全世界宠物兔和家兔都是它的后代",
            "耳朵和后腿相对较短，刚出生的兔宝宝光溜溜、闭着眼，要靠妈妈在洞里照顾",
          ],
        },
        {
          name: "蒙古兔（草兔）",
          scientific: "Lepus tolai",
          self: true,
          shot: { photo: "look-meng-gu-tu", caption: "大长后腿、黑耳尖、在沙草地奔跑的蒙古兔" },
          tells: [
            "地道的本土野生「旷兔（hare）」，平时不挖深地洞，只在地面草丛里扒个浅坑（草窝）歇脚",
            "长耳朵尖有一块黑斑，后腿修长善跑；小兔一出生就睁着眼、长满毛，过一会儿就能跑",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-hare", "wiki-rabbit", "adw-rabbit"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "家里的宠物白兔，是蒙古兔变来的吗？",
          a: "不是！全世界所有品种的家兔和宠物兔，唯一祖先都是原产欧洲西南部的穴兔（Oryctolagus cuniculus）。蒙古兔属于兔属的「旷兔」，从来没有被驯化成家兔。",
          cite: ["wiki-hare", "wiki-rabbit", "adw-rabbit"],
        },
        {
          q: "为什么刚出生的蒙古兔宝宝睁着眼就能跑？",
          a: "因为它不像穴兔那样有深地洞保护，妈妈一胎生 2～6 只宝宝在地面浅草窝里。小旷兔天生早熟，一出娘胎就披满绒毛、睁大眼睛，很快就能自己躲藏。",
          cite: ["wiki-en", "wiki-hare"],
        },
        {
          q: "白天蒙古兔都躲在哪儿睡觉？",
          a: "它主要在黄昏和夜里出来吃草、草籽、树皮和嫩根；白天就用前爪在灌丛或草墩下扒一个浅浅的土坑（叫「草窝」），贴地缩在里面靠保护色隐身。",
          cite: ["wiki-en", "adw-leporidae"],
        },
        {
          q: "为什么叫「蒙古兔」？北京的野兔都是它吗？",
          a: "它的拉丁种名 tolai 就来自蒙古语里对野兔的称呼！以前常把它叫「草兔」，《北京陆生野生动物名录》收录的本土野生兔科动物只有蒙古兔这一种。",
          cite: ["wiki-en", "wiki-zh", "bj-mammal-list"],
        },
      ],
    },
  ],
  care: "受保护的本土野生动物！远远看，不追赶、不摸、更别去抱草丛里一动不动的小野兔——兔妈妈并没有丢下它，天黑就会回来喂奶。",
  nextTime: "冬天雪后和大人去郊野公园散步时，低头看看雪地上有没有「前头两个大长印、后头两个小圆印」的野兔脚印？",
  sources: [
    { id: "wiki-en", title: "Tolai hare", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tolai_hare" },
    { id: "wiki-zh", title: "蒙古兔", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%92%99%E5%8F%A4%E5%85%94" },
    { id: "wiki-hare", title: "Hare", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hare" },
    { id: "wiki-rabbit", title: "European rabbit", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/European_rabbit" },
    { id: "adw-leporidae", title: "Leporidae (hares and rabbits)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Leporidae/" },
    { id: "adw-rabbit", title: "Oryctolagus cuniculus (European rabbit)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Oryctolagus_cuniculus/" },
    { id: "bj-mammal-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
    { id: "bj-aobei", title: "千园之城提靓生态画卷", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml" },
    { id: "bj-shahe-res", title: "北京水库湿地推荐观鸟地——沙河水库", by: "京报网", url: "https://news.bjd.com.cn/2024/05/06/10764985.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
