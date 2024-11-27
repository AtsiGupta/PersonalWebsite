import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import HiddenPage from "./components/HiddenPage"; // Import the hidden page
import background from "./assets/background.jpg";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <div>
              <Nav />
              <div
                id="home"
                className="h-screen bg-cover bg-center text-white"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <header className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                  <h1 className="text-5xl font-bold uppercase tracking-widest">
                    Atsi Gupta
                  </h1>
                  <h2 className="text-3xl font-semibold mt-2">
                    Personal Website
                  </h2>
                  {/* Adjusted Majors Text */}
                  <p className="text-lg italic mt-4 text-center">
                    Computer Engineering and ILEE student{" "}
                    <span className="block md:inline">
                      at the University of Illinois Urbana-Champaign
                    </span>
                  </p>
                </header>
              </div>
              <Experience />
              <Projects />
              <Education />
              <Skills />
              <Resume />
              <ContactMe />
            </div>
          }
        />

        {/* Hidden Page */}
        <Route path="/sahej" element={<HiddenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
