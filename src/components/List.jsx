import React, { useState, useEffect, createRef, useRef } from "react";
import { CircularProgress } from "@mui/material";
import Place from "./Place";
import PlaceDetails from "./PlaceDetails";

const List = ({ places, childClicked, isLoading }) => {
  const refs = useRef([]);
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    if (places.length !== refs.current.length) {
      refs.current = Array(places.length)
        .fill()
        .map((_, index) => refs.current[index] ?? React.createRef());
    }
  }, [places]);

  useEffect(() => {
    console.log(
      "refs when child clicked",
      refs.current[childClicked],
      childClicked,
      places
    );
    if (childClicked !== null && refs.current[childClicked]?.current) {
      console.log("list child clicked", childClicked);
      refs.current[childClicked].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [childClicked]);

  return (
    <div className="p-[10px] h-[80vh] sm:h-full flex flex-col scroll-smooth ">
      <h2 className="text-xl mb-2 xs:text-2xl">
        Restaurants, Hotels & Attractions around you
      </h2>
      {isLoading ? (
        <div className="h-[600px] flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <form className="min-w-120 mb-6 flex flex-col xs:flex-row xs:items-center xs:gap-6 gap-2">
            <div>
              <label
                for="search_kind"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Type
              </label>
              <select
                id="options"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1  sm:p-2.5 "
              >
                <option selected value="default">
                  Choose a type
                </option>
                <option value="rest">Resturants</option>
                <option value="hotels">Hotels</option>
                <option value="attr">Attractions</option>
              </select>
            </div>
            <div>
              <label
                for="search_kind"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Rating
              </label>
              <select
                id="options"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 sm:p-2.5"
              >
                <option selected value="default">
                  Choose a rating
                </option>
                <option value={0}>All</option>
                <option value={3}>Above 3.0</option>
                <option value={4}>Above 4.0</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </div>
          </form>
          <div className="overflow-y-auto flex-grow p-2 ">
            {places && Array.isArray(places) && places.length > 0
              ? places.map((place, index) =>
                  place.rating !== undefined && place.rating !== null ? (
                    <div key={index} ref={refs.current[index]}>
                      <PlaceDetails place={place} />
                    </div>
                  ) : null
                )
              : null}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
