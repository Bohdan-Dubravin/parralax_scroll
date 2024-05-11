"use client";
import { motion, px, useScroll, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Benefits = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({ target: element, offset: ["start 0.3", "start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], ["0", "120"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["0", "1"]);
  return (
    <div
      //   style={{ top, translateY: translateY, translateX: translateX }}
      ref={element}
      className="grid gap-[33px] grid-cols-3  px-24 mt-[550px] "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, translateY: -150 },
          hidden: { opacity: 0, translateY: 100 },
        }}
        className="text-white w-full bg__gradient py-[32px] rounded-full"
      >
        <div className="flex flex-col items-center ">
          <h4 className="text-[64px] font-bold mb-5">1,873</h4>
          <p className="text-[24px] font-light">LLM models</p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, translateY: -150 },
          hidden: { opacity: 0, translateY: 100 },
        }}
        className="text-white w-full bg__gradient py-[32px] rounded-full"
      >
        <div className="flex flex-col items-center ">
          <h4 className="text-[64px] font-bold mb-5">1,873</h4>
          <p className="text-[24px] font-light">LLM models</p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, translateY: -150 },
          hidden: { opacity: 0, translateY: 100 },
        }}
        className="text-white w-full bg__gradient py-[32px] rounded-full"
      >
        <div className="flex flex-col items-center ">
          <h4 className="text-[64px] font-bold mb-5">1,873</h4>
          <p className="text-[24px] font-light">LLM models</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Benefits;
