/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/FlagshipProject.js — 5 TPD CBG project, Shivni, Beed
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight, Calendar, Factory, Fuel, MapPin, Sprout } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import {
  CtaBand,
  Notice,
  PageHero,
  Photo,
  ProjectStatusPill,
  SectionHeading,
  SpecTable,
  StatStrip,
} from "../components/ui";
import ProcessFlow from "../components/diagrams/ProcessFlow";
import PlantSchematic from "../components/diagrams/PlantSchematic";
import { CascadeDiagram, DigesterDiagram, SeparationDiagram } from "../components/diagrams/EquipmentDiagrams";
import { COMPANY, CONTACT, SITE, mapLink } from "../config/site";
import { FLAGSHIP } from "../data/flagship";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

const PATH = `/projects/${FLAGSHIP.slug}`;

function FlagshipProject() {
  return (
    <>
      <Seo
        title="5 TPD CBG Plant, Shivni, Beed | Napier Grass Compressed Biogas Project"
        description="Proposed 5 TPD compressed biogas plant at Shivni, Beed, Maharashtra: Napier grass / multi-feedstock, 10,000 m³ mesophilic CSTR, up to 5,000 kg/day CBG at ≥98% methane, compression up to 250 bar, FOM & LFOM recovery."
        path={PATH}
        schema={[
          breadcrumbSchema([
            { name: "Projects", path: "/projects" },
            { name: FLAGSHIP.title, path: PATH },
          ]),
          {
            "@type": "Project",
            name: FLAGSHIP.headline,
            description: FLAGSHIP.summary,
            url: `${SITE.url}${PATH}`,
            sponsor: { "@id": `${SITE.url}/#organization` },
            location: {
              "@type": "Place",
              name: CONTACT.projectLocation.display,
              address: {
                "@type": "PostalAddress",
                addressLocality: CONTACT.projectLocation.village,
                addressRegion: CONTACT.projectLocation.state,
                addressCountry: "IN",
              },
            },
          },
        ]}
      />
      <PageHero
        eyebrow="Flagship project"
        title={FLAGSHIP.headline}
        lead={FLAGSHIP.summary}
        photo="plantAerial"
        crumbs={[
          { name: "Projects", path: "/projects" },
          { name: "5 TPD CBG Project", path: PATH },
        ]}
      >
        <div className="d-flex flex-wrap gap-2 align-items-center mt-3">
          <ProjectStatusPill status={FLAGSHIP.status} />
          <span className="dbe-pill" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
            <MapPin size={12} /> {CONTACT.projectLocation.display}
          </span>
        </div>
      </PageHero>

      <section className="dbe-hero-stats">
        <Container>
          <StatStrip items={FLAGSHIP.keyFigures} note={FLAGSHIP.disclaimer} />
        </Container>
      </section>

      {/* Overview */}
      <section className="dbe-section">
        <Container>
          <Row className="g-5">
            <Col lg={7}>
              <SectionHeading
                eyebrow="Project overview"
                title={
                  <>
                    Renewable gas from <em>Napier grass</em> in Beed
                  </>
                }
              />
              <div className="dbe-prose dbe-reveal" style={stagger(2)}>
                <p>
                  {COMPANY.legalName} is developing a compressed biogas plant at Shivni, Taluka Beed. The plant is
                  designed around Napier grass as its primary feedstock, with multi-feedstock capability, and a rated
                  output of up to 5,000 kg of CBG per day over 330 operating days a year.
                </p>
                <p>
                  Harvested grass is chopped, ground and made into slurry, then digested in a single 10,000 m³
                  mesophilic CSTR. The raw biogas is cleaned of H₂S, upgraded by removing CO₂, dried, compressed to a
                  design pressure of up to 250 bar, odourised and dispatched through cascade filling. Digestate is
                  separated into fermented organic manure (FOM) and liquid fermented organic manure (LFOM).
                </p>
              </div>
              <Notice className="mt-4 dbe-reveal">
                <strong>Project status: proposed / under development.</strong> This page describes the plant's design
                basis. It is not yet constructed or operational, and figures remain subject to final engineering,
                approvals and contractual confirmation.
              </Notice>
            </Col>
            <Col lg={5}>
              <div className="dbe-aside-card dbe-reveal dbe-rv-right">
                <h2>At a glance</h2>
                <dl className="dbe-kv">
                  <div>
                    <dt>
                      <Sprout size={14} className="me-1" /> Feedstock
                    </dt>
                    <dd>Napier grass / multi-feedstock</dd>
                  </div>
                  <div>
                    <dt>
                      <Factory size={14} className="me-1" /> Digester
                    </dt>
                    <dd>1 × 10,000 m³ CSTR</dd>
                  </div>
                  <div>
                    <dt>
                      <Fuel size={14} className="me-1" /> CBG output
                    </dt>
                    <dd>Up to 5,000 kg/day</dd>
                  </div>
                  <div>
                    <dt>
                      <Calendar size={14} className="me-1" /> Operation
                    </dt>
                    <dd>330 days/year</dd>
                  </div>
                  <div>
                    <dt>
                      <MapPin size={14} className="me-1" /> Location
                    </dt>
                    <dd>Shivni, Beed</dd>
                  </div>
                </dl>
                <a href={mapLink()} target="_blank" rel="noopener noreferrer" className="dbe-link-arrow mt-3">
                  View Shivni, Beed on Google Maps <ArrowRight size={15} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specifications */}
      <section className="dbe-section dbe-section-alt" id="specifications">
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              <SectionHeading
                eyebrow="Technical configuration"
                title="Plant specification"
                sub="Design parameters from the Detailed Project Report and the supplier's techno-commercial offer."
              />
              <div className="dbe-reveal">
                <Photo photo="napierGrass" ratio="4 / 3" />
              </div>
            </Col>
            <Col lg={8}>
              <div className="dbe-reveal dbe-rv-right">
                <SpecTable rows={FLAGSHIP.specs} caption="5 TPD CBG plant technical specification" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process */}
      <section className="dbe-section">
        <Container>
          <SectionHeading
            center
            eyebrow="Process"
            title="Napier grass to CBG — the plant process"
            sub="The complete integrated process, followed by the plant block diagram."
          />
          <div className="dbe-reveal dbe-rv-zoom">
            <ProcessFlow />
          </div>
          <div className="mt-5 dbe-reveal">
            <PlantSchematic />
          </div>
        </Container>
      </section>

      {/* Equipment */}
      <section className="dbe-section dbe-section-warm">
        <Container>
          <SectionHeading
            center
            eyebrow="Key systems"
            title="Digestion, compression and digestate recovery"
            sub="Simplified illustrations of the main process systems in the plant design."
          />
          <Row className="g-4">
            <Col lg={4}>
              <div className="dbe-eq-frame-wrap dbe-reveal dbe-rv-zoom">
                <h3 className="h6 mb-3">CSTR digester</h3>
                <DigesterDiagram />
              </div>
            </Col>
            <Col lg={4}>
              <div className="dbe-eq-frame-wrap dbe-reveal dbe-rv-zoom" style={stagger(1)}>
                <h3 className="h6 mb-3">CBG cascade filling</h3>
                <CascadeDiagram />
              </div>
            </Col>
            <Col lg={4}>
              <div className="dbe-eq-frame-wrap dbe-reveal dbe-rv-zoom" style={stagger(2)}>
                <h3 className="h6 mb-3">FOM / LFOM separation</h3>
                <SeparationDiagram />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gas upgrading */}
      <section className="dbe-section dbe-section-dark">
        <span className="dbe-grid-bg" />
        <Container className="position-relative">
          <SectionHeading
            center
            eyebrow="Gas upgrading"
            title="Purification and upgrading configuration"
            sub="Technologies specified in the DPR, supplied through technology partners."
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
                <h3>By-products</h3>
                <span className="dbe-tech-tech">FOM &amp; LFOM</span>
                <p>{FLAGSHIP.byproductNote}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Implementation */}
      <section className="dbe-section">
        <Container>
          <SectionHeading
            eyebrow="Implementation approach"
            title="How the project will be delivered"
            sub="Indicative equipment delivery is 36–42 weeks per the supplier's estimate, subject to conditions."
          />
          <ol className="dbe-method dbe-method-light">
            {FLAGSHIP.implementation.map((m, i) => (
              <li key={m.title} className="dbe-reveal dbe-rv-zoom" style={stagger(i)}>
                <span className="dbe-method-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        eyebrow="Project enquiries"
        title="Interested in the 5 TPD CBG project?"
        text="Feedstock suppliers, CBG off-takers, technology partners and organic manure buyers are welcome to contact us about the Shivni project."
        primary={{ to: "/contact?requirement=flagship", label: "Contact the project team" }}
      />
    </>
  );
}

export default FlagshipProject;
