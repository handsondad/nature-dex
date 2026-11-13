import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 草丛里还有迷卡斗蟋等黑褐色蟋蟀，看圆脑袋上两眼间弯弯的浅黄眉纹与约 2.6～3.2 厘米的大体型确认。
const entry: Entry = {
  id: "huang-lian-you-hu-lu",
  name: "黄脸油葫芦",
  scientific: "Teleogryllus emma",
  kind: "animal",
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "直翅目", "蟋蟀科", "油葫芦属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "我们遇见的那只黄脸油葫芦",
    shoot: "夏秋傍晚在草丛或石砖边，顺着鸣叫声慢慢找，微距拍清黑亮圆头上的浅黄眉纹和细长触角；只拍不抓",
  },
  hello: "夏秋夜晚草丛里的歌唱家，油亮黑圆脑袋上画着一对弯弯的浅黄眉毛。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "female-side",
        caption: "从侧面看一只雌性黄脸油葫芦",
        shoot: "从侧上方微距拍：圆头上的浅黄眉纹、细长丝状触角、前翅和屁股后面的尾须都在画面里",
      },
      points: [
        {
          x: 0.76,
          y: 0.42,
          label: "油亮圆头配「黄眉」",
          detail: "黑褐色圆脑袋油亮发光，两只复眼上方连着一道弯弯的浅黄色眉纹，「黄脸油葫芦」就因它得名。",
          cite: ["wiki-ja"],
        },
        {
          x: 0.9,
          y: 0.34,
          label: "细长如丝的触角",
          detail: "头上伸出两根比身子还长的丝状触角，夜晚在草丛底下钻行时全靠它探路和感知动静。",
          cite: ["wiki-ja", "wiki-cricket"],
        },
        {
          x: 0.52,
          y: 0.42,
          label: "盖在背上的前翅",
          detail: "前翅革质发亮。只有雄虫前翅长着复杂的发音镜和音锉，两翅摩擦就能唱歌；这只雌虫前翅纹路平直，不会叫。",
          cite: ["wiki-ja", "wiki-cricket"],
        },
        {
          x: 0.18,
          y: 0.48,
          label: "尾须间的长产卵管",
          detail: "屁股后面两侧各有 1 根尾须；雌虫在两根尾须中间多出一根长针似的产卵管，用来插进泥土产卵。",
          cite: ["wiki-ja", "wiki-cricket"],
        },
      ],
    },
    {
      type: "compare",
      title: "会唱歌的雄虫 vs 带长针的雌虫",
      before: {
        photo: "sex-male",
        label: "雄虫",
        caption: "前翅有发音器、尾部只有两根尾须的雄虫",
        shoot: "横画幅微距拍一只正在草丛边活动或鸣叫的雄虫，拍清复杂前翅花纹和尾部",
      },
      after: {
        photo: "sex-female",
        label: "雌虫",
        caption: "前翅纹路平直、尾部多一根细长产卵管的雌虫",
        shoot: "同样横画幅拍一只尾部拖着长针状产卵管的雌虫",
      },
      text: "怎么一眼分清油葫芦爸爸和妈妈？看翅膀和屁股尖就行：雄虫前翅花纹皱褶复杂，能竖起翅膀摩擦唱歌，屁股后面只有两根尾须；雌虫前翅纹路整整齐齐不会叫，但两根尾须中间多出一根长针似的产卵管。",
      cite: ["wiki-ja", "wiki-cricket"],
    },
    {
      type: "lookalike",
      title: "草丛里的直翅目亲戚：蟋蟀还是蝗虫？",
      quiz: true,
      items: [
        {
          name: "中华剑角蝗",
          scientific: "Acrida cinerea",
          shot: { photo: "look-zhjjh", caption: "中华剑角蝗（短扁剑状触角蝗虫）" },
          tells: [
            "属于蝗科：脑袋往前尖尖伸出，常穿绿衣或枯草褐衣",
            "触角又短又扁，像两把小宝剑，多在白天草叶上活动",
          ],
        },
        {
          name: "黄脸油葫芦",
          scientific: "Teleogryllus emma",
          self: true,
          shot: { photo: "look-hlyhl", caption: "黄脸油葫芦（细长丝状触角蟋蟀）" },
          tells: [
            "属于蟋蟀科：圆圆的黑亮脑袋上有弯弯的浅黄眉纹",
            "触角细得像丝线、比身子还长，多在夏秋夜晚草丛里鸣叫",
          ],
        },
      ],
      cite: ["wiki-ja", "wiki-cricket", "wiki-ac", "wiki-acridinae"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7～9 月夏秋之交拍到它最多，8 月是高峰；入冬成虫死去，留卵在土里过冬，12 月到第二年 4 月见不到成虫。我们是哪个月遇见它的？",
      cite: ["wiki-ja"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "油葫芦是用嘴巴唱歌的吗？",
          a: "不是！只有雄虫革质前翅上长着锯齿状的音锉、刮器和共鸣室。它把两片前翅斜斜竖起互相摩擦，先唱一串悠长颤音再接几声短音，召唤雌虫。",
          cite: ["wiki-ja", "wiki-cricket", "jang-2010"],
        },
        {
          q: "它的「耳朵」长在哪儿？",
          a: "不在脑袋上，而长在最前面那对腿的小腿（前足胫节）上！雌虫就是靠前腿上的听器听见雄虫的歌声，顺着声音找过去的。",
          cite: ["wiki-cricket", "jang-2010"],
        },
        {
          q: "盛夏和深秋，它唱歌的时间一样吗？",
          a: "不一样！盛夏天气炎热时，它白天躲在草根和石缝下乘凉，只在夜里鸣叫；到了深秋气温转凉，大白天也能听见它在草丛里唱歌。",
          cite: ["wiki-ja"],
        },
        {
          q: "冬天油葫芦去哪儿了？",
          a: "秋天雌虫把长产卵管插进泥土，一粒粒产下约 3 毫米长的卵。冬天成虫死去，卵在土里越冬，第二年五六月孵出脖子带一道白圈的黑小若虫。",
          cite: ["wiki-ja"],
        },
      ],
    },
  ],
  care: "循着叫声静静听、远远看，不抓也不关进小盒。它的大颚有力会咬人，手抓还容易碰断细长的触角和产卵管。",
  nextTime: "夏秋傍晚听见草丛里清脆的鸣叫，轻轻凑近找找看：唱歌的那只，屁股后面是两根尾须还是三根？",
  sources: [
    {
      id: "wiki-ja",
      title: "エンマコオロギ (Teleogryllus emma)",
      by: "Wikipedia (日本語)",
      url: "https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%B3%E3%83%9E%E3%82%B3%E3%82%AA%E3%83%AD%E3%82%AE",
    },
    {
      id: "wiki-cricket",
      title: "Cricket (insect)",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Cricket_(insect)",
    },
    {
      id: "jang-2010",
      title: "Calling song and phonotactic selectivity in the field cricket Teleogryllus emma (Orthoptera: Gryllidae)",
      by: "Journal of Ecology and Environment (2010)",
      url: "https://doi.org/10.5141/jefb.2010.33.4.307",
    },
    {
      id: "wiki-ac",
      title: "Acrida cinerea",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Acrida_cinerea",
    },
    {
      id: "wiki-acridinae",
      title: "Acridinae",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Acridinae",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
