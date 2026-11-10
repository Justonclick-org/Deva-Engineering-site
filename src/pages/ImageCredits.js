/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/ImageCredits.js — photograph attribution (CC licence compliance)
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { Container } from "reactstrap";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { Notice, PageHero } from "../components/ui";
import { PHOTO_LIST } from "../data/images";
import { COMPANY } from "../config/site";
import "./pages.css";

function ImageCredits() {
  return (
    <>
      <Seo
        title="Image Credits | Deva Bio Engineering"
        description="Attribution and licence information for the representative photographs used on the Deva Bio Engineering website."
        path="/image-credits"
        schema={[breadcrumbSchema([{ name: "Image credits", path: "/image-credits" }])]}
      />
      <PageHero
        eyebrow="Image credits"
        title="Photograph attribution"
        lead="The photographs on this website are representative images of biogas infrastructure, used under Creative Commons licences. They do not show Deva Bio Engineering installations."
        crumbs={[{ name: "Image credits", path: "/image-credits" }]}
      />
      <section className="dbe-section">
        <Container style={{ maxWidth: 920 }}>
          <Notice className="mb-4">
            Technical diagrams and illustrations on this website are original works created for {COMPANY.brandName}.
            Photographs may have been cropped and resized; no other changes were made.
          </Notice>
          <div className="dbe-credits">
            {PHOTO_LIST.map((p) => (
              <article className="dbe-credit" key={p.source}>
                <img src={p.src} alt={p.alt} width={160} height={106} loading="lazy" />
                <div>
                  <h2>{p.subject}</h2>
                  <p>
                    Photo by {p.author}, licensed under{" "}
                    <a href={p.licenseUrl} target="_blank" rel="noopener noreferrer license">
                      {p.license}
                    </a>
                    . Source:{" "}
                    <a href={p.source} target="_blank" rel="noopener noreferrer">
                      Wikimedia Commons
                    </a>
                    .
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default ImageCredits;
