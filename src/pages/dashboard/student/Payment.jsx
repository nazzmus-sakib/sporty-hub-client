import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51NLOgAAQGAYgYwlvTYCaz7fZ4PnNIvJsvp5wrKbkfhgOvZS4B3PAV6UkKofqAOjw6o5PbveB0yunHqBdec7FjzRA00Vy4lg71w"
);
const Payment = () => {
  const location = useLocation();
  const price = location?.state?.price;
  const id = location?.state?.id;
  const course_name = location?.state?.course_name;
  const course_image = location?.state?.course_image;
  const classId = location?.state?.classId;
  console.log(course_image);

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-semibold mb-20 text-center">
        Please Pay <span className="text-blue-500">${price}</span> to complete
        the order
      </h2>
      <div className="w-1/2 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={price}
            id={id}
            course_name={course_name}
            course_image={course_image}
            classId={classId}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
