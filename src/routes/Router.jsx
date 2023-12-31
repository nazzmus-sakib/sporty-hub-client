import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import DashboardLayout from "../layout/DashboardLayout";
import SelectedClass from "../pages/dashboard/student/SelectedClass";
import EnrolledClass from "../pages/dashboard/student/EnrolledClass";
import Payment from "../pages/dashboard/student/Payment";
import PaymentHistory from "../pages/dashboard/student/PaymentHistory";
import AddClass from "../pages/dashboard/instructor/AddClass";
import MyClasses from "../pages/dashboard/instructor/MyClasses";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/shared/ErrorPage";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
        loader: () => fetch("https://sporty-hub-server.vercel.app/instructors"),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader: () => fetch("https://sporty-hub-server.vercel.app/classes"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selected-class",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolled-class",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoute>
            {" "}
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            {" "}
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
