/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/Sustainability.js — sustainability
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Factory, Flame, Fuel, Leaf, Recycle, Sprout, Tractor, Wheat } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { CtaBand, Notice, PageHero, Photo, SectionHeading } from "../components/ui";
import { useCardGlow } from "../hooks/useCardGlow";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

const PILLARS = [
  {
    icon: Flame,
    title: "Renewable energy generation",
    text: "Biogas is produced from recently grown biomass and organic residues. Upgraded to CBG, it provides a renewable gaseous fuel.",
  },
  {
    icon: Wheat,
    title: "Agricultural biomass utilisation",
    text: "Energy crops such as Napier grass and crop residues become a productive feedstock — and a potential additional income stream for farmers.",
  },
  {
    icon: Recycle,
    title: "Organic waste valorisation",
    text: "Organic material that would otherwise be burned, landfilled or left to decompose is converted into energy and manure.",
  },
  {
    icon: Leaf,
    title: "Digestate recovery",
    text: "Digestate is separated into fermented organic manure (FOM) and liquid fermented organic manure (LFOM), returning organic matter and nutrients to the soil.",
  },
  {
    icon: Fuel,
    title: "Reduced fossil fuel dependence",
    text: "Compressed biogas can substitute fossil-derived gas in suitable applications, contributing to lower dependence on imported fossil fuels.",
  },
  {
    icon: Factory,
    title: "Local value creation",
    text: "Plants located near feedstock create rural employment in cultivation, logistics, operations and manure distribution.",
  },
];

const CIRCLE = [
  { icon: Sprout, label: "Napier grass cultivation", x: 50, y: 9 },
  { icon: Tractor, label: "Harvest & feedstock supply", x: 83, y: 50 },
  { icon: Fuel, label: "Biogas → CBG", x: 50, y: 91 },
  { icon: Leaf, label: "FOM / LFOM to farmland", x: 17, y: 50 },
];

function Sustainability() {
  const glow = useCardGlow();
  return (
    <>
      <Seo
        title="Sustainability | Biogas, Circular Economy & Organic Manure"
        description="How biogas and compressed biogas from Napier grass and organic waste support renewable energy, agricultural biomass utilisation, organic waste valorisation and a circular economy."
        path="/sustainability"
        schema={[breadcrumbSchema([{ name: "Sustainability", path: "/sustainability" }])]}
      />
      <PageHero
        eyebrow="Sustainability"
        title="Energy that starts in the field and returns to it"
        lead="Biogas connects agriculture, waste management and energy. Done well, it turns organic material into renewable fuel and gives nutrients back to the soil."
        photo="digesterRenewables"
        crumbs={[{ name: "Sustainability", path: "/sustainability" }]}
      />

      <section className="dbe-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <SectionHeading
                eyebrow="Circular economy"
                title={
                  <>
                    A <em>closed loop</em> from soil to fuel to soil
                  </>
                }
                sub="In a Napier-grass-based CBG plant, the same land that grows the feedstock can receive the organic manure recovered from digestate. Energy leaves the loop as CBG; organic matter and nutrients return."
              />
            </Col>
            <Col lg={6}>
              <div className="dbe-circle dbe-reveal dbe-rv-zoom" aria-label="Circular economy loop" role="img">
                <span className="dbe-circle-ring" />
                <span className="dbe-circle-core">Circular biogas value chain</span>
                {CIRCLE.map((c) => (
                  <span className="dbe-circle-node" style={{ left: `${c.x}%`, top: `${c.y}%` }} key={c.label}>
                    <span>
                      <c.icon size={22} aria-hidden="true" />
                    </span>
                    {c.label}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="dbe-section dbe-section-alt">
        <Container>
          <SectionHeading center eyebrow="Our contribution" title="Where biogas creates sustainable value" />
          <Row className="g-4">
            {PILLARS.map((p, i) => (
              <Col md={6} lg={4} key={p.title}>
                <div {...glow} className="dbe-card dbe-card-hover dbe-reveal dbe-rv-flip" style={stagger(i % 3)}>
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
          <Notice className="mt-5 dbe-reveal">
            We do not publish carbon-saving or environmental-impact figures until they can be measured or verified for
            an operating plant. Benefits described here are qualitative.
          </Notice>
        </Container>
      </section>

      <section className="dbe-section">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <div className="dbe-reveal dbe-rv-left">
                <Photo photo="napierGrass" ratio="16 / 10" />
              </div>
            </Col>
            <Col md={6}>
              <div className="dbe-reveal dbe-rv-right">
                <Photo photo="digesterFarmland" ratio="16 / 10" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

export default Sustainability;
