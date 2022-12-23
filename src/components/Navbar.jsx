import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsBagFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 65) {
      setFix(true);
      console.log(window.scrollY);
    } else setFix(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  });

  return (
    <nav
      className={` h-[7vh] items-center flex justify-around sticky w-full top-0 left-10 z-20 text-white backdrop-filter backdrop-blur-lg `}
    >
      <div className=" mx-3 md:mx-20 flex md:w-2/4 justify-between flex-row items-center">
        <ul className=" mx-1 hidden md:flex gap-3 md:gap-10  items-center ">
          <Link className="hover:text-green-300 duration-500" to="/men">Men</Link>
          <Link className="hover:text-green-300 duration-500" to="/women">Women</Link>
        </ul>
        <Link to="/" className=" text-lg md:text-3xl font-black mr-10 hover:text-green-300 duration-500">
          Guava
        </Link>
      </div>

      {/* For Desktop */}
      <div className=" hidden md:flex items-center justify-around md:mx-20">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className=" bg-[#3D3737] md:mx-4 w-56 px-3 py-1 rounded-md focus:outline-none "
          />
        </div>
        <div className=" flex items-center  justify-center">
          <ul className=" flex items-center  gap-7 mx-2 lg:mx-5">
            <Link to="/profile"><div className=" flex items-center justify-center flex-col">
              <li>
              <a href="Profile.jsx"><CgProfile className=" text-xl lg:text-2xl" /></a>
              </li>
              <li className=" hidden lg:block hover:text-green-300 duration-500">Profile</li>
            </div></Link>
            <div className=" flex items-center flex-col">
              <li>
              <a href="Bag.jsx"><BsBagFill className=" text-xl lg:text-2xl" /></a>
              </li>
              <li className=" hidden lg:block hover:text-green-300 duration-500"><a href="Bag.jsx">Bag</a></li>
            </div>
          </ul>
        </div>
      </div>

      {/* For Mobile */}

      <div className=" md:hidden flex justify-between ">
        <input
          placeholder="Search..."
          type="text"
          className=" bg-[#3D3737] rounded-md px-2 py-1"
        />
      </div>
      <div className=" mx-1 md:hidden flex ">
        <CgProfile className=" mx-2 text-xl md:text-2xl" />
        <BsBagFill className=" mx-2 text-xl md:text-2xl" />
      </div>
    </nav>
  );
}

// BsBagFill;
