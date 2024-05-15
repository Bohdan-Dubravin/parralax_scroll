import React from "react";
import Benefits from "@/components/sections/Benefits";
import Header from "@/components/sections/Header";
import Title from "@/components/sections/Title";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <div className="px-5 lg:px-20 max-w-[1920px] w-full mx-auto">
      <Header />
      <Title />
      <div>
        <h3 className="text-white text-lg md:text-2xl md:leading-[29px] my-5 md:my-9 font-normal font-inter">
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </h3>
        <Button
          size="lg"
          className="mb-[100px] text-lg md:text-2xl md:leading-[29px]"
        >
          Buy Spice AI
        </Button>
      </div>
      <Benefits />
    </div>
  );
};

export default Hero;
