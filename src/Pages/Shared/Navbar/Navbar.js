import React from "react";
import Button from "../../../Components/Button/Button";
import "./Navbar.css";
// import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a
          href="!#"
          className="mr-3 hover-underline-animation  font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">01.</span> HOME
        </a>
      </li>
      <li>
        <a
          href="!#"
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">02.</span> ABOUT
        </a>
      </li>
      <li>
        <a
          href="!#"
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">03.</span> RESUME
        </a>
      </li>
      <li>
        <a
          href="!#"
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">04.</span> WORK
        </a>
      </li>
      <li>
        <a
          href="!#"
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">05.</span> BLOG
        </a>
      </li>
      <li>
        <a
          href="!#"
          className="mr-3 hover-underline-animation font-medium text-sm text-white"
        >
          <span className="text-[#72E2AE]">06.</span> CONTACT
        </a>
      </li>
    </>
  );

 
  return (
    <>
      <div className="navbar container mx-auto static">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a href="!#" className="ml-3 text-5xl font-bold text-[#72E2AE]">
            ANAM.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end"><Button text='Hire me'/></div>
      </div>
    </>
  );
};

export default Navbar;
