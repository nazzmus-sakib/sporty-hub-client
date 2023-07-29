import React from "react";
import emptyImg from "../../assets/empty.svg";
const EmptyPage = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <img className="h-[400px]" src={emptyImg} alt="" />
      <h2 className="text-4xl font-semibold capitalize text-blue-500 mt-5">
        {text}
      </h2>
    </div>
  );
};

export default EmptyPage;
