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
        loader: () => fetch("http://localhost:4000/instructors"),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader: () => fetch("http://localhost:4000/classes"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
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
        element: <AddClass></AddClass>,
      },
    ],
  },
]);

export default router;
