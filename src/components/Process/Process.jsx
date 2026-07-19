import React from "react";
import processSteps from "../../data/process";

const Process = () => (
  <section className="section" id="process">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">How I work</div>
        <h2>Requirements to running software</h2>
        <p>
          I've handled the full cycle for UK and US clients — in plain English,
          on your timezone's calls.
        </p>
      </div>
      <div className="steps">
        {processSteps.map((st) => (
          <div className="step" key={st.sn}>
            <div className="sn">{st.sn}</div>
            <h4>{st.title}</h4>
            <p>{st.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
