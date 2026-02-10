"use client";

import Image from "next/image";

interface LogoType {
  name: string;
  logo: string;
}

interface LogosCarouselProps {
  logos: LogoType[];
}

export default function LogosCarousel({ logos }: LogosCarouselProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="animate-scroll flex w-max">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-20 w-40 md:w-48"
          >
            <Image
              src={logo.logo}
              alt={logo.name}
              width={160}
              height={60}
              className="object-contain max-h-12 md:max-h-14 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
