import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

import registerImg from "../../assets/register.svg";
import { AuthContext } from "../../context/AuthProvider";
import GoogleLogin from "../socialLogin/GoogleLogin";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const { createUser, updateName, logOut } = useContext(AuthContext);

  const {
    register,

    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        updateName(res.user, data.name, data.photo)
          .then(() => {
            // save user to db
            axios
              .post("http://localhost:4000/users", {
                name: res?.user?.displayName,
                email: res?.user?.email,
                role: "student",
              })
              .then((response) => console.log(response.data));
          })
          .catch((err) => console.log(err));

        toast.success("Registation successful");
        logOut();
        navigate("/login");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="w-1/2">
        <img src={registerImg} alt="" />
      </div>

      <div className="hero-content  w-1/2">
        <div className="card flex-shrink-0 w-full max-w-sm  border-2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-2">Sign Up!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 mt-2">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 mt-2">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 mt-2">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600 mt-2">
                    Password must be under 20
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 mt-2">
                    Password must be minimum 6 digits
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 mt-2">
                    Password must be minimum 6 digits. Including 1 uppercase, 1
                    lowercase, 1 digit, 1 sepecial character
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("confirm_password", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Password not matched",
                  })}
                />
                {errors.confirm_password && (
                  <span className="text-red-600 mt-2">
                    {errors.confirm_password.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-600 mt-2">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary outline-0 border-0">
                  Sign up
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <GoogleLogin></GoogleLogin>
            <p className="text-center mt-5 text-sm">
              Already have an account?
              <Link
                className="text-primary hover:underline underline-offset-4 "
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
