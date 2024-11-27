import React from "react";
import PersonalLogo from "../assets/PersonalLogo.png";

const Nav = ({ resetAnimation }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 70; // Adjust for navbar height
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="navbar bg-gray-300 bg-opacity-90 text-black fixed top-0 w-full z-50 py-1">
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1 text-lg font-sans">
          <li>
            <a
              className="cursor-pointer"
              onClick={() => {
                resetAnimation();
                scrollToSection("home");
              }}
            >
              <img
                src={PersonalLogo}
                alt="Personal Logo"
                className="h-8 w-8 object-contain"
              />
            </a>
          </li>
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
      <div className="flex-none flex gap-4">
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
  );
};

export default Nav;
