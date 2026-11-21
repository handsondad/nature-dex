import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bi-tao",
  name: "碧桃",
  scientific: "Prunus persica",
  kind: "plant",
  // 碧桃是桃的观赏栽培类型（常重瓣），品种很多；拍到重瓣花、花萼有毛，并和山桃对照
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "开花的桃枝，小叶子也冒出来了", shoot: "3～4 月开花时拍整棵树：满树的花要拍进去，树干也看得见" },
  hello: "春天公园里一团团粉红的重瓣花，很多是碧桃开的。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-double", caption: "一朵重瓣的红碧桃，旁边还有花苞", shoot: "开花时凑近拍一朵花：花瓣层数、花心和贴着枝条的花苞都拍清楚" },
      points: [
        { x: 0.25, y: 0.59, label: "好几层花瓣", detail: "碧桃是桃的重瓣品种，花瓣比普通桃花多，叠了好几层。", cite: ["frps-tao"] },
        { x: 0.55, y: 0.29, label: "一圈雄蕊", detail: "花心有 20～30 根雄蕊，顶上的花药是红红的小颗粒。", cite: ["frps-tao"] },
        { x: 0.31, y: 0.77, label: "花苞贴着枝", detail: "花几乎没有梗。花苞一个接一个顺着枝条排，比榆叶梅的长一点。", cite: ["foc-tao", "bj-yym"] },
        { x: 0.68, y: 0.17, label: "小枝半边红", detail: "小枝向阳的一面红，背阴的一面绿。", cite: ["foc-tao", "bjrb-guide"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看：一朵花两种颜色",
      shot: { photo: "flower-two-color", caption: "红白花桃：白花瓣上有粉红条纹", shoot: "找到花色杂的碧桃，凑近拍一朵：白花瓣上的红条纹要清楚" },
      text: "有一类叫撒金碧桃：白花瓣上带红条纹，有时一根枝上红花、白花一起开。拖动放大镜，找找花瓣上的红道道。",
      zoom: 2.5,
      start: [0.58, 0.3],
      cite: ["frps-tao"],
    },
    {
      type: "steps",
      title: "从花苞到毛桃",
      steps: [
        { photo: "step-bud", caption: "圆圆的红花苞，旁边一朵已经开了", shoot: "3 月拍枝条上鼓起来的花苞", label: "花苞", text: "早春枝上鼓起花苞。一个节上常有 3 个芽：两边的开花，中间的长叶。" },
        { photo: "flower-branch", caption: "开花的桃枝，花萼是红色的", shoot: "开花时拍一段枝条，花和枝条连着的地方要清楚", label: "开花", text: "花几乎贴着枝条开。碧桃常常一边开花，一边冒小叶。" },
        { photo: "step-leaf", caption: "窄长的桃叶，小枝向阳面是红的", shoot: "花谢后拍几片叶子，连着小枝一起", label: "长叶", text: "叶子窄长，长 7～15 厘米，边上有细锯齿。刚冒出来时是对折的。" },
        { photo: "step-fruit", caption: "两个毛茸茸的小青桃", shoot: "5～6 月找找有没有结小桃，拍下来", label: "结桃", text: "花谢后结出小桃，外面一层细毛，8～9 月成熟。" },
      ],
      cite: ["frps-tao", "foc-tao", "bjrb-guide"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，3 月拍到桃的人最多，开花的照片也集中在 3～4 月。北京圆明园的桃花能从 3 月中旬开到 5 月上旬。我们是哪个月遇见它的？",
      cite: ["bj-huahai"],
    },
    {
      type: "lookalike",
      title: "早春的粉红花，别认错",
      quiz: true,
      items: [
        {
          name: "山桃", scientific: "Prunus davidiana",
          shot: { photo: "look-shan-tao", caption: "山桃：光秃秃的枝上开满淡粉花", shoot: "3 月拍山桃开花的枝条" },
          tells: ["花开时枝上还没有叶子", "花单瓣，粉白色", "树干红褐色、亮亮的", "花萼外面光光的，没有毛"],
        },
        {
          name: "碧桃", scientific: "Prunus persica", self: true,
          shot: { photo: "look-bi-tao", caption: "碧桃：重瓣红花，旁边冒出小叶", shoot: "开花时拍一段碧桃枝条" },
          tells: ["花重瓣，粉红、大红都有", "花和小叶子一起冒出来", "小枝向阳面红、背阴面绿", "花萼外面有短毛"],
        },
        {
          name: "榆叶梅", scientific: "Prunus triloba",
          shot: { photo: "look-yym", caption: "榆叶梅：圆滚滚的花挤满枝条", shoot: "4 月拍榆叶梅开花的枝条" },
          tells: ["多是灌木，长不高", "花圆滚滚，一簇簇挤满枝条", "叶子宽，顶端常像分成 3 个尖"],
        },
      ],
      cite: ["bjrb-guide", "bj-yym", "foc-tao", "foc-st", "foc-yym"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么有的桃花是重瓣？", a: "科学家发现，桃的一个基因少了一小段，花瓣就变多了。重瓣的蔷薇里也有相似的变化。", cite: ["gattolin-2018"] },
        { q: "人种桃有多久了？", a: "浙江出土过约 8000 年前的桃核。科学家认为，长江下游的人至少 7500 年前就开始种桃了。", cite: ["zheng-2014"] },
        { q: "古罗马人叫它什么？", a: "叫「波斯苹果」。可考古发现，桃的老家其实在中国。", cite: ["wiki-en", "zheng-2014"] },
        { q: "平谷的桃花和公园的一样吗？", a: "平谷种的多是结桃子的果桃，花多是单瓣。公园里的观赏桃花色、花瓣数变化多，碧桃就是一种。", cite: ["bjrb-guide"] },
        { q: "树干上亮晶晶的胶是什么？", a: "那是桃树干分泌的胶，叫桃胶，可以用来粘东西。", cite: ["frps-tao"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花。公园的树可能打过药，花、果和桃胶都不放进嘴里。",
  nextTime: "花是单瓣还是重瓣？开花时枝上冒小叶子了吗？",
  sources: [
    { id: "foc-tao", title: "Amygdalus persica 桃", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010618" },
    { id: "frps-tao", title: "桃 Amygdalus persica（含碧桃等观赏类型）", by: "中国植物志（植物智）", url: "https://www.iplant.cn/info/Amygdalus%20persica?t=z" },
    { id: "foc-st", title: "Amygdalus davidiana 山桃", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010610" },
    { id: "foc-yym", title: "Amygdalus triloba 榆叶梅", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010625" },
    { id: "bj-yym", title: "【榆叶梅】榆叶梅与碧桃及美人梅的区别", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hhzs/201604/t20160415_118513.shtml" },
    { id: "bjrb-guide", title: "早春桃李杏梅樱花，该如何分辨？市园林绿化局指南来了", by: "北京日报", url: "https://www.sohu.com/a/768507762_163278" },
    { id: "bj-huahai", title: "2024年春季全市公园赏花片区统计表", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ggfw/gyfjqyl/gyhd/202404/t20240430_3649525.shtml" },
    { id: "zheng-2014", title: "Archaeological Evidence for Peach (Prunus persica) Cultivation and Domestication in China", by: "Zheng, Crawford & Chen, PLoS ONE (2014)", url: "https://doi.org/10.1371/journal.pone.0106595" },
    { id: "gattolin-2018", title: "Deletion of the miR172 target site in a TOE-type gene is a strong candidate variant for dominant double-flower trait in Rosaceae", by: "Gattolin et al., The Plant Journal (2018)", url: "https://doi.org/10.1111/tpj.14036" },
    { id: "wiki-en", title: "Peach", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peach" },
  ],
  by: ["kid", "dad"],
};

export default entry;
