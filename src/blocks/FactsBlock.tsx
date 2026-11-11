import { useState } from "react";
import { Cite } from "../render/Cite.tsx";

type Card = { readonly q: string; readonly a: string; readonly cite: readonly string[] };

export function FactsBlock({ cards }: { cards: readonly Card[] }) {
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());
  const flip = (i: number) => setOpen((s) => {
    const next = new Set(s);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    return next;
  });
  return (
    <ul className="facts">
      {cards.map((c, i) => (
        <li key={c.q} className={open.has(i) ? "fact open" : "fact"}>
          <button type="button" className="fact-face" onClick={() => flip(i)} aria-expanded={open.has(i)}>
            <span className="front"><span className="qmark" aria-hidden="true">?</span>{c.q}<span className="tap">点一下翻过来</span></span>
            <span className="back">{c.a}</span>
          </button>
          {open.has(i) && <span className="fact-cite"><Cite ids={c.cite} /></span>}
        </li>
      ))}
    </ul>
  );
}
