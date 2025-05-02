import React from "react";
import Navbar from "./components/Navbar";
import ForecastProvider from "./context/ForecastProvider";
import MainContainer from "./components/MainContainer";
import NotFound from "./components/NotFound";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <ForecastProvider>
      <Router>
        <Routes>
          <Route path="/:id" element={<Layout />}></Route>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </ForecastProvider>
  );
};

export default App;
