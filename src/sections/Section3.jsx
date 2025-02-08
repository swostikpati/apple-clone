import React from "react";
import "./Section3.css";
import img1 from "@/assets/images/section3_1.png";
import img2 from "@/assets/images/section3_2.png";
import img3 from "@/assets/images/section3_3.png";
import img4 from "@/assets/images/section3_4.png";
import img5 from "@/assets/images/section3_5.png";

export default function Section3() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="section3">
      <div className="heading-container">
        <p className="heading">Get the highlights.</p>
      </div>
      <div className="parallax-scroll">
        {images.map((image, index) => (
          <div className="parallax-item" key={index}>
            <img src={image} alt={`Section ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
