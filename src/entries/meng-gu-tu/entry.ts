import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 以前常叫草兔。北京名录里唯一的兔就是它；名录未标保护级别，正文不写级别。
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
  hello: "长耳朵尖上点着黑，后腿又长又有劲，蹦起来飞快。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "side-view",
        caption: "坐在雪地石块间张望的蒙古兔",
        shoot: "远远拍一只停下来竖耳听动静的蒙古兔侧面：黑耳尖、浅色眼圈、黄褐背毛和黑白尾巴都在画面里",
      },
      points: [
        { x: 0.49, y: 0.15, label: "黑耳尖", detail: "耳朵长 8～12 厘米，耳尖是黑的。野兔大多有这个记号，家兔没有。", cite: ["wiki-en", "adw-leporidae"] },
        { x: 0.555, y: 0.35, label: "浅色眼圈", detail: "眼睛周围有一圈浅色的皮毛，像描了一道边。", cite: ["wiki-en"] },
        { x: 0.42, y: 0.55, label: "沙黄色的背", detail: "背是沙黄带深色细纹，身子两侧和肚子是白的。", cite: ["wiki-en"] },
        { x: 0.21, y: 0.77, label: "上黑下白的尾巴", detail: "短尾巴上面有一道宽宽的黑条，翻过来是白的。它跑开时最好认。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的头",
      shot: { photo: "face", caption: "躲在草丛里的蒙古兔", shoot: "它停在草丛里不动时，用长焦从侧面远远拍头部：黑耳尖、眼圈和胡须都清楚；不靠近" },
      text: "先把放大镜移到耳朵尖，看那一抹黑；再往下找眼睛，看看眼睛周围那圈浅色的毛，数数它有几根长胡须。",
      zoom: 2.5,
      start: [0.56, 0.08],
      cite: ["wiki-en", "adw-leporidae"],
    },
    {
      type: "steps",
      title: "它怎么躲开危险",
      steps: [
        { photo: "step-rest", label: "躲草里", text: "它不挖深洞，白天用前爪在草丛里扒个浅坑，趴在里面不动，毛色和枯草差不多。", caption: "藏在矮灌丛里的蒙古兔", shoot: "它趴着不动时远远拍，别走过去惊动它" },
        { photo: "step-ears", label: "竖耳朵", text: "听到动静，它会坐起来，把长耳朵竖得高高的，先听一听、看一看。", caption: "坐在草地上竖起耳朵的蒙古兔", shoot: "它坐起来张望时，站住别动，用长焦远远拍" },
        { photo: "step-run", label: "飞快跑", text: "真有危险，它就蹬开长后腿飞快跑掉。野兔靠跑得快保命，不像穴兔那样钻进洞里。", caption: "在草地上飞奔的蒙古兔", shoot: "它跑开时用高速快门远远拍；别追" },
      ],
      cite: ["adw-leporidae", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6 月拍到它最多，5～8 月都不少；11 月最少。它多在夜里出来，小兔白天也常出来。我们是哪个月遇见它的？",
      cite: ["wiki-en"],
    },
    {
      type: "lookalike",
      title: "野兔、穴兔、家兔，哪只是蒙古兔？",
      quiz: true,
      items: [
        {
          name: "穴兔", scientific: "Oryctolagus cuniculus",
          shot: { photo: "look-xue-tu", caption: "穴兔" },
          tells: ["耳朵短一些，耳尖不黑", "腿短一些，没那么能跑", "成群住在自己挖的地洞里"],
        },
        {
          name: "蒙古兔", scientific: "Lepus tolai", self: true,
          shot: { photo: "look-meng-gu-tu", caption: "蒙古兔" },
          tells: ["耳尖是黑的", "后腿又长又有劲", "尾巴上面黑、下面白"],
        },
        {
          name: "家兔", scientific: "Oryctolagus cuniculus domesticus",
          shot: { photo: "look-jia-tu", caption: "家兔" },
          tells: ["黑的、黄的、白的、花的都有", "耳尖不黑", "是穴兔养出来的，常在人家附近"],
        },
      ],
      cite: ["adw-leporidae", "adw-rabbit", "wiki-en"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "小野兔一生下来是什么样？", a: "身上已经长满毛，眼睛睁着，几个小时就能跑。穴兔宝宝刚出生却光溜溜、闭着眼。", cite: ["adw-leporidae", "adw-rabbit"] },
        { q: "兔妈妈多久喂一次奶？", a: "一天只喂一次，常在傍晚，每次不到 5 分钟。小野兔出生约 3 天就分开躲，到时候再聚过来吃奶。", cite: ["adw-leporidae"] },
        { q: "兔子会吃自己的便便吗？", a: "会。它会把一种软软的绿色粪粒再吃下去，好把草里的营养再吸收一遍。", cite: ["adw-leporidae"] },
        { q: "兔妈妈和兔爸爸谁更大？", a: "兔妈妈更大。大多数哺乳动物是雄的更大，兔子刚好反过来。", cite: ["adw-leporidae"] },
        { q: "宠物兔是蒙古兔变的吗？", a: "不是。家兔都是欧洲的穴兔养出来的，现在已经有大约 80 个品种。", cite: ["adw-rabbit"] },
        { q: "北京有野兔吗？", a: "有。北京野生动物名录里只有一种兔，就是蒙古兔。国家植物园的红外相机也拍到过它。", cite: ["bj-list", "bj-zwy"] },
      ],
    },
  ],
  care: "远远看，不追、不摸、不喂。草里一动不动的小野兔别抱走，妈妈傍晚会回来喂奶。",
  nextTime: "下次在郊野草地边慢慢走：看见野兔跑开时，它的尾巴上面是黑的吗？",
  sources: [
    { id: "wiki-en", title: "Tolai hare", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tolai_hare" },
    { id: "adw-leporidae", title: "Leporidae (hares and rabbits)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Leporidae/" },
    { id: "adw-rabbit", title: "Oryctolagus cuniculus (European rabbit)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Oryctolagus_cuniculus/" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
    { id: "bj-zwy", title: "国家植物园部分景区恢复开放 还有重磅发现", by: "中国青年网", url: "https://tour.youth.cn/xw/202212/t20221230_14227252.htm" },
  ],
  by: ["kid", "dad"],
};

export default entry;
