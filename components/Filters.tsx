import React, { useState } from "react";
import Search_by_input from "./search_by_input";
import { useSearchContext } from "../context";
import {
  Purpose,
  Categories,
  minRentPrice,
  maxRentPrice,
  minSalePrice,
  maxSalePrice,
  minArea,
  maxArea,
  Beds,
  Baths,
} from "../data";
import { BiDownArrowAlt } from "react-icons/bi";
const Filters = () => {
  const {
    categorie,
    purpose,
    setBaths,
    setBeds,
    setMaxArea,
    setMinArea,
    setMaxRentPrice,
    setMinRentPrice,
    setMaxSalePrice,
    setMinSalePrice,
    setCategorie,
    setPorpose,
    reset,
  } = useSearchContext();
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const SelectStyle =
    "border px-5 py-2 focus:border-blue-300 shadow outline-none cursor-pointer  rounded-lg";
  return (
    <section className=" max-w-5xl w-[90%] relative  lg:py-0 rounded-md px-4 mx-auto flex flex-col  space-x-6 items-center   gap-4 mt-[100px]">
      <div className=" w-full">
        <Search_by_input />
      </div>
      <div className="flex items-center justify-between flex-wrap w-full space-y-3 md:space-y-0 ">
        <div className="col-span-2 place-self-center ">
          <select
            name=""
            id=""
            className={SelectStyle}
            onChange={(e) => {
              if (e.target.value === "") return;
              setPorpose(e.target.value);
            }}
          >
            <option value="">Purpose</option>
            {Purpose.map((p, i) => {
              return (
                <option value={p.value} key={i}>
                  {p.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select
            name=""
            id=""
            className={SelectStyle}
            onChange={(e) => {
              if (e.target.value === "") return;
              setCategorie(e.target.value);
            }}
          >
            <option value="">Categorie</option>
            {Categories.map((p, i) => {
              return (
                <option value={p.value} key={i}>
                  {p.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="relative">
          <h1 className={SelectStyle} onClick={() => setIsPriceOpen((v) => !v)}>
            <div className="flex items-center">
              <span>Price</span> <BiDownArrowAlt className="ml-1" />
            </div>
          </h1>
          {isPriceOpen && (
            <div>
              {purpose === "for-rent" ? (
                <section className="flex z-20 items-center space-x-4 border absolute bg-white -bottom-[100px] px-4 py-4 border rounded-xl">
                  <select
                    name=""
                    id=""
                    className={SelectStyle}
                    onChange={(e) => {
                      if (e.target.value === "") return;
                      setMinRentPrice(e.target.value);
                    }}
                    onBlur={() => {
                      setIsPriceOpen(false);
                    }}
                  >
                    <option value="">Min Price</option>
                    {minRentPrice.map((m, i) => {
                      return <option value={m.value}>{m.tag}</option>;
                    })}
                  </select>
                  <select
                    name=""
                    id=""
                    className={SelectStyle}
                    onChange={(e) => {
                      if (e.target.value === "") return;
                      setMaxRentPrice(e.target.value);
                    }}
                  >
                    <option value="">Max Price</option>
                    {maxRentPrice.map((m, i) => {
                      return <option value={m.value}>{m.tag}</option>;
                    })}
                  </select>
                </section>
              ) : (
                <section className="flex z-20 items-center space-x-4 border absolute bg-white -bottom-[100px] px-4 py-4 border rounded-xl">
                  <select
                    name=""
                    id=""
                    className={SelectStyle}
                    onChange={(e) => {
                      if (e.target.value === "") return;
                      setMinSalePrice(e.target.value);
                    }}
                  >
                    <option value="">Min Price</option>
                    {minSalePrice.map((m, i) => {
                      return <option value={m.value}>{m.tag}</option>;
                    })}
                  </select>
                  <select
                    name=""
                    id=""
                    className={SelectStyle}
                    onChange={(e) => {
                      if (e.target.value === "") return;
                      setMaxSalePrice(e.target.value);
                    }}
                  >
                    <option value="">Max Price</option>

                    {maxSalePrice.map((m, i) => {
                      return <option value={m.value}>{m.tag}</option>;
                    })}
                  </select>
                </section>
              )}
            </div>
          )}
        </div>
        <div className="col-span-2  space-y-4 relative place-self-center">
          <h1 className={SelectStyle} onClick={() => setIsAreaOpen((v) => !v)}>
            <div className="flex items-center">
              <span>Area</span> <BiDownArrowAlt className="ml-1" />
            </div>
          </h1>
          {isAreaOpen && (
            <section className="z-20 flex items-center space-x-4 border absolute bg-white -bottom-[100px] px-4 py-4 border rounded-xl">
              <select
                name=""
                id=""
                className={SelectStyle}
                onChange={(e) => {
                  if (e.target.value === "") return;
                  setMinArea(e.target.value);
                }}
              >
                {minArea.map((m, i) => {
                  return <option value={m.value}>{m.name + " sqft"}</option>;
                })}
              </select>
              <select
                name=""
                id=""
                className={SelectStyle}
                onChange={(e) => {
                  if (e.target.value === "") return;
                  setMaxArea(e.target.value);
                }}
              >
                {maxArea.map((m, i) => {
                  return <option value={m.value}>{m.name + " sqft"}</option>;
                })}
              </select>
            </section>
          )}
        </div>
        <div className="col-span-2 place-self-center ">
          <select
            name=""
            id=""
            className={SelectStyle}
            onChange={(e) => {
              if (e.target.value === "") return;
              setBeds(e.target.value);
            }}
          >
            <option value="">Beds</option>
            {Beds.map((p, i) => {
              return (
                <option value={p} key={i}>
                  {p}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-span-2 place-self-center ">
          <select
            name=""
            id=""
            className={SelectStyle}
            onChange={(e) => {
              if (e.target.value === "") return;
              setBaths(e.target.value);
            }}
          >
            <option value="">Baths</option>
            {Baths.map((p, i) => {
              return (
                <option value={p} key={i}>
                  {p}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filters;
