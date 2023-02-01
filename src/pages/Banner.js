import React from "react";
import bg from "../assets/photo/background.png";
import burger from "../assets/photo/burger-icon.png";

const Banner = () => {
  return (
    <>
      <div
        style={{ background: `url(${bg})` }}
        className="hero bg-base-200 md:h-[600px]"
      >
        <div
          style={{ background: `url(${bg})` }}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <img src={burger} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <p className="text-2xl font-semibold border-dashed border-2 border-[#3d2514] p-2">
              It is a good time for the great ta
            </p>
            <h1
              style={{ fontFamily: `'Alfa Slab One', cursive` }}
              className="text-5xl mt-3 text-[#3d2514]"
            >
              BURGER!
            </h1>
            <p
              style={{ fontFamily: `'Alfa Slab One', cursive` }}
              className="text-4xl mt-3 text-[#3d2514]"
            >
              WEEK
            </p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#3d2514] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
