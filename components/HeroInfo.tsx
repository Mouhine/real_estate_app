import React from "react";
import Search_by_input from "./search_by_input";
import Statics from "./Statics";

const HeroInfo = () => {
  return (
    <section className=" col-span-2 space-y-4 px-6 py-4 z-10">
      <div className="w-[80%] space-y-4">
        <h1 className="text-[50px]  leading-tight tracking-wider	 font-bold text-white  ">
          Discover Most Suitable Property in UAE
        </h1>
        <p className=" font-semibold tracking-wide font-sans text-[#686868] ">
          Find a variaty of propreties that suits you very easily. forget all
          difficulties in finding a residence fro you
        </p>
      </div>
      <Search_by_input />
      <Statics />
    </section>
  );
};

export default HeroInfo;
