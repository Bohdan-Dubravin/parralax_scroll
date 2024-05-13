"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
// import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  textStyle: string;
}

export default function SmoothText({ children, textStyle }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "end 0.45"],
  });

  const words = children.split(" ");
  return (
    <p ref={container} className={"flex flex-wrap justify-start items-center text-white " + textStyle}>
      {words.map((word: string, i: number) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative ml-3 mt-3">
      {children.split(" ").map((char: string, i: number) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const translateY = useTransform(progress, [0, 1], ["-10%", "10%"]);
  return (
    <span>
      <motion.span className="absolute opacity-10 translate-y-3" style={{ translateY }}>
        {children}
      </motion.span>
      <motion.span className="relative" style={{ opacity: opacity, translateY }}>
        {children}
      </motion.span>
    </span>
  );
};
