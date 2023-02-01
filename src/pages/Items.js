import React from "react";

import banner5 from "../assets/photo/burger-icon-3.png";
import banner6 from "../assets/photo/burger-icon-2.png";

const discribtion = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    pic: banner5,
  },

  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    pic: banner5,
  },

  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    pic: banner5,
  },

  {
    id: 4,
    title: "Lorem ipsum dolor sit",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    pic: banner6,
  },

  {
    id: 5,
    title: "Lorem ipsum dolor sit",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    pic: banner6,
  },

  {
    id: 6,
    title: "Lorem ipsum dolor sit",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    pic: banner6,
  },
];

const Items = () => {
  return (
    <>
      <div className="text-center my-16">
        <h1
          style={{ fontFamily: `'Alfa Slab One', cursive` }}
          className="text-5xl"
        >
          Choose & Enjoy
        </h1>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.{" "}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:mx-3 xl:mx-0">
          {discribtion.map((items) => {
            const { id, title, dis, pic } = items;
            return (
              <div key={id}>
                <div className="card  bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={pic} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{dis}</p>
                    <div className="card-actions">
                      <button className="btn bg-[#3d2514] text-white">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-actions flex justify-center my-10">
          <button className="btn bg-[#3d2514] text-white">seen all Items</button>
        </div>
      </div>
    </>
  );
};

export default Items;
