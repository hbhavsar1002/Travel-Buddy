import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { IoLocationOutline } from "react-icons/io5";
import DemoRest from "../assets/demo-restaurant.jpg";
import Rating from "./Rating";
import { FaLocationDot } from "react-icons/fa6";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  //console.log("map", places);

  return (
    <div className="h-[85vh] w-full border">
      <GoogleMapReact
        //onChildClick={(child) => setChildClicked(child)} 
        bootstrapURLKeys={{ key: "AIzaSyD0T6DEI3cHv4dCkl_W5LJkdKm7bR8MFHc" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          setBounds({
            ne: e.bounds.ne,
            nw: e.bounds.nw,
            se: e.bounds.se,
            sw: e.bounds.sw,
          });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      >
        {places
          ?.filter((place) => place.latitude && place.longitude && place.rating !== undefined && place.rating !== null)
          .map((place, index) => (
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}
            >
              <div className="sm:hidden">
                <IoLocationOutline className="text-2xl font-bold" />
              </div>
              <div className="hidden sm:block">
                <div className="shadow-md bg-white w-[100px] justify-center flex-col flex p-1">
                  <p className="mb-3">{place.name}</p>
                  <img
                    className="cursor-pointer h-20 object-cover rounded-md"
                    src={
                      place.photo?.images?.small?.url
                        ? place.photo.images.large.url
                        : DemoRest
                    }
                    alt={place.name}
                    onClick={() => setChildClicked(index)}
                  />
                  <Rating rating={place.rating} />
                </div>
              </div>
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
