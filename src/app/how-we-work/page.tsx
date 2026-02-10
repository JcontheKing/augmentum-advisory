import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Learn about Augmentum's approach to consulting - senior-led engagements, fit-for-purpose teams, and a focus on practical solutions that create real momentum.",
};

const principles = [
  {
    number: "01",
    title: "Start with Clarity",
    description:
      "Before we solve, we understand. We invest heavily in understanding the true nature of your challenge — the stakeholders, constraints, history, and real objectives. This diagnosis shapes everything that follows.",
    detail:
      "We often find the most valuable thing we do is help clients get clear on the problem worth solving. Many engagements begin with one question and evolve as we develop a shared understanding of what's really at stake.",
  },
  {
    number: "02",
    title: "Assemble the Right Team",
    description:
      "Every challenge is different, so every team should be different. We build bespoke teams for each engagement — matching skills, experience, and working styles to what your specific situation requires.",
    detail:
      "Our network includes former executives, specialist consultants, technical experts, and implementation practitioners. We select for fit, not availability.",
  },
  {
    number: "03",
    title: "Senior Minds, Close to the Work",
    description:
      "Our most experienced practitioners stay deeply involved throughout the engagement — not just at kickoff and final presentation. Complex problems require senior judgment at every turn.",
    detail:
      "You'll work directly with people who've solved similar problems before. We don't delegate the thinking.",
  },
  {
    number: "04",
    title: "Work as Partners",
    description:
      "We don't disappear into a back room and emerge with a document. We work alongside your team, building shared understanding and capability as we go. The best solutions emerge from genuine collaboration.",
    detail:
      "This isn't about being nice — it's about being effective. Solutions developed in partnership are better understood, more implementable, and more likely to stick.",
  },
  {
    number: "05",
    title: "Bias Toward Traction",
    description:
      "Insight without action is just intellectual exercise. We design our work to create momentum — finding early wins, building proof points, and maintaining progress toward meaningful outcomes.",
    detail:
      "Every engagement includes clear milestones and accountability structures. We're not satisfied with recommendations that sit on shelves.",
  },
];

const engagementPhases = [
  {
    phase: "Listen & Frame",
    duration: "Week 1-2",
    description:
      "Deep immersion to understand your challenge, stakeholders, and context. We challenge assumptions and help clarify what success looks like.",
    outputs: ["Problem definition", "Stakeholder map", "Success criteria"],
  },
  {
    phase: "Explore & Analyze",
    duration: "Week 2-4",
    description:
      "Rigorous analysis combining data, interviews, and our cross-sector pattern recognition. We develop hypotheses and test them against evidence.",
    outputs: ["Key insights", "Options analysis", "Recommendation framework"],
  },
  {
    phase: "Design & Validate",
    duration: "Week 4-6",
    description:
      "Collaborative development of solutions, stress-tested with stakeholders. We iterate based on feedback and practical constraints.",
    outputs: ["Solution design", "Implementation roadmap", "Risk mitigation plan"],
  },
  {
    phase: "Plan & Launch",
    duration: "Week 6-8",
    description:
      "Detailed implementation planning and early execution support. We help you build the capabilities and structures needed to sustain progress.",
    outputs: ["Detailed action plan", "Governance structure", "Quick wins initiated"],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-8" />
            <h1 className="text-[48px] lg:text-[60px] text-navy-900">
              Partnership over
              <br />
              prescription.
            </h1>
            <p className="mt-8 text-[20px] text-navy-600 leading-relaxed">
              We don&apos;t believe in one-size-fits-all methodologies or
              templated solutions. Every engagement is shaped by the specific
              challenge, context, and people involved. But certain principles
              guide everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              Our Principles
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              These aren&apos;t just words on a wall — they shape how we staff
              teams, structure engagements, and measure success.
            </p>
          </div>

          <div className="space-y-8">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="bg-white p-8 lg:p-10 border border-gray-100 border-l-4 border-l-teal-500 shadow-card hover:shadow-premium transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1">
                    <span className="text-[44px] text-gradient-teal">
                      {principle.number}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-[32px] text-navy-900">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-[18px] text-navy-700 leading-relaxed">
                      {principle.description}
                    </p>
                    <p className="mt-4 text-[16px] text-navy-500 leading-relaxed">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Journey */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-6" />
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              A Typical Engagement
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              While every project is different, most follow a similar arc —
              though timelines and emphasis vary based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementPhases.map((phase, index) => (
              <div key={phase.phase} className="relative group">
                {/* Connector line for desktop */}
                {index < engagementPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-teal-300 to-gray-200 -translate-x-1/2" />
                )}

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-950 flex items-center justify-center mb-6 group-hover:shadow-premium transition-shadow duration-300">
                    <span className="text-lg text-white">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-teal-500 mb-2">
                    {phase.duration}
                  </p>
                  <h3 className="text-[24px] text-navy-900">
                    {phase.phase}
                  </h3>
                  <p className="mt-3 text-[16px] text-navy-600">
                    {phase.description}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {phase.outputs.map((output) => (
                      <li
                        key={output}
                        className="text-xs text-navy-500 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-teal-500" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gray-50 border-l-4 border-teal-500">
            <p className="text-[16px] text-navy-600 max-w-2xl">
              <strong className="text-navy-900">Note:</strong> These timelines
              are illustrative. Some engagements are shorter sprints focused on
              specific questions. Others are longer partnerships spanning months
              of implementation support. We scope to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-gradient-navy section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-[3px] bg-gradient-to-r from-teal-400 to-teal-500 mb-6" />
              <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-white">
                Working with Augmentum
              </h2>
            </div>
            <div className="space-y-8">
              {[
                { title: "Direct access", desc: "You'll work directly with senior practitioners — not junior analysts backed by distant partners." },
                { title: "Honest counsel", desc: "We'll tell you what we really think, even when it's uncomfortable. That's what genuine partnership requires." },
                { title: "Flexible engagement", desc: "We structure engagements around your needs, not our utilization metrics. Scale up or down as the work evolves." },
                { title: "Knowledge transfer", desc: "We aim to leave you stronger. Expect capability building and documentation that outlasts our engagement." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-teal-500/30 pl-6 hover:border-teal-400 transition-colors">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-[16px] text-navy-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-navy-900">
              Let&apos;s explore how we might help
            </h2>
            <p className="mt-4 text-[18px] text-navy-600">
              Every conversation starts with listening. Tell us about your
              challenge.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-navy-900 to-navy-950 text-white text-sm font-medium hover:from-navy-800 hover:to-navy-900 transition-all shadow-premium"
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
