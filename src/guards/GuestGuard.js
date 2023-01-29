import React from "react";
import { Navigate } from "react-router-dom";

export const GuestGuard = ({ children }) => {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <Navigate to="/dashboard" replace={true}/>;
  }
  return <>{children}</>;
};
