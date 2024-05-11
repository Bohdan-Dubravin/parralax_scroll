import BackgroundImage from "@/components/BackgroundImage";
import ScrollLine from "@/components/ScrollLine";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="p-24 pt-[232px] ">
      <BackgroundImage />
      <Title /> <div className="h-[1200px]"></div>
      <div className="h-[1200px]"></div>
      <ScrollLine />
      <div className="h-[1200px]"></div>
    </main>
  );
}
