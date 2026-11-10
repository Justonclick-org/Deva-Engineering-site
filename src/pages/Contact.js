/*!
 * Deva Bio Engineering Private Limited — Corporate Website
 * File: src/pages/Contact.js — contact & project enquiry
 * Author: Justonclick Team (https://justonclick.in)
 * Copyright (c) Justonclick. All rights reserved.
 */
import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AlertTriangle, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import { PageHero } from "../components/ui";
import { COMPANY, CONTACT, ENQUIRY, mapLink, waLink } from "../config/site";
import { INDUSTRIES } from "../data/industries";
import { SOLUTIONS } from "../data/solutions";
import { stagger } from "../hooks/useScrollReveal";
import "./pages.css";
import "./contact.css";

const STATES = [
  "Maharashtra", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
  "Outside India",
];

const REQUIREMENTS = [
  ...SOLUTIONS.map((s) => ({ value: s.slug, label: s.title })),
  { value: "flagship", label: "5 TPD Shivni project (supply, off-take or partnership)" },
  { value: "feasibility", label: "Feasibility / project consultation" },
  { value: "other", label: "Other" },
];

const FEEDSTOCKS = [
  "Napier grass / energy crop",
  "Crop residue",
  "Cattle dung / animal manure",
  "Poultry litter",
  "Press mud / sugar industry residue",
  "Food & agro-processing waste",
  "Segregated municipal organic waste",
  "Mixed / multiple feedstocks",
  "Not decided yet",
];

const CAPACITIES = ["Below 1 TPD CBG", "1 – 5 TPD CBG", "5 – 10 TPD CBG", "Above 10 TPD CBG", "Not sure yet"];

const EMPTY = {
  name: "",
  company: "",
  email: "",
  phone: "",
  state: "Maharashtra",
  industry: "",
  requirement: "",
  feedstock: "",
  feedstockQty: "",
  capacity: "",
  message: "",
  consent: false,
  website: "", // honeypot — must stay empty
};

const LABELS = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  state: "State",
  industry: "Industry",
  requirement: "Project requirement",
  feedstock: "Feedstock type",
  feedstockQty: "Estimated daily feedstock availability",
  capacity: "Proposed CBG plant capacity",
  message: "Additional message",
};

const summarise = (form) =>
  Object.keys(LABELS)
    .filter((k) => form[k])
    .map((k) => {
      const v = k === "requirement" ? REQUIREMENTS.find((r) => r.value === form[k])?.label || form[k] : form[k];
      return `${LABELS[k]}: ${v}`;
    })
    .join("\n");

