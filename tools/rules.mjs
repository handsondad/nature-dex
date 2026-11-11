// 图鉴内容规矩。纯函数，check.mjs 和测试共用。
// errors 必须改；warnings 值得看一眼；todo 是草稿里还没拍的照片。

export const CREATORS = ["kid", "dad", "mom"];
export const LICENSES = ["cc0", "cc-by", "cc-by-sa"];
export const LIMITS = { hello: 40, care: 60, nextTime: 60, detail: 70, fact: 90, said: 120 };
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
/** 会把自然现象说成有意图的词：比喻可以，别说成生物「故意」「想要骗」 */
const INTENT_WORDS = ["故意", "想要骗", "骗过", "为了让人类", "心机"];

const validDate = (s) => DATE_RE.test(s) && !Number.isNaN(Date.parse(s + "T00:00:00Z"));
const len = (s) => [...(s ?? "")].length;

/** 每张照片引用和它的身份：ours 表示只能用自己拍的。草稿封面可以先用可署名的对照照占位。 */
export function shotsOf(entry) {
  const out = [{ shot: entry.cover, where: "封面", ours: !entry.draft }];
  entry.blocks.forEach((b, i) => {
    const at = `第 ${i + 1} 块（${b.type}）`;
    if (b.type === "record") b.encounters.forEach((e) => (e.shots ?? []).forEach((s) => out.push({ shot: s, where: `${at} ${e.date}`, ours: true })));
    if (b.type === "hotspots" || b.type === "magnifier") out.push({ shot: b.shot, where: at });
    if (b.type === "compare") out.push({ shot: b.before, where: at }, { shot: b.after, where: at });
    if (b.type === "steps") b.steps.forEach((s) => out.push({ shot: s, where: at }));
    if (b.type === "lookalike") b.items.forEach((it) => out.push({ shot: it.shot, where: `${at} ${it.name}` }));
  });
  return out;
}

/** 正文里引用过的资料 id */
export function citesOf(entry) {
  const ids = [];
  for (const b of entry.blocks) {
    if (b.cite) ids.push(...b.cite);
    if (b.type === "hotspots") b.points.forEach((p) => ids.push(...(p.cite ?? [])));
    if (b.type === "facts") b.cards.forEach((c) => ids.push(...c.cite));
  }
  return ids;
}

/** 正文里所有给孩子读的字，拿来查用词 */
function textsOf(entry) {
  const t = [entry.hello, entry.care, entry.nextTime];
  for (const b of entry.blocks) {
    if ("text" in b && b.text) t.push(b.text);
    if (b.type === "hotspots") b.points.forEach((p) => t.push(p.label, p.detail));
    if (b.type === "steps") b.steps.forEach((s) => t.push(s.text));
    if (b.type === "facts") b.cards.forEach((c) => t.push(c.q, c.a));
    if (b.type === "lookalike") b.items.forEach((it) => t.push(...it.tells));
  }
  return t;
}

/**
 * @param {{ entry: any, dir: string, manifest: Record<string, any>, research?: any, fileExists: (p: string) => boolean, today: string }} ctx
 */
