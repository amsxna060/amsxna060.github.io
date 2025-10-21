import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import profile from "../../data/profile";
import "./Contact.css";

/**
 * Contact Section Component
 * Contact form with EmailJS integration
 */
const Contact = () => {
  const { email, phone, location, social } = profile;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "freelance",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // EmailJS configuration - Replace with your actual IDs
      // Get these from https://www.emailjs.com/
      const serviceID =
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateID =
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          to_name: "Amol Saxena",
        },
        publicKey
      );

      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: "",
        email: "",
        projectType: "freelance",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try emailing directly.",
      });
    }
  };

  return (
    <section className="contact-section section section-alt" id="contact">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Let's Build Something Amazing</h2>
          <p className="section-subtitle">
            Ready to bring your project to life? Get in touch!
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType">I'm interested in *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="freelance">Freelance Project</option>
                  <option value="fulltime">Full-time Position</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                />
              </div>

              {formStatus.error && (
                <div className="form-message error">{formStatus.error}</div>
              )}

              {formStatus.submitted && (
                <div className="form-message success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="info-card card-glass">
              <h3>Get In Touch</h3>
              <p>
                Feel free to reach out for collaborations, freelance projects,
                or just a friendly chat!
              </p>

              <div className="contact-methods">
                <a href={`mailto:${email}`} className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-content">
                    <span className="method-label">Email</span>
                    <span className="method-value">{email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="contact-method"
                >
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-content">
                    <span className="method-label">Phone</span>
                    <span className="method-value">{phone}</span>
                  </div>
                </a>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-content">
                    <span className="method-label">Location</span>
                    <span className="method-value">{location}</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="availability-card card-glass">
              <h4>Current Availability</h4>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new projects</span>
              </div>
              <p>Open to freelance work and full-time opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
