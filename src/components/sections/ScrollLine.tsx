"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollLine = () => {
  const element = useRef(null);
  const elementScrollLine = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.6"],
  });
  const { scrollYProgress: scrollLine } = useScroll({
    target: elementScrollLine,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["10px", "-50px"]);
  const left = useTransform(scrollLine, [0, 1], ["5%", "-90%"]);
  return (
    <>
      <motion.p
        style={{ opacity: scrollYProgress, translateY }}
        ref={element}
        className="text-white text-[64px]  text-center"
      >
        Projects integrated into the Arrakis AI Ecosystem
      </motion.p>
      <motion.div
        ref={elementScrollLine}
        style={{ left }}
        className="flex gap-[180px] w-full items-center relative pointer-events-none"
      >
        <img src="solana.svg" />
        <img src="arwave.svg" />
        <img src="bitttensor.svg" />
        <img src="round.svg" />
        <img src="solana.svg" />
        <img src="arwave.svg" />
        <img src="bitttensor.svg" />
        <img src="round.svg" />
      </motion.div>
    </>
  );
};

export default ScrollLine;
