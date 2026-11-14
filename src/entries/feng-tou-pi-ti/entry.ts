import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "feng-tou-pi-ti",
  name: "凤头䴙䴘",
  scientific: "Podiceps cristatus",
  kind: "animal",
  // 修长白脖子、头顶双簇黑羽冠和栗红镶黑大围脖，拍到就能一眼认准
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "䴙䴘目", "䴙䴘科", "䴙䴘属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "水面上竖起双角羽冠与栗红围脖的凤头䴙䴘",
    shoot: "春夏在沙河水库、沙河园或温榆河岸边，用长焦远拍水面上游动的凤头䴙䴘：修长脖子、双角黑冠和栗红大围脖都拍清楚；岸上观看，别下水",
  },
  hello: "头顶竖着两簇黑「小牛角」，脸颊围着栗红大围脖，小宝宝还常骑在它背上搭船！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "head-crest",
        caption: "凤头䴙䴘繁殖羽的头颈特写",
        shoot: "远远拉近拍凤头䴙䴘的侧面头颈：头顶双簇黑羽冠、红眼睛、尖长嘴和栗红镶黑边的围脖都在画面里",
      },
      points: [
        {
          x: 0.62,
          y: 0.16,
          label: "两簇黑色「小牛角」",
          detail: "头顶竖着两簇能立起来的黑色羽冠，看着像一对威风的小牛角。",
          cite: ["adw-gcg", "wiki-en"],
        },
        {
          x: 0.63,
          y: 0.42,
          label: "栗红镶黑边的「大围脖」",
          detail: "春夏繁殖季，白脸蛋后面围着一圈蓬松的栗红色饰羽，外缘还镶着黑边；到了冬天这圈大围脖会收起褪去。",
          cite: ["adw-gcg", "wiki-en"],
        },
        {
          x: 0.36,
          y: 0.36,
          label: "笔直尖长的嘴和红眼睛",
          detail: "鲜红的眼睛前面长着一把粉灰色尖嘴，潜水追鱼时一夹一个准。",
          cite: ["wiki-en", "adw-gcg"],
        },
        {
          x: 0.56,
          y: 0.68,
          label: "修长的白脖子",
          detail: "身长 46～61 厘米，是欧亚大陆个头最大的䴙䴘，脖子前面雪白、后面深褐，游起水来像小天鹅一样挺拔。",
          cite: ["adw-gcg", "wiki-en"],
        },
      ],
    },
    {
      type: "steps",
      title: "水上跳舞、浮巢与背娃搭船",
      steps: [
        {
          photo: "step-dance",
          label: "水上对舞",
          caption: "面对面伸直长脖子跳「摇头舞」的一对凤头䴙䴘",
          text: "春天配对时，雌雄两只面对面把白脖子伸得笔直，竖起黑羽冠和栗红围脖，左右摇晃脑袋，有时还会潜下水衔起水草送给对方。",
        },
        {
          photo: "step-nest",
          label: "芦苇浮巢",
          caption: "在水草丛中的浮巢上孵蛋的凤头䴙䴘",
          text: "它的腿长在身体很靠后的地方，上岸走路不方便，夫妻俩就用水草和芦苇在浅水里编一座浮在水上的窝，轮流孵 3～4 枚白蛋。",
        },
        {
          photo: "step-chick",
          label: "背上搭船",
          caption: "斑马纹雏鸟钻在亲鸟背羽里搭船",
          text: "孵上约 27～29 天，满头黑白斑马纹的小鸟就出壳了！头三个星期里，小家伙常爬到爸爸妈妈背上的羽毛间搭船，保暖又安全。",
        },
      ],
      cite: ["adw-gcg", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，全年都有人拍到它，冬春开阔水面记录更多。北京名录里它是北京市重点保护野生动物，属于「夏候鸟 / 旅鸟」，每年春暖冰融后在昌平沙河水库、沙河园和温榆河的水面上常能看到它跳舞带娃。我们会在哪个月遇见它？",
      cite: ["bj-bird-list", "bj-shahe-res", "bj-shahe-park"],
    },
    {
      type: "lookalike",
      title: "大䴙䴘还是小鸊鷉？",
      quiz: true,
      items: [
        {
          name: "小鸊鷉",
          scientific: "Tachybaptus ruficollis",
          shot: { photo: "look-xiao-pi-ti", caption: "圆脑袋、红棕脖子的小鸊鷉" },
          tells: [
            "个子只有凤头䴙䴘的一半大（身长 23～29 厘米），脖子短，屁股像个小粉扑",
            "圆脑袋滑溜溜的，没有双角黑羽冠，也没有蓬松的大围脖",
          ],
        },
        {
          name: "凤头䴙䴘",
          scientific: "Podiceps cristatus",
          self: true,
          shot: { photo: "look-feng-tou", caption: "脖子修长、竖着羽冠和围脖的凤头䴙䴘" },
          tells: [
            "大个子（身长 46～61 厘米），雪白的脖子又细又长",
            "头顶竖着两簇黑羽冠，繁殖季脸颊围着栗红镶黑边的大围脖",
          ],
        },
      ],
      cite: ["adw-gcg", "wiki-en", "wiki-lg", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "凤头䴙䴘为什么会吃自己的羽毛？",
          a: "科学家检查过它的胃，里面常有好几百根自己胸腹和体侧的软羽毛！羽毛在胃里把扎人的鱼刺裹成团吐出去，还能顺便减少胃里的寄生虫。",
          cite: ["piersma-1989", "adw-gcg"],
        },
        {
          q: "大人临时离开浮巢时，怎么护住白白的鸟蛋？",
          a: "遇到打扰要离开窝时，爸爸或妈妈会先衔起湿水草把鸟蛋严严实实盖住，再悄悄潜进水里游到远处冒头，让偷蛋的白骨顶等水鸟找不到窝。",
          cite: ["adw-gcg"],
        },
        {
          q: "背着小鸟的爸爸妈妈突然潜水了怎么办？",
          a: "刚出壳的小䴙䴘本来就会游泳！大人背着它们潜下水时，小家伙会像小软木塞一样浮在水面上，等大人在几步外冒出水面，再赶紧游过去爬回背上。",
          cite: ["wiki-en", "adw-gcg"],
        },
        {
          q: "它的拉丁学名 Podiceps 藏着什么身体秘密？",
          a: "Podiceps 在拉丁语里是「脚长在屁股后面」的意思！它的双腿长在身体最后端，像装在船尾的螺旋桨，潜水追鱼特别快，但上岸就没法走远路了。",
          cite: ["wiki-en", "adw-gcg"],
        },
      ],
    },
  ],
  care: "北京市重点保护水鸟，请在岸边步道或观鸟台安静远看，不投喂、不惊吓芦苇丛里孵蛋和背娃的亲鸟。水边要牵紧大人，不下水。",
  nextTime: "春夏去水库岸边用望远镜找找看：凤头䴙䴘蓬松的背羽缝里，有没有探出黑白条纹的小脑袋？",
  sources: [
    { id: "adw-gcg", title: "Podiceps cristatus (great crested grebe)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Podiceps_cristatus/" },
    { id: "wiki-en", title: "Great crested grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Great_crested_grebe" },
    { id: "wiki-lg", title: "Little grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Little_grebe" },
    { id: "piersma-1989", title: "Feather eating in Great Crested Grebes Podiceps cristatus: a unique solution to the problems of debris and gastric parasites in fish-eating birds", by: "Ibis, 1989", url: "https://doi.org/10.1111/j.1474-919x.1989.tb04784.x" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-shahe-res", title: "北京水库湿地推荐观鸟地——沙河水库", by: "京报网", url: "https://news.bjd.com.cn/2024/05/06/10764985.shtml" },
    { id: "bj-shahe-park", title: "全龄乐活 观鸟寻趣！昌平这两个公园成为打卡新地标", by: "首都之窗（北京市人民政府门户网站）", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/gqzn/202606/t20260622_4710246.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
