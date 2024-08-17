import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="container mx-auto flex justify-between items-center p-4 md:flex hidden">
        <ul className="flex text-xl font-semibold space-x-8 text-white">
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#education">EDUCATION</a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#contact">HIRE ME</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50 p-4 flex justify-between items-center">
        <div className="text-white text-3xl">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-center text-xl font-semibold text-white space-y-6 pt-16">
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#aboutme" className="block" onClick={toggleMenu}>
              ABOUT ME
            </a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#skills" className="block" onClick={toggleMenu}>
              SKILLS
            </a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#projects" className="block" onClick={toggleMenu}>
              PROJECTS
            </a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#education" className="block" onClick={toggleMenu}>
              EDUCATION
            </a>
          </li>
          <li className="transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <a href="#contact" className="block" onClick={toggleMenu}>
              HIRE ME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
