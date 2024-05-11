"use client";
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

const BackgroundImage = () => {
  const element = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  const top = useTransform(scrollY, [0, 1700], ["200px", "1900px"]);
  const translateY = useTransform(scrollYProgress, [0, 0.07], [0, -200]);
  const translateX = useTransform(scrollYProgress, [0, 0.07], [0, -50]);
  return (
    <motion.img
      src="/planet.png"
      style={{ top, translateY: translateY, translateX: translateX }}
      ref={element}
      className="width-[1016px] text-center absolute -z-10 right-[-5%]"
    ></motion.img>
  );
};

export default BackgroundImage;
