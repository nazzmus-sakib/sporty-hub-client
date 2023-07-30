import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Modal = () => {
  const location = useLocation();
  const feedbackRef = useRef();

  const id = location?.state?.id;
  const handleFeedback = () => {
    const feedback = feedbackRef.current.value;

    fetch(`http://localhost:4000/update-feedback/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Feedback has been given",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-xl mb-5">Write Your Feedback!</h3>
          <textarea
            ref={feedbackRef}
            name="feedback"
            cols="30"
            rows="10"
            className="w-full border-2 p-5 border-blue-300 focus:outline-blue-500"
          ></textarea>
          <div className="text-right mt-5">
            <button
              onClick={() => handleFeedback(id)}
              className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative">Send Feedback</span>
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
