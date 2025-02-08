import React from "react";
import video_section5 from "@/assets/videos/section5.mp4";
import "./Section5.css";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function Section5() {
  return (
    <div className="section5">
      <p className="heading">
        Next-level graphics
        <br /> performance. Game on.
      </p>
      <video
        width="100%"
        muted
        autoPlay
        alt="home intro video"
        className="glowing-box"
      >
        <source src={video_section5} type="video/mp4" />
      </video>
      <FadeInWrapper className={"content"}>
        <p className="desc">
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="highlight">
            gaming feels more immersive and realistic than ever.
          </span>
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </FadeInWrapper>
    </div>
  );
}
