// 几个工具共用的小函数：路径、JSON 读写、联网请求、照片压缩。
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const entryDir = (id) => join(root, "src/entries", id);
export const photoDir = (id) => join(root, "public/photos", id);

export const ID_RE = /^[a-z][a-z0-9-]*$/;

/** iNaturalist 的「中国」地点 */
export const CHINA = { id: 6903, name: "中国境内" };

export function requireEntry(id, usage) {
  if (!id || !ID_RE.test(id)) fail(usage);
  if (!existsSync(join(entryDir(id), "entry.ts"))) fail(`找不到图鉴 src/entries/${id}/，先 npm run entry:new -- ${id}`);
}

export function fail(msg) {
  console.error(msg);
  process.exit(1);
}

export function readJson(path, fallback) {
  return existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : fallback;
}

export function writeJson(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

export const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

/** 联网取 JSON；iNaturalist 要求带 User-Agent，失败重试两次 */
export async function getJson(url, headers = {}) {
  let last;
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "nature-dex/0.2 (family field guide)", ...headers } });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return await res.json();
    } catch (err) {
      last = err;
      await new Promise((r) => setTimeout(r, 800 * (i + 1)));
    }
  }
  throw new Error(`请求失败：${url}\n${last?.message ?? last}`);
}

/**
 * 在 iNaturalist 里找名字完全对得上的分类单元（学名、同义名或中文名，杂交符号 × 不计）。
 * 搜索排第一的常常不是要找的：「二月兰」会先给出木兰纲，所以对不上就返回 taxon: null，附上最接近的几个。
 */
export async function findTaxon(query) {
  const found = await getJson(`https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(query)}&locale=zh-CN&per_page=10&is_active=true`);
  const results = found?.results ?? [];
  const norm = (s) => (s ?? "").toLowerCase().replace(/\s*×\s*/g, " ").replace(/\s+/g, " ").trim();
  const q = norm(query);
  const same = results.filter((t) => [t.name, t.matched_term, t.preferred_common_name].some((s) => norm(s) === q));
  // 学名对上的优先于同义名/别名对上的；同级时种 > 杂交 > 种下
  // （「Chrysanthemum indicum」会先撞到菊花的同义名 Chrysanthemum × indicum）
  const rankScore = { species: 0, hybrid: 1, subspecies: 2, variety: 3 };
  const scored = same
    .map((t) => ({ t, nameHit: norm(t.name) === q ? 0 : 1, rank: rankScore[t.rank] ?? 9 }))
    .sort((a, b) => a.nameHit - b.nameHit || a.rank - b.rank);
  const taxon = scored[0]?.t ?? null;
  const near = results.slice(0, 5).map((t) => `${t.name}${t.preferred_common_name ? `（${t.preferred_common_name}）` : ""} [${t.rank}]`);
  return { taxon, near };
}

export async function getBuffer(url) {
  const res = await fetch(url, { headers: { "User-Agent": "nature-dex/0.2 (family field guide)" } });
  if (!res.ok) throw new Error(`下载失败 ${res.status}：${url}`);
  return Buffer.from(await res.arrayBuffer());
}

/**
 * 进仓库的照片一律按这个规格压：GitHub / Pages 空间有限，禁止塞原图。
 * 自己拍的和转载对照照都走 savePhoto，不要手拷大图进 public/photos/。
 */
export const PHOTO = Object.freeze({
  /** 正文图长边上限（px） */
  max: 1200,
  /** 正文 webp 质量 */
  quality: 70,
  /** 晾衣绳方形缩略图边长 */
  thumb: 360,
  /** 缩略图质量 */
  thumbQuality: 68,
});

/**
 * 压成网页用的照片：转正方向、长边不超过 max、webp；sharp 默认不带 EXIF，定位信息一起去掉。
 * 另出一张方形缩略图给晾衣绳用，按画面重点自动裁。
 */
export async function savePhoto(input, id, name, max = PHOTO.max) {
  const sharp = (await import("sharp")).default;
  const dir = photoDir(id);
  mkdirSync(dir, { recursive: true });
  const out = join(dir, `${name}.webp`);
  const thumbOut = join(dir, `${name}.thumb.webp`);
  const info = await sharp(input).rotate()
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .webp({ quality: PHOTO.quality, effort: 6 }).toFile(out);
  await sharp(input).rotate()
    .resize({ width: PHOTO.thumb, height: PHOTO.thumb, fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: PHOTO.thumbQuality, effort: 6 }).toFile(thumbOut);
  return { src: `photos/${id}/${name}.webp`, thumb: `photos/${id}/${name}.thumb.webp`, w: info.width, h: info.height, bytes: info.size };
}

export const manifestPath = (id) => join(entryDir(id), "photos.json");

export function upsertPhoto(id, name, info) {
  const path = manifestPath(id);
  const manifest = readJson(path, {});
  manifest[name] = info;
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  writeJson(path, sorted);
}

/** 照片名：小写字母、数字、短横线 */
export function photoName(raw) {
  return raw.toLowerCase().replace(/\.[a-z0-9]+$/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
