/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/diagrams/EquipmentDiagrams.js — CSTR, separation & cascade diagrams
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Simplified explanatory illustrations of standard equipment types. They are not
 * vendor drawings and do not show the final equipment selected for any project.
 */
import React from "react";
import "./diagrams.css";

const Label = ({ x, y, children, anchor = "start", strong }) => (
  <text x={x} y={y} textAnchor={anchor} className={strong ? "dbe-eq-label dbe-eq-strong" : "dbe-eq-label"}>
    {children}
  </text>
);

const Lead = ({ d }) => <path d={d} className="dbe-eq-lead" />;

/** Cross-section of a continuously stirred tank reactor (CSTR). */
export function DigesterDiagram() {
  return (
    <svg viewBox="0 0 520 380" className="dbe-eq" role="img" aria-labelledby="eq-cstr-t">
      <title id="eq-cstr-t">
        Cross-section of a CSTR anaerobic digester showing slurry inlet, central mixer, gas collection space, raw
        biogas outlet and digestate outlet
      </title>
      <defs>
        <linearGradient id="eq-slurry" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c99b5c" />
          <stop offset="1" stopColor="#6e4a1c" />
        </linearGradient>
      </defs>
      {/* tank */}
      <path d="M150 110Q260 30 370 110" className="dbe-eq-dome" />
      <rect x="150" y="108" width="220" height="230" rx="8" className="dbe-eq-wall" />
      <rect x="160" y="150" width="200" height="180" rx="4" fill="url(#eq-slurry)" />
      <path className="dbe-eq-surface" d="M160 150q25 -8 50 0t50 0t50 0t50 0" />
      {/* mixer */}
      <line x1="260" y1="68" x2="260" y2="300" className="dbe-eq-shaft" />
      <rect x="244" y="52" width="32" height="18" rx="4" className="dbe-eq-motor" />
      <g className="dbe-eq-impeller">
        <rect x="222" y="270" width="76" height="8" rx="4" />
        <rect x="232" y="210" width="56" height="7" rx="3.5" />
      </g>
      {/* circulation arrows */}
      <path className="dbe-eq-circ" d="M200 300q-26 -60 4 -120" />
      <path className="dbe-eq-circ" d="M320 180q26 60 -4 120" />
      {/* bubbles */}
      <g className="dbe-sch-bubbles">
        <circle cx="190" cy="300" r="4" />
        <circle cx="215" cy="318" r="3" />
        <circle cx="300" cy="312" r="4" />
        <circle cx="335" cy="296" r="3" />
        <circle cx="330" cy="322" r="2.5" />
      </g>
      {/* heating band */}
      <path d="M154 170V320M366 170V320" className="dbe-eq-heat" />
      {/* inlet / outlets */}
      <path d="M70 290H160" className="dbe-pipe dbe-pipe-feed" />
      <path d="M370 312H450" className="dbe-pipe dbe-pipe-dig" />
      <path d="M260 52V20H430" className="dbe-pipe dbe-pipe-gas" />

      <Label x={70} y={280} strong>Slurry inlet</Label>
      <Label x={378} y={302}>Digestate outlet</Label>
      <Label x={440} y={14} anchor="end" strong>Raw biogas outlet</Label>
      <Label x={392} y={92}>Gas collection space</Label>
      <Lead d="M388 88L330 98" />
      <Label x={30} y={160}>Central mixing</Label>
      <Lead d="M118 164L226 214" />
      <Label x={30} y={214}>Mesophilic</Label>
      <Label x={30} y={230}>temperature control</Label>
      <Lead d="M136 226L152 238" />
      <Label x={392} y={200}>Uniform, continuously</Label>
      <Label x={392} y={216}>mixed slurry</Label>
      <Label x={260} y={364} anchor="middle" strong>CSTR · 1 × 10,000 m³ (flagship design)</Label>
    </svg>
  );
}

/** Solid–liquid separation of digestate into FOM and LFOM. */
export function SeparationDiagram() {
  return (
    <svg viewBox="0 0 520 340" className="dbe-eq" role="img" aria-labelledby="eq-sep-t">
      <title id="eq-sep-t">
        Digestate enters a solid–liquid separator; the solid fraction is discharged as FOM and the liquid fraction
        is collected as LFOM, partly recirculated to slurry preparation
      </title>
      <path d="M20 96H120" className="dbe-pipe dbe-pipe-dig" />
      <Label x={20} y={84} strong>Digestate</Label>
      {/* separator body */}
      <rect x="120" y="70" width="240" height="56" rx="28" className="dbe-eq-wall" />
      <rect x="140" y="84" width="200" height="28" rx="14" className="dbe-eq-screen" />
      <path d="M150 98q12 -14 24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0" className="dbe-eq-screw" />
      <Label x={240} y={58} anchor="middle">Solid–liquid separator</Label>
      {/* solids out */}
      <path d="M360 98H400V150" className="dbe-pipe dbe-pipe-dig" />
      <path d="M350 250Q400 160 450 250Z" className="dbe-eq-pile" />
      <Label x={400} y={278} anchor="middle" strong>FOM</Label>
      <Label x={400} y={296} anchor="middle">solid fraction</Label>
      {/* liquid out */}
      <path d="M240 126V176" className="dbe-pipe dbe-pipe-feed" />
      <rect x="170" y="180" width="140" height="80" rx="10" className="dbe-eq-wall" />
      <rect x="178" y="206" width="124" height="46" rx="6" className="dbe-eq-liquid" />
      <Label x={240} y={278} anchor="middle" strong>LFOM</Label>
      <Label x={240} y={296} anchor="middle">liquid fraction</Label>
      {/* recirculation */}
      <path d="M170 230H70V140" className="dbe-pipe dbe-pipe-recirc" />
      <Label x={20} y={320}>Part recirculated to slurry preparation</Label>
      <Lead d="M70 306V246" />
    </svg>
  );
}

/** CBG cascade storage and filling. */
export function CascadeDiagram() {
  const cyl = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 6; c++) {
      cyl.push(<rect key={`${r}-${c}`} x={170 + c * 46} y={92 + r * 52} width="36" height="40" rx="18" className="dbe-eq-cyl" />);
    }
  }
  return (
    <svg viewBox="0 0 520 320" className="dbe-eq" role="img" aria-labelledby="eq-cas-t">
      <title id="eq-cas-t">
        Compressed biogas flows from the compressor into a manifold feeding a cascade of high-pressure cylinders,
        from which CBG is dispatched
      </title>
      <path d="M20 70H150" className="dbe-pipe dbe-pipe-gas" />
      <Label x={20} y={58} strong>From compressor</Label>
      <Label x={20} y={92}>odourised, dried</Label>
      <Label x={20} y={108}>gas ≥ 98% CH₄</Label>
      <rect x="150" y="64" width="300" height="12" rx="6" className="dbe-eq-manifold" />
      <rect x="156" y="80" width="288" height="176" rx="14" className="dbe-eq-frame" />
      {cyl}
      {/* gauge */}
      <circle cx="470" cy="70" r="20" className="dbe-eq-gauge" />
      <path d="M470 70L482 58" className="dbe-eq-needle" />
      <Label x={470} y={106} anchor="middle">PI</Label>
      <path d="M300 256V290H480" className="dbe-pipe dbe-pipe-gas" />
      <Label x={300} y={312} anchor="middle" strong>Cascade storage · design up to 250 bar</Label>
      <Label x={490} y={282} anchor="end">Dispatch</Label>
    </svg>
  );
}
