//@ts-nocheck
import Image from "next/image";
import React from "react";
import { Hit } from "../types";
import { FaBath, FaBed } from "react-icons/fa";
import Link from "next/link";
interface CardProps {
  listing: Hit;
}
const Card = ({ listing }: CardProps) => {
  const COLOR = "#324fbf";
  return (
    <Link href={`/Property/${listing.externalID}`}>
      <article className="  p-3 bg-white min-w-[250px] h-[350px] border relative rounded-lg shadow ">
        <section className="h-[200px] pb-2">
          <img
            src={listing.coverPhoto?.url}
            className="w-full rounded-lg h-[100%]"
          />
        </section>
        <section className="px-3">
          <h1 className="h-[9vh]">{listing.title.slice(0, 70) + "..."}</h1>
          {listing.purpose === "for-rent" ? (
            <p className="text-[#707eb3] font-sans font-bold ">
              {listing.price + " UED"} / mo
            </p>
          ) : (
            <p>{listing.price + " UED"}</p>
          )}
        </section>
        <section className="flex justify-between  px-6 py-3 absolute bottom-0 w-full right-2 ">
          <div className="flex space-x-2">
            {listing.baths} <FaBath className="ml-3" color={COLOR} />
          </div>{" "}
          |{" "}
          <div className="flex items-center ">
            {listing.rooms} <FaBed className="ml-3" color={COLOR} />
          </div>{" "}
          |{" "}
          <div>
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(listing.area)}{" "}
            sqft
          </div>
        </section>
      </article>
    </Link>
  );
};

export default Card;
