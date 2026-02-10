"use client";

import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

export default function LanguageToggle({ isScrolled, isHomePage }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 transition-all duration-200 ${
          language === "en"
            ? "bg-teal-500 text-white"
            : isScrolled || !isHomePage
            ? "text-navy-600 hover:text-navy-900 hover:bg-gray-100"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span
        className={`${
          isScrolled || !isHomePage ? "text-navy-300" : "text-white/40"
        }`}
      >
        |
      </span>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-2 py-1 transition-all duration-200 ${
          language === "fr"
            ? "bg-teal-500 text-white"
            : isScrolled || !isHomePage
            ? "text-navy-600 hover:text-navy-900 hover:bg-gray-100"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
        aria-label="Passer en français"
      >
        FR
      </button>
    </div>
  );
}
