import React, { useEffect, useState } from "react";
import { Hit } from "../types";
import { getPropertiestForRent, getPropertiestForSell } from "../utils";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Skelton from "../components/Skelton";
const FroRent = () => {
  const img =
    "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg";
  const [properties, setProperties] = useState<Hit[] | []>([]);

  useEffect(() => {
    getPropertiestForSell(setProperties);
    console.log(properties);
  }, []);
  return (
    <div className="md:w-[80%] mx-auto mt-16 space-y-8">
      <Banner img={img} title="houses for Sell" purpose="For Sell" />
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
