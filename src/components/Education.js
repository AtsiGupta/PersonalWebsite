import React from "react";
import UIUCImage from "../assets/UIUC.jpg";
import BRHSImage from "../assets/BRHS.jpg";

const Education = () => {
  return (
    <section id="education" className="p-10 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-8">Education</h2>

      {/* University of Illinois Entry */}
      <div className="card lg:card-side bg-white shadow-xl mb-8 h-auto">
        {/* Image Section */}
        <figure className="w-full lg:w-1/3 h-60 overflow-hidden flex items-center justify-center bg-gray-200">
          <img
            src={UIUCImage}
            alt="University of Illinois Urbana-Champaign"
            className="object-cover h-full w-full"
          />
        </figure>
        {/* Content Section */}
        <div className="card-body lg:h-60 overflow-y-auto">
          <h3 className="card-title text-2xl font-bold uppercase">
            University of Illinois Urbana-Champaign
          </h3>
          <p>
            <span className="font-semibold">August 2022 to May 2024:</span>{" "}
            <br /> B.S. in Computer Engineering & B.S. in Innovation Leadership
            Entrepreneurship in Engineering
          </p>
          <p>
            <span className="font-semibold">Relevant Coursework:</span>{" "}
            <br /> CE: Applied Parallel Programming, Data Structures, Operating
            Systems, Discrete Structures
            <br /> ILEE: High Venture Marketing, Startups: Incorporation,
            Funding, Contacts, & Intellectual Property
          </p>
          <div className="card-actions justify-start mt-4">
            <a
              href="https://illinois.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Link to Website
            </a>
          </div>
        </div>
      </div>

      {/* Bridgewater-Raritan High School Entry */}
      <div className="card lg:card-side bg-white shadow-xl h-auto">
        {/* Image Section */}
        <figure className="w-full lg:w-1/3 h-60 overflow-hidden flex items-center justify-center bg-gray-200">
          <img
            src={BRHSImage}
            alt="Bridgewater-Raritan High School"
            className="object-cover h-full w-full"
          />
        </figure>
        {/* Content Section */}
        <div className="card-body lg:h-60 overflow-y-auto">
          <h3 className="card-title text-2xl font-bold uppercase">
            Bridgewater-Raritan High School
          </h3>
          <p>
            <span className="font-semibold">September 2018 to June 2022:</span>{" "}
            High School Diploma
          </p>
          <p>
            <span className="font-semibold">Relevant Activities:</span>{" "}
            Cybersecurity Club President and Women in STEM President
          </p>
          <div className="card-actions justify-start mt-4">
            <a
              href="https://hs.brrsd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Link to Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
