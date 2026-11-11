import { useEntry } from "./context.ts";

/** 正文里的引用角标：点一下滚到页底的资料来源 */
export function Cite({ ids }: { ids?: readonly string[] }) {
  const { entry } = useEntry();
  if (!ids?.length) return null;
  return (
    <>
      {ids.map((id) => {
        const n = entry.sources.findIndex((s) => s.id === id) + 1;
        if (!n) return null;
        return (
          <button key={id} type="button" className="cite" aria-label={`资料 ${n}`}
            onClick={() => document.getElementById(`src-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}>
            {n}
          </button>
        );
      })}
    </>
  );
}
