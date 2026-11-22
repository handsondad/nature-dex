import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 《中国植物志》写作 Populus tomentosa；GBIF 接受的是杂交种写法 Populus × tomentosa。
// 找不到可转载的毛白杨裂果和杨絮照片，「从花序到杨絮」只放能确认是毛白杨的三张。
const entry: Entry = {
  id: "mao-bai-yang",
  name: "毛白杨",
  pinyin: "máo bái yáng",
  scientific: "Populus × tomentosa",
  kind: "plant",
  // 叶背也发白的杨树不止一种，拍到长枝叶子的形状、波状齿和扁叶柄再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "杨柳科", "杨属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "北京夏天，毛白杨枝头的叶子", shoot: "我们遇见的那一棵：整棵树，灰白色的树干和树冠都拍进去" },
  hello: "春天，它的果子裂开，白白的杨絮带着种子满天飞。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf", caption: "一片翻过来的叶子，露出发白的叶背", shoot: "低处一根长枝：一片叶子正面朝上、一片翻过来露出叶背，叶柄要拍清楚（不用摘）" },
      points: [
        { x: 0.62, y: 0.27, label: "宽宽的三角形叶子", detail: "长枝上的叶子是宽卵形或三角状卵形，长 10～15 厘米，不分裂。", cite: ["frps-mby"] },
        { x: 0.5, y: 0.38, label: "叶背的白毡毛", detail: "叶背密密地长着一层白色毡毛，后来会慢慢掉。风一吹，满树翻出点点银光。", cite: ["frps-mby", "gmw-mby"] },
        { x: 0.2, y: 0.36, label: "扁扁的叶柄", detail: "叶柄上半截是从两边压扁的，长 3～7 厘米。", cite: ["frps-mby"] },
        { x: 0.8, y: 0.45, label: "波浪一样的齿", detail: "叶边是深的牙齿或波浪一样的粗齿。", cite: ["frps-mby"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看树皮",
      shot: { photo: "bark", caption: "北京公园里一棵毛白杨的树干", shoot: "正对一棵毛白杨的树干，离一两步，把皮孔拍清楚" },
      text: "灰白的树皮上散着一个个黑色的菱形小疤，这叫皮孔。有的单个散着，有的两三个连成一排。",
      zoom: 2.5,
      start: [0.42, 0.25],
      cite: ["frps-mby", "gmw-mby"],
    },
    {
      type: "steps",
      title: "从花序到杨絮",
      steps: [
        { photo: "step-catkin", label: "花序", text: "早春，叶子还没长出来，枝头先垂下一串串花序。", caption: "郑州早春，枝头垂下的花序", shoot: "3 月枝头垂下的花序，抬头从下往上拍" },
        { photo: "step-fruit", label: "果序", text: "雌树的花序结出一串串小蒴果，果序能长到 14 厘米。", caption: "北京 3 月底，一串串小蒴果", shoot: "4 月雌树上一串绿色的小蒴果" },
        { photo: "summer-tree", label: "飞絮后", text: "四五月，蒴果裂成两瓣，带着白绒毛的种子随风飞走，这就是杨絮。絮飞完，叶子也长满了。", caption: "叶子长满的毛白杨", shoot: "4～5 月刚裂开、露出白絮的果序，靠近拍" },
      ],
      cite: ["frps-mby", "bj-kxld", "gmw-mby"],
    },
    {
      type: "magnifier",
      title: "树下的「毛毛虫」",
      shot: { photo: "fallen-catkins", caption: "圆明园里的毛白杨和春天掉下来的花序", shoot: "春天毛白杨树下，近拍地上一条「毛毛虫」" },
      text: "春天，有些杨树底下掉满了「毛毛虫」。它们不是虫，是雄树的雄花序：花粉散完，整串花序就落下来。",
      zoom: 2.5,
      start: [0.75, 0.82],
      cite: ["bj-kxld", "gmw-mby"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，它的研究级观察一年才 28 次，看不出季节。植物志写它 3 月开花、4～5 月结果；北京 4 月上旬到 5 月上旬飘杨柳絮。",
      cite: ["frps-mby", "bj-fx"],
    },
    {
      type: "lookalike",
      title: "哪一棵是毛白杨？",
      quiz: true,
      items: [
        {
          name: "银白杨", scientific: "Populus alba",
          shot: { photo: "look-yin-bai-yang", caption: "叶子像小枫叶的银白杨" },
          tells: ["长枝上的叶子掌状 3～5 浅裂，像小枫叶", "叶背也有白色绒毛", "树皮也是白色或灰白色"],
        },
        {
          name: "毛白杨", scientific: "Populus × tomentosa", self: true,
          shot: { photo: "leaf", caption: "叶背发白的一片叶子" },
          tells: ["叶子宽卵形到三角状卵形，不分裂", "叶背密生白毡毛，后来慢慢掉", "叶边是深牙齿或波浪一样的粗齿"],
        },
        {
          name: "加杨", scientific: "Populus × canadensis",
          shot: { photo: "look-jia-yang", caption: "三角形的加杨叶子" },
          tells: ["叶子三角形，边上是圆圆的锯齿", "叶背淡绿色，没有白毡毛", "是杂交种，我国各地都有种"],
        },
      ],
      cite: ["frps-mby", "iplant-ybY", "iplant-jy"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "树干上的「大眼睛」是什么？", a: "是枝痕。每只「眼睛」的地方，以前都长过一根枝条，枝条被剪掉后留下了疤。", cite: ["gmw-mby"] },
        { q: "它为什么又叫「响杨」？", a: "它的叶柄细细的，风一吹，满树叶子唰唰作响。", cite: ["gmw-mby"] },
        { q: "杨絮是什么？", a: "是雌树种子上的白绒毛。蒴果裂开，绒毛带着不到芝麻粒大的种子随风飞。雄树不飞絮。", cite: ["bj-kxld", "bj-fx"] },
        { q: "毛白杨的老家在哪儿？", a: "它是中国特有的树，以黄河中下游为中心。给它定名的模式标本，就采自北京南口和八达岭一带。", cite: ["frps-mby"] },
        { q: "要是北京没有杨树呢？", a: "杨树能长到 30～40 米高。北京市园林绿化局说，没有杨树，北京的绿色天际线会矮 10 米。", cite: ["bj-stjz"] },
        { q: "一棵杨树能吸多少二氧化碳？", a: "一棵胸径 20 厘米的杨树，一年大约吸收 172 千克二氧化碳，放出 125 千克氧气。", cite: ["bj-stjz"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不剥树皮。杨絮飞进眼睛别揉，告诉大人。",
  nextTime: "找一棵毛白杨，数数树干上有几只「大眼睛」；春天再看看树下有没有「毛毛虫」。",
  sources: [
    { id: "frps-mby", title: "毛白杨 Populus tomentosa（《中国植物志》第 20(2) 卷）", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/z/frps/11308" },
    { id: "gmw-mby", title: "毛白杨：长有“大眼睛”的守护者（王珏，北京林业大学）", by: "光明网", url: "https://m.gmw.cn/baijia/2024-04/23/37280265.html" },
    { id: "iplant-ybY", title: "银白杨 Populus alba", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Populus%20alba" },
    { id: "iplant-jy", title: "加杨 Populus × canadensis", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Populus%20%C3%97%20canadensis" },
    { id: "bj-fx", title: "治理杨柳飞絮 共创宜居环境", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/zlylfxgcyjhj/index.shtml" },
    { id: "bj-kxld", title: "科学理性对待杨柳飞絮", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/zlylfxgcyjhj/ylfxkpzs/202403/t20240308_3583528.shtml" },
    { id: "bj-stjz", title: "杨柳树生态价值", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/zlylfxgcyjhj/ylfxkpzs/202403/t20240308_3583529.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;