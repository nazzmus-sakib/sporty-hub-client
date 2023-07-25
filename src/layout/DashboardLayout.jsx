import React from "react";
import StudentNavigation from "../pages/dashboard/student/StudentNavigation";
import { Outlet } from "react-router-dom";
import logoImg from "../assets/logo.png";
const DashboardLayout = () => {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white w-3/12">
        <div className="px-4 py-6">
          <span className="grid h-10 place-content-center rounded-lg mb-10">
            <h2 className="primary-text text-xl lg:text-3xl font-bold  uppercase">
              sporty hub
            </h2>
          </span>

          {/* link here */}
          <StudentNavigation></StudentNavigation>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
