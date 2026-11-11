import { useEffect, useState } from "react";
import { entryById } from "./entry/index.ts";
import { EntryPage } from "./pages/EntryPage.tsx";
import { LinePage } from "./pages/LinePage.tsx";

type Route = { page: "line" } | { page: "entry"; id: string };

function parseRoute(hash: string): Route {
  const [, page, id] = hash.replace(/^#/, "").split("/");
  if (page === "entry" && id && entryById(id)) return { page: "entry", id };
  return { page: "line" };
}

export default function App() {
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));
  useEffect(() => {
    const onHash = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [route]);

  if (route.page === "entry") {
    const entry = entryById(route.id);
    if (entry) return <EntryPage key={entry.id} entry={entry} />;
  }
  return <LinePage />;
}
