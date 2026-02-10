"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface PartnerType {
  title: string;
  description: string;
  image: string;
}

interface PartnersCarouselProps {
  partners: PartnerType[];
}

export default function PartnersCarousel({ partners }: PartnersCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    // Convert vertical wheel/trackpad scroll to horizontal scroll
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", checkScroll);
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 400;
    const scrollAmount = cardWidth + 24; // card width + gap
    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
    // Recheck scroll state after animation finishes
    setTimeout(checkScroll, 400);
  };

  return (
    <div className="relative">
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mr-6 lg:-mr-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {partners.map((partner) => (
          <div
            key={partner.title}
            data-card
            className="group bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex-shrink-0 w-[340px] md:w-[380px] lg:w-[420px] border border-gray-100 hover:border-teal-200"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={partner.image}
                alt={partner.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl text-white">
                  {partner.title}
                </h3>
              </div>
            </div>

            {/* Teal top border reveal */}
            <div className="h-[2px] bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-navy-600 leading-relaxed">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 flex items-center justify-center transition-all duration-300 z-10 ${
          canScrollLeft
            ? "bg-white hover:bg-navy-900 hover:text-white text-navy-700 shadow-premium"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 flex items-center justify-center transition-all duration-300 z-10 ${
          canScrollRight
            ? "bg-white hover:bg-navy-900 hover:text-white text-navy-700 shadow-premium"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
