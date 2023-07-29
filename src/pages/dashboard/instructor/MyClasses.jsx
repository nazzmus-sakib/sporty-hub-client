import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import pendingImg from "../../../assets/pending.png";
const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["my-class", user],
    queryFn: () =>
      fetch(`http://localhost:4000/classes/${user?.email}`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Total Enrolled Students</th>
            <th>Feedback</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((classes, index) => (
            <tr key={classes._id}>
              <th>{index + 1}</th>
              <td>{classes.name}</td>
              <td className="pl-10 ">
                {classes?.total_enroll ? classes.total_enroll : 0}
              </td>
              <td>No Feedback Available</td>
              <td>
                {classes?.status && classes.status === "pending" ? (
                  <p className="flex items-center  gap-1">
                    <img src={pendingImg} height={20} width={20} />{" "}
                    <span>{classes.status}</span>
                  </p>
                ) : (
                  ""
                )}{" "}
              </td>
              <td>
                <button className="px-4 py-2 font-medium mr-2 bg-red-50 hover:bg-red-100 hover:text-red-500 text-red-600 rounded-lg text-sm">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
