import React from "react";
import Filters from "../components/Filters";
import WomensSection from "../components/MensSection";

export default function Men() {
  return (
    <div className=" flex flex-row">
      {/* Filters */}
      <Filters />
      <WomensSection />
    </div>
  );
}
