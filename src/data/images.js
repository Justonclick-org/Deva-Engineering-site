/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/data/images.js — photograph registry with licence attribution
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * All photographs are REPRESENTATIVE images of biogas infrastructure, sourced from
 * Wikimedia Commons under Creative Commons licences. None of them shows a Deva Bio
 * Engineering installation. Every image is credited on /image-credits; replace with
 * the company's own site photographs as the project progresses.
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
    alt: "Aerial view of an operating agricultural biogas plant with green-roofed anaerobic digesters, gas handling and feedstock buildings",
    subject: "Agricultural biogas plant with digesters (aerial view)",
    author: "Thzorro77",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Biogasanlage_mit_Kompostierung.jpg",
  },
  napierGrass: {
    src: napierGrass,
    width: 1600,
    height: 1067,
    alt: "Close view of dense green Napier grass (Pennisetum purpureum) leaves used as energy crop feedstock",
    subject: "Napier grass (Pennisetum purpureum)",
    author: "Salil Kumar Mukherjee",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Napier_grass_(Non-hybrid).jpg",
  },
  digesters: {
    src: digesters,
    width: 1600,
    height: 1067,
    alt: "Large insulated steel anaerobic digester tanks at an industrial biogas facility",
    subject: "Steel anaerobic digester tanks",
    author: "Richard Webb",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Anaerobic_digesters,_Seafield_-_geograph.org.uk_-_8266791.jpg",
  },
  upgrading: {
    src: upgrading,
    width: 1600,
    height: 1067,
    alt: "Skid-mounted biogas upgrading unit with tall adsorption columns, piping and instrumentation",
    subject: "Biogas upgrading skid",
    author: "RedactedSagan",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Biogasupgrader.jpg",
  },
  compressor: {
    src: compressor,
    width: 1600,
    height: 1067,
    alt: "Industrial reciprocating gas compressor package on test inside an engineering workshop",
    subject: "Reciprocating compressor unit",
    author: "DWI",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Running_test_of_reciprocating_compressor_unit.JPG",
  },
  digesterRenewables: {
    src: digesterRenewables,
    width: 1600,
    height: 1067,
    alt: "Green steel biogas digester beside farm buildings with a wind turbine in the background",
    subject: "Biogas digester alongside other renewable energy",
    author: "Florian Gerlach (Nawaro)",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Biogas_Photovoltaik_Wind.jpg",
  },
  digesterFarmland: {
    src: digesterFarmland,
    width: 1600,
    height: 1067,
    alt: "Biomethane plant with a membrane gas dome set among open agricultural fields",
    subject: "Biomethane plant in farmland",
    author: "Hugh Venables",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Biomethane_injection_plant_on_RAF_Methwold_site_-_geograph.org.uk_-_5407127.jpg",
  },
};

export const PHOTO_LIST = Object.values(PHOTOS);
