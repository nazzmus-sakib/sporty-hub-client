import React from "react";
import { FaAngleRight } from "react-icons/fa";
import img from "../../assets/background.svg";
import cricket from "../../assets/cricket.svg";
import football from "../../assets/football.svg";
import basketball from "../../assets/basketball.svg";
const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full bg-red-400">
        <img src={img} className="w-full lg:h-[600px]" />

        <div className="absolute flex lg:flex-row flex-col  py-14 lg:py-0 items-center lg:px-20 px-8  justify-center text-white">
          <div className="lg:w-1/2 ">
            <h2 className="text-3xl pb-2 lg:text-5xl font-bold mb-5  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Cricket Adventures at Sporty Hub Summer Camp
            </h2>
            <p className="text-gray-400 text-sm lg:text-base">
              Welcome to the exhilarating world of cricket at Sporty Hub Summer
              Camp! Our cricket section offers an unparalleled opportunity for
              young athletes to immerse themselves in the thrilling sport of
              cricket. At Sporty Hub, we understand the importance of nurturing
              both physical skills and a passion for the game. Our expert
              coaches provide top-notch training sessions that cater to all
              skill levels, from beginners to advanced players. Whether your
              child is taking their first swing of the bat or honing their
              bowling technique, our cricket program offers a comprehensive
              curriculum designed to enhance their skills, teamwork, and overall
              understanding of the game.
            </p>
            <button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 mt-4">
              See more <FaAngleRight className="text-lg ml-2"></FaAngleRight>
            </button>
          </div>
          <div className="lg:w-1/2 hidden lg:block">
            <img src={cricket} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute lg:flex hidden justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#3" className="btn   btn-circle btn-md ">
            ❮
          </a>
          <a href="#slide2" className="btn   btn-circle btn-md ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img} className="w-full lg:h-[600px]" />
        <div className="absolute lg:flex items-center px-8 py-14 lg:py-0 lg:px-20  justify-center text-white">
          <div className="lg:w-1/2">
            <h2 className="lg:text-5xl pb-2 text-3xl font-bold mb-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
              Unleash Your Football Passion at Sporty Hub Summer Camp
            </h2>
            <p className="text-gray-400 text-sm lg:text-base">
              Welcome to the electrifying world of football at Sporty Hub Summer
              Camp! Our football section offers an exciting opportunity for
              young athletes to ignite their passion for the beautiful game. At
              Sporty Hub, we believe in nurturing both skill development and a
              love for football. Our expert coaches provide comprehensive
              training sessions designed to cater to all skill levels, from
              beginners to advanced players. Whether your child is taking their
              first kick or looking to refine their technique, our football
              program offers a dynamic curriculum aimed at enhancing their
              skills, teamwork, and overall understanding of the game.
            </p>
            <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 mt-4">
              Explore more{" "}
              <FaAngleRight className="text-lg ml-2"></FaAngleRight>
            </button>
          </div>
          <div className="lg:w-1/2">
            <img src={football} className="w-full hidden lg:block" alt="" />
          </div>
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn  btn-circle  ">
            ❮
          </a>
          <a href="#slide3" className="btn  btn-circle ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img} className="w-full h-[600px]" />
        <div className="absolute flex items-center px-8 py-14 lg:py-0 lg:px-20  justify-center text-white">
          <div className="lg:w-1/2 w-full">
            <h2 className="lg:text-5xl pb-2 text-3xl font-bold mb-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
              Elevate Your Basketball Skills at Sporty Hub Summer Camp
            </h2>
            <p className="text-gray-400 lg:text-base text-sm">
              Welcome to the high-flying world of basketball at Sporty Hub
              Summer Camp! Our basketball section offers an exciting opportunity
              for young athletes to soar to new heights in the game they love.
              At Sporty Hub, we understand the importance of developing both
              individual skills and team dynamics. Our expert coaches provide
              comprehensive training sessions designed to cater to all skill
              levels, from beginners to advanced players. Whether your child is
              taking their first dribble or perfecting their shooting form, our
              basketball program offers a dynamic curriculum aimed at enhancing
              their skills, teamwork, and overall understanding of the game.
            </p>
            <button className="btn  bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-4">
              Explore more{" "}
              <FaAngleRight className="text-lg ml-2"></FaAngleRight>
            </button>
          </div>
          <div className="lg:w-1/2 w-full hidden lg:block">
            <img src={basketball} className="w-full" alt="" />
          </div>
        </div>
        <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2  left-5 right-5 top-1/2">
          <a href="#slide2" className="btn  btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn  btn-circle  ">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
