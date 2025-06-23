import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";      // feather-icons burger / close
import "./Topbar.css";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  // close the menu after a link click (handy on mobile)
  const handleLinkClick = () => setOpen(false);

  return (
    <header className="topbar">
      <div className="topbar-row">
        <a href="#hero" className="logo">Neeraj&nbsp;Ghate</a>

        {/* ── hamburger ────────────────────────────────────────── */}
        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* ── nav links ───────────────────────────────────────── */}
        <nav className={open ? "open" : ""}>
          {[
            ["about", "About"],
            ["experience", "Experience"],
            ["education", "Education"],
            ["skills", "Skills"],
            ["projects", "Projects"],
            ["certifications", "Certifications"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={handleLinkClick}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
