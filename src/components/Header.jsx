import React, { useState } from "react";
import Logo from "../assets/favicon.ico";
import {Autocomplete} from "@react-google-maps/api"
import { CiSearch } from "react-icons/ci";

const Header = ({setCoordinates}) => {
  const [autocomplete,setAutocomplete] = useState(null)
  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({lat,lng})

  }

  return (
    <div className=" flex flex-col xs:flex-row items-center justify-center xs:justify-between w-full xs:px-2 py-1 md:py-0 bg-blue-700 text-gray-200 bg-opacity-95">
      <header className="flex flex-row p-1 items-center gap-2 w-full justify-center xs:justify-start">
        <img
          src={Logo}
          alt="Travel Buddy logo"
          className="max-w-7 sm:max-w-10 "
        />
        <h1 className="font-bold text-lg xs:text-lg md:text-xl">
          Travel Buddy
        </h1>
      </header>
      <Autocomplete 
      // className="w-full flex items-center justify-center sm:justify-end"
      onLoad={onLoad} 
      onPlaceChanged={onPlaceChanged}
      >
        {/* <p className="hidden sm:block sm:text-lg">Explore new places </p> */}
        <div className="flex flex-row items-center sm:gap-1  rounded-full pl-1 bg-blue-500 border">
          <button type="button">
            <CiSearch className="text-xl " />
          </button>

          <input
            type="text"
            placeholder="Search"
            className="rounded-full p-1 focus:outline-none  bg-transparent placeholder-gray-200"
          />
        </div>
      </Autocomplete>
    </div>
  );
};

export default Header;
