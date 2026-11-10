/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: scripts/copy-404.js — SPA fallback for GitHub Pages
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Copies the untouched app shell to 404.html so unknown URLs still boot the app
 * (and render the NotFound page). Runs before prerender.js overwrites index.html.
 */
const fs = require("fs");
const path = require("path");

const buildDirectory = path.resolve(__dirname, "..", "build");
fs.copyFileSync(path.join(buildDirectory, "index.html"), path.join(buildDirectory, "404.html"));
console.log("404.html written");
