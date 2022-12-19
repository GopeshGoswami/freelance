import React from "react";
import Filters from "../components/Filters";
import MensSection from "../components/MensSection";

export default function Men() {
  return (
    <div className=" flex flex-row">
      {/* Filters */}
      <Filters />
      <MensSection />
    </div>
  );
}

// {menList.map((items) => {
//   return (
//     <div className=" w-[24%] h-1/2 my-10 flex flex-col mx-1 border-2 border-red-500">
//       <div className=" ">
//         <img src={Tshirt} alt="" className=" h-96 object-cover" />
//         <p>{items.name}</p>
//       </div>
//     </div>
//   );
// })}
