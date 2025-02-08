import React from "react";
import "./Section1.css";
import appleImg from "@/assets/images/appleintel.png";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function section1() {
  return (
    <div className="section1">
      <FadeInWrapper delay={0.8}>
        <div>
          <p className="heading"> MacBook Pro</p>
          <img
            src="https://www.apple.com/v/macbook-pro/ao/images/overview/welcome/hero_apple_intelligence_headline__d3q0g47xl682_large.png"
            alt="APPLE"
            className="apple-intel"
          />
        </div>
      </FadeInWrapper>

      <div className="video-container">
        <video width="100%" muted autoPlay alt="home intro video">
          <source
            src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/welcome-hero/large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <FadeInWrapper delay={0.9}>
        <div className="bottom-hero">
          <button className="buy-button">Buy</button>

          <p>From $1599 or $133.25/mo. for 12 mo.*</p>
          <p>Apple Intelligence Now Available</p>
        </div>
      </FadeInWrapper>
    </div>
  );
}
