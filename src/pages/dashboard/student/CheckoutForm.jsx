import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import moment from "moment";

const CheckoutForm = ({ price, id, course_name, course_image, classId }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/create-payment-intent ", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((deta) => {
        setClientSecret(deta.clientSecret);
      });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    // setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        course_name: course_name,
        course_image: course_image,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        order_date: moment().format("dddd, MMMM D, YYYY"),
        selectedId: id,
      };
      // save payment info to db
      fetch("http://localhost:4000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((deta) => {
          if (deta.insertedId) {
            // delete selected class after successful payment
            fetch(`http://localhost:4000/delete-selected-class/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  fetch(`http://localhost:4000/update-seats/${classId}`, {
                    method: "PATCH",
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.modifiedCount > 0) {
                        fetch(
                          `http://localhost:4000/update-enroll-number/${classId}`,
                          {
                            method: "PATCH",
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => console.log(data));
                      }
                    });
                }
              });
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || processing}
          className=" mt-4 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Pay now
          </span>
        </button>
      </form>
      {error && <p className="text-red-500 mt-10">{error}</p>}
      {transactionId && (
        <p className="text-green-500 mt-10">{`Order complete with transaction id: ${transactionId}`}</p>
      )}
    </>
  );
};

export default CheckoutForm;
