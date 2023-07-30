import StudentNavigation from "../pages/dashboard/student/StudentNavigation";
import { Link, Outlet } from "react-router-dom";
import InstructorNavigation from "../pages/dashboard/instructor/InstructorNavigation";
import useInscructor from "../hooks/useInscructor";
import useAdmin from "../hooks/useAdmin";
import AdminNavigation from "../pages/dashboard/admin/AdminNavigation";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const DashboardLayout = () => {
  const [isInstructor, loading] = useInscructor();
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col lg:flex-row lg:pr-20 h-screen">
      <div className="flex lg:flex-col border-e bg-white lg:h-full w-full lg:w-3/12">
        <div className="px-4 py-6 lg:flex-grow">
          <span className="grid h-10 place-content-center rounded-lg mb-10">
            <Link
              to="/"
              className="primary-text text-xl lg:text-3xl font-bold uppercase"
            >
              sporty hub
            </Link>
          </span>

          {isInstructor === "instructor" ? (
            <InstructorNavigation />
          ) : isAdmin === "admin" ? (
            <AdminNavigation />
          ) : (
            <StudentNavigation />
          )}
        </div>

        <div className="lg:sticky lg:inset-x-0 lg:bottom-0 border-t border-gray-100">
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
                <strong className="block font-medium">
                  {user?.displayName}
                </strong>

                <span>{user?.email} </span>
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="lg:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
