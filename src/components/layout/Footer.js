/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/layout/Footer.js — corporate footer with developer credit
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "../brand/Logo";
import { COMPANY, CONTACT, DEVELOPER, activeSocial, waLink } from "../../config/site";
import { SOLUTIONS } from "../../data/solutions";
import { FLAGSHIP } from "../../data/flagship";
import "./layout.css";

const COMPANY_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Technology & Process", to: "/technology" },
  { label: "Projects", to: "/projects" },
  { label: "5 TPD CBG Project", to: `/projects/${FLAGSHIP.slug}` },
  { label: "Industries We Serve", to: "/industries" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact Us", to: "/contact" },
];

function Footer() {
  const year = new Date().getFullYear();
  const social = activeSocial();
  return (
    <footer className="dbe-foot">
      <span className="dbe-grid-bg" />
      <span className="dbe-foot-glow" />
      <Container className="position-relative">
        <Row className="g-5">
          <Col lg={4}>
            <Logo tone="light" size={46} />
            <p className="dbe-foot-about">{COMPANY.description}</p>
            <p className="dbe-foot-tagline">{COMPANY.tagline}</p>
            {social.length > 0 && (
              <div className="dbe-foot-social">
                {social.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </Col>

          <Col sm={6} lg={3}>
            <h2 className="dbe-foot-title">Solutions</h2>
            <ul className="dbe-foot-list">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link to={`/solutions/${s.slug}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col sm={6} lg={2}>
            <h2 className="dbe-foot-title">Company</h2>
            <ul className="dbe-foot-list">
              {COMPANY_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3}>
            <h2 className="dbe-foot-title">Get in touch</h2>
            <ul className="dbe-foot-contact">
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <MessageCircle size={16} aria-hidden="true" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp enquiry
                </a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>
                  <small>Flagship project location</small>
                  {CONTACT.projectLocation.display}
                </span>
              </li>
            </ul>
          </Col>
        </Row>

        <p className="dbe-foot-note">
          The 5 TPD CBG plant at Shivni, Beed is a proposed project. Technical figures on this website are design
          values subject to final engineering.
        </p>

        <div className="dbe-foot-bottom">
          <span>
            © {year} {COMPANY.legalName}. All rights reserved.
          </span>
          {/* noreferrer is omitted on purpose so justonclick.in can attribute referral visits. */}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a className="dbe-foot-dev" href={DEVELOPER.url} target="_blank" rel="noopener">
            Designed &amp; developed by <strong>{DEVELOPER.name}</strong>
            <span className="dbe-foot-dev-domain">
              {DEVELOPER.display} <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
