/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/App.js — routes
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import FlagshipProject from "./pages/FlagshipProject";
import Industries from "./pages/Industries";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { FLAGSHIP } from "./data/flagship";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/:slug" element={<SolutionDetail />} />
          <Route path="technology" element={<Technology />} />
          <Route path="projects" element={<Projects />} />
          <Route path={`projects/${FLAGSHIP.slug}`} element={<FlagshipProject />} />
          <Route path="industries" element={<Industries />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
