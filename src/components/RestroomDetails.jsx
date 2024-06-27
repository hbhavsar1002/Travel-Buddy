import React from "react";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { FaDirections } from "react-icons/fa";

const RestroomDetails = ({ restroom }) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div
      className="mb-5 shadow-xl shadow-gray-500/50 rounded-lg"
    >
      <div className="p-2">
        <p className="mb-2 text-lg">{restroom.name}</p>
        {restroom?.street && (
          <div className="my-3 flex items-center justify-between">
            <FaMapLocationDot className="text-blue-600" />
            <span className="text-sm">
              {restroom.street ? `${restroom.street}` : ""}
              {restroom.city ? `, ${restroom.city}` : ""}
            </span>
          </div>
        )}
        {restroom?.directions && (
          <div className="my-3 flex flex-row items-start justify-between gap-5">
            <div>
              <FaDirections className="text-blue-600 text-md" />
            </div>
            <div>
              <p className="text-sm sm:text-xs md:text-sm text-justify">
                {capitalizeFirstLetter(restroom.directions)}
              </p>
            </div>
          </div>
        )}
        {restroom?.unisex && (
          <div className="my-3 flex items-center justify-between text-sm">
            <p className="text-sm">Unisex</p>
            <p className="text-sm capitalize">
              {restroom.unisex ? "true" : "false"}
            </p>
          </div>
        )}
       
        {restroom?.unisex && (
          <div className="my-3 flex items-center justify-between text-sm">
            <p className="text-sm sm:text-xs md:text-sm">Distance from location</p>
            <p className="text-sm sm:text-xs md:text-sm">{restroom.distance.toFixed(2)} miles</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestroomDetails;
