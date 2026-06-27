import { Star, PersonStanding, Trophy, Footprints } from "lucide-react";
import ProgramCTA from "./ProgramCTA";
import ProgramsCard, { ProgramCardProps } from "./ProgramsCard";
import Image from "next/image";
import kicking from "@/assets/images/kicking.png";

const programs = [
  {
    icon: Star,
    name: "Junior Academy",
    age: "Ages 6 – 12",
    desc: "Fun-first learning where young players discover the game, build confidence, and develop core skills in a safe environment.",
    days: "Mon, Wed, Fri",
    time: "4:00 pm – 5:30 pm",
    location: "Greenfields Main Pitch",
    status: "Open",
    statusColor: "text-green-700",
    dotColor: "bg-green-400",
    btnColor: "border-green-700 text-green-700 hover:bg-green-50",
    iconBg: "bg-green-50 text-green-800",
    badgeBg: "bg-green-50 text-green-900 border-green-100",
    actionLabel: "Enroll",
  },
  {
    icon: PersonStanding,
    name: "Youth Training",
    age: "Ages 13 – 17",
    desc: "Tactical awareness, teamwork, and technical drills designed to push young players toward competitive performance.",
    days: "Tue, Thu, Sat",
    time: "5:00 pm – 7:00 pm",
    location: "Training Ground B",
    status: "Open",
    statusColor: "text-green-700",
    dotColor: "bg-green-400",
    btnColor: "border-blue-700 text-blue-700 hover:bg-blue-50",
    iconBg: "bg-blue-50 text-blue-800",
    badgeBg: "bg-blue-50 text-blue-900 border-blue-100",
    actionLabel: "Enroll",
  },
  {
    icon: Trophy,
    name: "Senior Squad",
    age: "18 & above",
    desc: "Our competitive senior team trains hard and represents Greenfields FC in tournaments across the region all year round.",
    days: "Mon, Wed, Fri, Sun",
    time: "6:30 pm – 8:30 pm",
    location: "Greenfields Main Pitch",
    status: "Tryouts",
    statusColor: "text-amber-700",
    dotColor: "bg-amber-400",
    btnColor: "border-violet-700 text-violet-700 hover:bg-violet-50",
    iconBg: "bg-violet-50 text-violet-800",
    badgeBg: "bg-violet-50 text-violet-900 border-violet-100",
    actionLabel: "Apply",
  },
  {
    icon: Footprints,
    name: "Weekend Coaching",
    age: "All ages",
    desc: "Weekend sessions open to all ages. Great for beginners, casual players, or anyone who wants extra practice.",
    days: "Saturday & Sunday",
    time: "8:00 am – 10:00 am",
    location: "Community Ground",
    status: "Open",
    statusColor: "text-green-700",
    dotColor: "bg-green-400",
    btnColor: "border-amber-700 text-amber-700 hover:bg-amber-50",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-100",
    actionLabel: "Enroll",
  },
];

export default function ProgramSection() {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto relative z-10">
      <Image
        src={kicking}
        alt="Kicking a ball"
        className="md:max-w-125 md:max-h-100 max-w-75 max-h-87.5 absolute h-full md:left-0 -z-1 -top-20 md:-top-30 rotate-2 opacity-20 "
      />
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-logo-black">
            Our programs
          </span>
        </div>
        <h2 className="font-black text-4xl text-gray-900 leading-tight mb-3">
          Training for <span className="text-logo-green">every level</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          From first kick to competitive squad — we have a structured program
          for every age group, skill level, and ambition.
        </p>
      </div>
      <ProgramsCard programs={programs as ProgramCardProps[]} />
      <ProgramCTA />
    </section>
  );
}
