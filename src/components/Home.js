import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          <span className="gradient-text">Hello, I'm Neeraj</span>
        </h1>
        <p className="hero-subtitle">
          A Software Engineer building cloud-native and full-stack applications with a focus on clean code and scalable architecture.
        </p>

        <motion.a
          href="#projects"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
