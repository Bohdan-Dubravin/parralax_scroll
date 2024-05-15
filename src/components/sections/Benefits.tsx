"use client";
import constants from "@/constants";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Benefits = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [containerRef] = useInView();
  const [userScrolled, setUserScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setUserScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView && userScrolled) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, userScrolled]);

  return (
    <div
      ref={containerRef}
      className="grid gap-[33px] grid-cols-1 md:grid-cols-3"
    >
      {constants.benefits.map((benefit, index) => {
        return (
          <motion.div
            id={`benefit-${index}`}
            ref={ref}
            key={index}
            initial="hidden"
            animate={controls}
            viewport={{ once: false }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 100 },
            }}
            className="text-white w-full bg__gradient py-8 rounded-full"
          >
            <div className="flex flex-col items-center">
              <h4 className="text-4xl md:text-[64px] font-bold mb-5 md:leading-[79px] font-clashGrotesk">
                {benefit.title}
              </h4>
              <p className="text-[24px] leading-[29px] font-inter">
                {benefit.text}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Benefits;
