import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Section7.css";

export default function Section7() {
  // Track the scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll progress (0 → 1) to scale values (1.5 → 0.7)
  const scale = useTransform(scrollYProgress, [0, 1], [2.7, 0.05]);
  return (
    <div className="section7">
      <div className="text">
        <p className="heading">DISPLAY</p>
        <p className="subheading">See it all in a new light.</p>
      </div>
      <motion.div
        style={{
          width: "100vw",
          height: "135vh",
          backgroundImage: `url("https://www.apple.com/v/macbook-pro/ao/images/overview/themes/display/display_startframe__s3kff4jwzhuq_xlarge.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "100px",
          scale, // Apply the dynamic scaling
        }}
      ></motion.div>
      <p className="desc">
        Go from the sunniest terrace to the darkest studio with more ease than
        ever. The eye-popping
        <br />
        <span className="highlight">Liquid Retina XDR display</span> offers
        1,600 nits peak HDR brightness and now provides up to 1,000 nits of
        brightness for SDR content in bright light so you can see what’s on your
        screen more clearly outside. In low-light situations, it dims to 1 nit
        so you can work comfortably in darker spaces.
      </p>
    </div>
  );
}
