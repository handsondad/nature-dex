import { Fragment, useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type RefObject } from "react";
import { ENTRIES, photosOf, researchOf } from "../entry/index.ts";
import { byLine } from "../entry/people.ts";
import type { Entry } from "../entry/types.ts";
import { SNAP } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";
import { ago, fullDate, layoutLine, LINE, monthDay, SEASONS } from "./line.ts";
import {
  buildTree, cardTaxa, findGroup, GROUP_LOOK, layoutTree, lineageOf, pathTo, RANK_NAME, toggleOpen, visibleSlots,
  type Group, type Rank, type TreeSlot,
} from "./tree.ts";

type Mode = "tree" | "time";

const KINGDOM_COLOR: Record<string, string> = { 动物界: "#c26f35", 植物界: "#4f8a4b", 真菌界: "#8a6bb0" };
const colorOf = (key: string) => KINGDOM_COLOR[key.split("/")[0]] ?? "#8d6a45";
/** 越往下分，颜色越浅 */
const tint = (key: string, depth: number) => ({ "--c": colorOf(key), "--k": `${100 - depth * 22}%` }) as CSSProperties;

const latinOf = (e: Entry, rank: Rank) => researchOf(e.id)?.gbif?.path.find((p) => p.rank === rank)?.name;
const TREE = buildTree(ENTRIES, latinOf);

const slotKey = (s: TreeSlot) => (s.kind === "card" ? `e:${s.entry.id}` : `g:${s.group.key}`);
const groupOfKey = (k: string | null) => (k?.startsWith("g:") ? findGroup(TREE, k.slice(2)) : undefined);
const entryOfKey = (k: string | null) => (k?.startsWith("e:") ? ENTRIES.find((e) => e.id === k.slice(2)) : undefined);

/** 翻开一篇图鉴再回来，绳子还是原来展开的样子 */
function useSaved<T>(name: string, fallback: T) {
  const [value, setValue] = useState<T>(() => {
    try { return JSON.parse(sessionStorage.getItem(name) ?? "") as T; } catch { return fallback; }
  });
  useEffect(() => { sessionStorage.setItem(name, JSON.stringify(value)); }, [name, value]);
  return [value, setValue] as const;
}

/** 按住鼠标左右拖绳子；拖过再松手不算点击。手指在触屏上本来就能滑 */
function useDragScroll(ref: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start: { x: number; left: number; id: number } | null = null;
    let dragged = false;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      start = { x: e.clientX, left: el.scrollLeft, id: e.pointerId };
      dragged = false;
    };
    const move = (e: PointerEvent) => {
      if (!start) return;
      const dx = e.clientX - start.x;
      if (!dragged && Math.abs(dx) > 6) {
        dragged = true;
        el.setPointerCapture(start.id);
        el.classList.add("dragging");
      }
      if (dragged) el.scrollLeft = start.left - dx;
    };
    const up = () => { start = null; el.classList.remove("dragging"); };
    const click = (e: MouseEvent) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("click", click, true);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("click", click, true);
    };
  }, [ref]);
}

