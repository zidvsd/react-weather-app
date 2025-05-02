import React from "react";
import Navbar from "../components/Navbar";
import MainContainer from "../components/MainContainer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <MainContainer />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
