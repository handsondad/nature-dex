// 从 iNaturalist（或维基共享资源）找一张可以署名转载的真实照片（CC0 / CC BY / CC BY-SA）。
// 主要给「容易认错」当对照；草稿的封面也可以先用一张占位，正式篇封面和记录块仍只用自己拍的。
//
//   npm run refphoto -- <图鉴id> "<学名或中文名>" --as <照片名> --list   先下几张候选到 snapshots/ref/<图鉴id>/，看图挑
//   npm run refphoto -- <图鉴id> "<学名或中文名>" --as <照片名> --pick 3  用第 3 张（默认第 1 张）
//   加 --global：中国境内找不到时不限地区
//
// 找特定样子的照片（一步一步、变化、凑近看常用）：
//   --stage <名>    按 iNaturalist 标注筛：egg larva pupa nymph adult juvenile（生长阶段）、
//                   flowers fruits buds（花果）、budding green colored bare（叶子）、male female、
//                   nest feather track scat molt gall（痕迹）
//   --month 3,4     只要这几个月拍的（季节对比）
//   --page 2        下一批候选
//   --photos 3      每条观察取前 3 张（默认 1；后面几张常是果实、叶背、特写）
//   --n 12          列多少张候选（默认 8，最多 16）
//   --commons "Populus tomentosa catkin"  iNaturalist 上找不到时，改去维基共享资源按关键词搜（--page、--n 照样能用）
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CHINA, fail, findTaxon, getBuffer, getJson, PHOTO, photoName, readJson, requireEntry, root, savePhoto, upsertPhoto, writeJson } from "./lib.mjs";

const USAGE = '用法：npm run refphoto -- <图鉴id> "<学名或中文名>" --as <照片名> [--list | --pick N] [--global] [--stage 名] [--month 3,4] [--page N] [--photos K] [--n N] [--commons "关键词"]';
const LICENSES = ["cc0", "cc-by", "cc-by-sa"];
const INAT = "https://api.inaturalist.org/v1";
/** iNaturalist 标注：term_id / term_value_id（见 api.inaturalist.org/v1/controlled_terms） */
const STAGES = {
  adult: [1, 2], pupa: [1, 4], nymph: [1, 5], larva: [1, 6], egg: [1, 7], juvenile: [1, 8],
  flowers: [12, 13], fruits: [12, 14], buds: [12, 15],
  budding: [36, 37], green: [36, 38], colored: [36, 39], bare: [36, 40],
  female: [9, 10], male: [9, 11],
  feather: [22, 23], scat: [22, 25], track: [22, 26], gall: [22, 29], molt: [22, 28], nest: [22, 35],
};

const args = process.argv.slice(2);
const id = args.shift();
requireEntry(id, USAGE);
let as = null;
let pick = 1;
let list = false;
let global = false;
let stage = null;
let month = null;
let page = 1;
let perObs = 1;
let listN = 8;
let commons = null;
const words = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--as") as = args[++i];
  else if (args[i] === "--pick") pick = Number(args[++i]);
  else if (args[i] === "--list") list = true;
  else if (args[i] === "--global") global = true;
  else if (args[i] === "--stage") stage = args[++i];
  else if (args[i] === "--month") month = args[++i];
  else if (args[i] === "--page") page = Number(args[++i]);
  else if (args[i] === "--photos") perObs = Number(args[++i]);
  else if (args[i] === "--n") listN = Math.min(16, Number(args[++i]));
  else if (args[i] === "--commons") commons = args[++i];
  else words.push(args[i]);
}
const query = words.join(" ").trim();
if (!query || !as) fail(USAGE);
if (photoName(as) !== as) fail(`照片名只能用小写字母、数字、短横线：${as}`);
if (stage && !STAGES[stage]) fail(`--stage 只能是：${Object.keys(STAGES).join(" ")}`);
if (month && !/^\d{1,2}(,\d{1,2})*$/.test(month)) fail("--month 写成 3 或 3,4,5");
if (!(page >= 1 && perObs >= 1 && listN >= 1) || commons === undefined) fail(USAGE);
const filters = [
  stage ? `&term_id=${STAGES[stage][0]}&term_value_id=${STAGES[stage][1]}` : "",
  month ? `&month=${month}` : "",
  `&page=${page}`,
].join("");
// 同一组条件才能复用 --list 时缓存的候选
const cacheKey = JSON.stringify({ query, stage, month, page, perObs, global, commons });

const refDir = join(root, "snapshots/ref", id);
const refRel = `snapshots/ref/${id}`;

/** 候选统一成：小图、大图、作者、授权、原图页、来源、地点 */
const candidates = commons ? await fromCommons(commons) : await fromInat();
if (list) {
  mkdirSync(refDir, { recursive: true });
  const tiles = [];
  for (const [i, c] of candidates.slice(0, listN).entries()) {
    const buf = await getBuffer(c.small);
    writeFileSync(join(refDir, `${as}-${i + 1}.jpg`), buf);
    tiles.push(buf);
    console.log(`  ${i + 1}. ${refRel}/${as}-${i + 1}.jpg  ${c.license}  ${c.author}  ${c.where ?? ""}`);
  }
  await contactSheet(tiles, join(refDir, `${as}-sheet.jpg`));
  writeJson(join(refDir, `${as}.json`), { key: cacheKey, candidates: candidates.slice(0, listN) });
  console.log(`\n一张图看全部：${refRel}/${as}-sheet.jpg`);
  const opts = [
    commons && `--commons "${commons}"`, stage && `--stage ${stage}`, month && `--month ${month}`,
    page > 1 && `--page ${page}`, perObs > 1 && `--photos ${perObs}`, global && "--global",
  ].filter(Boolean).join(" ");
  console.log(`看过图后：npm run refphoto -- ${id} "${query}" --as ${as}${opts ? " " + opts : ""} --pick <N>`);
  process.exit(0);
}

