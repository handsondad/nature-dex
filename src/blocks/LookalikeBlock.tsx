import { useState } from "react";
import type { Shot } from "../entry/types.ts";
import { Cite } from "../render/Cite.tsx";
import { useEntry } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";

type Item = { readonly name: string; readonly scientific?: string; readonly shot: Shot; readonly self?: boolean; readonly tells: readonly string[] };

export function LookalikeBlock({ items, quiz, cite }: { items: readonly Item[]; quiz?: boolean; cite?: readonly string[] }) {
  const { entry, photos } = useEntry();
  const [picked, setPicked] = useState<number | null>(null);
  const revealed = !quiz || picked !== null;
  const right = picked !== null && items[picked]?.self;

  return (
    <div className="lookalike">
      {quiz && (
        <p className="quiz-q" aria-live="polite">
          {picked === null ? <>猜一猜：哪一张是<strong>{entry.name}</strong>？</> : right ? "猜对了！看看它们哪里不一样：" : <>这张是{items[picked].name}。看看它们哪里不一样：</>}
        </p>
      )}
      <div className="look-grid" style={{ ["--n" as string]: items.length }}>
        {items.map((it, i) => (
          <div key={it.name} className={`look ${revealed && it.self ? "self" : ""} ${picked === i ? "picked" : ""}`}>
            <button type="button" className="look-photo" disabled={revealed} onClick={() => setPicked(i)}
              aria-label={revealed ? it.name : `第 ${i + 1} 张`}>
              <Photo shot={it.shot} photos={photos} caption={false} />
              {revealed && <span className="look-mark">{it.self ? "✓ 它是" + entry.name : it.name}</span>}
            </button>
            <div className={revealed ? "look-info in" : "look-info"}>
              {revealed ? (
                <>
                  <h4>{it.name}{it.scientific && <i> {it.scientific}</i>}</h4>
                  <ul>{it.tells.map((t) => <li key={t}>{t}</li>)}</ul>
                </>
              ) : <p className="muted">第 {i + 1} 张</p>}
              <PhotoCredit name={it.shot.photo} />
            </div>
          </div>
        ))}
      </div>
      {quiz && picked !== null && (
        <button type="button" className="btn ghost small" onClick={() => setPicked(null)}>↺ 再猜一次</button>
      )}
      {cite && <p className="cite-line">参考<Cite ids={cite} /></p>}
    </div>
  );
}

function PhotoCredit({ name }: { name: string }) {
  const { photos } = useEntry();
  const c = photos[name]?.credit;
  if (!c || c === "ours") return null;
  return <p className="credit">照片 <a href={c.url} target="_blank" rel="noreferrer">{c.author}</a> · {c.license.toUpperCase().replace("CC-", "CC ")}</p>;
}
