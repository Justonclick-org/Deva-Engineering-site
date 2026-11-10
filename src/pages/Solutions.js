/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/Solutions.js — solutions overview
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { CtaBand, Icon, PageHero, Photo, SectionHeading, SolutionStatusPill } from "../components/ui";
import { SITE } from "../config/site";
import { SOLUTIONS, SOLUTION_STATUS } from "../data/solutions";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

function Solutions() {
  return (
    <>
      <Seo
        title="Biogas & CBG Plant Solutions | Deva Bio Engineering"
        description="Compressed biogas (CBG) plants, Napier grass and multi-feedstock biogas solutions, biogas upgrading, digestate management and waste-to-energy from Deva Bio Engineering, Maharashtra."
        path="/solutions"
        schema={[
          breadcrumbSchema([{ name: "Solutions", path: "/solutions" }]),
          {
            "@type": "ItemList",
            itemListElement: SOLUTIONS.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE.url}/solutions/${s.slug}`,
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Our solutions"
        title="Biogas and compressed biogas solutions"
        lead="Integrated solutions from feedstock to CBG and organic manure — with a clear label on how each one is delivered today."
        photo="upgrading"
        crumbs={[{ name: "Solutions", path: "/solutions" }]}
      />

      <section className="dbe-section dbe-section-tight">
        <Container>
          <div className="dbe-legend">
            {Object.entries(SOLUTION_STATUS).map(([key, s], i) => (
              <div key={key} className="dbe-reveal dbe-rv-zoom" style={stagger(i)}>
                <SolutionStatusPill status={key} />
                <p>{s.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="dbe-section pt-0">
        <Container>
          {SOLUTIONS.map((s, i) => (
            <article className="dbe-sol-row" key={s.slug} id={s.slug}>
              <Row className={`g-4 g-lg-5 align-items-center${i % 2 ? " flex-lg-row-reverse" : ""}`}>
                <Col lg={5}>
                  <div className={`dbe-reveal ${i % 2 ? "dbe-rv-right" : "dbe-rv-left"}`}>
                    <Photo photo={s.photo} ratio="16 / 11" />
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="dbe-reveal" style={stagger(1)}>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="dbe-icon mb-0" style={{ width: 44, height: 44 }}>
                        <Icon name={s.icon} size={20} />
                      </span>
                      <SolutionStatusPill status={s.status} />
                    </div>
                    <h2 className="dbe-heading" style={{ fontSize: "clamp(1.45rem, 2.4vw, 1.9rem)" }}>
                      {s.title}
                    </h2>
                    <p className="dbe-sub">{s.summary}</p>
                    <Link to={`/solutions/${s.slug}`} className="dbe-btn dbe-btn-outline mt-2">
                      Explore {s.short} <ArrowRight size={17} />
                    </Link>
                  </div>
                </Col>
              </Row>
            </article>
          ))}
        </Container>
      </section>

      <section className="dbe-section dbe-section-alt">
        <Container>
          <SectionHeading
            center
            eyebrow="Not sure where to start?"
            title="Begin with your feedstock"
            sub="The right solution depends on what organic material is available, how much, and how consistently. Tell us about yours and we'll discuss a suitable configuration."
          />
          <div className="text-center dbe-reveal">
            <Link to="/contact" className="dbe-btn dbe-btn-primary">
              Discuss your requirement <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

export default Solutions;
