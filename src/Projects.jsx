import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "LabX",
    image: "https://i.ibb.co/wYGdRzt/Screenshot-2024-07-03-235021.png",
    description:
      "LabX is a centralized hub for educational resources, collaboration, and project management, tailored to the needs of students and educators in the scientific community.",
    technologies: [
      "Tailwind CSS",
      "Axios",
      "React",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Vercel",
      "JWT",
      "Framer Motion"
    ],
    liveLink: "https://final-assignment-12-ea1ec.web.app/",
    clientRepo: "https://github.com/AyonJR/Assignment-12-client",
    serverRepo: "https://github.com/AyonJR/Assignment-12-server",
  },
  {
    name: "TechQuery",
    image: "https://i.ibb.co/r7WSBJQ/Screenshot-2024-07-03-234612.png",
    description:
      "TechQuery is an innovative platform offering personalized technical solutions and efficient knowledge sharing. Utilizing advanced algorithms and user-generated content.",
    technologies: [
      "Tailwind CSS",
      "Axios",
      "React",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Vercel",
      "JWT",
    ],
    liveLink: "https://final-assignment-11.web.app/",
    clientRepo: "https://github.com/AyonJR/Assignment-11-Client",
    serverRepo: "https://github.com/AyonJR/Assignment-11-server",
  },
  {
    name: "Wonder Tour",
    image: "https://i.ibb.co/n1PCfBk/Screenshot-2024-07-03-234358.png",
    description:
      "Explore the world Manage your account for personalized access, discover tourist spots globally with filters, view destinations on an interactive map, leave reviews adn share experience with others",
    technologies: [
      "Tailwind CSS",
      "Axios",
      "React",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Vercel",
      "AOS"
    ],
    liveLink: "https://assignment-10-343b7.web.app/",
    clientRepo: "https://github.com/AyonJR/Assignment-10-client",
    serverRepo: "https://github.com/AyonJR/Assignment-10-server",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="text-white py-10">
      <div className="container mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <p className="font-semibold tracking-widest text-sm uppercase transform transition-transform duration-300 ease-in-out hover:translate-x-2">
              PROJECTS
            </p>
          </div>
          <div className="w-full md:w-4/5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text animate-pulse">
              DISCOVER THE PROJECTS BELOW TO SEE HOW I TRANSFORM CONCEPTS INTO REALITY WITH CREATIVE DESIGN AND DETAILED EXECUTION.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group  p-6 rounded-2xl shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl shadow-md group-hover:opacity-80 transition-opacity duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <span className="font-semibold text-gray-300">Technologies:</span>{" "}
                {project.technologies.join(", ")}
              </div>
              <div className="flex justify-between items-center mt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    Client
                  </a>
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    Server
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-gray-700 pointer-events-none transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
