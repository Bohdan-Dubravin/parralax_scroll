"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const BackgroundImage = () => {
  const element = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  const top = useTransform(scrollY, [0, 1700], ["66px", "1700px"]);
  const topFog1 = useTransform(scrollY, [0, 1700], ["10%", "1900px"]);
  const leftFog1 = useTransform(scrollY, [0, 1700], ["-10%", "10%"]);
  const topFog2 = useTransform(scrollY, [0, 1400], ["-15%", "30%"]);
  const translateY = useTransform(scrollYProgress, [0, 0.3], [100, -150]);
  const rotateFog1 = useTransform(scrollYProgress, [0, 0.3], [-20, 40]);
  return (
    <div className="overflow-x-hidden">
      <motion.img
        src="/assets/img/planet.svg"
        style={{ top, translateY: translateY }}
        ref={element}
        className="width-[1016px] text-center absolute -z-10 right-[0.3rem]  -top-40"
      ></motion.img>
      <motion.img
        src="/assets/img/fog-2.svg"
        style={{ top: topFog2 }}
        // ref={element}
        className="width-[804px] text-center absolute -z-10  top-[-15%] left-[20%] rotate-[40deg]"
      ></motion.img>
      <motion.img
        src="/assets/img/fog-1.svg"
        style={{ rotate: rotateFog1, top: topFog1, left: leftFog1 }}
        // ref={element}
        className="width-[504px] text-center absolute -z-10 left-[-10%] top-[10%] rotate-[-20deg]"
      ></motion.img>
    </div>
  );
};

export default BackgroundImage;
