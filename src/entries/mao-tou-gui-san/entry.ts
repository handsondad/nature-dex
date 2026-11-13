import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "mao-tou-gui-san",
  name: "毛头鬼伞",
  scientific: "Coprinus comatus",
  kind: "fungus",
  // 草坪上也有大青褶伞等剧毒伞菌；先标 likely，提醒只远看拍照
  certainty: "likely",
  taxonomy: ["真菌界", "担子菌门", "伞菌纲", "伞菌目", "鬼伞科", "鬼伞属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "草地上冒出的毛头鬼伞",
    shoot: "雨后在草坪边蹲下来平视拍：圆筒形菌盖和翘起的鳞片清楚，只拍不碰",
  },
  hello: "雨后草坪冒出一根白毛筒，过不了一天就自己化成黑墨水滴下来。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "whole-fungus",
        caption: "年轻时的毛头鬼伞",
        shoot: "找一朵还没变黑的毛头鬼伞，侧面拍全貌：菌盖顶端、鳞片和白色菌柄都在画面里；只拍不碰",
      },
      points: [
        { x: 0.56, y: 0.22, label: "头顶偏淡褐色", detail: "菌盖最顶端常有一块光滑的浅褐色区域，像戴了一顶小帽子。", cite: ["wiki-en", "kuo"] },
        { x: 0.56, y: 0.44, label: "翘起的白鳞片", detail: "高圆筒形的白菌盖高 6～20 厘米，表面翘起一层层毛茸茸的鳞片。", cite: ["wiki-en", "kuo"] },
        { x: 0.56, y: 0.64, label: "包住菌柄的下缘", detail: "年轻时菌盖下缘紧紧裹着菌柄，里面的菌褶会从白变粉、再变黑。", cite: ["wiki-en", "kuo"] },
        { x: 0.57, y: 0.80, label: "中空的白菌柄", detail: "白色菌柄中空，表面光滑，靠近下部常套着一圈松动的菌环。", cite: ["wiki-en", "kuo"] },
      ],
    },
    {
      type: "compare",
      title: "从白毛筒到黑墨水",
      before: {
        photo: "young-white",
        label: "年轻时",
        caption: "洁白挺立的圆筒形菌盖",
        shoot: "记住位置，先拍刚冒出来的白色圆筒形毛头鬼伞，横构图",
      },
      after: {
        photo: "mature-ink",
        label: "成熟后",
        caption: "菌盖边缘自溶成黑色液体滴落",
        shoot: "隔半天到一天回到同一位置，同角度拍它变黑流墨汁的样子",
      },
      text: "成熟以后，它的菌褶和菌盖会从下往上自己溶解（自溶），化成装满黑色孢子的墨汁滴落下来。",
      cite: ["wiki-en", "kuo"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4、5 月和 10、11 月雨后拍到它最多，1、2 月几乎见不到。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "草坪白蘑菇，千万别认错",
      quiz: true,
      items: [
        {
          name: "墨汁鬼伞",
          scientific: "Coprinopsis atramentaria",
          shot: { photo: "look-mjgs", caption: "墨汁鬼伞" },
          tells: [
            "菌盖灰褐色、有细纵沟，没有翘起的大白鳞片",
            "含有鬼伞素，和酒前后同吃会引发严重中毒",
          ],
        },
        {
          name: "毛头鬼伞",
          scientific: "Coprinus comatus",
          self: true,
          shot: { photo: "look-mtgs", caption: "毛头鬼伞" },
          tells: [
            "年轻时菌盖是高高的白色圆筒，满是翘起的鳞片",
            "老了从下往上化成黑墨水",
          ],
        },
        {
          name: "大青褶伞",
          scientific: "Chlorophyllum molybdites",
          shot: { photo: "look-qzhs", caption: "大青褶伞（有毒）" },
          tells: [
            "菌盖展开后像平平的大伞，成熟菌褶呈暗绿色，不会化成黑墨水",
            "草坪上极常见的毒蘑菇，误食会剧烈呕吐腹泻",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-ca", "wiki-cm"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它为什么要把自己化成“黑墨水”？",
          a: "它的菌盖张不大、菌褶又挤得很密。从下往上把用完的菌褶融化成液体滴走，上面的黑色孢子才有空隙散到空气里。",
          cite: ["wiki-en", "kuo"],
        },
        {
          q: "名字听起来像菜市场里的“鸡腿菇”，路边的能采吗？",
          a: "绝对不能！公园草坪里常长着外形相近的大青褶伞等毒蘑菇，而且路边野菌会富集土壤里的污染物和重金属。",
          cite: ["wiki-en", "wiki-cm", "nowakowski-2020"],
        },
        {
          q: "墨汁鬼伞为什么有个外号叫“酒鬼克星”？",
          a: "和它名字相近的墨汁鬼伞含有鬼伞素（coprine），会阻碍身体分解酒精；吃后几天内沾酒就会脸红、恶心、心慌。",
          cite: ["wiki-ca", "nowakowski-2020"],
        },
        {
          q: "藏在泥土下面的菌丝还会“打猎”？",
          a: "科学家发现，毛头鬼伞的地下菌丝长着带刺的小球，能刺破土壤线虫的表皮并释放毒素，把小线虫定住当养分。",
          cite: ["luo-2007"],
        },
      ],
    },
  ],
  care: "草坪和路边的野蘑菇容易与剧毒蘑菇混淆，还会吸收土壤污染物；只看不碰、不采也不吃。",
  nextTime: "雨后如果在草坪边看到它，记住位置不碰它，隔半天再来看看菌盖下缘是不是开始变黑滴墨水了？",
  sources: [
    { id: "wiki-en", title: "Coprinus comatus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coprinus_comatus" },
    { id: "kuo", title: "Coprinus comatus: The Shaggy Mane", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/coprinus_comatus.html" },
    { id: "wiki-ca", title: "Coprinopsis atramentaria", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coprinopsis_atramentaria" },
    { id: "wiki-cm", title: "Chlorophyllum molybdites", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chlorophyllum_molybdites" },
    { id: "nowakowski-2020", title: "The two faces of Coprinus comatus—Functional properties and potential hazards", by: "Phytotherapy Research, 2020", url: "https://doi.org/10.1002/ptr.6741" },
    { id: "luo-2007", title: "Coprinus comatus Damages Nematode Cuticles Mechanically with Spiny Balls and Produces Potent Toxins To Immobilize Nematodes", by: "Applied and Environmental Microbiology, 2007", url: "https://doi.org/10.1128/AEM.02770-06" },
  ],
  by: ["kid", "dad"],
};

export default entry;
