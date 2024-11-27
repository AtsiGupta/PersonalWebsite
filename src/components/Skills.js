import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", stars: 5 },
        { name: "Java", stars: 5 },
        { name: "C/C++", stars: 3 },
        { name: "JavaScript", stars: 3 },
        { name: "HTML/5", stars: 4 },
        { name: "RISC-V", stars: 4 },
        // { name: "x86", stars: 3 },
      ],
    },
    {
      category: "Technologies",
      items: [
        { name: "React", stars: 5 },
        { name: "Node.js", stars: 5 },
        { name: "Git", stars: 4 },
        { name: "Linux", stars: 3 },
        { name: "Tailwind", stars: 5 },
        // { name: "AngularJS", stars: 3 },
        { name: "MATLAB", stars: 3 },
        // { name: "Arduino", stars: 2 },
      ],
    },
    // {
    //   category: "Database",
    //   items: [
    //     { name: "SQL", stars: 3 },
    //     // { name: "MongoDB", stars: 3 },
    //   ],
    // },
    // {
    //   category: "Frameworks",
    //   items: [
    //     { name: "Agile", stars: 4 },
    //     // { name: "Waterfall", stars: 4 },
    //   ],
    // },
    {
      category: "Design Tools",
      items: [
        { name: "Figma", stars: 5 },
        { name: "Sketch", stars: 5 },
        { name: "Adobe XD", stars: 5 },
      ],
    },
  ];

  return (
    <section id="skills" className="p-6 bg-gray-100 text-black">
      {/* Header spans the full width of the screen */}
      <h2 className="text-3xl font-bold mb-6 w-full text-left">Skills</h2>
      
      {/* Content constrained to 75% width */}
      <div className="mx-auto w-3/4">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{skillCategory.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategory.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group"
                >
                  <span className="text-gray-800 group-hover:font-bold">{skill.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, starIndex) => (
                      <i
                        key={starIndex}
                        className={`fa fa-star ${
                          starIndex < skill.stars
                            ? "text-black group-hover:text-yellow-500"
                            : "text-gray-300"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
