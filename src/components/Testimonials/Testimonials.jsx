import React from "react";
import { motion } from "framer-motion";
import testimonials from "../../data/testimonials";

const Testimonials = () => (
  <section className="section" id="testimonials">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Clients</div>
        <h2>Small businesses, real systems</h2>
        <p>
          Alongside enterprise work, I build systems for local businesses — the
          kind that replace registers and Excel.
        </p>
      </div>
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <motion.div
            className="testi"
            key={t.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
          >
            <p className="quote">{t.quote}</p>
            <div className="who">
              <div className={"ava " + t.tone}>{t.initials}</div>
              <div>
                <div className="n">{t.name}</div>
                <div className="r">{t.role}</div>
              </div>
            </div>
            <div className="proj-tag">{t.project}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
