/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/data/flagship.js — 5 TPD CBG project technical profile (from the DPR)
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Source: Detailed Project Report (DPR) and supplier techno-commercial offer.
 * Only technical design parameters are published. Financial projections, project
 * cost, subsidy, bank financing and CBG selling-price assumptions are deliberately
 * excluded from public pages (see docs/COMPANY-CONFIRMATIONS.md).
 */

export const PROJECT_STATUS = {
  proposed: { label: "Proposed · Under Development", tone: "amber" },
  construction: { label: "Under Construction", tone: "emerald" },
  commissioned: { label: "Commissioned", tone: "forest" },
};

export const FLAGSHIP = {
  slug: "5-tpd-cbg-plant-shivni-beed",
  title: "5 TPD Compressed Biogas Project",
  headline: "5 TPD Compressed Biogas Project – From Napier Grass to Renewable Energy",
  status: "proposed",
  location: "Shivni, Taluka Beed, District Beed, Maharashtra",
  summary:
    "A proposed integrated compressed biogas plant designed to convert Napier grass and other organic feedstock into up to 5,000 kg/day of CBG, with fermented organic manure recovered from the digestate.",
  disclaimer:
    "Proposed project. Technical figures are design values from the Detailed Project Report and the supplier's techno-commercial offer, and remain subject to final engineering, approvals and contractual confirmation.",

  /** Headline numbers for stat strips. `value` is numeric so it can animate. */
  keyFigures: [
    { value: 5000, suffix: "", unit: "kg/day", label: "Rated CBG capacity (up to)" },
    { value: 115, suffix: "", unit: "TPD", label: "Design feedstock at 25% TS" },
    { value: 10000, suffix: "", unit: "m³", label: "Single CSTR digester" },
    { value: 98, prefix: "≥", unit: "% CH₄", label: "CBG methane purity" },
    { value: 250, prefix: "up to ", unit: "bar", label: "Compression design" },
    { value: 36, prefix: "~", unit: "days", label: "Hydraulic retention time" },
  ],

  /** Full specification table — the DPR's technical configuration. */
  specs: [
    { group: "Project", param: "Developer", value: "Deva Bio Engineering Private Limited" },
    { group: "Project", param: "Proposed location", value: "Shivni, Taluka Beed, District Beed, Maharashtra" },
    { group: "Project", param: "Project status", value: "Proposed / under development" },
    { group: "Project", param: "Operating basis", value: "330 days per year" },
    { group: "Feedstock", param: "Primary feedstock", value: "Napier grass / multi-feedstock" },
    { group: "Feedstock", param: "Design feedstock input", value: "115 TPD at 25% total solids" },
    { group: "Digestion", param: "Digester", value: "1 × 10,000 m³ CSTR (continuously stirred tank reactor)" },
    { group: "Digestion", param: "Process temperature regime", value: "Mesophilic" },
    { group: "Digestion", param: "Hydraulic retention time", value: "Approximately 36 days" },
    { group: "Biogas", param: "Raw biogas production (design)", value: "11,900 – 13,200 Nm³/day" },
    { group: "Biogas", param: "Raw biogas methane content", value: "55 – 60%" },
    { group: "CBG", param: "Rated CBG output", value: "Up to 5,000 kg/day" },
    { group: "CBG", param: "CBG methane purity", value: "At least 98%" },
    { group: "CBG", param: "Compression design pressure", value: "Up to 250 bar" },
    { group: "CBG", param: "Dispatch", value: "Odourised CBG via cascade filling" },
    { group: "By-products", param: "Digestate handling", value: "Solid–liquid separation into FOM and LFOM" },
    { group: "Execution", param: "Indicative equipment delivery", value: "36 – 42 weeks (supplier estimate, subject to conditions)" },
  ],

  /** Gas purification & control configuration, per the DPR. */
  purification: [
    {
      key: "h2s",
      title: "H₂S removal",
      tech: "Water washing / scrubbing with iron oxyhydroxide media",
      text: "Hydrogen sulphide is removed early in the gas train to protect downstream equipment from corrosion and to meet CBG quality limits.",
    },
    {
      key: "co2",
      title: "CO₂ removal & methane upgrading",
      tech: "Chilled-water scrubbing or two-stage membrane separation",
      text: "Carbon dioxide is separated from the gas stream to raise methane content from 55–60% in raw biogas to at least 98% in the product gas.",
    },
    {
      key: "dry",
      title: "Gas drying",
      tech: "Desiccant dryer with heatless regeneration",
      text: "Moisture is removed so the gas meets dew-point requirements before high-pressure compression and storage.",
    },
    {
      key: "comp",
      title: "High-pressure compression",
      tech: "Reciprocating compressor, design up to 250 bar",
      text: "Upgraded gas is compressed in stages for cascade storage and dispatch as compressed biogas.",
    },
    {
      key: "control",
      title: "Automation & gas quality",
      tech: "PLC / SCADA with online gas quality monitoring",
      text: "Process parameters and product gas composition are monitored continuously for stable, safe and documented operation.",
    },
  ],

  byproducts: [
    {
      key: "fom",
      title: "Fermented Organic Manure (FOM)",
      text: "The solid fraction separated from digestate, suitable for further conditioning as an organic soil amendment.",
    },
    {
      key: "lfom",
      title: "Liquid Fermented Organic Manure (LFOM)",
      text: "The liquid fraction, which can be partly recirculated for slurry preparation and partly used as a liquid organic nutrient.",
    },
  ],
  byproductNote:
    "Actual FOM and LFOM quantities and their marketable quality depend on feedstock, plant operation and final product specifications, including applicable fertiliser regulations.",

  implementation: [
    { title: "Feedstock planning", text: "Napier grass cultivation and supply arrangements, with multi-feedstock flexibility to manage seasonal variation." },
    { title: "Engineering & approvals", text: "Final process engineering, plot layout, statutory approvals and safety clearances for gas handling and storage." },
    { title: "Technology & equipment", text: "Digester, gas upgrading, compression and filling systems delivered through specialist technology suppliers." },
    { title: "Construction & erection", text: "Civil works, digester construction, mechanical erection, piping and electrical installation." },
    { title: "Commissioning", text: "Biological start-up of the digester, gas-train commissioning and performance verification against design values." },
    { title: "Operations", text: "Steady-state operation with feedstock logistics, gas quality monitoring, CBG dispatch and organic manure handling." },
  ],
};
