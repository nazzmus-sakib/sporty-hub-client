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
          className="flex items-center gap-2 border-s-[3px]  border-blue-500 bg-blue-50 px-4 py-3 text-blue-700"
        >
          <img src={selectedImg} alt="" className="h-5 w-5 opacity-75 " />

          <span className="text-sm font-medium"> Selected Classes </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/enrolled-class"
          className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
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
          href=""
          className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
        >
          <img src={walletImg} alt="" className="h-5 w-5 opacity-60 " />

          <span className="text-sm font-medium"> Payment History </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          href=""
          className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
        >
          <img src={homeImg} alt="" className="h-5 w-5 opacity-60 " />

          <span className="text-sm font-medium"> Home Page </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          href=""
          className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>

          <span className="text-sm font-medium"> Account </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default StudentNavigation;
