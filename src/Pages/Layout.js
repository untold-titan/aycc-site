import React from "react";
import {Outlet} from "react-router-dom";
import { HomeBar } from "../Components/HomeBar";
import { Footer } from "../Components/Footer";


const Layout = () => {
  return (
    <>
      <HomeBar/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;