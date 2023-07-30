import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        axios
          .post(
            `https://sporty-hub-server.vercel.app/users?email=${res?.user?.email}`,
            {
              name: res?.user?.displayName,
              email: res?.user?.email,
              role: "user",
            }
          )
          .then((response) => console.log(response.data));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <button className="btn btn-outline " onClick={handleGoogleLogin}>
      Continue with <FcGoogle size={26}></FcGoogle>{" "}
    </button>
  );
};

export default GoogleLogin;
