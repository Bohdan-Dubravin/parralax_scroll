"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const BackgroundImage = () => {
  const element = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  const top = useTransform(scrollY, [0, 1700], ["66px", "1900px"]);
  const translateY = useTransform(scrollYProgress, [0, 0.07], [0, -200]);

  return (
    <motion.img
      src="/planet.png"
      style={{ top, translateY: translateY }}
      ref={element}
      className="width-[1016px] text-center absolute -z-10 right-[0.3rem] -top-40"
    ></motion.img>
  );
};

export default BackgroundImage;
