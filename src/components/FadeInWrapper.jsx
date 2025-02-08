import React from "react";
import { motion } from "framer-motion";

const FadeInWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Initial state: invisible and slightly below
      animate={{ opacity: 1, y: -10 }} // Final state: visible and in place
      transition={{ duration: 1, ease: "easeOut", delay: 0.8 }} // Animation duration and easing
      style={{ overflow: "hidden" }} // Ensures content looks neat during the animation
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
