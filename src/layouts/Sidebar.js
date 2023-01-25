import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className=" flex flex-col bg-slate-400 w-[20%]">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/users">Users</Link>
      <Link to="/dashboard/roles">Roles</Link>
      <Link to="/dashboard/permissions">Permissions</Link>
    </div>
  );
}
