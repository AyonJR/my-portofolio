import React from "react";
import AboutMe from "./AboutMe";
import "./App.css";
import Hero from "./Hero";
import Name from "./Name";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Design from "./Design";
import ImageParticles from "./ImageParticles";
import { ThreeDCardDemo } from "./Test";
import TimelineDemo from "./TimeLineDemo";

function App() {
  return (
    <>
      <div className=" custom-font relative">
        <div className="flex justify-center ">
          <div>
            <Design></Design>
          </div>
         
        </div>
        <div className="relative z-10">
          
          
          
          <div className="">
            <Navbar />
          </div>
          
          <div className="mt-12">
            <Hero />
          </div>
          <div className="mt-6">
            <AboutMe />
          </div>
          <div className="mt-24">
            <Skills />
          </div>
          <div className="mt-20">
            <Projects></Projects>
          </div>
          <div className="mt-10">
            <Education></Education>
          </div>
          <div>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
