"use client";
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const element = useRef(null);
  const moon = useRef(null);
  const { scrollYProgress } = useScroll({ target: element, offset: ["start end", "end 0.95"] });
  const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.3"]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0", "15%"]);

  const { scrollYProgress: moonScroll } = useScroll({ target: moon, offset: ["start 1200px", "end 0.35"] });
  const moonScale = useTransform(moonScroll, [0, 1], ["0.7", "1"]);
  const right = useTransform(moonScroll, [0, 1], ["60%", "10%"]);
  const top = useTransform(moonScroll, [0, 1], ["-50%", "-130%"]);
  const rotate = useTransform(moonScroll, [0, 1], ["0deg", "50deg"]);
  const rotatePlanet = useTransform(scrollYProgress, [0, 1], [3, 0]);
  return (
    <footer className="relative h-[552px]">
      <motion.img
        src="/moon.png"
        style={{ scale: moonScale, right, top, rotate }}
        ref={moon}
        className="width-[400px]  absolute -z-20"
      ></motion.img>
      <motion.img
        src="/footer.png"
        style={{ scale, translateY, rotate: rotatePlanet }}
        ref={element}
        className="width-[100%] absolute -z-10 object-cover"
      ></motion.img>
    </footer>
  );
};

export default Footer;
