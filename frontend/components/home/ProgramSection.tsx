import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  PersonStanding,
  Trophy,
  Footprints,
  Calendar,
  Clock,
  MapPin,
  UserPlus,
} from "lucide-react";

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
    iconBg: "bg-amber-50 text-amber-800",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-100",
    actionLabel: "Enroll",
  },
];

export default function ProgramSection() {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto">
      {/* ── Section header ── */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="block w-7 h-0.5 bg-green-400 rounded" />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green-700">
            Our programs
          </span>
          <span className="block w-7 h-0.5 bg-green-400 rounded" />
        </div>
        <h2 className="font-black text-4xl text-gray-900 leading-tight mb-3">
          Training for <span className="text-[#2E6B0F]">every level</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          From first kick to competitive squad — we have a structured program
          for every age group, skill level, and ambition.
        </p>
      </div>

      {/* ── Program cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {programs.map(
          ({
            icon: Icon,
            name,
            age,
            desc,
            days,
            time,
            location,
            status,
            statusColor,
            dotColor,
            btnColor,
            iconBg,
            badgeBg,
            actionLabel,
          }) => (
            <div
              key={name}
              className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl overflow-hidden transition-colors flex flex-col"
            >
              {/* Card top */}
              <div className="p-5 border-b border-gray-100 flex-1">
                <div
                  className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-black text-base text-gray-900 mb-1.5">
                  {name}
                </h3>
                <Badge
                  variant="outline"
                  className={`text-[11px] rounded-full mb-3 ${badgeBg}`}
                >
                  {age}
                </Badge>
                <p className="text-[12.5px] text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>

              {/* Card bottom */}
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar size={13} className="shrink-0" />
                  {days}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock size={13} className="shrink-0" />
                  {time}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin size={13} className="shrink-0" />
                  {location}
                </div>

                <Separator className="my-1" />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex items-center gap-1.5 text-xs font-semibold ${statusColor}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                    {status}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`text-xs h-7 px-3 rounded-lg ${btnColor}`}
                  >
                    {actionLabel}
                  </Button>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* ── Bottom CTA banner ── */}
      <div className="relative bg-[#1a3d08] rounded-2xl px-8 py-7 flex flex-wrap items-center justify-between gap-5 overflow-hidden">
        {/* Pitch watermark */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
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
          <p className="text-sm text-green-300">
            Come down for a free trial session — no commitment needed.
          </p>
        </div>

        <Button className="relative z-10 bg-green-400 hover:bg-green-300 text-green-950 font-bold text-sm px-6 h-11 shrink-0">
          <UserPlus size={16} className="mr-2" />
          Book a free trial
        </Button>
      </div>
    </section>
  );
}
