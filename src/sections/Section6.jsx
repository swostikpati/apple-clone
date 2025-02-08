import React from "react";
import { motion } from "framer-motion";
import "./Section6.css";

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
        transition={{ duration: 7, ease: "easeInOut" }} // 5 seconds, smooth transition
        className="battery-hero"
      ></motion.div>
    </div>
  );
}
