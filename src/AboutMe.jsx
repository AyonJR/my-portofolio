
import AnimatedText from "./components/ui/AnimatedText";


const AboutMe = () => {
  const words = `TURNING CONCEPTS INTO REALITY WITH INNOVATIVE DESIGNS, USER-CENTRIC INTERFACES, AND POWERFUL FUNCTIONALITY THAT ELEVATE YOUR DIGITAL PRESENCE.`;

  return (
    <div id="aboutme" className="text-white">
      <div className="container mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <p className="font-semibold tracking-widest text-sm uppercase transform transition-transform duration-300 ease-in-out hover:translate-x-2">
              About Me
            </p>
          </div>
          <div className="w-full md:w-4/5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold animate-pulse mb-4 bg-clip-text">
              {/* Animated Text Using TextGenerateEffect */}
              <AnimatedText words={words} />
            </h2>
            <div className="flex flex-col md:flex-row gap-5 mt-6 font-normal text-lg text-gray-300">
              <p className="transform transition-transform duration-500 ease-in-out hover:translate-x-2 hover:text-gray-100">
                Hello! I'm Abdul Baset, a passionate Front-End Developer with a
                flair for Tailwind CSS and React JS. I specialize in turning
                creative ideas into captivating digital experiences. Currently,
                I’m broadening my expertise with the MERN stack (MongoDB,
                Express.js, React JS, Node.js), always driven to stay at the
                forefront of web development and continuously enhance my skills.
              </p>
              <p className="transform transition-transform duration-500 ease-in-out hover:translate-x-2 hover:text-gray-100">
                When I’m not immersed in coding, I enjoy exploring emerging
                technologies, contributing to open-source projects, and sharing
                knowledge with the developer community. Let’s work together to
                transform your vision into reality and create something
                extraordinary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
