import React from "react";
import HeroInfo from "./HeroInfo";
import HeroImage from "./HeroImage";

const Intro_Section = () => {
  const SRC =
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80";
  return (
    <div className="w-full bg-[#101010]  lg:min-h-[80vh] pb-16 pt-[70px] ">
      <div className=" w-full lg:w-[75%] mx-auto px-4  grid grid-cols-1 gap-8 md:grid-cols-4  relative">
        <div className="h-[150px] max-w-[150px] hidden md:block rounded-full left-[230px] top-8 bg-[#e46a18] absolute"></div>
        <HeroInfo />
        <HeroImage src={"/bg.jpg"} />
      </div>
    </div>
  );
};

export default Intro_Section;
