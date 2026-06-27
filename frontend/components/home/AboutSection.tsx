import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, School, Trophy, Users, ArrowRight } from "lucide-react";
import AboutCarousel from "./AboutCarousel";
import Image from "next/image";
import goalpost from "@/assets/images/goalPost.png";

const values = [
  {
    icon: Heart,
    title: "Community first",
    desc: "Built by locals, for the village",
  },
  {
    icon: School,
    title: "Proper coaching",
    desc: "Certified, experienced staff",
  },
  {
    icon: Trophy,
    title: "Compete & grow",
    desc: "Regional tournaments all year",
  },
  {
    icon: Users,
    title: "All ages welcome",
    desc: "From age 6 to senior squad",
  },
];

const coaches = [
  {
    initials: "RA",
    name: "Rafiq Ahmed",
    role: "Head Coach",
    group: "Senior squad",
    color: "bg-green-800",
  },
  {
    initials: "SK",
    name: "Sakib Khan",
    role: "Youth Coach",
    group: "Ages 13–17",
    color: "bg-blue-800",
  },
  {
    initials: "NI",
    name: "Nadia Islam",
    role: "Junior Coach",
    group: "Ages 6–12",
    color: "bg-violet-700",
  },
  {
    initials: "MH",
    name: "Mizan Hossain",
    role: "Goalkeeper Coach",
    group: "All groups",
    color: "bg-amber-700",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden mt-20 z-10">
      <Image
        src={goalpost}
        alt="Goalpost"
        className="max-w-125 max-h-100 absolute h-full md:right-25 -z-1 top-75 md:-top-5 rotate-2 opacity-20 "
      />
      <div className="max-w-7xl mx-auto  flex md:flex-nowrap flex-wrap items-center justify-center gap-6 px-6 py-12">
        <AboutCarousel />
        <div className="flex flex-wrap min-h-85">
          <div className="flex flex-col justify-center px-10 py-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-logo-black">
                Our story
              </span>
            </div>

            <h2 className="font-black text-3xl text-black leading-tight mb-4">
              More than a club —{" "}
              <span className="text-logo-green">a community</span>
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Founded in 2010 by a group of football-loving neighbours in
              Greenfields Village, our club started with just one team and a
              borrowed pitch. Today we run full training programs for students
              from age 6 upwards, with certified coaches who care as much about
              character as they do about skill.
              <br />
              <br />
              We travel to tournaments across the region, but our roots stay
              firmly in this village. Every player who trains with us becomes
              part of the Greenfields family.
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-2.5 bg-blue-100 border border-green-100 rounded-xl p-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-800 shrink-0">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-950">{title}</p>
                    <p className="text-[11px] text-green-700 mt-0.5 leading-snug">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-200" />

      <div className="px-10 py-9 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-black text-[#14380a]">
            Meet the coaches
          </h3>
          <Button
            variant="ghost"
            className="text-green-800 hover:text-green-950 hover:bg-green-50 text-xs font-semibold px-3 h-8"
          >
            View all coaches <ArrowRight size={13} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
          {coaches.map(({ initials, name, role, group, color }) => (
            <div
              key={name}
              className="bg-white border border-gray-100 hover:border-green-200 rounded-xl p-4 text-center transition-colors"
            >
              <div
                className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mx-auto mb-3`}
              >
                <span className="text-white font-black text-lg">
                  {initials}
                </span>
              </div>
              <p className="text-sm font-bold text-green-950">{name}</p>
              <p className="text-xs text-gray-400 mt-0.5 mb-2.5">{role}</p>
              <Badge
                variant="outline"
                className="text-[10px] bg-green-50 text-green-800 border-green-200 px-2"
              >
                {group}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
