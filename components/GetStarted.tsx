import React from "react";

const GetStarted = () => {
  return (
    <div className="w-full  md:w-[80%] mx-auto bg-[#5c77e2] my-4 p-6 h-[350px] rounded-lg">
      <div className="w-full h-full flex flex-col space-y-6 items-center bg-[#3e5dda] rounded-lg justify-center ">
        <h1 className="text-white text-center text-5xl font-semibold  rounded-lg">
          Get started with Homyz
        </h1>
        <p className="text-lg font-semibold text-[#7c98ff] md:w-[50%] mx-auto text-center">
          supscribe and find super attractive price quotes from us Find your
          residence soon
        </p>
        <button className="border  borde-white bg-[#5c75d9] text-white font-semibold text-lg px-6 py-2 rounded-lg ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
