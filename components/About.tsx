import React from "react";
import HeroImage from "./HeroImage";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <div className=" w-full  lg:w-[74%] mx-auto lg:h-[600px] place-items-center  grid grid-cols-1 gap-8 md:grid-cols-4  relative">
      <HeroImage src={"/bg2.jpg"} />
      <AboutInfo />
    </div>
  );
};

export default About;
