import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Problems We Solve",
  description:
    "Augmentum Advisory helps organizations solve bold, complex, high-stakes problems — from systems-change programs to digital transformation and venture building.",
};

const problemAreas = [
  {
    id: "systems-change",
    category: "For Donors & Foundations",
    title: "Driving Large-Scale Systems Change",
    description:
      "You're trying to move beyond incremental improvements to catalyze fundamental shifts in how systems operate. The challenge isn't just funding good ideas — it's designing interventions that create lasting change at scale.",
    challenges: [
      "Designing programs that address root causes, not symptoms",
      "Building coalitions and aligning diverse stakeholders",
      "Creating accountability structures that drive real progress",
      "Measuring impact in complex, adaptive systems",
    ],
    approach:
      "We help you identify leverage points, design intervention architectures, and build the partnerships needed to shift systems — with clear metrics and learning loops built in from day one.",
  },
  {
    id: "venture-building",
    category: "For Corporates & Investors",
    title: "Building & Scaling New Ventures",
    description:
      "You see an opportunity to create something new — a digital product, a new business line, an adjacent market entry. But moving from idea to execution requires more than strategy decks.",
    challenges: [
      "Validating opportunity in complex, data-poor environments",
      "Building the right team and capabilities from scratch",
      "Navigating regulatory and operational complexity",
      "Scaling without losing quality or burning capital",
    ],
    approach:
      "We work alongside you from concept through launch — stress-testing assumptions, building MVPs, assembling teams, and creating the operating systems that enable sustainable scale.",
  },
  {
    id: "performance-transformation",
    category: "For Private Equity",
    title: "Driving Performance Transformation",
    description:
      "You've invested in a company with significant potential, but unlocking that value requires more than financial engineering. You need operational uplift, digital transformation, or a fundamental turnaround.",
    challenges: [
      "Diagnosing true performance drivers and blockers",
      "Building management capability alongside operational change",
      "Implementing technology that actually improves performance",
      "Maintaining momentum through the value creation period",
    ],
    approach:
      "We embed with your portfolio companies to drive measurable improvement — from operational diagnostics through implementation — with clear value tracking throughout.",
  },
  {
    id: "policy-reform",
    category: "For Governments",
    title: "Enabling Bold Policy Reform",
    description:
      "You're committed to meaningful reform, but turning policy vision into operational reality is harder than it looks. Institutional inertia, capacity gaps, and political complexity create headwinds.",
    challenges: [
      "Translating policy intent into implementable programs",
      "Building institutional capability to execute and sustain change",
      "Managing stakeholders with competing interests",
      "Creating quick wins while building toward longer-term transformation",
    ],
    approach:
      "We work with reform leaders to design practical implementation pathways, build delivery capability, and navigate the political economy of change — creating early traction while setting up for lasting impact.",
  },
];

const sectors = [
  "Financial Services & Fintech",
  "Healthcare & Life Sciences",
  "Agriculture & Food Systems",
  "Energy & Infrastructure",
  "Education & Skills",
  "Digital & Technology",
  "Public Sector & Governance",
];

export default function ProblemsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-8" />
            <h1 className="text-[48px] lg:text-[60px] text-navy-900">
              Bold problems.
              <br />
              Practical solutions.
            </h1>
            <p className="mt-8 text-[20px] text-navy-600 leading-relaxed">
              We work with organizations facing complex, high-stakes challenges
              — where the path forward isn&apos;t obvious, where multiple forces
              are at play, and where getting it right truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Areas */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-20 lg:space-y-28">
            {problemAreas.map((problem, index) => (
              <div
                key={problem.id}
                id={problem.id}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  {/* Left column - Problem framing */}
                  <div className="lg:col-span-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-teal-500 mb-4">
                      {problem.category}
                    </p>
                    <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
                      {problem.title}
                    </h2>
                    <p className="mt-6 text-[18px] text-navy-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  {/* Right column - Challenges & Approach */}
                  <div className="lg:col-span-7">
                    <div className="bg-white p-8 lg:p-10 border border-gray-100 border-l-4 border-l-teal-500 shadow-card hover:shadow-premium transition-all duration-300">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                        Common Challenges
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {problem.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="flex items-start gap-3 text-[16px] text-navy-700"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-teal-500" />
                            {challenge}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                          Our Approach
                        </h3>
                        <p className="mt-4 text-[16px] text-navy-600 leading-relaxed">
                          {problem.approach}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < problemAreas.length - 1 && (
                  <div className="mt-20 lg:mt-28 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              Where we work
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              Our experience spans sectors, allowing us to bring cross-industry
              insights to every engagement.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="inline-flex px-5 py-2.5 bg-gray-50 text-navy-700 text-sm font-medium border border-gray-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-300"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-navy section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-white">
              Facing a complex challenge?
            </h2>
            <p className="mt-4 text-[18px] text-navy-200">
              We&apos;d welcome a conversation about what you&apos;re trying to
              achieve and whether we might be helpful.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/20"
              >
                Start a Conversation
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center px-8 py-3.5 border border-navy-400 text-navy-100 text-sm font-medium hover:border-navy-300 hover:bg-navy-800 transition-all"
              >
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
