/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/ui.js — shared UI building blocks
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleDot,
  Cloud,
  Cog,
  Cylinder,
  Droplets,
  Factory,
  FlaskConical,
  Fuel,
  Gauge,
  Info,
  Layers,
  Mail,
  MessageCircle,
  Milk,
  Phone,
  Plus,
  Recycle,
  ShieldCheck,
  Sprout,
  Store,
  Tractor,
  Trash2,
  UtensilsCrossed,
  Waves,
  Wheat,
  Wind,
  Wrench,
} from "lucide-react";
import { CONTACT, waLink } from "../config/site";
import { PHOTOS } from "../data/images";
import { PROJECT_STATUS } from "../data/flagship";
import { SOLUTION_STATUS } from "../data/solutions";
import { useCountUp } from "../hooks/useCountUp";
import { stagger } from "../hooks/useScrollReveal";

/** Icons referenced by name from the data files (explicit map keeps the bundle tree-shaken). */
const ICONS = {
  Building2, Cloud, Cog, Cylinder, Droplets, Factory, FlaskConical, Fuel, Gauge, Layers, Milk,
  Recycle, ShieldCheck, Sprout, Store, Tractor, Trash2, UtensilsCrossed, Waves, Wheat, Wind, Wrench,
};

/** Render a lucide icon by name (names are stored as strings in the data files). */
export function Icon({ name, size = 22, ...rest }) {
  const Cmp = ICONS[name] || CircleDot;
  return <Cmp size={size} aria-hidden="true" {...rest} />;
}

export function SectionHeading({ eyebrow, title, sub, center, className = "", as: Tag = "h2" }) {
  return (
    <div className={`dbe-section-head ${center ? "dbe-center" : ""} ${className}`.trim()}>
      {eyebrow && <span className="dbe-eyebrow dbe-reveal dbe-rv-drop">{eyebrow}</span>}
      <Tag className="dbe-heading dbe-reveal" style={stagger(1)}>
        {title}
      </Tag>
      {sub && (
        <p className="dbe-sub dbe-reveal" style={stagger(2)}>
          {sub}
        </p>
      )}
    </div>
  );
}

