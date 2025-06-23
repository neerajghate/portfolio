import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython,
  FaAws, FaGitAlt, FaDocker, FaJava
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact />, link: "https://react.dev", color: "#61DBFB" },
    { name: "HTML", icon: <FaHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E" }
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/", color: "#339933" },
    { name: "Python", icon: <FaPython />, link: "https://python.org", color: "#3776AB" },
    { name: "Java", icon: <FaJava />, link: "https://www.java.com", color: "#f89820" }
  ],
  Cloud: [
    { name: "AWS", icon: <FaAws />, link: "https://aws.amazon.com", color: "#FF9900" },
    { name: "Docker", icon: <FaDocker />, link: "https://docker.com", color: "#0db7ed" }
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt />, link: "https://git-scm.com", color: "#F1502F" }
  ]
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="skill-title">{category}</h3>
            <ul className="skill-list">
              {skillList.map((skill, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={index}
                  className="skill-item"
                >
                  {skill.icon && (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      className="skill-icon-link"
                      style={{ color: skill.color }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                    </a>
                  )}
                  <span className="skill-name">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
