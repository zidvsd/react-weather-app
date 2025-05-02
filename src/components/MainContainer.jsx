import React, { useContext } from "react";
import TimeCard from "./TimeCard";
import NotFound from "./NotFound";
import { ForecastContext } from "../context/ForecastProvider";

const MainContainer = () => {
  const { data, error, loading } = useContext(ForecastContext);

  if (data?.cod !== "404" && !error) {
    return (
      <div className="custom-container flex-col flex gap-y-4 mx-auto">
        <TimeCard />
      </div>
    );
  }

  return <NotFound />;
};

export default MainContainer;
