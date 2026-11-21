import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-pi-song",
  name: "白皮松",
  scientific: "Pinus bungeana",
  kind: "plant",
  // 幼树树皮偏灰绿光滑，要结合「3针一束、叶鞘早落」与斑驳白树皮同油松、华山松区分
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "松柏纲", "松柏目", "松科", "松属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "古建红墙旁树干洁白醒目的白皮松",
    shoot: "在公园或古庙旁拍一整棵白皮松：斑驳发白的树干和常绿树冠都收进画面",
  },
  hello: "老树皮一片片脱落，露出奶白与浅褐的花斑，针叶总是三根抱成一束。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "needles-cone",
        caption: "斑驳灰白的树干、翠绿的针叶和一簇簇黄色的雄球花",
        shoot: "仰拍或近拍一段低枝与树干：能看清斑驳发白的树皮和一簇簇粗硬针叶",
      },
      points: [
        {
          x: 0.33,
          y: 0.7,
          label: "斑驳发白的树干",
          detail: "树皮一块块脱落，露出粉白色的内皮，白一块、褐一块，像迷彩服。",
          cite: ["iplant-bps"],
        },
        {
          x: 0.12,
          y: 0.45,
          label: "好几根主干",
          detail: "它常常从树干靠近地面的地方分出好几根主干，一起往上长。",
          cite: ["iplant-bps"],
        },
        {
          x: 0.8,
          y: 0.42,
          label: "针叶 3 根一束",
          detail: "松针粗硬，长 5～10 厘米，3 根聚成一束。捡一束掉在地上的数一数。",
          cite: ["iplant-bps"],
        },
        {
          x: 0.43,
          y: 0.2,
          label: "黄色的雄球花",
          detail: "它是裸子植物，不开真正的花。4～5 月新枝上长出黄色小球，里面装着花粉。",
          cite: ["iplant-bps"],
        },
      ],
    },
    {
      type: "compare",
      title: "年轻的树和老树",
      before: {
        photo: "trunk-young",
        label: "年轻的树",
        caption: "年轻白皮松的树干，灰绿色，有一块块小斑",
        shoot: "找一棵细细的小白皮松，近拍一段树干",
      },
      after: {
        photo: "trunk-old",
        label: "老树",
        caption: "几百岁的老白皮松，树干变得粉白",
        shoot: "在古庙或老公园找一棵大白皮松，拍它发白的树干",
      },
      text: "年轻的白皮松树皮灰绿、光滑。树长粗以后，树皮一块块脱落，越老越白，远远就能认出来。",
      cite: ["iplant-bps", "gdb-bps"],
    },
    {
      type: "magnifier",
      title: "凑近看迷彩树皮",
      shot: {
        photo: "bark-macro",
        caption: "一块块脱落、露出灰白与红褐斑块的白皮松树干",
        shoot: "正对树干近拍一块斑纹丰富的树皮，把灰绿、奶白和红褐色斑块拍清楚",
      },
      text: "树皮像梧桐树那样一小片一小片地掉。刚露出来的地方颜色浅，旧的地方是灰绿、红褐色，拼成一身迷彩花纹。看看右边那片正翘起来的树皮。",
      zoom: 2.5,
      start: [0.82, 0.52],
      cite: ["iplant-bps", "gdb-bps"],
    },
    {
      type: "steps",
      title: "从花粉到球果",
      steps: [
        {
          photo: "step-pollen",
          label: "撒花粉",
          text: "4～5 月，新枝上长出一簇簇黄色的雄球花，里面装满花粉。",
          caption: "一簇簇黄色的雄球花",
          shoot: "4～5 月拍新枝上一簇簇黄色的雄球花",
        },
        {
          photo: "step-cone-green",
          label: "小球果",
          text: "传过粉的小球果慢慢长大，鳞片合得紧紧的，种子在里面长。",
          caption: "挂在枝上、鳞片还合着的球果",
          shoot: "夏天找枝头鳞片还合着的球果",
        },
        {
          photo: "step-cone",
          label: "张开了",
          text: "到第二年 10～11 月球果才成熟。鳞片张开，带着短翅膀的种子掉出来。",
          caption: "落在地上、鳞片张开的成熟球果",
          shoot: "秋天树下找一个鳞片张开的球果，放在原地拍",
        },
      ],
      cite: ["iplant-bps"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "白皮松四季常绿，哪个月都能见到。4～5 月它撒花粉，球果要到第二年 10～11 月才成熟。我们是哪个月遇见它的？",
      cite: ["iplant-bps"],
    },
    {
      type: "lookalike",
      title: "北京常见的松树，哪棵是白皮松？",
      quiz: true,
      items: [
        {
          name: "油松",
          scientific: "Pinus tabuliformis",
          shot: { photo: "look-ys", caption: "针叶两根一束的油松枝与球果" },
          tells: [
            "针叶 2 根一束",
            "树皮灰褐色，裂成厚厚的鳞块，不会变白",
            "熟了的球果常常在树上挂好几年",
          ],
        },
        {
          name: "白皮松",
          scientific: "Pinus bungeana",
          self: true,
          shot: { photo: "look-bps", caption: "针叶三根一束的白皮松枝条" },
          tells: [
            "针叶 3 根一束，粗硬",
            "树皮一块块脱落，树干满是白、灰绿和红褐色的斑",
          ],
        },
        {
          name: "华山松",
          scientific: "Pinus armandii",
          shot: { photo: "look-hss", caption: "华山松的针叶和长长的球果" },
          tells: [
            "针叶 5 根一束，又细又长，有 8～15 厘米",
            "球果很长，有 10～20 厘米",
            "老树皮裂成方块，不会变成白花斑",
          ],
        },
      ],
      cite: ["iplant-bps", "iplant-ys", "iplant-hss"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "白皮松是中国特有的松树吗？",
          a: "是的！它是中国特有树种。野生的白皮松长在山西、河南、陕西、甘肃、四川、湖北等地的山里，能长到 30 米高。",
          cite: ["iplant-bps"],
        },
        {
          q: "它的学名为什么和北京有关？",
          a: "1831 年，植物学家本格（Bunge）在北京附近见到了它，学名 bungeana 里就有他的名字。给它定名用的标本也采自北京。",
          cite: ["gdb-bps", "iplant-bps"],
        },
        {
          q: "北京有多老的白皮松？",
          a: "北海团城上有一棵金代种下的白皮松，大约 800 岁，树干直径 1.6 米多。乾隆皇帝封它叫「白袍将军」。",
          cite: ["bj-gushu"],
        },
        {
          q: "松针多久换一次？",
          a: "白皮松的一束针叶能在枝上待 3～4 年才掉。新叶不断长出来，所以一年四季看起来都是绿的。",
          cite: ["gdb-bps"],
        },
        {
          q: "冬天为什么要去看它的树干？",
          a: "冬天很多树的叶子掉光了，它白色的树干格外显眼。北京贺新公园就把它算作冬天看树干的树。",
          cite: ["bj-hexin"],
        },
      ],
    },
  ],
  care: "只看、拍照，不抠不撕树干上正在剥落的树皮；松针尖硬扎手，观察时小心别戳到眼睛。",
  nextTime: "在白皮松树下捡一束自然掉落的干松针数一数：是不是正好 3 根连在一块儿？",
  sources: [
    {
      id: "iplant-bps",
      title: "白皮松 Pinus bungeana",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Pinus%20bungeana",
    },
    {
      id: "iplant-ys",
      title: "油松 Pinus tabuliformis",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Pinus%20tabuliformis",
    },
    {
      id: "iplant-hss",
      title: "华山松 Pinus armandii",
      by: "植物智（中国科学院植物研究所）",
      url: "https://www.iplant.cn/info/Pinus%20armandii",
    },
    {
      id: "gdb-bps",
      title: "Pinus bungeana (lacebark pine)",
      by: "The Gymnosperm Database",
      url: "https://www.conifers.org/pi/Pinus_bungeana.php",
    },
    {
      id: "bj-gushu",
      title: "让古树名木“活”起来（一）",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/jj/201804/t20180404_108040.shtml",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
