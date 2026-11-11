// 把我们自己拍的照片放进一篇图鉴：读出拍摄日期 → 去掉 EXIF 和定位 → 压成 webp + 方形缩略图 → 写进 photos.json。
//
//   npm run photos -- <图鉴id> <照片或文件夹...>
//   npm run photos -- <图鉴id> raw/IMG_2031.jpg --as leaf     指定照片名（只给一张照片时）
//   npm run photos -- <图鉴id> raw/dandelion/ --max 1200      长边像素，默认见 lib.mjs 的 PHOTO.max
//
// 原图放 raw/（不进仓库）；只提交处理过的小 webp。禁止把未压缩原图拷进 public/photos/。
import { existsSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { fail, PHOTO, photoName, requireEntry, savePhoto, upsertPhoto } from "./lib.mjs";

const USAGE = `用法：npm run photos -- <图鉴id> <照片或文件夹...> [--as 名字] [--max ${PHOTO.max}]`;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".avif", ".heic"]);

const args = process.argv.slice(2);
const id = args.shift();
requireEntry(id, USAGE);
let as = null;
let max = PHOTO.max;
const inputs = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--as") as = args[++i];
  else if (args[i] === "--max") max = Number(args[++i]);
  else inputs.push(args[i]);
}
if (!inputs.length) fail(USAGE);

const files = inputs.flatMap((p) => {
  if (!existsSync(p)) fail(`找不到：${p}`);
  if (statSync(p).isDirectory()) return readdirSync(p).sort().map((f) => join(p, f)).filter((f) => EXTS.has(extname(f).toLowerCase()));
  return [p];
});
const heic = files.filter((f) => /\.heic$/i.test(f));
if (heic.length) fail(`HEIC 先转成 JPG 再来（手机设置里选「兼容性最佳」，或用系统照片应用导出）：\n${heic.join("\n")}`);
if (as && files.length !== 1) fail("--as 只能配一张照片");
if (as && photoName(as) !== as) fail(`照片名只能用小写字母、数字、短横线：${as}`);

const exifr = (await import("exifr")).default;
const pad = (n) => String(n).padStart(2, "0");
let n = 0;
for (const file of files) {
  const name = as ?? (photoName(basename(file)) || `photo-${++n}`);
  let takenAt;
  try {
    const exif = await exifr.parse(file, ["DateTimeOriginal", "CreateDate"]);
    const d = exif?.DateTimeOriginal ?? exif?.CreateDate;
    if (d instanceof Date && !Number.isNaN(d.getTime())) takenAt = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  } catch {
    // 没有 EXIF 的照片（截图、转存过的）照样处理，只是没有拍摄日期
  }
  const saved = await savePhoto(file, id, name, max);
  upsertPhoto(id, name, { src: saved.src, thumb: saved.thumb, w: saved.w, h: saved.h, ...(takenAt && { takenAt }), credit: "ours" });
  console.log(`${name.padEnd(20)} ${saved.w}×${saved.h}  ${(saved.bytes / 1024).toFixed(0).padStart(4)} KB  ${takenAt ? "拍于 " + takenAt : "（没有拍摄日期）"}`);
}
console.log(`\n已写入 src/entries/${id}/photos.json。在 entry.ts 里用 { photo: "<名字>", caption: "…" } 引用。`);
