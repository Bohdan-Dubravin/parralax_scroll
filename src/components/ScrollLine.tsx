"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollLine = () => {
  const element = useRef(null);
  const elementScrollLine = useRef(null);
  const { scrollYProgress } = useScroll({ target: element, offset: ["start 0.9", "start 0.7"] });
  const { scrollYProgress: scrollLine } = useScroll({
    target: elementScrollLine,
    offset: ["start start", "start end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const left = useTransform(scrollLine, [0, 1], ["-0px", "800px"]);
  return (
    <>
      <motion.p
        style={{ opacity: scrollYProgress, transform: `translateY(${translateY}px` }}
        ref={element}
        className="text-white text-[64px]  text-center"
      >
        Projects integrated into the Arrakis AI Ecosystem
      </motion.p>
      <motion.div ref={elementScrollLine} style={{ left }} className="flex gap-[180px] w-full items-center relative">
        <img src="solana.svg" />
        <img src="solana.svg" />
        <img src="solana.svg" />
        <img src="solana.svg" />
        <img src="solana.svg" />
      </motion.div>
    </>
  );
};

export default ScrollLine;
