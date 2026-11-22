import { useCallback, useEffect, useRef, useState } from "react";
import { BLOCK_META, BlockView } from "../blocks/BlockView.tsx";
import { ENTRIES, photosOf, researchOf } from "../entry/index.ts";
import { byLine } from "../entry/people.ts";
import type { Certainty, Entry } from "../entry/types.ts";
import { EntryContext } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";
import { useDragScroll } from "../render/useDragScroll.ts";
import { ago, fullDate } from "./line.ts";

const CERTAINTY: Record<Certainty, string> = {
  sure: "确认是它",
  likely: "很像它，还在确认",
  unsure: "还不确定是谁",
};

/** 滚到第 n 块：还没进场的块带着 translateY，offsetTop 不受它影响；再让出吸顶目录的高度 */
function jumpToBlock(n: number) {
  const block = document.getElementById(`block-${n}`)?.closest<HTMLElement>(".block");
  if (!block) return;
  let top = 0;
  for (let el: HTMLElement | null = block; el; el = el.offsetParent as HTMLElement | null) top += el.offsetTop;
  const toc = document.querySelector(".toc")?.getBoundingClientRect().height ?? 0;
  scrollTo({ top: Math.max(0, top - toc - 12), behavior: "smooth" });
}

/**
 * 吸顶目录：块多了放不下就横着滚，不露滚动条。
 * 哪边还有就在哪边淡出、露一个箭头；鼠标滚轮、按住拖都能左右走；读到哪一块，那一块的按钮自己滑进来。
 */
function Toc({ entry, active, onPick }: { entry: Entry; active: number; onPick: (n: number) => void }) {
  const strip = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });
  useDragScroll(strip);

  const update = useCallback(() => {
    const el = strip.current;
    if (!el) return;
    const left = el.scrollLeft > 2;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
    setEdges((e) => (e.left === left && e.right === right ? e : { left, right }));
  }, []);

  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    // 竖着滚轮也能让目录左右走；走到头了就还给页面
    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0 || (e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= max - 1)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", wheel, { passive: false });
    return () => {
      ro.disconnect();
      el.removeEventListener("wheel", wheel);
    };
  }, [update]);

  useEffect(update, [entry, update]);

  useEffect(() => {
    const el = strip.current;
    const btn = el?.children[active] as HTMLElement | undefined;
    if (!el || !btn) return;
    const s = el.getBoundingClientRect();
    const b = btn.getBoundingClientRect();
    if (b.left >= s.left + 24 && b.right <= s.right - 24) return;
    el.scrollBy({ left: b.left - s.left - (s.width - b.width) / 2, behavior: "smooth" });
  }, [active]);

  const page = (dir: 1 | -1) => {
    const el = strip.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <nav className="toc no-snap" aria-label="这篇图鉴有">
      <div className={`toc-strip${edges.left ? " fade-left" : ""}${edges.right ? " fade-right" : ""}`} ref={strip} onScroll={update}>
        {entry.blocks.map((b, n) => (
          <button key={n} type="button" className={n === active ? "on" : undefined} aria-current={n === active ? "true" : undefined}
            onClick={() => onPick(n)}>
            {BLOCK_META[b.type].icon} {("title" in b && b.title) || BLOCK_META[b.type].name}
          </button>
        ))}
      </div>
      <button type="button" className="toc-arrow left" hidden={!edges.left} tabIndex={-1} aria-label="往前看目录" onClick={() => page(-1)}>‹</button>
      <button type="button" className="toc-arrow right" hidden={!edges.right} tabIndex={-1} aria-label="往后看目录" onClick={() => page(1)}>›</button>
    </nav>
  );
}

