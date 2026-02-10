"use client";

import { useState, useEffect } from "react";

const impactStories = [
  {
    title: "Digital Financial Services Transformation",
    location: "Nigeria",
    stat: "$50M+",
    statLabel: "in new revenue enabled",
    description: "Helped a leading bank launch mobile money services reaching 2M+ unbanked customers.",
  },
  {
    title: "Agricultural Value Chain Reform",
    location: "Kenya",
    stat: "150K+",
    statLabel: "farmers supported",
    description: "Designed and implemented a commodity exchange platform connecting smallholders to markets.",
  },
  {
    title: "Healthcare System Strengthening",
    location: "Ghana",
    stat: "40%+",
    statLabel: "efficiency improvement",
    description: "Restructured supply chain operations for a national health program.",
  },
  {
    title: "Energy Sector Investment",
    location: "South Africa",
    stat: "$200M+",
    statLabel: "investment facilitated",
    description: "Supported due diligence and deal structuring for renewable energy projects.",
  },
];

export default function ImpactStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impactStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const story = impactStories[currentIndex];

  return (
    <div className="relative">
      {/* Story Card */}
      <div className="bg-white rounded-none p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Stat */}
          <div className="flex-shrink-0 text-center md:text-left md:pr-6 md:border-r md:border-gray-100">
            <span className="text-4xl font-bold text-teal-500">{story.stat}</span>
            <span className="block text-sm text-gray-500 mt-1">{story.statLabel}</span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2 py-1 bg-teal-50 text-teal-600 text-xs font-medium">
                {story.location}
              </span>
            </div>
            <h4 className="text-lg text-gray-900 mb-2">
              {story.title}
            </h4>
            <p className="text-sm text-gray-600">
              {story.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {impactStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-teal-500 w-6" : "bg-gray-300 w-2"
            }`}
            aria-label={`Go to story ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
