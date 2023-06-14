import AOS from "aos";
import React, { useEffect, useState } from "react";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://sporty-hub-server.vercel.app/top-instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h2
        className="text-4xl text-blue-500 font-bold my-20 text-center uppercase "
        style={{ fontFamily: "monospace" }}
      >
        Meet our Instructors
      </h2>
      <div className="grid grid-cols-2 gap-10 mb-20">
        {instructors.map((instructor) => (
          <>
            <div
              className="flex normal-shadow pl-5 sticky top-5 z-20 bg-white"
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="w-3/5">
                <h2 className="text-3xl primary-text font-bold mt-10">
                  {instructor.instructor_name}
                </h2>
                <p className="text-blue-500 font-bold">
                  {instructor.instructors_role}
                </p>
              </div>
              <div className="w-2/5 ">
                <img
                  src={instructor.img}
                  alt=""
                  className="h-[250px] object-cover w-full"
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
