/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/layout/Layout.js — page shell, scroll restore & floating actions
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ArrowUp, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { waLink } from "../../config/site";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="dbe-float">
      <button
        type="button"
        className={`dbe-float-top${show ? " is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
      >
        <ArrowUp size={18} />
      </button>
      <a
        className="dbe-float-wa"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send a WhatsApp enquiry"
      >
        <MessageCircle size={24} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

function Layout() {
  const { pathname } = useLocation();
  // Re-scan reveal targets on each route (the hook re-mounts per key).
  return (
    <>
      <a className="dbe-skip" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <RevealScope key={pathname} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

function RevealScope() {
  useScrollReveal();
  return null;
}

export default Layout;
