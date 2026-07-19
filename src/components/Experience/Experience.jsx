import React from "react";
import experience from "../../data/experience";

/**
 * Experience timeline. Bullet text supports <b> emphasis via
 * dangerouslySetInnerHTML — content is our own static data file.
 */
const Experience = () => (
  <section className="section" id="experience">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Experience</div>
        <h2>Four years, one trajectory</h2>
      </div>
      <div className="xp">
        {experience.map((x) => (
          <div className="xp-item" key={x.when}>
            <div className="when">{x.when}</div>
            <h3>{x.role}</h3>
            <div className="org">{x.org}</div>
            <ul>
              {x.points.map((p) => (
                <li key={p} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
