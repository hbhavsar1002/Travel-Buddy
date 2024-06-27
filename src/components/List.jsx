import React, { useState, useEffect, createRef, useRef } from "react";
import { CircularProgress } from "@mui/material";
import PlaceDetails from "./PlaceDetails";
import RestroomDetails from "./RestroomDetails";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
  restrooms,
}) => {
  const refs = useRef([]);
  const refsRestroom = useRef([]);

  console.log(process.env.RAPIDAPI_KEY)

  useEffect(() => {
    if (places.length !== refs.current.length) {
      refs.current = Array(places.length)
        .fill()
        .map((_, index) => refs.current[index] ?? React.createRef());
    }
  }, [places]);

  useEffect(() => {
    console.log(restrooms)
    if (restrooms && restrooms?.length !== refsRestroom.current.length) {
      refsRestroom.current = Array(restrooms.length)
        .fill()
        .map((_, index) => refsRestroom.current[index] ?? React.createRef());
    }
  }, [restrooms]);

  useEffect(() => {
    if (
      childClicked !== null &&
      (refs.current[childClicked]?.current ||
        refsRestroom.current[childClicked]?.current)
    ) {
      console.log("list child clicked", childClicked);
      if (type === "toilets") {
        refsRestroom.current[childClicked].current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        refs.current[childClicked].current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [childClicked]);

  return (
    <div className="p-[10px] h-[80vh] sm:h-full flex flex-col scroll-smooth ">
      <h2 className="text-xl mb-3">
        Find restaurants, hotels, attractions & many more around you
      </h2>
      <form className="min-w-120 mb-6 flex flex-col xs:flex-row xs:items-center xs:gap-6 gap-2">
        <div className="max-w-[300px]">
          <label
            for="search_kind"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Type
          </label>
          <select
            id="options"
            value={type}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1  sm:p-2.5 max-w-[300px]"
            onChange={(e) => setType(e.target.value)}
          >
            <option disabled value="default">
              Choose a type
            </option>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
            <option value="toilets">Public Restrooms</option>
          </select>
        </div>
        {type !== "toilets" && (
          <div className="max-w-[300px]">
            <label
              for="search_kind"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Rating
            </label>
            <select
              id="options"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 sm:p-2.5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled value="default">
                Choose a rating
              </option>
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
              <option value={4.5}>Above 4.5</option>
            </select>
          </div>
        )}
      </form>
      {isLoading ? (
        <div className="h-[600px] flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : type === "toilets" ? (
        <div className="overflow-y-auto flex-grow p-2 ">
          {restrooms && Array.isArray(restrooms) && restrooms.length > 0 ? (
            restrooms.map((restroom, index) => (
              <div key={index} ref={refsRestroom.current[index]}>
                <RestroomDetails restroom={restroom} />
              </div>
            ))
          ) : (
            <p className="capitalize font-bold text-xl">
              No public restrooms found in the selected area.
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="overflow-y-auto flex-grow p-2 ">
            {places && Array.isArray(places) && places.length > 0 ? (
              places.map((place, index) =>
                place.rating !== undefined && place.rating !== null ? (
                  <div key={index} ref={refs.current[index]}>
                    <PlaceDetails place={place} />
                  </div>
                ) : null
              )
            ) : type === "default" ? (
              <p className="text-red-600 font-bold text-xl">
                Please select the type and rating.
              </p>
            ) : (
              <p className="capitalize font-bold text-xl">
                No {type} found in the selected area.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
