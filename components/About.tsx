import React from "react";
import HeroImage from "./HeroImage";
import AboutInfo from "./AboutInfo";

const About = () => {
  const SRC =
    "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg";
  return (
    <div className=" w-full  lg:w-[74%] mx-auto lg:h-[600px] place-items-center  grid grid-cols-1 gap-8 md:grid-cols-4  relative">
      <HeroImage src={SRC} />
      <AboutInfo />
    </div>
  );
};

export default About;
