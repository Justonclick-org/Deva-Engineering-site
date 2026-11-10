/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/Industries.js — industries we serve
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight, Zap } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { CtaBand, Icon, PageHero, SectionHeading } from "../components/ui";
import { INDUSTRIES } from "../data/industries";
import { getSolution } from "../data/solutions";
import { useCardGlow } from "../hooks/useCardGlow";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

function Industries() {
  const glow = useCardGlow();
  return (
    <>
      <Seo
        title="Industries We Serve | Biogas & Waste-to-Energy Opportunities"
        description="Biogas and CBG opportunities for agriculture, dairy and livestock, food processing, sugar and agro-industries, organic waste, commercial establishments, manufacturing and municipalities."
        path="/industries"
        schema={[breadcrumbSchema([{ name: "Industries", path: "/industries" }])]}
      />
      <PageHero
        eyebrow="Industries we serve"
        title="Every organic stream is a potential energy source"
        lead="Agriculture, livestock, agro-processing and urban organic waste all produce material that can be digested into biogas, upgraded to CBG and returned to the soil as organic manure."
        photo="digesterRenewables"
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />

      <section className="dbe-section">
        <Container>
          <SectionHeading
            center
            eyebrow="Feedstock & opportunities"
            title="Industries and their biogas potential"
            sub="Typical feedstock and the renewable energy opportunity for each sector. Feasibility always depends on actual quantities, consistency and composition."
          />
          <Row className="g-4">
            {INDUSTRIES.map((ind, i) => {
              const sol = getSolution(ind.solution);
              return (
                <Col md={6} xl={3} key={ind.key}>
                  <article
                    {...glow}
                    id={ind.key}
                    className="dbe-card dbe-card-hover dbe-ind dbe-reveal dbe-rv-zoom"
                    style={stagger(i % 4)}
                  >
                    <span className="dbe-bubble" />
                    <span className={`dbe-icon${i % 2 ? " dbe-icon-earth" : ""}`}>
                      <Icon name={ind.icon} />
                    </span>
                    <h2 className="h5">{ind.title}</h2>
                    <p>{ind.text}</p>
                    <ul className="dbe-ind-feed" aria-label={`Typical feedstock for ${ind.title}`}>
                      {ind.feedstock.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <div className="dbe-ind-opp">
                      <Zap size={16} aria-hidden="true" />
                      <span>{ind.opportunity}</span>
                    </div>
                    {sol && (
                      <Link to={`/solutions/${sol.slug}`} className="dbe-card-more">
                        {sol.short} <ArrowRight size={15} />
                      </Link>
                    )}
                  </article>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <CtaBand
        title="Have an organic stream to evaluate?"
        text="Tell us the type of material, approximate daily quantity and location. We'll discuss whether a biogas or CBG plant could make sense."
      />
    </>
  );
}

export default Industries;
