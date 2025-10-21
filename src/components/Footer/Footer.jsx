import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";
import profile from "../../data/profile";
import "./Footer.css";

/**
 * Footer Component
 */
const Footer = () => {
  const { name, email, social } = profile;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          {/* Footer Main */}
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="gradient-text">{name}</h3>
              <p>
                Building innovative solutions with Python, AI, and Cloud
                Technologies
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                  <li>
                    <button onClick={() => scrollToSection("home")}>
                      Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("about")}>
                      About
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("projects")}>
                      Projects
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("skills")}>
                      Skills
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li>
                    <button onClick={() => scrollToSection("experience")}>
                      Experience
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("contact")}>
                      Contact
                    </button>
                  </li>
                  <li>
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                  <li>Hyderabad, India</li>
                  <li>Available for freelance</li>
                  <li>Open to opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} {name}. Made with{" "}
                <FaHeart className="heart-icon" /> using React & FastAPI
              </p>
            </div>

            <div className="footer-social">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            <button
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
