import React from "react";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import SkillDisplay from "../SkillDisplay/SkillDisplay";

const Home = () => {
  return (
    <div className="px-5 md:px-8 lg:px-16">
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};
export default Home;
