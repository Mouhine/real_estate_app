import React from "react";
import HeroInfo from "./HeroInfo";
import HeroImage from "./HeroImage";

const Intro_Section = () => {
  const SRC =
    "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg";
  return (
    <div className="w-full bg-[#101010]  lg:min-h-[80vh] pb-16 pt-[70px] ">
      <div className=" w-full lg:w-[75%] mx-auto px-4  grid grid-cols-1 gap-8 md:grid-cols-4  relative">
        <div className="h-[150px] max-w-[150px] hidden md:block rounded-full left-[230px] top-8 bg-[#e46a18] absolute"></div>
        <HeroInfo />
        <HeroImage src={SRC} />
      </div>
    </div>
  );
};

export default Intro_Section;
