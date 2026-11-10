/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/hooks/useScrollReveal.js — reveal-on-scroll (Justonclick motion system)
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import { useEffect } from "react";

/**
 * Adds `dbe-visible` to every `.dbe-reveal` element as it enters the viewport.
 * Elements reveal once (corporate pages read better without re-animating on scroll back).
 * Elements rendered later (accordions, tabs, route changes) are picked up automatically.
 */
export function useScrollReveal() {
  useEffect(() => {
    const collect = (root) =>
      root.querySelectorAll ? Array.from(root.querySelectorAll(".dbe-reveal:not(.dbe-visible)")) : [];

    if (!("IntersectionObserver" in window)) {
      collect(document).forEach((el) => el.classList.add("dbe-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dbe-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    collect(document).forEach((el) => observer.observe(el));

    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList.contains("dbe-reveal")) observer.observe(node);
          collect(node).forEach((el) => observer.observe(el));
        })
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
}

/** Stagger helper: transition delay for the i-th item in a group. */
export const stagger = (i, step = 90) => ({ transitionDelay: `${Math.min(i, 6) * step}ms` });
