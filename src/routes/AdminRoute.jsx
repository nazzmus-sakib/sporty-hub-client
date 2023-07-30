import { BiLoaderCircle } from "react-icons/bi";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const [isAdmin, loading] = useAdmin();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <BiLoaderCircle className="animate-spin" size={50}></BiLoaderCircle>
      </div>
    );
  }
  if (isAdmin === "admin") {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
