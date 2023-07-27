import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Classes = () => {
  const classData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSelect = (classes) => {
    if (!user) {
      navigate("/login");
    }

    fetch("http://localhost:4000/selected-class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        course_name: classes?.name,
        purchase_by: user?.email,
        price: classes?.price,
        image: classes?.image,
        date: new Date(),
        classId: classes._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your class has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <h2
        className="text-4xl text-blue-500 font-bold my-20 text-center uppercase "
        style={{ fontFamily: "monospace" }}
      >
        Our All Classes Here
      </h2>
      <div className="grid grid-cols-3 gap-8 mb-20">
        {classData.map((classes) => (
          <div key={classes._id} className="normal-shadow p-4 rounded-md">
            <div className="w-full text-center">
              <img
                src={classes?.image}
                alt=""
                className="rounded h-[250px] w-full object-cover "
              />
            </div>
            <div>
              <h2 className="text-2xl text-neutral-700 font-bold mt-4">
                {classes.name}
              </h2>
              <p className="font-bold">
                By <span className="text-blue-500">{classes.instructor}</span>
              </p>
              <div className="flex justify-between mt-4">
                <p className="font-bold">
                  Available Seats{" "}
                  <span className="text-blue-500">
                    {classes.available_seats < 10
                      ? `0${classes.available_seats}`
                      : classes.available_seats}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <p className="font-bold">
                    Only <span className="text-blue-500">${classes.price}</span>
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSelect(classes)}
              className="bg-blue-500 px-4 py-1 mt-4 font-semibold  text-white rounded-md"
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Classes;
