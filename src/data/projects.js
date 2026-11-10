/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/data/projects.js — project portfolio
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 *
 * To add a project, append an object with the same fields. Set `photos` to the
 * company's own site photographs (import them from src/assets/projects/) and leave
 * `representative: true` only when the photo is NOT of the actual project.
 */
import { FLAGSHIP } from "./flagship";

export const PROJECTS = [
  {
    slug: FLAGSHIP.slug,
    title: FLAGSHIP.title,
    location: FLAGSHIP.location,
    capacity: "Up to 5,000 kg/day CBG",
    feedstock: "Napier grass / multi-feedstock",
    technology: "Mesophilic CSTR · gas upgrading to ≥ 98% CH₄ · compression up to 250 bar",
    status: FLAGSHIP.status,
    photo: "plantAerial",
    representative: true,
    description: FLAGSHIP.summary,
    flagship: true,
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
