import React from "react";
import "./Section11.css";
import image11 from "@/assets/images/section11.png";

export default function Section11() {
  return (
    <div className="section11">
      <p className="heading">
        There's never been a <br />
        better time to upgrade.
      </p>
      <p className="subheading">
        Here’s what you get with the new MacBook Pro.
      </p>
      <img src={image11} alt="features" />
    </div>
  );
}
