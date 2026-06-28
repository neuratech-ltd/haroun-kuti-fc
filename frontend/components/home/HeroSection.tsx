import { Button } from "@/components/ui/button";
import { UserPlus, Calendar } from "lucide-react";
import HeroImage from "@/assets/images/banner.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-10 bg-black/80 flex items-center overflow-hidden h-100 md:h-125 lg:h-190"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative flex flex-col px-8 md:px-12 py-14 gap-5 text-center items-center mx-auto z-10">
        <h1 className="font-black text-4xl md:text-5xl text-white leading-[1.1] mb-5">
          Where passion meets <br />
          the <span className="text-logo-green uppercase">beautiful game</span>
        </h1>
        <p className="text-md text-white leading-relaxed mb-8 max-w-xl">
          Harounkuti FC trains students of all ages, develops skills through
          expert coaching, and competes in tournaments across the region. Join
          our family today.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <Button className="bg-white hover:bg-logo-black hover:text-white text-green-950 font-bold text-sm px-5 h-10">
            <UserPlus size={16} className="mr-2" />
            Enroll now
          </Button>
          <Button
            variant="outline"
            className="border-white text-white  hover:bg-logo-black hover:text-white hover:border-white bg-transparent text-sm px-5 h-10"
          >
            <Calendar size={16} className="mr-2" />
            View schedule
          </Button>
        </div>
      </div>
    </section>
  );
}
