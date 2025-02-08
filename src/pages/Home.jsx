import React from "react";
import "./Home.css";
import Section1 from "@/sections/Section1";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import Section4 from "@/sections/Section4";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      {/* section 4 and section 5 have been interchanged */}
      <Section4 />
    </>
  );
}
