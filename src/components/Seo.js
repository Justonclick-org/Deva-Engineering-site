/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/components/Seo.js — per-page title, meta, canonical, Open Graph & JSON-LD
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import { useEffect } from "react";
import { COMPANY, CONTACT, SITE, activeSocial } from "../config/site";

const DEFAULT_IMAGE = "/og-image.jpg";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(data) {
  let el = document.getElementById("page-jsonld");
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "page-jsonld";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Organization schema shared by every page. */
export const organizationSchema = () => ({
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: COMPANY.legalName,
  alternateName: COMPANY.brandName,
  url: `${SITE.url}/`,
  logo: `${SITE.url}${COMPANY.logo}`,
  description: COMPANY.description,
  slogan: COMPANY.tagline,
  email: CONTACT.email,
  telephone: CONTACT.phoneHref.replace("tel:", ""),
  founder: { "@type": "Person", name: COMPANY.promoter.name.replace(/^Mr\.\s*/, "") },
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressRegion: CONTACT.office.region,
    addressCountry: "IN",
  },
  knowsAbout: COMPANY.industries,
  sameAs: activeSocial().map((s) => s.url),
});

/** Build a BreadcrumbList from [{name, path}] (Home is added automatically). */
export const breadcrumbSchema = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE.url}${item.path}`,
  })),
});

function Seo({ title, description, path = "/", image, type = "website", schema, noindex }) {
  // Serialise so a new array literal on each render doesn't re-run the effect.
  const schemaKey = JSON.stringify(schema || []);

  useEffect(() => {
    const extra = JSON.parse(schemaKey);
    const url = SITE.url + (path === "/" ? "/" : path);
    const img = SITE.url + (image || DEFAULT_IMAGE);

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setLink("canonical", url);

    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema(),
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          inLanguage: SITE.language,
          isPartOf: { "@id": `${SITE.url}/#website` },
          about: { "@id": `${SITE.url}/#organization` },
        },
        ...extra,
      ],
    });
  }, [title, description, path, image, type, schemaKey, noindex]);

  return null;
}

export default Seo;
