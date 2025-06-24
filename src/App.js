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
import Footer from "./components/Footer";

function App() {
  const [openExperience, setOpenExperience] = useState(null);
  const [openEducation, setOpenEducation] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/neerajghate/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
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
      description: [
        "Specialized coursework in Algorithms, Operating Systems, Deep Learning, Generative AI.",
      ],
    },
    {
      degree: "Bachelor of Engineering in Electronics & Telecommunications",
      institution: "Savitribai Phule Pune University, India",
      logo: "/sppu-logo.png",
      duration: "August 2022",
      description: [
        "Focused on Signal Processing, Communication Systems, Embedded Systems.",
      ],
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
    {
      title: "AWS Certified Solutions Architect – Associate",
      link: "https://www.credly.com/badges/d11f8601-3903-492f-b59e-621506e4d733/public_url",
      logo: "/aws.png",
    },
  ];

  return (
    <>
      <div className="App">
        <Topbar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
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
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects repositories={repositories} /></section>
        <section id="certifications"><Certifications certifications={certifications} /></section>
      </div>
      <Footer />
    </>
  );
}

export default App;
