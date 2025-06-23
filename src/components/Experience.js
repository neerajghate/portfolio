import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = ({ experiences }) => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <motion.div
            className="experience-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img src={exp.logo} alt={exp.company} className="experience-logo" />
            <div className="experience-info">
              <h3 className="experience-role">{exp.role}</h3>
              <a
                href={exp.link || "#"}
                className="experience-company"
                target="_blank"
                rel="noreferrer"
              >
                {exp.company}
              </a>
              <p className="experience-duration">{exp.duration}</p>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
