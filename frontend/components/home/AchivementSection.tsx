import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trophy, Award, Medal, Flag } from "lucide-react";
import Image from "next/image";
import bKick from "@/assets/images/bycycleKick.png";

const stats = [
  { num: "14", label: "Trophies won" },
  { num: "6", label: "Championships" },
  { num: "120+", label: "Players developed" },
  { num: "15", label: "Years competing" },
  { num: "8", label: "Players gone pro" },
];

const trophies = [
  {
    icon: Trophy,
    name: "District Cup Champions",
    meta: "Regional Tournament · 2024",
    tier: "gold",
  },
  {
    icon: Trophy,
    name: "Inter-Village League",
    meta: "League Title · 2023",
    tier: "gold",
  },
  {
    icon: Award,
    name: "Youth Cup Runners-up",
    meta: "Youth Tournament · 2023",
    tier: "silver",
  },
  {
    icon: Trophy,
    name: "Knockout Cup Winners",
    meta: "Dhaka Region · 2022",
    tier: "gold",
  },
  {
    icon: Medal,
    name: "Spring Festival Cup",
    meta: "Friendly Tournament · 2022",
    tier: "bronze",
  },
  {
    icon: Award,
    name: "Best Academy Club",
    meta: "Regional Award · 2021",
    tier: "silver",
  },
];

const milestones = [
  {
    year: "2024",
    title: "District Cup champions for the second time",
    desc: "Harounkuti FC lifted the District Cup after a hard-fought final, cementing our place as the top club in the region.",
  },
  {
    year: "2023",
    title: "Inter-Village League title & 100th student enrolled",
    desc: "Our biggest year yet — league champions and the academy welcomed its 100th enrolled student across all age groups.",
  },
  {
    year: "2021",
    title: "Named best academy club in the region",
    desc: "Recognised by the regional football association for outstanding youth development and community impact.",
  },
  {
    year: "2018",
    title: "First player signed to a professional club",
    desc: "Academy graduate Arafat Hossain became the first HarounKuti FC player to sign a professional contract.",
  },
  {
    year: "2010",
    title: "Club founded in HarounKuti Village",
    desc: "A group of neighbours started the club with one team, a shared pitch, and a dream to build something lasting.",
    last: true,
  },
];

const tierStyles = {
  gold: {
    border: "border-t-[3px] border-t-amber-400",
    iconBg: "bg-amber-50 text-amber-800",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
    label: "Gold",
  },
  silver: {
    border: "border-t-[3px] border-t-gray-400",
    iconBg: "bg-gray-100 text-gray-600",
    badgeBg: "bg-gray-100 text-gray-800 border-gray-200",
    label: "Silver",
  },
  bronze: {
    border: "border-t-[3px] border-t-orange-400",
    iconBg: "bg-orange-50 text-orange-800",
    badgeBg: "bg-orange-50 text-orange-900 border-orange-200",
    label: "Bronze",
  },
};

export default function AchievementsSection() {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto relative z-10">
      <Image
        src={bKick}
        alt="Kicking a ball"
        className="md:max-w-125 md:max-h-100 max-w-75 max-h-87.5 absolute h-full md:left-0 -z-1 -top-20 md:-top-30 rotate-2 opacity-20 "
      />
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-logo-black">
            Our achievements
          </span>
        </div>
        <h2 className="font-black text-4xl text-gray-900 leading-tight mb-3">
          A proud <span className="text-logo-green">record of success</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          From village beginnings to regional champions — here is what
          Harounkuti Football Club has accomplished over the years.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {stats.map(({ num, label }) => (
          <div key={label} className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="font-black text-3xl text-logo-green leading-none">
              {num}
            </p>
            <p className="text-xs text-gray-400 mt-1.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {trophies.map(({ icon: Icon, name, meta, tier }) => {
          const s = tierStyles[tier as keyof typeof tierStyles];
          return (
            <div
              key={name}
              className={`bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-5 flex flex-col gap-3 transition-colors ${s.border}`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.iconBg}`}
              >
                <Icon size={20} />
              </div>
              <div>
                <p className="font-black text-sm text-gray-900 leading-snug mb-0.5">
                  {name}
                </p>
                <p className="text-xs text-gray-400">{meta}</p>
              </div>
              <Badge
                variant="outline"
                className={`w-fit text-[11px] rounded-full ${s.badgeBg}`}
              >
                <Medal size={11} className="mr-1" />
                {s.label}
              </Badge>
            </div>
          );
        })}
      </div>

      <div className="border border-gray-100 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
          <Flag size={18} className="text-logo-green" />
          <h3 className="font-black text-base text-gray-900">
            Club milestones
          </h3>
        </div>

        <div>
          {milestones.map(({ year, title, desc, last }, i) => (
            <div key={year}>
              <div className="flex items-start gap-4 px-6 py-5">
                <span className="font-black text-sm text-logo-green w-9 shrink-0 pt-0.5">
                  {year}
                </span>

                <div className="flex flex-col items-center shrink-0 pt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-logo-green/70" />
                  {!last && (
                    <div className="w-px flex-1 bg-gray-100 mt-1 min-h-8" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
                    {title}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
              {!last && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
