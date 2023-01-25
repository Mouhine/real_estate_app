import React from "react";
import axios from "axios";
import { Hit } from "../types";
import { Pokedex } from "../types/PropertyDetails";
import { Hit2 } from "../types/autoComplete";
import { useSearchContext } from "../context";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "58aa6e9f7amsh9f0f3298ec7dcc0p11011cjsne95c51281c66",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};
type setProperties = React.Dispatch<React.SetStateAction<[] | Hit[]>>;
export const getPropertiestForSell = async (setProperties: setProperties) => {
  try {
    const response = await fetch(
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&categoryExternalID=4",
      options
    );
    const data = await response.json();
    console.log(data);
    setProperties(data.hits);
  } catch (error) {
    console.log(error);
  }
};

export const getPropertiestForRent = async (setProperties: setProperties) => {
  try {
    const response = await fetch(
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",
      options
    );
    const data = await response.json();
    console.log(data);
    setProperties(data.hits);
  } catch (error) {
    console.log(error);
  }
};
type autoComplete = React.Dispatch<React.SetStateAction<[] | Hit2[]>>;
export const searchByLocation = async (
  setLocations: autoComplete,
  location: string
) => {
  try {
    const response = await fetch(
      `https://bayut.p.rapidapi.com/auto-complete?query=${location}&hitsPerPage=25&page=0&lang=en`,
      options
    );
    const data = await response.json();
    setLocations(data.hits);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const getPropertiesByLocation = async (
  setProperties: setProperties,
  id: string
) => {
  try {
    const response = await fetch(
      `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${id}&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`,
      options
    );
    const data = await response.json();
    console.log(data);
    setProperties(data.hits);
  } catch (error) {}
};

export const useSearch = () => {
  const {
    locationData,
    purpose,
    categorie,
    minArea,
    maxArea,
    minRentPrice,
    maxRentPrice,
    minSalePrice,
    maxSalePrice,
    beds,
    baths,
  } = useSearchContext();
  const options2 = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: locationData.externalID || "5002,6020",
      purpose: purpose || "for-rent",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: categorie || "4",
      priceMin: minRentPrice || minSalePrice || "12054",
      priceMax: maxRentPrice || maxSalePrice || "126484",
      areaMin: minArea || "50",
      areaMax: maxArea || "100",
      roomsMax: beds || "6",
      bathsMax: baths || "3",
    },
    headers: {
      "X-RapidAPI-Key": "58aa6e9f7amsh9f0f3298ec7dcc0p11011cjsne95c51281c66",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };
  const SearchByFilter = async (setProperties: setProperties) => {
    try {
      const response = await axios.request(options2);
      console.log(response);
      setProperties(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return SearchByFilter;
};

export const getPropertyDetails = async (
  id: string,
  setPropertyDetails: React.Dispatch<React.SetStateAction<Pokedex>>
) => {
  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/detail",
    params: { externalID: id },
    headers: {
      "X-RapidAPI-Key": "58aa6e9f7amsh9f0f3298ec7dcc0p11011cjsne95c51281c66",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  setPropertyDetails(response.data);
};
