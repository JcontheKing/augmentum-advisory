"use client";

import { useState } from "react";

interface RegionData {
  id: string;
  name: string;
  projects: number;
  highlights: string[];
  path: string;
}

const regions: RegionData[] = [
  {
    id: "west",
    name: "West Africa",
    projects: 12,
    highlights: [
      "Digital financial services transformation",
      "Agricultural value chain optimization",
      "Public sector reform programs",
    ],
    path: "M120,180 L180,160 L220,180 L240,220 L220,280 L180,300 L140,280 L100,240 L100,200 Z",
  },
  {
    id: "east",
    name: "East Africa",
    projects: 8,
    highlights: [
      "Healthcare systems strengthening",
      "Energy sector transformation",
      "Regional trade facilitation",
    ],
    path: "M320,200 L380,180 L400,220 L380,300 L340,340 L300,320 L280,260 L300,220 Z",
  },
  {
    id: "north",
    name: "North Africa",
    projects: 5,
    highlights: [
      "Economic diversification strategy",
      "Youth employment initiatives",
      "Digital government programs",
    ],
    path: "M140,80 L320,60 L380,100 L360,160 L280,180 L200,160 L140,140 Z",
  },
  {
    id: "central",
    name: "Central Africa",
    projects: 4,
    highlights: [
      "Natural resource governance",
      "Infrastructure development",
      "Cross-border trade programs",
    ],
    path: "M240,220 L280,200 L320,220 L340,280 L320,340 L280,360 L240,340 L220,280 Z",
  },
  {
    id: "southern",
    name: "Southern Africa",
    projects: 6,
    highlights: [
      "Private equity value creation",
      "Mining sector optimization",
      "Regional integration initiatives",
    ],
    path: "M240,340 L320,340 L360,380 L340,440 L280,480 L220,460 L200,400 L220,360 Z",
  },
];

export default function AfricaMap() {
  const [activeRegion, setActiveRegion] = useState<RegionData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    region: RegionData,
    event: React.MouseEvent<SVGPathElement>
  ) => {
    setActiveRegion(region);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setActiveRegion(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Map */}
        <div className="relative">
          <svg
            viewBox="0 0 500 540"
            className="w-full max-w-md mx-auto"
            aria-label="Map of Africa showing Augmentum's regional presence"
          >
            {/* Background shape of Africa */}
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f4f8" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>

            {/* Regions */}
            {regions.map((region) => (
              <path
                key={region.id}
                d={region.path}
                fill={activeRegion?.id === region.id ? "#01aca8" : "#1a3a5c"}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:fill-teal-500"
                onMouseEnter={(e) => handleMouseEnter(region, e)}
                onMouseLeave={handleMouseLeave}
                style={{
                  opacity: activeRegion && activeRegion.id !== region.id ? 0.5 : 1,
                }}
              />
            ))}

            {/* Region labels */}
            <text x="160" y="120" className="fill-white text-xs font-medium pointer-events-none">
              North
            </text>
            <text x="150" y="240" className="fill-white text-xs font-medium pointer-events-none">
              West
            </text>
            <text x="270" y="280" className="fill-white text-xs font-medium pointer-events-none">
              Central
            </text>
            <text x="330" y="260" className="fill-white text-xs font-medium pointer-events-none">
              East
            </text>
            <text x="260" y="400" className="fill-white text-xs font-medium pointer-events-none">
              Southern
            </text>
          </svg>

          {/* Mobile hint */}
          <p className="mt-4 text-center text-xs text-navy-400 lg:hidden">
            Tap a region to see our work there
          </p>
        </div>

        {/* Info Panel */}
        <div className="min-h-[280px]">
          {activeRegion ? (
            <div className="animate-fade-in">
              <p className="text-sm font-medium uppercase tracking-wider text-teal-500">
                {activeRegion.projects} Projects
              </p>
              <h3 className="mt-2 text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
                {activeRegion.name}
              </h3>
              <div className="mt-6">
                <p className="text-sm font-medium text-navy-700 mb-3">
                  Key Focus Areas:
                </p>
                <ul className="space-y-2">
                  {activeRegion.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-[16px] text-navy-600"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-teal-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-navy-400 text-sm">
                  Hover over a region to explore our work
                </p>
                <p className="mt-4 text-navy-900 text-[24px]">
                  35+ Projects Across Africa
                </p>
                <p className="mt-2 text-[16px] text-navy-600">
                  From Lagos to Nairobi, Johannesburg to Cairo, we&apos;ve
                  partnered with organizations tackling the continent&apos;s
                  most pressing challenges.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">35+</p>
            <p className="mt-1 text-sm text-navy-500">Projects delivered</p>
          </div>
          <div>
            <p className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">15</p>
            <p className="mt-1 text-sm text-navy-500">Countries reached</p>
          </div>
          <div>
            <p className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">7</p>
            <p className="mt-1 text-sm text-navy-500">Sectors covered</p>
          </div>
          <div>
            <p className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">$500M+</p>
            <p className="mt-1 text-sm text-navy-500">Value influenced</p>
          </div>
        </div>
      </div>
    </div>
  );
}
