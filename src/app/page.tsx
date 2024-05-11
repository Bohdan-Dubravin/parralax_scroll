import BackgroundImage from "@/components/BackgroundImage";
import Benefits from "@/components/Benefits";
import Comet from "@/components/Comet";
import Footer from "@/components/Footer";
import SmoothScrollComponent from "@/components/helpers/SmothScroll";
import ScrollLine from "@/components/ScrollLine";
import Title from "@/components/Title";

export default function Home() {
  return (
    <SmoothScrollComponent>
      <main className=" ">
        <div className="p-24 pt-[232px] min-h-[100vh]">
          <Title />
          <Benefits />
        </div>

        <BackgroundImage />
        <Comet />

        <div className="h-[1200px]"></div>
        <ScrollLine />
        <div className="h-[1200px]"></div>
      </main>
      <Footer />
    </SmoothScrollComponent>
  );
}
