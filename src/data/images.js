/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/data/images.js — photograph registry
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import plantAerial from "../assets/photos/biogas-plant-aerial.webp";
import napierGrass from "../assets/photos/napier-grass.webp";
import digesters from "../assets/photos/anaerobic-digesters.webp";
import upgrading from "../assets/photos/biogas-upgrading-unit.webp";
import compressor from "../assets/photos/reciprocating-compressor.webp";
import digesterRenewables from "../assets/photos/digester-renewables.webp";
import digesterFarmland from "../assets/photos/digester-farmland.webp";

export const PHOTOS = {
  plantAerial: {
    src: plantAerial,
    width: 1920,
    height: 1080,
    alt: "Aerial view of an operating agricultural biogas plant with anaerobic digesters, gas handling and feedstock buildings",
    subject: "Agricultural biogas plant with digesters",
  },
  napierGrass: {
    src: napierGrass,
    width: 1600,
    height: 1067,
    alt: "Lush green Napier grass cultivation used as energy crop feedstock",
    subject: "Napier grass cultivation",
  },
  digesters: {
    src: digesters,
    width: 1600,
    height: 1067,
    alt: "Large industrial anaerobic digester tanks at a biogas facility",
    subject: "Steel anaerobic digester tanks",
  },
  upgrading: {
    src: upgrading,
    width: 1600,
    height: 1067,
    alt: "Biogas upgrading unit with adsorption columns and piping",
    subject: "Biogas upgrading skid",
  },
  compressor: {
    src: compressor,
    width: 1600,
    height: 1067,
    alt: "High-pressure gas compressor package for CBG cascading",
    subject: "Reciprocating compressor unit",
  },
  digesterRenewables: {
    src: digesterRenewables,
    width: 1600,
    height: 1067,
    alt: "Biogas digester with clean renewable infrastructure",
    subject: "Biogas and clean energy infrastructure",
  },
  digesterFarmland: {
    src: digesterFarmland,
    width: 1600,
    height: 1067,
    alt: "Biomethane and CBG plant in open agricultural setting",
    subject: "Biomethane facility in farmland",
  },
};

export const PHOTO_LIST = Object.values(PHOTOS);
