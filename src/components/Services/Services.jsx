import React from "react";
import { motion } from "framer-motion";
import services from "../../data/services";

const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Services</div>
        <h2>What I can build for you</h2>
        <p>Framed the way you'd ask for it — not a list of frameworks.</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            className="svc"
            key={s.num}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          >
            <div className="num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="for">FOR → {s.audience}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
