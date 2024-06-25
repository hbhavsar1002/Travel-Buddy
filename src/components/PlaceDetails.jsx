import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import DemoRest from "../assets/demo-restaurant.jpg";

const PlaceDetails = ({ place }) => {
  return (
    <div className=" border-black mb-5 shadow-xl shadow-gray-500/50 ">
      <div className="h-40 w-full overflow-clip rounded-t-lg">
        {place.photo?.images?.large?.url ? (
          <img
            src={place.photo.images.large.url}
            alt={place.name}
            className="object-cover w-full h-full"
          />
        ) : (
          <img
            src={DemoRest}
            alt="Demo Restaurant"
            className="object-cover w-full h-full"
          />
        )}
      </div>

      <div className="p-2 ">
        <p className="mb-2 text-lg">{place.name}</p>
        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs md:text-sm">Price</p>
          <p className="text-sm sm:text-xs md:text-sm">{place.price_level}</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs md:text-sm">Ranking</p>
          <p className="text-sm sm:text-xs md:text-sm">{place.ranking}</p>
        </div>
        {place?.awards?.map((award) => (
          <div className="flex justify-between items-center my-1">
            <img src={award.images.small} alt={award.display_name} />
            <p className="text-xs">{award.display_name}</p>
          </div>
        ))}
        {place?.cuisine && (
          <div className="flex flex-wrap gap-2 my-2">
            {place?.cuisine?.map(({ name }) => (
              <div
                key={name}
                className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 py-1 px-2 text-xs font-normal  text-gray-900 "
              >
                <span class="">{name}</span>
              </div>
            ))}
          </div>
        )}
        {place?.address && (
          <p className="my-3 flex items-center justify-between text-xs">
            <FaLocationDot />
            {place.address}
          </p>
        )}
        {place?.phone && (
          <p className="my-3 flex items-center justify-between text-xs">
            <FaPhoneAlt />
            {place.phone}
          </p>
        )}
        <div className="flex gap-2">
          {place?.website && (
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow text-xs"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </button>
          )}
          {place?.web_url && (
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow text-xs"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
