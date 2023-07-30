import React from "react";
import useInscructor from "../hooks/useInscructor";
import { BiLoaderCircle } from "react-icons/bi";
import { Navigate } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const [isInstructor, loading] = useInscructor();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <BiLoaderCircle className="animate-spin" size={50}></BiLoaderCircle>
      </div>
    );
  }
  if (isInstructor === "instructor") {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default InstructorRoute;
