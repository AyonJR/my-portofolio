import React from "react";
import { FaUserGraduate } from "react-icons/fa"; // Importing the bachelor icon

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "East Delta University",
    duration: "2019 - Present",
    description:
      "Currently pursuing a Bachelor's degree with a focus on web development, software engineering, and data structures. Expected to graduate in 2024.",
  },
  // Add more education entries as needed
];

const Education = () => {
  return (
    <div id="education" className="text-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <p className="font-semibold tracking-widest text-sm uppercase transform transition-transform duration-300 ease-in-out hover:translate-x-2">
              EDUCATION
            </p>
          </div>
          <div className="w-full md:w-4/5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text animate-pulse">
              LEARNING AND GROWING THROUGH EDUCATION AND EXPERIENCE.
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="relative group p-6  rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FaUserGraduate className="text-white text-3xl mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {education.degree}
                  </h3>
                  <p className="text-gray-400">{education.institution}</p>
                  <p className="text-gray-400">{education.duration}</p>
                </div>
              </div>
              <p className="text-gray-300">{education.description}</p>
              <div className="absolute inset-0 rounded-lg border-2 border-gray-400 pointer-events-none transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
