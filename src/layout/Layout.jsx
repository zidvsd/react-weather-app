import React from "react";
import Navbar from "../components/Navbar";
import MainContainer from "../components/MainContainer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  const shouldRenderMainContainer = location.pathname !== "/";
  return (
    <>
      <Navbar />
      <main>
        {shouldRenderMainContainer ? <MainContainer /> : null}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
