import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiIndeed } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="highlight">Neeraj Ghate</span>
        </h1>
        <p className="subtitle">Full Stack Engineer | Cloud | AI</p>
        <p className="description">
          Building scalable apps and intelligent systems with clean code and purpose.
        </p>

        <div className="hero-links">
          <a
            href="https://github.com/neerajghate"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/neeraj-ghate"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link linkedin"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.indeed.com/me/neerajghate"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <SiIndeed size={22} />
          </a>
          <a
            href="https://leetcode.com/u/neerajghate/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link leetcode"
          >
            <SiLeetcode size={22} />
          </a>
        </div>

        <div className="hero-actions">
          <a
            href="/Neeraj_Ghate_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button"
          >
            📄 Resume
          </a>
          <a
            href="https://calendly.com/neerajrghate/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button secondary"
          >
            📅 Book a Call
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src="/profile.jpg" alt="Neeraj Ghate" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
