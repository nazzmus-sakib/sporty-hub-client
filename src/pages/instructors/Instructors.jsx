import React from "react";
import { useLoaderData } from "react-router-dom";

const Instructors = () => {
  const instructorsData = useLoaderData();
  return (
    <>
      <h2
        className="text-4xl text-blue-500 font-bold my-20 text-center uppercase "
        style={{ fontFamily: "monospace" }}
      >
        Oue All Instructors Here
      </h2>
      <div className="grid grid-cols-3 gap-8 mb-20 ">
        {instructorsData.map((instructor) => (
          <div className="flex normal-shadow pl-5  bg-white rounded">
            <div className="w-3/5">
              <h2 className="text-3xl primary-text font-bold mt-10">
                {instructor.name}
              </h2>
              <p className="text-blue-500 font-bold">{instructor.email}</p>
            </div>
            <div className="w-2/5 ">
              <img
                src={instructor.image}
                alt=""
                className="h-[250px] object-cover w-full rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructors;
