"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

// Page navigation links
const pageLinks = [
  { key: "nav.about", href: "/about" },
  { key: "nav.ourApproach", href: "/how-we-work" },
  { key: "nav.newsInsights", href: "/thinking" },
  { key: "nav.careers", href: "/join" },
  { key: "nav.contact", href: "/contact" },
];

// Reusable NavLink component with hover line animation
function NavLink({
  href,
  children,
  isActive,
  isScrolled,
  isHomePage,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  isScrolled: boolean;
  isHomePage: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-sm font-medium transition-colors duration-300 group pb-1"
    >
      <span
        className={`${
          isActive
            ? "text-teal-500"
            : isScrolled || !isHomePage
            ? "text-navy-600 group-hover:text-navy-900"
            : "text-white/80 group-hover:text-white"
        } transition-colors duration-300`}
      >
        {children}
      </span>
      {/* Gradient animated underline */}
      <span
        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
          isActive
            ? "w-full bg-gradient-to-r from-teal-500 to-teal-400"
            : isScrolled || !isHomePage
            ? "w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-teal-400"
            : "w-0 group-hover:w-full bg-white"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const hasDarkHero = isHomePage || pathname === "/about" || pathname === "/thinking" || pathname === "/how-we-work" || pathname === "/join";
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(26,58,92,0.08)]"
          : hasDarkHero
          ? "bg-transparent"
          : "bg-white border-b border-gray-200/60"
      }`}
    >
      <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
        {/* Two-row layout on desktop */}
        <div className="hidden lg:flex lg:flex-col">
          {/* Top Row - Language Toggle only */}
          <div className="flex items-center justify-end h-12">
            <LanguageToggle isScrolled={isScrolled} isHomePage={hasDarkHero} />
          </div>

          {/* Bottom Row - Logo + Page Links */}
          <div className="flex h-14 items-center justify-between">
            <Link href="/">
              <Image
                src={isScrolled || !hasDarkHero ? "/logos/Augmentum Logo/Vertical/Colored.png" : "/logos/Augmentum Logo/Vertical/White.png"}
                alt="Augmentum Advisory"
                width={56}
                height={56}
                className="h-14 w-auto transition-all duration-300"
                priority
              />
            </Link>

            <div className="flex items-center gap-6">
              {pageLinks.map((item) => (
                <NavLink
                  key={item.key}
                  href={item.href}
                  isActive={pathname === item.href}
                  isScrolled={isScrolled}
                  isHomePage={hasDarkHero}
                >
                  {t(item.key)}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              src={isScrolled || !hasDarkHero ? "/logos/Augmentum Logo/Vertical/Colored.png" : "/logos/Augmentum Logo/Vertical/White.png"}
              alt="Augmentum Advisory"
              width={48}
              height={48}
              className="h-12 w-auto transition-all duration-300"
              priority
            />
          </Link>

          <button
            type="button"
            className={`p-2 -mr-2 transition-colors duration-300 ${
              isScrolled || !hasDarkHero ? "text-navy-700" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu with slide animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`py-4 ${
              isScrolled || !hasDarkHero
                ? "bg-white"
                : "bg-navy-900/95 backdrop-blur-md"
            }`}
          >
            {/* Page links on mobile */}
            <div className="flex flex-col space-y-3">
              {pageLinks.map((item, index) => (
                <div
                  key={item.key}
                  className={`transform transition-all duration-300 ${
                    mobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <NavLink
                    href={item.href}
                    isActive={pathname === item.href}
                    isScrolled={isScrolled}
                    isHomePage={hasDarkHero}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </NavLink>
                </div>
              ))}
            </div>

            {/* Language toggle on mobile */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <LanguageToggle isScrolled={isScrolled} isHomePage={hasDarkHero} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
