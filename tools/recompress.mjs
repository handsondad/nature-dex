/**
 * 按当前 PHOTO 规格，把 public/photos/ 里已有的 webp 再压一遍（原位置覆盖）。
 * GitHub 仓库空间有限时用：改过压缩参数后跑一次，或发现有人手拷了大图时跑一次。
 *
 *   npm run photos:recompress              # 全部
 *   npm run photos:recompress -- pu-gong-ying
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { entryDir, PHOTO, photoDir, readJson, root, savePhoto, upsertPhoto } from "./lib.mjs";

const idsArg = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const all = readdirSync(join(root, "public/photos")).filter((id) => existsSync(photoDir(id)));
const ids = idsArg.length ? idsArg : all;

let before = 0;
let after = 0;
let n = 0;

for (const id of ids) {
  const man = readJson(join(entryDir(id), "photos.json"), {});
  const names = Object.keys(man);
  if (!names.length) continue;
  for (const name of names) {
    const info = man[name];
    const file = join(root, "public", info.src);
    const thumbFile = join(root, "public", info.thumb);
    if (!existsSync(file)) {
      console.error(`缺文件：${info.src}`);
      continue;
    }
    const oldMain = statSync(file).size;
    const oldThumb = existsSync(thumbFile) ? statSync(thumbFile).size : 0;
    before += oldMain + oldThumb;
    // 先读进内存再写回，避免 Windows 上边读边覆盖
    const saved = await savePhoto(readFileSync(file), id, name, PHOTO.max);
    let wrote = false;
    for (let t = 0; t < 6; t++) {
      try {
        upsertPhoto(id, name, { ...info, src: saved.src, thumb: saved.thumb, w: saved.w, h: saved.h });
        wrote = true;
        break;
      } catch {
        await new Promise((r) => setTimeout(r, 150 * (t + 1)));
      }
    }
    if (!wrote) console.error(`写清单失败：${id}/${name}`);
    const newThumb = existsSync(join(root, "public", saved.thumb)) ? statSync(join(root, "public", saved.thumb)).size : 0;
    after += saved.bytes + newThumb;
    n++;
    console.log(`${id}/${name.padEnd(18)} ${((oldMain + oldThumb) / 1024).toFixed(0).padStart(4)} → ${((saved.bytes + newThumb) / 1024).toFixed(0).padStart(4)} KB`);
  }
}

console.log(`\n共 ${n} 张：${(before / 1024 / 1024).toFixed(1)} MB → ${(after / 1024 / 1024).toFixed(1)} MB（正文图；缩略图另计）`);
console.log(`规格：长边 ≤${PHOTO.max}，质量 ${PHOTO.quality}；缩略图 ${PHOTO.thumb}² 质量 ${PHOTO.thumbQuality}`);
