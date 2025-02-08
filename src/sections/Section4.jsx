import React from "react";
import "./Section4.css";
import FadeInWrapper from "@/components/FadeInWrapper";
import section4 from "@/assets/images/section4.png";

export default function Section4() {
  return (
    <div className="section4">
      <div className="text">
        <p className="heading">PERFORMANCE</p>
        <p className="subheading">Pro all out.</p>
      </div>
      <video
        width="90%"
        muted
        autoPlay
        alt="home intro video"
        className="glowing-box"
      >
        <source
          src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/performance/large_2x.mp4"
          type="video/mp4"
        />
      </video>

      <div className="text-bottom">
        <FadeInWrapper>
          <div>
            <p className="desc-para">
              MacBook Pro features the{" "}
              <span className="highlight">
                most advanced lineup of chips ever built for a pro laptop.
              </span>{" "}
              Phenomenal single- and multithreaded CPU performance, faster
              unified memory, enhanced machine learning accelerators — the M4
              family of chips gives you the kind of speed and capability you’ve
              never thought possible. And the powerful Neural Engine makes AI
              tasks like image upscaling and video caption creation as well as
              on-device Apple Intelligence features fly.
            </p>
          </div>
        </FadeInWrapper>
      </div>
      <FadeInWrapper className="desc-img-wrapper">
        <img src={section4} alt="comparision metrics" className="desc-img " />
      </FadeInWrapper>
    </div>
  );
}
