import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AnimatedText from "./components/ui/AnimatedText";

const projects = [
  {
    name: "LabX",
    image: "https://i.ibb.co.com/3WTsx2G/Screenshot-2024-09-27-232813.png",
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
      "Framer Motion",
    ],
    liveLink: "https://final-assignment-12-ea1ec.web.app/",
    clientRepo: "https://github.com/AyonJR/Assignment-12-client",
    serverRepo: "https://github.com/AyonJR/Assignment-12-server",
  },
  {
    name: "Casa",
    image: "https://i.ibb.co.com/4YVpg8s/Screenshot-2024-09-27-233659.png",
    description:
      "Casa is a frontend-focused project with sleek, responsive designs for a smooth user experience. It also includes backend features like user authentication, property management, and wishlist functionality.",
    technologies: [
      "Tailwind CSS",
      "Axios",
      "React",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Vercel",
    ],
    liveLink: "https://real-state-e6d99.web.app/",
    clientRepo: "https://github.com/AyonJR/Casa",
    serverRepo: "https://github.com/AyonJR/real-state-server",
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
      "Explore the world Manage your account for personalized access, discover tourist spots globally with filters, view destinations on an interactive map, leave reviews and share experiences with others.",
    technologies: [
      "Tailwind CSS",
      "Axios",
      "React",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Vercel",
      "AOS",
    ],
    liveLink: "https://assignment-10-343b7.web.app/",
    clientRepo: "https://github.com/AyonJR/Assignment-10-client",
    serverRepo: "https://github.com/AyonJR/Assignment-10-server",
  },
  {
    name: "Gribbaple",
    image: "https://i.ibb.co.com/KwYFk5c/Screenshot-2024-09-27-234438.png",
    description:
      "GRIPPABLE is an innovative platform designed to provide users with a seamless experience in browsing and purchasing real estate properties online. The platform is built with a focus on efficiency, user-friendly navigation, and responsive design, ensuring it’s accessible on all devices.",
    technologies: [
      "Tailwind CSS",
      "Axios",
      "React",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Vercel",
      "AOS",
    ],
    liveLink: "https://job-task-dd5c5.web.app/",
    clientRepo: "https://github.com/AyonJR/Assignment10-JobTask",
    serverRepo: "https://github.com/AyonJR/Assignment10-JobTask-server",
  },
];

const Projects = () => {
  const words = `DISCOVER THE PROJECTS BELOW TO SEE HOW I TRANSFORM CONCEPTS INTO REALITY WITH CREATIVE DESIGN AND DETAILED EXECUTION.`;

  return (
    <div id="projects" className="py-16 bg-gray-100 dark:bg-transparent">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <p className="font-semibold text-white tracking-widest text-sm uppercase transform transition-transform duration-300 ease-in-out hover:translate-x-2">
              PROJECTS
            </p>
          </div>
          <div className="w-full md:w-4/5">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 bg-clip-text animate-pulse">
              <AnimatedText words={words} />
            </h1>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="w-[2px] hidden lg:block bg-white absolute inset-0 left-1/2 transform -translate-x-1/2"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-transparent shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'md:ml-12 lg:ml-24 xl:ml-48' : 'md:mr-12 lg:mr-24 xl:mr-48'} mx-auto max-w-4xl`}
              >
                <div className={`absolute w-4 h-4 bg-white rounded-full top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-left-2' : '-right-2'}`}></div>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="w-full mb-4 md:w-1/2 md:mb-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-60 object-cover rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm font-medium text-white "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-white text-black rounded-lg hover:bg-black hover:text-white transition-colors mb-4 md:mb-0"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                      <div className="flex items-center space-x-4">
                        <a
                          href={project.clientRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                        >
                          <FaGithub className="mr-2" />
                          Client
                        </a>
                        <a
                          href={project.serverRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                        >
                          <FaGithub className="mr-2" />
                          Server
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-gray-300 dark:border-gray-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
