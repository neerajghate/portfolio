import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython,
  FaAws, FaGitAlt, FaDocker, FaJava, FaCloud, FaLinux
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = {
  "Programming Languages": [
    { name: "C", icon: <FaJs />, color: "#555555" },
    { name: "C++", icon: <FaJs />, color: "#00599C" },
    { name: "C#", icon: <FaJs />, color: "#68217A" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <FaJs />, color: "#007acc" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Azure", icon: <FaCloud />, color: "#008AD7" },
    { name: "Kubernetes", icon: <FaCloud />, color: "#326CE5" },
    { name: "Docker", icon: <FaDocker />, color: "#0db7ed" },
    { name: "Terraform", icon: <FaCloud />, color: "#623CE4" },
    { name: "Jenkins", icon: <FaCloud />, color: "#D24939" },
    { name: "Linux", icon: <FaLinux />, color: "#000000" },
    { name: "OpenShift", icon: <FaCloud />, color: "#EE0000" }
  ],
  "Data & ML": [
    { name: "Spark", icon: <FaCloud />, color: "#E25A1C" },
    { name: "Hadoop", icon: <FaCloud />, color: "#66CCFF" },
    { name: "Kafka", icon: <FaCloud />, color: "#231F20" },
    { name: "Airflow", icon: <FaCloud />, color: "#017CEE" },
    { name: "SQL/NoSQL", icon: <FaCloud />, color: "#336791" },
    { name: "MongoDB", icon: <FaCloud />, color: "#47A248" },
    { name: "Postgres", icon: <FaCloud />, color: "#336791" },
    { name: "TensorFlow", icon: <FaCloud />, color: "#FF6F00" },
    { name: "PyTorch", icon: <FaCloud />, color: "#EE4C2C" }
  ],
  "Frameworks & Tools": [
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Git", icon: <FaGitAlt />, color: "#F1502F" }
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
                  <span
                    className="skill-icon-link"
                    style={{ color: skill.color }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                  </span>
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
