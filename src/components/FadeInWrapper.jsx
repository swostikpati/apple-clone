import React from "react";
import { motion } from "framer-motion";

const FadeInWrapper = ({ children, className, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Initial state: invisible and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 1, ease: "easeOut", delay }} // Animation duration and easing
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% of the element is in view
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
