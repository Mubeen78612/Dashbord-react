import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthGuard = ({children}) => {
  const [isAuth, setAuth] = useState(false);
  const pathname=useLocation();
  const [requestedLocation, setRequestedLocation]=useState(null);

  if(!isAuth){
    if(pathname!==requestedLocation){
      setRequestedLocation(pathname);
    }
  }
  if(requestedLocation && pathname!== requestedLocation){
    setRequestedLocation(null)
    return <Navigate to={requestedLocation}/>
  }
  return (
    <>
     {children}
    </>
  );
};
