import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bei-jing-yu-yan",
  name: "北京雨燕",
  pinyin: "běi jīng yǔ yàn",
  // 普通雨燕 Apus apus 的亚种，GBIF 接受这个亚种名；在北京繁殖的就是它。
  // 下面引用的研究分两种：北京雨燕自己的（Zhao 2022、北京市园林绿化局）和普通雨燕的（Hedenström 2016、ADW、BOW），正文里分开写。
  scientific: "Apus apus pekinensis",
  kind: "animal",
  // 雨燕飞得快，照片常常糊，拍清楚喉咙和尾巴再改 sure
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雨燕目", "雨燕科", "雨燕属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的北京雨燕", shoot: "5～7 月傍晚，在城楼、古建筑或立交桥附近，抬头拍飞过的雨燕，翅膀张开、尾巴清楚；不要靠近它们钻进去的缝隙" },
  hello: "它在天上吃虫、在天上休息，除了孵蛋，很少落地。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "in-flight", caption: "头顶飞过的一只北京雨燕", shoot: "从下往上拍飞过头顶的一只，翅膀完全张开；连拍多张，挑翅膀和尾巴最清楚的" },
      points: [
        { x: 0.37, y: 0.6, label: "翅膀像镰刀", detail: "翅膀又细又长，尖尖的，弯得像一把镰刀。", cite: ["yl-2021"] },
        { x: 0.535, y: 0.72, label: "尾巴分叉浅", detail: "尾巴末端分了叉，但分得不深。", cite: ["yl-2021", "adw-apus"] },
        { x: 0.53, y: 0.31, label: "喉咙灰白", detail: "下巴和喉咙有一块灰白色，在黑身子上很显眼。", cite: ["yl-2021", "bow-comswi"] },
        { x: 0.525, y: 0.47, label: "全身黑褐", detail: "身体黑褐色，胸和肚子上有细细的白色鳞纹，要离得很近才看得见。", cite: ["yl-2021"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看：几乎看不见的脚",
      shot: { photo: "foot", caption: "托在手里的一只雨燕，身子下面露出两只小脚", shoot: "只在救护中心或救护人员手里拍；自己捡到雨燕先交给大人，不要为了拍照多拿着它" },
      text: "它的腿非常短，看起来像没有脚。脚趾都朝前，爪子短而弯，能钩住墙缝，却抓不住电线，也没法在平地上走。",
      zoom: 2.5,
      start: [0.47, 0.51],
      cite: ["yl-rescue", "yl-2021"],
    },
    {
      type: "steps",
      title: "小雨燕长大",
      steps: [
        { photo: "step-nest", label: "回窝", caption: "张开尾巴刹车、正要飞进墙洞的雨燕", shoot: "不拍：别去找它们的窝口，在远处看它们进出就好", text: "它在高大建筑的缝隙里做窝，窝里铺着草、树叶、干草和花瓣。" },
        { photo: "step-egg", label: "下蛋", caption: "两枚白色的雨燕蛋，下面是厘米尺", shoot: "不拍：蛋在缝隙深处，不打扰", text: "一窝常常 2 枚白蛋。爸爸妈妈轮流孵，大约 19～20 天孵出来。" },
        { photo: "step-chick", label: "离巢", caption: "刚长大的小雨燕，羽毛边缘白白的", shoot: "不拍：6～7 月捡到落地的小雨燕，交给大人联系救护中心", text: "孵出后 27～45 天，小雨燕长齐羽毛。它的额头发白，羽毛镶着白边，比爸爸妈妈更黑。" },
      ],
      cite: ["adw-apus", "yl-2021"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "这里的数字很小。在中国，大家只在 3～7 月拍到过它，6 月最多；8 月到第二年 2 月都是 0。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "雨燕还是燕子？",
      quiz: true,
      items: [
        {
          name: "家燕", scientific: "Hirundo rustica",
          shot: { photo: "look-jia-yan", caption: "红喉咙、长尾巴的燕子" },
          tells: ["额头和喉咙是红褐色的，胸前有一道深蓝色的带子", "尾巴分叉很深，两边拖着长长的尾羽", "常停在电线、屋脊上，在普通房子的屋檐下用泥做窝"],
        },
        {
          name: "北京雨燕", scientific: "Apus apus pekinensis", self: true,
          shot: { photo: "look-yu-yan", caption: "翅膀像镰刀的雨燕" },
          tells: ["全身黑褐色，只有喉咙灰白", "尾巴分叉浅", "停不住电线，在高大建筑的缝隙里做窝"],
        },
        {
          name: "白腰雨燕", scientific: "Apus pacificus",
          shot: { photo: "look-bai-yao", caption: "腰上有一道白带的白腰雨燕" },
          tells: ["腰上有一道明显的白带子", "尾巴分叉比北京雨燕深", "在北京多是春秋路过"],
        },
      ],
      cite: ["wiki-swallow", "yl-2021", "yl-rescue", "bow-fotswi", "wiki-pacswi", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它为什么叫「北京」雨燕？", a: "英国鸟类学家斯温侯用在北京采到的标本，1870 年给它起了名字。2008 年奥运会的福娃「妮妮」就是照着它设计的。", cite: ["yl-2021", "bow-comswi"] },
        { q: "冬天它去哪儿？", a: "科学家给北京的雨燕背上小小的定位器，发现它们 7 月中旬出发，经过中亚、飞过红海，到非洲南部过冬，一年来回大约 3 万公里。", cite: ["zhao-2022"] },
        { q: "它真的不落地吗？", a: "科学家追踪普通雨燕（北京雨燕是它的一个亚种）发现：不生宝宝的那 10 个月里，它们 99% 以上的时间都在天上飞。", cite: ["hedenstrom-2016"] },
        { q: "回到北京，它住哪儿？", a: "住在高大建筑的缝隙里：城楼、宫殿的屋檐下，还有立交桥的伸缩缝。很多雨燕年年飞回原来的窝。", cite: ["yl-2026", "yl-2021", "yl-2025"] },
        { q: "它一天能抓多少虫子？", a: "有人在一只雨燕嘴里数出 372 只小虫。照这样算，它喂小鸟的一天能抓 7000 多只虫。", cite: ["yl-2021"] },
        { q: "雨燕宝宝挨饿了怎么办？", a: "天气坏、爸爸妈妈抓不到虫时，雏鸟能放慢甚至暂停长大。有一只小雨燕三个星期没吃东西，还活了下来。", cite: ["bow-comswi"] },
      ],
    },
  ],
  care: "捡到落地的雨燕，先告诉大人。不喂东西，也不要往天上扔；大人可以联系野生动物救护中心。",
  nextTime: "6 月的傍晚去城楼或立交桥边抬头看：雨燕是一只只飞，还是成群一边叫一边绕圈？",
  sources: [
    { id: "yl-2021", title: "北京雨燕：古城精灵 友谊使者", by: "北京市园林绿化局（转载中国绿色时报）", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202108/t20210820_2472398.shtml" },
    { id: "yl-rescue", title: "北京雨燕的科学救护和放归", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202108/t20210815_2468571.shtml" },
    { id: "yl-2025", title: "107只北京雨燕完成年度“体检”", by: "北京市园林绿化局（转载北京日报）", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202507/t20250710_4146059.shtml" },
    { id: "yl-2026", title: "城市更新下的生存答卷：北京雨燕筑巢生境的十年变迁", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/anz/anzxd/202607/t20260729_4797685.shtml" },
    { id: "zhao-2022", title: "A 30,000-km journey by Apus apus pekinensis tracks arid lands between northern China and south-western Africa", by: "Movement Ecology, 2022", url: "https://doi.org/10.1186/s40462-022-00329-2" },
    { id: "hedenstrom-2016", title: "Annual 10-Month Aerial Life Phase in the Common Swift Apus apus", by: "Current Biology, 2016", url: "https://doi.org/10.1016/j.cub.2016.09.014" },
    { id: "bow-comswi", title: "Common Swift (Apus apus)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/comswi/cur/introduction" },
    { id: "adw-apus", title: "Apus apus (common swift)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Apus_apus/" },
    { id: "bow-fotswi", title: "Pacific Swift (Apus pacificus)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/fotswi/cur/introduction" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "wiki-pacswi", title: "Pacific swift", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pacific_swift" },
    { id: "wiki-swallow", title: "Barn swallow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Barn_swallow" },
  ],
  by: ["kid", "dad"],
};

export default entry;
