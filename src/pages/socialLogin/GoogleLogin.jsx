import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <button className="btn btn-outline " onClick={handleGoogleLogin}>
      Continue with <FcGoogle size={26}></FcGoogle>{" "}
    </button>
  );
};

export default GoogleLogin;
