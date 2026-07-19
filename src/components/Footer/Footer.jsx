import React from "react";
import profile from "../../data/profile";

const Footer = () => (
  <footer className="footer">
    <div className="container foot">
      <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
      <span className="mono">systems that <b>stay up</b> · built with FastAPI & React</span>
    </div>
  </footer>
);

export default Footer;
