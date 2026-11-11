// 从 iNaturalist 找一张可以署名转载的真实照片（CC0 / CC BY / CC BY-SA）。
// 主要给「容易认错」当对照；草稿的封面也可以先用一张占位，正式篇封面和记录块仍只用自己拍的。
//
//   npm run refphoto -- <图鉴id> "<学名或中文名>" --as <照片名> --list   先下几张候选到 snapshots/ref/<图鉴id>/，看图挑
//   npm run refphoto -- <图鉴id> "<学名或中文名>" --as <照片名> --pick 3  用第 3 张（默认第 1 张）
//   加 --global：中国境内找不到时不限地区
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CHINA, fail, findTaxon, getBuffer, getJson, PHOTO, photoName, readJson, requireEntry, root, savePhoto, upsertPhoto, writeJson } from "./lib.mjs";

const USAGE = '用法：npm run refphoto -- <图鉴id> "<学名或中文名>" --as <照片名> [--list | --pick N] [--global]';
const LICENSES = ["cc0", "cc-by", "cc-by-sa"];
const INAT = "https://api.inaturalist.org/v1";

const args = process.argv.slice(2);
const id = args.shift();
requireEntry(id, USAGE);
let as = null;
let pick = 1;
let list = false;
let global = false;
const words = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--as") as = args[++i];
  else if (args[i] === "--pick") pick = Number(args[++i]);
  else if (args[i] === "--list") list = true;
  else if (args[i] === "--global") global = true;
  else words.push(args[i]);
}
const query = words.join(" ").trim();
if (!query || !as) fail(USAGE);
if (photoName(as) !== as) fail(`照片名只能用小写字母、数字、短横线：${as}`);

const { taxon, near } = await findTaxon(query);
if (!taxon) fail(`iNaturalist 里没有名字正好是「${query}」的，最接近的：\n  ${near.join("\n  ")}\n用其中一个完整学名再试`);
const refDir = join(root, "snapshots/ref", id);
const refRel = `snapshots/ref/${id}`;

// 研究级优先；栽培种（月季、西府海棠等）常常只有 needs_id / casual，再放宽一次
const search = async (place, researchOnly) => (await getJson(
  `${INAT}/observations?taxon_id=${taxon.id}&photo_license=${LICENSES.join(",")}${researchOnly ? "&quality_grade=research" : ""}&order_by=votes&per_page=12${place ? `&place_id=${place}` : ""}`,
))?.results ?? [];
const gather = async (researchOnly) => {
  let obs = global ? [] : await search(CHINA.id, researchOnly);
  let where = global ? "全球" : CHINA.name;
  if (obs.length < 3) {
    obs = await search(null, researchOnly);
    where = "全球";
  }
  return { obs, where };
};
let { obs, where } = await gather(true);
let gradeNote = "研究级";
if (obs.length < 3) {
  ({ obs, where } = await gather(false));
  gradeNote = "含未研究级";
}
const candidates = obs.flatMap((o) => o.photos
  .filter((p) => LICENSES.includes(p.license_code))
  .slice(0, 1)
  .map((p) => ({ photo: p, obs: o })));
if (!candidates.length) fail(`没找到可转载的「${taxon.preferred_common_name ?? taxon.name}」照片`);
console.log(`（${gradeNote}）`);

const author = ({ photo, obs }) => photo.attribution.match(/^\(c\)\s*([^,]+)/)?.[1]?.trim() || obs.user?.name || obs.user?.login || "iNaturalist 用户";
const sized = (url, size) => url.replace(/\/square\.(\w+)/, `/${size}.$1`);

console.log(`${taxon.preferred_common_name ?? ""} ${taxon.name}：${where}找到 ${candidates.length} 张可转载照片`);

if (list) {
  mkdirSync(refDir, { recursive: true });
  const tiles = [];
  for (const [i, c] of candidates.slice(0, 8).entries()) {
    const buf = await getBuffer(sized(c.photo.url, "medium"));
    writeFileSync(join(refDir, `${as}-${i + 1}.jpg`), buf);
    tiles.push(buf);
    console.log(`  ${i + 1}. ${refRel}/${as}-${i + 1}.jpg  ${c.photo.license_code}  ${author(c)}  ${c.obs.place_guess ?? ""}`);
  }
  await contactSheet(tiles, join(refDir, `${as}-sheet.jpg`));
  writeJson(join(refDir, `${as}.json`), { query, candidates: candidates.slice(0, 8) });
  console.log(`\n一张图看全部：${refRel}/${as}-sheet.jpg`);
  console.log(`看过图后：npm run refphoto -- ${id} "${query}" --as ${as} --pick <N>`);
  process.exit(0);
}

/** 候选拼成一张带编号的大图，看图的 agent 读一张就能挑 */
async function contactSheet(buffers, out) {
  const sharp = (await import("sharp")).default;
  const S = 320;
  const cols = Math.min(4, buffers.length);
  const rows = Math.ceil(buffers.length / cols);
  const composite = await Promise.all(buffers.map(async (buf, i) => {
    const label = Buffer.from(`<svg width="${S}" height="${S}"><rect x="8" y="8" width="44" height="44" rx="22" fill="#fff"/><text x="30" y="40" font-size="28" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#333">${i + 1}</text></svg>`);
    const tile = await sharp(buf).resize(S, S, { fit: "cover" }).composite([{ input: label }]).toBuffer();
    return { input: tile, left: (i % cols) * (S + 6), top: Math.floor(i / cols) * (S + 6) };
  }));
  await sharp({ create: { width: cols * (S + 6) - 6, height: rows * (S + 6) - 6, channels: 3, background: "#ffffff" } })
    .composite(composite).jpeg({ quality: 80 }).toFile(out);
}

// 用 --list 时看到的那一批，免得两次查询之间排序变了挑错照片
const cached = readJson(join(refDir, `${as}.json`), null);
const chosen = cached?.query === query ? cached.candidates[pick - 1] : candidates[pick - 1];
if (!chosen) fail(`只有 ${candidates.length} 张候选，--pick 超出范围`);
const saved = await savePhoto(await getBuffer(sized(chosen.photo.url, "large")), id, as, PHOTO.max);
upsertPhoto(id, as, {
  src: saved.src, thumb: saved.thumb, w: saved.w, h: saved.h,
  credit: { author: author(chosen), license: chosen.photo.license_code, url: `https://www.inaturalist.org/photos/${chosen.photo.id}`, source: "iNaturalist" },
});
console.log(`已保存 ${as}：${saved.w}×${saved.h}，${chosen.photo.license_code}，${author(chosen)}`);
console.log(`页面上会自动显示署名。entry.ts 里用 { photo: "${as}", caption: "…" } 引用。`);
