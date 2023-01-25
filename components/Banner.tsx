import React from "react";
import Search_by_input from "./search_by_input";
interface BannerProps {
  title: string;
  img: string;
  purpose: string;
}
const Banner = ({ title, img, purpose }: BannerProps) => {
  return (
    <div className="  border relative  mx-auto  h-[500px] rounded-lg overflow-hidden mt-[80px]  ">
      <img src={img} alt="" className="w-full h-full object-fill rounded-lg " />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute p-2 lg:p-5 w-full lg:w-[80%] h-[400px] left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] ">
        <div className="md:w-[70%] space-y-4 ">
          <h1 className="md:text-[50px] lg:text-[60px] text-3xl  leading-tight tracking-wider	 font-bold text-white  ">
            Discover Most Suitable Property {" " + purpose}
          </h1>
          <p className=" lg:w-[60%] font-semibold tracking-wide font-sans text-[#aca7a7] ">
            Find a variaty of propreties that suits you very easily. forget all
            difficulties in finding a residence fro you
          </p>
        </div>
        <div className="lg:w-[50%]">
          <Search_by_input />
        </div>
      </div>
    </div>
  );
};

export default Banner;
