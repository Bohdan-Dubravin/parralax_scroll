import React from "react";
import Link from "next/link";
import Button from "./shared/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-center mt-8 font-inter gap-12 mb-[100px]">
      <Link href="#leaderboard" className="text-white text-lg leading-[22px]">
        LLM Leaderboard
      </Link>
      <Button>Buy Spice AI</Button>
    </div>
  );
};

export default Header;
