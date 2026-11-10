/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/index.js — application entry
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import "./styles/components.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
