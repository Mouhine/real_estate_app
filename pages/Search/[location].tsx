import React, { useEffect, useState } from "react";
import { getPropertiestForSell } from "../../utils";
import { Hit } from "../../types";
import Card from "../../components/Card";
import Map from "../../components/Map";
import { useRouter } from "next/router";
import { getPropertiesByLocation } from "../../utils";
import { useSearchContext } from "../../context";
import Skelton from "../../components/Skelton";
import Filters from "../../components/Filters";
import { useSearch } from "../../utils";
const SearchPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState<Hit[] | []>([]);
  const SearchByFilter = useSearch();
  const { location } = router.query;
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
  useEffect(() => {
    setIsLoading(true);
    SearchByFilter(setProperties).then(() => setIsLoading(false));

    console.log(properties);
  }, [
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
    location,
    baths,
  ]);
  return (
    <div>
      <Filters />
      <section className="grid  grid-cols-7 gap-6 lg:w-[90%] mx-auto  mt-[20px]">
        <section className="col-span-4 lg:block hidden  rounded-lg overflow-hidden">
          <Map properties={properties} />
        </section>
        <section className="grid  min-[1024px]:grid-cols-1 min-[1280px]:grid-cols-2   lg:max-h-[90vh]  overflow-y-scroll grid-cols-1  gap-4 md:grid-cols-3 col-span-7 lg:col-span-3">
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((s, i) => {
                return <Skelton key={i} />;
              })
            : properties?.map((l, i) => {
                return <Card listing={l} key={i} />;
              })}

          {properties.length === 0 && "THER IS NO RESULT"}
        </section>
      </section>
    </div>
  );
};

export default SearchPage;
