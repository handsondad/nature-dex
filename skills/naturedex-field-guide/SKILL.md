---
name: naturedex-field-guide
description: >-
  Makes one nature field-guide page (图鉴) in the nature-dex repo from a family's
  real photos and notes: identify the species with GBIF/iNaturalist, process
  photos (always compressed via npm run photos / refphoto), pick interactive
  blocks, write entry.ts with cited facts, then run check and snapshot until
  it looks right. Use when the user wants to 做图鉴、新图鉴、记录今天看到的植物/
  动物、补照片、压缩照片, or mentions entry.ts, photos.json, npm run taxon /
  photos / refphoto / photos:recompress.
---

# 做一篇自然图鉴

目标：把一次**真实的遇见**变成一篇孩子愿意反复翻看的图鉴。照片是我们拍的，话是孩子说的，知识有出处，页面会动但不吵。

仓库结构、命令、硬性规矩见根目录 `AGENTS.md`。每种块怎么用见 [blocks.md](blocks.md)，文字怎么写见 [writing.md](writing.md)。

## 三条底线

1. **真实**：记录块和封面只用我们自己拍的照片；不编遇见经历，不用 AI 生图。没拍到就留「待拍照片位」并写清楚 `shoot`。
2. **有出处**：每个知识点都有 `cite`，资料先查后写；查不到就不写，或者写成「我们还不知道」。
3. **孩子的话一字不改**：放进 `said`；大人的观察放进 `note`。不替孩子说话。

## 流程

一次只做一步，需要孩子决定的事（名字、标题、哪句话放进去）一次只问一个问题。

```
- [ ] 1. 收素材：照片 → raw/<id>/，现场笔记和孩子原话 → notes.md
- [ ] 2. 认物种：npm run taxon，定 certainty
- [ ] 3. 放照片：npm run photos（自己的）/ npm run refphoto（对照用）
- [ ] 4. 选块：照着 blocks.md 的「按生物选块」
- [ ] 5. 写 entry.ts
- [ ] 6. npm run check -- <id>，改到没有错误
- [ ] 7. npm run snapshot -- <id> --mobile，读切好的 -1、-2… 图，改到好看
- [ ] 8. npm run typecheck && npm test && npm run build
```

### 1. 收素材

- 新图鉴：`npm run entry:new -- <拼音id> <中文名> <学名>`，比如 `npm run entry:new -- pu-gong-ying 蒲公英 Taraxacum mongolicum`。不知道名字时中文名写孩子的叫法，学名留空。
- 原图放 `raw/<id>/`（不进仓库）。
- 问大人或孩子，把下面这些记进 `notes.md`：哪天、在哪儿（模糊地点：小区花坛、上学路上）、天气、它在干什么、孩子当时说了什么、孩子问了什么。
- 不知道就留空，别猜日子和地点。照片 EXIF 里的拍摄日期会在第 3 步打印出来，可以拿来核对。

### 2. 认物种

```bash
npm run taxon -- <id> "<学名或中文名>"
```

它会打印 GBIF 核对结果、中文分类链、在中国每月被拍到的次数（开花植物还有开花、结果；银杏、松柏这类裸子植物不开花，不查），并写入 `research.json`。

- 先看照片自己判断，再用 taxon 核对；GBIF 说名字不是 ACCEPTED 时，用它给的接受名。
- 拿不准到种：`certainty: "likely"`，或学名写到属（`Taraxacum sp.`）配 `"unsure"`。确认的特征写进 hotspots，让孩子看到「我们是怎么认出来的」。
- 打印出的 `taxonomy: [...]` 直接贴进 entry.ts。
- 维基摘要只是线索。写进图鉴的事实要回到 writing.md 里的可靠来源核对。

### 3. 放照片（必须走工具压缩）

GitHub 仓库和 Pages 空间有限：**进 `public/photos/` 的只能是工具压过的小 webp**，不要手拷原图。规格集中在 `tools/lib.mjs` 的 `PHOTO`（默认长边 ≤1200、质量约 70；缩略图 360²）。

