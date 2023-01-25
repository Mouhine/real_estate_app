//@ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "./Card";
import "@splidejs/react-splide/css";
import { Hit } from "../types";
import Skelton from "./Skelton";

const Slide = () => {
  const [properties, setProperties] = useState<Hit[] | []>([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "58aa6e9f7amsh9f0f3298ec7dcc0p11011cjsne95c51281c66",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getPro = async () => {
      const response = await fetch(
        "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",
        options
      );

      const data = await response.json();

      setProperties(data.hits);
      console.log(data);
      console.log(properties);
    };

    getPro();
  }, []);
  return (
    <div className=" py-12 mx-auto w-[80%]   ">
      <Splide
        options={{
          perPage: 4,
          gap: "3rem",
          breakpoints: {
            1280: {
              perPage: 4,
            },
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {properties?.length
          ? properties?.slice(0, 10)?.map((l, i) => {
              return (
                <SplideSlide>
                  <Card key={l.id} listing={l} />
                </SplideSlide>
              );
            })
          : [1, 2, 3, 4].map((s, i) => {
              return (
                <SplideSlide>
                  <Skelton key={i} />
                </SplideSlide>
              );
            })}
      </Splide>
    </div>
  );
};

export default Slide;
