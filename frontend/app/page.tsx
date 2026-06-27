import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProgramSection from "@/components/home/ProgramSection";
import AchievementsSection from "@/components/home/AchivementSection";
import ContactSection from "@/components/home/ContactSections";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
