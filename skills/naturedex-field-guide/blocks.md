# 图鉴的块

类型定义在 `src/entry/types.ts`，渲染在 `src/blocks/`。每块滚进屏幕时淡入，交互都能用键盘操作，系统设置「减少动态效果」时不放动画。

## 按生物选块

| 生物 | 推荐的块（按顺序） | 拍照重点 |
|---|---|---|
| 开花植物 | record → hotspots（叶、茎、花）→ steps（花苞到果实）→ compare（同一棵不同日子）→ year → lookalike → facts | 整株、叶子特写、花正面、果实；同一棵隔几天再拍 |
| 树 | record → hotspots（树皮、叶、果）→ compare（四季同一角度）→ magnifier（叶脉、芽）→ year → facts | 每个季节在同一个位置拍一张全树 |
| 鸟 | record → hotspots（嘴、翅斑、尾）→ year → lookalike → facts | 远拍就够，别靠近；能拍到飞行或觅食更好 |
| 昆虫 | record → magnifier（复眼、翅、足）→ steps（变态发育）→ hotspots → lookalike → facts | 微距；只拍不抓 |
| 蜘蛛 | record → hotspots（腹部花纹、足）→ magnifier（网、眼）→ year → facts | 背景简单时拍整张网；只拍不碰 |
| 哺乳动物 | record → hotspots（耳、尾、毛色）→ year → facts | 远拍；多半在清晨、傍晚出来 |
| 蛙、蟾蜍、蜥蜴 | record → hotspots → steps（蝌蚪到成体）→ year → facts | 雨后、夏夜；不抓不摸 |
| 蘑菇 | record → hotspots（菌盖、菌褶、菌柄）→ magnifier → facts | 只拍不碰；`care` 必须写不采不吃；`certainty` 通常不高于 likely |
| 没认出来的 | record → hotspots（我们看到的特征）→ facts（我们的问题） | `certainty: "unsure"`，学名写到能确定的那一级 |

## record：我们的记录

真实遇见，一次一条，按时间排。一篇可以有好几次「再见面」。

```ts
{ type: "record", encounters: [
  {
    date: "2026-04-12", where: "小区花坛", weather: "晴，有点风",
    note: "花坛边上有三棵，一棵开花，两棵已经是白绒球。",
    said: { who: "kid", text: "它像一个小太阳！" },
    shots: [{ photo: "first-meet", caption: "第一次遇见" }],
  },
] }
```

- 只能用自己拍的照片（check 会查）。
- `said` 一字不改；没有就不写。
- `where` 写模糊地点，不写小区名、门牌、学校名。

## hotspots：怎么认出它

在一张照片上点出 1～6 个识别特征。最适合教「怎么认」。

```ts
{ type: "hotspots", title: "怎么认出它",
  shot: { photo: "whole-plant", caption: "一整棵", shoot: "斜上方拍一整棵" },
  points: [
    { x: 0.5, y: 0.78, label: "叶子贴地围成一圈", detail: "叶子都从根上长出来，平铺在地面上。", cite: ["foc-taraxacum"] },
  ] }
```

- `x`、`y` 是照片上的比例（左上角 0,0，右下角 1,1）。写完一定截图看点有没有对准。
- `label` 是孩子能自己验证的特征（看得见、摸得着、数得清），`detail` ≤70 字。
- 选能和相似物种区分开的特征，不要选所有植物都有的。

## magnifier：凑近看

放大镜在照片上滑动看细节。适合微距照片：种子、复眼、花蕊、叶脉、羽毛。

```ts
{ type: "magnifier", title: "凑近看一把小伞",
  shot: { photo: "seed-macro", caption: "白绒球的细节" },
  text: "每把小伞都有一根细细的伞柄……", zoom: 2.5, start: [0.55, 0.4], cite: ["foc-pgy"] }
```

- 原图尽量清楚；进仓库前必须 `npm run photos` / `refphoto` 压缩（默认长边 ≤1200，见 `tools/lib.mjs` 的 `PHOTO`）。不要为了「更清楚」把 `--max` 调到 2000+。
- `start` 是放大镜停下的位置，对准最值得看的地方。

