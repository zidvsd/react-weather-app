import React from "react";
import DarkMode from "./DarkMode";
import SearchBar from "./SearchBar";
import CurrentLocation from "./CurrentLocation";
const Navbar = () => {
  return (
    <div className="custom-container">
      <div className=" flex flex-row justify-between items-start">
        <DarkMode />
        <div className="hidden md:flex">
          <SearchBar />
        </div>
        <CurrentLocation />
      </div>
      <div className="flex md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
