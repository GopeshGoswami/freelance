import React from "react";
import Login from "../images/login.png";

export default function Profile() {
  return (
    <div className="">
      <img src={Login} alt="" className=" absolute -translate-y-16 h-[101vh]" />
      <div className="  h-screen items-center justify-center flex">
        <div className=" flex items-center justify-center border-2 border-red-800 bg-gray-500 text-green-400 w-2/3 backdrop-filter backdrop-blur-lg">
          <div className=" h-20 flex items-center justify-center">
            hello okay hi
          </div>
        </div>
      </div>
    </div>
  );
}
