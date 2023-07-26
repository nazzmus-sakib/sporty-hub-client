import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        toast.success("Successfully logout");
      })
      .catch((err) => console.log(err));
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/instructors"> Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to="/dashboard/selected-class">Dashboard</NavLink>
          </li>

          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className=" bg-base-100 z-10 shadow-sm border-b-2 ">
      <div className="max-w-7xl mx-auto navbar lg:px-0 lg:py-5 px-2 py-3 sticky top-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <h2 className="primary-text text-xl lg:text-3xl font-bold  uppercase">
              sporty hub
            </h2>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
          <div className="">
            {user?.photoURL ? (
              <div
                className="tooltip tooltip-left tooltip-warning mr-5"
                data-tip={user?.displayName}
              >
                <div className="avatar online ">
                  <div className="w-12 rounded-full ">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
            ) : (
              <FaRegUserCircle className=" text-4xl lg:ml-2"></FaRegUserCircle>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
