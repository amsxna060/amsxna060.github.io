import React, { useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import profile from "../../data/profile";
import engagement, { showRates } from "../../data/engagement";

/**
 * Contact — engagement models (with optional rates), a form that emails the
 * submission via Web3Forms (no backend needed), plus a WhatsApp deep link and
 * optional booking link.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "AI chatbot / RAG on my data",
    message: "",
    botcheck: "",
  });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    try {
      const accessKey = process.env.REACT_APP_WEB3FORMS_KEY;
      if (!accessKey) throw new Error("Missing REACT_APP_WEB3FORMS_KEY");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New lead: " + formData.name + " — " + formData.projectType,
          from_name: "Portfolio contact form",
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          to_name: profile.name,
          botcheck: formData.botcheck, // honeypot — real users leave it empty
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Web3Forms error: " + (data.message || res.status));

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", projectType: "AI chatbot / RAG on my data", message: "", botcheck: "" });
      setTimeout(() => setStatus({ submitting: false, submitted: false, error: null }), 6000);
    } catch (err) {
      console.error("Contact form submit failed:", err);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Message didn't send. Ping me on WhatsApp instead — the green button on the right.",
      });
    }
  };

  const waLink =
    "https://wa.me/" +
    profile.whatsapp +
    "?text=" +
    encodeURIComponent(profile.whatsappPrefill);

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Work with me</div>
          <h2>Three ways to engage</h2>
        </div>

        <div className="engage-grid">
          {engagement.map((e) => (
            <div className={"engage" + (e.hot ? " hot" : "")} key={e.title}>
              <h4>{e.title}</h4>
              <div className="fit">{e.fit}</div>
              <p>{e.desc}</p>
              {showRates && <div className="rate">{e.rate}</div>}
            </div>
          ))}
        </div>
        {showRates && (
          <p className="rates-note">
            * indicative starting points — every project gets a fixed quote after a free discovery call.
          </p>
        )}

        <div className="contact-wrap">
          <form onSubmit={handleSubmit}>
            {/* Honeypot: hidden from humans, bots fill it and get rejected */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
              checked={!!formData.botcheck}
              onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
              style={{ position: "absolute", left: "-9999px" }}
              aria-hidden="true"
            />
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required
                placeholder="Full name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required
                placeholder="So I can reach you" value={formData.email} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="projectType">What do you need?</label>
              <select id="projectType" name="projectType"
                value={formData.projectType} onChange={handleChange}>
                <option>AI chatbot / RAG on my data</option>
                <option>WhatsApp automation</option>
                <option>Business management system</option>
                <option>Backend API / integration</option>
                <option>Hiring — full-time role</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Tell me about it</label>
              <textarea id="message" name="message" rows="4" required
                placeholder="A few lines is enough — I'll ask the right questions on our call."
                value={formData.message} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit" disabled={status.submitting}>
              {status.submitting ? "Sending…" : "Send message →"}
            </button>
            {status.submitted && (
              <div className="form-status ok">Message sent. I reply within 24 hours.</div>
            )}
            {status.error && <div className="form-status err">{status.error}</div>}
          </form>

          <div className="contact-side">
            <div className="side-card">
              <div className="k">Fastest way</div>
              <div className="v" style={{ marginTop: 12 }}>
                <a className="btn wa-btn btn-sm" href={waLink} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                {profile.social.calendly && (
                  <a className="btn btn-ghost btn-sm" style={{ marginLeft: 10 }}
                    href={profile.social.calendly} target="_blank" rel="noopener noreferrer">
                    <FaCalendarAlt /> Book a call
                  </a>
                )}
              </div>
            </div>
            <div className="side-card">
              <div className="k">Availability</div>
              <div className="v mint avail"><span className="dot" />{profile.availability}</div>
            </div>
            <div className="side-card">
              <div className="k">Email</div>
              <div className="v"><a href={"mailto:" + profile.email}>{profile.email}</a></div>
            </div>
            <div className="side-card">
              <div className="k">Elsewhere</div>
              <div className="side-links">
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                <a href={profile.social.financerbuddy} target="_blank" rel="noopener noreferrer">financerbuddy.com</a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">↓ Resume (PDF)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
