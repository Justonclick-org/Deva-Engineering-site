/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/About.js — About Us
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight, Compass, Eye, HardHat, Leaf, Lightbulb, Ruler, ShieldCheck, Sprout, Target, Users } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { Checks, CtaBand, PageHero, Photo, SectionHeading } from "../components/ui";
import { COMPANY } from "../config/site";
import { useCardGlow } from "../hooks/useCardGlow";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

const PHILOSOPHY = [
  { icon: Ruler, title: "Design from the feedstock up", text: "Plant capacity follows dependable feedstock — never the other way round." },
  { icon: Compass, title: "Integrate, don't assemble", text: "Each section of the plant is sized and specified against the others so the whole system performs." },
  { icon: Lightbulb, title: "Proven technology, applied carefully", text: "We work with established technology suppliers for specialised equipment and focus on getting the integration right." },
  { icon: Users, title: "Partnership with farmers", text: "Napier grass supply and organic manure link the plant to local farmers in a shared value chain." },
];

const SAFETY = [
  "Hazard-aware design for flammable gas, H₂S and high-pressure systems",
  "PLC / SCADA control with online gas quality monitoring",
  "Odourisation of CBG so leaks are detectable",
  "Statutory approvals and safety clearances before commissioning",
  "Documented operating and maintenance procedures",
  "Gas quality verification against CBG specifications",
];

function About() {
  const glow = useCardGlow();
  const initials = COMPANY.promoter.name
    .replace(/^Mr\.\s*/, "")
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .join("");

  return (
    <>
      <Seo
        title="About Deva Bio Engineering | Biogas & Renewable Energy Company, Beed"
        description="Deva Bio Engineering Private Limited is a biogas engineering and compressed biogas (CBG) company from Beed, Maharashtra, promoted by Mr. Devidas P. Sanap. Vision, mission and engineering approach."
        path="/about"
        schema={[breadcrumbSchema([{ name: "About", path: "/about" }])]}
      />
      <PageHero
        eyebrow="About us"
        title="Engineering renewable gas from Maharashtra's biomass"
        lead={`${COMPANY.legalName} is a biogas engineering and renewable energy company focused on compressed biogas — turning agricultural biomass and organic feedstock into clean fuel and organic manure.`}
        photo="digesterFarmland"
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="dbe-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <SectionHeading
                eyebrow="Company introduction"
                title={
                  <>
                    A focused <em>biogas and CBG</em> company
                  </>
                }
              />
              <div className="dbe-prose dbe-reveal" style={stagger(2)}>
                <p>
                  {COMPANY.legalName} works across biogas engineering, compressed biogas (CBG), Bio-CNG, organic
                  waste-to-energy and agricultural biomass utilisation. The company is based in Beed district in
                  Maharashtra's Marathwada region — an agricultural area where energy crops and organic residues
                  can become a dependable source of renewable gas.
                </p>
                <p>
                  The company's first project is a proposed 5 TPD compressed biogas plant at Shivni, Taluka Beed,
                  designed to process Napier grass and other organic feedstock through a mesophilic CSTR digester,
                  gas upgrading and high-pressure compression.
                </p>
              </div>
              <div className="dbe-promoter mt-4 dbe-reveal" style={stagger(3)}>
                <span className="dbe-promoter-avatar" aria-hidden="true">
                  {initials}
                </span>
                <span>
                  <strong>{COMPANY.promoter.name}</strong>
                  <small>
                    {COMPANY.promoter.role}, {COMPANY.legalName}
                  </small>
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="dbe-reveal dbe-rv-right">
                <Photo photo="napierGrass" ratio="4 / 3.3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="dbe-section dbe-section-alt">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="dbe-vm dbe-vm-vision dbe-reveal dbe-rv-left">
                <span className="dbe-kicker">Vision</span>
                <h3>Renewable gas as a mainstream regional fuel</h3>
                <p>
                  To help make compressed biogas a dependable, locally produced fuel — built on agricultural biomass
                  and organic waste, and creating value for the farmers and communities that supply it.
                </p>
                <Eye className="dbe-vm-icon" size={180} aria-hidden="true" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="dbe-vm dbe-vm-mission dbe-reveal dbe-rv-right">
                <span className="dbe-kicker">Mission</span>
                <h3>Engineer integrated, well-run biogas plants</h3>
                <p>
                  To develop biogas and CBG plants that are sized to real feedstock, integrated end to end, operated
                  safely, and that return organic manure to the soil — starting with our flagship project in Beed.
                </p>
                <Target className="dbe-vm-icon" size={180} aria-hidden="true" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="dbe-section">
        <Container>
          <SectionHeading
            center
            eyebrow="Engineering philosophy"
            title="How we think about engineering"
            sub="Biogas plants succeed or fail on integration. These principles guide our design decisions."
          />
          <Row className="g-4">
            {PHILOSOPHY.map((p, i) => (
              <Col md={6} xl={3} key={p.title}>
                <div {...glow} className="dbe-card dbe-card-hover dbe-reveal dbe-rv-flip" style={stagger(i)}>
                  <span className="dbe-bubble" />
                  <span className={`dbe-icon${i % 2 ? " dbe-icon-earth" : ""}`}>
                    <p.icon size={22} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="dbe-section dbe-section-dark">
        <span className="dbe-grid-bg" />
        <Container className="position-relative">
          <Row className="g-5">
            <Col lg={6}>
              <SectionHeading
                eyebrow="Renewable energy commitment"
                title="Sustainable development, practically applied"
                sub="Our commitment to renewable energy is expressed through what our plants do: use biomass that would otherwise go unused, replace fossil fuel with renewable gas, and return nutrients to farmland."
              />
              <ul className="dbe-checks dbe-reveal" style={stagger(3)}>
                <li>
                  <Sprout size={18} /> <span>Agricultural biomass and energy crops as primary feedstock</span>
                </li>
                <li>
                  <Leaf size={18} /> <span>Organic manure recovery from digestate (FOM / LFOM)</span>
                </li>
                <li>
                  <ShieldCheck size={18} /> <span>Clean, upgraded gas meeting CBG quality requirements</span>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <SectionHeading
                eyebrow="Project development approach"
                title="From opportunity to operating plant"
                sub="Feasibility and feedstock assessment, technical configuration, partner and approval stage, construction, commissioning and operation — each with clear decision points."
              />
              <div className="dbe-reveal" style={stagger(3)}>
                <Link to="/projects" className="dbe-btn dbe-btn-glass">
                  See our projects <ArrowRight size={17} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="dbe-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5}>
              <div className="dbe-reveal dbe-rv-left">
                <Photo photo="compressor" ratio="4 / 3.2" />
              </div>
            </Col>
            <Col lg={7}>
              <SectionHeading
                eyebrow="Quality & safety"
                title={
                  <>
                    <HardHat size={30} className="me-2 align-text-bottom text-success" aria-hidden="true" />
                    Quality and safety focus
                  </>
                }
                sub="Biogas plants handle flammable gas, hydrogen sulphide and pressures up to 250 bar. Safety and quality are designed in, not added later."
              />
              <div className="dbe-reveal" style={stagger(3)}>
                <Checks items={SAFETY} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

export default About;
