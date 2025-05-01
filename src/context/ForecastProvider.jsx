import React, { Children } from "react";
import { useState, createContext } from "react";
import useFetch from "../hooks/useFetch";
export const ForecastContext = createContext();

const ForecastProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [url, setUrl] = useState("");
  const apiKey = "2504fd6b7efa7d602d35a65466677f74";

  const handleCityChange = (newCity) => {
    setCity(newCity);
    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;
    setUrl(newUrl);
  };
  const { loading, data, error } = useFetch(url);

  return (
    <ForecastContext.Provider
      value={{ data, loading, error, city, setCity, handleCityChange }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

export default ForecastProvider;
