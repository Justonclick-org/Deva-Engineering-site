/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/Home.js — homepage
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Compass,
  Cpu,
  Eye,
  FileSearch,
  Flame,
  Gauge,
  HardHat,
  Leaf,
  MapPin,
  Microscope,
  Network,
  Recycle,
  Settings2,
  ShieldCheck,
  Sprout,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";
import Seo from "../components/Seo";
import {
  CtaBand,
  Faq,
  Icon,
  Marquee,
  Photo,
  ProjectStatusPill,
  SectionHeading,
  SolutionStatusPill,
  StatStrip,
  faqSchema,
} from "../components/ui";
import ProcessFlow from "../components/diagrams/ProcessFlow";
import { SeparationDiagram } from "../components/diagrams/EquipmentDiagrams";
import { COMPANY, SITE } from "../config/site";
import { FLAGSHIP } from "../data/flagship";
import { SOLUTIONS } from "../data/solutions";
import { INDUSTRIES } from "../data/industries";
import { FAQS } from "../data/faqs";
import { PHOTOS } from "../data/images";
import { useCardGlow } from "../hooks/useCardGlow";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

const APPROACH = [
  { icon: Sprout, title: "Feedstock first", text: "A biogas plant is only as reliable as its feedstock. We start with what can be grown or collected dependably — then size the plant around it." },
  { icon: Workflow, title: "Integrated engineering", text: "Digestion, gas cleaning, upgrading, compression and filling are designed as one system, not as separate packages bolted together." },
  { icon: Recycle, title: "Circular value chain", text: "Organic manure from digestate goes back to the farms that supply feedstock, so the plant returns value to its region." },
  { icon: Eye, title: "Transparent by default", text: "We publish design values as design values and proposed projects as proposed. Credibility is built on accurate information." },
];

const HOW_BIOGAS = [
  { icon: Leaf, title: "Organic matter", text: "Energy crops, crop residues, manure or organic waste provide carbon-rich material." },
  { icon: Microscope, title: "Anaerobic digestion", text: "Microorganisms break it down in a sealed, oxygen-free digester at a controlled temperature." },
  { icon: Flame, title: "Raw biogas", text: "The process releases biogas — mostly methane and carbon dioxide — plus digestate." },
  { icon: Zap, title: "Compressed biogas", text: "Cleaned, upgraded and compressed, biogas becomes CBG: a renewable gaseous fuel." },
];

const CAPABILITIES = [
  { icon: ClipboardList, title: "Project development", text: "Feasibility, DPR preparation, feedstock planning and project structuring." },
  { icon: Settings2, title: "Process configuration", text: "Matching digester volume, retention time and gas train capacity to feedstock." },
  { icon: ShieldCheck, title: "Gas purification", text: "H₂S removal, CO₂ upgrading and gas drying, selected with technology partners." },
  { icon: Gauge, title: "High-pressure systems", text: "Reciprocating compression up to 250 bar design, odourisation and cascade filling." },
  { icon: Cpu, title: "Automation & monitoring", text: "PLC / SCADA control with online gas quality monitoring." },
  { icon: Truck, title: "Feedstock logistics", text: "Harvest, transport, storage and pre-treatment planning for fibrous biomass." },
];

const METHOD = [
  { icon: FileSearch, title: "Feasibility & feedstock assessment", text: "Quantity, consistency and characteristics of available feedstock, and site suitability." },
  { icon: Compass, title: "Technical configuration", text: "Process selection, mass balance and capacity sizing across the plant." },
  { icon: Network, title: "Technology partners & approvals", text: "Selection of technology suppliers and EPC partners; statutory and safety clearances." },
  { icon: HardHat, title: "Construction & erection", text: "Civil works, digester construction, equipment erection, piping and electricals." },
  { icon: BadgeCheck, title: "Commissioning", text: "Biological start-up, gas train commissioning and performance verification." },
  { icon: Settings2, title: "Operations", text: "Feedstock management, gas quality monitoring, dispatch and by-product handling." },
];

