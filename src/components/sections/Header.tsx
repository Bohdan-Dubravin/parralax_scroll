"use client";
import React from "react";
import Link from "next/link";
import Button from "../shared/Button";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { scrollY } = useScroll({});
  const top = useTransform(
    scrollY,
    isMobile ? [0, 80] : [0, 200],
    isMobile ? ["0px", "80px"] : ["0px", "200px"]
  );
  return (
    <motion.div
      style={{ top }}
      className="flex relative items-center justify-center mt-8 font-inter gap-5 md:gap-12 mb-24 md:mb-[200px]"
    >
      <Link
        href="#leaderboard"
        className="text-white text-sm md:text-lg leading-[22px]"
      >
        LLM Leaderboard
      </Link>
      <Button>Buy Spice AI</Button>
    </motion.div>
  );
};

export default Header;
