import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import projects, { categories } from "../../data/projects";
import "./Projects.css";

/**
 * Projects Section Component
 * Showcases portfolio projects with filtering
 */
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <p className="section-subtitle">
            Building innovative solutions with modern technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Individual Project Card Component
 */
const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="project-card card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Project Header */}
      <div className="project-header">
        <div className="project-status">
          <span
            className={`status-badge ${
              project.status === "Active Development" ? "active" : "completed"
            }`}
          >
            {project.status}
          </span>
          <span className="project-category">{project.category}</span>
        </div>
        <div className="project-title-section">
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-duration">{project.duration}</p>
        </div>
      </div>

      {/* Project Description */}
      <p className="project-description">{project.description}</p>

      {/* Key Features */}
      <div className="project-features">
        <h4>Key Features:</h4>
        <ul>
          {project.features
            .slice(0, isExpanded ? project.features.length : 3)
            .map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
        </ul>
        {project.features.length > 3 && (
          <button
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded
              ? "Show Less"
              : `+${project.features.length - 3} More Features`}
          </button>
        )}
      </div>

      {/* Impact Metrics */}
      <div className="project-impact">
        <h4>Impact:</h4>
        <div className="impact-grid">
          {project.impact.map((item, idx) => (
            <div key={idx} className="impact-item">
              <FaArrowRight className="impact-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="project-tech">
        <h4>Technologies:</h4>
        <div className="tech-stack">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tech-badge badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="project-links">
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> View Code
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
