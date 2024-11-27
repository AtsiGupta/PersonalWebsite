import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="p-10 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      {/* Consulting Experience */}
      <div className="card bg-white shadow-md mb-6">
        <div className="card-body">
          <h3 className="card-title text-2xl font-bold">Haylon Technologies</h3>
          <p className="italic text-gray-600">Software Engineering Intern</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Developed data-driven backend infrastructure to enhance financial
              models for battery performance.
            </li>
            <li>
              Integrated financial APIs to track chemical market trends, optimizing
              portfolio risk analysis.
            </li>
            <li>
              Achieved a 15% increase in production efficiency through
              cross-functional collaboration.
            </li>
          </ul>
          <p className="text-gray-500 mt-2">May 2024 – August 2024 | Edison, NJ</p>
        </div>
      </div>

      {/* UI/UX Experience */}
      <div className="card bg-white shadow-md mb-6">
        <div className="card-body">
          <h3 className="card-title text-2xl font-bold">Mirage</h3>
          <p className="italic text-gray-600">Founder</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Designed gamified interfaces to enhance user engagement for a
              chemistry lab application.
            </li>
            <li>
              Conducted user interviews and implemented feedback-driven UI/UX
              features.
            </li>
            <li>
              Built the backend infrastructure to support laboratory applications,
              including APIs and database management.
            </li>
          </ul>
          <p className="text-gray-500 mt-2">October 2023 – May 2024 | Urbana, IL</p>
        </div>
      </div>

      {/* Leadership Experience */}
      <div className="card bg-white shadow-md mb-6">
        <div className="card-body">
          <h3 className="card-title text-2xl font-bold">School Simplified</h3>
          <p className="italic text-gray-600">Chief Academic Officer, Board of Directors</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Designed algorithms for teacher-student pairing, improving academic
              outcomes for over 700 students.
            </li>
            <li>
              Developed a moderation bot to streamline operations for a 300-staff
              organization.
            </li>
            <li>
              Secured $10,000+ in grants and donations through effective fundraising
              initiatives.
            </li>
          </ul>
          <p className="text-gray-500 mt-2">September 2020 – 2022 | New York</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
