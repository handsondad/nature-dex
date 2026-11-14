import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-ji-ling",
  name: "白鹡鸰",
  scientific: "Motacilla alba",
  kind: "animal",
  // 黑白灰三色、长尾巴上下点动、迈小碎步快走的小鸟，拍清脸胸和尾巴就能认准
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鹡鸰科", "鹡鸰属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "空地上停步张望的白鹡鸰",
    shoot: "雨后公园草坪或湖边浅滩上，蹲下来远远拍一只正在地上走的白鹡鸰：黑白灰羽毛和细长尾巴都收进画面；岸边有大人陪着，别下水",
  },
  hello: "不爱蹦着走，偏爱迈着小碎步快跑；一停下来，长尾巴就一上一下点个不停。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "side-view",
        caption: "站在高处露出身侧与黑胸兜的白鹡鸰",
        shoot: "远远拍一只白鹡鸰的侧面：白脑门、黑胸兜、灰黑后背和细长尾巴都在画面里",
      },
      points: [
        {
          x: 0.65,
          y: 0.25,
          label: "白脑门配黑帽顶",
          detail: "前额和脸蛋雪白，头顶戴着一顶小黑帽，衬得小黑眼睛格外精神。",
          cite: ["wiki-en"],
        },
        {
          x: 0.64,
          y: 0.37,
          label: "胸前一块黑围兜",
          detail: "下巴到胸口有一块醒目的黑色「小围兜」；到了冬天，下巴和喉咙常会换上更多白羽。",
          cite: ["wiki-en"],
        },
        {
          x: 0.5,
          y: 0.45,
          label: "黑白灰三色衣裳",
          detail: "后背灰色或黑色，翅膀上有白斑，肚皮雪白，全身没有亮黄色羽毛。",
          cite: ["wiki-en", "adw-motacillidae"],
        },
        {
          x: 0.25,
          y: 0.56,
          label: "不停点动的长尾巴",
          detail: "身长约 16.5～21 厘米，却拖着一条黑白相间的长尾巴，停下时总是一上一下摆动，老辈人叫它「点水雀」。",
          cite: ["wiki-en", "adw-motacillidae"],
        },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年四季都有人拍到它。北京名录里它是「旅鸟 / 夏候鸟」：春暖花开和秋高气爽时，在霍营公园湖边、沙河水库浅滩和沙河园岸边草坪最容易遇见它。我们是哪个月见到它的？",
      cite: ["bj-bird-list", "bj-aobei", "bj-shahe-res", "bj-shahe-park"],
    },
    {
      type: "lookalike",
      title: "水边草地上的鸟儿，别认错",
      quiz: true,
      items: [
        {
          name: "灰鹡鸰",
          scientific: "Motacilla cinerea",
          shot: { photo: "look-hui-ji-ling", caption: "肚子和尾巴根亮黄色的灰鹡鸰" },
          tells: [
            "个子和白鹡鸰差不多，也爱在水边晃着长尾巴走",
            "胸腹或尾巴下面带着鲜亮的黄色，后背偏灰",
          ],
        },
        {
          name: "白鹡鸰",
          scientific: "Motacilla alba",
          self: true,
          shot: { photo: "look-bai-ji-ling", caption: "全身黑白灰三色的白鹡鸰" },
          tells: [
            "只有麻雀那么大（约 16.5～21 厘米），迈着小碎步在水边快走",
            "全身只有黑白灰三色，肚子和尾巴下面没有亮黄色",
          ],
        },
        {
          name: "喜鹊",
          scientific: "Pica serica",
          shot: { photo: "look-xi-que", caption: "体型大得多、翅膀闪蓝绿光的喜鹊" },
          tells: [
            "个子比白鹡鸰大两倍多（身长 40～50 厘米），嘴和脚都粗壮得多",
            "黑翅膀和长尾巴在阳光下会闪出蓝绿金属光",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-grey", "wiki-magpie", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它的尾巴为什么总是一上一下晃个不停？",
          a: "科学家观察发现，它低头找食时，尾巴点动越快，抬头张望四周也越勤——这很可能是在向天敌亮出「我很警觉，别白费力气追我」的信号。",
          cite: ["randler-2006", "wiki-en"],
        },
        {
          q: "白鹡鸰在空中飞起来是什么样子？",
          a: "它扇几下翅膀向上蹿一点，收一收翅膀往下落一点，在半空画出一道一上一下的波浪线，边飞还常边发出清脆的「chissick」叫声。",
          cite: ["wiki-en", "wiki-grey"],
        },
        {
          q: "它在草坪和浅滩上忙着追什么吃？",
          a: "它是个捉虫小能手，最爱追苍蝇、小甲虫、蜻蜓、蜘蛛和水边的小虫子。开阔的浅滩、雨后草坪和步道边没有高草挡视线，正好让它快步追猎物。",
          cite: ["wiki-en", "adw-motacillidae"],
        },
        {
          q: "它的英文名 wagtail 是什么意思？",
          a: "wag 是摇摆，tail 是尾巴，合起来就是「摇尾巴鸟」！拉丁学名里的 Motacilla 原本指「爱动的小家伙」，alba 是白色的意思。",
          cite: ["wiki-en"],
        },
      ],
    },
  ],
  care: "在步道或岸上远远看它迈小碎步，不追跑、不往水里扔石子。湖边和浅滩湿滑，要拉紧大人的手，不下水。",
  nextTime: "下次在草坪或水边遇见白鹡鸰，先看它的脚：它是像麻雀那样双脚蹦，还是左右脚轮流迈小碎步快走？",
  sources: [
    { id: "wiki-en", title: "White wagtail", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/White_wagtail" },
    { id: "wiki-grey", title: "Grey wagtail", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grey_wagtail" },
    { id: "wiki-magpie", title: "Oriental magpie", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oriental_magpie" },
    { id: "adw-motacillidae", title: "Motacillidae (pipits and wagtails)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Motacillidae/" },
    { id: "randler-2006", title: "Is tail wagging in white wagtails, Motacilla alba, an honest signal of vigilance?", by: "Animal Behaviour, 2006", url: "https://doi.org/10.1016/j.anbehav.2005.07.026" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-aobei", title: "千园之城提靓生态画卷", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml" },
    { id: "bj-shahe-res", title: "北京水库湿地推荐观鸟地——沙河水库", by: "京报网", url: "https://news.bjd.com.cn/2024/05/06/10764985.shtml" },
    { id: "bj-shahe-park", title: "全龄乐活 观鸟寻趣！昌平这两个公园成为打卡新地标", by: "首都之窗（北京市人民政府门户网站）", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/gqzn/202606/t20260622_4710246.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
