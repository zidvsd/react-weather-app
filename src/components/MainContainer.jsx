import React from "react";
import TimeCard from "./TimeCard";
import NotFound from "./NotFound";
import useForecast from "../hooks/useForecast";
import MetricsCard from "./MetricsCard";
const MainContainer = () => {
  const { data, error } = useForecast();
  if (data?.cod !== "404" && !error) {
    return (
      <div className="custom-container md:flex-row flex-col flex gap-y-4 mx-auto gap-x-12">
        <TimeCard />
        <MetricsCard />
      </div>
    );
  }

  return <NotFound />;
};

export default MainContainer;
