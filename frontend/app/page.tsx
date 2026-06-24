import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProgramSection from "@/components/home/ProgramSection";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
    </div>
  );
}
