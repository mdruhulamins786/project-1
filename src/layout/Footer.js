import React from "react";
import { Link } from "react-router-dom";

import footer from "../assets/photo/background-2.png";
import logo from "../assets/photo/logo.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{ background: `url(${footer})` }}
        className="footer footer_style px-10 py-20 text-white"
      >
        <div >
          <img src={logo} alt="" className="bg-white p-5 rounded" />
        </div>
        <div>
          <span  className="footer-title">Services</span>
          <Link className="link link-hover" to="">
            Branding
          </Link>
          <Link to="" className="link link-hover">
            Design
          </Link>
          <Link to="" className="link link-hover">
            Marketing
          </Link>
          <Link to="" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div >
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
