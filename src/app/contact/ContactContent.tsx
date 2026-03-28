"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  FileText,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch(company.formAction, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data)),
    }).catch(() => {});

    setSubmitted(true);
  };

  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Submit Your Request",
      description: "Fill out the form or call us directly.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Get a Callback",
      description: "We'll reach out within a few hours to discuss your project.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule On-Site Visit",
      description: "Free on-site estimate at a time that works for you.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Work Begins",
      description: "Approved? We schedule and start. Simple as that.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.craigslist.org/00I0I_kOc11Gq1CKD_0t20CI_600x450.jpg"
            alt="Door and window installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-4 text-forest-300">
            Free Estimates
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-4">
            Tell Me What{" "}
            <span className="text-stroke">You Need</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Call, text, or fill out the form. Honest quote, no pressure, no
            surprise charges.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 lg:p-10">
                  {/* Corner brackets */}
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-forest-600 rounded-tl-sm" />
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-forest-600 rounded-tr-sm" />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-forest-600 rounded-bl-sm" />
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-forest-600 rounded-br-sm" />

                    {submitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                        <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
                          Got It.
                        </h3>
                        <p className="text-neutral-600">
                          Expect a call or text back within a few hours. If
                          it&apos;s urgent, call{" "}
                          <a
                            href={company.phoneLink}
                            className="text-forest-700 font-bold hover:underline"
                          >
                            {company.phone}
                          </a>{" "}
                          directly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <h3 className="font-heading text-xl font-bold text-neutral-900 mb-1">
                          Request a Free Estimate
                        </h3>
                        <p className="text-sm text-neutral-500 mb-6">
                          Describe what you need and we&apos;ll get back to you
                          with an honest quote.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-xs font-medium text-neutral-700 mb-1.5"
                            >
                              Your Name *
                            </label>
                            <input
                              id="name"
                              name="name"
                              required
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 focus:outline-none transition-colors duration-300"
                              placeholder="John Smith"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs font-medium text-neutral-700 mb-1.5"
                            >
                              Phone *
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 focus:outline-none transition-colors duration-300"
                              placeholder="(914) 555-1234"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-medium text-neutral-700 mb-1.5"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 focus:outline-none transition-colors duration-300"
                            placeholder="john@email.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="service"
                            className="block text-xs font-medium text-neutral-700 mb-1.5"
                          >
                            What kind of work? *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 focus:outline-none transition-colors duration-300 bg-white"
                          >
                            <option value="">Select a service...</option>
                            {services.map((svc) => (
                              <option key={svc.slug} value={svc.title}>
                                {svc.title}
                              </option>
                            ))}
                            <option value="Other">Other / Not Listed</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="urgency"
                            className="block text-xs font-medium text-neutral-700 mb-1.5"
                          >
                            How soon?
                          </label>
                          <select
                            id="urgency"
                            name="urgency"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 focus:outline-none transition-colors duration-300 bg-white"
                          >
                            <option value="">Select timing...</option>
                            <option value="ASAP">ASAP</option>
                            <option value="This week">This week</option>
                            <option value="This month">This month</option>
                            <option value="Just getting quotes">
                              Just getting quotes
                            </option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="preferred-date"
                            className="block text-xs font-medium text-neutral-700 mb-1.5"
                          >
                            Preferred Date
                          </label>
                          <input
                            id="preferred-date"
                            name="preferredDate"
                            type="date"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 focus:outline-none transition-colors duration-300 min-h-[46px] [-webkit-appearance:none]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="details"
                            className="block text-xs font-medium text-neutral-700 mb-1.5"
                          >
                            Describe the project *
                          </label>
                          <textarea
                            id="details"
                            name="details"
                            required
                            rows={4}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 focus:outline-none transition-colors duration-300 resize-none"
                            placeholder="Tell us what you need done — the more detail, the better the estimate..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-forest-700 hover:bg-forest-800 text-white py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          Send My Request
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  {/* Phone card */}
                  <a
                    href={company.phoneLink}
                    className="flex items-center gap-4 bg-forest-50 border border-forest-200 rounded-xl p-5 hover:bg-forest-100 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-forest-700 text-white rounded-lg flex items-center justify-center group-hover:bg-forest-800 transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">
                        Call or Text
                      </p>
                      <p className="text-lg font-bold text-neutral-900">
                        {company.phone}
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5">
                    <div className="w-12 h-12 bg-stone-600 text-white rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">
                        Based In
                      </p>
                      <p className="text-sm font-bold text-neutral-900">
                        Nanuet, NY
                      </p>
                      <p className="text-xs text-neutral-500">
                        Serving Westchester &amp; Rockland County
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5">
                    <div className="w-12 h-12 bg-stone-600 text-white rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider">
                        Hours
                      </p>
                      {company.hoursStructured.map((h, i) => (
                        <p key={i} className="text-sm text-neutral-900">
                          <span className="font-bold">{h.days}:</span>{" "}
                          {h.open}
                          {h.close ? `–${h.close}` : ""}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="bg-forest-800 text-white rounded-xl p-5">
                    <p className="font-heading font-bold text-sm mb-1">
                      Virtual Estimates Available
                    </p>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Send photos or do a video call — get a quote without
                      waiting for an on-site visit.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 md:py-28 lg:py-32 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-600">
                The Process
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
                What Happens After You Reach Out
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-forest-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-forest-700/20">
                    {step.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold text-neutral-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                Find Us in Nanuet, NY
              </h2>
              <p className="text-neutral-500 mt-2 text-sm">
                Serving all of Westchester &amp; Rockland County
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
              <iframe
                src={company.mapEmbedUrl}
                className="w-full h-[350px] lg:h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NY Handyman location — Nanuet, NY"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
