import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import adminImg from "../../../assets/admin.png";
import instructorImg from "../../../assets/instructor.png";
import studentImg from "../../../assets/student.png";
const ManageUsers = () => {
  const { user } = useContext(AuthContext);
  const { data, refetch } = useQuery({
    queryKey: ["manage-class", user],
    queryFn: () =>
      fetch(`http://localhost:4000/users`).then((res) => res.json()),
  });
  const handleInstructor = (id) => {
    fetch(`http://localhost:4000/update-role-instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Role has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const handleAdmin = (id) => {
    fetch(`http://localhost:4000/update-role-admin/${id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Role has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td className="capitalize">
                {user?.role === "admin" ? (
                  <p className="flex gap-1">
                    <img height={20} width={20} src={adminImg} alt="" />{" "}
                    <span>{user?.role}</span>
                  </p>
                ) : user?.role === "instructor" ? (
                  <p className="flex gap-1">
                    {" "}
                    <img
                      height={20}
                      width={20}
                      src={instructorImg}
                      alt=""
                    />{" "}
                    <span>{user?.role}</span>
                  </p>
                ) : (
                  <p className="flex gap-1">
                    <img height={20} width={20} src={studentImg} alt="" />{" "}
                    <span>{user?.role}</span>
                  </p>
                )}
              </td>
              <td>
                <button
                  disabled={
                    user?.role === "instructor" || user?.role === "admin"
                  }
                  onClick={() => handleInstructor(user?._id)}
                  className="relative mr-3 inline-flex items-center justify-start px-2 py-1 overflow-hidden font-medium transition-all bg-green-200 rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-green transition-colors duration-300 ease-in-out group-hover:text-white">
                    Make Instructor
                  </span>
                </button>
                <button
                  disabled={
                    user?.role === "instructor" || user?.role === "admin"
                  }
                  onClick={() => handleAdmin(user?._id)}
                  className="relative inline-flex items-center justify-start px-2 py-1 overflow-hidden font-medium transition-all bg-blue-200 rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-green transition-colors duration-300 ease-in-out group-hover:text-white">
                    Make Admin
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
