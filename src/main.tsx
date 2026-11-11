import React from "react";
import ReactDOM from "react-dom/client";
import "lxgw-wenkai-screen-webfont/lxgwwenkaigbscreen.css";
import App from "./App.tsx";
import "./index.css";

// ?snap：截图模式，动画直接到终点（tools/snapshot.mjs 用）
if (new URLSearchParams(window.location.search).has("snap")) document.body.classList.add("snap");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
