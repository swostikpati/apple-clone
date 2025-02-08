import React from "react";
import { motion } from "framer-motion";
import "./Section6.css";
import FadeInWrapper from "@/components/FadeInWrapper";
import section6 from "@/assets/images/section6.png";
export default function Section6() {
  return (
    <div className="section6">
      <div className="text">
        <p className="heading">BATTERY</p>
        <p className="subheading">
          We can do this all day. <br />
          And night.
        </p>
      </div>
      <motion.div
        initial={{ scale: 1.2 }} // Start at 100%
        animate={{ scale: 1.5 }} // Animate to 120%
        transition={{ duration: 8, ease: "easeInOut" }} // 5 seconds, smooth transition
        className="battery-hero"
      ></motion.div>
      <FadeInWrapper className="desc">
        <p>
          The new MacBook Pro has the{" "}
          <span className="highlight">longest battery life ever in a Mac</span>{" "}
          — up to 24 hours — and supports fast charge, allowing it to charge up
          to 50 percent in just 30 minutes. 50 All models provide the same
          performance whether they’re plugged in or not, so you can spend more
          time thinking about an outlet for your passion, not your laptop.
        </p>
      </FadeInWrapper>
      <FadeInWrapper className="desc-img-wrapper">
        <img src={section6} alt="metrics" className="desc-img" />
      </FadeInWrapper>
    </div>
  );
}
