"use client";
import React from "react";
import Button from "../shared/Button";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const About = () => {
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
      className="max-w-[1084px] lg:px-24 px-4 lg:pt-[397px] pt-[80px] text-white pb-[700px]"
    >
      <motion.h2
        initial="hidden"
        animate={controls}
        viewport={{ once: false }}
        transition={{ duration: 0.35, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: 100 },
        }}
        ref={ref}
        className="font-clashGrotesk lg:text-[64px] text-[32px]  lg:leading-[80px] font-medium mb-8"
      >
        Crowdsourcing our collective intelligence to build the best AI
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={controls}
        viewport={{ once: false }}
        transition={{ duration: 0.35, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: 100 },
        }}
        ref={ref}
        className="lg:text-2xl text-lg lg:leading-9 font-inter font-normal mb-8"
      >
        Open source AIs have been lagging in development behind OpenAI with
        billions of dollars.We run competitions between AI models to find and
        pay for the best AI model. Users will be able to access the best AI
        models.
      </motion.p>
      <motion.div
        initial="hidden"
        animate={controls}
        viewport={{ once: false }}
        transition={{ duration: 0.35, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: 100 },
        }}
        ref={ref}
      >
        <Button size="lg" className="text-xl leading-6 w-full lg:w-fit">
          Use the cutting edge AI
        </Button>
      </motion.div>
    </div>
  );
};

export default About;
