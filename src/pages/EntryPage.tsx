import { BLOCK_META, BlockView } from "../blocks/BlockView.tsx";
import { ENTRIES, photosOf, researchOf } from "../entry/index.ts";
import { byLine } from "../entry/people.ts";
import type { Certainty, Entry } from "../entry/types.ts";
import { EntryContext } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";
import { ago, fullDate } from "./line.ts";

const CERTAINTY: Record<Certainty, string> = {
  sure: "确认是它",
  likely: "很像它，还在确认",
  unsure: "还不确定是谁",
};

export function EntryPage({ entry }: { entry: Entry }) {
  const photos = photosOf(entry.id);
  const research = researchOf(entry.id);
  const i = ENTRIES.indexOf(entry);
  const prev = ENTRIES[i - 1];
  const next = ENTRIES[i + 1];
  const firstPlace = entry.blocks.flatMap((b) => (b.type === "record" ? b.encounters : []))[0]?.where;

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
            <Photo shot={entry.cover} photos={photos} />
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
              <span className="ago">{ago(entry.when.date, new Date())}</span>
            </p>
            <p className="hello">{entry.hello}</p>
          </div>
        </header>

        <nav className="toc no-snap" aria-label="这篇图鉴有">
          {entry.blocks.map((b, n) => (
            <button key={n} type="button" onClick={() => document.getElementById(`block-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}>
              {BLOCK_META[b.type].icon} {("title" in b && b.title) || BLOCK_META[b.type].name}
            </button>
          ))}
        </nav>

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
