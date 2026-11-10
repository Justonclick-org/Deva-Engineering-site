/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/brand/Logo.js — brand mark & wordmark
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Mark: a hexagon (the molecular motif of gas engineering) enclosing a biomass
 * drop-leaf with a flame at its heart — organic matter becoming energy — with two
 * rising gas bubbles. Keep public/logo.svg and public/favicon.svg in sync with this.
 */
import React, { useId } from "react";
import { COMPANY } from "../../config/site";

export function LogoMark({ size = 44, title, className }) {
  const uid = useId().replace(/:/g, "");
  const hex = `dbe-hex-${uid}`;
  const leaf = `dbe-leaf-${uid}`;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={hex} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f4a33" />
          <stop offset="1" stopColor="#04170f" />
        </linearGradient>
        <linearGradient id={leaf} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#7fe0b0" />
          <stop offset="0.55" stopColor="#22c07c" />
          <stop offset="1" stopColor="#13945f" />
        </linearGradient>
      </defs>
      <path
        d="M32 4 56.25 18v28L32 60 7.75 46V18Z"
        fill={`url(#${hex})`}
        stroke={`url(#${hex})`}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M32 11.5c10.6 10.4 15.2 19.6 15.2 27.2a15.2 15.2 0 0 1-30.4 0c0-7.6 4.6-16.8 15.2-27.2Z" fill={`url(#${leaf})`} />
      <path
        d="M32 50.5c-5.6-.8-8.9-5.6-6.6-11.6 1.3 2.4 3.1 3.3 4.5 2.6-1.3-5 .9-10.2 5-13.2-.4 4.6 3 7.6 4.1 11.4 1.6 5.8-1.7 10.4-7 10.8Z"
        fill="#fff"
      />
      <path d="M32 50.5c-2.4-.6-3.7-2.8-2.8-5.4.8 1 1.8 1.3 2.6.8-.2-2.2.8-4.2 2.4-5.4.2 2 1.6 3.4 1.8 5.2.3 2.9-1.4 4.6-4 4.8Z" fill="#b9853f" />
      <circle cx="47.5" cy="13.5" r="3" fill="#b9853f" />
      <circle cx="53" cy="20.5" r="1.9" fill="#dcb47a" />
    </svg>
  );
}

/**
 * Full lockup. `tone="light"` for dark backgrounds (white wordmark).
 */
function Logo({ tone = "dark", size = 44, className = "" }) {
  return (
    <span className={`dbe-logo dbe-logo-${tone} ${className}`.trim()}>
      <LogoMark size={size} />
      <span className="dbe-logo-text">
        <span className="dbe-logo-name">DEVA</span>
        <span className="dbe-logo-sub">Bio Engineering</span>
      </span>
      <span className="visually-hidden">{COMPANY.legalName}</span>
    </span>
  );
}

export default Logo;
