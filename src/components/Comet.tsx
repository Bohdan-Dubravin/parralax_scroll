"use client";
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Comet = () => {
  const element = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  const top = useTransform(scrollY, [1700, 2900], ["2100px", "2900px"]);
  const right = useTransform(scrollY, [1700, 2500], ["100%", "-40%"]);

  return (
    <motion.img
      src="/comet.png"
      style={{ top, right }}
      ref={element}
      className="width-[262px] text-center absolute -z-10 "
    ></motion.img>
  );
};

export default Comet;