```bash
npm run photos -- <id> raw/<id>/                  # 自己拍的：转正、去 EXIF/定位、压 webp、写 photos.json
npm run photos -- <id> raw/<id>/IMG_2031.jpg --as leaf
npm run photos:recompress                         # 改过 PHOTO 或发现大图时，整库再压一遍
npm run photos:recompress -- <id>                 # 只压一篇
```

名字用小写字母和短横线，起成内容名（`leaf`、`seed-ball`），别用 `img-2031`。原图放 `raw/`（不进仓库）。

**先看照片再写字**：用 Read 工具打开 `public/photos/<id>/*.webp`，确认每张拍到了什么，挑封面（主体清楚、最好认）。

转载对照照（容易认错；草稿正文占位也可以）同样走压缩：

```bash
npm run refphoto -- <id> "<学名>" --as look-xxx --list   # 下载候选，生成 snapshots/ref/<id>/look-xxx-sheet.jpg
npm run refphoto -- <id> "<学名>" --as look-xxx --pick 3 # 看过拼图后选第 3 张
```

挑能看出区别特征的那张。署名由页面自动显示。草稿阶段：封面和正文块（**除「我们的记录」**）可用 `refphoto` 占位；记录块和正式篇封面仍留给自己拍。

### 4. 选块

一篇 4～7 块就够。孩子能看完、愿意再翻回来，比面面俱到重要。必选：`record`（我们的遇见）和一块「怎么认出它」（通常是 `hotspots`）。其余按生物和手头照片挑，见 [blocks.md](blocks.md)。

没有对应照片的块就先不放，或者作为草稿留待拍位，`check` 会列出待拍清单，打印给大人带出门。

### 5. 写 entry.ts

先读一遍 `src/entry/types.ts`，再照 `src/entries/pu-gong-ying/entry.ts` 的样子写。

- `when.date`：第一次遇见那天（和最早的 record 一致）。
- `hello`：一个具体、有画面的真事，≤40 字。不是「蒲公英是一种植物」，而是「黄色的小太阳过一两周会变成白绒球」。
- `care`：守护提醒，说清楚怎么做，≤60 字。蘑菇必须写不采不吃；昆虫、鸟、水边各有要点，见 writing.md。
- `nextTime`：一个下次出门能验证的问题，把孩子带回现实。
- `sources`：先写资料，再在正文里用 `cite: ["id"]` 引用。
- 还缺自己的照片：`draft: true`。照片补齐、record 有真实遇见后去掉。

### 6～7. 检查和看图

```bash
npm run check -- <id>
npm run snapshot -- <id> --mobile
```

`check` 的错误必须改，提醒要逐条想一想。`snapshot` 会把长页切成 `snapshots/<id>-1.png`、`-2.png`…（手机版是 `-mobile-1.png`…），**每一段都读一遍**：

- hotspots 的点是不是正好落在要指的位置？（x、y 是照片上的比例，左上角是 0,0）
- 放大镜的 `start` 有没有对准要看的细节？
- 字有没有挤、有没有长得一屏看不完？
- 手机版是否能读？

点没对准就改 x、y 再截，通常两三轮。

### 8. 交付

`npm run typecheck && npm test && npm run build` 都通过后，请大人在浏览器 `npm run dev` 里从晾衣绳点进去完整看一遍。

## 补照片（草稿变成正式篇）

1. `npm run check -- <id>` 看待拍清单
2. 新照片 `npm run photos -- <id> raw/<id>/ --as <清单里的名字>`（一张一张给名字，名字要和 entry.ts 里的 `photo` 对上）
3. 在 record 里写上真实遇见；`when.date` 改成第一次遇见那天；去掉 `draft`
4. 回到第 6 步

## 验收

- `npm run check` 无错误
- snapshots 里每一段：照片清楚、点对得准、字看得清、手机能读
- 页面上每个知识点都能点到出处
- 孩子看过，点了头
