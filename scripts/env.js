/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: scripts/env.js — read REACT_APP_* values for node build scripts
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
const fs = require("fs");
const path = require("path");

/** Same precedence as Create React App: process env > .env.production.local > .env.local > .env.production > .env */
function readEnv() {
  const root = path.resolve(__dirname, "..");
  const files = [".env", ".env.production", ".env.local", ".env.production.local"];
  const values = {};
  for (const file of files) {
    const full = path.join(root, file);
    if (!fs.existsSync(full)) continue;
    for (const line of fs.readFileSync(full, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) values[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return { ...values, ...process.env };
}

const env = readEnv();
const SITE_URL = (env.REACT_APP_SITE_URL || "https://devabioengineering.in").replace(/\/$/, "");

module.exports = { env, SITE_URL };
