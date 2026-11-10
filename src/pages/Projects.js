/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/Projects.js — project portfolio
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ArrowRight, MapPin, PlusCircle } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { CtaBand, PageHero, Photo, ProjectStatusPill, SectionHeading } from "../components/ui";
import { PROJECTS } from "../data/projects";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";

function Projects() {
  return (
    <>
      <Seo
        title="Biogas & CBG Projects | Deva Bio Engineering"
        description="Project portfolio of Deva Bio Engineering, featuring the proposed 5 TPD Napier grass compressed biogas plant at Shivni, Beed, Maharashtra."
        path="/projects"
        schema={[breadcrumbSchema([{ name: "Projects", path: "/projects" }])]}
      />
      <PageHero
        eyebrow="Projects"
        title="Our biogas and CBG projects"
        lead="Each project is shown with its actual development status. Our portfolio begins with the proposed 5 TPD compressed biogas plant at Shivni, Beed."
        photo="plantAerial"
        crumbs={[{ name: "Projects", path: "/projects" }]}
      />

      <section className="dbe-section">
        <Container>
          <SectionHeading eyebrow="Portfolio" title="Projects in development" />
          <Row className="g-4">
            {PROJECTS.map((p, i) => (
              <Col lg={8} key={p.slug}>
                <Link to={`/projects/${p.slug}`} className="dbe-project-card dbe-reveal dbe-rv-left" style={stagger(i)}>
                  <Row className="g-0 h-100">
                    <Col md={6}>
                      <Photo photo={p.photo} ratio="auto" className="h-100" caption={p.representative} linkCredit={false} />
                    </Col>
                    <Col md={6}>
                      <div className="dbe-project-body">
                        <div>
                          <ProjectStatusPill status={p.status} />
                        </div>
                        <h2>{p.title}</h2>
                        <span className="dbe-project-loc">
                          <MapPin size={14} /> {p.location}
                        </span>
                        <dl className="dbe-kv">
                          <div>
                            <dt>Capacity</dt>
                            <dd>{p.capacity}</dd>
                          </div>
                          <div>
                            <dt>Feedstock</dt>
                            <dd>{p.feedstock}</dd>
                          </div>
                          <div>
                            <dt>Technology</dt>
                            <dd>{p.technology}</dd>
                          </div>
                        </dl>
                        <span className="dbe-link-arrow mt-auto">
                          View project profile <ArrowRight size={16} />
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Link>
              </Col>
            ))}
            <Col lg={4}>
              <div className="dbe-project-empty dbe-reveal dbe-rv-right" style={stagger(1)}>
                <PlusCircle size={36} aria-hidden="true" />
                <h3>Future projects</h3>
                <p>
                  New biogas and CBG projects will be added here as they reach development milestones.
                </p>
                <Link to="/contact" className="dbe-link-arrow">
                  Propose a project <ArrowRight size={16} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand
        title="Have feedstock and a site in mind?"
        text="We're interested in hearing from landowners, farmer groups, agro-industries and organisations with organic feedstock who want to explore a biogas or CBG project."
      />
    </>
  );
}

export default Projects;
