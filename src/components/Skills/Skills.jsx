import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiAmazonwebservices,
  SiGithubactions,
  SiOpenai,
} from "react-icons/si";
import {
  FaServer,
  FaBrain,
  FaRobot,
  FaCode,
  FaMicrochip,
  FaMobile,
  FaDatabase,
  FaLock,
  FaKey,
  FaCloud,
} from "react-icons/fa";
import skills, { services } from "../../data/skills";
import "./Skills.css";

/**
 * Skills & Services Section Component
 */
const Skills = () => {
  // Icon mapping
  const iconMap = {
    SiPython,
    FaServer,
    SiReact,
    SiJavascript,
    SiHtml5,
    FaMobile,
    SiPostgresql,
    SiMysql,
    FaDatabase,
    SiAmazonwebservices,
    SiDocker,
    SiGithubactions,
    SiGit,
    FaLock,
    FaKey,
    SiOpenai,
    FaBrain,
    FaRobot,
    FaCode,
    FaMicrochip,
    FaCloud,
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : <FaCode />;
  };

  return (
    <section className="skills-section section section-alt" id="skills">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Services</h2>
          <p className="section-subtitle">
            Expertise across modern technology stack
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid grid grid-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card card-glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-icon">{getIcon(service.icon)}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="tech-stack-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center">Technology Stack</h3>

          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="tech-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + categoryIndex * 0.1 }}
            >
              <h4 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <div className="tech-items">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="tech-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="tech-icon">{getIcon(skill.icon)}</div>
                    <span className="tech-name">{skill.name}</span>
                    <span className="tech-level">{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
