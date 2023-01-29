import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// layout
import { DashboardLayout } from "../layouts/DashboardLayout";
//pages
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { DashboardHome } from "../pages/DashboardHome";
import { Users } from "../pages/Users";
import { Roles } from "../pages/Roles";
import { Permissions } from "../pages/Permissions";
import { NotFound } from "../pages/NotFound";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<Users />} />
        <Route path="roles" element={<Roles />} />
        <Route path="permissions" element={<Permissions />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
    </Routes>
  );
};
