import React from "react";

const Certifications = ({ certifications = [] }) => {
  return (
    <section className="container">
      <h2 className="section-header">Certifications</h2>
      <div className="experience-list">
        {certifications.map((cert, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              {cert.logo && (
                <img
                  src={cert.logo}
                  alt="AWS logo"
                  className="experience-logo"
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                />
              )}
              <div className="experience-details-inline">
                <h4 className="company-name">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0073e6", textDecoration: "none" }}
                  >
                    {cert.title}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
