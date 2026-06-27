import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Calendar } from "lucide-react";
import heroImage from "@/assets/images/fancy-crave-qowyMze7jqg-unsplash.jpg";
// app/page.tsx or your Hero component

// const StatItem = ({ number, label }: { number: string; label: string }) => (
//   <div className="text-center">
//     <p className="font-black text-3xl text-green-400 leading-none font-display">
//       {number}
//     </p>
//     <p className="text-xs text-green-300 mt-1">{label}</p>
//   </div>
// );

export default function HeroSection() {
  return (
    <section
      className="relative bg-black flex items-center overflow-hidden h-100 md:h-125"
      style={{
        backgroundImage: `url('${heroImage.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative flex flex-col px-8 md:px-12 py-14 gap-5 text-center items-center mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          Where passion meets the{" "}
          <span className="text-blue-400">beautiful game</span>
        </h1>
        <p className="text-sm text-white leading-relaxed mb-8 max-w-xl">
          Harounkuti FC trains students of all ages, develops skills through
          expert coaching, and competes in tournaments across the region. Join
          our family today.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <Button className="bg-white hover:bg-green-300 text-green-950 font-bold text-sm px-5 h-10">
            <UserPlus size={16} className="mr-2" />
            Enroll now
          </Button>
          <Button
            variant="outline"
            className="border-green-400/40 text-green-200 hover:bg-green-400/10 hover:text-white hover:border-green-400 bg-transparent text-sm px-5 h-10"
          >
            <Calendar size={16} className="mr-2" />
            View schedule
          </Button>
        </div>

        {/* Stats */}
        {/* <div className="flex items-center gap-6">
            <StatItem number="120+" label="Students trained" />
            <div className="w-px h-10 bg-green-400/20" />
            <StatItem number="8" label="Expert coaches" />
            <div className="w-px h-10 bg-green-400/20" />
            <StatItem number="14" label="Tournaments" />
          </div> */}
      </div>
    </section>
  );
}