function Contact() {
  const [params] = useSearchParams();
  const initial = useMemo(() => {
    const req = params.get("solution") || params.get("requirement") || "";
    return { ...EMPTY, requirement: REQUIREMENTS.some((r) => r.value === req) ? req : "" };
  }, [params]);

  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const subject = () =>
    `${ENQUIRY.subjectPrefix}: ${form.name}${form.company ? ` (${form.company})` : ""}`;

  const submit = async (e) => {
    e.preventDefault();
    const el = e.currentTarget;
    if (!el.checkValidity()) {
      el.reportValidity();
      return;
    }
    if (form.website) return; // bot

    if (!ENQUIRY.endpoint) {
      // No endpoint configured: hand the enquiry to the visitor's email app.
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject())}&body=${encodeURIComponent(
        summarise(form)
      )}`;
      setStatus({
        state: "success",
        message:
          "Your email app should open with the enquiry pre-filled — please press send there. If it doesn't open, use WhatsApp or email us directly.",
      });
      return;
    }

    setStatus({ state: "sending", message: "" });
    try {
      const payload = {
        ...(ENQUIRY.accessKey ? { access_key: ENQUIRY.accessKey } : {}),
        subject: subject(),
        from_name: COMPANY.brandName + " website",
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        state: form.state,
        industry: form.industry,
        requirement: REQUIREMENTS.find((r) => r.value === form.requirement)?.label || form.requirement,
        feedstock: form.feedstock,
        feedstock_quantity: form.feedstockQty,
        proposed_capacity: form.capacity,
        message: form.message,
        page: window.location.href,
      };
      const res = await fetch(ENQUIRY.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus({
        state: "success",
        message: `Thank you, ${form.name.split(" ")[0]}. Your enquiry has been sent — we'll get back to you soon.`,
      });
      setForm(EMPTY);
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      setStatus({
        state: "error",
        message: "We couldn't send your enquiry just now. Please try again, or contact us by WhatsApp, phone or email.",
      });
    }
  };

  const sendWhatsApp = () => {
    const text = `Hello ${COMPANY.brandName}, I have a project enquiry.\n\n${summarise(form) || "(details to follow)"}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const channels = [
    { icon: Phone, label: "Call", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: waLink(), external: true },
  ];

  return (
    <>
      <Seo
        title="Contact Deva Bio Engineering | CBG & Biogas Project Enquiry"
        description={`Discuss a compressed biogas (CBG) or biogas plant project with Deva Bio Engineering. Call ${CONTACT.phoneDisplay}, email ${CONTACT.email} or send a project enquiry.`}
        path="/contact"
        schema={[
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
          { "@type": "ContactPage", name: "Contact Deva Bio Engineering" },
        ]}
      />
      <PageHero
        eyebrow="Contact us"
        title="Let's discuss your biogas or CBG project"
        lead="Tell us about your feedstock, location and the capacity you have in mind. The more detail you share, the more useful our first conversation will be."
        photo="plantAerial"
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="dbe-section">
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              <div className="dbe-contact-side">
                {channels.map((c, i) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="dbe-channel dbe-reveal dbe-rv-left"
                    style={stagger(i)}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                  >
                    <span className="dbe-channel-icon">
                      <c.icon size={20} />
                    </span>
                    <span>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </span>
                  </a>
                ))}

                <div className="dbe-location dbe-reveal dbe-rv-left" style={stagger(3)}>
                  <div className="dbe-location-map" aria-hidden="true">
                    <span className="dbe-location-pin">
                      <MapPin size={22} />
                    </span>
                    <span className="dbe-location-ring" />
                  </div>
                  <div className="dbe-location-body">
                    <small>Flagship project location</small>
                    <strong>{CONTACT.projectLocation.display}</strong>
                    <a href={mapLink()} target="_blank" rel="noopener noreferrer" className="dbe-link-arrow">
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {CONTACT.office.confirmed && (
                  <div className="dbe-channel">
                    <span className="dbe-channel-icon">
                      <MapPin size={20} />
                    </span>
                    <span>
                      <small>Office</small>
                      <strong>{CONTACT.office.lines.join(", ")}</strong>
                    </span>
                  </div>
                )}

                <p className="dbe-contact-note dbe-reveal">
                  <Clock size={15} aria-hidden="true" /> {CONTACT.responseNote}
                </p>
              </div>
            </Col>

            <Col lg={8}>
              <form className="dbe-form dbe-reveal dbe-rv-right" onSubmit={submit} noValidate={false} aria-describedby="form-status">
                <h2>Project enquiry</h2>
                <p className="dbe-form-intro">Fields marked * are required.</p>

                {/* honeypot */}
                <div className="dbe-hp" aria-hidden="true">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
                  </label>
                </div>

                <div className="dbe-form-grid">
                  <label className="dbe-field">
                    <span>Name *</span>
                    <input name="name" required autoComplete="name" value={form.name} onChange={update} maxLength={100} />
                  </label>
                  <label className="dbe-field">
                    <span>Company / organisation</span>
                    <input name="company" autoComplete="organization" value={form.company} onChange={update} maxLength={120} />
                  </label>
                  <label className="dbe-field">
                    <span>Email *</span>
                    <input type="email" name="email" required autoComplete="email" value={form.email} onChange={update} maxLength={120} />
                  </label>
                  <label className="dbe-field">
                    <span>Phone *</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="^[+]?[0-9\s\-]{10,15}$"
                      title="Enter a valid phone number, e.g. 98765 43210 or +91 98765 43210"
                      value={form.phone}
                      onChange={update}
                    />
                  </label>
                  <label className="dbe-field">
                    <span>State *</span>
                    <select name="state" required value={form.state} onChange={update}>
                      {STATES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="dbe-field">
                    <span>Industry</span>
                    <select name="industry" value={form.industry} onChange={update}>
                      <option value="">Select industry</option>
                      {INDUSTRIES.map((i) => (
                        <option key={i.key}>{i.title}</option>
                      ))}
                      <option>Investor / developer</option>
                      <option>Technology or EPC partner</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="dbe-field dbe-field-wide">
                    <span>Project requirement *</span>
                    <select name="requirement" required value={form.requirement} onChange={update}>
                      <option value="">Select requirement</option>
                      {REQUIREMENTS.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="dbe-field">
                    <span>Feedstock type</span>
                    <select name="feedstock" value={form.feedstock} onChange={update}>
                      <option value="">Select feedstock</option>
                      {FEEDSTOCKS.map((f) => (
                        <option key={f}>{f}</option>
                      ))}
                    </select>
                  </label>
                  <label className="dbe-field">
                    <span>Estimated daily feedstock availability</span>
                    <input
                      name="feedstockQty"
                      placeholder="e.g. 50 tonnes/day"
                      value={form.feedstockQty}
                      onChange={update}
                      maxLength={60}
                    />
                  </label>
                  <fieldset className="dbe-field dbe-field-wide">
                    <legend>Proposed CBG plant capacity</legend>
                    <div className="dbe-radio-row">
                      {CAPACITIES.map((c) => (
                        <label key={c} className={`dbe-radio${form.capacity === c ? " is-on" : ""}`}>
                          <input type="radio" name="capacity" value={c} checked={form.capacity === c} onChange={update} />
                          {c}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <label className="dbe-field dbe-field-wide">
                    <span>Additional message</span>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={update}
                      maxLength={2000}
                      placeholder="Location, timelines, site availability, existing infrastructure…"
                    />
                  </label>
                  <label className="dbe-check dbe-field-wide">
                    <input type="checkbox" name="consent" required checked={form.consent} onChange={update} />
                    <span>I agree to be contacted by {COMPANY.brandName} about this enquiry. *</span>
                  </label>
                </div>

                <div id="form-status" aria-live="polite">
                  {status.state === "success" && (
                    <p className="dbe-form-msg is-success">
                      <CheckCircle2 size={18} /> {status.message}
                    </p>
                  )}
                  {status.state === "error" && (
                    <p className="dbe-form-msg is-error">
                      <AlertTriangle size={18} /> {status.message}
                    </p>
                  )}
                </div>

                <div className="dbe-actions mt-3">
                  <button type="submit" className="dbe-btn dbe-btn-primary" disabled={status.state === "sending"}>
                    {status.state === "sending" ? "Sending…" : "Send enquiry"} <Send size={16} />
                  </button>
                  <button type="button" className="dbe-btn dbe-btn-whatsapp" onClick={sendWhatsApp}>
                    <MessageCircle size={16} /> Send via WhatsApp
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
