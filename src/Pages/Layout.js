import React from "react";
import {Outlet} from "react-router-dom";
import { HomeBar } from "../Components/HomeBar";


const Layout = () => {
  return (
    <>
      <HomeBar/>
      <Outlet />
    </>
  );
};

export default Layout;