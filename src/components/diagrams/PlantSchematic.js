/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/diagrams/PlantSchematic.js — Napier-to-CBG plant block diagram
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Schematic only: shows process sequence and design values from the DPR. It is not a
 * plot layout, P&ID or equipment arrangement drawing.
 */
import React from "react";
import "./diagrams.css";

function Unit({ x, y, w = 190, h = 74, title, sub, tone = "gas" }) {
  return (
    <g className={`dbe-sch-unit dbe-sch-${tone}`}>
      <rect x={x} y={y} width={w} height={h} rx="14" />
      <rect className="dbe-sch-accent" x={x} y={y} width="6" height={h} rx="3" />
      <text x={x + 18} y={y + 30} className="dbe-sch-title">
        {title}
      </text>
      <text x={x + 18} y={y + 52} className="dbe-sch-sub">
        {sub}
      </text>
    </g>
  );
}

function PlantSchematic() {
  return (
    <figure className="dbe-sch">
      <div className="dbe-sch-scroll">
        <svg
          viewBox="0 0 1280 650"
          role="img"
          aria-labelledby="dbe-sch-title dbe-sch-desc"
          className="dbe-sch-svg"
        >
          <title id="dbe-sch-title">Napier grass to compressed biogas — process block diagram</title>
          <desc id="dbe-sch-desc">
            Napier grass is chopped and ground, made into slurry and fed to a 10,000 cubic metre mesophilic CSTR
            digester. Raw biogas passes through H2S removal, CO2 upgrading, drying, compression with odourisation
            and cascade filling as CBG. Digestate is separated into FOM and LFOM, with LFOM recirculated to slurry
            preparation.
          </desc>
          <defs>
            <marker id="dbe-arr-gas" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" orient="auto-start-reverse">
              <path d="M0 0 10 5 0 10z" fill="#13945f" />
            </marker>
            <marker id="dbe-arr-feed" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" orient="auto-start-reverse">
              <path d="M0 0 10 5 0 10z" fill="#96682a" />
            </marker>
            <linearGradient id="dbe-tank" x1="0" x2="1">
              <stop offset="0" stopColor="#0b3a28" />
              <stop offset="0.5" stopColor="#13945f" />
              <stop offset="1" stopColor="#0b3a28" />
            </linearGradient>
            <linearGradient id="dbe-slurry" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c99b5c" />
              <stop offset="1" stopColor="#7a5220" />
            </linearGradient>
            <pattern id="dbe-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0v32" fill="none" stroke="#e1e9e4" strokeWidth="1" />
            </pattern>
          </defs>

          <rect width="1280" height="650" fill="url(#dbe-grid)" />

          {/* ---------- pipes (drawn first, under units) ---------- */}
          {/* feed line */}
          <path className="dbe-pipe dbe-pipe-feed" d="M220 157H240" markerEnd="url(#dbe-arr-feed)" />
          <path className="dbe-pipe dbe-pipe-feed" d="M430 157H450" markerEnd="url(#dbe-arr-feed)" />
          <path className="dbe-pipe dbe-pipe-feed" d="M640 157H668" markerEnd="url(#dbe-arr-feed)" />

          {/* raw biogas: digester dome → top header → H2S */}
          <path className="dbe-pipe dbe-pipe-gas" d="M770 86V38H1140V70" markerEnd="url(#dbe-arr-gas)" />
          <text x="820" y="28" className="dbe-sch-pipe-label">Raw biogas · 11,900–13,200 Nm³/day · 55–60% CH₄</text>

          {/* gas train verticals */}
          <path className="dbe-pipe dbe-pipe-gas" d="M1140 144V170" markerEnd="url(#dbe-arr-gas)" />
          <path className="dbe-pipe dbe-pipe-gas" d="M1140 244V270" markerEnd="url(#dbe-arr-gas)" />
          <path className="dbe-pipe dbe-pipe-gas" d="M1140 344V370" markerEnd="url(#dbe-arr-gas)" />
          <path className="dbe-pipe dbe-pipe-gas" d="M1140 444V470" markerEnd="url(#dbe-arr-gas)" />
          <path className="dbe-pipe dbe-pipe-gas dbe-pipe-out" d="M1140 544V600" markerEnd="url(#dbe-arr-gas)" />
          <text x="1156" y="590" className="dbe-sch-pipe-label dbe-sch-strong">CBG dispatch</text>

          {/* digestate */}
          <path className="dbe-pipe dbe-pipe-dig" d="M770 352V408" markerEnd="url(#dbe-arr-feed)" />
          <path className="dbe-pipe dbe-pipe-dig" d="M720 482V512H630V534" markerEnd="url(#dbe-arr-feed)" />
          <path className="dbe-pipe dbe-pipe-dig" d="M820 482V512H930V534" markerEnd="url(#dbe-arr-feed)" />
          {/* LFOM recirculation back to slurry preparation */}
          <path className="dbe-pipe dbe-pipe-recirc" d="M560 540V200" markerEnd="url(#dbe-arr-feed)" />
          <text x="0" y="0" className="dbe-sch-pipe-label" transform="translate(548 470) rotate(-90)">
            LFOM recirculation
          </text>

          {/* ---------- units ---------- */}
          <Unit x={30} y={120} w={190} title="Feedstock" sub="Napier grass · 115 TPD" tone="feed" />
          <Unit x={240} y={120} w={190} title="Chopping & grinding" sub="Size reduction · conveying" tone="feed" />
          <Unit x={450} y={120} w={190} title="Slurry preparation" sub="Mixing · liquid recirculation" tone="feed" />

          {/* CSTR digester */}
          <g className="dbe-sch-digester">
            <path d="M676 120Q770 52 864 120Z" fill="#c8ecda" stroke="#13945f" strokeWidth="2" />
            <rect x="676" y="118" width="188" height="234" rx="6" fill="url(#dbe-tank)" />
            <rect x="684" y="196" width="172" height="148" rx="4" fill="url(#dbe-slurry)" opacity="0.92" />
            {/* agitator */}
            <line x1="770" y1="96" x2="770" y2="300" stroke="#e6f5ee" strokeWidth="3" />
            <g className="dbe-sch-agitator">
              <rect x="738" y="268" width="64" height="7" rx="3" fill="#e6f5ee" />
            </g>
            <g className="dbe-sch-bubbles">
              <circle cx="712" cy="300" r="4" />
              <circle cx="742" cy="320" r="3" />
              <circle cx="800" cy="312" r="4" />
              <circle cx="830" cy="296" r="3" />
              <circle cx="722" cy="330" r="2.5" />
              <circle cx="818" cy="334" r="2.5" />
            </g>
            <rect x="692" y="130" width="156" height="52" rx="10" fill="#072a1d" opacity="0.92" />
            <text x="770" y="152" textAnchor="middle" className="dbe-sch-tank-title">CSTR DIGESTER</text>
            <text x="770" y="171" textAnchor="middle" className="dbe-sch-tank-sub">1 × 10,000 m³ · mesophilic</text>
            <text x="782" y="384" className="dbe-sch-sub">HRT ≈ 36 days</text>
          </g>

          <Unit x={1030} y={70} w={220} title="H₂S removal" sub="Water wash · iron oxyhydroxide" />
          <Unit x={1030} y={170} w={220} title="CO₂ upgrading" sub="Chilled water or 2-stage membrane" />
          <Unit x={1030} y={270} w={220} title="Gas drying" sub="Desiccant · heatless regeneration" />
          <Unit x={1030} y={370} w={220} title="Compression" sub="Reciprocating · odourisation" />
          <Unit x={1030} y={470} w={220} title="CBG cascade filling" sub="≥ 98% CH₄ · up to 250 bar" tone="cbg" />

          {/* PLC/SCADA envelope */}
          <rect x="1014" y="56" width="252" height="504" rx="20" className="dbe-sch-scada" />
          <text x="1014" y="632" className="dbe-sch-pipe-label">PLC / SCADA · online gas quality monitoring</text>

          <Unit x={665} y={408} w={210} title="Solid–liquid separation" sub="Digestate dewatering" tone="dig" />
          <Unit x={535} y={534} w={190} title="LFOM" sub="Liquid fraction · recirculated" tone="dig" />
          <Unit x={835} y={534} w={190} title="FOM" sub="Fermented organic manure" tone="dig" />

          {/* output callout */}
          <g className="dbe-sch-callout">
            <rect x="30" y="250" width="300" height="120" rx="16" />
            <text x="50" y="284" className="dbe-sch-sub">Rated CBG output</text>
            <text x="50" y="322" className="dbe-sch-big">up to 5,000 kg/day</text>
            <text x="50" y="350" className="dbe-sch-sub">design · 330 operating days/year</text>
          </g>
        </svg>
      </div>
      <figcaption className="dbe-sch-caption">
        Schematic block diagram based on the DPR process configuration — not a plot layout or P&amp;ID. Values are design figures,
        subject to final engineering.
      </figcaption>
    </figure>
  );
}

export default PlantSchematic;
