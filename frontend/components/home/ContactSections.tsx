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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path d="M0 0h512v512H0z" fill="none" />
        <path
          fill="#0866ff"
          d="M213.8 509.4C92.2 487.7 0 382.7 0 256C0 115.2 115.2 0 256 0s256 115.2 256 256c0 126.7-92.2 231.7-213.8 253.4l-14.1-11.5h-56.3z"
        />
        <path
          fill="#fff"
          d="m355.8 327.7l11.5-71.7h-67.8v-49.9c0-20.5 7.7-35.8 38.4-35.8h33.3V105c-17.9-2.6-38.4-5.1-56.3-5.1c-58.9 0-99.8 35.8-99.8 99.8V256h-64v71.7h64v180.5c14.1 2.6 28.2 3.8 42.2 3.8c14.1 0 28.2-1.3 42.2-3.8V327.7z"
        />
      </svg>
    ),
    name: "Facebook",
    handle: "@harounkutifc",
    iconBg: "bg-blue-50 text-blue-800",
    href: "#",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path d="M0 0h512v512H0z" fill="none" />
        <radialGradient
          id="SVGZnQWPd8Y"
          cx="-286.878"
          cy="685.721"
          r="255.952"
          gradientTransform="matrix(0 -1.982 1.8439 0 -1128.4 -17.235)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5" />
          <stop offset=".1" stopColor="#fd5" />
          <stop offset=".5" stopColor="#ff543e" />
          <stop offset="1" stopColor="#c837ab" />
        </radialGradient>
        <path
          fill="url(#SVGZnQWPd8Y)"
          d="M256.1.1C149.2.1 118 .2 111.9.7C89.9 2.5 76.3 6 61.4 13.4C50 19.1 40.9 25.6 32 34.9C15.8 51.8 5.9 72.5 2.4 97.2C.7 109.2.2 111.6.1 172.8V256c0 106.8.1 138 .6 144.1c1.8 21.3 5.1 34.8 12.2 49.5c13.5 28.1 39.4 49.2 69.9 57.1c10.6 2.7 22.2 4.2 37.2 4.9c6.3.3 71 .5 135.6.5s129.3-.1 135.5-.4c17.3-.8 27.4-2.2 38.5-5c30.7-7.9 56.1-28.7 69.9-57.2c7-14.3 10.5-28.3 12.1-48.5c.3-4.4.5-74.7.5-144.9s-.2-140.4-.5-144.8c-1.6-20.6-5.1-34.4-12.3-49c-5.9-12-12.4-20.9-21.9-30c-16.9-16.2-37.6-26-62.3-29.6C403.1 1 400.8.5 339.6.4h-83.5z"
        />
        <radialGradient
          id="SVGKw2Qhdar"
          cx="394.107"
          cy="480.96"
          r="255.952"
          gradientTransform="rotate(78.677 1180.95 631.602)scale(.886 3.6529)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3771c8" />
          <stop offset=".128" stopColor="#3771c8" />
          <stop offset="1" stopColor="#60f" stopOpacity="0" />
        </radialGradient>
        <path
          fill="url(#SVGKw2Qhdar)"
          d="M256.1.1C149.2.1 118 .2 111.9.7C89.9 2.5 76.3 6 61.4 13.4C50 19.1 40.9 25.6 32 34.9C15.8 51.8 5.9 72.5 2.4 97.2C.7 109.2.2 111.6.1 172.8V256c0 106.8.1 138 .6 144.1c1.8 21.3 5.1 34.8 12.2 49.5c13.5 28.1 39.4 49.2 69.9 57.1c10.6 2.7 22.2 4.2 37.2 4.9c6.3.3 71 .5 135.6.5s129.3-.1 135.5-.4c17.3-.8 27.4-2.2 38.5-5c30.7-7.9 56.1-28.7 69.9-57.2c7-14.3 10.5-28.3 12.1-48.5c.3-4.4.5-74.7.5-144.9s-.2-140.4-.5-144.8c-1.6-20.6-5.1-34.4-12.3-49c-5.9-12-12.4-20.9-21.9-30c-16.9-16.2-37.6-26-62.3-29.6C403.1 1 400.8.5 339.6.4h-83.5z"
        />
        <path
          fill="#fff"
          d="M256 67c-51.3 0-57.8.2-77.9 1.1s-33.9 4.1-45.9 8.8c-12.4 4.8-23 11.3-33.5 21.8s-17 21.1-21.8 33.5c-4.7 12-7.9 25.8-8.8 45.9c-.9 20.2-1.1 26.6-1.1 77.9s.2 57.8 1.1 77.9s4.1 33.9 8.8 45.9c4.8 12.4 11.3 23 21.8 33.5s21 17 33.5 21.8c12 4.7 25.8 7.9 45.9 8.8c20.2.9 26.6 1.1 77.9 1.1s57.8-.2 77.9-1.1s33.9-4.1 45.9-8.8c12.4-4.8 23-11.3 33.5-21.8s17-21.1 21.8-33.5c4.6-12 7.8-25.8 8.8-45.9c.9-20.2 1.1-26.6 1.1-77.9s-.2-57.8-1.1-77.9s-4.1-33.9-8.8-45.9c-4.8-12.4-11.3-23-21.8-33.5s-21-17-33.5-21.8c-12-4.7-25.8-7.9-45.9-8.8c-20.2-.9-26.6-1.1-77.9-1.1m-17 34.1h17c50.5 0 56.4.2 76.4 1.1c18.4.8 28.4 3.9 35.1 6.5c8.8 3.4 15.1 7.5 21.7 14.1s10.7 12.9 14.1 21.7c2.6 6.7 5.7 16.7 6.5 35.1c.9 19.9 1.1 25.9 1.1 76.4s-.2 56.4-1.1 76.4c-.8 18.4-3.9 28.4-6.5 35.1c-3.4 8.8-7.5 15.1-14.1 21.7s-12.9 10.7-21.7 14.1c-6.7 2.6-16.7 5.7-35.1 6.5c-19.9.9-25.9 1.1-76.4 1.1s-56.5-.2-76.4-1.1c-18.4-.9-28.4-3.9-35.1-6.5c-8.8-3.4-15.1-7.5-21.7-14.1s-10.7-12.9-14.1-21.7c-2.6-6.7-5.7-16.7-6.5-35.1c-.9-19.9-1.1-25.9-1.1-76.4s.2-56.4 1.1-76.4c.8-18.4 3.9-28.4 6.5-35.1c3.4-8.8 7.5-15.1 14.1-21.7s12.9-10.7 21.7-14.1c6.7-2.6 16.7-5.7 35.1-6.5c17.4-.9 24.2-1.1 59.4-1.1m117.9 31.4c-12.5 0-22.7 10.1-22.7 22.7c0 12.5 10.2 22.7 22.7 22.7s22.7-10.2 22.7-22.7s-10.2-22.8-22.7-22.7M256 159c-53.6 0-97.1 43.5-97.1 97.1s43.5 97 97.1 97s97-43.4 97-97s-43.4-97.1-97-97.1m0 34c34.8 0 63 28.2 63 63s-28.2 63-63 63s-63-28.2-63-63s28.2-63 63-63"
        />
      </svg>
    ),
    name: "Instagram",
    handle: "@harounkutifc",
    iconBg: "bg-pink-50 text-pink-800",
    href: "#",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path d="M0 0h512v512H0z" fill="none" />
        <path
          fill="red"
          d="M501.3 132.8c-5.9-22-23.2-39.4-45.3-45.3c-39.9-10.7-200-10.7-200-10.7s-160.1 0-200 10.7c-22 5.9-39.4 23.2-45.3 45.3C0 172.7 0 256 0 256s0 83.3 10.7 123.2c5.9 22 23.2 39.4 45.3 45.3c39.9 10.7 200 10.7 200 10.7s160.1 0 200-10.7c22-5.9 39.4-23.2 45.3-45.3C512 339.3 512 256 512 256s0-83.3-10.7-123.2"
        />
        <path fill="#fff" d="m204.8 332.8l133-76.8l-133-76.8z" />
      </svg>
    ),
    name: "YouTube",
    handle: "Harounkuti FC Official",
    iconBg: "bg-red-50 text-red-800",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-35 px-6 max-w-7xl mx-auto relative z-10 mb-20"
    >
      <Image
        src={femalekicking}
        alt="Female player kicking a ball"
        className="md:max-w-125 md:max-h-100 max-w-75 max-h-87.5 absolute h-full md:left-0 -z-1 -top-20 md:-top-12 rotate-2 opacity-20 "
      />
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-logo-black">
            Get in touch
          </span>
        </div>
        <h2 className="font-black text-4xl text-gray-900 leading-tight mb-3">
          We'd love to <span className="text-logo-green">hear from you</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          Drop by the ground, give us a call, or reach out on social — we're
          always happy to talk football.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-logo-green flex items-center justify-center mb-4">
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
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-logo-green hover:text-blue-900"
          >
            <PhoneOutgoing size={13} /> Call now
          </a>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-logo-green flex items-center justify-center mb-4">
            <Mail size={20} />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
            Email
          </p>
          <p className="font-black text-lg text-gray-900 mb-1">
            info@HarounKutifc.com
          </p>
          <p className="text-xs text-gray-400">
            We reply within 24 hours on working days
          </p>
          <a
            href="mailto:info@HarounKutifc.com"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-logo-green hover:text-blue-900"
          >
            <Send size={13} /> Send email
          </a>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="w-11 h-11 rounded-xl bg-green-50 text-logo-green flex items-center justify-center mb-4">
            <MapPin size={20} />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
            Ground address
          </p>
          <p className="font-black text-lg text-gray-900 mb-1">
            HarounKuti Main Pitch
          </p>
          <p className="text-xs text-gray-400">
            HarounKuti Village, Dhaka Division, Bangladesh
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-logo-green hover:text-blue-900"
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
                HarounKuti Main Pitch
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                HarounKuti Village, Dhaka
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

          {/* <a
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
          </a> */}
        </div>
      </div>
    </section>
  );
}
