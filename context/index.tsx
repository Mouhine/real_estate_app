import React, { createContext, useContext, useState } from "react";
interface LocationType {
  name: string;
  externalID: string;
  geography: {
    lat: number;
    lng: number;
  };
}
interface SearchContext {
  locationData: LocationType;
  setLocationData: React.Dispatch<React.SetStateAction<LocationType>>;
  purpose: string;
  setPorpose: React.Dispatch<React.SetStateAction<string>>;
  categorie: string;
  setCategorie: React.Dispatch<React.SetStateAction<string>>;
  minRentPrice: string;
  setMinRentPrice: React.Dispatch<React.SetStateAction<string>>;
  maxRentPrice: string;
  setMaxRentPrice: React.Dispatch<React.SetStateAction<string>>;
  maxSalePrice: string;
  setMaxSalePrice: React.Dispatch<React.SetStateAction<string>>;
  minSalePrice: string;
  setMinSalePrice: React.Dispatch<React.SetStateAction<string>>;
  minArea: string;
  setMinArea: React.Dispatch<React.SetStateAction<string>>;
  maxArea: string;
  setMaxArea: React.Dispatch<React.SetStateAction<string>>;
  beds: string;
  setBeds: React.Dispatch<React.SetStateAction<string>>;
  baths: string;
  setBaths: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
}
const searchContext = createContext<SearchContext>({} as SearchContext);
export const useSearchContext = () => {
  return useContext(searchContext);
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [locationData, setLocationData] = useState<LocationType>({
    name: "",
    externalID: "",
    geography: {
      lat: 0,
      lng: 0,
    },
  });

  const [purpose, setPorpose] = useState("");
  const [categorie, setCategorie] = useState("");
  const [minRentPrice, setMinRentPrice] = useState("");
  const [maxRentPrice, setMaxRentPrice] = useState("");
  const [maxSalePrice, setMaxSalePrice] = useState("");
  const [minSalePrice, setMinSalePrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const reset = () => {
    setPorpose("");
    setCategorie("");
    setBaths("");
    setMinRentPrice("");
    setMaxRentPrice("");
    setMaxSalePrice("");
    setMinSalePrice("");
    setMaxArea("");
    setMinArea("");
  };
  const value = {
    locationData,
    setLocationData,
    purpose,
    setPorpose,
    categorie,
    setCategorie,
    minRentPrice,
    setMinRentPrice,
    maxRentPrice,
    setMaxRentPrice,
    maxSalePrice,
    setMaxSalePrice,
    minSalePrice,
    setMinSalePrice,
    minArea,
    setMinArea,
    maxArea,
    setMaxArea,
    beds,
    setBeds,
    baths,
    setBaths,
    reset,
  };

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
};
