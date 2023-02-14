import React from "react";
import HeroImage from "./HeroImage";
import AboutInfo from "./AboutInfo";

const About = () => {
  const SRC =
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80";
  return (
    <div className=" w-full  lg:w-[74%] mx-auto lg:h-[600px] place-items-center  grid grid-cols-1 gap-8 md:grid-cols-4  relative">
      <HeroImage src={SRC} />
      <AboutInfo />
    </div>
  );
};

export default About;
