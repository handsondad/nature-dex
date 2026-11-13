// 查一个物种的资料，写进 src/entries/<id>/research.json，并在终端打印一份摘要给写图鉴的人看。
//
//   npm run taxon -- <图鉴id> "<学名或中文名>"
//   npm run taxon -- <图鉴id> "Taraxacum mongolicum" --global    月份分布不限中国
//
// 查什么：
//   GBIF          学名是否被接受、分类阶元（权威名录）
//   iNaturalist   中文名、各级分类的中文名、在中国每个月被拍到多少次（被子植物另查开花、结果的标注）
//   中文维基       一段简介，只当查资料的入口，不直接抄进图鉴
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { CHINA, entryDir, fail, findTaxon, getJson, requireEntry, root, today, writeJson } from "./lib.mjs";

const USAGE = '用法：npm run taxon -- <图鉴id> "<学名或中文名>" [--global]';
const args = process.argv.slice(2);
const id = args.shift();
requireEntry(id, USAGE);
const global = args.includes("--global");
const query = args.filter((a) => a !== "--global").join(" ").trim();
if (!query) fail(USAGE);

const INAT = "https://api.inaturalist.org/v1";
const RANKS = ["kingdom", "phylum", "class", "order", "family", "genus", "species"];
const hasCjk = /[\u4e00-\u9fff]/.test(query);

// 1. iNaturalist：中文名能搜，顺便拿到学名
const { taxon: pick, near } = await findTaxon(query);
if (!pick && hasCjk) fail(`iNaturalist 里没有名字正好是「${query}」的，最接近的：\n  ${near.join("\n  ")}\n换个叫法或者直接用学名`);
if (!pick) console.log(`⚠ iNaturalist 里没有名字正好是「${query}」的，只查 GBIF。最接近的：\n  ${near.join("\n  ")}`);
const taxon = pick ? (await getJson(`${INAT}/taxa/${pick.id}?locale=zh-CN`))?.results?.[0] : null;
const scientific = taxon?.name ?? query;

// 2. GBIF：学名核对 + 分类阶元
const gbif = await getJson(`https://api.gbif.org/v1/species/match?name=${encodeURIComponent(scientific)}`);
const gbifOk = gbif && gbif.matchType !== "NONE";

// 3. 每月观察数
let months;
if (taxon) {
  const place = global ? "" : `&place_id=${CHINA.id}`;
  const hist = async (extra) => (await getJson(`${INAT}/observations/histogram?taxon_id=${taxon.id}&date_field=observed&interval=month_of_year&quality_grade=research${place}${extra}`))?.results?.month_of_year;
  const all = await hist("");
  // 只有被子植物会开花；银杏、松柏这些裸子植物不查
  const flowers = taxon.ancestors?.some((a) => a.name === "Angiospermae");
  months = {
    place: global ? "全球" : CHINA.name,
    all,
    ...(flowers && { flowering: await hist("&term_id=12&term_value_id=13"), fruiting: await hist("&term_id=12&term_value_id=14") }),
    url: `https://www.inaturalist.org/observations?taxon_id=${taxon.id}${global ? "" : `&place_id=${CHINA.id}`}&quality_grade=research`,
  };
}

// 4. 中文维基简介（简体）
const zhName = taxon?.preferred_common_name;
let wiki;
if (zhName) {
  const w = await getJson(`https://zh.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(zhName)}`, { "Accept-Language": "zh-cn" }).catch(() => null);
  if (w?.extract && w.type !== "disambiguation") wiki = { title: w.title, extract: w.extract.trim(), url: w.content_urls?.desktop?.page ?? `https://zh.wikipedia.org/wiki/${encodeURIComponent(zhName)}` };
}

const zhPath = (taxon?.ancestors ?? [])
  .filter((a) => RANKS.includes(a.rank))
  .map((a) => a.preferred_common_name || a.name);

const research = {
  query,
  fetchedAt: today(),
  ...(gbifOk && {
    gbif: {
      key: gbif.usageKey,
      scientificName: gbif.scientificName,
      rank: gbif.rank,
      ...(gbif.status && { status: gbif.status }),
      ...(gbif.matchType && { matchType: gbif.matchType }),
      path: RANKS.filter((r) => gbif[r]).map((r) => ({ rank: r, name: gbif[r] })),
    },
  }),
  ...(zhPath.length >= 6 && { zhTaxonomy: zhPath.slice(0, 6) }),
  ...(taxon && {
    inat: {
      id: taxon.id,
      name: taxon.name,
      ...(zhName && { commonName: zhName }),
      url: `https://www.inaturalist.org/taxa/${taxon.id}`,
      ...(taxon.wikipedia_url && { wikipediaUrl: taxon.wikipedia_url }),
    },
  }),
  ...(wiki && { wiki }),
  ...(months && { months }),
};
writeJson(join(entryDir(id), "research.json"), research);

