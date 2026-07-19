import React, { useState } from "react";
import profile from "../../data/profile";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#ai", label: "AI Systems" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Clients" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="logo" href="#top">
          amol<b>.</b>saxena<b>()</b>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">Start a project</a>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          MENU
        </button>
      </div>
      <div className={"mobile-menu" + (open ? " open" : "")}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>Start a project → </a>
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </nav>
  );
};

export default Nav;
