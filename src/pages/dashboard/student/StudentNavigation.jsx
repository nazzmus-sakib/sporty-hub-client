import React from "react";
import { NavLink } from "react-router-dom";

import selectedImg from "../../../assets/selected.png";
import enrolledImg from "../../../assets/enrolled.png";
import walletImg from "../../../assets/wallet.png";
import homeImg from "../../../assets/home.png";

const StudentNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/dashboard/selected-class"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img src={selectedImg} alt="" className="h-5 w-5 opacity-75 " />

          <span className="text-sm font-medium"> Selected Classes </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/enrolled-class"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img
            src={enrolledImg}
            alt=""
            className="h-5 w-5 opacity-60 bg-gray-100"
          />

          <span className="text-sm font-medium"> Enrolled Classes</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/payment-history"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img src={walletImg} alt="" className="h-5 w-5 opacity-60 " />

          <span className="text-sm font-medium"> Payment History </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img src={homeImg} alt="" className="h-5 w-5 opacity-60 " />

          <span className="text-sm font-medium"> Home Page </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default StudentNavigation;
