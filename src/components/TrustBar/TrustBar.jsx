import React from "react";
import profile from "../../data/profile";

const TrustBar = () => (
  <div className="trustbar">
    <div className="container trustbar-inner">
      <span className="label">Built with · Worked with</span>
      <div className="trust-logos">
        {profile.trustLogos.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
