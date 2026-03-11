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

function NavLink({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
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
          isActive ? "text-teal-600" : "text-navy-700 group-hover:text-navy-900"
        } transition-colors duration-300`}
      >
        {children}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out bg-gradient-to-r from-teal-500 to-teal-400 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Floating navbar card */}
      <div className="pt-4" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
        <div className="mx-auto">
          {/* Language toggle above navbar, right-aligned */}
          <div className="flex justify-end pr-2 pb-1">
            <LanguageToggle isScrolled={true} isHomePage={false} />
          </div>
          <div
            className={`transition-all duration-300 ${
              isScrolled
                ? "bg-white shadow-[0_4px_24px_rgba(26,58,92,0.12)] rounded-2xl"
                : "bg-white/90 backdrop-blur-md shadow-[0_2px_16px_rgba(26,58,92,0.08)] rounded-2xl"
            }`}
          >
          {/* Desktop */}
          <div className="hidden lg:flex h-16 items-center justify-between px-8">
            <Link href="/">
              <Image
                src="/logos/logo-dark-blue.svg"
                alt="Augmentum Advisory"
                width={48}
                height={48}
                className="h-9 w-auto"
                priority
                unoptimized
              />
            </Link>

            <div className="flex items-center gap-8">
              {pageLinks.map((item) => (
                <NavLink
                  key={item.key}
                  href={item.href}
                  isActive={pathname === item.href}
                >
                  {t(item.key)}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex h-16 items-center justify-between px-6">
            <Link href="/">
              <Image
                src="/logos/logo-dark-blue.svg"
                alt="Augmentum Advisory"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
                unoptimized
              />
            </Link>

            <button
              type="button"
              className="p-2 -mr-2 text-navy-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
              mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 flex flex-col space-y-4 border-t border-gray-100">
              {pageLinks.map((item, index) => (
                <div
                  key={item.key}
                  className={`transform transition-all duration-300 ${
                    mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms" }}
                >
                  <NavLink
                    href={item.href}
                    isActive={pathname === item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </NavLink>
                </div>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <LanguageToggle isScrolled={true} isHomePage={false} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
