import React from "react";

const Node = ({ t, s, hot }) => (
  <div className={"node" + (hot ? " hot" : "")}>
    <div className="t">{t}</div>
    <div className="s">{s}</div>
  </div>
);

/**
 * AISystems — the LangGraph agent architecture diagram.
 */
const AISystems = () => (
  <section className="section" id="ai">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">AI Engineering</div>
        <h2>How my agent systems are wired</h2>
        <p>
          Not a wrapper around one prompt — orchestrated agents with routing,
          guardrails and state.
        </p>
      </div>
      <div className="arch">
        <div className="arch-flow">
          <Node t="WhatsApp / Web" s="Twilio · React" />
          <span className="arrow">──▶</span>
          <Node t="Router Agent" s="LangGraph" hot />
          <span className="arrow">──▶</span>
          <div className="branch">
            <Node t="RAG Agent" s="Qdrant · your data" />
            <Node t="Action Agent" s="tools → your APIs" />
            <Node t="Research Agent" s="Tavily" />
          </div>
          <span className="arrow">──▶</span>
          <Node t="Guardrails" s="PII · safety · evals" hot />
          <span className="arrow">──▶</span>
          <Node t="Response" s="idempotent · logged" />
        </div>
        <div className="arch-sub">
          <span><b>state:</b> PostgreSQL memory</span>
          <span><b>locks:</b> Redis SET NX (no duplicate replies)</span>
          <span><b>routing:</b> OpenAI ⇄ Bedrock by cost/quality</span>
          <span><b>evals:</b> custom framework, no regressions</span>
        </div>
      </div>
    </div>
  </section>
);

export default AISystems;
