import React from "react";
import parts from "../../../assets/assets/images/about_us/parts.jpg";
import person from "../../../assets/assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 relative">
            <img
              src={person}
              className="max-w-sm rounded-lg shadow-2xl w-3/4"
            />
            <img
              src={parts}
              className="max-w-sm rounded-lg shadow-2xl w-1/3  absolute top-1/2 right-40 border-8 border-white "
            />
          </div>

          <div className="w-1/2 space-y-8">
            <h3 className="text-center text-orange-500 text-2xl">About us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="btn btn-warning text-white">
              Get more info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
