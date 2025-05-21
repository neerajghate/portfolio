import React, { useState, useEffect } from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaChevronRight, FaChevronDown } from "react-icons/fa";
import Chatbot from "./Chatbot";

function App() {
  const [openExperience, setOpenExperience] = useState(null);
  const [openEducation, setOpenEducation] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // Fetch public repositories from GitHub API
    fetch("https://api.github.com/users/neerajghate/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      })
      .catch((error) => console.error("Error fetching repositories:", error));
  }, []);

  const toggleExperience = (index) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  const toggleEducation = (index) => {
    setOpenEducation(openEducation === index ? null : index);
  };

  const experiences = [
    {
      company: "RealThingks GmbH",
      logo: "/realthingks-logo.png",
      role: "Software Developer",
      duration: "July 2022 – July 2023",
      description: [
        "Automated testing processes with Python, cutting task time from 100+ hours to minutes.",
        "Delivered monthly technical presentations to a 50-person team.",
        "Led CI/CD integration with Docker and Kubernetes, speeding up release cycles by 25%.",
        "Conducted code reviews with Git and Jenkins, reducing bugs by 40%.",
      ],
    },
    {
      company: "Clairvoyant",
      logo: "/clairvoyant-logo.png",
      role: "Data Engineering Intern",
      duration: "August 2021 – September 2021",
      description: [
        "Processed large datasets using Hadoop and Spark, improving business decision-making by 20%.",
        "Developed Python and Scala scripts for data cleaning and reporting.",
        "Built and optimized data pipelines, enhancing data processing efficiency.",
      ],
    },
    {
      company: "Edify Accelerators",
      logo: "/edify-logo.png",
      role: "Web Development Intern",
      duration: "June 2020 – October 2020",
      description: [
        "Designed and developed responsive web applications using ReactJS, HTML, and CSS.",
        "Managed version control using Git and integrated frontend with Firebase backend for real-time updates.",
        "Created and maintained a proof-of-concept company website using ReactJS and Firebase.",
        "Conducted usability testing to enhance functionality and improve the overall user experience.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Colorado Denver, USA",
      logo: "/ucdenver-logo.png",
      duration: "May 2025",
      description: ["Specialized coursework in Algorithms, Operating Systems, Deep Learning, Generative AI."],
    },
    {
      degree: "Bachelor of Engineering in Electronics & Telecommunications",
      institution: "Savitribai Phule Pune University, India",
      logo: "/sppu-logo.png",
      duration: "August 2022",
      description: ["Focused on Signal Processing, Communication Systems, Embedded Systems."],
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "AWS",
    "TypeScript",
    "Machine Learning",
    "Artificial Intelligence",
    "Generative AI",
    "Computer Vision",
    "Node.js",
    "Python",
    "Jenkins",
    "Google Cloud Platform",
    "Postgres",
    "Docker",
    "Angular",
    "Java",
    "C++",
  ];

  const certifications = [
    "Front End Web Development with React – The Hong Kong University of Science and Technology",
    "Programming Foundations with JavaScript, HTML, and CSS – Duke University",
    "Neural Networks and Deep Learning - DeepLearning.AI",
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm Neeraj</h1>
          <p>
            Welcome to my profile! I am a passionate <strong>Software Engineer</strong> and <strong>AI Enthusiast</strong> dedicated to building innovative
            solutions and creating impactful products. Let’s explore my journey together!
          </p>
          <div className="hero-links">
            <a href="https://github.com/neerajghate" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/neeraj-ghate" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <img src="/p.jpg" alt="Profile" className="hero-image" />
      </header>

      {/* About Section */}
      <section className="container">
        <h2 className="section-header">About Me</h2>
        <p className="about-text">
          I am a dedicated and detail-oriented <strong>Software Engineer</strong> with a passion for creating scalable web applications, developing
          cutting-edge AI solutions, and crafting seamless user experiences. My expertise lies in <strong>cloud computing</strong>, <strong>generative AI</strong>, and <strong>problem-solving</strong> for real-world challenges.
        </p>
        <p className="about-text">
          I thrive in collaborative environments, continuously learning and contributing to impactful projects. My journey as a <strong>technology
            enthusiast</strong> fuels my commitment to innovation and my drive to build solutions that make a difference.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="container">
        <h2 className="section-header">Work Experience</h2>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header" onClick={() => toggleExperience(index)}>
                <img src={experience.logo} alt={`${experience.company} logo`} className="experience-logo" />
                <div className="experience-details-inline">
                  <h4 className="company-name">
                    {experience.company}
                    <span className="arrow-icon-wrapper">
                      {openExperience === index ? (
                        <FaChevronDown className="arrow-icon" size={16} />
                      ) : (
                        <FaChevronRight className="arrow-icon" size={16} />
                      )}
                    </span>
                  </h4>
                  <p className="position-title">{experience.role}</p>
                </div>
                <p className="experience-duration">{experience.duration}</p>
              </div>
              {openExperience === index && (
                <div className="experience-details-dropdown">
                  <ul>
                    {experience.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="container">
        <h2 className="section-header">Education</h2>
        <div className="experience-list">
          {education.map((edu, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header" onClick={() => toggleEducation(index)}>
                <img src={edu.logo} alt={`${edu.institution} logo`} className="experience-logo" />
                <div className="experience-details-inline">
                  <h4 className="company-name">
                    {edu.institution}
                    <span className="arrow-icon-wrapper">
                      {openEducation === index ? (
                        <FaChevronDown className="arrow-icon" size={16} />
                      ) : (
                        <FaChevronRight className="arrow-icon" size={16} />
                      )}
                    </span>
                  </h4>
                  <p className="position-title">{edu.degree}</p>
                </div>
                <p className="experience-duration">{edu.duration}</p>
              </div>
              {openEducation === index && (
                <div className="experience-details-dropdown">
                  <ul>
                    {edu.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container">
        <h2 className="section-header">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <button key={index} className="skill-button">
              {skill}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container">
        <h2 className="section-header">Projects</h2>
        <div className="projects-grid">
          {repositories.length > 0 ? (
            repositories.map((repo) => (
              <div key={repo.id} className="project-card">
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description available"}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-code-button"
                >
                  <FaGithub style={{ marginRight: "5px" }} />
                  View Code
                </a>
              </div>
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container">
        <h2 className="section-header">Certifications</h2>
        <div className="experience-list">
          {certifications.map((cert, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-details-inline">
                  <h4 className="company-name">{cert}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Chatbot />
      </section>
    </div>
  );
}

export default App;
