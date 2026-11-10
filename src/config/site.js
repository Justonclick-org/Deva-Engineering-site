/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/config/site.js — central brand & company configuration
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Every company detail used by the site comes from here. Change a value once and
 * it updates the header, footer, contact page, SEO tags and structured data.
 * Values marked `confirmed: false` are waiting on company confirmation
 * (see docs/COMPANY-CONFIRMATIONS.md) and are hidden or labelled on the site.
 */

export const SITE = {
  /** Public domain, set once in .env as REACT_APP_SITE_URL (also used by index.html and the prerender/sitemap). */
  url: (process.env.REACT_APP_SITE_URL || "https://www.devabioengineering.com").replace(/\/$/, ""),
  /** Domain is a placeholder until the company confirms its registered domain. */
  urlConfirmed: false,
  locale: "en_IN",
  language: "en-IN",
};

export const COMPANY = {
  legalName: "Deva Bio Engineering Private Limited",
  brandName: "Deva Bio Engineering",
  shortName: "Deva Bio",
  tagline: "Engineering Sustainable Energy Through Biogas",
  description:
    "Deva Bio Engineering Private Limited is a Maharashtra-based biogas engineering and renewable energy company developing compressed biogas (CBG) projects from Napier grass, agricultural biomass and organic feedstock.",
  promoter: { name: "Mr. Devidas P. Sanap", role: "Promoter" },
  industries: [
    "Biogas Engineering",
    "Compressed Biogas (CBG)",
    "Bio-CNG Solutions",
    "Renewable Energy",
    "Organic Waste-to-Energy",
    "Agricultural Biomass Utilisation",
  ],
  logo: "/logo.png",
  logoSvg: "/logo.svg",
};

export const CONTACT = {
  phoneDisplay: "+91 9834135737",
  phoneHref: "tel:+919834135737",
  /** Digits only, with country code, for wa.me links. Same number as phone per the DPR — confirm it is on WhatsApp. */
  whatsapp: "919834135737",
  whatsappConfirmed: false,
  whatsappMessage:
    "Hello Deva Bio Engineering, I would like to discuss a biogas / CBG project.",
  email: "devabioengg@gmail.com",
  /** Registered / corporate office address — not yet confirmed, so it is not published. */
  office: {
    confirmed: false,
    lines: [],
    locality: "",
    region: "Maharashtra",
    postalCode: "",
  },
  /** Flagship project location — village level only (survey/Gat numbers differ across DPR sections). */
  projectLocation: {
    village: "Shivni",
    taluka: "Beed",
    district: "Beed",
    state: "Maharashtra",
    country: "India",
    display: "Shivni, Taluka Beed, District Beed, Maharashtra",
    mapQuery: "Shivni, Beed, Maharashtra, India",
  },
  /** Show the embedded map only after the office address is verified. */
  showMapEmbed: false,
  responseNote: "We aim to respond to project enquiries within two working days.",
};

/** Add profile URLs once the company creates them; empty entries are not rendered. */
export const SOCIAL = [
  { label: "LinkedIn", url: "" },
  { label: "YouTube", url: "" },
  { label: "Facebook", url: "" },
  { label: "Instagram", url: "" },
];

/** Website credit, shown in the footer of every page. */
export const DEVELOPER = {
  name: "Justonclick Team",
  company: "Justonclick",
  url: "https://justonclick.in",
  display: "justonclick.in",
};

/**
 * Enquiry form submission.
 * Set REACT_APP_ENQUIRY_ENDPOINT (and optionally REACT_APP_ENQUIRY_ACCESS_KEY) in .env
 * to post enquiries as JSON to Web3Forms, Formspree, a Google Apps Script web app or your
 * own API. Without an endpoint the form falls back to opening a pre-filled email.
 */
export const ENQUIRY = {
  endpoint: process.env.REACT_APP_ENQUIRY_ENDPOINT || "",
  accessKey: process.env.REACT_APP_ENQUIRY_ACCESS_KEY || "",
  subjectPrefix: "Website enquiry",
};

export const waLink = (text = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

export const mapLink = (query = CONTACT.projectLocation.mapQuery) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const activeSocial = () => SOCIAL.filter((s) => s.url);