export function LinePage() {
  const scroller = useRef<HTMLDivElement>(null);
  const [room, setRoom] = useState(0);
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    // 少给两个像素，免得小数取整后多出一截可滚动的宽度
    const ro = new ResizeObserver(() => setRoom(Math.max(0, el.clientWidth - 2)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  useDragScroll(scroller);

  const [mode, setMode] = useSaved<Mode>("line-mode", "tree");
  const [savedOpen, setOpen] = useSaved<string[]>("line-open", []);
  const open = useMemo(() => savedOpen.filter((k) => findGroup(TREE, k)), [savedOpen]);

  const tree = useMemo(() => layoutTree(visibleSlots(TREE, open), room), [open, room]);
  const time = useMemo(() => layoutLine(ENTRIES, room), [room]);
  const width = mode === "tree" ? tree.width : time.width;
  const keys = mode === "tree"
    ? tree.items.map((it) => slotKey(it.slot))
    : time.items.flatMap((it) => (it.kind === "card" ? [`e:${it.entry.id}`] : []));

  const [picked, setPicked] = useState<string | null>(null);
  const [peek, setPeek] = useState<string | null>(null);
  const fallback = mode === "tree" ? (open.length ? `g:${open[open.length - 1]}` : keys[0]) : keys[keys.length - 1];
  const chosen = picked && keys.includes(picked) ? picked : fallback ?? null;
  const shown = peek ?? chosen;

  // 按日子看时先让人看到最近的；按分类看时跟着刚打开的那一类走
  const lastOpen = open[open.length - 1];
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (mode === "time") { el.scrollLeft = el.scrollWidth; return; }
    const flags = tree.items.filter((it) => it.slot.kind === "flag");
    const flag = flags[flags.length - 1];
    // 上面几层的旗子放得下就一起露出来，看得出是从哪里一路点进来的
    const left = !flag ? 0 : flag.x - flags[0].x < el.clientWidth * 0.45 ? flags[0].x - LINE.bannerW : flag.x - LINE.bannerW;
    el.scrollTo({ left: Math.max(0, left), behavior: SNAP ? "auto" : "smooth" });
  }, [mode, lastOpen, width]);

  const toggle = (g: Group) => {
    setOpen(toggleOpen(open, g.key));
    setPicked(`g:${g.key}`);
  };
  const openTo = (g: Group) => {
    setOpen(pathTo(TREE, g.key));
    setPicked(`g:${g.key}`);
  };
  const switchMode = (m: Mode) => {
    setMode(m);
    setPicked(null);
    setPeek(null);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const next = keys[keys.indexOf(chosen ?? "") + (e.key === "ArrowLeft" ? -1 : 1)];
    if (!next) return;
    e.preventDefault();
    setPicked(next);
    document.getElementById(`slot-${next}`)?.focus();
  };

  const slotProps = (key: string) => ({
    id: `slot-${key}`,
    role: "option",
    "aria-selected": key === chosen,
    tabIndex: key === chosen ? 0 : -1,
    onMouseEnter: () => setPeek(key),
    onFocus: () => setPicked(key),
    "data-on": key === shown || undefined,
  });
  const at = (x: number, w: number, top: number) => ({ left: x - w / 2, width: w, top });

  const rope = `M ${LINE.pad / 2},${LINE.top} Q ${width / 2},${LINE.top + LINE.sag * 2} ${width - LINE.pad / 2},${LINE.top}`;
  const shownGroup = groupOfKey(shown);
  const shownEntry = entryOfKey(shown);

  return (
    <div className="app" data-snap>
      <header className="hero">
        <h1>我们的自然图鉴</h1>
        <p>在身边遇见的植物和动物，夹在晾衣绳上：按分类一层层打开，或者按遇见的日子看</p>
      </header>

      <section className="line" aria-label="图鉴晾衣绳">
        <div className="line-bar">
          <div className="modes" role="tablist" aria-label="绳子怎么挂">
            <button role="tab" aria-selected={mode === "tree"} onClick={() => switchMode("tree")}>🗂️ 按分类</button>
            <button role="tab" aria-selected={mode === "time"} onClick={() => switchMode("time")}>🗓️ 按日子</button>
          </div>
          {mode === "tree" && (
            <nav className="crumbs" aria-label="现在打开的分类">
              <button className={open.length ? "" : "here"} onClick={() => { setOpen([]); setPicked(null); }}>全部</button>
              {open.map((k, i) => {
                const g = findGroup(TREE, k);
                return g && (
                  <Fragment key={k}>
                    <span className="sep" aria-hidden="true">›</span>
                    <button className={i === open.length - 1 ? "here" : ""} style={tint(k, 0)}
                      onClick={() => { setOpen(open.slice(0, i + 1)); setPicked(`g:${k}`); }}>
                      {g.icon} {g.name}
                    </button>
                  </Fragment>
                );
              })}
            </nav>
          )}
        </div>

        <div className="line-scroll" ref={scroller}>
          <div className="line-track" style={{ width }} onMouseLeave={() => setPeek(null)}>
            <svg className="rope" width={width} height={LINE.top + LINE.sag + 20} aria-hidden="true">
              <path d={rope} />
            </svg>
            <span className="pole" style={{ left: LINE.pad / 2 - 9 }} aria-hidden="true" />
            <span className="pole" style={{ left: width - LINE.pad / 2 - 9 }} aria-hidden="true" />
            <div role="listbox" aria-label={mode === "tree" ? "按分类挂的图鉴" : "按日子排的图鉴"} aria-orientation="horizontal" onKeyDown={onKey}>
              {mode === "tree" ? tree.items.map(({ slot, x, y, tilt }) => {
                const key = slotKey(slot);
                const top = LINE.top + y;
                if (slot.kind === "card") {
                  return <Card key={key} {...slotProps(key)} style={at(x, LINE.cardW, top - 12)} tilt={tilt}
                    entry={slot.entry} sub={cardTaxa(slot.entry, slot.parent)} onClick={() => setPicked(key)} />;
                }
                const g = slot.group;
                if (slot.kind === "bundle") return (
                  <button key={key} {...slotProps(key)} className="tag" aria-expanded={false}
                    aria-label={`${g.name}，${g.entries.length} 种，点开`} onClick={() => toggle(g)}
                    style={{ ...at(x, LINE.tagW, top - 12), ...tint(g.key, slot.depth), ["--tilt" as string]: `${tilt}deg` }}>
                    <span className="peg" aria-hidden="true" />
                    <span className="tag-card">
                      <span className="tag-icon" aria-hidden="true">{g.icon}</span>
                      <span className="tag-rank">{RANK_NAME[g.rank]}</span>
                      <span className="tag-name">{g.name}</span>
                      {g.latin && <i className="tag-latin">{g.latin}</i>}
                      <span className="tag-stack" aria-hidden="true">
                        {g.entries.slice(0, 4).map((e) => <Mini key={e.id} entry={e} />)}
                      </span>
                      <span className="tag-count">{g.entries.length} 种 · 点开</span>
                    </span>
                  </button>
                );
                return (
                  <button key={key} {...slotProps(key)} className="banner" aria-expanded
                    aria-label={`${g.name}，已经打开，点一下收起`} onClick={() => toggle(g)}
                    style={{ ...at(x, LINE.bannerW, top - 4), ...tint(g.key, slot.depth) }}>
                    <span className="banner-cloth">
                      <span className="banner-rank">{RANK_NAME[g.rank]}</span>
                      <span className="banner-icon" aria-hidden="true">{g.icon}</span>
                      <span className="banner-name">{g.name}</span>
                      <span className="banner-count">{g.entries.length} 种</span>
                      <span className="banner-fold">‹ 收起</span>
                    </span>
                  </button>
                );
              }) : time.items.map((it) => it.kind === "flag" ? (
                <span key={`f${it.year}${it.season}`} className="season-flag"
                  style={{ left: it.x - LINE.flagW / 2, top: LINE.top + it.y - 4, width: LINE.flagW, background: SEASONS[it.season].color }} aria-hidden="true">
                  <span className="yr">{it.year}</span>{SEASONS[it.season].icon}{SEASONS[it.season].name}
                </span>
              ) : (
                <Card key={`e:${it.entry.id}`} {...slotProps(`e:${it.entry.id}`)} style={at(it.x, LINE.cardW, LINE.top + it.y - 12)} tilt={it.tilt}
                  entry={it.entry} sub={`${monthDay(it.entry.when.date)}${it.entry.draft ? " · 待补" : ""}`}
                  onClick={() => setPicked(`e:${it.entry.id}`)} />
              ))}
            </div>
          </div>
        </div>
        <p className="line-hint">
          {mode === "tree" ? "按住绳子左右拖 · 点分类牌打开，点旗子收起 · 双击照片翻开图鉴" : "按住绳子左右拖 · 左边更早，右边最近 · 双击照片翻开图鉴"}
        </p>
      </section>

      {shownGroup ? (
        <GroupPreview group={shownGroup} isOpen={open.includes(shownGroup.key)} onToggle={() => toggle(shownGroup)} onChild={openTo} />
      ) : shownEntry ? <Preview entry={shownEntry} /> : (
        <p className="empty">绳子上还空着。去外面走走，遇见第一个朋友吧。</p>
      )}
    </div>
  );
}