export function checkEntry({ entry, dir, manifest, research, fileExists, today }) {
  const errors = [];
  const warnings = [];
  const todo = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);

  if (entry.id !== dir) err(`id「${entry.id}」要和目录名「${dir}」一样`);
  for (const k of ["name", "scientific", "hello", "care", "nextTime"]) if (!entry[k]?.trim()) err(`${k} 不能空着`);
  if (!["sure", "likely", "unsure"].includes(entry.certainty)) err("certainty 只能是 sure / likely / unsure");
  if (!validDate(entry.when?.date)) err(`when.date 要写成 YYYY-MM-DD：${entry.when?.date}`);
  else if (entry.when.date > today) err(`when.date 在未来：${entry.when.date}`);
  if (entry.when?.label && len(entry.when.label) > 8) warn("when.label 最好不超过 8 个字");
  for (const k of ["hello", "care", "nextTime"]) if (len(entry[k]) > LIMITS[k]) err(`${k} 太长了（${len(entry[k])} 字，最多 ${LIMITS[k]}）`);
  if (!entry.by?.length) err("by 至少写一个人");
  for (const who of entry.by ?? []) if (!CREATORS.includes(who)) err(`by 里只能是 ${CREATORS.join(" / ")}：${who}`);
  if (entry.kind === "fungus" && !/不(要|能)?(采|摘|吃|碰)|别(采|摘|吃|碰)/.test(entry.care)) err("蘑菇的守护提醒必须说清楚不采、不吃");

  // 资料来源
  const sourceIds = new Set();
  for (const s of entry.sources ?? []) {
    if (sourceIds.has(s.id)) err(`资料 id 重复：${s.id}`);
    sourceIds.add(s.id);
    if (!/^https?:\/\//.test(s.url ?? "")) err(`资料「${s.title}」缺网址`);
  }
  const cited = citesOf(entry);
  for (const c of cited) if (!sourceIds.has(c)) err(`引用了不存在的资料：${c}`);
  for (const s of sourceIds) if (!cited.includes(s)) warn(`资料「${s}」没有在正文里被引用`);

  // 块
  const records = entry.blocks.filter((b) => b.type === "record");
  if (!entry.draft && !records.some((b) => b.encounters.length)) err("不是草稿的图鉴，至少要有一次我们自己的遇见记录（record 块）");
  entry.blocks.forEach((b, i) => {
    const at = `第 ${i + 1} 块（${b.type}）`;
    if (b.type === "record") {
      for (const e of b.encounters) {
        if (!validDate(e.date)) err(`${at} 日期格式不对：${e.date}`);
        else if (e.date > today) err(`${at} 日期在未来：${e.date}`);
        if (!e.where?.trim() || !e.note?.trim()) err(`${at} ${e.date} 要写 where 和 note`);
        if (e.said && (!e.said.text?.trim() || !CREATORS.includes(e.said.who))) err(`${at} ${e.date} 的 said 要有 who 和 text`);
        if (e.said && len(e.said.text) > LIMITS.said) warn(`${at} 孩子的话很长，确认是原话吗`);
      }
      if (validDate(entry.when?.date) && !entry.draft) {
        const first = [...b.encounters].map((e) => e.date).sort()[0];
        if (first && first !== entry.when.date) warn(`${at} 最早的记录是 ${first}，when.date 写的是 ${entry.when.date}`);
      }
    }
    if (b.type === "hotspots") {
      if (b.points.length < 1 || b.points.length > 6) err(`${at} 观察点 1～6 个`);
      b.points.forEach((p, j) => {
        if (!(p.x >= 0 && p.x <= 1 && p.y >= 0 && p.y <= 1)) err(`${at} 第 ${j + 1} 个点的 x、y 要在 0～1 之间`);
        if (len(p.detail) > LIMITS.detail) warn(`${at} 第 ${j + 1} 个点的说明有点长（${len(p.detail)} 字）`);
      });
    }
    if (b.type === "steps" && (b.steps.length < 2 || b.steps.length > 6)) err(`${at} 2～6 步`);
    if (b.type === "magnifier") {
      if (b.start && !b.start.every((v) => v >= 0 && v <= 1)) err(`${at} start 的 x、y 要在 0～1 之间`);
      if (b.zoom !== undefined && (b.zoom < 1.5 || b.zoom > 5)) warn(`${at} zoom 建议 1.5～5`);
    }
    if (b.type === "lookalike") {
      if (b.items.length < 2 || b.items.length > 4) err(`${at} 放 2～4 个`);
      const selves = b.items.filter((it) => it.self).length;
      if (selves !== 1) err(`${at} 要有且只有一个 self: true（本篇主角）`);
      b.items.forEach((it) => { if (!it.tells?.length) err(`${at}「${it.name}」至少写一条怎么区分`); });
    }
    if (b.type === "facts") {
      if (b.cards.length < 1 || b.cards.length > 6) err(`${at} 1～6 张卡`);
      b.cards.forEach((c) => {
        if (!c.cite?.length) err(`${at}「${c.q}」要有出处（cite）`);
        if (len(c.a) > LIMITS.fact) warn(`${at}「${c.q}」的答案有点长（${len(c.a)} 字）`);
      });
    }
    if (b.type === "year" && !research?.months) (entry.draft ? warn : err)(`${at} 需要先 npm run taxon -- ${entry.id} "${entry.scientific}"`);
  });

  // 照片
  const used = new Set();
  for (const { shot, where, ours } of shotsOf(entry)) {
    used.add(shot.photo);
    const info = manifest[shot.photo];
    if (!info) {
      if (!shot.shoot) err(`${where} 的照片「${shot.photo}」还没有，要写 shoot 说明怎么拍`);
      else if (entry.draft) todo.push(`${where}：${shot.photo} —— ${shot.shoot}`);
      else err(`${where} 的照片「${shot.photo}」还没有；还缺照片就标 draft: true`);
      continue;
    }
    if (!fileExists(info.src) || !fileExists(info.thumb)) err(`照片文件不见了：${info.src}`);
    if (ours && info.credit !== "ours") err(`${where} 只能用我们自己拍的照片，「${shot.photo}」是转载的`);
    if (info.credit !== "ours") {
      const c = info.credit ?? {};
      if (!c.author || !c.url || !c.source) err(`转载照片「${shot.photo}」要有作者、网址和来源`);
      if (!LICENSES.includes(c.license)) err(`转载照片「${shot.photo}」的授权 ${c.license} 不能用（只收 ${LICENSES.join(" / ")}）`);
    }
    if (!shot.caption?.trim()) err(`${where} 的照片「${shot.photo}」要写 caption`);
  }
  for (const name of Object.keys(manifest)) if (!used.has(name)) warn(`photos.json 里的「${name}」没有用上`);

  // 用词
  for (const t of textsOf(entry)) for (const w of INTENT_WORDS) if (t?.includes(w)) warn(`「${w}」容易让孩子以为生物有意图：${t.slice(0, 30)}…`);

  return { errors, warnings, todo };
}
