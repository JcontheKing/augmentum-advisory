"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const howWeWork = [
  {
    titleKey: "about.howWeWork.q.title",
    descKey: "about.howWeWork.q.desc",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    titleKey: "about.howWeWork.clarity.title",
    descKey: "about.howWeWork.clarity.desc",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    titleKey: "about.howWeWork.execution.title",
    descKey: "about.howWeWork.execution.desc",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h12.76M4.93 19.12h14.14" />
      </svg>
    ),
  },
  {
    titleKey: "about.howWeWork.coalitions.title",
    descKey: "about.howWeWork.coalitions.desc",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    titleKey: "about.howWeWork.momentum.title",
    descKey: "about.howWeWork.momentum.desc",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[340px] lg:h-[400px] overflow-hidden">
        <Image
          src="/images/AdobeStock_294213252.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/50 to-navy-950/80" />

        {/* Title overlay */}
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-content-2xl w-full px-6 lg:px-8 pb-12 lg:pb-16">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-400 to-teal-300 mb-6" />
            <h1 className="text-[44px] lg:text-[56px] text-white">
              {t("about.whoWeAre.title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left column - Main text */}
            <div className="space-y-6 text-[18px] lg:text-[20px] text-navy-600 leading-relaxed">
              <p>
                {t("about.whoWeAre.p1")}{" "}
                <strong className="text-navy-900">{t("about.whoWeAre.p1Bold")}</strong>{" "}
                {t("about.whoWeAre.p1End")}{" "}
                <strong className="text-navy-900">{t("about.whoWeAre.p1Bold2")}</strong>
              </p>
              <p>
                {t("about.whoWeAre.p2")}{" "}
                <strong className="text-navy-900">{t("about.whoWeAre.p2Bold")}</strong>{" "}
                {t("about.whoWeAre.p2End")}
              </p>
              <p>
                {t("about.whoWeAre.p3")}{" "}
                <strong className="text-navy-900">{t("about.whoWeAre.p3Bold1")}</strong>{" "}
                {t("about.whoWeAre.p3Mid")}{" "}
                <strong className="text-navy-900">{t("about.whoWeAre.p3Bold2")}</strong>{" "}
                {t("about.whoWeAre.p3End")}{" "}
                <strong className="text-navy-900">{t("about.whoWeAre.p3Bold3")}</strong>
              </p>
            </div>

            {/* Right column - Augment statement */}
            <div className="flex items-start">
              <div className="relative bg-gradient-to-br from-gray-50 to-teal-50/30 p-8 lg:p-10 border-l-4 border-teal-500">
                <p className="text-[20px] lg:text-[22px] text-navy-600 leading-relaxed">
                  {t("about.whoWeAre.augment")}{" "}
                  <span className="text-gradient-teal font-bold text-[24px] lg:text-[26px]">
                    {t("about.whoWeAre.augmentBold")}
                  </span>
                </p>
                <p className="mt-4 text-[16px] lg:text-[18px] text-navy-500 leading-relaxed">
                  {t("about.whoWeAre.augmentEnd")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
          <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
            {t("about.leadership.title")}
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <Image
                  src="/images/topsy_kola-oyeneyin.png"
                  alt={t("about.leadership.name")}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-6">
                <p className="text-[22px] lg:text-[26px] text-navy-900 font-bold tracking-tight">
                  {t("about.leadership.name")}
                </p>
                <p className="mt-1 text-teal-600 text-[14px] font-semibold uppercase tracking-widest">
                  {t("about.leadership.role")}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-[18px] lg:text-[20px] text-navy-600 leading-relaxed">
                  {t("about.leadership.bio1")}
                </p>
                <p className="text-[18px] lg:text-[20px] text-navy-600 leading-relaxed">
                  {t("about.leadership.bio2")}
                </p>
                <p className="text-[18px] lg:text-[20px] text-navy-600 leading-relaxed">
                  {t("about.leadership.bio3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              {t("about.howWeWork.title")}
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              {t("about.howWeWork.subtitle")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeWork.map((item, index) => (
              <div
                key={item.titleKey}
                className="group bg-white border border-gray-100 p-8 hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-teal-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-[20px] lg:text-[22px] text-navy-900">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-3 text-[15px] lg:text-[16px] text-navy-600 leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
