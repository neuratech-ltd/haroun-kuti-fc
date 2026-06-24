import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  Calendar,
  School,
  Trophy,
  MapPin,
  Footprints,
} from "lucide-react";

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
    <section className="relative bg-green-950 flex items-center overflow-hidden h-100 md:h-125">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none"
        viewBox="0 0 700 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect
          x="30"
          y="30"
          width="640"
          height="340"
          rx="8"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="350"
          y1="30"
          x2="350"
          y2="370"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="350"
          cy="200"
          r="60"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="350" cy="200" r="4" fill="white" />
        <rect
          x="30"
          y="130"
          width="80"
          height="140"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <rect
          x="590"
          y="130"
          width="80"
          height="140"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <rect
          x="30"
          y="160"
          width="30"
          height="80"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <rect
          x="640"
          y="160"
          width="30"
          height="80"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="110"
          cy="200"
          r="30"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <circle
          cx="590"
          cy="200"
          r="30"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
      </svg>

      <div className="relative flex flex-col px-8 md:px-12 py-14 gap-5 text-center items-center mx-auto">
        <h1 className="font-black text-4xl md:text-5xl text-white leading-[1.1] mb-5">
          Where passion meets the{" "}
          <span className="text-blue-500">beautiful game</span>
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
