import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "../../../context/AuthProvider";
import EmptyPage from "../../shared/EmptyPage";

const PaymentHistory = () => {
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
    <>
      {data?.length > 0 ? (
        <div>
          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Purchase By</th>
                  <th>Order Date</th>
                  <th>Price</th>
                  <th>transactionId</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{payment.course_name}</td>
                    <td> {payment.email}</td>
                    <td>{payment.order_date}</td>
                    <td>${payment.price}</td>
                    <td>{payment.transactionId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <EmptyPage text={"There is no payment history"}></EmptyPage>
      )}
    </>
  );
};

export default PaymentHistory;
