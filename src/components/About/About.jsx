import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaRocket, FaLightbulb } from "react-icons/fa";
import profile from "../../data/profile";
import "./About.css";

/**
 * About Section Component
 * Professional summary and value proposition
 */
const About = () => {
  const { summary, valueProposition } = profile;

  const principles = [
    {
      icon: <FaLightbulb />,
      title: "Innovate",
      description:
        "Leveraging cutting-edge AI and modern tech stacks to solve complex problems",
    },
    {
      icon: <FaBrain />,
      title: "Inspire",
      description:
        "Creating intelligent solutions that drive business growth and efficiency",
    },
    {
      icon: <FaRocket />,
      title: "Create",
      description:
        "Building scalable, production-ready applications with best practices",
    },
  ];

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p className="section-subtitle">
            Passionate about building innovative solutions
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="gradient-text">Turning Ideas Into Reality</h3>
            <p>{summary}</p>
            <p className="highlight">{valueProposition}</p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-label">Years of Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Successful Projects</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-principles"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="principle-card card-glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="principle-icon">{principle.icon}</div>
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
