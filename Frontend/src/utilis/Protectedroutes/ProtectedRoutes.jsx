import React, { useContext } from "react";
import { UserInfo } from "../UseContext/UseContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { state } = useContext(UserInfo);

  // If userdata exists, render the protected content
  if (state.userdata) {
    return <Outlet />;
  } else {
    // If userdata is not available, navigate to the login page
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
