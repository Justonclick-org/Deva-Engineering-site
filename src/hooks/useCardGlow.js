/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/hooks/useCardGlow.js — cursor-following card glow (Justonclick motion system)
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import { useMemo } from "react";

/** Spread the returned props on a `.dbe-card`; CSS reads --dbe-mx / --dbe-my. */
export function useCardGlow() {
  return useMemo(
    () => ({
      onMouseMove: (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--dbe-mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--dbe-my", `${e.clientY - rect.top}px`);
      },
    }),
    []
  );
}