## compare：变化

同一个东西两个时刻，拖动分界线对比。最能体现「时间」：花变果、叶变色、蝌蚪长腿、冰化开。

```ts
{ type: "compare", title: "同一棵，不同的日子",
  before: { photo: "same-yellow", label: "4月12日", caption: "黄花" },
  after: { photo: "same-white", label: "4月20日", caption: "白绒球" },
  text: "隔了 8 天……" }
```

- 两张照片要同一位置、同一角度、同一方向（横竖一致）。拍第一张时就提醒大人记住位置。
- `label` 最好写日期，让孩子自己算隔了几天。

## steps：一步一步

2～6 张照片串成一个过程，可以自动播放。生长、开花结果、变态发育、一天里花的开合。

```ts
{ type: "steps", title: "从黄花到小伞", steps: [
  { photo: "step-bud", label: "花苞", text: "绿色的苞片把小花包得紧紧的。", caption: "花苞" },
  { photo: "step-bloom", label: "开花", text: "……", caption: "开花" },
], cite: ["wiki-en"] }
```

- 每步 `label` ≤4 个字，`text` 一两句。
- 可以混用不同个体的照片，但都要是同一种。

## year：它的一年

12 个月的环形图：每月在中国被拍到多少次（开花植物另有开花；裸子植物没有这一圈，文字也别写「开花」），再把我们遇见它的月份钉上去。数据自动来自 `research.json`，只需写一句话。这句话里有图表之外的事实（「北京全年都有」「以卵过冬」）时加 `cite`。

```ts
{ type: "year", title: "什么时候能见到它", text: "在中国，大家最常在 3、4 月拍到它开花。我们是哪个月遇见它的？" }
```

- 先跑 `npm run taxon`。`text` 要和数据一致（看 taxon 打印的柱状图）。
- 观察数也受「那个月出门的人多不多」影响，页面已经注明了，`text` 里不要说成「只在 4 月出现」。

## lookalike：容易认错

2～4 个长得像的物种放一起，`quiz: true` 时先让孩子猜哪张是主角。

```ts
{ type: "lookalike", title: "黄色小花，别认错", quiz: true, items: [
  { name: "苦苣菜", scientific: "Sonchus oleraceus", shot: { photo: "look-kjc", caption: "苦苣菜" }, tells: ["茎上长叶子，叶子基部抱住茎"] },
  { name: "蒲公英", scientific: "Taraxacum mongolicum", self: true, shot: { photo: "look-pgy", caption: "蒲公英" }, tells: ["一根光溜溜的花茎只顶一朵花"] },
], cite: ["foc-pgy", "foc-kjc"] }
```

- 恰好一个 `self: true`。主角放中间或第二个，不要总放第一个。
- 对照物种用 `npm run refphoto` 找转载照片；主角最好用自己的照片。
- `tells` 写孩子在现场能看出来的区别。

## facts：你知道吗

翻面小卡，正面一个问题，背面答案和出处。1～6 张。

```ts
{ type: "facts", title: "你知道吗", cards: [
  { q: "小伞为什么能飘那么远？", a: "科学家发现……", cite: ["cummins-2018"] },
] }
```

- 问题最好来自孩子真的问过的（`notes.md` 里「孩子问的问题」）。
- 每张必须有 `cite`；答案 ≤90 字。
- 选让人「哇」一下的真事，不选课本定义。

## 加一种新块

确实需要时（比如鸟叫声 `listen`、足迹 `tracks`）：

1. `src/entry/types.ts` 的 `Block` 加一个分支
2. `src/blocks/` 加组件，在 `BlockView.tsx` 的 `BLOCK_META` 和 `Body` 里接上
3. `tools/rules.mjs` 的 `shotsOf` / `citesOf` / `textsOf` 和检查里接上
4. 在本文件写一节
5. 声音等新素材的来源写进 `THIRD_PARTY_NOTICES.md`（比如 xeno-canto 的 CC 录音）
