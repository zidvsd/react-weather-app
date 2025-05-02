import React from "react";
import useForecast from "../hooks/useForecast";
import { CapitalizeFirstLetter } from "../utils/HelperFunctions";
import { time } from "../utils/timeFormat";
import sunny from "../assets/sunny-icon.svg";
const TimeCard = () => {
  const { city } = useForecast();
  console.log(city);

  const { FormattedTime, dayNum, dayStr, monthStr } = time();
  return (
    <div className="w-full self-center flex flex-col items-center justify-center h-64 px-16 bg-neutral-200 dark:bg-gray-custom dark:border border-neutral-800 text-black rounded-xl dark:text-white max-w-sm shadow-[4px_4px_0px_rgba(0,0,0,0.60)] md:self-auto gap-y-2">
      <h2 className="font-bold text-xl mb-12">{CapitalizeFirstLetter(city)}</h2>
      <h1 className="font-bold text-5xl">{FormattedTime}</h1>
      <p className="dark:text-white">{`${dayStr}, ${dayNum} ${monthStr}`}</p>
    </div>
  );
};

export default TimeCard;
