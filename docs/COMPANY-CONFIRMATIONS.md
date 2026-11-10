<!--
  Deva Bio Engineering Private Limited — Corporate Website
  Author: Justonclick Team (https://justonclick.in) · Copyright (c) Justonclick. All rights reserved.
-->

# Items requiring company confirmation

Prepared by the Justonclick Team for **Deva Bio Engineering Private Limited**.
Please review each item and reply with a confirmation or correction. Until confirmed, the website handles each item as described in the last column.

## A. Discrepancies found in the DPR

| # | Item | What the DPR says | How the website handles it now |
|---|------|-------------------|--------------------------------|
| A1 | Project land / survey number | Gat No. 194, 218 in one section; Gat No. 107 in the document headers | No Gat number is published. Location is shown at village level only: *Shivni, Taluka Beed, District Beed*. |
| A2 | Daily feedstock | Technical design: **115 TPD at 25% TS**. Financial model: **100 MT/day** at full load | The technical design figure (115 TPD @ 25% TS) is shown and labelled as a design value. The 100 MT/day financial figure is not published. |
| A3 | Project cost | Supplier offer **₹30.92 crore** excl. GST; revised financial DPR uses **₹31 crore** | No project cost is published. |
| A4 | Project status | Proposed project | Shown everywhere as **"Proposed · Under Development"**. Never labelled commissioned or operational. |
| A5 | Government capital assistance | Up to ₹10 crore, conditional | Not published. Must never be presented as approved or sanctioned. |
| A6 | CBG selling price | ₹98/kg realisation is a financial working assumption | Not published. |
| A7 | Technical performance | Based on the supplier's techno-commercial offer | All figures carry a "design value, subject to final engineering and contractual confirmation" note. |

## B. Company details to confirm

| # | Item | Current website value | Action needed |
|---|------|----------------------|---------------|
| B1 | Website domain | `https://www.devabioengineering.com` (**placeholder**) | Confirm the registered domain. Update `REACT_APP_SITE_URL` in `.env`, then add `public/CNAME` if hosting on GitHub Pages. |
| B2 | Registered / office address | Not published | Provide the address. Set `CONTACT.office` in `src/config/site.js` and `confirmed: true`. Then set `showMapEmbed: true` if a map is wanted. |
| B3 | Phone | +91 9834135737 (from DPR) | Confirm this is the public business number. |
| B4 | WhatsApp | Same number as phone | Confirm the number is active on WhatsApp (Business). |
| B5 | Email | devabioengg@gmail.com (from DPR) | Confirm. A domain email (e.g. info@yourdomain) is recommended once the domain is live. |
| B6 | Promoter name & title | Mr. Devidas P. Sanap, Promoter | Confirm spelling and preferred title (e.g. Director / Managing Director). |
| B7 | CIN, GSTIN, incorporation date | Not published | Optional — provide if you want them in the footer / About page. |
| B8 | Social media | None shown | Provide LinkedIn / YouTube / Facebook / Instagram URLs (`SOCIAL` in `src/config/site.js`). |
| B9 | Logo | New logo created by Justonclick | Approve the logo, or request changes. |

## C. Service availability (solutions page labels)

Each solution is labelled with how it is delivered. Please confirm or change:

| Solution | Current label |
|----------|---------------|
| Compressed Biogas (CBG) Plants | Current focus |
| Napier Grass-Based Biogas Solutions | Current focus |
| Multi-Feedstock Biogas Solutions | Current focus |
| Digestate & Organic Manure Management | Current focus |
| Biogas Upgrading & Purification | With technology partners |
| Industrial Biogas Solutions | Planned service |
| Agricultural Biogas Plants | Planned service |
| Organic Waste-to-Energy | Planned service |
| Plant Operations & Maintenance | Planned service |

Change a label in `src/data/solutions.js` (`status: "focus" | "partner" | "planned"`).

## D. Content we could not include without your data

| # | Item | Notes |
|---|------|-------|
| D1 | FOM / LFOM indicative quantities | The DPR has indicative figures, but the DPR file was not available to us while building. The site describes the by-products qualitatively. Share the figures if you want them shown, with the "subject to operation" caveat. |
| D2 | Technology supplier name | Not published. Name the supplier only with their written consent. |
| D3 | Real site photographs | All photos are representative Creative Commons images, credited on `/image-credits`. Replace with your own site photographs as the project progresses (`src/data/images.js`). |
| D4 | Company history, team, certifications | Not published. Nothing has been invented. Provide verified details to add them. |
| D5 | Enquiry form destination | The form currently opens a pre-filled email. Choose a form service (Web3Forms, Formspree, Google Apps Script) or API and set `REACT_APP_ENQUIRY_ENDPOINT`. |
| D6 | Analytics | Provide a Google Tag Manager ID if you want analytics (`REACT_APP_GTM_ID`). |
