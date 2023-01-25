import React from "react";
import QA from "./QA";

const AboutInfo = () => {
  return (
    <section className="col-span-2  px-4 lg:w-[90%] space-y-3">
      <p className="text-lg text-[#be8457]  ">Our Value</p>
      <h2 className="text-3xl font-bold text-[#1d3457]">
        Value we give to you{" "}
      </h2>
      <p className="text-sm  tracking-wide font-semibold text-[#8a8e96]">
        we always ready to help by providing the best service for you we believe
        a good place to live can make your life better
      </p>
      <QA />
    </section>
  );
};

export default AboutInfo;
