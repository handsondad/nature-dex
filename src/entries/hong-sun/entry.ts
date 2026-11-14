import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "hong-sun",
  name: "红隼",
  scientific: "Falco tinnunculus",
  kind: "animal",
  // 半空迎风悬停、扇形长尾、眼下黑泪纹的小型猛禽在北京城郊最常见；远看逆光偶与阿穆尔隼等相近，拍清背羽后更稳妥
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "隼形目", "隼科", "隼属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "展翅掠过草地上空的雄性红隼",
    shoot: "在开阔草地或水库岸边仰头远拍：它悬停在半空或停在高枝、电线上时，用长焦拍清尖翅膀、扇形尾巴或眼下黑纹，千万别靠近它的落脚处",
  },
  hello: "迎着风快速扇翅、把尾巴张成小扇子，它能像钉在半空中一样低头找田鼠！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "hover-sky",
        caption: "在蓝天里张开翅膀和扇形尾羽悬停的红隼",
        shoot: "站在地面远远仰拍半空悬停的红隼：张开的双翅、扇子一样的尾巴和浅色带斑点的肚皮都在画面里",
      },
      points: [
        {
          x: 0.45,
          y: 0.46,
          label: "半空悬停的尖长翅膀",
          detail: "翼展约 65～82 厘米，翅膀狭长偏尖，翼尖深黑。迎风快速扇动时，身体能稳稳停在离地 10～20 米的半空。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          x: 0.42,
          y: 0.25,
          label: "像扇子一样张开的尾巴",
          detail: "尾巴比许多别的隼更长，悬停时宽宽张开稳住身体，尾端有一道醒目的黑宽边和窄白尖。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          x: 0.48,
          y: 0.56,
          label: "带深色斑纹的浅色肚皮",
          detail: "胸腹是浅棕黄色，洒着一串串深褐色纵斑和点子，从地面抬头看也很有辨识度。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          x: 0.52,
          y: 0.68,
          label: "低头盯地面的利眼",
          detail: "哪怕翅膀在抖动，它的脑袋也稳稳低垂盯着草丛；停稳近看时，眼睛下面各有一道黑色的「泪纹」（髭纹）。",
          cite: ["wiki-en", "adw-kestrel"],
        },
      ],
    },
    {
      type: "compare",
      title: "红隼爸爸和妈妈，羽毛不一样",
      before: { photo: "male", label: "雄鸟", caption: "蓝灰脑袋配砖红黑点背" },
      after: { photo: "female", label: "雌鸟", caption: "头和背都是棕褐色横斑" },
      text: "在大多数猛禽里雌雄长得很像，红隼却能靠羽毛颜色分出公母：成年雄鸟顶着蓝灰色的脑袋和蓝灰尾巴，后背是鲜亮的砖红色配黑点；雌鸟个头比雄鸟稍大一点，从头顶、后背到尾巴都是棕褐色，布满一道道深色横斑。不管公母，眼睛下面都有那道帅气的黑「泪纹」。",
      cite: ["wiki-en", "adw-kestrel"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年四季都有人拍到它，10 月迁徙季记录最多。北京名录里它是国家二级重点保护野生动物，也是「留鸟 / 夏候鸟」，在奥北森林公园、沙河水库和沙河园开阔绿地上空常能仰望到它。我们会在哪个月遇见它？",
      cite: ["bj-bird-list", "bj-aobei", "bj-shahe-res", "bj-shahe-park"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "为什么它能像直升机一样「钉」在半空？",
          a: "古英文叫它 windhover（迎风悬停者）！它迎着风飞，靠快速浅扇翅膀和张开的扇形尾羽抵消风速，让脑袋在离地 10～20 米高处保持一动不动，看清草里的动静。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          q: "红隼在草地上空主要找什么吃？",
          a: "它最爱抓田鼠、姬鼠等小老鼠，一只成鸟一天大约要吃相当于 4～8 只田鼠的食物；天暖虫多时，也常扑下去抓蝗虫、甲虫等大昆虫。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          q: "为什么有时会在高楼窗台发现红隼孵蛋？",
          a: "红隼自己不会编树枝窝！在野外它住悬崖洞、树洞或喜鹊的旧窝；到了城里，高楼就像悬崖，空花盆或空调外机缝有时会被它选中下 3～7 枚带褐斑的蛋。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          q: "红隼是什么保护级别的鸟？",
          a: "它是国家二级重点保护野生动物！身长只有 30～39 厘米、体重 150～300 克左右，虽是小个子猛禽，却是帮绿地和农田控制鼠害的好帮手。",
          cite: ["bj-bird-list", "wiki-en", "adw-kestrel"],
        },
      ],
    },
  ],
  care: "国家二级重点保护猛禽，只远远仰望不惊扰！若在窗台花盆或空调外机缝发现它下蛋孵娃，千万别轰赶、别伸手摸，拉上窗帘静静守护。",
  nextTime: "下次看到天上悬停的红隼，在心里默默数秒：它能在同一个地方稳稳停住多少秒才换位置？",
  sources: [
    { id: "wiki-en", title: "Common kestrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_kestrel" },
    { id: "adw-kestrel", title: "Falco tinnunculus (common kestrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Falco_tinnunculus/" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-aobei", title: "千园之城提靓生态画卷", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml" },
    { id: "bj-shahe-res", title: "北京水库湿地推荐观鸟地——沙河水库", by: "京报网", url: "https://news.bjd.com.cn/2024/05/06/10764985.shtml" },
    { id: "bj-shahe-park", title: "全龄乐活 观鸟寻趣！昌平这两个公园成为打卡新地标", by: "首都之窗（北京市人民政府门户网站）", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/gqzn/202606/t20260622_4710246.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
