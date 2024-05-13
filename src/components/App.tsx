import BackgroundImage from "@/components/BackgroundImage";
import Comet from "@/components/Comet";
import Footer from "@/components/Footer";

import SmoothScrollComponent from "./helpers/SmoothScroll";
import ScrollLine from "@/components/ScrollLine";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Hero from "./Hero";
import About from "./About";
import Table from "./Table";

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

        {/* <ScrollLine /> */}
        <div className="h-[1200px]"></div>
      </main>
      <Footer />
    </SmoothScrollComponent>
  );
};

export default App;
