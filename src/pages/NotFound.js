/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/NotFound.js — 404 page
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import "./pages.css";

function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Deva Bio Engineering"
        description="The page you were looking for could not be found."
        path="/404"
        noindex
      />
      <section className="dbe-section text-center" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <Container>
          <div className="dbe-404">404</div>
          <h1 className="dbe-heading">This page couldn't be found</h1>
          <p className="dbe-sub mx-auto">The link may be outdated or the page may have moved.</p>
          <div className="dbe-actions justify-content-center mt-4">
            <Link to="/" className="dbe-btn dbe-btn-primary">
              Back to home <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="dbe-btn dbe-btn-outline">
              Contact us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default NotFound;
