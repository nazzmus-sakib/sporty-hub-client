import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const EnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["selected_class", user],
    queryFn: () => {
      return fetch(`http://localhost:4000/payment/${user?.email}`).then((res) =>
        res.json()
      );
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Purchase By</th>
              <th>Order Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>
                  {" "}
                  <img
                    className=""
                    height={50}
                    width={50}
                    src={payment.course_image}
                    alt=""
                  />
                </td>
                <td>{payment.course_name}</td>
                <td> {payment.email}</td>
                <td>{payment.order_date}</td>
                <td>${payment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
