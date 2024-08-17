import React from "react";

const Hero = () => {
  return (
    <div className="text-white py-20">
      {/* flex div */}
      <div className="flex flex-col md:flex-row items-center justify-between lg:gap-10 mx-8 md:mx-20">
        {/* text div */}
        <div className="flex-1 animate-fade-in-up text-center md:text-left">
          <p className="font-semibold tracking-widest text-sm">
            AVAILABLE FOR WORK
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 font-bold bg-clip-text animate-pulse tracking-tight leading-tight text-shadow">
            A WEB DEVELOPER
          </h2>
          <p className="mt-5 font-normal text-base sm:text-lg text-gray-300">
            My passion for art and technology inspired my journey into web
            design, where I combine creativity and technical skill to craft
            unique and engaging digital experiences.
          </p>

          <div className="lg:mt-10 mt-4">
            <a
              href="https://drive.google.com/file/d/1YMvpLq_ZLBfU5mlWmwEPYhGlAmbs5KLY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-4 border-white border-2 font-semibold rounded-full bg-black text-white transform transition duration-300 ease-in-out hover:bg-white hover:scale-110 bg-clip-text animate-pulse shadow-lg inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* photo div */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover rounded-full shadow-2xl transform transition duration-500 ease-in-out hover:scale-105"
            src="https://i.ibb.co/1610j74/IMG-20240817-165313.jpg"
            alt="Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
