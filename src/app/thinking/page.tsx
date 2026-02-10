import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Insights and perspectives from Augmentum Advisory on strategy, transformation, and solving complex challenges in Africa and beyond.",
};

// Placeholder articles - these would come from Sanity CMS in production
const featuredArticle = {
  slug: "first-principles-problem-solving",
  title: "The Art of First Principles Problem Solving",
  excerpt:
    "In a world drowning in best practices and benchmarks, the most valuable skill might be the ability to think from first principles. Here's how we approach it.",
  category: "Methodology",
  date: "January 2026",
  readTime: "8 min read",
};

const articles = [
  {
    slug: "digital-transformation-africa",
    title: "Digital Transformation in African Markets: Beyond the Hype",
    excerpt:
      "Why context matters more than technology, and what successful digital transformations in Africa actually look like.",
    category: "Digital",
    date: "December 2025",
    readTime: "6 min read",
  },
  {
    slug: "building-advisory-firms",
    title: "Why We Built a Different Kind of Advisory Firm",
    excerpt:
      "The traditional consulting model has limitations. Here's how we're trying to do something better — for clients and practitioners alike.",
    category: "Firm Building",
    date: "November 2025",
    readTime: "5 min read",
  },
  {
    slug: "systems-change-philanthropy",
    title: "Systems Change: Moving Beyond Programmatic Thinking",
    excerpt:
      "For donors committed to lasting impact, the shift from programs to systems requires new ways of thinking about measurement, risk, and timelines.",
    category: "Philanthropy",
    date: "October 2025",
    readTime: "7 min read",
  },
  {
    slug: "pe-value-creation",
    title: "Value Creation in African Private Equity",
    excerpt:
      "Operational improvement in portfolio companies requires more than dashboards and KPIs. It requires genuine capability building.",
    category: "Private Equity",
    date: "September 2025",
    readTime: "6 min read",
  },
  {
    slug: "policy-implementation",
    title: "The Implementation Gap in Policy Reform",
    excerpt:
      "Good policies fail not because they're wrong, but because implementation is hard. How reformers can close the gap between intent and impact.",
    category: "Public Sector",
    date: "August 2025",
    readTime: "8 min read",
  },
];

const categories = [
  "All",
  "Methodology",
  "Digital",
  "Philanthropy",
  "Private Equity",
  "Public Sector",
  "Firm Building",
];

export default function ThinkingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[340px] lg:h-[400px] overflow-hidden">
        <Image
          src="/images/AdobeStock_330722058.jpeg"
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
              News & Insights
            </h1>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-gray-50 pt-12 lg:pt-16 pb-16 lg:pb-20">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-navy-900 to-navy-950 text-white shadow-card"
                    : "bg-gray-50 text-navy-600 hover:bg-gray-100 hover:text-navy-900 border border-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/thinking/${article.slug}`}
                className="group"
              >
                <article className="h-full flex flex-col p-6 bg-white border border-gray-100 hover:border-teal-200 hover:shadow-card transition-all duration-300">
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-teal-500">
                      {article.category}
                    </p>
                    <h3 className="mt-3 text-[24px] text-navy-900 group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-[16px] text-navy-600 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3 text-xs text-navy-500">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-navy-300" />
                    <span>{article.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-8 py-3.5 border border-navy-200 text-navy-700 text-sm font-medium hover:border-teal-300 hover:bg-teal-50/50 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-navy-900 to-navy-950 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-[3px] bg-gradient-to-r from-teal-400 to-transparent" />
            <div className="absolute top-0 left-0 w-[3px] h-20 bg-gradient-to-b from-teal-400 to-transparent" />
            <div className="absolute bottom-0 right-0 w-20 h-[3px] bg-gradient-to-l from-teal-400 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[3px] h-20 bg-gradient-to-t from-teal-400 to-transparent" />

            <div className="relative max-w-2xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[38px] lg:text-[44px] text-white">
                Stay informed
              </h2>
              <p className="mt-4 text-[20px] text-navy-200">
                Get our latest thinking delivered to your inbox. No spam,
                unsubscribe anytime.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3.5 bg-navy-800 border border-navy-700 text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all whitespace-nowrap shadow-lg shadow-teal-500/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
