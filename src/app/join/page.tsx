import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join Augmentum Advisory - a firm built for exceptional practitioners who want meaningful work, autonomy, and high standards without traditional firm constraints.",
};

const whyJoin = [
  {
    title: "Work That Matters",
    description:
      "Every engagement addresses real challenges with real stakes. You'll work on problems that matter — systems change, digital transformation, policy reform — not routine projects.",
  },
  {
    title: "Senior Responsibility",
    description:
      "From day one, you'll be close to the work and close to clients. We don't hide talent behind layers. You'll have real ownership and real impact.",
  },
  {
    title: "Flexibility Without Compromise",
    description:
      "We've designed a model that offers autonomy and flexibility while maintaining the highest professional standards. Work that fits your life, not the other way around.",
  },
  {
    title: "Exceptional Colleagues",
    description:
      "You'll work alongside people who've built careers at top firms, run businesses, and led transformations. The bar is high, and so is the mutual respect.",
  },
];

const whatWeLookFor = [
  {
    title: "Intellectual Rigor",
    description:
      "You think clearly, challenge assumptions, and can structure ambiguous problems. You're not satisfied with surface-level analysis.",
  },
  {
    title: "Practical Wisdom",
    description:
      "You've learned from doing — not just studying. You understand that elegant solutions must also be implementable.",
  },
  {
    title: "Genuine Curiosity",
    description:
      "You're energized by new domains, new challenges, and continuous learning. Expertise is a starting point, not an endpoint.",
  },
  {
    title: "Collaborative Spirit",
    description:
      "You make others better. You listen well, share credit, and build trust with clients and colleagues alike.",
  },
];

const opportunityTypes = [
  {
    type: "Core Team",
    description:
      "Full-time practitioners who form the backbone of Augmentum. You'll lead engagements, develop client relationships, and help shape the firm's direction.",
    suited: "For those seeking a primary professional home with long-term growth",
  },
  {
    type: "Expert Network",
    description:
      "Specialists who bring deep domain expertise to specific engagements. You'll contribute to projects where your particular skills are most valuable.",
    suited: "For domain experts who want selective, high-impact engagements",
  },
  {
    type: "Affiliates",
    description:
      "Experienced practitioners who collaborate on projects while maintaining independent practices. Mutual benefit, mutual flexibility.",
    suited: "For established professionals seeking quality collaboration",
  },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-8" />
            <h1 className="text-[48px] lg:text-[60px] text-navy-900">
              For people who want
              <br />
              to do their best work.
            </h1>
            <p className="mt-8 text-[20px] text-navy-600 leading-relaxed">
              We built Augmentum for exceptional practitioners — people who want
              meaningful challenges, genuine autonomy, and the highest
              professional standards. If that resonates, we&apos;d like to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              Why Augmentum
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              We&apos;ve tried to build the firm we always wanted to work at.
              Here&apos;s what that means in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyJoin.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 border border-gray-100 border-l-4 border-l-teal-500 shadow-card hover:shadow-premium transition-all duration-300"
              >
                <h3 className="text-[24px] text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-[18px] text-navy-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
              <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
                The kind of people
                <br />
                we want to work with
              </h2>
              <p className="mt-6 text-[18px] text-navy-600">
                We care less about pedigree than about how you think and work.
                The best indicator of fit is whether you recognize yourself in
                these descriptions.
              </p>
            </div>

            <div className="space-y-8">
              {whatWeLookFor.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-navy-900 to-navy-950 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-900">{item.title}</h3>
                    <p className="mt-1 text-[16px] text-navy-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Work With Us */}
      <section className="bg-gradient-navy section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-400 to-teal-500 mb-6" />
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-white">
              Multiple paths to collaboration
            </h2>
            <p className="mt-4 text-[18px] text-navy-200">
              We recognize that exceptional people have different needs and
              preferences. Our model accommodates various arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunityTypes.map((opportunity) => (
              <div
                key={opportunity.type}
                className="bg-white/[0.06] backdrop-blur-sm p-8 border border-white/[0.08] hover:bg-white/[0.1] hover:border-teal-500/20 transition-all duration-300"
              >
                <h3 className="text-[24px] text-white">
                  {opportunity.type}
                </h3>
                <p className="mt-4 text-[16px] text-navy-300">
                  {opportunity.description}
                </p>
                <p className="mt-6 pt-6 border-t border-white/10 text-xs text-teal-400">
                  {opportunity.suited}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              Current Openings
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              We&apos;re always interested in meeting exceptional people, even
              if there isn&apos;t a specific role listed.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 border border-gray-100 hover:border-teal-200 hover:shadow-card transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-medium text-navy-900">
                    Engagement Manager
                  </h3>
                  <p className="mt-1 text-sm text-navy-500">
                    Core Team · Lagos / Remote
                  </p>
                </div>
                <Link
                  href="/contact?role=engagement-manager"
                  className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-navy-900 to-navy-950 text-white text-sm font-medium hover:from-navy-800 hover:to-navy-900 transition-all whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-100 hover:border-teal-200 hover:shadow-card transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-medium text-navy-900">
                    Digital Strategy Expert
                  </h3>
                  <p className="mt-1 text-sm text-navy-500">
                    Expert Network · Contract
                  </p>
                </div>
                <Link
                  href="/contact?role=digital-strategy"
                  className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-navy-900 to-navy-950 text-white text-sm font-medium hover:from-navy-800 hover:to-navy-900 transition-all whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-100 hover:border-teal-200 hover:shadow-card transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-medium text-navy-900">
                    Open Application
                  </h3>
                  <p className="mt-1 text-sm text-navy-500">
                    All types · Tell us what you bring
                  </p>
                </div>
                <Link
                  href="/contact?role=open"
                  className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-navy-900 to-navy-950 text-white text-sm font-medium hover:from-navy-800 hover:to-navy-900 transition-all whitespace-nowrap"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              Sound interesting?
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              We&apos;d welcome a conversation. Tell us about yourself and what
              you&apos;re looking for.
            </p>
            <div className="mt-10">
              <Link
                href="/contact?interest=careers"
                className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/20"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
