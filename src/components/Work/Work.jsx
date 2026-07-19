import React from "react";
import { motion } from "framer-motion";
import { flagship, featured } from "../../data/projects";

/**
 * Work — flagship case study (FinancerBuddy) + featured project cards.
 */
const Work = () => (
  <section className="section" id="work">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Flagship</div>
        <h2>Proof, running in production</h2>
      </div>

      <motion.div
        className="flagship"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flagship-left">
          <span className="badge-live"><span className="dot" />{flagship.badge}</span>
          <h3>{flagship.title}</h3>
          <div className="tag">{flagship.tagline}</div>
          <p className="desc">{flagship.desc}</p>
          <div className="pbr">
            {flagship.caseStudy.map((row) => (
              <div className="pbr-row" key={row.k}>
                <div className="k">{row.k}</div>
                <div className="v">{row.v}</div>
              </div>
            ))}
          </div>
          <div className="flagship-ctas">
            <a
              className="btn btn-primary btn-sm"
              href={flagship.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live app ↗
            </a>
            <a className="btn btn-ghost btn-sm" href="#contact">
              Build something like this
            </a>
          </div>
        </div>
        <div className="flagship-right">
          {flagship.ledger.map((l) => (
            <div className="ledger-line" key={l.k}>
              <span>{l.k}</span>
              <span className={"val" + (l.tone ? " " + l.tone : "")}>{l.v}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="projects-grid">
        {featured.map((p, i) => (
          <motion.div
            className="proj"
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="proj-top">
              <h3>{p.title}</h3>
              <span className="kind">{p.kind}</span>
            </div>
            <p>{p.desc}</p>
            <div className="metrics">
              {p.metrics.map((m) => (
                <div className="metric" key={m.l}>
                  <div className="n">{m.n}</div>
                  <div className="l">{m.l}</div>
                </div>
              ))}
            </div>
            <div className="stack">
              {p.stack.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
