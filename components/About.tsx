import React from "react";
import HeroImage from "./HeroImage";
import AboutInfo from "./AboutInfo";

const About = () => {
  const SRC =
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <div className=" w-full  lg:w-[74%] mx-auto lg:h-[600px] place-items-center  grid grid-cols-1 gap-8 md:grid-cols-4  relative">
      <HeroImage src={SRC} />
      <AboutInfo />
    </div>
  );
};

export default About;
