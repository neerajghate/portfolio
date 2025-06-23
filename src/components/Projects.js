import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = ({ repositories = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepos = repositories.filter((repo) =>
    (repo.name + " " + (repo.description || ""))
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <input
        type="text"
        className="project-search"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="projects-grid">
        {filteredRepos.map((repo) => (
          <motion.div
            key={repo.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="project-name">{repo.name}</h3>
            <p className="project-desc">
              {repo.description || "No description provided."}
            </p>

            {/* Topics */}
            {repo.topics?.length > 0 && (
              <div className="project-topics">
                {repo.topics.map((topic, idx) => (
                  <span key={idx} className="topic-badge">
                    #{topic}
                  </span>
                ))}
              </div>
            )}

            <div className="project-footer">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-repo-btn"
              >
                <FaGithub className="github-icon" /> View on GitHub
              </a>
              {repo.language && (
                <span className="project-language">{repo.language}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
