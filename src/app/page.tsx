"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import HomeAfricaMap from "@/components/HomeAfricaMap";
import PartnersCarousel from "@/components/PartnersCarousel";
import LogosCarousel from "@/components/LogosCarousel";
import AnimatedSection, { AnimatedList } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

const clientLogos = [
  { name: "Bill & Melinda Gates Foundation", logo: "/trusted logos/bill and melinda gates foundation.png" },
  { name: "FMITI", logo: "/trusted logos/FMITI-Logo-new.png" },
  { name: "SANEF", logo: "/trusted logos/sanef.png" },
  { name: "Lagos Business School", logo: "/trusted logos/New_LBS_logo_for_light_backgrounds_(BLUE).png" },
  { name: "Wema Bank", logo: "/trusted logos/wema bank.png" },
  { name: "HabariPay", logo: "/trusted logos/Logo_Habaripay.png" },
  { name: "ACA", logo: "/trusted logos/ACA.png" },
  { name: "Prime Atlantic", logo: "/trusted logos/Prime-Atlantic-logo.png" },
];

export default function Home() {
  const { t, language } = useLanguage();

  const partnerTypes = [
    {
      title: t("home.partners.donors.title"),
      description: t("home.partners.donors.desc"),
      image: "/images/Donors and foundations.png",
    },
    {
      title: t("home.partners.corporates.title"),
      description: t("home.partners.corporates.desc"),
      image: "/images/corperate firms.jpg",
    },
    {
      title: t("home.partners.investment.title"),
      description: t("home.partners.investment.desc"),
      image: "/images/PE or Investment Firms.jpg",
    },
    {
      title: t("home.partners.government.title"),
      description: t("home.partners.government.desc"),
      image: "/images/AdobeStock_330722058.jpeg",
    },
    {
      title: t("home.partners.multilateral.title"),
      description: t("home.partners.multilateral.desc"),
      image: "/images/AdobeStock_294213252.jpeg",
    },
    {
      title: t("home.partners.ngos.title"),
      description: t("home.partners.ngos.desc"),
      image: "/images/AdobeStock_43119148.jpeg",
    },
  ];

  const impactStats = [
    { value: "100+", label: t("home.impact.projects") },
    { value: "15+", label: t("home.impact.countries") },
    { value: "$500M+", label: t("home.impact.value") },
    { value: "50+", label: t("home.impact.clients") },
  ];

  const insights = [
    {
      title: t("home.insights.digital.title"),
      description: t("home.insights.digital.description"),
      category: t("home.insights.digital.category"),
      date: "2025",
      image: "/images/Partnering with lagos business school.jpg",
      href: "/thinking",
    },
    {
      title: t("home.insights.agriculture.title"),
      description: t("home.insights.agriculture.description"),
      category: t("home.insights.agriculture.category"),
      date: "2025",
      image: "/images/MTN Appoints topsy.jpg",
      href: "/thinking",
    },
    {
      title: t("home.insights.healthcare.title"),
      description: t("home.insights.healthcare.description"),
      category: t("home.insights.healthcare.category"),
      date: "2024",
      image: "/images/Leading Nigeria's Financial Inclusion Initiative.jpg",
      href: "/thinking",
    },
  ];

  const teamStats = [
    { value: "20+", label: t("home.careers.team") },
    { value: "60+", label: t("home.careers.experience") },
    { value: "50%", label: t("home.careers.mbb") },
    { value: "100%", label: t("home.careers.flexible") },
  ];

  return (
    <>
      {/* Hero Section with Image Slider */}
      <HeroSlider>
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
              {/* Teal accent line */}
              <div className="w-16 h-[3px] bg-gradient-to-r from-teal-400 to-teal-500 mb-8" />
              <h1 className={`text-white leading-none tracking-tight ${
                language === "fr"
                  ? "text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[82px] text-balance"
                  : "text-[40px] sm:text-[52px] md:text-[64px] lg:text-[82px] xl:text-[110px] whitespace-nowrap"
              }`}>
                {t("home.hero.title")}
              </h1>
              <p className="mt-8 text-[18px] text-gray-200/90 max-w-2xl mx-auto leading-relaxed">
                {t("home.hero.subtitle")}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-[16px] font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/20"
                >
                  {t("home.hero.contact")}
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3.5 border border-white/25 text-white text-[16px] font-medium hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("home.hero.learn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeroSlider>

      {/* Section 2: Work With Us */}
      <section id="clients" className="relative bg-gray-50 section-padding scroll-mt-28 overflow-hidden">
        {/* Subtle gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-teal-50/30" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(107 114 128) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />

        <div className="relative mx-auto max-w-content-2xl px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mb-6" />
              <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
                {t("home.partners.title")}
              </h2>
              <p className="mt-4 text-[20px] text-navy-600 max-w-2xl mx-auto">
                {t("home.partners.subtitle")}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12">
            <PartnersCarousel partners={partnerTypes} />
          </div>
        </div>
      </section>

      {/* Section 3: Impact Map */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mb-6" />
              <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
                {t("home.impact.title")}
              </h2>
              <p className="mt-4 text-[20px] text-navy-600 max-w-2xl mx-auto">
                {t("home.impact.subtitle")}
              </p>
            </div>
          </AnimatedSection>

          {/* Stats row with premium styling */}
          <AnimatedList className="flex justify-center gap-12 lg:gap-16 mt-12" staggerDelay={150}>
            {impactStats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-[36px] md:text-[42px] font-bold text-gradient-teal">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-500 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </AnimatedList>

          {/* Map */}
          <div className="mt-12">
            <HomeAfricaMap />
          </div>
        </div>
      </section>

      {/* Section 4: Client Testimonials - Full Width */}
      <section className="relative">
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Full-width background */}
          <div className="absolute inset-0">
            <Image
              src="/images/AdobeStock_294213252.jpeg"
              alt="Client testimonial"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/20" />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 lg:right-[35%] flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border-2 border-white/30 flex items-center justify-center hover:bg-white/25 hover:border-white/50 transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Navy overlay panel on the right */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[35%] bg-gradient-to-br from-navy-900/95 to-navy-950/98 flex items-end lg:items-center">
            {/* Geometric accent */}
            <div className="absolute top-0 left-0 w-[3px] h-24 bg-gradient-to-b from-teal-400 to-transparent hidden lg:block" />
            <div className="absolute bottom-0 right-0 w-24 h-[3px] bg-gradient-to-l from-teal-400/50 to-transparent" />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMaxYMax slice">
                <rect x="320" y="100" width="60" height="500" fill="currentColor" className="text-navy-700" />
                <polygon points="350,100 380,50 410,100" fill="currentColor" className="text-navy-700" />
                <rect x="250" y="200" width="50" height="400" fill="currentColor" className="text-navy-800" />
                <rect x="180" y="250" width="55" height="350" fill="currentColor" className="text-navy-700" />
                <rect x="120" y="300" width="45" height="300" fill="currentColor" className="text-navy-800" />
              </svg>
            </div>

            <div className="relative p-8 lg:p-12">
              {/* Decorative quote mark */}
              <div className="text-teal-500/20 text-[80px] leading-none absolute -top-4 left-6 lg:left-10">&ldquo;</div>
              <h3 className="text-[24px] lg:text-[28px] text-white leading-snug relative">
                {t("home.testimonials.title")}
              </h3>
              <p className="mt-4 text-navy-200 text-[18px] leading-relaxed">
                {t("home.testimonials.subtitle")}
              </p>
              <button
                className="mt-8 inline-flex items-center gap-2 text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors group"
              >
                <svg className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                {t("home.testimonials.watch")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Client Logos */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <LogosCarousel logos={clientLogos} />
        </div>
      </section>

      {/* Section 6: Latest Insights */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
                <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
                  {t("home.insights.title")}
                </h2>
              </div>
              <Link
                href="/thinking"
                className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500 transition-colors group"
              >
                {t("home.insights.viewAll")}
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedList className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150}>
            {insights.map((insight) => (
              <Link
                key={insight.title}
                href={insight.href}
                className="group flex flex-col bg-white overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-teal-200 h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-900/20 to-transparent group-hover:from-navy-950/80 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1.5 bg-white/95 text-navy-900 text-xs font-medium shadow-sm">
                      {insight.category}
                    </span>
                  </div>
                </div>
                {/* Teal top border reveal */}
                <div className="h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-navy-400 mb-2">{insight.date}</p>
                  <h3 className="text-[18px] text-navy-900 group-hover:text-teal-600 transition-colors leading-snug line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy-500 leading-relaxed line-clamp-2">
                    {insight.description}
                  </p>
                  <span className="mt-auto pt-4 inline-flex items-center text-sm font-medium text-teal-600 group-hover:text-teal-500 transition-colors">
                    Read more
                    <svg className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Section 7: Join Us */}
      <section className="relative bg-gradient-navy section-padding overflow-hidden">
        {/* Background image with very low opacity */}
        <div className="absolute inset-0 opacity-[0.07]">
          <Image
            src="/images/AdobeStock_330722058.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* Geometric accents */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] border border-teal-500/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] border border-teal-500/10 translate-y-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div className="w-12 h-[3px] bg-gradient-to-r from-teal-400 to-teal-500 mb-6" />
              <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-white">
                {t("home.careers.title")}
              </h2>
              <p className="mt-4 text-[20px] text-navy-200 leading-relaxed">
                {t("home.careers.desc")}
              </p>
              <Link
                href="/join"
                className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/20"
              >
                {t("home.careers.cta")}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </AnimatedSection>
            <AnimatedList className="grid grid-cols-2 gap-4" staggerDelay={100}>
              {teamStats.map((stat) => (
                <div key={stat.label} className="bg-white/[0.06] backdrop-blur-sm p-6 border border-white/[0.08] hover:bg-white/[0.1] hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-center min-h-[140px]">
                  <div className="text-[32px] font-bold text-teal-400">{stat.value}</div>
                  <div className="text-sm text-navy-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Section 8: Contact CTA */}
      <section id="cta" className="bg-white section-padding scroll-mt-28">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <AnimatedSection animation="scale">
            <div className="relative bg-gradient-to-br from-navy-900 to-navy-950 p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-[3px] bg-gradient-to-r from-teal-400 to-transparent" />
              <div className="absolute top-0 left-0 w-[3px] h-20 bg-gradient-to-b from-teal-400 to-transparent" />
              <div className="absolute bottom-0 right-0 w-20 h-[3px] bg-gradient-to-l from-teal-400 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[3px] h-20 bg-gradient-to-t from-teal-400 to-transparent" />

              <div className="relative max-w-2xl mx-auto text-center">
                <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-white">
                  {t("home.cta.title")}
                </h2>
                <p className="mt-4 text-[20px] text-navy-200">
                  {t("home.cta.desc")}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/20"
                  >
                    {t("home.cta.contact")}
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-3.5 border border-navy-400 text-navy-100 text-sm font-medium hover:border-navy-300 hover:bg-navy-800 transition-all"
                  >
                    {t("home.cta.learn")}
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
