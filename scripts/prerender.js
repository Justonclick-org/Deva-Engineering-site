/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: scripts/prerender.js — static prerender, sitemap.xml & robots.txt
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Crawls every internal link from "/", saves the rendered HTML for each route so
 * static hosting answers each URL with real content (good for SEO and link previews),
 * then writes sitemap.xml and robots.txt for the domain configured in .env.
 * Runs after copy-404.js, so build/404.html stays the plain app shell.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer");
const { SITE_URL } = require("./env");

const buildDirectory = path.resolve(__dirname, "..", "build");
const shellPath = path.join(buildDirectory, "404.html");

const TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const filePath = path.join(buildDirectory, urlPath);
    const isFile =
      filePath.startsWith(buildDirectory) && fs.existsSync(filePath) && fs.statSync(filePath).isFile();
    // Every route is served the untouched app shell, never an already-prerendered page.
    const target = isFile ? filePath : shellPath;
    res.writeHead(200, { "Content-Type": TYPES[path.extname(target)] || "application/octet-stream" });
    fs.createReadStream(target).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function outputFiles(route) {
  if (route === "/") return [path.join(buildDirectory, "index.html")];
  const rel = route.replace(/^\//, "");
  // "about.html" lets static hosts answer /about directly; "about/index.html" covers /about/.
  return [path.join(buildDirectory, `${rel}.html`), path.join(buildDirectory, rel, "index.html")];
}

async function main() {
  const server = await startServer();
  const origin = `http://127.0.0.1:${server.address().port}`;
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
  } catch (err) {
    console.error("Could not start Chrome for prerendering. Run `npx puppeteer browsers install chrome` once, then build again.");
    throw err;
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  // Reduced motion keeps counters at their final values in the saved HTML.
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setRequestInterception(true);
  // Only load the site itself; fonts, maps and analytics are skipped.
  page.on("request", (req) =>
    req.url().startsWith(origin) || req.url().startsWith("data:") ? req.continue() : req.abort()
  );
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => msg.type() === "error" && !/net::ERR_FAILED/.test(msg.text()) && errors.push(msg.text()));

  const queue = ["/"];
  const seen = new Set(queue);
  const indexable = [];

  while (queue.length) {
    const route = queue.shift();
    await page.goto(origin + route, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForSelector("main");
    await new Promise((r) => setTimeout(r, 250));

    const { html, links, noindex } = await page.evaluate(() => {
      // Remove the GTM script injected at runtime so it is not loaded twice on the live page.
      document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]').forEach((el) => el.remove());
      return {
        html: "<!DOCTYPE html>" + document.documentElement.outerHTML,
        links: Array.from(document.querySelectorAll("a[href^='/']"), (a) =>
          a.getAttribute("href").split(/[?#]/)[0].replace(/(.)\/$/, "$1")
        ),
        noindex: /noindex/.test(document.querySelector('meta[name="robots"]')?.getAttribute("content") || ""),
      };
    });

    for (const file of outputFiles(route)) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
    }
    if (!noindex) indexable.push(route);
    console.log(`prerendered ${route}${noindex ? " (noindex)" : ""}`);

    for (const link of links) {
      if (link && !seen.has(link) && !path.extname(link)) {
        seen.add(link);
        queue.push(link);
      }
    }
  }

  await browser.close();
  server.close();

  const today = new Date().toISOString().slice(0, 10);
  const priority = (r) => (r === "/" ? "1.0" : r.split("/").length > 2 ? "0.7" : "0.8");
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexable.map(
      (r) =>
        `  <url><loc>${SITE_URL}${r === "/" ? "/" : r}</loc><lastmod>${today}</lastmod><priority>${priority(r)}</priority></url>`
    ),
    "</urlset>",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(buildDirectory, "sitemap.xml"), sitemap);
  fs.writeFileSync(
    path.join(buildDirectory, "robots.txt"),
    `# Deva Bio Engineering — robots.txt\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  );
  console.log(`sitemap.xml written with ${indexable.length} URLs; robots.txt written`);

  if (browser) await browser.close();
  server.close();

  if (errors.length) {
    console.error("\nBrowser errors during prerender:\n" + [...new Set(errors)].join("\n"));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
