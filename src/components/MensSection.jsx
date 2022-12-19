import React from "react";
import menList from "../components/MensList";
import Tshirt from "../images/TShirt.jpeg";

export default function MensSection() {
  return (
    <aside className="  ">
      <div className=" h-3/5 flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
        {menList.map((items) => {
          return (
            <div className=" basis-1/5 flex-1  h-full">
              <div className=" h-96 mb-2">
                <img
                  src={Tshirt}
                  alt=""
                  className=" rounded-lg object-cover w-full h-full"
                />
                <div className=" flex items-baseline gap-3 ">
                  <p className=" font-bold text-2xl my-2">{items.cost}</p>
                  <del className=" text-gray-600">{items.originalPrice}</del>
                </div>
                <p className=" text-lg">{items.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
