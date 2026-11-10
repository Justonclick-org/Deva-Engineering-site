<!--
  Deva Bio Engineering Private Limited — Corporate Website
  Author: Justonclick Team (https://justonclick.in) · Copyright (c) Justonclick. All rights reserved.
-->

# Deva Bio Engineering — Corporate Website

Corporate website for **Deva Bio Engineering Private Limited** — biogas engineering, compressed biogas (CBG) and renewable energy, featuring the proposed 5 TPD Napier grass CBG project at Shivni, Beed, Maharashtra.

**Designed & developed by the [Justonclick Team](https://justonclick.in).** All code © Justonclick. All rights reserved.

## Quick start

```bash
npm install
npm start            # dev server on http://localhost:3000
npm run build        # production build + prerender + sitemap.xml + robots.txt
```

`npm run build` uses Puppeteer to prerender every page. If Chrome is missing, run `npx puppeteer browsers install chrome` once. Use `npm run build:spa` to build without prerendering.

## Configuration

| What | Where |
|------|-------|
| Company name, tagline, phone, email, WhatsApp, address, social links, developer credit | `src/config/site.js` |
| Domain, analytics (GTM), enquiry form endpoint | `.env` (override locally in `.env.local`) |
| Flagship project specifications | `src/data/flagship.js` |
| Solutions (and their delivery status) | `src/data/solutions.js` |
| Projects portfolio | `src/data/projects.js` |
| Industries, FAQs, process stages | `src/data/*.js` |
| Photos and their credits | `src/data/images.js` + `src/assets/photos/` |

### Enquiry form

Set `REACT_APP_ENQUIRY_ENDPOINT` in `.env` to receive enquiries as JSON:

- **Web3Forms:** `https://api.web3forms.com/submit` and set `REACT_APP_ENQUIRY_ACCESS_KEY` to your access key.
- **Formspree:** `https://formspree.io/f/<form-id>`.
- **Google Apps Script** web app URL, or your own API.

With no endpoint, the form opens a pre-filled email to the company address. Visitors can always send the same details via WhatsApp.

### Adding a project

Append an object to `PROJECTS` in `src/data/projects.js`. Add a route only if the project needs its own detail page (see `src/App.js`). Use real site photos where possible and set `representative: false` for them.

### Updating the logo

Edit `public/favicon.svg` (and keep `src/components/brand/Logo.js` and `public/logo.svg` in sync), then run `npm run brand:assets` to regenerate the PNG icons, `logo.png` and `og-image.jpg`.

## Deploy (GitHub Pages)

Same flow as the Justonclick website:

1. Confirm the domain, set `REACT_APP_SITE_URL` in `.env` and add `public/CNAME` containing the domain.
2. `npm run deploy` builds and publishes `build/` to the `gh-pages` branch.
3. In GitHub **Settings → Pages**, choose the `gh-pages` branch and set the custom domain.

The build writes `404.html` (app shell) so unknown URLs still load the site's 404 page.

## Documentation

- `docs/IMPLEMENTATION-PLAN.md` — architecture, design system, SEO and verification.
- `docs/COMPANY-CONFIRMATIONS.md` — DPR discrepancies and details the company must confirm before launch.

## Image credits

Photographs are representative Creative Commons images from Wikimedia Commons, credited on the `/image-credits` page. They do not show Deva Bio Engineering installations.
