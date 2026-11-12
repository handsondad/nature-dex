// 把页面截成 PNG 放在 snapshots/ 下，给能看图的 agent 和大人自查用。
//
//   npm run snapshot -- <图鉴id>            整篇图鉴（长图）
//   npm run snapshot -- line                首页晾衣绳
//   npm run snapshot -- <id> --mobile       再截一张 390 宽的手机版
//   npm run snapshot -- <id> --width 1200   截图宽度，默认 1100
//
// 会自己起一个 Vite 开发服务器；已经开着的话可以加 --url http://localhost:5173/ 直接用。
// 用本机的 Edge 或 Chrome（puppeteer-core 不自带浏览器）。截图模式下动画直接到终点。
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";
import { fail, root } from "./lib.mjs";

const outDir = join(root, "snapshots");
const BROWSERS = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const opts = { width: 1100, url: null, mobile: false, targets: [] };
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === "--width") opts.width = Number(argv[++i]);
  else if (argv[i] === "--url") opts.url = argv[++i];
  else if (argv[i] === "--mobile") opts.mobile = true;
  else opts.targets.push(argv[i]);
}
if (!opts.targets.length) fail("用法：npm run snapshot -- <图鉴id|line> [--mobile] [--width 1100]");
const executablePath = BROWSERS.find((p) => existsSync(p));
if (!executablePath) fail("找不到 Edge 或 Chrome，可以用环境变量 BROWSER_PATH 指定");

let server = null;
let base = opts.url;
if (!base) {
  const { createServer } = await import("vite");
  server = await createServer({ root, logLevel: "error", server: { port: 0 } });
  await server.listen();
  base = server.resolvedUrls.local[0];
}

const jobs = opts.targets.flatMap((t) => {
  const hash = t === "line" ? "#/" : `#/entry/${t}`;
  const list = [{ hash, file: `${t}.png`, width: opts.width }];
  if (opts.mobile) list.push({ hash, file: `${t}-mobile.png`, width: 390 });
  return list;
});

mkdirSync(outDir, { recursive: true });
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--hide-scrollbars"] });
try {
  const page = await browser.newPage();
  const problems = [];
  page.on("pageerror", (err) => problems.push(err.message));
  page.on("console", (msg) => { if (msg.type() === "error") problems.push(msg.text()); });
  page.on("requestfailed", (req) => problems.push(`加载失败：${req.url()}`));
  for (const job of jobs) {
    await page.setViewport({ width: job.width, height: 900, deviceScaleFactor: job.width < 500 ? 2 : 1 });
    await page.goto(`${base}?snap${job.hash}`, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    const ok = await page.waitForSelector("[data-snap]", { timeout: 15000 }).catch(() => null);
    if (!ok) throw new Error(`${job.hash} 没有画出来${problems.length ? "：\n" + problems.join("\n") : ""}`);
    if (job.hash !== "#/" && !(await page.$(".entry"))) throw new Error(`找不到图鉴 ${job.hash}，看看 src/entries/ 下的目录名`);
    const path = join(outDir, job.file);
    await page.screenshot({ path, fullPage: true });
    console.log(`snapshots/${job.file}`);
    for (const part of await slice(path, job.width < 500 ? 2 : 1)) console.log(`  ${part}`);
  }
  if (problems.length) {
    console.error("页面报错：\n" + problems.join("\n"));
    process.exitCode = 1;
  }
} finally {
  await browser.close();
  await server?.close();
}

/** 长图缩小后看不清字，再切成一段一段（-1、-2…），一段一屏多一点 */
async function slice(path, scale) {
  const sharp = (await import("sharp")).default;
  sharp.cache(false);
  const { width, height } = await sharp(path).metadata();
  const step = 1300 * scale;
  if (height <= step * 1.3) return [];
  const parts = [];
  for (let top = 0, n = 1; top < height; top += step, n++) {
    const out = path.replace(/\.png$/, `-${n}.png`);
    await sharp(path).extract({ left: 0, top, width, height: Math.min(step, height - top) }).toFile(out);
    parts.push(out.slice(root.length + 1).replaceAll("\\", "/"));
  }
  return parts;
}
