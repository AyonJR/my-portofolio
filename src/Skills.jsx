import React from "react";
import { FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa"; // Import a server icon for Express.js

const skills = [
  {
    name: "Tailwind CSS",
    icon: <FaCss3Alt className="text-6xl text-blue-500" />,
    description: "A utility-first CSS framework for creating custom designs quickly.",
  },
  {
    name: "React JS",
    icon: <FaReact className="text-6xl text-blue-600" />,
    description: "A JavaScript library for building user interfaces with component-based architecture.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-6xl text-green-500" />,
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="text-6xl text-green-700" />,
    description: "A NoSQL database that provides high performance, high availability, and easy scalability.",
  },
  {
    name: "Express.js", // Add Express.js to the skills array
    icon: <FaServer className="text-6xl text-gray-600" />, // Use a relevant icon
    description: "A web application framework for Node.js that simplifies the development of server-side applications.",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="text-white py-8">
      <div className="container mx-auto px-8 md:px-20">
        <div className="text-center mb-16">
          <h2 className="font-semibold tracking-widest text-sm uppercase mb-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2">
            My Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2"> {/* Adjusted for 5 columns */}
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative border-gray-400 flex flex-col items-center p-6 bg-black bg-opacity-0 rounded-xl shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-80 group"
            >
              <div className="relative mb-6 transition-transform duration-500 ease-in-out transform group-hover:rotate-12 group-hover:scale-125">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white text-center transform transition-transform duration-500 ease-in-out group-hover:scale-110">
                {skill.name}
              </h3>
              <p className="text-center text-gray-300 text-sm px-2">
                {skill.description}
              </p>
              <div className="absolute inset-0 rounded-xl border-2 border-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-xl border-2 border-gray-400 transform scale-110 opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-125"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
