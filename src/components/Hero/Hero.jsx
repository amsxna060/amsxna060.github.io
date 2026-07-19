import React, { useEffect, useState, useRef } from "react";
import profile from "../../data/profile";
import agentScenarios from "../../data/agentScenarios";

/**
 * Hero — headline + the signature cycling WhatsApp-agent demo panel.
 */
const Hero = () => {
  const [idx, setIdx] = useState(0);
  const reduced = useRef(
    typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduced.current) return undefined;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % agentScenarios.length),
      5200
    );
    return () => clearInterval(t);
  }, []);

  const s = agentScenarios[idx];

  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">{profile.eyebrow}</div>
          <h1>
            {profile.headline.plain}
            <span className="accent">{profile.headline.accent}</span>
          </h1>
          <p className="sub">
            I'm {profile.firstName} — 4 years shipping production systems.{" "}
            <b>
              FastAPI services, LangGraph multi-agent apps, WhatsApp automation
            </b>{" "}
            and finance platforms that real businesses run on every single day.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Start a project →</a>
            <a className="btn btn-ghost" href="#work">See live work</a>
          </div>
          <div className="trust-chips">
            {profile.trustChips.map((c) => (
              <span key={c.text}>
                <span className={"dot" + (c.tone === "gold" ? " gold" : "")} />
                {c.text}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="agent-panel" aria-label="Demo of a business WhatsApp AI agent">
            <div className="agent-head">
              <div className="who">
                <span className="agent-avatar">AI</span> Business Agent
              </div>
              <span className="live"><span className="dot" />LIVE</span>
            </div>
            {/* key forces re-mount so entry animation replays per scenario */}
            <div className="agent-body" key={idx}>
              <div className="msg client">{s.client}</div>
              <div className="msg agent" style={{ animationDelay: reduced.current ? "0s" : "0.9s" }}>
                {s.agent}
                <span className="r">{s.result}</span>
              </div>
            </div>
            <div className="agent-foot">
              <span>
                scenario: <span className="scenario-tag">{s.tag}</span>
              </span>
              <div className="bars">
                {agentScenarios.map((sc, i) => (
                  <span key={sc.tag} className={"bar" + (i === idx ? " on" : "")} />
                ))}
              </div>
            </div>
          </div>
          <p className="panel-caption">
            ↑ this is a real service I build — an AI agent on your WhatsApp
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
