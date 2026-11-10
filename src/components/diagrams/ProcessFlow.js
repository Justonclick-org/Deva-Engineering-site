/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/diagrams/ProcessFlow.js — interactive Napier-to-CBG process flow
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Pause, Play } from "lucide-react";
import { DIGESTATE_PATH, GAS_PATH } from "../../data/process";
import { Icon } from "../ui";
import "./diagrams.css";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function DigNode({ s }) {
  return (
    <div className="dbe-flow-dig-node">
      <span className="dbe-flow-icon dbe-flow-icon-earth">
        <Icon name={s.icon} size={20} />
      </span>
      <span>
        <strong>{s.title}</strong>
        <small>{s.text}</small>
      </span>
    </div>
  );
}

/**
 * Gas pathway as a "snake" (row 1 left→right, row 2 right→left) on desktop and a
 * vertical chain on mobile. The active stage auto-advances like gas moving through
 * the plant; any interaction pauses it.
 */
function ProcessFlow({ showDigestate = true, compact = false }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rootRef = useRef(null);

  // Start cycling only once the diagram is on screen.
  useEffect(() => {
    if (reduceMotion() || !("IntersectionObserver" in window)) return undefined;
    const el = rootRef.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setPlaying(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const t = setInterval(() => setActive((a) => (a + 1) % GAS_PATH.length), 3200);
    return () => clearInterval(t);
  }, [playing]);

  const pick = (i) => {
    setPlaying(false);
    setActive(i);
  };

  const stage = GAS_PATH[active];

  return (
    <div className={`dbe-flow${compact ? " dbe-flow-compact" : ""}`} ref={rootRef}>
      <div className="dbe-flow-top">
        <span className="dbe-flow-legend">
          <i className="dbe-flow-key dbe-flow-key-gas" /> Gas pathway
          {showDigestate && (
            <>
              <i className="dbe-flow-key dbe-flow-key-dig" /> Digestate pathway
            </>
          )}
        </span>
        <button
          type="button"
          className="dbe-flow-toggle"
          onClick={() => setPlaying((p) => !p)}
          aria-pressed={playing}
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          {playing ? "Pause walkthrough" : "Play walkthrough"}
        </button>
      </div>

      <ol className="dbe-flow-grid" aria-label="Napier grass to compressed biogas process stages">
        {GAS_PATH.map((s, i) => (
          <li
            key={s.key}
            className={`dbe-flow-node dbe-flow-n${i}${i === active ? " is-active" : ""}${i < active ? " is-done" : ""}`}
          >
            <button
              type="button"
              onClick={() => pick(i)}
              aria-current={i === active ? "step" : undefined}
              aria-controls="dbe-flow-detail"
            >
              <span className="dbe-flow-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="dbe-flow-icon">
                <Icon name={s.icon} size={22} />
              </span>
              <span className="dbe-flow-label">{s.short}</span>
            </button>
            {i < GAS_PATH.length - 1 && <span className="dbe-flow-pipe" aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <div className="dbe-flow-detail" id="dbe-flow-detail" aria-live="polite">
        <div className="dbe-flow-detail-head">
          <span className="dbe-flow-detail-icon">
            <Icon name={stage.icon} size={26} />
          </span>
          <div>
            <span className="dbe-kicker">Stage {active + 1} of {GAS_PATH.length}</span>
            <h3>{stage.title}</h3>
          </div>
        </div>
        <p>{stage.text}</p>
        <ul className="dbe-flow-tags">
          {stage.detail.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <div className="dbe-flow-progress" aria-hidden="true">
          {GAS_PATH.map((s, i) => (
            <span key={s.key} className={i <= active ? "on" : ""} />
          ))}
        </div>
      </div>

      {showDigestate && (
        <div className="dbe-flow-dig">
          <div className="dbe-flow-dig-title">
            <span className="dbe-kicker">Digestate pathway</span>
            <span className="dbe-flow-dig-from">
              branches from stage 04 · Digestion <ArrowDown size={14} />
            </span>
          </div>
          <div className="dbe-flow-dig-row">
            {DIGESTATE_PATH.slice(0, 2).map((s) => (
              <React.Fragment key={s.key}>
                <DigNode s={s} />
                <ArrowRight className="dbe-flow-dig-arrow" size={18} aria-hidden="true" />
              </React.Fragment>
            ))}
            <div className="dbe-flow-dig-outputs">
              {DIGESTATE_PATH.slice(2).map((s) => (
                <DigNode key={s.key} s={s} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProcessFlow;
