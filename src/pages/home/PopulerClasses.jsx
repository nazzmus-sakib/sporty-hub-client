import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { BsStopwatch } from "react-icons/bs";
const PopulerClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popular_classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <h2
        className="text-4xl text-blue-500 font-bold mt-20 text-center uppercase "
        style={{ fontFamily: "monospace" }}
      >
        Our populer classes
      </h2>
      <div className="grid grid-cols-3 gap-10 my-10">
        {classes.map((single_class) => (
          <div className="normal-shadow p-4">
            <div>
              <img
                src={single_class?.img}
                alt=""
                className="rounded h-[250px]"
              />
            </div>
            <div>
              <h2 className="text-2xl text-neutral-700 font-bold mt-4">
                {single_class.course_name}
              </h2>
              <p className="font-bold">
                By{" "}
                <span className="text-blue-500">
                  {single_class.course_instructor}
                </span>
              </p>
              <div className="flex justify-between mt-4">
                <p className="font-bold">
                  Total Student{" "}
                  <span className="text-blue-500">
                    {single_class.total_enrolled}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <p>
                    <Rating
                      readonly
                      placeholderRating={single_class.rating}
                      emptySymbol={
                        <MdOutlineStarOutline size={20}></MdOutlineStarOutline>
                      }
                      placeholderSymbol={
                        <MdOutlineStarPurple500
                          size={20}
                          className="text-yellow-500"
                        ></MdOutlineStarPurple500>
                      }
                      fullSymbol={
                        <MdOutlineStarPurple500
                          size={20}
                        ></MdOutlineStarPurple500>
                      }
                    />
                  </p>
                  <p className="mb-2">{single_class.rating}</p>
                </div>
              </div>
            </div>
            <div className="my-3 flex justify-between items-center">
              <span className="bg-red-200 px-3 py-1 text-xs rounded-lg flex items-center gap-1">
                <BsStopwatch></BsStopwatch> {single_class.duration} hr
              </span>
              <p>
                <FcLike size={30}></FcLike>
              </p>
            </div>
            <button className="bg-blue-500 px-3 py-2 mb-2 text-white rounded-md mt-2">
              Enroll now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopulerClasses;
