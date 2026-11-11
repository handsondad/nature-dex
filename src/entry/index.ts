import type { Entry, PhotoManifest, Research } from "./types.ts";

const entryMods = import.meta.glob<{ default: Entry }>("../entries/*/entry.ts", { eager: true });
const photoMods = import.meta.glob<{ default: PhotoManifest }>("../entries/*/photos.json", { eager: true });
const researchMods = import.meta.glob<{ default: Research }>("../entries/*/research.json", { eager: true });

const dirOf = (path: string) => path.split("/").slice(-2, -1)[0] ?? "";
const byDir = <T,>(mods: Record<string, { default: T }>) =>
  new Map(Object.entries(mods).map(([path, mod]) => [dirOf(path), mod.default]));

const photos = byDir(photoMods);
const research = byDir(researchMods);

export const ENTRIES: readonly Entry[] = Object.values(entryMods)
  .map((m) => m.default)
  .sort((a, b) => a.when.date.localeCompare(b.when.date) || a.id.localeCompare(b.id));

export const entryById = (id: string) => ENTRIES.find((e) => e.id === id);
export const photosOf = (id: string): PhotoManifest => photos.get(id) ?? {};
export const researchOf = (id: string): Research | undefined => research.get(id);
