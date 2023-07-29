import React from "react";
import addClassImg from "../../../assets/add.png";
import myClassImg from "../../../assets/my.png";
import { NavLink } from "react-router-dom";
const InstructorNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/dashboard/add-class"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img src={addClassImg} alt="" className="h-5 w-5 opacity-75 " />

          <span className="text-sm font-medium"> Add a Class </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/my-classes"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img
            src={myClassImg}
            alt=""
            className="h-5 w-5 opacity-60 bg-gray-100"
          />

          <span className="text-sm font-medium"> My Classes</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default InstructorNavigation;
