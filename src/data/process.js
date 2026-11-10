/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/data/process.js — Napier-grass-to-CBG process stages (per the DPR)
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */

/** Main gas pathway, in order. `icon` names map to lucide-react icons in ProcessFlow. */
export const GAS_PATH = [
  {
    key: "feedstock",
    short: "Feedstock",
    title: "Feedstock harvesting & receipt",
    icon: "Sprout",
    text: "Napier grass is harvested and brought to the plant, supplemented by other organic feedstock under the multi-feedstock design. The design basis is 115 TPD at 25% total solids.",
    detail: ["Napier grass harvesting", "Multi-feedstock flexibility", "Weighbridge & storage"],
  },
  {
    key: "pretreatment",
    short: "Pre-treatment",
    title: "Chopping, grinding & conveying",
    icon: "Cog",
    text: "Grass is chopped and ground to reduce particle size, increasing the surface area available to microorganisms, then conveyed to slurry preparation.",
    detail: ["Grass chopping", "Grinding / size reduction", "Feedstock conveying"],
  },
  {
    key: "slurry",
    short: "Slurry",
    title: "Slurry preparation",
    icon: "Waves",
    text: "Prepared biomass is mixed with process liquid — including recirculated liquid from digestate separation — to form a pumpable slurry fed to the digester.",
    detail: ["Mixing with process water", "LFOM recirculation", "Controlled feeding"],
  },
  {
    key: "digestion",
    short: "Digestion",
    title: "Mesophilic anaerobic digestion",
    icon: "Cylinder",
    text: "A single 10,000 m³ continuously stirred tank reactor (CSTR) digests the slurry under mesophilic conditions with a hydraulic retention time of approximately 36 days.",
    detail: ["1 × 10,000 m³ CSTR", "Mesophilic regime", "HRT ≈ 36 days"],
  },
  {
    key: "rawgas",
    short: "Raw biogas",
    title: "Raw biogas collection",
    icon: "Cloud",
    text: "Biogas is collected from the digester headspace. Design production is 11,900–13,200 Nm³/day at 55–60% methane, the balance being mainly CO₂ with traces of H₂S and moisture.",
    detail: ["11,900–13,200 Nm³/day", "55–60% CH₄", "Gas collection & handling"],
  },
  {
    key: "h2s",
    short: "H₂S removal",
    title: "Hydrogen sulphide removal",
    icon: "ShieldCheck",
    text: "Water washing / scrubbing and iron oxyhydroxide media remove H₂S, protecting compressors and pipework from corrosion.",
    detail: ["Water washing / scrubbing", "Iron oxyhydroxide media", "Corrosion protection"],
  },
  {
    key: "co2",
    short: "CO₂ upgrading",
    title: "CO₂ removal & methane upgrading",
    icon: "FlaskConical",
    text: "Chilled-water scrubbing or two-stage membrane technology separates CO₂, upgrading the gas to at least 98% methane.",
    detail: ["Chilled-water scrubbing", "or two-stage membranes", "≥ 98% CH₄ product"],
  },
  {
    key: "drying",
    short: "Drying",
    title: "Gas drying",
    icon: "Wind",
    text: "A desiccant dryer with heatless regeneration removes moisture to the dew point required for high-pressure storage.",
    detail: ["Desiccant dryer", "Heatless regeneration", "Dew-point control"],
  },
  {
    key: "compression",
    short: "Compression",
    title: "High-pressure compression & odourisation",
    icon: "Gauge",
    text: "Reciprocating compressors raise the gas to a design pressure of up to 250 bar. The gas is odourised so that any leak can be detected by smell.",
    detail: ["Reciprocating compressor", "Up to 250 bar", "Odourisation"],
  },
  {
    key: "filling",
    short: "CBG filling",
    title: "CBG cascade filling & dispatch",
    icon: "Fuel",
    text: "Compressed biogas is stored and dispatched through cascade filling. PLC/SCADA and online gas analysers monitor quality throughout.",
    detail: ["Cascade filling", "Online gas quality monitoring", "PLC / SCADA"],
  },
];

/** Digestate pathway, branching from digestion. */
export const DIGESTATE_PATH = [
  {
    key: "digestate",
    short: "Digestate",
    title: "Digestate discharge",
    icon: "Cylinder",
    text: "Digested material leaves the CSTR as digestate, containing undigested fibre, nutrients and process water.",
  },
  {
    key: "separation",
    short: "Separation",
    title: "Solid–liquid separation",
    icon: "Layers",
    text: "Digestate is mechanically separated into a solid fraction and a liquid fraction.",
  },
  {
    key: "fom",
    short: "FOM",
    title: "Fermented Organic Manure",
    icon: "Sprout",
    text: "The solid fraction is recovered as Fermented Organic Manure (FOM) for soil application after conditioning.",
  },
  {
    key: "lfom",
    short: "LFOM",
    title: "Liquid Fermented Organic Manure",
    icon: "Droplets",
    text: "The liquid fraction (LFOM) is partly recirculated to slurry preparation and partly available as a liquid organic nutrient.",
  },
];

/** The 14 integrated steps exactly as listed in the DPR. */
export const DPR_STEPS = [
  "Napier grass harvesting and preparation",
  "Grass chopping and grinding",
  "Feedstock conveying",
  "Slurry preparation",
  "Anaerobic digestion through a mesophilic CSTR",
  "Raw biogas collection",
  "H₂S removal",
  "CO₂ removal and methane upgrading",
  "Gas drying",
  "High-pressure compression",
  "Odourisation",
  "CBG cascade filling",
  "Digestate solid–liquid separation",
  "FOM and LFOM recovery",
];