const WHY = [
  { title: "Grounded in a detailed project report", text: "Our flagship plant's configuration comes from a documented DPR and supplier techno-commercial offer — not generic estimates." },
  { title: "Focused on biogas and CBG", text: "Biogas engineering and compressed biogas are our core business, not a side line." },
  { title: "Napier grass expertise in development", text: "We are building practical know-how in grass-based digestion: chopping, slurry preparation and CSTR operation." },
  { title: "Rooted in Marathwada", text: "Based in Beed district, close to the farmers, feedstock and agro-industries our projects depend on." },
  { title: "Partner-backed technology", text: "Specialised equipment comes from established technology suppliers, integrated into one coherent plant." },
  { title: "Honest project communication", text: "Clear status labels, design-value caveats and no invented references — so you can plan with confidence." },
];

const GAS_BARS = [
  { label: "Raw biogas", value: 57.5, range: "55–60% CH₄", tone: "raw" },
  { label: "Compressed biogas (CBG)", value: 98, range: "≥ 98% CH₄", tone: "cbg" },
];

function Home() {
  const glow = useCardGlow();
  const hero = PHOTOS.plantAerial;

  return (
    <>
      <Seo
        title="Deva Bio Engineering | Biogas Plant Engineering & CBG Plant Solutions in Maharashtra"
        description="Deva Bio Engineering Private Limited develops compressed biogas (CBG) and biogas plants from Napier grass and organic feedstock, including a proposed 5 TPD CBG project at Shivni, Beed, Maharashtra."
        path="/"
        schema={[
          {
            "@type": "WebSite",
            "@id": `${SITE.url}/#website`,
            url: `${SITE.url}/`,
            name: COMPANY.brandName,
            publisher: { "@id": `${SITE.url}/#organization` },
          },
          faqSchema(FAQS),
        ]}
      />

      {/* 1. Hero */}
      <section className="dbe-hero">
        <div className="dbe-hero-media" aria-hidden="true">
          <img src={hero.src} alt="" width={hero.width} height={hero.height} fetchPriority="high" />
        </div>
        <span className="dbe-grid-bg" />
        <span className="dbe-hero-blob dbe-hero-blob-a" />
        <span className="dbe-hero-blob dbe-hero-blob-b" />
        <span className="dbe-hero-bubbles" aria-hidden="true">
          <i /> <i /> <i /> <i /> <i /> <i />
        </span>
        <Container className="dbe-hero-inner">
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <span className="dbe-eyebrow dbe-eyebrow-dark dbe-reveal dbe-rv-drop">
                Biogas · Compressed Biogas · Renewable Energy
              </span>
              <h1 className="dbe-hero-title dbe-reveal dbe-rv-blur" style={stagger(1)}>
                Engineering Sustainable Energy <span>Through Biogas</span>
              </h1>
              <p className="dbe-hero-text dbe-reveal" style={stagger(2)}>
                Transforming organic waste and agricultural biomass into renewable compressed biogas through
                integrated engineering and sustainable energy solutions.
              </p>
              <div className="dbe-actions dbe-reveal" style={stagger(3)}>
                <Link to="/solutions" className="dbe-btn dbe-btn-primary">
                  Explore Our Solutions <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="dbe-btn dbe-btn-glass">
                  Discuss Your CBG Project <ArrowRight size={17} />
                </Link>
              </div>
              <div className="dbe-hero-trust dbe-reveal" style={stagger(4)}>
                <span>
                  <Sprout size={16} /> Napier grass &amp; multi-feedstock
                </span>
                <span>
                  <ShieldCheck size={16} /> ≥ 98% methane CBG design
                </span>
                <span>
                  <MapPin size={16} /> Beed, Maharashtra
                </span>
              </div>
            </Col>
            <Col lg={5}>
              <Link to={`/projects/${FLAGSHIP.slug}`} className="dbe-hero-card dbe-reveal dbe-rv-tilt" style={stagger(2)}>
                <span className="dbe-hero-card-top">
                  <span className="dbe-kicker">Flagship project</span>
                  <ProjectStatusPill status={FLAGSHIP.status} />
                </span>
                <strong>{FLAGSHIP.title}</strong>
                <small>
                  <MapPin size={13} /> Shivni, Beed · Maharashtra
                </small>
                <span className="dbe-hero-card-flow" aria-hidden="true">
                  <span>Napier grass</span>
                  <i />
                  <span>CSTR</span>
                  <i />
                  <span>Upgrading</span>
                  <i />
                  <span>CBG</span>
                </span>
                <span className="dbe-hero-card-grid">
                  <span>
                    <b>5,000</b> kg/day CBG
                  </span>
                  <span>
                    <b>10,000</b> m³ CSTR
                  </span>
                  <span>
                    <b>≥ 98%</b> CH₄ purity
                  </span>
                  <span>
                    <b>250</b> bar design
                  </span>
                </span>
                <span className="dbe-link-arrow">
                  View project profile <ArrowRight size={15} />
                </span>
              </Link>
            </Col>
          </Row>
        </Container>
        <p className="dbe-hero-credit">
          Representative image of an agricultural biogas plant ·{" "}
          <Link to="/image-credits">credit</Link>
        </p>
      </section>

      {/* Key design figures */}
      <section className="dbe-hero-stats">
        <Container>
          <StatStrip
            items={FLAGSHIP.keyFigures}
            note="Design values for the proposed 5 TPD CBG project, from the DPR and supplier techno-commercial offer — subject to final engineering."
          />
        </Container>
      </section>

      {/* 2. Company introduction */}
      <section className="dbe-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <div className="dbe-intro-media dbe-reveal dbe-rv-left">
                <Photo photo="digesters" ratio="4 / 3.4" />
                <div className="dbe-intro-badge">
                  <span className="dbe-intro-badge-icon">
                    <Leaf size={22} />
                  </span>
                  <span>
                    <strong>Biomass to energy</strong>
                    <small>Organic matter → biogas → CBG</small>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <SectionHeading
                eyebrow="Who we are"
                title={
                  <>
                    A biogas engineering company built around <em>compressed biogas</em>
                  </>
                }
              />
              <div className="dbe-prose dbe-reveal" style={stagger(2)}>
                <p>
                  {COMPANY.legalName} is a renewable energy company from Beed, Maharashtra, focused on biogas
                  engineering and compressed biogas (CBG). Promoted by {COMPANY.promoter.name}, the company is
                  developing integrated plants that turn agricultural biomass and organic feedstock into
                  renewable gas and organic manure.
                </p>
                <p>
                  Our first project — a proposed 5 TPD CBG plant at Shivni, Beed — is designed to run on Napier
                  grass and other organic feedstock, and defines the engineering approach we bring to every
                  biogas opportunity.
                </p>
              </div>
              <div className="dbe-actions mt-4 dbe-reveal" style={stagger(3)}>
                <Link to="/about" className="dbe-btn dbe-btn-outline">
                  About the company <ArrowRight size={17} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. Our approach */}
      <section className="dbe-section dbe-section-dark">
        <span className="dbe-grid-bg" />
        <Container className="position-relative">
          <SectionHeading
            center
            eyebrow="Our approach"
            title="How we approach renewable energy"
            sub="Four principles shape every plant we develop — from the first feedstock survey to steady-state operation."
          />
          <Row className="g-4">
            {APPROACH.map((a, i) => (
              <Col md={6} xl={3} key={a.title}>
                <div className="dbe-approach dbe-reveal dbe-rv-flip" style={stagger(i)}>
                  <span className="dbe-approach-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="dbe-approach-icon">
                    <a.icon size={24} />
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 4. Core solutions */}
      <section className="dbe-section">
        <Container>
          <div className="dbe-split-head">
            <SectionHeading
              eyebrow="Our solutions"
              title="Biogas and CBG solutions, end to end"
              sub="From feedstock to compressed biogas and organic manure. Each solution is labelled with how it is delivered today."
            />
            <Link to="/solutions" className="dbe-btn dbe-btn-outline dbe-reveal">
              All solutions <ArrowRight size={17} />
            </Link>
          </div>
          <Row className="g-4">
            {SOLUTIONS.map((s, i) => (
              <Col md={6} xl={4} key={s.slug}>
                <Link
                  {...glow}
                  to={`/solutions/${s.slug}`}
                  className="dbe-card dbe-sol-card dbe-reveal dbe-rv-zoom"
                  style={stagger(i % 3)}
                >
                  <span className="dbe-bubble" />
                  <span className="dbe-card-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`dbe-icon${s.status === "planned" ? " dbe-icon-earth" : ""}`}>
                    <Icon name={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="dbe-sol-foot">
                    <SolutionStatusPill status={s.status} />
                    <span className="dbe-card-more m-0">
                      Learn more <ArrowRight size={15} />
                    </span>
                  </span>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. Featured project */}
      <section className="dbe-section dbe-section-warm">
        <Container>
          <div className="dbe-feature dbe-reveal dbe-rv-blur">
            <Row className="g-0">
              <Col lg={6} className="dbe-feature-media">
                <Photo photo="plantAerial" ratio="auto" className="h-100 rounded-0 shadow-none" />
              </Col>
              <Col lg={6}>
                <div className="dbe-feature-body">
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <span className="dbe-kicker">Featured project</span>
                    <ProjectStatusPill status={FLAGSHIP.status} />
                  </div>
                  <h2>{FLAGSHIP.headline}</h2>
                  <p>{FLAGSHIP.summary}</p>
                  <dl className="dbe-feature-specs">
                    <div>
                      <dt>Location</dt>
                      <dd>Shivni, Beed, Maharashtra</dd>
                    </div>
                    <div>
                      <dt>Feedstock</dt>
                      <dd>Napier grass / multi-feedstock</dd>
                    </div>
                    <div>
                      <dt>Digester</dt>
                      <dd>1 × 10,000 m³ mesophilic CSTR</dd>
                    </div>
                    <div>
                      <dt>Raw biogas</dt>
                      <dd>11,900–13,200 Nm³/day</dd>
                    </div>
                    <div>
                      <dt>CBG output</dt>
                      <dd>Up to 5,000 kg/day</dd>
                    </div>
                    <div>
                      <dt>By-products</dt>
                      <dd>FOM &amp; LFOM</dd>
                    </div>
                  </dl>
                  <div className="dbe-actions">
                    <Link to={`/projects/${FLAGSHIP.slug}`} className="dbe-btn dbe-btn-primary">
                      Explore the project <ArrowRight size={17} />
                    </Link>
                    <Link to="/technology" className="dbe-btn dbe-btn-outline">
                      See the process <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* 6. How biogas works */}
      <section className="dbe-section">
        <Container>
          <SectionHeading
            center
            eyebrow="The basics"
            title="How biogas works"
            sub="Biogas is produced when microorganisms break down organic matter without oxygen. Upgraded and compressed, it becomes a renewable fuel."
          />
          <Row className="g-4 dbe-how">
            {HOW_BIOGAS.map((h, i) => (
              <Col sm={6} lg={3} key={h.title}>
                <div className="dbe-how-step dbe-reveal dbe-rv-skew" style={stagger(i)}>
                  <span className="dbe-how-icon">
                    <h.icon size={26} />
                  </span>
                  <span className="dbe-how-num">Step {i + 1}</span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="dbe-gasbars dbe-reveal" style={stagger(2)}>
            <h3 className="dbe-gasbars-title">Methane content, before and after upgrading</h3>
            {GAS_BARS.map((b) => (
              <div className={`dbe-gasbar dbe-gasbar-${b.tone}`} key={b.label}>
                <span className="dbe-gasbar-label">{b.label}</span>
                <span className="dbe-gasbar-track">
                  <span className="dbe-gasbar-fill" style={{ "--w": `${b.value}%` }}>
                    <b>{b.range}</b>
                  </span>
                </span>
              </div>
            ))}
            <p className="dbe-gasbars-note">Flagship design values: raw biogas 55–60% CH₄; CBG at least 98% CH₄.</p>
          </div>
        </Container>
      </section>

      {/* 7. Napier grass to CBG process */}
      <section className="dbe-section dbe-section-alt" id="process">
        <Container>
          <SectionHeading
            center
            eyebrow="Napier grass to CBG"
            title={
              <>
                From grass to <em>compressed biogas</em> in ten stages
              </>
            }
            sub="The integrated process configuration of our flagship plant. Select any stage to see what happens there."
          />
          <div className="dbe-reveal dbe-rv-zoom">
            <ProcessFlow />
          </div>
          <div className="text-center mt-4 dbe-reveal">
            <Link to="/technology" className="dbe-btn dbe-btn-outline">
              Technology &amp; process in detail <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>

      {/* 8. Feedstock & industries */}
      <section className="dbe-section">
        <Container>
          <SectionHeading
            eyebrow="Feedstock & applications"
            title="Industries with biogas potential"
            sub="Wherever organic material is grown, processed or discarded, there is a potential biogas feedstock."
          />
        </Container>
        <div className="dbe-reveal">
          <Marquee
            items={INDUSTRIES}
            renderItem={(ind, hidden) => (
              <Link key={ind.key} to={`/industries#${ind.key}`} className="dbe-chip" tabIndex={hidden ? -1 : undefined}>
                <Icon name={ind.icon} />
                <span>
                  {ind.title}
                  <small>{ind.feedstock.slice(0, 2).join(" · ")}</small>
                </span>
              </Link>
            )}
          />
        </div>
        <Container>
          <div className="text-center mt-4 dbe-reveal">
            <Link to="/industries" className="dbe-link-arrow">
              Explore industries we serve <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      {/* 9. Engineering capabilities */}
      <section className="dbe-section dbe-section-alt">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5}>
              <SectionHeading
                eyebrow="Engineering & technology"
                title="Capabilities across the biogas value chain"
                sub="We integrate process design, partner technologies and operations into one plant. Specialised equipment — upgrading, compression and filling — is supplied by technology partners."
              />
              <div className="dbe-reveal" style={stagger(3)}>
                <Photo photo="upgrading" ratio="16 / 10" />
              </div>
            </Col>
            <Col lg={7}>
              <Row className="g-3">
                {CAPABILITIES.map((c, i) => (
                  <Col sm={6} key={c.title}>
                    <div {...glow} className="dbe-card dbe-card-hover dbe-cap dbe-reveal dbe-rv-right" style={stagger(i)}>
                      <span className={`dbe-icon${i % 2 ? " dbe-icon-earth" : ""}`}>
                        <c.icon size={22} />
                      </span>
                      <h3>{c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 10. Digestate value chain */}
      <section className="dbe-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="order-lg-2">
              <SectionHeading
                eyebrow="Digestate value chain"
                title={
                  <>
                    Nothing wasted: <em>organic manure</em> from digestate
                  </>
                }
                sub="After digestion, the remaining material is separated into Fermented Organic Manure (FOM) and Liquid Fermented Organic Manure (LFOM)."
              />
              <ul className="dbe-loop dbe-reveal" style={stagger(3)}>
                <li>
                  <b>FOM</b> — the solid fraction, conditioned as an organic soil amendment.
                </li>
                <li>
                  <b>LFOM</b> — the liquid fraction, partly recirculated to slurry preparation.
                </li>
                <li>
                  <b>Back to the farm</b> — manure can return to the fields that grow the Napier grass.
                </li>
              </ul>
              <p className="dbe-small-note dbe-reveal">{FLAGSHIP.byproductNote}</p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="dbe-eq-frame-wrap dbe-reveal dbe-rv-left">
                <SeparationDiagram />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 11. Methodology */}
      <section className="dbe-section dbe-section-dark">
        <span className="dbe-grid-bg" />
        <Container className="position-relative">
          <SectionHeading
            center
            eyebrow="Project development"
            title="Our project development methodology"
            sub="A structured path from opportunity to operating plant."
          />
          <ol className="dbe-method">
            {METHOD.map((m, i) => (
              <li key={m.title} className="dbe-reveal dbe-rv-zoom" style={stagger(i)}>
                <span className="dbe-method-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="dbe-method-icon">
                  <m.icon size={22} />
                </span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 12. Why choose us */}
      <section className="dbe-section dbe-section-warm">
        <Container>
          <SectionHeading center eyebrow="Why Deva Bio Engineering" title="Why work with us" />
          <Row className="g-4">
            {WHY.map((w, i) => (
              <Col md={6} lg={4} key={w.title}>
                <div className="dbe-why dbe-reveal dbe-rv-tilt" style={stagger(i % 3)}>
                  <BadgeCheck size={24} aria-hidden="true" />
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 13. FAQ */}
      <section className="dbe-section">
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions"
                sub="Common questions about compressed biogas, Napier grass feedstock and our flagship project."
              />
              <Link to="/contact" className="dbe-btn dbe-btn-primary dbe-reveal">
                Ask us a question <ArrowRight size={17} />
              </Link>
            </Col>
            <Col lg={8}>
              <Faq items={FAQS} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 14. CTA */}
      <CtaBand />
    </>
  );
}

export default Home;