// 用 --list 时看到的那一批，免得两次查询之间排序变了挑错照片
const cached = readJson(join(refDir, `${as}.json`), null);
const chosen = cached?.key === cacheKey ? cached.candidates[pick - 1] : candidates[pick - 1];
if (!chosen) fail(`只有 ${candidates.length} 张候选，--pick 超出范围`);
const saved = await savePhoto(await getBuffer(chosen.large), id, as, PHOTO.max);
upsertPhoto(id, as, {
  src: saved.src, thumb: saved.thumb, w: saved.w, h: saved.h,
  credit: { author: chosen.author, license: chosen.license, url: chosen.page, source: chosen.source },
});
console.log(`已保存 ${as}：${saved.w}×${saved.h}，${chosen.license}，${chosen.author}（${chosen.source}）`);
console.log(`页面上会自动显示署名。entry.ts 里用 { photo: "${as}", caption: "…" } 引用。`);

async function fromInat() {
  const { taxon, near } = await findTaxon(query);
  if (!taxon) fail(`iNaturalist 里没有名字正好是「${query}」的，最接近的：\n  ${near.join("\n  ")}\n用其中一个完整学名再试`);
  // 研究级优先；栽培种（月季、西府海棠等）常常只有 needs_id / casual，再放宽一次
  const search = async (place, researchOnly) => (await getJson(
    `${INAT}/observations?taxon_id=${taxon.id}&photo_license=${LICENSES.join(",")}${researchOnly ? "&quality_grade=research" : ""}&order_by=votes&per_page=${Math.max(12, listN)}${filters}${place ? `&place_id=${place}` : ""}`,
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
  const sized = (url, size) => url.replace(/\/square\.(\w+)/, `/${size}.$1`);
  const found = obs.flatMap((o) => o.photos
    .filter((p) => LICENSES.includes(p.license_code))
    .slice(0, perObs)
    .map((p) => ({
      small: sized(p.url, "medium"),
      large: sized(p.url, "large"),
      author: p.attribution.match(/^\(c\)\s*([^,]+)/)?.[1]?.trim() || o.user?.name || o.user?.login || "iNaturalist 用户",
      license: p.license_code,
      page: `https://www.inaturalist.org/photos/${p.id}`,
      source: "iNaturalist",
      where: o.place_guess ?? "",
    })));
  if (!found.length) fail(`没找到可转载的「${taxon.preferred_common_name ?? taxon.name}」照片（换个 --stage / --month、加 --global，或用 --commons "<学名 关键词>" 去维基共享资源找）`);
  console.log(`（${gradeNote}）${taxon.preferred_common_name ?? ""} ${taxon.name}：${where}找到 ${found.length} 张可转载照片`);
  return found;
}

/**
 * 维基共享资源（Wikimedia Commons）：iNaturalist 上可转载的照片太少、缺某个阶段时用。
 * 只收 CC0 / CC BY / CC BY-SA；搜到的是文件描述里的文字，挑图时一定要看清是不是这个物种。
 */
async function fromCommons(text) {
  const api = "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6"
    + `&gsrsearch=${encodeURIComponent(`filetype:bitmap ${text}`)}&gsrlimit=${Math.max(20, listN * 2)}&gsroffset=${(page - 1) * Math.max(20, listN * 2)}`
    + "&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=1280";
  const pages = Object.values((await getJson(api))?.query?.pages ?? {}).sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
  const plain = (html) => String(html ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  const licenseOf = (m) => {
    const s = plain(m?.LicenseShortName?.value).toLowerCase();
    if (/^cc0\b|^cc-zero/.test(s)) return "cc0";
    if (/^cc[ -]by[ -]sa\b/.test(s)) return "cc-by-sa";
    if (/^cc[ -]by\b/.test(s) && !/\bnc\b|\bnd\b/.test(s)) return "cc-by";
    return null;
  };
  const found = pages.flatMap((p) => {
    const ii = p.imageinfo?.[0];
    const m = ii?.extmetadata;
    const license = licenseOf(m);
    if (!ii || !license || !/^image\/(jpeg|png|webp)$/.test(ii.mime)) return [];
    return [{
      small: ii.thumburl.replace(/\/\d+px-/, "/500px-"),
      large: ii.thumburl,
      author: plain(m?.Artist?.value).slice(0, 80) || "Wikimedia Commons 用户",
      license,
      page: ii.descriptionurl,
      source: "Wikimedia Commons",
      where: p.title.replace(/^File:/, ""),
    }];
  });
  if (!found.length) fail(`维基共享资源里没搜到可转载的「${text}」照片，换个关键词再试`);
  console.log(`维基共享资源「${text}」：找到 ${found.length} 张可转载照片`);
  return found;
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