export function EntryPage({ entry }: { entry: Entry }) {
  const photos = photosOf(entry.id);
  const research = researchOf(entry.id);
  const i = ENTRIES.indexOf(entry);
  const prev = ENTRIES[i - 1];
  const next = ENTRIES[i + 1];
  const firstPlace = entry.blocks.flatMap((b) => (b.type === "record" ? b.encounters : []))[0]?.where;
  const coverInfo = photos[entry.cover.photo];
  const coverShot = entry.draft && coverInfo && coverInfo.credit !== "ours"
    ? { ...entry.cover, caption: `${entry.name}（参考照片 · 等我们遇见它再换上自己拍的）` }
    : entry.cover;

  const [activeBlock, setActiveBlock] = useState(0);
  useEffect(() => {
    const els = entry.blocks.map((_, n) => document.getElementById(`block-${n}`)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver((items) => {
      const visible = items.filter((it) => it.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) {
        const idx = Number(visible[0].target.id.replace("block-", ""));
        if (!Number.isNaN(idx)) setActiveBlock(idx);
      }
    }, { rootMargin: "-18% 0px -65% 0px" });
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, [entry]);

  return (
    <EntryContext.Provider value={{ entry, photos, research }}>
      <div className="app entry" data-snap>
        <nav className="topbar no-snap">
          <a className="btn ghost" href="#/">← 晾衣绳</a>
          <span className="spacer" />
          {prev && <a className="btn ghost small" href={`#/entry/${prev.id}`}>‹ {prev.name}</a>}
          {next && <a className="btn ghost small" href={`#/entry/${next.id}`}>{next.name} ›</a>}
        </nav>

        <header className="entry-hero">
          <div className="hero-photo">
            <span className="tape" aria-hidden="true" />
            <Photo shot={coverShot} photos={photos} eager />
          </div>
          <div className="hero-text">
            {entry.draft && <p className="draft-flag">草稿 · 还缺我们自己的照片和记录</p>}
            <h1>{entry.name}</h1>
            <p className="sci"><i>{entry.scientific}</i></p>
            <p className={`certainty ${entry.certainty}`}>{CERTAINTY[entry.certainty]}</p>
            {entry.taxonomy && (
              <ol className="taxonomy" aria-label="分类">
                {entry.taxonomy.map((t) => <li key={t}>{t}</li>)}
              </ol>
            )}
            <p className="when">
              {entry.draft ? "建档于 " : "第一次遇见："}{fullDate(entry.when.date)}
              {entry.when.label && <span className="chip">{entry.when.label}</span>}
              {firstPlace && !entry.draft && <span className="chip">📍 {firstPlace}</span>}
              {!entry.draft && <span className="ago">{ago(entry.when.date, new Date())}</span>}
            </p>
            <p className="hello">{entry.hello}</p>
          </div>
        </header>

        <Toc entry={entry} active={activeBlock} onPick={(n) => { setActiveBlock(n); jumpToBlock(n); }} />

        <main className="blocks">
          {entry.blocks.map((b, n) => <BlockView key={n} block={b} n={n} />)}
        </main>

        <section className="closing">
          <div className="care">
            <h3>🤲 守护提醒</h3>
            <p>{entry.care}</p>
          </div>
          <div className="next-time">
            <h3>👀 下次再看</h3>
            <p>{entry.nextTime}</p>
          </div>
        </section>

        <nav className="bottom-nav no-snap" aria-label="翻看其他图鉴">
          <a className="btn ghost small" href="#/">← 晾衣绳</a>
          <span className="spacer" />
          {prev && <a className="btn ghost small" href={`#/entry/${prev.id}`}>‹ {prev.name}</a>}
          {next && <a className="btn ghost small" href={`#/entry/${next.id}`}>{next.name} ›</a>}
        </nav>

        <footer className="sources">
          <h3>资料来源</h3>
          <ol>
            {entry.sources.map((s) => (
              <li key={s.id} id={`src-${s.id}`}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
                {s.by && <span className="by"> · {s.by}</span>}
              </li>
            ))}
          </ol>
          <p className="byline">{byLine(entry.by)}</p>
        </footer>
      </div>
    </EntryContext.Provider>
  );
}
