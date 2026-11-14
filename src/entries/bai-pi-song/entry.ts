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
        caption: "斑驳灰白的主干、翠绿短硬针叶与黄褐色花粉球",
        shoot: "仰拍或近拍一段低枝与树干：能看清斑驳发白的树皮和一簇簇粗硬针叶",
      },
      points: [
        {
          x: 0.48,
          y: 0.62,
          label: "斑驳发白的树干",
          detail: "外层老树皮不规则地薄片状剥落，露出浅黄白、灰白色的内皮，越老的树干越白。",
          cite: ["foc-bps", "wiki-en"],
        },
        {
          x: 0.72,
          y: 0.35,
          label: "针叶 3 根一束",
          detail: "松针粗硬，长 5～10 厘米，总是 3 根聚成一束，基部包着的叶鞘很早就会脱落。",
          cite: ["foc-bps"],
        },
        {
          x: 0.25,
          y: 0.42,
          label: "春天的花粉球与球果",
          detail: "它是裸子植物，不开真正的花：4～5 月长出撒花粉的小球，卵圆形球果长 5～7 厘米，到第二年秋天才成熟。",
          cite: ["foc-bps"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看会「换新衣」的斑驳树皮",
      shot: {
        photo: "bark-macro",
        caption: "圆鳞片状层层剥落、露出灰白与红褐斑块的白皮松树干",
        shoot: "正对树干近拍一块斑纹丰富的树皮，把灰绿、奶白和红褐色斑块拍清楚",
      },
      text: "年轻枝干的树皮原本是灰绿色的、很光滑；随着树干长粗，外皮一圈圈薄片状脱落，刚露出的内皮是浅黄白色的，晒过太阳后又慢慢变成浅褐、红褐或灰绿色，拼成一身迷彩花纹。",
      zoom: 2.5,
      start: [0.5, 0.5],
      cite: ["foc-bps", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "北京常见常绿松树：白皮松还是油松？",
      quiz: true,
      items: [
        {
          name: "油松",
          scientific: "Pinus tabuliformis",
          shot: { photo: "look-ys", caption: "针叶两根一束的油松枝与球果" },
          tells: [
            "针叶绝大多数是 2 根一束，基部一直包着宿存的叶鞘",
            "树皮深灰褐色，裂成厚厚的鳞块状，不会脱成白花斑",
          ],
        },
        {
          name: "白皮松",
          scientific: "Pinus bungeana",
          self: true,
          shot: { photo: "look-bps", caption: "针叶三根一束的白皮松枝条" },
          tells: [
            "针叶整整齐齐 3 根一束，基部的叶鞘早就脱落了",
            "树皮薄片状剥落，树干满是灰白、奶白和红褐色的斑纹",
          ],
        },
      ],
      cite: ["foc-bps", "foc-ys"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "白皮松四季常绿，一年十二个月都能见到；它在 4～5 月传粉，球果第二年 10～11 月成熟，冬天落雪时白色树干格外显眼。我们是哪个月遇见它的？",
      cite: ["foc-bps", "bj-hexin"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "白皮松是咱们中国特有的松树吗？",
          a: "对！野生白皮松只产于中国华北、西北到西南的山地（如山西、陕西、甘肃、河南、四川等地），能长到 30 米高，零下二三十摄氏度也不怕。",
          cite: ["foc-bps", "wiki-en", "wiki-zh"],
        },
        {
          q: "它的拉丁学名居然和北京古庙有关？",
          a: "1831 年，植物学家本格（Alexander von Bunge）在北京附近的寺庙树林里考察到这种奇特的白树干松树，后来学名 bungeana 就是用他的名字命名的。",
          cite: ["wiki-en", "wiki-zh"],
        },
        {
          q: "在北京公园里冬天为什么爱找它？",
          a: "昌平贺新公园的植物配置调查专门提到，白皮松既是高层常绿大乔木，又是公园冬季最重要的「观干树种」——树叶落光的冬天，它的白树干最精神！",
          cite: ["bj-hexin"],
        },
        {
          q: "北京最老的白皮松有多大岁数？",
          a: "北京古刹和皇家园林自古爱种白皮松：北海公园团城有金代种下的 800 多年「白袍将军」，门头沟戒台寺的「九龙松」相传唐代种下，已经有上千年历史了。",
          cite: ["wiki-zh"],
        },
      ],
    },
  ],
  care: "只看、拍照，不抠不撕树干上正在剥落的树皮（树皮是保护大树的铠甲）；松针尖硬扎手，观察时小心别戳到眼睛。",
  nextTime: "在白皮松树下的草地上捡一束自然掉落的干松针数一数：是不是正好 3 根连在一块儿？",
  sources: [
    {
      id: "foc-bps",
      title: "Pinus bungeana 白皮松",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200005327",
    },
    {
      id: "foc-ys",
      title: "Pinus tabuliformis 油松",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=210001654",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
    {
      id: "wiki-en",
      title: "Pinus bungeana",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Pinus_bungeana",
    },
    {
      id: "wiki-zh",
      title: "白皮松",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E7%99%BD%E7%9A%AE%E6%9D%BE",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
