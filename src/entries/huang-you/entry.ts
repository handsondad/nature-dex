import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 俗名黄鼠狼；北京名录里是市重点保护。容易和伶鼬、香鼬、黄喉貂认混。
const entry: Entry = {
  id: "huang-you",
  name: "黄鼬",
  scientific: "Mustela sibirica",
  kind: "animal",
  // 一身橘黄或草黄、脸上深色面罩、细长身子，北京小型鼬里最好认的一种
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "食肉目", "鼬科", "鼬属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只黄鼬", shoot: "清晨或傍晚，草地、墙根或灌木边远远出现的黄鼬。和大人一起，用长焦拍侧面：脸、身子和尾巴都进画面；不追、不喂、不摸" },
  hello: "身子细长像一条软绳子，毛是橘黄或草黄色，人们常叫它黄鼠狼。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "叼着猎物回头看的黄鼬", shoot: "和大人一起，远远拍一只侧面的黄鼬：脸、身子、短腿和尾巴都在画面里。用长焦，不靠近" },
      points: [
        { x: 0.52, y: 0.27, label: "深色的脸", detail: "脸发黑，像戴了一块深色的面罩，和黄色的身子很不一样。", cite: ["kepu"] },
        { x: 0.34, y: 0.42, label: "黄褐色的背", detail: "背是浅褐到黄褐色，肚子更偏黄一点，不像伶鼬那样有一块白肚皮。", cite: ["adw", "kepu"] },
        { x: 0.62, y: 0.79, label: "蓬松的长尾巴", detail: "尾巴大约有身子一半长，毛蓬蓬的；尾尖颜色深一点，但不是黑的。", cite: ["adw"] },
        { x: 0.56, y: 0.42, label: "嘴里的猎物", detail: "它是食肉动物，主要抓老鼠这类小兽，也吃鸟、蛋和虫子。", cite: ["adw", "ioz"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的脸",
      shot: { photo: "cover", caption: "从草丛里探出头的黄鼬", shoot: "它停下来张望时，用长焦从正面远远拍：面罩、白嘴边和胡须都清楚；不靠近、不投喂" },
      text: "先把放大镜移到眼睛周围，看那块发黑的「面罩」，和身上的黄毛差多少；再往下看看这只的嘴边是什么颜色，数数它的长胡须。",
      zoom: 2.5,
      start: [0.63, 0.58],
      cite: ["kepu"],
    },
    {
      type: "steps",
      title: "它怎么在城里找吃的",
      steps: [
        { photo: "step-stand", label: "站起来", text: "它常在傍晚和夜里出来。这只在草丛里站直了身子，往四周张望。", caption: "在草丛里站起来张望的黄鼬", shoot: "傍晚在草地边静静等，远远拍它站起来的样子；不追" },
        { photo: "step-run", label: "飞快跑", text: "它的身子又细又长，跑起来很快，一个晚上能走上 8 公里。", caption: "飞快跑过马路的黄鼬", shoot: "它跑过空地时用高速快门远远拍；别追着跑" },
        { photo: "step-tree", label: "爬上树", text: "它还会爬树。北京有人在树上见过它。", caption: "北京公园里正往树上爬的黄鼬", shoot: "它在树干上时远远拍；不拍打树干、不吓它" },
      ],
      cite: ["adw", "ioz"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7～9 月拍到它多一些，12 月和 2 月最少。它多在夜里和傍晚出来。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "四只「黄鼠狼」，哪只是黄鼬？",
      quiz: true,
      items: [
        {
          name: "伶鼬", scientific: "Mustela nivalis",
          shot: { photo: "look-ly", caption: "伶鼬" },
          tells: ["只有手掌那么大", "夏天背是棕色、肚子雪白，分界很清楚", "尾巴很短，不到身子的四分之一"],
        },
        {
          name: "黄鼬", scientific: "Mustela sibirica", self: true,
          shot: { photo: "look-self", caption: "黄鼬" },
          tells: ["背和肚子都偏黄", "脸上有深色面罩", "尾巴蓬松，约身子一半长"],
        },
        {
          name: "黄喉貂", scientific: "Martes flavigula",
          shot: { photo: "look-hhd", caption: "黄喉貂" },
          tells: ["个子大得多，身子 50 厘米以上", "头是黑的，喉咙鲜黄", "长尾巴大半是黑的"],
        },
        {
          name: "香鼬", scientific: "Mustela altaica",
          shot: { photo: "look-xy", caption: "香鼬" },
          tells: ["比黄鼬小一圈", "尾巴细一些，没那么蓬"],
        },
      ],
      cite: ["kepu", "adw", "adw-mn", "adw-ma", "adw-mf"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "黄鼠狼真的爱偷鸡吗？", a: "不太爱。有位科学家检查了 4978 只黄鼬的胃，里面主要是老鼠、青蛙和虫子，只有 2 只吃过家禽。", cite: ["ioz"] },
        { q: "网上的「小黄鼠狼」是它吗？", a: "很多爆红的萌照其实是伶鼬：只有手掌大，肚子白白的。黄鼬大得多，背和肚子都偏黄。", cite: ["kepu"] },
        { q: "古人叫它什么？", a: "古书里叫它「鼪」，也叫「鼠狼」。晋代郭璞说它「能啖鼠，俗呼鼠狼」，就是会吃老鼠。", cite: ["ioz"] },
        { q: "它会存粮吗？", a: "会。它把抓到的猎物藏起来以后吃，冬天尤其靠这些存粮。", cite: ["adw"] },
        { q: "它胆子大吗？", a: "很大。它敢和比自己大的对手对峙。它真正怕的是猫头鹰和鹰这样的大猛禽。", cite: ["adw"] },
        { q: "北京城里有它吗？", a: "有。北海公园、奥林匹克森林公园和一些大学校园里都有人见过它。它还是「北京市重点」保护动物。", cite: ["ioz", "bj-list"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。它受惊会放出很臭的液体，别追。",
  nextTime: "下次和大人在傍晚静静看墙根或草地：它的肚子是白的还是黄的？",
  sources: [
    { id: "adw", title: "Mustela sibirica (Siberian weasel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Mustela_sibirica/" },
    { id: "ioz", title: "鸡年第一「案」：「黄鼠狼到底吃不吃鸡」引网络围观", by: "张劲硕、吴海峰，中国科学院动物研究所", url: "http://www.ioz.cas.cn/kxcbb/wzbj/201805/t20180507_5007535.html" },
    { id: "kepu", title: "你可能转发了一只假黄鼠狼", by: "科普中国（原载北京晨报）", url: "https://www.kepuchina.cn/article/articleinfo?business_type=100&ar_id=173862" },
    { id: "adw-mn", title: "Mustela nivalis (least weasel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Mustela_nivalis/" },
    { id: "adw-ma", title: "Mustela altaica (mountain weasel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Mustela_altaica/" },
    { id: "adw-mf", title: "Martes flavigula (yellow-throated marten)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Martes_flavigula/" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
