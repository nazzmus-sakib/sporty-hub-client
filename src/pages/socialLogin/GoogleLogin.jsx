import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  return (
    <button className="btn btn-outline " onClick={handleGoogleLogin}>
      Continue with <FcGoogle size={26}></FcGoogle>{" "}
    </button>
  );
};

export default GoogleLogin;
