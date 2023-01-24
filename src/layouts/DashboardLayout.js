import React from "react";
import { Outlet } from "react-router-dom";
// components
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
