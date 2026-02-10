"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const footerNavigation = {
  main: [
    { key: "nav.about", href: "/about" },
    { key: "nav.ourApproach", href: "/how-we-work" },
    { key: "nav.newsInsights", href: "/thinking" },
    { key: "nav.careers", href: "/join" },
    { key: "nav.contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-content-2xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Augmentum Advisory"
                width={80}
                height={80}
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/50 max-w-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400/70">
              {t("footer.navigation")}
            </h3>
            <ul className="mt-6 space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="relative text-sm text-white/60 hover:text-white transition-colors inline-block group"
                  >
                    {t(item.key)}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-400/70">
              {t("footer.connect")}
            </h3>
            <div className="mt-6 space-y-4">
              <p className="text-sm text-white/60">
                <a
                  href="mailto:hello@augmentum.co"
                  className="hover:text-white transition-colors"
                >
                  hello@augmentum.co
                </a>
              </p>
              <div className="flex gap-4">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/40 hover:text-teal-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Augmentum Advisory. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
