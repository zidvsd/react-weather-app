import React from "react";
import { useContext } from "react";
import { ForecastContext } from "../context/ForecastProvider";
const useForecast = () => {
  const { data, error, loading, city, setCity, handleCityChange } =
    useContext(ForecastContext);
  return {
    data,
    error,
    loading,
    city,
    setCity,
    handleCityChange,
  };
};

export default useForecast;