// ── 摘要 ──
const bar = (rec) => {
  if (!rec) return "";
  const vals = Array.from({ length: 12 }, (_, i) => rec[i + 1] ?? 0);
  const max = Math.max(1, ...vals);
  return vals.map((v) => " ▁▂▃▄▅▆▇█"[Math.round((v / max) * 8)]).join("") + `  (最多 ${max})`;
};

const kindHint = zhPath[0] === "真菌界" ? "fungus" : zhPath[0] === "动物界" ? "animal" : "plant";
console.log(`\n${zhName ?? "（没有中文名）"}  ${scientific}  ${taxon ? `[iNat ${taxon.rank}]` : ""}`);
console.log(gbifOk ? `GBIF：${gbif.scientificName}  ${gbif.status ?? ""} ${gbif.rank}  匹配=${gbif.matchType}  (key=${gbif.usageKey})` : "GBIF：没匹配上，学名要再核对");
if (gbifOk && gbif.status && gbif.status !== "ACCEPTED") console.log(`  ⚠ GBIF 说这个名字是 ${gbif.status}，接受名可能是 ${gbif.species ?? "?"}，请改用接受名重跑`);
if (zhPath.length) console.log(`分类：${zhPath.join(" › ")}`);
if (months) {
  console.log(`\n${months.place}每月被拍到（1→12 月）`);
  console.log(`  全部  ${bar(months.all)}`);
  if (months.flowering) console.log(`  开花  ${bar(months.flowering)}`);
  if (months.fruiting) console.log(`  结果  ${bar(months.fruiting)}`);
}
if (wiki) console.log(`\n维基：${wiki.extract.slice(0, 140)}${wiki.extract.length > 140 ? "…" : ""}\n  ${wiki.url}`);
if (zhPath.length) {
  console.log(`\n可以写进 entry.ts：`);
  console.log(`  kind: "${kindHint}",`);
  console.log(`  taxonomy: ${JSON.stringify(zhPath.slice(0, 6))},`);
  const treeFile = readFileSync(join(root, "src/pages/tree.ts"), "utf8");
  if (zhPath[2] && !treeFile.includes(`${zhPath[2]}:`)) {
    console.log(`  ⚠ 新出现的纲「${zhPath[2]}」还没登记图标：请在 src/pages/tree.ts 的 GROUP_LOOK 补上一行`);
  }
}

// 打印可直接抓取的权威资料入口，方便 Agent 查证形态数字与生活史
const binom = (gbif?.species || scientific).replace(/\s*×\s*/g, " ").trim();
const [genus, epithet] = binom.split(/\s+/);
console.log(`\n推荐查证的权威资料（先抓原文核实数字再写进 sources）：`);
if (gbifOk) console.log(`  GBIF       https://www.gbif.org/species/${gbif.usageKey}`);
if (kindHint === "plant") {
  console.log(`  植物志FOC  http://www.efloras.org/browse.aspx?flora_id=2&name_str=${encodeURIComponent(binom)}`);
} else if (kindHint === "fungus") {
  console.log(`  MycoBank   https://www.mycobank.org/`);
  console.log(`  ⚠ 蘑菇规矩：kind 写 "fungus"，care 必须明确写「只看不碰，不采也不吃」`);
} else {
  console.log(`  ADW 动物库 https://animaldiversity.org/accounts/${binom.replace(/\s+/g, "_")}/`);
  if (zhPath[2] === "爬行纲" && epithet) console.log(`  爬行动物库 https://reptile-database.reptarium.cz/species?genus=${genus}&species=${epithet}`);
  if (zhPath[2] === "两栖纲") console.log(`  中国两栖类 https://www.amphibiachina.org/`);
}
console.log(`  英文维基源码 https://en.wikipedia.org/w/index.php?title=${encodeURIComponent(scientific.replace(/\s+/g, "_"))}&action=raw`);
console.log(`  论文检索API https://api.crossref.org/works?rows=5&query=${encodeURIComponent(scientific)}`);
console.log(`\n已写入 src/entries/${id}/research.json`);
