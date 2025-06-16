import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Contact from "../layouts/Contact";
import Blog from "../layouts/Blog";
import Experience from "../layouts/Experience";
import Project from "../layouts/Project";
import Skill from "../layouts/Skill";
import About from "../layouts/About";
import Home from "../layouts/Home";

const Portfolio = () => {
  const { setActiveSection } = useContext(AppContext);

  // Smooth scroll ke section

  // Handle scroll untuk update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "blog",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle form submission

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skill />

      {/* Projects Section */}
      <Project />

      {/* Experience Section */}
      <Experience />

      {/* Blog Section */}
      {/* <Blog /> */}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
