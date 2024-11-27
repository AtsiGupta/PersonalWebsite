import React from "react";
import { FaDownload } from "react-icons/fa"; // Import download icon

const Resume = () => {
  return (
    <section id="resume" className="p-10 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-8">Resume</h2>

      {/* Download Links */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a
          href="/Atsi_Gupta_Consultant_Resume (2) (1).pdf"
          download="Atsi_Gupta_Consultant_Resume.pdf"
          className="btn btn-outline flex items-center gap-2"
        >
          <FaDownload />
          Consultant Focused Resume
        </a>
        <a
          href="/Atsi_Gupta_UIUX_Resume (1).pdf"
          download="Atsi_Gupta_UIUX_Resume.pdf"
          className="btn btn-outline flex items-center gap-2"
        >
          <FaDownload />
          UI/UX Focused Resume
        </a>
        <a
          href="/Atsi_Gupta_resume (1).pdf"
          download="Atsi_Gupta_General_Resume.pdf"
          className="btn btn-outline flex items-center gap-2"
        >
          <FaDownload />
          General Resume
        </a>
      </div>

      {/* Timeline Layout */}
      <div className="flex flex-col gap-8">
        {/* Education */}
        <div className="flex">
          <div className="w-10 flex-shrink-0 flex justify-center">
            <div className="h-10 w-10 bg-primary text-white flex items-center justify-center rounded-full">
              🎓
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-xl">Education</h3>
            <p className="text-gray-700">
              <span className="font-semibold">
                University of Illinois at Urbana-Champaign
              </span>{" "}
              | Honors James Scholar (GPA: 3.86)
            </p>
            <p>BS in Computer Engineering & Innovation Leadership (Dec 2025)</p>
          </div>
        </div>

        {/* Experience - Haylon Technologies */}
        <div className="flex">
          <div className="w-10 flex-shrink-0 flex justify-center">
            <div className="h-10 w-10 bg-secondary text-white flex items-center justify-center rounded-full">
              💻
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-xl">Haylon Technologies</h3>
            <p className="italic">Software Engineering Intern (May 2024 – Aug 2024)</p>
            <ul className="list-disc ml-6">
              <li>
                Developed backend infrastructure that enhanced financial models
                for battery performance.
              </li>
              <li>
                Integrated financial APIs to track chemical market trends, optimizing
                risk analysis.
              </li>
              <li>
                Increased production efficiency by 15% through cross-functional
                collaboration.
              </li>
            </ul>
          </div>
        </div>

        {/* Experience - School Simplified */}
        <div className="flex">
          <div className="w-10 flex-shrink-0 flex justify-center">
            <div className="h-10 w-10 bg-info text-white flex items-center justify-center rounded-full">
              📚
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-xl">School Simplified</h3>
            <p className="italic">
              Chief Academic Officer, Board of Directors (Sep 2020 – 2022)
            </p>
            <ul className="list-disc ml-6">
              <li>
                Designed algorithms for teacher-student pairing, improving
                outcomes for 700+ students.
              </li>
              <li>
                Secured $10,000+ in grants and donations to support programs.
              </li>
              <li>
                Developed moderation tools for 300+ staff members.
              </li>
            </ul>
          </div>
        </div>

        {/* Experience - Mirage */}
        <div className="flex">
          <div className="w-10 flex-shrink-0 flex justify-center">
            <div className="h-10 w-10 bg-success text-white flex items-center justify-center rounded-full">
              🌟
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-xl">Mirage</h3>
            <p className="italic">Founder (Oct 2023 – May 2024)</p>
            <ul className="list-disc ml-6">
              <li>
                Conducted market research and financial forecasting, securing
                $50,000 in funding.
              </li>
              <li>
                Developed business strategies using data analytics.
              </li>
              <li>
                Created tools to support chemical lab operations.
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership */}
        <div className="flex">
          <div className="w-10 flex-shrink-0 flex justify-center">
            <div className="h-10 w-10 bg-warning text-white flex items-center justify-center rounded-full">
              🕺
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-xl">Leadership</h3>
            <p>
              <span className="font-semibold">UIUC Fizaa</span> | Captain (Jan 2023 – Present)
            </p>
            <ul className="list-disc ml-6">
              <li>
                Led fundraising efforts, raising $10,000+ through sponsorships and
                partnerships.
              </li>
              <li>
                Directed a team of 50+ members, managing finances and operations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
