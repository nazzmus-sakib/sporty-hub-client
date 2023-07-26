import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const { data, refetch } = useQuery({
    queryKey: ["selected_class", user],
    queryFn: () => {
      return fetch(`http://localhost:4000/selected-class/${user?.email}`).then(
        (res) => res.json()
      );
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/selected-class/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deta) => {
            if (deta.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Item has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Added By</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((classes, index) => (
            <tr key={classes._id}>
              <th>{index + 1}</th>
              <td>{classes.course_name}</td>
              <td> {classes.purchase_by}</td>
              <td>{classes.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(classes._id)}
                  className="px-4 py-2 font-medium mr-2 bg-red-50 hover:bg-red-100 hover:text-red-500 text-red-600 rounded-lg text-sm"
                >
                  Delete
                </button>
                <Link
                  to="/dashboard/payment"
                  className="px-4 py-2 font-medium bg-green-50 hover:bg-green-100 hover:text-green-500 text-green-600 rounded-lg text-sm"
                >
                  Pay
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