type CardProps = {
  id: string; role: string; "aria-selected": boolean; tabIndex: number; "data-on"?: true;
  onMouseEnter: () => void; onFocus: () => void; onClick: () => void;
  style: CSSProperties; tilt: number; entry: Entry; sub: string;
};

function Card({ tilt, entry, sub, ...rest }: CardProps) {
  return (
    <button {...rest} className="polaroid"
      onDoubleClick={() => { location.hash = `#/entry/${entry.id}`; }}>
      <span className="peg" aria-hidden="true" />
      <span className="paper" style={{ ["--tilt" as string]: `${tilt}deg` }}>
        <Thumb entry={entry} />
        <span className="name">{entry.name}</span>
        <span className="day">{sub}</span>
      </span>
    </button>
  );
}

function Thumb({ entry }: { entry: Entry }) {
  const info = photosOf(entry.id)[entry.cover.photo];
  return info
    ? <img className="thumb" src={info.thumb} alt="" draggable={false} />
    : <span className="thumb todo" aria-hidden="true">📷</span>;
}

/** 分类牌和分类卡片上的小圆片：有封面用封面，没拍到就写名字的第一个字 */
function Mini({ entry }: { entry: Entry }) {
  const info = photosOf(entry.id)[entry.cover.photo];
  return info
    ? <img className="mini" src={info.thumb} alt="" draggable={false} />
    : <span className="mini todo">{entry.name.slice(0, 1)}</span>;
}

