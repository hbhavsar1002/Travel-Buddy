import React from "react";
import { FaPhone } from "react-icons/fa";
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
      </div>
    </div>
  );
};

export default PlaceDetails;
