import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/assets/logo.svg";
const Navbar = () => {
  const NavLinks = (
    <>
      <ul className="menu menu-horizontal px-1 font-bold ">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <Link to={"login"}>Login</Link>
        </li>
      </ul>
    </>
  );
  return (
    <div className=" bg-base-100">
      <div className=" navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul>{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-secondary">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
