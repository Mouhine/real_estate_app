import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Statics = () => {
  return (
    <article className="flex items-center text-white  space-x-8">
      <section className="flex flex-col space-y-3">
        <div className="flex items-center">
          <span className="text-2xl font-semibold">9K</span>
          <AiOutlinePlus size={21} color="#cf6e29" />
        </div>
        <p className="w-1/2 text-[#626263] text-sm">Premium Product</p>
      </section>
      <section className="flex flex-col space-y-3">
        <div className="flex items-center">
          <span className="text-2xl font-semibold">19K</span>
          <AiOutlinePlus size={21} color="#cf6e29" />
        </div>
        <p className="w-1/2 text-[#626263] text-sm ">Happy customer</p>
      </section>
      <section className="flex flex-col space-y-3">
        <div className="flex items-center">
          <span className="text-2xl font-semibold">22K</span>
          <AiOutlinePlus size={21} color="#cf6e29" />
        </div>
        <p className="w-1/2 text-[#626263] text-sm ">Awards winning</p>
      </section>
    </article>
  );
};

export default Statics;
