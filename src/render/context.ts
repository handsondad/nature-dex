import { createContext, useContext } from "react";
import type { Entry, PhotoManifest, Research } from "../entry/types.ts";

export type EntryCtx = {
  readonly entry: Entry;
  readonly photos: PhotoManifest;
  readonly research?: Research;
};

export const EntryContext = createContext<EntryCtx | null>(null);

export function useEntry(): EntryCtx {
  const ctx = useContext(EntryContext);
  if (!ctx) throw new Error("useEntry 只能用在 EntryPage 里");
  return ctx;
}

/** 截图模式下所有东西直接画到最终状态，不等滚动、不放动画 */
export const SNAP = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("snap");

export const REDUCED_MOTION =
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
