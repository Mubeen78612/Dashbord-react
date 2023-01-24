import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthGuard = () => {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      {isAuth ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};
