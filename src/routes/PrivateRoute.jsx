import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { BiLoaderCircle } from "react-icons/bi";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <BiLoaderCircle className="animate-spin" size={50}></BiLoaderCircle>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
