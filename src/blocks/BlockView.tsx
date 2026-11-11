import type { Block, BlockType } from "../entry/types.ts";
import { useInView } from "../render/useInView.ts";
import { CompareBlock } from "./CompareBlock.tsx";
import { FactsBlock } from "./FactsBlock.tsx";
import { HotspotsBlock } from "./HotspotsBlock.tsx";
import { LookalikeBlock } from "./LookalikeBlock.tsx";
import { MagnifierBlock } from "./MagnifierBlock.tsx";
import { RecordBlock } from "./RecordBlock.tsx";
import { StepsBlock } from "./StepsBlock.tsx";
import { YearBlock } from "./YearBlock.tsx";

export const BLOCK_META: Record<BlockType, { readonly icon: string; readonly name: string }> = {
  record: { icon: "📓", name: "我们的记录" },
  hotspots: { icon: "🔍", name: "认识它" },
  magnifier: { icon: "🔎", name: "凑近看" },
  compare: { icon: "⇆", name: "变化" },
  steps: { icon: "🌱", name: "一步一步" },
  year: { icon: "🗓️", name: "它的一年" },
  lookalike: { icon: "🤔", name: "容易认错" },
  facts: { icon: "💡", name: "你知道吗" },
};

export function BlockView({ block, n }: { block: Block; n: number }) {
  const [ref, seen] = useInView<HTMLElement>(0.12);
  const meta = BLOCK_META[block.type];
  const title = ("title" in block && block.title) || meta.name;
  return (
    <section ref={ref} className={`block block-${block.type} ${seen ? "in" : ""}`} aria-labelledby={`block-${n}`}>
      <header className="block-head">
        <span className="block-icon" aria-hidden="true">{meta.icon}</span>
        {title !== meta.name && <span className="block-kind">{meta.name}</span>}
        <h3 id={`block-${n}`}>{title}</h3>
      </header>
      <Body block={block} />
    </section>
  );
}

function Body({ block }: { block: Block }) {
  switch (block.type) {
    case "record": return <RecordBlock encounters={block.encounters} />;
    case "hotspots": return <HotspotsBlock shot={block.shot} points={block.points} />;
    case "magnifier": return <MagnifierBlock shot={block.shot} text={block.text} zoom={block.zoom} start={block.start} cite={block.cite} />;
    case "compare": return <CompareBlock before={block.before} after={block.after} text={block.text} cite={block.cite} />;
    case "steps": return <StepsBlock steps={block.steps} cite={block.cite} />;
    case "year": return <YearBlock text={block.text} cite={block.cite} />;
    case "lookalike": return <LookalikeBlock items={block.items} quiz={block.quiz} cite={block.cite} />;
    case "facts": return <FactsBlock cards={block.cards} />;
  }
}
