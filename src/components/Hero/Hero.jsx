import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import {
  HiSparkles,
  HiCode,
  HiLightningBolt,
  HiChartBar,
} from "react-icons/hi";
import profile from "../../data/profile";
import "./Hero.css";

/**
 * Hero Section Component
 * Main landing section with headline, CTA buttons, and stats
 */
const Hero = () => {
  const { name, tagline, subtitle, social, stats } = profile;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Icon mapping for stats
  const getStatIcon = (iconName) => {
    const icons = {
      experience: <HiSparkles />,
      projects: <HiCode />,
      uptime: <HiLightningBolt />,
      satisfaction: <HiChartBar />,
    };
    return icons[iconName] || <HiSparkles />;
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <HiSparkles /> Available for Freelance & Full-time
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {tagline}
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="gradient-text">{subtitle}</span>
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Building scalable backend systems, integrating AI solutions, and
              deploying cloud-native applications that empower businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img 
                src="/assets/profile-photo.jpg" 
                alt={name}
                className="hero-profile-photo"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card card-glass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
            >
              <div className="stat-icon">{getStatIcon(stat.icon)}</div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={() => scrollToSection("about")}
        >
          <FaArrowDown />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
