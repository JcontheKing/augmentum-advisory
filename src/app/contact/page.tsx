"use client";

import { useState } from "react";

const inquiryTypes = [
  { value: "client", label: "Potential client inquiry" },
  { value: "partnership", label: "Partnership opportunity" },
  { value: "careers", label: "Career interest" },
  { value: "media", label: "Media or speaking request" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <div className="w-12 h-[3px] bg-gradient-to-r from-teal-500 to-teal-400 mb-8" />
            <h1 className="text-[48px] lg:text-[60px] text-navy-900">
              Let&apos;s talk.
            </h1>
            <p className="mt-8 text-[20px] text-navy-600 leading-relaxed">
              Whether you&apos;re exploring a potential engagement, interested
              in joining us, or just want to connect — we&apos;d welcome the
              conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 section-padding">
        <div className="mx-auto max-w-content-2xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-white p-8 lg:p-12 border border-gray-100 shadow-card">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-teal-50 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h2 className="mt-6 text-[32px] text-navy-900">
                      Message received
                    </h2>
                    <p className="mt-4 text-[18px] text-navy-600">
                      Thank you for reaching out. We typically respond within
                      1-2 business days.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 lg:p-12 border border-gray-100 shadow-card"
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-navy-900 mb-2"
                      >
                        Organization{" "}
                        <span className="text-navy-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium text-navy-900 mb-2"
                      >
                        What brings you here?
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all bg-white"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy-900 mb-2"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit about what you're looking for..."
                        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all resize-none"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-navy-900 to-navy-950 text-white text-sm font-medium hover:from-navy-800 hover:to-navy-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-premium"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <h2 className="text-[32px] text-navy-900">
                  Other ways to connect
                </h2>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                      Email
                    </h3>
                    <p className="mt-2">
                      <a
                        href="mailto:hello@augmentum.co"
                        className="text-navy-900 hover:text-teal-600 transition-colors"
                      >
                        hello@augmentum.co
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                      Location
                    </h3>
                    <p className="mt-2 text-navy-600">
                      Lagos, Nigeria
                      <br />
                      <span className="text-navy-400">
                        Working globally with clients
                      </span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                      Social
                    </h3>
                    <div className="mt-2 flex gap-4">
                      <a
                        href="#"
                        className="text-navy-600 hover:text-teal-600 transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="text-navy-600 hover:text-teal-600 transition-colors"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white border-l-4 border-teal-500 shadow-card">
                  <p className="text-sm text-navy-600">
                    <strong className="text-navy-900">Response time:</strong> We
                    aim to respond to all inquiries within 1-2 business days.
                    For urgent matters, please indicate this in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
