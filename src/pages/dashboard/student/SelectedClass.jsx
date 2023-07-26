import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["selected_class", user],
    queryFn: () => {
      return fetch(`http://localhost:4000/selected-class/${user?.email}`).then(
        (res) => res.json()
      );
    },
  });

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
                <button className="px-4 py-2 font-medium mr-2 bg-red-50 hover:bg-red-100 hover:text-red-500 text-red-600 rounded-lg text-sm">
                  Delete
                </button>
                <button className="px-4 py-2 font-medium bg-green-50 hover:bg-green-100 hover:text-green-500 text-green-600 rounded-lg text-sm">
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
