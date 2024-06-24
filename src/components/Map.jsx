import React from "react";
import GoogleMapReact from "google-map-react";
import { IoLocationOutline } from "react-icons/io5";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  return (
    <div className="h-[85vh] w-full border">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD0T6DEI3cHv4dCkl_W5LJkdKm7bR8MFHc" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          setBounds({ ne: e.bounds.ne, nw: e.bounds.nw, se: e.bounds.se, sw: e.bounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        // onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
