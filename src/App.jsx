import React from "react";
import Navbar from "./components/Navbar";
import ForecastProvider from "./context/ForecastProvider";
const App = () => {
  return (
    <div>
      <ForecastProvider>
        <Navbar />
      </ForecastProvider>
    </div>
  );
};

export default App;
