"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Country data mapping from ISO codes to translation keys and stats
const countryData: Record<string, { nameKey: string; projects: number; sectorKey: string }> = {
  NG: { nameKey: "country.nigeria", projects: 28, sectorKey: "sector.financialServices" },
  KE: { nameKey: "country.kenya", projects: 18, sectorKey: "sector.digitalInfrastructure" },
  ZA: { nameKey: "country.southAfrica", projects: 22, sectorKey: "sector.financialServices" },
  GH: { nameKey: "country.ghana", projects: 8, sectorKey: "sector.agriculture" },
  EG: { nameKey: "country.egypt", projects: 12, sectorKey: "sector.healthcare" },
  MA: { nameKey: "country.morocco", projects: 9, sectorKey: "sector.agriculture" },
  SN: { nameKey: "country.senegal", projects: 6, sectorKey: "sector.agriculture" },
  CI: { nameKey: "country.coteDivoire", projects: 5, sectorKey: "sector.agriculture" },
  CD: { nameKey: "country.drCongo", projects: 7, sectorKey: "sector.healthcare" },
  ET: { nameKey: "country.ethiopia", projects: 8, sectorKey: "sector.agriculture" },
  UG: { nameKey: "country.uganda", projects: 5, sectorKey: "sector.agriculture" },
  TZ: { nameKey: "country.tanzania", projects: 4, sectorKey: "sector.healthcare" },
  AO: { nameKey: "country.angola", projects: 3, sectorKey: "sector.digitalInfrastructure" },
  MZ: { nameKey: "country.mozambique", projects: 4, sectorKey: "sector.healthcare" },
  SS: { nameKey: "country.southSudan", projects: 2, sectorKey: "sector.healthcare" },
};

// Aggregate stats for all countries
const aggregateStats = {
  totalProjects: "136+",
  totalValue: "$590M+",
  countries: "15+",
};

// Country translation keys for the list
const countryKeys = [
  "country.nigeria", "country.kenya", "country.southAfrica", "country.ghana",
  "country.egypt", "country.morocco", "country.senegal", "country.coteDivoire",
  "country.drCongo", "country.ethiopia", "country.uganda", "country.tanzania",
  "country.angola", "country.mozambique", "country.southSudan"
];

// Original teal color used in the SVG
const TEAL_DEFAULT = "#01aca8";
const TEAL_HOVER = "#0d9488";

export default function HomeAfricaMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const hoveredCountryRef = useRef<string | null>(null);
  const { t } = useLanguage();

  // Keep ref in sync with state (ref for event handlers, state for React rendering)
  useEffect(() => {
    hoveredCountryRef.current = hoveredCountry;
  }, [hoveredCountry]);

  // Load SVG and set up event handlers (runs once)
  useEffect(() => {
    const container = svgContainerRef.current;
    if (!container) return;

    // Fetch and inject SVG
    fetch("/images/africa.svg")
      .then((res) => res.text())
      .then((svg) => {
        // Make the SVG responsive
        const responsiveSvg = svg.replace(
          '<svg ',
          '<svg style="width: 100%; height: auto; max-width: 480px;" '
        );

        // Manually set innerHTML (bypassing React's control)
        container.innerHTML = responsiveSvg;

        const svgElement = container.querySelector("svg");
        if (!svgElement) return;

        // Find all teal-colored paths
        const paths = svgElement.querySelectorAll("path");
        const tealPaths: SVGPathElement[] = [];

        paths.forEach((path) => {
          const fill = path.getAttribute("fill");
          if (fill === TEAL_DEFAULT) {
            tealPaths.push(path);
            path.style.cursor = "pointer";
            path.style.transition = "fill 0.2s ease, filter 0.2s ease";
          }
        });

        // Attach event handlers to each teal path
        tealPaths.forEach((path) => {
          const id = path.getAttribute("id");

          path.addEventListener("mouseenter", () => {
            // Reset all teal paths first
            tealPaths.forEach((p) => {
              p.setAttribute("fill", TEAL_DEFAULT);
              p.style.filter = "none";
            });
            // Highlight this path
            path.setAttribute("fill", TEAL_HOVER);
            path.style.filter = "drop-shadow(0 4px 8px rgba(0,0,0,0.3))";
            setHoveredCountry(id);
          });

          path.addEventListener("mouseleave", () => {
            path.setAttribute("fill", TEAL_DEFAULT);
            path.style.filter = "none";
            setHoveredCountry(null);
          });
        });

        setSvgLoaded(true);
      })
      .catch((err) => console.error("Failed to load Africa SVG:", err));
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row gap-8 items-center">
      {/* Map */}
      <div className="relative flex-1 w-full max-w-lg flex justify-center">
        <div
          ref={svgContainerRef}
          className="w-full drop-shadow-sm flex justify-center"
          aria-label="Map of Africa showing Augmentum's presence"
        />

        {/* Info hint */}
        {svgLoaded && (
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t("map.hint")}</span>
            </div>
          </div>
        )}
      </div>

      {/* Stats Panel */}
      <div className="flex-1 min-h-[200px] w-full lg:w-auto">
        {hoveredCountry && countryData[hoveredCountry] ? (
          <div className="bg-white p-6 shadow-lg border border-gray-100 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {t(countryData[hoveredCountry].nameKey)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-teal-500">
                  {countryData[hoveredCountry].projects}+
                </div>
                <div className="text-sm text-gray-500">{t("map.projects")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-500">
                  {t(countryData[hoveredCountry].sectorKey)}
                </div>
                <div className="text-sm text-gray-500">{t("map.topSector")}</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-2">{t("map.partOf")}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium">
                  {aggregateStats.totalProjects} {t("map.totalProjects")}
                </span>
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium">
                  {aggregateStats.countries} {t("map.countries")}
                </span>
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium">
                  {aggregateStats.totalValue} {t("map.value")}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 p-6 text-center">
            <div className="text-4xl font-bold text-teal-500 mb-2">15+</div>
            <div className="text-sm text-gray-600 mb-4">{t("map.countriesCount")}</div>
            <div className="flex flex-wrap justify-center gap-2">
              {countryKeys.map((countryKey) => (
                <span
                  key={countryKey}
                  className="px-2 py-1 bg-white text-xs text-gray-600 border border-gray-200"
                >
                  {t(countryKey)}
                </span>
              ))}
              <span className="px-2 py-1 bg-teal-50 text-xs text-teal-600 font-medium border border-teal-200">
                & more
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
