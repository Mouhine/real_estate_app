import React, { useEffect, useState } from "react";
import { Hit } from "../types";
import { getPropertiestForRent } from "../utils";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Skelton from "../components/Skelton";
const FroRent = () => {
  const img =
    "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg";
  const [properties, setProperties] = useState<Hit[] | []>([]);

  useEffect(() => {
    getPropertiestForRent(setProperties);
  }, []);
  return (
    <div className="lg:w-[80%] mx-auto mt-16 space-y-8">
      <Banner img={img} title="houses for rent" purpose="For Rent" />
      <section className="grid px-4 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-cols-1 ">
        {properties?.length
          ? properties?.map((l, i) => {
              return <Card listing={l} key={i} />;
            })
          : [1, 2, 3, 4].map((s, i) => {
              return <Skelton key={i} />;
            })}
      </section>
    </div>
  );
};

export default FroRent;
