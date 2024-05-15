"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Title = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: isMobile
      ? ["start 170px", "start 90px"]
      : ["start 290px", "start 90px"],
  });
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.3],
    isMobile ? ["44px", "42px"] : ["128px", "126px"]
  );
  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    isMobile ? ["54px", "52px"] : ["157px", "155px"]
  );
  const background = useTransform(
    scrollYProgress,
    [0.1, 0.6],
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
      style={{
        fontSize,
        background,
        lineHeight,
        transition: "background 0.5s ease",
      }}
      ref={element}
      className="text-white title__gradient text-5xl font-medium lg:leading-[157px] lg:text-[128px] font-clashGrotesk max-w-[1629px] transition-[background]"
    >
      A new economic primitive <br /> for funding decentralized AI
    </motion.h1>
  );
};

export default Title;
