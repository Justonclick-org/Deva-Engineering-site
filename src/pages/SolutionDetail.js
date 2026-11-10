/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/SolutionDetail.js — individual solution page
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { CtaBand, Icon, Notice, PageHero, Photo, SolutionStatusPill } from "../components/ui";
import ProcessFlow from "../components/diagrams/ProcessFlow";
import { COMPANY, SITE, waLink } from "../config/site";
import { FLAGSHIP } from "../data/flagship";
import { SOLUTIONS, SOLUTION_STATUS, getSolution } from "../data/solutions";
import { stagger } from "../hooks/useScrollReveal";
import NotFound from "./NotFound";
import "./pages.css";

function SolutionDetail() {
  const { slug } = useParams();
  const s = getSolution(slug);
  if (!s) return <NotFound />;

  const path = `/solutions/${s.slug}`;
  const status = SOLUTION_STATUS[s.status];

  return (
    <>
      <Seo
        title={`${s.title} | Deva Bio Engineering`}
        description={`${s.summary} ${status.note}`}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: "Solutions", path: "/solutions" },
            { name: s.title, path },
          ]),
          {
            "@type": "Service",
            name: s.title,
            description: s.summary,
            serviceType: s.title,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: "India" },
            url: `${SITE.url}${path}`,
          },
        ]}
      />
      <PageHero
        eyebrow="Solution"
        title={s.title}
        lead={s.summary}
        photo={s.photo}
        crumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: s.short, path },
        ]}
      >
        <div className="mt-3">
          <SolutionStatusPill status={s.status} />
        </div>
      </PageHero>

      <section className="dbe-section">
        <Container>
          <Row className="g-5">
            <Col lg={8}>
              <div className="dbe-prose dbe-reveal">
                {s.intro.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <Notice className="mt-4 dbe-reveal">
                <strong>{status.label}.</strong> {status.note}
              </Notice>

              <h2 className="dbe-heading mt-5 dbe-reveal" style={{ fontSize: "1.6rem" }}>
                Scope of the solution
              </h2>
              <ul className="dbe-scope-grid mt-3">
                {s.scope.map((item, i) => (
                  <li key={item} className="dbe-reveal" style={stagger(i, 60)}>
                    <CheckCircle2 size={18} aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 dbe-reveal">
                <Photo photo={s.photo} ratio="16 / 9" />
              </div>

              {s.flagship && (
                <div className="mt-5">
                  <h2 className="dbe-heading dbe-reveal" style={{ fontSize: "1.6rem" }}>
                    Applied in our flagship project
                  </h2>
                  <p className="dbe-sub dbe-reveal">
                    This solution is part of the {FLAGSHIP.title} at Shivni, Beed. The process below shows how it fits
                    into the complete Napier-grass-to-CBG plant.
                  </p>
                  <div className="dbe-reveal mt-4">
                    <ProcessFlow showDigestate={s.slug === "digestate-organic-manure"} compact />
                  </div>
                  <Link to={`/projects/${FLAGSHIP.slug}`} className="dbe-link-arrow mt-3 dbe-reveal">
                    View the 5 TPD project profile <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </Col>

            <Col lg={4}>
              <aside className="dbe-sol-aside">
                <div className="dbe-aside-card dbe-reveal dbe-rv-right">
                  <h2>Key parameters</h2>
                  <dl className="dbe-kv">
                    {s.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="dbe-aside-card dbe-aside-cta dbe-reveal dbe-rv-right" style={stagger(1)}>
                  <h2>Discuss this solution</h2>
                  <p>
                    Share your feedstock, location and target capacity with {COMPANY.brandName}.
                  </p>
                  <div className="d-grid gap-2">
                    <Link to={`/contact?solution=${s.slug}`} className="dbe-btn dbe-btn-primary">
                      Send an enquiry <ArrowRight size={16} />
                    </Link>
                    <a
                      href={waLink(`Hello Deva Bio Engineering, I would like to discuss ${s.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dbe-btn dbe-btn-glass"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
                <nav className="dbe-aside-card dbe-reveal dbe-rv-right" style={stagger(2)} aria-label="All solutions">
                  <h2>All solutions</h2>
                  <ul className="dbe-aside-list">
                    {SOLUTIONS.map((x) => (
                      <li key={x.slug}>
                        <Link to={`/solutions/${x.slug}`} aria-current={x.slug === s.slug ? "page" : undefined}>
                          <Icon name={x.icon} size={16} /> {x.short}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

export default SolutionDetail;
