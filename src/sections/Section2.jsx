import React from "react";
import "./Section2.css";
import hello from "@/assets/images/hello.png";

export default function Section2() {
  return (
    <div className="section2">
      <div className="card">
        <img src={hello} alt="hello image" />
      </div>
    </div>
  );
}
