"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Title = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({ target: element, offset: ["start 400px", "start 0.15"] });
  const fontSize = useTransform(scrollYProgress, [0, 1], ["110px", "80px"]);
  const background = useTransform(
    scrollYProgress,
    [0.7, 1],
    [
      "linear-gradient(108.88deg, #b53ea4 -2.82%, #fc6f32 34.48%, #ff4a59 93.08%)",
      "linear-gradient(0deg, rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.2)),linear-gradient(106.2deg, #ffd6f9 -12.33%, #ffcbb4 50.28%, #ffbec3 114.17%)",
    ]
  );
  return (
    <motion.h1
      transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
      }}
      style={{ fontSize, background }}
      ref={element}
      className="text-white title__gradient leading-tight"
    >
      A new economic primitive <br /> for funding decentralized AI
    </motion.h1>
  );
};

export default Title;
