import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
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
    ],
  },
]);

export default router;
