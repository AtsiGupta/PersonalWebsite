import React, { useState } from "react";
import PersonalLogo from "../assets/PersonalLogo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === "home") {
      // Scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false); // Close the dropdown for mobile
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const offset = 70; // Adjust for navbar height
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
      setIsMenuOpen(false); // Close the dropdown for mobile
    }
  };

  return (
    <div className="navbar bg-gray-300 bg-opacity-90 text-black fixed top-0 w-full z-50 py-1">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <a
          className="cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={PersonalLogo}
            alt="Personal Logo"
            className="h-8 w-8 object-contain"
          />
        </a>
      </div>

      {/* Right Side: Links, Dropdown, and Icons */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Mobile Dropdown with Icons */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://www.linkedin.com/in/atsi-gupta-711b81200/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a
            href="https://github.com/AtsiGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </label>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-300 rounded-box w-52"
              >
                <li>
                  <a onClick={() => scrollToSection("experience")}>
                    Experience
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("projects")}>Projects</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("education")}>Education</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("skills")}>Skills</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("resume")}>Resume</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("contactme")}>
                    Contact Me
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Social Links on Desktop */}
        <div className="hidden md:flex gap-2">
          <a
            href="https://www.linkedin.com/in/atsi-gupta-711b81200/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a
            href="https://github.com/AtsiGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex menu menu-horizontal px-1 text-lg font-sans gap-4">
        <li>
          <a
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => scrollToSection("education")}
          >
            Education
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => scrollToSection("resume")}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => scrollToSection("contactme")}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
