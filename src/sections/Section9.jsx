import React from "react";
import "./Section9.css";
import FadeInWrapper from "@/components/FadeInWrapper";
import video from "@/assets/videos/section9.mp4";
import section9 from "@/assets/images/section9.png";

export default function Section9() {
  return (
    <div className="section9">
      <div className="text">
        <p className="heading">PORTS AND CONNECTIVITY</p>
        <p className="subheading">
          Make powerful
          <br /> Connections.
        </p>
        <FadeInWrapper>
          <p className="desc">
            MacBook Pro packs an array of ports for connecting high-speed
            peripherals, driving high-resolution displays, or directly
            offloading SDXC cards.
            <span className="highlight">
              {" "}
              Models with the M4 Pro and M4 Max chips now include Thunderbolt 5
            </span>
            , which offers transfer speeds of up to 120Gb/s.
            <br />
            <br />
            MacBook Pro also supports both Wi-Fi 6E53 and Bluetooth 5.3 to
            connect to the internet and your wireless devices.
          </p>
        </FadeInWrapper>
      </div>

      <video width="100%" muted autoPlay alt="home intro video">
        <source src={video} type="video/mp4" />
      </video>
      <FadeInWrapper className="desc-img-wrapper">
        <img src={section9} alt="comparision metrics" className="desc-img " />
      </FadeInWrapper>
    </div>
  );
}
