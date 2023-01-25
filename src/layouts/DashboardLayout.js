import React from "react";
import { Outlet } from "react-router-dom";
// components
import { Header } from "./Header";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className=" flex">
        <Sidebar />
        <div className="container bg-red-400 w-[80%]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
