import React, { useState, useContext, useEffect } from "react";
import { ForecastContext } from "../context/ForecastProvider";
import { MapPin } from "lucide-react"; // optional: use any icon library
import useFetch from "../hooks/useFetch";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const CurrentLocation = () => {
  const { city, handleCityChange } = useContext(ForecastContext);
  const [coords, setCoords] = useState(null);
  const [url, setUrl] = useState(null);

  const { data, error, loading } = useFetch(url);
  useEffect(() => {
    if (data && data.results && data.results[0]) {
      const lastString = formatString(data.results[0].formatted);
      handleCityChange(lastString);
    }
  }, [data]);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });

        const apiKey = "8d1cc516bd964683b17a4a6578a3e67c";
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
        setUrl(apiUrl);
      },
      (err) => {
        console.log(err);
      },
    );
  };

  const formatString = (str) => {
    const text = str.trim().split(" ").slice(-1)[0];
    console.log(text);
    return text;
  };
  return (
    <>
      <button
        onClick={getCurrentLocation}
        className="cursor-pointer rounded-full flex items-center bg-green-500 text-white py-2 px-4  hover:bg-green-600 transition-all duration-300"
      >
        <MapPin className="mr-2 size-5 text-black" />
        Current Location
      </button>
      {data && (
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          {/* Formatted Address: {formatString(data.results[0].formatted)} */}
        </p>
      )}
    </>
  );
};

export default CurrentLocation;
