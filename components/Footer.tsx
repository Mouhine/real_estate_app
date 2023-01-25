import React from "react";

const Footer = () => {
  return (
    <footer className="h-[300px] py-4 flex flex-col justify-between auto-rows-auto	 ">
      <section className=" px-4 lg:w-[80%] mx-auto grid  gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-7 py-6">
        <div className="lg:col-span-3  space-y-2">
          <h1 className="text-2xl font-bold ">Homyz</h1>
          <p className=" w-full lg:w-[40%] text-[#767c88] font-bold tracking-wide ">
            Our vision is to make all people the best place to live for them{" "}
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="font-bold text-xl mb-2 ">About</h2>
          <ul className="text-[#767c88] font-semibold space-y-1">
            <li>About Us </li>
            <li>Featurse </li>
            <li>New Blogs </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-bold text-xl mb-2 ">Company</h2>
          <ul className="text-[#767c88] font-semibold space-y-1">
            <li>How we work </li>
            <li>Capital </li>
            <li>Security </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-bold text-xl mb-2 ">Support</h2>
          <ul className="text-[#767c88] font-semibold space-y-1">
            <li>FAQs </li>
            <li>Support Center </li>
            <li>Contact Us </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-bold text-xl mb-2 ">Movement</h2>
          <ul className="text-[#767c88] font-semibold space-y-1">
            <li>What Homyz </li>
            <li>Support Us </li>
          </ul>
        </div>
      </section>
      <section className="lg:w-[80%] px-4 mx-auto flex flex-wrap justify-center items-center lg:justify-between text-[#767c88] font-semibold">
        <h2>@2021 Homyz.All rights reserved</h2>
        <div className="flex space-x-6 items-center">
          <p>Tearms&Agreements</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
