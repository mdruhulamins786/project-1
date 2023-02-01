import React from "react";

import banner from "../assets/photo/banner-4.png";

function Discover() {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl sm:mx-3 xl:mx-0 mb-16">
        <figure>
          <img src={banner} alt="Album" />
        </figure>
        <div className="ml-6 mt-10">
          <h2 className="text-2xl uppercase font-semibold text-[#3d2514]">
            Discover
          </h2>
          <p style={{ fontFamily: `'Alfa Slab One', cursive` }} className="text-4xl uppercase mb-3 text-[#3d2514]">Upcoming Events</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            cumque, sit veritatis eatas repellendus tenetur. Ad, alias?
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            cumque, sit veritatis eatas repellendus tenetur. Ad, alias?
          </p>
        </div>
      </div>
    </>
  );
}

export default Discover;
