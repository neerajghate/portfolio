import React, { useState } from "react";
import "./Topbar.css";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="topbar">
      <a href="#hero" className="logo">
        <img src="/NG.png" alt="Logo" className="logo-image" />
        <span className="logo-text">Neeraj Ghate</span>
      </a>

      <div className="right-side">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
