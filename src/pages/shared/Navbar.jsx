import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaRegUserCircle } from "react-icons/fa";
// import { AuthContext } from "../../context/AuthProvider";
const Navbar = () => {
  const user = true;
  //   const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
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
            <NavLink to="/dashbpard">Dashboard</NavLink>
          </li>

          <li>
            <NavLink to="/logout">Logout</NavLink>
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
    <div className="navbar bg-base-100 z-10 shadow-sm  border-b-2 lg:px-32 lg:py-5 px-2 py-3 sticky top-0 ">
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
          <h2 className="text-xl lg:text-3xl font-bold lg:ml-4 ml-2 uppercase">
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
            <FaRegUserCircle className=" text-4xl"></FaRegUserCircle>
            // <FaUserCircle className="lg:text-5xl text-4xl"></FaUserCircle>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
