import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendar, FaTrophy } from "react-icons/fa";
import experience, { education } from "../../data/experience";
import "./Experience.css";

/**
 * Experience Section Component
 */
const Experience = () => {
  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Professional Experience</h2>
          <p className="section-subtitle">
            Building innovative solutions at scale
          </p>
        </motion.div>

        <div className="experience-content">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="company-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="company-header">
                <div className="company-info">
                  <h3>{exp.company}</h3>
                  <div className="company-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </div>
                </div>
              </div>

              <div className="positions-timeline">
                {exp.positions.map((position, posIndex) => (
                  <motion.div
                    key={posIndex}
                    className="position-card card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + posIndex * 0.1 }}
                  >
                    <div className="position-header">
                      <div>
                        <h4>{position.title}</h4>
                        <div className="position-meta">
                          <span className="position-period">
                            <FaCalendar /> {position.period}
                          </span>
                          {position.current && (
                            <span className="badge">Current</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="position-description">
                      {position.description}
                    </p>

                    <div className="responsibilities">
                      <h5>Key Responsibilities:</h5>
                      <ul>
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="achievements">
                      <h5>
                        <FaTrophy /> Achievements:
                      </h5>
                      <div className="achievement-grid">
                        {position.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="achievement-item card-glass"
                          >
                            <span className="achievement-metric">
                              {achievement.metric}
                            </span>
                            <span className="achievement-desc">
                              {achievement.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="position-tech">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {position.techStack.map((tech, idx) => (
                          <span key={idx} className="tech-badge badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="gradient-text">Education</h3>
          <div className="education-card card">
            <div className="education-header">
              <h4>{education.degree}</h4>
              <span className="education-year">{education.graduation}</span>
            </div>
            <p className="education-institution">
              {education.institution}, {education.location}
            </p>
            <p className="education-cgpa">CGPA: {education.cgpa}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
