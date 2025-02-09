import FadeInWrapper from "@/components/FadeInWrapper";
import React from "react";
import "./Section8.css";

export default function Section8() {
  return (
    <div className="section8">
      <div className="text">
        <p className="heading">CAMERAS, MICS, AND SPEAKERS</p>
        <p className="subheading">
          Make it command <br /> Performance.
        </p>

        <FadeInWrapper>
          <p className="desc">
            The 12MP Center Stage camera helps you look sharp in any light.
            Together with the advanced mics and speakers, it lets you take
            charge of the meeting from afar.
          </p>
        </FadeInWrapper>
      </div>
      <div className="video-container">
        <video width="60%" loop muted autoPlay alt="home intro video">
          <source
            src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/center-stage/large_2x.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
