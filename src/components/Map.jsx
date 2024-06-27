import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import DemoRest from "../assets/demo-restaurant.jpg";
import Rating from "./Rating";
import { FaLocationDot } from "react-icons/fa6";
import mapStyles from "./mapStyles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  type,
  restrooms,
}) => {
  //console.log("map", restrooms);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const Marker = ({ lat, lng, children }) => {
    return (
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20">
        {children}
      </div>
    );
  };

  return (
    <div className="h-[85vh] rounded-md border-5 border-black m-2">
      <GoogleMapReact
        //onChildClick={(child) => setChildClicked(child)}
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setBounds({
            ne: e.marginBounds.ne,
            nw: e.marginBounds.nw,
            se: e.marginBounds.se,
            sw: e.marginBounds.sw,
          });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      >
        {type === "toilets"
          ? restrooms
              ?.filter(
                (restroom) =>
                  restroom.latitude && restroom.longitude && restroom.name
              )
              .map((restroom, index) => {
                return (
                  <Marker
                    key={index}
                    lat={Number(restroom.latitude)}
                    lng={Number(restroom.longitude)}
                  >
                    <div
                      onMouseEnter={() => setHoveredMarker(index)}
                      onMouseLeave={() => setHoveredMarker(null)}
                    >
                      <FaLocationDot className="text-2xl font-bold text-blue-600 cursor-pointer" 
                      onClick={() => setChildClicked(index)}
                        />
                      {hoveredMarker === index && (
                        <div className="absolute bottom-full mb-2 w-[100px] shadow-md  backdrop-blur p-1 flex flex-col justify-center items-center font-semibold rounded-lg">
                          <p className="text-center">{restroom.name}</p>
                          <p className="">
                            {restroom.distance.toFixed(2)} miles
                          </p>
                        </div>
                      )}
                    </div>
                  </Marker>
                );
              })
          : places
              ?.filter(
                (place) =>
                  place.latitude &&
                  place.longitude &&
                  place.rating !== undefined &&
                  place.rating !== null
              )
              .map((place, index) => (
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20"
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  key={index}
                >
                  <div className="sm:hidden">
                    <FaLocationDot className="text-2xl font-bold text-blue-600" />
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
        {}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
