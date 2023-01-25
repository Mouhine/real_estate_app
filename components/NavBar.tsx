import Link from "next/link";
import React, { useState, useEffect, use } from "react";
import { GiHouseKeys } from "react-icons/gi";
import { MdSell } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { FaBars, FaRegNewspaper } from "react-icons/fa";
const NavBar = () => {
  const [isScroling, setIsScroling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 320 ? setIsScroling(true) : setIsScroling(false);
    });
  }, []);
  return (
    <header
      className={` flex  w-full md:w-[90%] top-0 rounded-md items-center px-6 justify-between py-3 mx-auto fixed left-[50%] -translate-x-1/2 ${
        isScroling ? "bg-white text-[#333] shadow rounded-md" : "bg-[#101010]"
      } transition-colors delay-150 z-20`}
    >
      <h1
        className={`text-bold text-3xl font-mono text-white ${
          isScroling && "text-[#333]"
        }`}
      >
        <Link href={"/"}>Homyze</Link>
      </h1>
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-6">
          <li className="text-gray-500 font-medium tracking-normal  ">
            <Link href={"/ForSell"}> For Sell</Link>
          </li>
          <li className="text-gray-500 font-medium tracking-normal ">
            <Link href={"/ForRent"}>For Rent</Link>
          </li>
          <li className="text-gray-500 font-medium tracking-normal ">
            <Link href={"/Search/search-page"}>Search</Link>
          </li>
          <button className="bg-[#3857d4] tracking-wide font-semibold border rounded px-2 py-2 text-white ">
            <Link href={"/Contact"}>Contact</Link>
          </button>
        </ul>
      </nav>
      {isOpen && (
        <nav className="block  absolute  top-12 right-0 w-1/2">
          <ul className="flex flex-col w-full p-4  bg-white border rounded shadow items-center space-y-6 ">
            <li className="text-gray-500 flex items-centerfont-medium tracking-normal  ">
              <MdSell className="mr-3" />
              <Link href={"/ForSell"}>For Sell</Link>
            </li>
            <li className="text-gray-500 flex items-center font-medium tracking-normal ">
              <GiHouseKeys className="mr-3" />{" "}
              <Link href={"/ForRent"}>For Rent</Link>
            </li>
            <li className="text-gray-500 flex items-center font-medium tracking-normal ">
              <HiSearch className="mr-3" />
              <Link href={"/Search/sdfsdfsdf"}>Search</Link>
            </li>

            <button className="bg-[#3857d4] tracking-wide font-semibold border rounded px-2 py-2 text-white ">
              <Link href={"/Contact"}>Contact</Link>
            </button>
          </ul>
        </nav>
      )}
      <button
        className="outline-none lg:hidden block "
        onClick={() => setIsOpen((v) => !v)}
      >
        <FaBars size={24} color={isScroling ? "black" : "white"} />
      </button>
    </header>
  );
};

export default NavBar;
