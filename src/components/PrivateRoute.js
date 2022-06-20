import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";




const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user? (
    <Home />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
