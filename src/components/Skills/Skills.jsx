import React from "react";
import skills from "../../data/skills";

const Skills = () => (
  <section className="section" id="skills">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Stack</div>
        <h2>Tools I ship with</h2>
      </div>
      <div className="skill-cols">
        {skills.map((col) => (
          <div className="skill-col" key={col.group}>
            <h4>{col.group}</h4>
            <ul>
              {col.items.map((it) => (
                <li key={it.name}>
                  <b>{it.name}</b>
                  <span className="lvl">{it.lvl}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