function GroupPreview({ group, isOpen, onToggle, onChild }: { group: Group; isOpen: boolean; onToggle: () => void; onChild: (g: Group) => void }) {
  const note = GROUP_LOOK[group.name]?.note;
  const subgroups = group.children.filter((c) => c.kind === "group").length;
  return (
    <article className="preview group-preview" key={group.key} style={tint(group.key, 0)} aria-live="polite">
      <div className="mosaic" aria-hidden="true">
        {group.entries.slice(0, 9).map((e) => <Mini key={e.id} entry={e} />)}
      </div>
      <div className="preview-info">
        <p className="lineage">{lineageOf(group).join(" › ")}</p>
        <h2>{group.icon} {group.name} {group.latin && <i className="sci">{group.latin}</i>}</h2>
        {note && <p className="hello">{note}</p>}
        <p className="by">
          这是一个{RANK_NAME[group.rank]}。我们的图鉴里有 {group.entries.length} 种{subgroups > 0 && `，又分成 ${group.children.length} 支`}：
        </p>
        <div className="kids">
          {group.children.map((c) => c.kind === "group" ? (
            <button key={c.key} type="button" className="kid more" onClick={() => onChild(c)}>
              {c.icon} {c.name} <b>{c.entries.length}</b>
            </button>
          ) : (
            <a key={c.entry.id} className="kid" href={`#/entry/${c.entry.id}`}>
              {c.entry.name}{group.rank === "kingdom" && c.entry.taxonomy && <small> · {c.entry.taxonomy[2]}</small>}
            </a>
          ))}
        </div>
        <button type="button" className="btn" onClick={onToggle}>{isOpen ? "收起这一类" : "在绳子上打开"}</button>
      </div>
    </article>
  );
}

function Preview({ entry }: { entry: Entry }) {
  const photos = photosOf(entry.id);
  const href = `#/entry/${entry.id}`;
  return (
    <article className="preview" key={entry.id} aria-live="polite">
      <a className="preview-photo" href={href} aria-label={`翻开${entry.name}的图鉴`}>
        <Photo shot={entry.cover} photos={photos} caption={false} />
      </a>
      <div className="preview-info">
        {entry.taxonomy && <p className="lineage">{entry.taxonomy.join(" › ")}</p>}
        <p className="when">
          {fullDate(entry.when.date)}
          {entry.when.label && <span className="chip">{entry.when.label}</span>}
          <span className="ago">{ago(entry.when.date, new Date())}</span>
        </p>
        <h2>{entry.name} <i className="sci">{entry.scientific}</i></h2>
        <p className="hello">{entry.hello}</p>
        <p className="by">{byLine(entry.by)} · {entry.blocks.length} 个小站</p>
        <a className="btn" href={href}>翻开图鉴</a>
      </div>
    </article>
  );
}
