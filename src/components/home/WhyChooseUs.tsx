"use client";

import { Clock, Wrench, Shield, Users, CheckCircle, Truck } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const reasons = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "24 Years Doing This",
    description:
      "Not a side hustle. Not a weekend warrior. This has been the full-time job since 2002 — 24 years of showing up, solving problems, and doing it right.",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "One Person, Every Trade",
    description:
      "Demolition, carpentry, plumbing, drywall, painting, decks, ceilings — all done by the same person. You deal with one guy, not six different subs who don't talk to each other.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "No Surprise Bills",
    description:
      "The estimate you get is the price you pay. No hidden fees, no 'oh by the way' charges halfway through. Honest pricing from someone who's been doing this long enough to quote it right.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Westchester & Rockland",
    description:
      "Nanuet, White Plains, Yonkers, Tarrytown, Nyack, Suffern — these aren't just cities on a list. These are neighborhoods where the work has been done, year after year.",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: "Shows Up on Time",
    description:
      "No ghosting, no 'I'll be there between 8 and 4.' A specific time, and it gets kept. After 24 years, the schedule is dialed in.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Virtual Estimates Available",
    description:
      "Send photos, do a video call, get a quote without waiting for an on-site visit. In person or virtual — whatever gets the project moving fastest.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-forest-900 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00A0A_2TUrQ4fk3vf_0t20CI_600x450.jpg')",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-300">
              Why Hire Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Guy Your Neighbors Keep Calling Back
            </h2>
            <p className="text-white/60 mt-3 max-w-lg mx-auto text-sm">
              24 years of repeat customers across Westchester County. Here&apos;s
              why they don&apos;t bother looking for someone else.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className={`bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300 group ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 bg-forest-500/10 text-forest-300 rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest-500/20 transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
