/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/layout/Navbar.js — top bar, sticky header & mega menu
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "../brand/Logo";
import { Icon } from "../ui";
import { COMPANY, CONTACT } from "../../config/site";
import { SOLUTIONS } from "../../data/solutions";
import { FLAGSHIP } from "../../data/flagship";
import "./layout.css";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions", mega: true },
  { label: "Technology", to: "/technology" },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact", to: "/contact" },
];

function MegaMenu({ onNavigate }) {
  return (
    <div className="dbe-mega" role="menu">
      <div className="dbe-mega-grid">
        {SOLUTIONS.map((s) => (
          <Link key={s.slug} to={`/solutions/${s.slug}`} className="dbe-mega-item" role="menuitem" onClick={onNavigate}>
            <span className="dbe-mega-icon">
              <Icon name={s.icon} size={18} />
            </span>
            <span>
              <strong>{s.title}</strong>
              <small>{s.summary.split(" ").slice(0, 10).join(" ")}…</small>
            </span>
          </Link>
        ))}
      </div>
      <Link to={`/projects/${FLAGSHIP.slug}`} className="dbe-mega-feature" onClick={onNavigate}>
        <span className="dbe-kicker">Flagship project</span>
        <strong>{FLAGSHIP.title}</strong>
        <small>{CONTACT.projectLocation.village}, Beed · Napier grass to CBG</small>
        <span className="dbe-link-arrow">
          View project <ArrowRight size={15} />
        </span>
      </Link>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const closeTimer = useRef();

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMega(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMega(false), 160);
  };

  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <>
      <div className="dbe-topbar">
        <Container className="dbe-topbar-inner">
          <span className="dbe-topbar-tag">
            <MapPin size={13} aria-hidden="true" /> Biogas &amp; CBG engineering · Maharashtra, India
          </span>
          <span className="dbe-topbar-links">
            <a href={CONTACT.phoneHref}>
              <Phone size={13} aria-hidden="true" /> {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail size={13} aria-hidden="true" /> {CONTACT.email}
            </a>
          </span>
        </Container>
      </div>

      <header className={`dbe-nav${scrolled ? " is-scrolled" : ""}`}>
        <Container className="dbe-nav-inner">
          <Link to="/" className="dbe-nav-brand" aria-label={`${COMPANY.brandName} — home`}>
            <Logo size={42} />
          </Link>

          <nav className="dbe-nav-desktop" aria-label="Primary">
            <ul>
              {NAV.map((item) =>
                item.mega ? (
                  <li key={item.to} className="dbe-nav-has-mega" onMouseEnter={openMega} onMouseLeave={closeMega}>
                    <NavLink
                      to={item.to}
                      className={`dbe-nav-link${isActive(item.to) ? " is-active" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={mega}
                      onFocus={openMega}
                    >
                      {item.label} <ChevronDown size={14} aria-hidden="true" />
                    </NavLink>
                    <div className={`dbe-mega-wrap${mega ? " is-open" : ""}`} onFocus={openMega} onBlur={closeMega}>
                      <MegaMenu onNavigate={() => setMega(false)} />
                    </div>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.to === "/"} className={`dbe-nav-link${isActive(item.to) ? " is-active" : ""}`}>
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <Link to="/contact" className="dbe-btn dbe-btn-primary dbe-nav-cta">
            Discuss Your Project <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            className="dbe-nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="dbe-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>
      </header>

      <div className={`dbe-drawer-backdrop${open ? " is-open" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside id="dbe-drawer" className={`dbe-drawer${open ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="dbe-drawer-head">
          <Logo size={38} />
          <button type="button" className="dbe-nav-toggle" aria-label="Close menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <X size={22} />
          </button>
        </div>
        <ul className="dbe-drawer-links">
          {NAV.map((item, i) => (
            <li key={item.to} style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}>
              <Link to={item.to} className={isActive(item.to) ? "is-active" : ""} tabIndex={open ? 0 : -1}>
                {item.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="dbe-drawer-foot">
          <Link to="/contact" className="dbe-btn dbe-btn-primary w-100" tabIndex={open ? 0 : -1}>
            Discuss Your CBG Project <ArrowRight size={16} />
          </Link>
          <a href={CONTACT.phoneHref} tabIndex={open ? 0 : -1}>
            <Phone size={15} /> {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} tabIndex={open ? 0 : -1}>
            <Mail size={15} /> {CONTACT.email}
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
