"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Join = () => {
  const element = useRef(null);
  const declineOpacityELement = useRef(null);
  const nextElement = useRef(null);
  const moon = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "start 0.9"],
  });
  const { scrollYProgress: scrollDeclineOpacity, scrollY } = useScroll({
    target: declineOpacityELement,
    offset: ["start end", "end -0.8"],
  });
  const { scrollYProgress: nextText } = useScroll({
    target: nextElement,
    offset: ["start 0.5", "start 0.4"],
  });
  const { scrollYProgress: moonScroll } = useScroll({
    target: moon,
    offset: ["start 1200px", "end 0.35"],
  });
  const moonScale = useTransform(moonScroll, [0, 1], ["0.7", "1"]);
  const right = useTransform(moonScroll, [0, 1], ["90%", "-30%"]);
  const top = useTransform(moonScroll, [0, 1], ["-80%", "-50%"]);
  const rotate = useTransform(moonScroll, [0, 1], ["0deg", "90deg"]);
  const declineOpacity = useTransform(scrollY, [0.7, 1], [0, 1]);
  return (
    <div className="relative  mt-10 px-24 text-white -translate-y-20">
      <motion.div ref={element} style={{ opacity: scrollYProgress }}>
        <motion.div
          ref={declineOpacityELement}
          style={{ opacity: declineOpacity }}
          className="-translate-y-40"
        >
          <motion.h2 className="font-clashGrotesk text-[64px]  leading-[80px] font-medium mb-8">
            Join our community
          </motion.h2>
          <motion.p className="text-2xl max-w-[940px] leading-9 font-inter font-normal mb-8">
            Join us on our mission to to the moon & revolutionize open source AI
            development so that we can build a permissionless, democratized, and
            decentralized AI. <br />
            <br /> Let the fate of AI be in our hands and not that of big tech
            companies.
          </motion.p>
          <div className="flex gap-8">
            <Image
              src="/assets/img/telegram.svg"
              width={64}
              height={64}
              alt="telegram"
            />
            <Image
              src="/assets/img/x.svg"
              width={64}
              height={64}
              alt="telegram"
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.p
        ref={nextElement}
        style={{ opacity: nextText }}
        className="absolute left-1/2 -translate-y-20 -translate-x-1/2 text-[32px] "
      >
        Join our community and harvest $SALT
      </motion.p>
      <motion.img
        src="/moon.png"
        style={{ scale: moonScale, right, top, rotate }}
        ref={moon}
        className="width-[400px]  absolute -z-20"
      ></motion.img>
    </div>
  );
};

export default Join;
