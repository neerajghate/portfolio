// src/components/Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Neeraj Ghate. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/neerajghate" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/neeraj-ghate" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:neerajrghate@gmail.com">Email</a>
        <a href="tel:+17202263190">Call</a>
      </div>
    </footer>
  );
};

export default Footer;
