/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/data/solutions.js — solutions catalogue
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * Each solution carries an honest delivery status so visitors can tell what is the
 * company's current focus, what is delivered with technology / EPC partners, and what
 * is planned. Update `status` once the company confirms a service is offered independently.
 */

export const SOLUTION_STATUS = {
  focus: {
    label: "Current focus",
    note: "Core to Deva Bio Engineering's flagship 5 TPD CBG project.",
  },
  partner: {
    label: "With technology partners",
    note: "Delivered in association with specialist technology suppliers and EPC partners.",
  },
  planned: {
    label: "Planned service",
    note: "Part of the company's planned portfolio; discuss your requirement with us for current availability.",
  },
};

export const SOLUTIONS = [
  {
    slug: "compressed-biogas-cbg-plants",
    title: "Compressed Biogas (CBG) Plants",
    short: "CBG Plants",
    icon: "Fuel",
    photo: "plantAerial",
    status: "focus",
    summary:
      "Integrated plants that convert organic feedstock into compressed biogas with at least 98% methane, ready for cascade storage and dispatch.",
    intro: [
      "A compressed biogas plant brings together feedstock handling, anaerobic digestion, gas cleaning, upgrading, compression and filling in one engineered system. Each section has to be sized against the others — digester volume against feedstock, upgrading capacity against raw gas flow, compression against dispatch.",
      "Our flagship 5 TPD project at Shivni, Beed is designed around exactly this integration: Napier grass in, up to 5,000 kg/day of CBG and organic manure out.",
    ],
    scope: [
      "Feedstock assessment and plant capacity planning",
      "Process configuration: digestion, upgrading, compression and filling",
      "Mass and energy balance aligned to feedstock availability",
      "Coordination with technology suppliers and EPC partners",
      "Digestate and by-product value chain planning",
    ],
    specs: [
      ["Reference capacity", "5 TPD CBG (up to 5,000 kg/day)"],
      ["Product quality", "≥ 98% methane"],
      ["Compression", "Up to 250 bar design"],
    ],
    flagship: true,
  },
  {
    slug: "napier-grass-biogas-solutions",
    title: "Napier Grass-Based Biogas Solutions",
    short: "Napier Grass Biogas",
    icon: "Sprout",
    photo: "napierGrass",
    status: "focus",
    summary:
      "Biogas and CBG systems designed around Napier grass — a high-yield, perennial energy crop well suited to Maharashtra's agro-climate.",
    intro: [
      "Napier grass (Pennisetum purpureum) is a fast-growing perennial grass that can be harvested several times a year. Grown as a dedicated energy crop, it offers a plannable feedstock base for a biogas plant and an additional income stream for farmers.",
      "Grass-based plants need specific engineering: chopping and grinding to the right particle size, slurry preparation that handles fibrous material, and digesters with effective mixing. These are central to our flagship project's design.",
    ],
    scope: [
      "Feedstock planning for cultivation area and harvest cycles",
      "Chopping, grinding and conveying system selection",
      "Slurry preparation with liquid recirculation",
      "CSTR digestion designed for fibrous feedstock",
      "Farmer engagement and supply-chain planning",
    ],
    specs: [
      ["Design feedstock (flagship)", "115 TPD at 25% total solids"],
      ["Digestion", "Mesophilic CSTR"],
      ["Retention time", "≈ 36 days"],
    ],
    flagship: true,
  },
  {
    slug: "multi-feedstock-biogas-solutions",
    title: "Multi-Feedstock Biogas Solutions",
    short: "Multi-Feedstock",
    icon: "Layers",
    photo: "digesterFarmland",
    status: "focus",
    summary:
      "Plants designed to accept more than one organic feedstock, reducing dependence on any single source and smoothing seasonal supply.",
    intro: [
      "Few regions can supply a single feedstock all year round. A multi-feedstock design lets a plant combine energy crops, crop residues, animal manure and agro-industrial waste while keeping digestion stable.",
      "Our flagship plant is designed for Napier grass with multi-feedstock capability, so the feed mix can adapt to what is locally available.",
    ],
    scope: [
      "Feedstock survey and characterisation",
      "Blending strategy for stable digestion",
      "Receiving and pre-treatment for varied materials",
      "Seasonal supply planning",
    ],
    specs: [
      ["Typical inputs", "Energy grasses, crop residues, manure, agro-waste"],
      ["Design aim", "Stable gas yield across seasons"],
    ],
    flagship: true,
  },
  {
    slug: "biogas-upgrading-purification",
    title: "Biogas Upgrading & Purification",
    short: "Upgrading & Purification",
    icon: "FlaskConical",
    photo: "upgrading",
    status: "partner",
    summary:
      "Gas cleaning and upgrading trains that take raw biogas at 55–60% methane to CBG-grade gas of at least 98% methane.",
    intro: [
      "Raw biogas contains carbon dioxide, hydrogen sulphide and moisture. Each must be removed in the right sequence before the gas can be compressed and sold as CBG.",
      "The configuration in our flagship DPR uses water washing with iron oxyhydroxide media for H₂S, chilled-water scrubbing or two-stage membranes for CO₂, and a heatless-regeneration desiccant dryer. These technologies are supplied by specialist technology partners; our role is selecting, integrating and specifying them for the plant.",
    ],
    scope: [
      "H₂S removal: water washing / iron oxyhydroxide media",
      "CO₂ removal: chilled-water scrubbing or two-stage membranes",
      "Desiccant gas drying with heatless regeneration",
      "Online gas quality monitoring with PLC / SCADA",
    ],
    specs: [
      ["Inlet", "Raw biogas, 55–60% CH₄"],
      ["Outlet", "≥ 98% CH₄"],
    ],
  },
  {
    slug: "digestate-organic-manure",
    title: "Digestate & Organic Manure Management",
    short: "Digestate & Manure",
    icon: "Recycle",
    photo: "digesterRenewables",
    status: "focus",
    summary:
      "Solid–liquid separation of digestate into Fermented Organic Manure (FOM) and Liquid Fermented Organic Manure (LFOM).",
    intro: [
      "Digestate is not waste. Separated and handled properly, it returns organic matter and nutrients to farmland and closes the loop with the farmers who grow the feedstock.",
      "Our flagship design includes solid–liquid separation, with the liquid fraction partly recirculated for slurry preparation. Actual manure quantities and marketable quality depend on plant operation and final product specifications.",
    ],
    scope: [
      "Solid–liquid separation of digestate",
      "FOM handling and conditioning",
      "LFOM recirculation and use planning",
      "Linking manure back to the feedstock supply chain",
    ],
    specs: [
      ["Solid fraction", "Fermented Organic Manure (FOM)"],
      ["Liquid fraction", "Liquid Fermented Organic Manure (LFOM)"],
    ],
    flagship: true,
  },
  {
    slug: "industrial-biogas-solutions",
    title: "Industrial Biogas Solutions",
    short: "Industrial Biogas",
    icon: "Factory",
    photo: "digesters",
    status: "planned",
    summary:
      "Biogas systems for industries with organic effluent or solid waste streams, turning a disposal cost into on-site energy.",
    intro: [
      "Food processing, dairy, distillery and agro-processing units generate organic residues that are well suited to anaerobic digestion. The resulting biogas can be used on site or upgraded to CBG.",
      "Every industrial stream is different, so projects start with characterising the waste and its variability before any plant size is proposed.",
    ],
    scope: [
      "Waste stream characterisation",
      "Feasibility and capacity assessment",
      "Digestion and gas-use configuration",
      "Integration with existing utilities",
    ],
    specs: [["Typical inputs", "Process residues, effluent sludge, organic rejects"]],
  },
  {
    slug: "agricultural-biogas-plants",
    title: "Agricultural Biogas Plants",
    short: "Agricultural Biogas",
    icon: "Tractor",
    photo: "digesterFarmland",
    status: "planned",
    summary:
      "Biogas plants that use crop residues, energy crops and livestock manure from farms and farmer producer organisations.",
    intro: [
      "Agricultural biogas plants turn residues that are often burned or left to decompose into energy and organic manure, creating value at the village and cluster level.",
      "Plant size and configuration depend on the dependable feedstock that can be aggregated within an economic collection radius.",
    ],
    scope: [
      "Residue and manure availability mapping",
      "Collection and storage planning",
      "Plant sizing for the local cluster",
      "Organic manure return to farms",
    ],
    specs: [["Typical inputs", "Crop residues, energy crops, cattle dung"]],
  },
  {
    slug: "organic-waste-to-energy",
    title: "Organic Waste-to-Energy",
    short: "Waste-to-Energy",
    icon: "Trash2",
    photo: "digesters",
    status: "planned",
    summary:
      "Anaerobic digestion of segregated organic waste from markets, commercial establishments and municipalities into biogas and manure.",
    intro: [
      "Segregated organic waste is a reliable, year-round feedstock in urban areas. Digesting it reduces landfill load and the methane emissions that uncontrolled decomposition causes.",
      "Waste-based plants need robust receiving and pre-treatment to deal with contaminants, which we account for from the feasibility stage.",
    ],
    scope: [
      "Waste quantity and composition assessment",
      "Receiving, sorting and pre-treatment design",
      "Digestion and gas-use configuration",
      "Digestate management",
    ],
    specs: [["Typical inputs", "Market waste, food waste, segregated MSW organics"]],
  },
  {
    slug: "plant-operations-maintenance",
    title: "Plant Operations & Maintenance",
    short: "Operations & Maintenance",
    icon: "Wrench",
    photo: "compressor",
    status: "planned",
    summary:
      "Operation and maintenance support focused on stable digestion, consistent gas quality and safe high-pressure systems.",
    intro: [
      "A biogas plant's output depends on day-to-day discipline: steady feeding, monitoring digester health, keeping the gas train and compressors maintained, and logging gas quality.",
      "Our O&M approach is being built from the operating requirements of our own flagship plant.",
    ],
    scope: [
      "Feeding schedules and digester monitoring",
      "Preventive maintenance of gas train and compressors",
      "Gas quality monitoring and records",
      "Safety procedures for high-pressure gas",
    ],
    specs: [["Focus", "Uptime, gas quality, safety"]],
  },
];

export const getSolution = (slug) => SOLUTIONS.find((s) => s.slug === slug);
