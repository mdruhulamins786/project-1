import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/photo/logo.png";
import bg from "../assets/photo/background.png";

const Navbar = () => {
  return (
    <>
      <div style={{ background: `url(${bg})` }} className="navbar bg-base-100">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-offset-2">
                    <img
                      alt=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbFgqBrJ7xxyQ-_95fRumiMMA8eTOsYNmYJEgnWwQ3yXOTEXOTK_V8AgfCH-dZZhEIeo&usqp=CAU"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <a href="/">
              {" "}
              <img src={logo} alt="/" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-offset-2">
                  <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbFgqBrJ7xxyQ-_95fRumiMMA8eTOsYNmYJEgnWwQ3yXOTEXOTK_V8AgfCH-dZZhEIeo&usqp=CAU"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
