"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import footballNet from "@/assets/images/footballNet.jpg";

const imageArray = [
  {
    src: footballNet.src,
    alt: "Football net",
  },
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    alt: "Match day action",
  },
  {
    src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1200&q=80",
    alt: "Junior academy session",
  },
  {
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80",
    alt: "Team celebration",
  },
];

const AboutCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageArray.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />
    </Carousel>
  );
};

export default AboutCarousel;
