import React from "react";
import { useSelector } from "react-redux";

import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Course from "./Course";
import Project from "./Project";
import Contact from "./Contact";
import ContactForm from "../../components/ContactForm";
import Shader from "../../components/Shader";

export default function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <div style={{position: "fixed" }}>
      <Shader/>
    </div>

      {portfolioData && (
        <div style={{ position: "relative" }} className="px-40 sm:px-5 py-10">
          <Intro />
          <About /> 
          <Project/> 
          <Experience/>  
          <Course/>
          <Contact/> 
          <ContactForm/> 
        </div>

      )}
      </div>

  );
}
