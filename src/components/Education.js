// components/Education.js

import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="education-logo"
              />
              <div className="education-info">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.duration}</p>
              </div>
            </div>
            <ul className="education-details">
              {edu.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
