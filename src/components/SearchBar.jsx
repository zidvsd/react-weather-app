import React from "react";
import { Search } from "lucide-react"; // optional: use any icon library
import { useContext, useState } from "react";
import { ForecastContext } from "../context/ForecastProvider";
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { data, loading, error, city, setCity, handleCityChange } =
    useContext(ForecastContext);
  const handleSubmit = () => {
    if (inputValue) {
      handleCityChange(inputValue);
    }
  };
  return (
    <div className="relative w-full ">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        id="user-input"
        type="text"
        placeholder="Search for your city..."
        autoComplete="off"
        className="w-full pl-12   py-2 border rounded-full shadow-lg focus:outline-none focus:ring dark:text-white dark:bg-dark-gray dark:border-none"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 size-6" />
    </div>
  );
};

export default SearchBar;
