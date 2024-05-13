import React from "react";
import Button from "./shared/Button";
import SmoothText from "./helpers/SmoothText";

const About = () => {
  return (
    <div className="max-w-[1084px] px-20 pt-[397px] text-white pb-[700px]">
      <SmoothText textStyle={"font-clashGrotesk text-[64px] leading-[80px] font-medium mb-8"}>
        Crowdsourcing our collective intelligence to build the best AI
      </SmoothText>
      {/* <h2 className="font-clashGrotesk text-[64px] leading-[80px] font-medium mb-8">
        Crowdsourcing our collective intelligence to build the best AI
      </h2> */}
      <SmoothText textStyle={"text-2xl leading-9 font-inter font-normal mb-8"}>
        Open source AIs have been lagging in development behind OpenAI with billions of dollars.We run competitions
        between AI models to find and pay for the best AI model. Users will be able to access the best AI models.
      </SmoothText>
      {/* <p className="text-2xl leading-9 font-inter font-normal mb-8">
        Open source AIs have been lagging in development behind OpenAI with
        billions of dollars.We run competitions between AI models to find and
        pay for the best AI model. Users will be able to access the best AI
        models.
      </p> */}
      <Button size="lg" className="text-xl leading-6">
        Use the cutting edge AI
      </Button>
    </div>
  );
};

export default About;
