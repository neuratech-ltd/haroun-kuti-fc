import React from "react";
import { Button } from "../ui/button";
import { UserPlus } from "lucide-react";

const ProgramCTA = () => {
  return (
    <div className="relative bg-black rounded-2xl px-8 py-7 flex flex-wrap items-center justify-between gap-5 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.2] pointer-events-none"
        viewBox="0 0 600 140"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect
          x="10"
          y="10"
          width="580"
          height="120"
          rx="4"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="10"
          x2="300"
          y2="130"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle
          cx="300"
          cy="70"
          r="30"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
        <rect
          x="10"
          y="35"
          width="50"
          height="70"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
        <rect
          x="540"
          y="35"
          width="50"
          height="70"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10">
        <p className="font-black text-xl text-white mb-1">
          Not sure which program fits?
        </p>
        <p className="text-sm text-white/80 ">
          Come down for a free trial session — no commitment needed.
        </p>
      </div>
      <Button className="relative z-10 bg-blue-950 hover:bg-[#ec6b30] text-white font-bold text-sm px-6 h-11 shrink-0">
        <UserPlus size={16} className="mr-2" />
        Book a free trial
      </Button>
    </div>
  );
};

export default ProgramCTA;
