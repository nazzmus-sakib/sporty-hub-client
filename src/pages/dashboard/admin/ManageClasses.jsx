import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Modal from "../../../component/Modal";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const { data, refetch } = useQuery({
    queryKey: ["manage-class", user],
    queryFn: () =>
      fetch(`https://sporty-hub-server.vercel.app/classes`).then((res) =>
        res.json()
      ),
  });

  const handleApprove = (id) => {
    fetch(`https://sporty-hub-server.vercel.app/update-status-approved/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class has been approved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const handleDeny = (id) => {
    fetch(`https://sporty-hub-server.vercel.app/update-status-deny/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class has been denied",
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
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor name</th>
            <th>Instructor Email</th>
            <th>Available seats</th>
            <th>price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((classes, index) => (
            <tr key={classes._id}>
              <th>{index + 1}</th>
              <td>
                <img src={classes?.image} height={50} width={50} />
              </td>
              <td>{classes?.name}</td>
              <td>{classes?.instructor}</td>
              <td>{classes?.email}</td>
              <td>{classes?.available_seats}</td>
              <td>${classes?.price}</td>
              <td>{classes?.status}</td>
              <td className="flex justify-center items-center gap-2">
                <button
                  disabled={
                    classes?.status === "denied" ||
                    classes?.status === "approved"
                  }
                  onClick={() => handleApprove(classes?._id)}
                  className="relative inline-flex items-center justify-start px-2 py-1 overflow-hidden font-medium transition-all bg-green-200 rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-green transition-colors duration-300 ease-in-out group-hover:text-white">
                    Approve
                  </span>
                </button>
                <button
                  disabled={
                    classes?.status === "denied" ||
                    classes?.status === "approved"
                  }
                  onClick={() => handleDeny(classes?._id)}
                  className="relative inline-flex items-center justify-start px-2 py-1 overflow-hidden font-medium transition-all bg-red-200 rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-green transition-colors duration-300 ease-in-out group-hover:text-white">
                    Deny
                  </span>
                </button>
                <Link
                  state={{ id: classes._id }}
                  onClick={() => window.my_modal_3.showModal()}
                  className="relative inline-flex items-center justify-start px-2 py-1 overflow-hidden font-medium transition-all bg-blue-200 rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-green transition-colors duration-300 ease-in-out group-hover:text-white">
                    Feedback
                  </span>
                </Link>
              </td>
            </tr>
          ))}
          <Modal></Modal>
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
