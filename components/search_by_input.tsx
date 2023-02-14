import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiLocationMarker } from "react-icons/hi";
import { searchByLocation } from "../utils";
import { Hit2 } from "../types/autoComplete";
import Link from "next/link";
import { useSearchContext } from "../context";
const Search_by_input = () => {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState<Hit2[] | []>([]);
  const { locationData, setLocationData } = useSearchContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative  ">
      <input
        type="text"
        className="outline-none py-4 pl-14 w-[90%] text-xl rounded-lg shadow-md my-4 px-8 "
        placeholder="Search by location ..."
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          searchByLocation(setLocations, location);
          setIsOpen(true);
          if (!e.target.value) setIsOpen(false);
        }}
      />
      {isOpen && (
        <div className="absolute z-50 flex flex-col px-4 shadow space-y-1 w-full -bottom-[200px] max-h-[200px] overflow-y-scroll bg-white border rounded-lg ">
          {locations?.map((l, i) => {
            return (
              <h1
                className="py-1 font-semibold text-xl cursor-pointer"
                onClick={(e) => {
                  setLocationData({
                    name: l.name,
                    externalID: l.externalID,
                    geography: l.geography,
                  });
                  setLocation(l.name);
                  setIsOpen(false);
                }}
              >
                {l.name}
              </h1>
            );
          })}
        </div>
      )}
      <div className="absolute top-8 left-3 ">
        <HiLocationMarker size={26} />
      </div>
      <button className=" shadow-lg absolute px-6 mx-4  right-[10%] top-6 bg-[#3857d4] tracking-wide font-semibold border rounded  py-2 text-white ">
        <Link href={`/Search/${location}`}>search</Link>
      </button>
    </div>
  );
};

export default Search_by_input;
