import React from "react";
import Slider from "./Slider";
import PopulerClasses from "./PopulerClasses";
import TopInstructors from "./TopInstructors";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopulerClasses></PopulerClasses>
      <TopInstructors></TopInstructors>
      <About></About>
    </div>
  );
};

export default Home;
