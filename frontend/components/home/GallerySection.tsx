"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";
import one from "@/assets/images/1.jpg";
import two from "@/assets/images/2.jpg";
import three from "@/assets/images/3.jpg";
import four from "@/assets/images/4.jpg";
import five from "@/assets/images/5.jpg";
import six from "@/assets/images/6.jpg";
import seven from "@/assets/images/7.jpg";
import nine from "@/assets/images/9.jpeg";
import ten from "@/assets/images/10.jpeg";

const filters = [
  { label: "All photos", value: "all" },
  { label: "Match days", value: "match" },
  { label: "Training", value: "training" },
  { label: "Tournaments", value: "tournament" },
  { label: "Team photos", value: "team" },
];

const photos = [
  {
    id: 1,
    src: two.src,
    alt: "HarounKuti Fa senior squad season photo 2024",
    caption: "Senior squad — season photo",
    date: "March 2024",
    cat: "team",
    tall: true,
  },
  {
    id: 2,
    src: three.src,
    alt: "HarounKuti Fa District Cup final victory match",
    caption: "District Cup final victory",
    date: "November 2024",
    cat: "match",
    tall: true,
  },
  {
    id: 3,
    src: four.src,
    alt: "HarounKuti Fa Junior academy training session on the pitch",
    caption: "Junior academy training",
    date: "October 2024",
    cat: "training",
  },
  {
    id: 4,
    src: five.src,
    alt: "Full squad celebrating Inter-Village Tournament championship 2023",
    caption: "Tournament champions — full squad celebration",
    date: "August 2023",
    cat: "tournament",
    tall: true,
  },
  {
    id: 5,
    src: six.src,
    alt: "Youth squad team photo spring season 2023",
    caption: "Youth squad team photo",
    date: "April 2023",
    cat: "team",
  },
  {
    id: 6,
    src: seven.src,
    alt: "Post-match celebration after Knockout Cup 2022",
    caption: "Post-match celebration",
    date: "December 2022",
    cat: "match",
  },
  {
    id: 7,
    src: one.src,
    alt: "Post-match celebration after Knockout Cup 2022",
    caption: "Post-match celebration",
    date: "December 2022",
    cat: "match",
    tall: true,
  },

  {
    id: 9,
    src: nine.src,
    alt: "Post-match celebration after Knockout Cup 2022",
    caption: "Post-match celebration",
    date: "December 2022",
    cat: "match",
    tall: true,
  },
  {
    id: 10,
    src: ten.src,
    alt: "Post-match celebration after Knockout Cup 2022",
    caption: "Post-match celebration",
    date: "December 2022",
    cat: "match",
    tall: true,
  },
];

export default function GallerySection() {
  const [active, setActive] = useState("all");

  const visible = photos.filter((p) => active === "all" || p.cat === active);

  return (
    <section className="py-14 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-logo-black">
            Our gallery
          </span>
        </div>
        <h2 className="font-black text-4xl text-gray-900 leading-tight mb-3">
          Moments from the <span className="text-logo-green">pitch</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
          Group photos, match days, training sessions and tournament memories
          from the HarounKuti family.
        </p>
      </div>

      <div className="flex gap-2 justify-center flex-wrap mb-8">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors ${
              active === value
                ? "bg-logo-green text-white border-logo-green"
                : "bg-white text-gray-400 border-gray-100 hover:border-gray-200 hover:text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-6">
        {photos.map((photo) => {
          const hidden = active !== "all" && photo.cat !== active;
          return (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer transition-opacity duration-300 ${
                photo.tall ? "row-span-2" : ""
              } ${photo.wide ? "col-span-2" : ""} ${
                hidden ? "opacity-20 pointer-events-none" : "opacity-100"
              }`}
            >
              <div
                className={`relative w-full ${
                  photo.tall
                    ? "h-full min-h-[290px]"
                    : photo.wide
                      ? "h-36"
                      : "h-36"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/20 transition-colors duration-200 rounded-2xl" />

                <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gray-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-b-2xl">
                  <p className="text-white text-xs font-semibold leading-snug">
                    {photo.caption}
                  </p>
                  <p className="text-white/60 text-[10px] mt-0.5">
                    {photo.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Showing{" "}
          <span className="font-bold text-gray-700">{visible.length}</span> of{" "}
          <span className="font-bold text-gray-700">48</span> photos
        </p>
        <Button className="bg-logo-green hover:bg-logo-green/80 text-white text-sm  gap-2">
          <Images size={15} />
          View full gallery
        </Button>
      </div>
    </section>
  );
}
