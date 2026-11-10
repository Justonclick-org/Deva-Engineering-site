<!--
  Deva Bio Engineering Private Limited — Corporate Website
  Author: Justonclick Team (https://justonclick.in) · Copyright (c) Justonclick. All rights reserved.
-->

# Implementation plan & architecture

Website for **Deva Bio Engineering Private Limited**, designed and developed by the **Justonclick Team** ([justonclick.in](https://justonclick.in)).

## 1. Repository inspection (Phase 1)

- The `Justonclick-org/Deva-Engineering-site` repository was **empty** (no commits locally or on GitHub). There was no existing site, assets or deployment to preserve.
- The site was therefore built on the **same stack and deployment model as the Justonclick website**, so the team can maintain both the same way:
  Create React App 5 · React 19 · React Router 7 · Bootstrap 5 / Reactstrap · lucide-react icons · Puppeteer prerender · `gh-pages` deploy.
- The motion system (scroll reveals with per-section variants, cursor-following card glow, button shine sweep, pulsing eyebrows, floating hero blobs, gradient text, marquee) was adapted from the Justonclick website and re-themed.
- The DPR file was not present on disk; the technical figures come from the DPR data supplied in the project brief.

## 2. Design references (Phase 2)

Patterns taken as inspiration only (no code, copy, images or branding reused):

| Reference | Pattern adopted |
|-----------|-----------------|
| GPS Renewables | Full-bleed editorial hero over plant photography; dark/light section rhythm; project cards with status |
| Praj (CBG) | Stage-by-stage process communication; spec-led technical copy |
| Thermax (Bio-energy) | Engineering capability grid; corporate top bar with contact details |
| GRG Bioenergy | Multiple enquiry routes: CTA bands, WhatsApp, structured project enquiry form |

## 3. Sitemap (Phase 3)

```
/                                   Home (15 sections)
/about                              About Us
/solutions                          Solutions overview (with delivery-status legend)
/solutions/:slug                    9 solution pages
/technology                         Technology & Process (interactive flow, block diagram, equipment diagrams)
/projects                           Project portfolio
/projects/5-tpd-cbg-plant-shivni-beed   Flagship project
/industries                         Industries We Serve (8 sectors)
/sustainability                     Sustainability
/contact                            Contact & project enquiry
/image-credits                      Photo attribution (CC licences)
*                                   404 (noindex)
```

## 4. Component architecture

```
src/
  config/site.js            ← single source of company, contact, social, developer & form settings
  data/                     ← all content as data (scalable)
    flagship.js               project specs, purification, by-products, implementation
    process.js                gas pathway, digestate pathway, 14 DPR steps
    solutions.js              9 solutions with delivery status
    industries.js             8 industries with feedstocks
    projects.js               portfolio (append to add projects)
    faqs.js, images.js        FAQs; photo registry with licence attribution
  components/
    brand/Logo.js             logo mark + wordmark
    layout/                   Navbar (top bar, mega menu, mobile drawer), Footer, Layout
    diagrams/                 ProcessFlow (interactive), PlantSchematic (SVG), EquipmentDiagrams (SVG)
    ui.js                     SectionHeading, PageHero, Photo, StatStrip, SpecTable, Faq, CtaBand, Marquee…
    Seo.js                    title, meta, canonical, OG/Twitter, JSON-LD
  hooks/                    useScrollReveal, useCardGlow, useCountUp
  pages/                    one file per route
  styles/                   global tokens & motion, shared components
scripts/                    prerender + sitemap/robots, 404 fallback, brand asset generator
```

## 5. Design system (Phase 4)

- **Colours:** deep forest `#0f4a33`, emerald `#13945f` / `#22c07c`, mint `#c8ecda`, earth `#b9853f`, charcoal ink `#14211c`, white.
- **Type:** Sora (headings), Inter (body).
- **Logo:** hexagon (gas/molecular motif) containing a biomass drop-leaf with a flame at its heart, plus rising gas bubbles. Files: `public/favicon.svg`, `public/logo.svg`, `public/logo.png`, icons, `og-image.jpg` (regenerate with `npm run brand:assets`).
- **Motion:** reveal-on-scroll variants, card glow, shine buttons, animated gas pipes, rising bubbles, count-up stats; all honour `prefers-reduced-motion`.

## 6. Content rules applied (Part 9 of the brief)

- Flagship project is always labelled **Proposed · Under Development**.
- Only technical design values are shown; cost, subsidy, bank finance and CBG price assumptions are excluded.
- No Gat number is published (DPR discrepancy).
- Every photo is labelled **Representative image** and credited.
- Solutions carry an honest delivery label (current focus / with technology partners / planned).
- No invented history, team, certifications, clients or completed projects.
- See `docs/COMPANY-CONFIRMATIONS.md` for open items.

## 7. SEO (Phase 8)

Unique title/description per page, canonical URLs, Open Graph/Twitter cards, JSON-LD (Organization, WebSite, WebPage, BreadcrumbList, Service, Project, HowTo, FAQPage, ItemList), semantic HTML, alt text, internal linking, prerendered HTML for every route, `sitemap.xml` and `robots.txt` generated at build time.

## 8. Verification performed (Phases 9–10)

- Production build compiles with no warnings; 19 routes prerendered with zero browser console errors.
- Desktop (1440px) and mobile (390px) screenshots reviewed; no horizontal overflow.
- Automated UI tests: form validation, endpoint submission payload, reset, honeypot, email fallback, WhatsApp hand-off, process flow, FAQ, mega menu, mobile drawer, 404, and every internal link resolving.
