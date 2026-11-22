import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-ji-ling",
  name: "白鹡鸰",
  pinyin: "bái jí líng",
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
        caption: "草坪上散步的白鹡鸰",
        shoot: "远远拍一只白鹡鸰的侧面：白脸、黑胸兜、后背和细长尾巴都在画面里",
      },
      points: [
        {
          x: 0.72,
          y: 0.33,
          label: "白脸蛋，后脑勺黑",
          detail: "额头和脸蛋雪白，头顶后面到后脖子是黑的，像戴了一顶往后推的小黑帽。",
          cite: ["cern-bjl"],
        },
        {
          x: 0.745,
          y: 0.47,
          label: "胸前一块黑围兜",
          detail: "胸口有一块醒目的黑斑。冬天换上冬羽后，这块黑斑会比繁殖季时小一些。",
          cite: ["cern-bjl"],
        },
        {
          x: 0.58,
          y: 0.5,
          label: "黑白灰三色衣裳",
          detail: "后背灰色到黑色，肚子雪白，翅膀黑白相间，全身没有一点亮黄色。",
          cite: ["cern-bjl"],
        },
        {
          x: 0.25,
          y: 0.61,
          label: "一刻不停的长尾巴",
          detail: "身长 17～20 厘米，拖着一条黑白相间的长尾巴，找吃的时总是一上一下点个不停。",
          cite: ["cern-bjl", "adw-motacillidae"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "绕到背后看看",
      shot: { photo: "back", caption: "背对镜头回头张望的白鹡鸰" },
      text: "从背后看，它的后背是一片灰，翅膀和尾巴却是黑白相间的，一层压一层，像叠好的黑白条纹衬衫。",
      start: [0.52, 0.6],
      zoom: 2.4,
      cite: ["cern-bjl"],
    },
    {
      type: "compare",
      title: "长大了换新衣",
      before: { photo: "adult", label: "成鸟", caption: "黑围兜、白脸蛋的成鸟" },
      after: { photo: "juvenile", label: "幼鸟", caption: "一身灰扑扑的幼鸟" },
      text: "刚长大的小白鹡鸰还没有黑白分明的打扮：成鸟身上黑色的地方，它是灰色的，看上去灰扑扑的。",
      cite: ["cern-bjl"],
    },
    {
      type: "steps",
      title: "一窝小鹡鸰长大了",
      steps: [
        {
          photo: "step-egg",
          label: "下蛋",
          caption: "窝里的一窝白鹡鸰蛋",
          text: "杯子形的小窝常藏在河岸土洞、石缝或墙缝里。一窝通常 4～7 枚带斑点的蛋，爸妈轮流孵 10～15 天，妈妈孵得更久。",
        },
        {
          photo: "step-chick",
          label: "张大嘴",
          caption: "张开黄边大嘴要吃的雏鸟",
          text: "雏鸟一起出壳，只会张大嘴要吃的。爸妈先给它们捂 5～6 天，还把它们的粪便叼出去，保持小窝干净。",
        },
        {
          photo: "step-feed",
          label: "叼虫回家",
          caption: "嘴里叼着一大把虫子的白鹡鸰",
          text: "爸爸妈妈一起出门捉虫，叼满一嘴再赶回窝里——小鸟吃的主要是虫子。",
        },
        {
          photo: "step-grow",
          label: "快离巢了",
          caption: "羽毛快长齐、挤满一窝的小白鹡鸰",
          text: "12～15 天后，小鹡鸰就要离巢了。刚出窝时还飞不好，爸妈还会接着喂它们两个多星期。",
        },
      ],
      cite: ["adw-motacillidae"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "全国一年四季都有人拍到它，冬天它们多半到南方过冬。北京名录里它是「旅鸟 / 夏候鸟」：春天飞回来、在这里筑巢，秋天再往南飞。我们是哪个月见到它的？",
      cite: ["cern-bjl", "bj-bird-list"],
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
            "个子和白鹡鸰差不多（16～18 厘米），也爱在水边晃着长尾巴走",
            "后背灰色，肚子和腰是黄色的（幼鸟肚子偏白，要看腰上那抹黄）",
          ],
        },
        {
          name: "白鹡鸰",
          scientific: "Motacilla alba",
          self: true,
          shot: { photo: "look-bai-ji-ling", caption: "全身黑白灰三色的白鹡鸰" },
          tells: [
            "身长 17～20 厘米，在水边、草坪和路上快步走",
            "全身只有黑白灰三色，胸前有块黑斑，身上没有黄色",
          ],
        },
        {
          name: "喜鹊",
          scientific: "Pica serica",
          shot: { photo: "look-xi-que", caption: "体型大得多的喜鹊" },
          tells: [
            "也是黑白两色、拖着长尾巴，可个子大得多（身长 40～50 厘米）",
            "常在高树或电线塔上用树枝搭一个大鸟窝",
          ],
        },
      ],
      cite: ["cern-hjl", "cern-bjl", "cern-xq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它的尾巴为什么总是一上一下晃个不停？",
          a: "科学家数过：它低头啄食时尾巴摇得少，警觉时摇得勤。摇尾巴很可能是在告诉天敌：「我一直盯着呢，别想偷袭！」",
          cite: ["randler-2006"],
        },
        {
          q: "白鹡鸰都长一个样吗？",
          a: "不一样！它分成 9 个亚种：有的下巴和喉咙是黑的，有的是白的；有的后背是灰的，有的是黑的。",
          cite: ["bow-whiwag", "cern-bjl"],
        },
        {
          q: "它被吓到时会怎么飞？",
          a: "它会贴着地面低低地飞，一起一伏像波浪，边飞边发出「吁吁」的报警声。",
          cite: ["cern-bjl"],
        },
        {
          q: "鹡鸰的窝里会混进别人家的蛋吗？",
          a: "会。鹡鸰家族的窝有时会被杜鹃偷偷塞进一枚蛋，想让鹡鸰爸妈替它孵蛋、喂孩子。",
          cite: ["adw-motacillidae"],
        },
        {
          q: "地上捡到一只飞不好的小鹡鸰，要不要带回家？",
          a: "别带走！小鹡鸰常常还不太会飞就离巢了，爸妈就在附近，还会接着喂它两个多星期。",
          cite: ["adw-motacillidae"],
        },
      ],
    },
  ],
  care: "远远看它走路点尾巴，不追不扔石子；地上飞不好的小鸟别带走。水边湿滑，拉紧大人的手。",
  nextTime: "下次在草坪或水边遇见白鹡鸰，先看它的脚：它是像麻雀那样双脚蹦，还是左右脚轮流迈小碎步快走？",
  sources: [
    { id: "cern-bjl", title: "白鹡鸰", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%99%BD%E9%B9%A1%E9%B8%B0" },
    { id: "cern-hjl", title: "灰鹡鸰", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%81%B0%E9%B9%A1%E9%B8%B0" },
    { id: "cern-xq", title: "喜鹊", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%96%9C%E9%B9%8A" },
    { id: "adw-motacillidae", title: "Motacillidae (pipits and wagtails)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Motacillidae/" },
    { id: "bow-whiwag", title: "White Wagtail (Motacilla alba)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/whiwag/cur/introduction" },
    { id: "randler-2006", title: "Is tail wagging in white wagtails, Motacilla alba, an honest signal of vigilance?", by: "Animal Behaviour, 2006", url: "https://doi.org/10.1016/j.anbehav.2005.07.026" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;