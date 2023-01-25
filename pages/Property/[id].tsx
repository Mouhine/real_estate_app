//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Pokedex } from "../../types/PropertyDetails";
import { getPropertyDetails } from "../../utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GoVerified } from "react-icons/go";
import "@splidejs/react-splide/css";
import { FaBath, FaBed } from "react-icons/fa";
import { Circles } from "react-loader-spinner";
const PropertyPage = () => {
  const COLOR = "#324fbf";
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({} as Pokedex);
  useEffect(() => {
    setIsLoading(true);
    getPropertyDetails(id as string, setPropertyDetails).then(() =>
      setIsLoading(false)
    );
  }, []);
  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed w-full h-full inset-0	 grid place-content-center bg-black opacity-80 z-[1000000] ">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <section className="mt-[80px] w-[90%] md:w-[80%] lg:w-[60%] h-[50vh] mx-auto ">
        <Splide>
          {propertyDetails?.photos?.map((img, i) => {
            return (
              <SplideSlide>
                <div className="rounded h-[50vh] rounded-lg">
                  <img
                    src={img.url}
                    alt=""
                    className="w-full h-full object-fill rounded-lg"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </section>
      <section className="py-4 w-[90%] md:w-[80%] lg:w-[60%]  mx-auto ">
        <h1 className="text-xl font-semibold">{propertyDetails?.title}</h1>
        <section className="flex flex-Wrap justify-between   w-[90%] md:w-[50%] lg:w-1/4 py-3 ">
          <div className="flex space-x-2">
            {propertyDetails?.baths} <FaBath className="ml-3" color={COLOR} />
          </div>{" "}
          |{" "}
          <div className="flex items-center ">
            {propertyDetails?.rooms} <FaBed className="ml-3" color={COLOR} />
          </div>{" "}
          |{" "}
          <div>
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(propertyDetails?.area)}{" "}
            sqft
          </div>
        </section>
        <section className=" flex  items-center space-x-2">
          <div className="w-10 h-10 bg-gray-400  border rounded-full">
            <img
              src={propertyDetails.agency?.logo?.url}
              className="rounded-full w-full h-full object-fill"
            ></img>
          </div>
          <h1 className="font-bold">{propertyDetails?.agency?.name}</h1>
          <div className="p-4">
            {propertyDetails?.isVerified && <GoVerified size={24} />}
          </div>
        </section>
        <h1 className="text-xl py-4 ">
          AED {propertyDetails?.price}{" "}
          {propertyDetails?.rentFrequency &&
            `/${propertyDetails?.rentFrequency}`}
        </h1>

        <h2 className="font-semibold text-xl py-3">Description</h2>
        <p>{propertyDetails?.description}</p>
      </section>

      <div className="flex flex-wrap py-8 w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-uppercase justify-between">
        <div className="p-3 w-[400px] border-b border-gray-100">
          <p>Type</p>
          <p className="font-bold">{propertyDetails.type}</p>
        </div>
        <div className="justify-between border-b border-gray-100 p-3">
          <p>Purpose</p>
          <p className="font-bold">{propertyDetails.purpose}</p>
        </div>
        {propertyDetails?.furnishingStatus && (
          <div className="p-3 w-[400px] border-b border-gray-100">
            <p>Furnishing Status</p>
            <p className="font-bold">{propertyDetails.furnishingStatus}</p>
          </div>
        )}
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        {propertyDetails?.amenities?.length && (
          <h1 className="text-2xl font-bold mt-5">Facilites:</h1>
        )}
        <div className="flex flex-wrap">
          {propertyDetails?.amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <p className="font-bold text-blue-400 text-lg p-2 bg-gray-200 m-1 rounded-md">
                {amenity.text}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
