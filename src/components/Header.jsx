import React from "react";
import Logo from "../assets/favicon.ico";
import { FaSearchLocation } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" flex flex-col xs:flex-row items-center justify-center xs:justify-between w-full xs:px-2 bg-blue-700 text-gray-200 bg-opacity-95">
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
      <div className="w-full flex items-center justify-center sm:justify-end">
        {/* <p className="hidden sm:block sm:text-lg">Explore new places </p> */}
        <div className="flex flex-row items-center sm:gap-1  rounded-full pl-1 bg-blue-500 border w-[200px] sm:w-[300px]">
          <button type="button">
            <CiSearch className="text-2xl " />
          </button>

          <input
            type="text"
            placeholder="Search"
            className="rounded-full p-1 focus:outline-none  bg-transparent placeholder-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
