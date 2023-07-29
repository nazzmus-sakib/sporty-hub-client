import React from "react";
import { NavLink } from "react-router-dom";
import manage_classes from "../../../assets/manage.png";
import manage_users from "../../../assets/users.png";
const AdminNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/dashboard/manage-classes"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img src={manage_classes} alt="" className="h-5 w-5 opacity-75 " />

          <span className="text-sm font-medium">Manage Classes </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/manage-users"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          <img
            src={manage_users}
            alt=""
            className="h-5 w-5 opacity-60 bg-gray-100"
          />

          <span className="text-sm font-medium"> Manage Users</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminNavigation;
