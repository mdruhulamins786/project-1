import React from "react";

import person_1 from "../assets/revews/people1.png";
import person_2 from "../assets/revews/people2.png";
import person_3 from "../assets/revews/people3.png";
import revews_1 from "../assets/revews/revews-icon.png";

const Revews = () => {
  const comments = [
    {
      id: 1,
      name: "Jone Sonen",

      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      pic: person_1,
    },

    {
      id: 2,
      name: "Layle gsdw",

      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      pic: person_2,
    },

    {
      id: 3,
      name: "Jully killey",

      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      pic: person_3,
    },
    {
      id: 3,
      name: "Jully killey",

      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      pic: person_1,
    },
  ];

  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          <p
            style={{ fontFamily: `'Alfa Slab One', cursive` }}
            className="text-4xl uppercase"
          >
            our customers review
          </p>
          <p className="mt-3 mb-10 text-[#3d2514]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
            quo magnam eum debi magnam eum debi rat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8 ">
          {comments.map((comment) => {
            const { id, name, dis, pic } = comment;
            return (
              <>
                <div key={id} className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={pic} alt="Shoes" className="w-40" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>
                      <div className="rating rating-md">
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-7"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </p>

                    <div className="flex flex-col w-full border-opacity-50">
                      <div className="divider ">
                        <img className="w-10" src={revews_1} alt="" />
                      </div>
                    </div>

                    <p>{dis}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="card-actions flex justify-center mb-10">
          <button className="btn bg-[#3d2514] text-white">
            seen all Revews
          </button>
        </div>
      </div>
    </>
  );
};

export default Revews;
