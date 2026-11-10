/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/Technology.js — technology & process
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { CtaBand, Icon, Notice, PageHero, Photo, SectionHeading } from "../components/ui";
import ProcessFlow from "../components/diagrams/ProcessFlow";
import PlantSchematic from "../components/diagrams/PlantSchematic";
import { CascadeDiagram, DigesterDiagram, SeparationDiagram } from "../components/diagrams/EquipmentDiagrams";
import { FLAGSHIP } from "../data/flagship";
import { DIGESTATE_PATH, DPR_STEPS, GAS_PATH } from "../data/process";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

function Technology() {
  return (
    <>
      <Seo
        title="CBG Plant Technology & Process | Napier Grass to Compressed Biogas"
        description="How a Napier grass CBG plant works: pre-treatment, slurry preparation, mesophilic CSTR digestion, H₂S removal, CO₂ upgrading, gas drying, compression to 250 bar and cascade filling, plus FOM/LFOM recovery."
        path="/technology"
        schema={[
          breadcrumbSchema([{ name: "Technology & Process", path: "/technology" }]),
          {
            "@type": "HowTo",
            name: "How Napier grass is converted into compressed biogas (CBG)",
            step: GAS_PATH.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.text,
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Technology & process"
        title="From Napier grass to compressed biogas"
        lead="Feedstock → pre-treatment → slurry → anaerobic digestion → raw biogas → H₂S removal → CO₂ upgrading → drying → compression → CBG filling. With digestate recovered as organic manure."
        photo="digesters"
        crumbs={[{ name: "Technology & Process", path: "/technology" }]}
      />

      {/* Interactive overview */}
      <section className="dbe-section">
        <Container>
          <SectionHeading
            center
            eyebrow="Process overview"
            title={
              <>
                The integrated <em>CBG process</em>
              </>
            }
            sub="Explore each stage of the gas pathway and the digestate pathway, as configured in our flagship plant's Detailed Project Report."
          />
          <div className="dbe-reveal dbe-rv-zoom">
            <ProcessFlow />
          </div>
        </Container>
      </section>

      {/* Schematic */}
      <section className="dbe-section dbe-section-alt">
        <Container>
          <SectionHeading
            eyebrow="Process flow diagram"
            title="Plant block diagram"
            sub="How material and gas move through the plant, with design values from the 5 TPD project. Animated lines show the gas, feedstock and digestate streams."
          />
          <div className="dbe-reveal">
            <PlantSchematic />
          </div>
        </Container>
      </section>

      {/* Stage by stage */}
      <section className="dbe-section">
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              <div className="dbe-sol-aside">
                <SectionHeading
                  eyebrow="Stage by stage"
                  title="What happens at each stage"
                  sub="Concise technical notes for each step of the gas pathway."
                />
                <div className="dbe-reveal">
                  <Photo photo="upgrading" ratio="4 / 3" />
                </div>
              </div>
            </Col>
            <Col lg={8}>
              {GAS_PATH.map((s, i) => (
                <div className="dbe-stage dbe-reveal" key={s.key} style={stagger(i % 3, 60)}>
                  <span className="dbe-stage-num">
                    <Icon name={s.icon} size={26} />
                    <b>{String(i + 1).padStart(2, "0")}</b>
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <ul className="dbe-flow-tags">
                      {s.detail.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Digester */}
      <section className="dbe-section dbe-section-warm">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <SectionHeading
                eyebrow="Anaerobic digestion"
                title="Mesophilic CSTR digestion"
                sub="A continuously stirred tank reactor keeps feedstock, microorganisms and temperature uniform throughout the tank. Our flagship design uses a single 10,000 m³ CSTR in the mesophilic range with a hydraulic retention time of approximately 36 days."
              />
              <div className="dbe-reveal" style={stagger(3)}>
                <Photo photo="digesters" ratio="16 / 9" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="dbe-eq-frame-wrap dbe-reveal dbe-rv-right">
                <DigesterDiagram />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gas purification */}
      <section className="dbe-section dbe-section-dark">
        <span className="dbe-grid-bg" />
        <Container className="position-relative">
          <SectionHeading
            center
            eyebrow="Gas purification & upgrading"
            title="Gas cleaning, upgrading and compression"
            sub="The purification configuration specified in the DPR. These technologies are supplied by specialist technology partners and are not proprietary to Deva Bio Engineering."
          />
          <Row className="g-4">
            {FLAGSHIP.purification.map((p, i) => (
              <Col md={6} lg={4} key={p.key}>
                <div className="dbe-tech-card dbe-reveal dbe-rv-flip" style={stagger(i % 3)}>
                  <h3>{p.title}</h3>
                  <span className="dbe-tech-tech">{p.tech}</span>
                  <p>{p.text}</p>
                </div>
              </Col>
            ))}
            <Col md={6} lg={4}>
              <div className="dbe-tech-card dbe-reveal dbe-rv-flip" style={stagger(2)}>
                <h3>Product gas</h3>
                <span className="dbe-tech-tech">≥ 98% CH₄ · up to 250 bar · odourised</span>
                <p>
                  The result is compressed biogas suitable for cascade storage and dispatch, monitored continuously by
                  online gas analysers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Compression & filling */}
      <section className="dbe-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="order-lg-2">
              <SectionHeading
                eyebrow="Compression & filling"
                title="High-pressure compression and cascade filling"
                sub="Dried, upgraded gas is compressed by reciprocating compressors to a design pressure of up to 250 bar, odourised, and stored in cylinder cascades from which CBG is dispatched."
              />
              <div className="dbe-reveal" style={stagger(3)}>
                <Photo photo="compressor" ratio="16 / 9" />
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="dbe-eq-frame-wrap dbe-reveal dbe-rv-left">
                <CascadeDiagram />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Digestate */}
      <section className="dbe-section dbe-section-alt">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <SectionHeading
                eyebrow="Digestate pathway"
                title="Digestion → separation → FOM / LFOM"
                sub="Digestate leaving the CSTR is separated into solid and liquid fractions."
              />
              <ul className="dbe-loop dbe-reveal" style={stagger(3)}>
                {DIGESTATE_PATH.map((d) => (
                  <li key={d.key}>
                    <b>{d.title}</b> — {d.text}
                  </li>
                ))}
              </ul>
              <p className="dbe-small-note">{FLAGSHIP.byproductNote}</p>
            </Col>
            <Col lg={6}>
              <div className="dbe-eq-frame-wrap dbe-reveal dbe-rv-right">
                <SeparationDiagram />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* DPR steps */}
      <section className="dbe-section">
        <Container>
          <SectionHeading
            eyebrow="DPR process configuration"
            title="The 14 integrated steps"
            sub="As listed in the Detailed Project Report for the 5 TPD CBG plant."
          />
          <ol className="dbe-dpr-steps dbe-reveal">
            {DPR_STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <Notice className="mt-4 dbe-reveal">
            Technical performance figures are based on the supplier's techno-commercial offer and remain subject to
            final engineering and contractual confirmation.
          </Notice>
          <div className="mt-4 dbe-reveal">
            <Link to={`/projects/${FLAGSHIP.slug}`} className="dbe-btn dbe-btn-primary">
              View the 5 TPD project <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

export default Technology;
