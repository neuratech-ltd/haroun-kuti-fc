import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  PhoneOutgoing,
  Send,
  ExternalLink,
  Map,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import femalekicking from "@/assets/images/femaleKick.png";

const hours = [
  { day: "Monday", time: "4 – 8 pm" },
  { day: "Tuesday", time: "5 – 8 pm" },
  { day: "Wednesday", time: "4 – 8 pm" },
  { day: "Thursday", time: "5 – 8 pm" },
  { day: "Friday", time: "4 – 8 pm" },
  { day: "Saturday", time: "8 am – 6 pm" },
  { day: "Sunday", time: "8 – 10 am" },
  { day: "Public holidays", time: "Closed", closed: true },
];

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.296h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
    name: "Facebook",
    handle: "@greenfieldsfc",
    iconBg: "bg-blue-50 text-blue-800",
    href: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.645.069-4.849.069s-3.584-.012-4.85  
-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608C4.518 2.497 5.785 2.225 7.151 2.163 8.417 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.443 3.678 1.367c-.924.924-1.236 2.097-1.295 3.374C2.013 5.668 2 6.077 
        2 9s-.013 3.332-.072 4.612c-.059 1.277-.371 2.45-1.295 3.374-.924 .924-2 .236-3 .295C5 .013 .013 .013 .013 .013z"
        />
      </svg>
    ),
    name: "Instagram",
    handle: "@greenfields_fc",
    iconBg: "bg-pink-50 text-pink-800",
    href: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M19.615 3.174c-3.604-.246-11.638-.246-15.233 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.595.245 11.629.245 15.233 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10 13V8l5.777 7H9z" />
      </svg>
    ),
    name: "YouTube",
    handle: "Greenfields FC Official",
    iconBg: "bg-red-50 text-red-800",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto relative z-10">
      <Image
        src={femalekicking}
        alt="Female player kicking a ball"
        className="md:max-w-125 md:max-h-100 max-w-75 max-h-87.5 absolute h-full md:left-0 -z-1 -top-20 md:-top-30 rotate-2 opacity-20 "
      />
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
            Get in touch
          </span>
        </div>
        <h2 className="font-black text-4xl text-gray-900 leading-tight mb-3">
          We'd love to <span className="text-blue-700">hear from you</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          Drop by the ground, give us a call, or reach out on social — we're
          always happy to talk football.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
            <Phone size={20} />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
            Phone
          </p>
          <p className="font-black text-lg text-gray-900 mb-1">
            +880 1700-000000
          </p>
          <p className="text-xs text-gray-400">
            Available Mon – Sat, 9 am to 7 pm
          </p>
          <a
            href="tel:+8801700000000"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-700 hover:text-blue-900"
          >
            <PhoneOutgoing size={13} /> Call now
          </a>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
            <Mail size={20} />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
            Email
          </p>
          <p className="font-black text-lg text-gray-900 mb-1">
            info@greenfieldsfc.com
          </p>
          <p className="text-xs text-gray-400">
            We reply within 24 hours on working days
          </p>
          <a
            href="mailto:info@greenfieldsfc.com"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-700 hover:text-blue-900"
          >
            <Send size={13} /> Send email
          </a>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="w-11 h-11 rounded-xl bg-green-50 text-green-800 flex items-center justify-center mb-4">
            <MapPin size={20} />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
            Ground address
          </p>
          <p className="font-black text-lg text-gray-900 mb-1">
            Greenfields Main Pitch
          </p>
          <p className="text-xs text-gray-400">
            Greenfields Village, Dhaka Division, Bangladesh
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-green-700 hover:text-green-900"
          >
            <ExternalLink size={13} /> Get directions
          </a>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="w-11 h-11 rounded-xl bg-green-50 text-green-800 flex items-center justify-center mb-4">
            <Clock size={20} />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            Training hours
          </p>
          <div className="grid grid-cols-2 gap-x-4">
            {hours.map(({ day, time, closed }) => (
              <div
                key={day}
                className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-none text-xs"
              >
                <span
                  className={closed ? "text-gray-300 italic" : "text-gray-400"}
                >
                  {day}
                </span>
                <span
                  className={
                    closed
                      ? "text-gray-300 italic"
                      : "font-semibold text-gray-700"
                  }
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          <div className="h-44 bg-green-50 relative flex items-center justify-center">
            <svg
              viewBox="0 0 340 160"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="340" height="160" fill="#EAF3DE" />
              {[60, 100].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="340"
                  y2={y}
                  stroke="#C0DD97"
                  strokeWidth="1"
                />
              ))}
              {[80, 170, 260].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2="160"
                  stroke="#C0DD97"
                  strokeWidth="1"
                />
              ))}
              <rect
                x="60"
                y="20"
                width="50"
                height="30"
                rx="3"
                fill="#C0DD97"
                opacity=".5"
              />
              <rect
                x="200"
                y="110"
                width="70"
                height="35"
                rx="3"
                fill="#C0DD97"
                opacity=".5"
              />
              <rect
                x="10"
                y="90"
                width="40"
                height="50"
                rx="3"
                fill="#C0DD97"
                opacity=".4"
              />
              <path
                d="M170 30 C155 30 143 42 143 57 C143 78 170 100 170 100 C170 100 197 78 197 57 C197 42 185 30 170 30Z"
                fill="#185FA5"
              />
              <circle cx="170" cy="57" r="8" fill="#E6F1FB" />
            </svg>
          </div>
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Greenfields Main Pitch
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Greenfields Village, Dhaka
              </p>
            </div>
            <Button
              size="sm"
              className="bg-blue-700 hover:bg-blue-800 text-white text-xs h-8 px-3 gap-1.5"
            >
              <Map size={13} /> Open map
            </Button>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3">
          <div className="mb-1">
            <p className="font-black text-base text-gray-900 mb-1">
              Follow the club
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Stay updated on match results, training news and club
              announcements.
            </p>
          </div>
          {socials.map(({ icon: Icon, name, handle, iconBg, href }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-3 px-3.5 py-2.5 border border-gray-100 hover:border-gray-200 rounded-xl transition-colors"
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}
              >
                |{Icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{name}</p>
                <p className="text-xs text-gray-400">{handle}</p>
              </div>
              <ArrowRight size={15} className="text-gray-300 shrink-0" />
            </a>
          ))}

          <a
            href="#"
            className="flex items-center gap-3 px-3.5 py-2.5 border border-gray-100 hover:border-gray-200 rounded-xl transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-green-50 text-green-800 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.136 1.535 5.867L.057 23.617a.5.5 0 0 0 .612.612l5.752-1.479A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.062-1.38l-.36-.213-3.733.96.98-3.608-.235-.374A9.94 9.94 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">
                WhatsApp group
              </p>
              <p className="text-xs text-gray-400">Join the club community</p>
            </div>
            <ArrowRight size={15} className="text-gray-300 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
