"use client";
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

const BackgroundImage = () => {
  const element = useRef(null);
  const { scrollY } = useScroll();
  const top = useTransform(scrollY, [0, 1700], ["0%", "1700px"]);

  return (
    <motion.img
      src="/planet.png"
      style={{ top }}
      ref={element}
      className="width-[1016px] text-center absolute -z-10 right-[-5%]"
    ></motion.img>
  );
};

export default BackgroundImage;
