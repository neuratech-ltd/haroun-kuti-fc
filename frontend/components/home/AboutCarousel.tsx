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
import bff from "@/assets/images/1.jpg";
import two from "@/assets/images/2.jpg";
import four from "@/assets/images/4.jpg";
import five from "@/assets/images/5.jpg";
import six from "@/assets/images/6.jpg";
import seven from "@/assets/images/7.jpg";

const imageArray = [
  {
    src: bff.src,
    alt: "BFF accreditation certificate",
  },
  {
    src: five.src,
    alt: "Football net",
  },
  {
    src: two.src,
    alt: "Junior academy session",
  },
  {
    src: four.src,
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