/** Standard responsive photo component without third-party overlays. */
export function Photo({ photo, className = "", ratio = "4 / 3", eager, sizes }) {
  const p = typeof photo === "string" ? PHOTOS[photo] : photo;
  if (!p) return null;
  return (
    <figure className={`dbe-photo ${className}`.trim()} style={{ aspectRatio: ratio }}>
      <img
        src={p.src}
        alt={p.alt}
        width={p.width}
        height={p.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
      />
    </figure>
  );
}

export function ProjectStatusPill({ status }) {
  const s = PROJECT_STATUS[status] || PROJECT_STATUS.proposed;
  return <span className={`dbe-pill dbe-pill-${s.tone}`}>{s.label}</span>;
}

export function SolutionStatusPill({ status }) {
  const s = SOLUTION_STATUS[status];
  if (!s) return null;
  return (
    <span className={`dbe-pill dbe-pill-${status}`} title={s.note}>
      {s.label}
    </span>
  );
}

function StatItem({ item, index }) {
  const [ref, value] = useCountUp(item.value);
  return (
    <div className="dbe-stat dbe-reveal dbe-rv-zoom" style={stagger(index, 70)} ref={ref}>
      <div className="dbe-stat-value dbe-num">
        {item.prefix}
        {value.toLocaleString("en-IN")}
        <small>{item.unit}</small>
      </div>
      <div className="dbe-stat-label">{item.label}</div>
    </div>
  );
}

export function StatStrip({ items, note }) {
  return (
    <>
      <div className="dbe-stats">
        {items.map((item, i) => (
          <StatItem key={item.label} item={item} index={i} />
        ))}
      </div>
      {note && (
        <p className="dbe-stats-note">
          <Info size={14} aria-hidden="true" /> {note}
        </p>
      )}
    </>
  );
}

export function SpecTable({ rows, caption }) {
  const groups = [];
  rows.forEach((r) => {
    const g = groups.find((x) => x.name === r.group);
    if (g) g.rows.push(r);
    else groups.push({ name: r.group, rows: [r] });
  });
  return (
    <div className="dbe-spec">
      <table>
        {caption && <caption className="visually-hidden">{caption}</caption>}
        {groups.map((g) => (
          <tbody key={g.name}>
            {g.name && (
              <tr className="dbe-spec-group">
                <th colSpan={2} scope="colgroup">
                  {g.name}
                </th>
              </tr>
            )}
            {g.rows.map((r) => (
              <tr key={r.param}>
                <th scope="row">{r.param}</th>
                <td>{r.value}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}

export function Notice({ children, className = "" }) {
  return (
    <div className={`dbe-notice ${className}`.trim()} role="note">
      <Info size={18} aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

export function Checks({ items }) {
  return (
    <ul className="dbe-checks">
      {items.map((t) => (
        <li key={t}>
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="dbe-faq">
      {items.map((f, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={f.q} className={`dbe-faq-item dbe-reveal${isOpen ? " is-open" : ""}`} style={stagger(i, 60)}>
            <h3 className="m-0">
              <button
                type="button"
                className="dbe-faq-q"
                aria-expanded={isOpen}
                aria-controls={`${id}-a`}
                id={`${id}-q`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {f.q}
                <span className="dbe-faq-icon">
                  <Plus size={18} aria-hidden="true" />
                </span>
              </button>
            </h3>
            <section className="dbe-faq-a" id={`${id}-a`} aria-labelledby={`${id}-q`}>
              <div>
                <p>{f.a}</p>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}

/** FAQPage structured data for a list of FAQs. */
export const faqSchema = (items) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export function CtaBand({
  eyebrow = "Start a conversation",
  title = "Planning a biogas or CBG project?",
  text = "Share your feedstock, location and the capacity you have in mind. We'll discuss how an integrated biogas plant could be configured for your requirement.",
  primary = { to: "/contact", label: "Discuss Your CBG Project" },
}) {
  return (
    <section className="dbe-section dbe-section-tight">
      <Container>
        <div className="dbe-cta dbe-reveal dbe-rv-zoom">
          <span className="dbe-grid-bg" />
          <span className="dbe-bubble" />
          <span className="dbe-cta-bubbles" aria-hidden="true">
            <span /> <span /> <span /> <span /> <span />
          </span>
          <span className="dbe-eyebrow dbe-eyebrow-dark">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="dbe-actions">
            <Link to={primary.to} className="dbe-btn dbe-btn-primary">
              {primary.label} <ArrowRight size={17} />
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="dbe-btn dbe-btn-glass">
              <MessageCircle size={17} /> WhatsApp Enquiry
            </a>
          </div>
          <div className="dbe-cta-contact">
            <a href={CONTACT.phoneHref}>
              <Phone size={16} /> {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail size={16} /> {CONTACT.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Inner-page hero: dark forest gradient over an optional representative photo.
 * crumbs: [{ name, path }] — current page last (rendered without a link).
 */
export function PageHero({ eyebrow, title, lead, photo, crumbs = [], children }) {
  const p = photo ? PHOTOS[photo] : null;
  return (
    <section className="dbe-page-hero">
      {p && (
        <div className="dbe-page-hero-media" aria-hidden="true">
          <img src={p.src} alt="" width={p.width} height={p.height} />
        </div>
      )}
      <span className="dbe-grid-bg" />
      <span className="dbe-blob dbe-blob-a" />
      <span className="dbe-blob dbe-blob-b" />
      <Container>
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="dbe-crumbs dbe-reveal dbe-rv-drop">
              <li>
                <Link to="/">Home</Link>
              </li>
              {crumbs.map((c, i) =>
                i === crumbs.length - 1 ? (
                  <li key={c.path} aria-current="page">
                    {c.name}
                  </li>
                ) : (
                  <li key={c.path}>
                    <Link to={c.path}>{c.name}</Link>
                  </li>
                )
              )}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="dbe-eyebrow dbe-eyebrow-dark dbe-reveal dbe-rv-drop">{eyebrow}</span>}
        <h1 className="dbe-reveal dbe-rv-blur" style={stagger(1)}>
          {title}
        </h1>
        {lead && (
          <p className="lead dbe-reveal dbe-rv-left" style={stagger(2)}>
            {lead}
          </p>
        )}
        {children && (
          <div className="dbe-reveal" style={stagger(3)}>
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}

/** Infinite auto-scrolling strip; items render twice so the loop is seamless. */
export function Marquee({ items, reverse, renderItem }) {
  return (
    <div className={`dbe-marquee${reverse ? " dbe-marquee-reverse" : ""}`}>
      <div className="dbe-marquee-track">
        {[0, 1].map((copy) => (
          <div className="dbe-marquee-group" key={copy} aria-hidden={copy === 1 || undefined}>
            {items.map((item) => renderItem(item, copy === 1))}
          </div>
        ))}
      </div>
    </div>
  );
}
