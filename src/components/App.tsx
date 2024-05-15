import BackgroundImage from "@/components/sections/BackgroundImage";
import Comet from "@/components/sections/Comet";
import Footer from "@/components/sections/Footer";

import SmoothScrollComponent from "@/components/helpers/SmothScroll";
import ScrollLine from "@/components/sections/ScrollLine";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Table from "./sections/Table";
import Join from "./sections/Join";

const clashGrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ClashGrotesk-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/ClashGrotesk-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-clashGrotesk",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const App = () => {
  return (
    <SmoothScrollComponent>
      <main className={`${inter.variable} ${clashGrotesk.variable} relative`}>
        <div className="min-h-[100vh] relative max-w-[1920px] w-full mx-auto">
          <Hero />
          <BackgroundImage />
          <Comet />
          <About />
          <Table />
        </div>
        <div className="h-[400px]"></div>
        <ScrollLine />
        <div className="h-[400px]"></div>
        <Join />
      </main>
      <Footer />
    </SmoothScrollComponent>
  );
};

export default App;
