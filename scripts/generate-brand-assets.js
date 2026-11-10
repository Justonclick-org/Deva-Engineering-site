/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: scripts/generate-brand-assets.js — PNG icons, logo and Open Graph image
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Usage: npm run brand:assets
 * Renders public/favicon.svg and the wordmark with headless Chrome into:
 *   favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png,
 *   logo.png (wordmark, transparent) and og-image.jpg (1200×630).
 * Run again after changing the logo or brand colours, then commit the results.
 */
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const pub = path.resolve(__dirname, "..", "public");
const mark = fs.readFileSync(path.join(pub, "favicon.svg"), "utf8").replace(/<!--[\s\S]*?-->/, "").trim();
const photo = fs.readFileSync(path.resolve(__dirname, "..", "src", "assets", "photos", "biogas-plant-aerial.webp")).toString("base64");

const sized = (s) => mark.replace("<svg ", `<svg width="${s}" height="${s}" `);
const FONTS =
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Sora:wght@600;700&display=swap" rel="stylesheet">';

const lockup = (size, name, sub, gap) => `
  <div style="display:inline-flex;align-items:center;gap:${gap}px;line-height:1">
    ${sized(size)}
    <div>
      <div style="font:700 ${size * 0.58}px Sora;letter-spacing:.16em;color:${name}">DEVA</div>
      <div style="font:600 ${size * 0.19}px Sora;letter-spacing:.3em;text-transform:uppercase;color:${sub};margin-top:${size * 0.12}px">Bio Engineering</div>
    </div>
  </div>`;

async function shot(page, html, file, { width, height, type = "png", transparent = false }) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.setContent(
    `<!doctype html><html><head>${FONTS}<style>html,body{margin:0;width:${width}px;height:${height}px;overflow:hidden;${
      transparent ? "background:transparent" : ""
    }}</style></head><body>${html}</body></html>`,
    { waitUntil: "load", timeout: 60000 }
  );
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(pub, file);
  await page.screenshot({ path: out, type, omitBackground: transparent, ...(type === "jpeg" ? { quality: 86 } : {}) });
  console.log(`${file} written`);
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const [file, s, pad] of [
    ["favicon-32.png", 32, 0],
    ["icon-192.png", 192, 0],
    ["icon-512.png", 512, 0],
  ]) {
    await shot(page, `<div style="display:grid;place-items:center;width:${s}px;height:${s}px">${sized(s - pad)}</div>`, file, {
      width: s,
      height: s,
      transparent: true,
    });
  }

  // iOS ignores transparency: give the touch icon a solid brand background.
  await shot(
    page,
    `<div style="display:grid;place-items:center;width:180px;height:180px;background:#f5f8f5">${sized(150)}</div>`,
    "apple-touch-icon.png",
    { width: 180, height: 180 }
  );

  await shot(page, `<div style="padding:24px 28px">${lockup(160, "#0f4a33", "#13945f", 36)}</div>`, "logo.png", {
    width: 820,
    height: 208,
    transparent: true,
  });

  await shot(
    page,
    `<div style="position:relative;width:1200px;height:630px;font-family:Inter;color:#fff;overflow:hidden">
      <img src="data:image/webp;base64,${photo}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
      <div style="position:absolute;inset:0;background:linear-gradient(100deg,rgba(4,23,15,.97) 0%,rgba(7,42,29,.9) 52%,rgba(7,42,29,.45) 100%)"></div>
      <div style="position:absolute;left:72px;top:64px">${lockup(92, "#ffffff", "#c8ecda", 22)}</div>
      <div style="position:absolute;left:72px;top:250px;width:760px">
        <div style="font:700 56px/1.1 Sora;letter-spacing:-.02em">Engineering Sustainable Energy <span style="color:#22c07c">Through Biogas</span></div>
        <div style="margin-top:22px;font:500 24px/1.5 Inter;color:rgba(255,255,255,.8)">Compressed biogas (CBG) &amp; biogas plant engineering · Beed, Maharashtra</div>
      </div>
      <div style="position:absolute;left:72px;bottom:48px;font:600 18px Inter;color:#c8ecda;letter-spacing:.04em">5 TPD Napier grass CBG project · Shivni, Beed (proposed)</div>
    </div>`,
    "og-image.jpg",
    { width: 1200, height: 630, type: "jpeg" }
  );

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
