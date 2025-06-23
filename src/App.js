// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";

import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

function App() {
  /** ----------------------------- state ----------------------------- **/
  const [openExperience, setOpenExperience] = useState(null);
  const [openEducation, setOpenEducation] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  /** --------------------------- side-effects --------------------------- **/
  useEffect(() => {
    fetch("https://api.github.com/users/neerajghate/repos")
      .then((res) => res.json())
      .then(setRepositories)
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  /** ---------------------------- callbacks ---------------------------- **/
  const toggleExperience = (idx) =>
    setOpenExperience((prev) => (prev === idx ? null : idx));

  const toggleEducation = (idx) =>
    setOpenEducation((prev) => (prev === idx ? null : idx));

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  /** ---------------------------- mock data ---------------------------- **/
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
        "Conducted code reviews with Git and Jenkins, reducing bugs by 40%."
      ]
    },
    {
      company: "Clairvoyant",
      logo: "/clairvoyant-logo.png",
      role: "Data Engineering Intern",
      duration: "Aug 2021 – Sep 2021",
      description: [
        "Processed large datasets using Hadoop and Spark, improving decision-making by 20%.",
        "Developed Python and Scala scripts for data cleaning and reporting.",
        "Built and optimized data pipelines, enhancing processing efficiency."
      ]
    },
    {
      company: "Edify Accelerators",
      logo: "/edify-logo.png",
      role: "Web Development Intern",
      duration: "Jun 2020 – Oct 2020",
      description: [
        "Designed and developed responsive web apps with ReactJS, HTML, CSS.",
        "Integrated Firebase backend for realtime updates and auth.",
        "Created proof-of-concept company site; ran usability testing to polish UX."
      ]
    }
  ];

  const education = [
    {
      degree: "M.Sc. Computer Science",
      institution: "University of Colorado Denver, USA",
      logo: "/ucdenver-logo.png",
      duration: "May 2025 (expected)",
      description: [
        "Specialised coursework: Algorithms, Operating Systems, Deep Learning, Generative AI"
      ]
    },
    {
      degree: "B.E. Electronics & Telecommunications",
      institution: "Savitribai Phule Pune University, India",
      logo: "/sppu-logo.png",
      duration: "Aug 2022",
      description: [
        "Focused on Signal Processing, Communication Systems, Embedded Systems"
      ]
    }
  ];

  const skills = [
    "React", "Next.js", "AWS", "TypeScript", "Machine Learning",
    "Artificial Intelligence", "Generative AI", "Computer Vision",
    "Node.js", "Python", "Jenkins", "Google Cloud Platform",
    "Postgres", "Docker", "Angular", "Java", "C++"
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      link: "https://www.credly.com/badges/d11f8601-3903-492f-b59e-621506e4d733/public_url",
      logo: "/aws.png"
    }
  ];

  /** ----------------------------- render ------------------------------ **/
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Topbar onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience
          experiences={experiences}
          openIndex={openExperience}
          onToggle={toggleExperience}
        />
      </section>

      <section id="education">
        <Education
          education={education}
          openIndex={openEducation}
          onToggle={toggleEducation}
        />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      <section id="projects">
        <Projects repositories={repositories} />
      </section>

      <section id="certifications">
        <Certifications certifications={certifications} />
      </section>
    </div>
  );
}

export default App;
