import React from "react";

const Booking = () => {
  return (
    <div className="mb-10">
      <div className="text-center">
        <p className="text-[#3d2514] text-2xl uppercase font-semibold">
          Reservation
        </p>
        <p
          style={{ fontFamily: `'Alfa Slab One', cursive` }}
          className="text-4xl text-[#3d2514] uppercase mt-2"
        >
          Book your table
        </p>
      </div>

      <form action="">
        <div className="grid md:grid-cols-2  md:w-[550px] gap-x-3 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="text"
              placeholder="date"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">People</span>
            </label>
            <input
              type="text"
              placeholder="gender"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input
              type="text"
              placeholder="time"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="phone"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="btn bg-[#3d2514] text-white">Book Table</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
