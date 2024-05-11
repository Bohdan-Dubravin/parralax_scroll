"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollLine = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({ target: element, offset: ["start 0.9", "start 0.7"] });
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.p
      style={{ opacity: scrollYProgress, transform: `translateY(${translateY}px` }}
      ref={element}
      className="text-white text-[64px]  text-center"
    >
      Projects integrated into the Arrakis AI Ecosystem
    </motion.p>
  );
};

export default ScrollLine;
