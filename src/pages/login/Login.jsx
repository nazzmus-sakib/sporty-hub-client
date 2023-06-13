import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.svg";

import GoogleLogin from "../socialLogin/GoogleLogin";
import { AuthContext } from "../../context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="w-1/2">
        <img src={loginImg} alt="" />
      </div>

      <div className="hero-content w-1/2">
        <div className="card flex-shrink-0 w-full max-w-sm  border-2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-2">
              Please Login!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 mt-2">
                    Email field is required
                  </span>
                )}
              </div>

              <div
                className="form-control 
              "
              >
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className=" w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full "
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <div className="absolute cursor-pointer  top-1/2 right-4 transform -translate-y-1/2">
                    {showPassword ? (
                      <FaEye
                        size={20}
                        onClick={() => setShowPassword(!showPassword)}
                      ></FaEye>
                    ) : (
                      <FaEyeSlash
                        size={20}
                        onClick={() => setShowPassword(!showPassword)}
                      ></FaEyeSlash>
                    )}
                  </div>
                </div>

                {errors.password?.type === "required" && (
                  <span className="text-red-600 mt-2">
                    Password field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary outline-0 border-0">
                  Login
                </button>
              </div>
            </form>

            <div className="divider">OR</div>
            <GoogleLogin></GoogleLogin>
            <p className="text-center mt-5 text-sm">
              New to sporty hub ?
              <Link
                className="text-primary hover:underline underline-offset-4 "
                to="/register"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
