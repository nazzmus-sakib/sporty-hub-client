import React, { useEffect } from "react";
import img from "../../assets/about.svg";
import AOS from "aos";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mb-20">
      <h2
        className="text-blue-500 font-bold lg:text-4xl text-3xl text-center my-20"
        style={{ fontFamily: "monospace" }}
      >
        More About us
      </h2>
      <div className="lg:flex gap-10">
        <div className="lg:w-1/2 mb-5 lg:mb-0 ">
          <img
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            src={img}
            alt=""
          />
        </div>
        <div
          className="lg:w-1/2 px-5 lg:px-0"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h3 className="text-3xl font-bold mb-3">
            Discover the Thrilling World of Sports with Sporty Hub
          </h3>
          <p className="mb-3 text-gray-500">
            At Sporty Hub, we are passionate about sports and dedicated to
            explore, and engage with their favorite activities. Whether you're
            an athlete, a fan, or someone looking to learn more about different
            sports, Sporty Hub is your go-to destination. Our mission is to
            foster a vibrant community that celebrates the spirit of sports.
            From in-depth articles and expert analysis to interactive forums and
            engaging multimedia content, we offer a wealth of resources to keep
            you informed, entertained, and connected. Whether it's football,
            basketball, tennis, golf, soccer, cricket, or any other sport that
            ignites your passion, Sporty Hub has it all.
          </p>
          <p className="text-gray-500">
            Join us on this exciting journey as we share the latest news,
            captivating stories, training tips, and much more. Whether you're
            seeking inspiration, seeking to improve your skills.. At Sporty Hub,
            we believe that sports have the power to inspire, unite, and
            transform lives. Come be a part of our vibrant community and
            experience the exhilaration of the sports world like never before.
            Get ready to immerse yourself in the dynamic universe of sports with
            Sporty Hub!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
