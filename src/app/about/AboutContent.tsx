"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Shield,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const values = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Honest Pricing",
    description:
      "What gets quoted is what gets charged. No hidden line items, no surprise add-ons, no 'I didn't realize that would cost extra' moments.",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Do It Right the First Time",
    description:
      "No cutting corners to finish faster. Every joint is tight, every wall is smooth, every fixture is level. That's how it's been done for 24 years.",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Respect the Schedule",
    description:
      "Show up when promised, finish when promised. After 24 years, the only surprise should be how good the work looks — not when it gets done.",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: "Clean Up After the Work",
    description:
      "The job isn't done until the workspace is as clean as it was before. Drop cloths, vacuum, haul away debris — that's part of the job, not an add-on.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.craigslist.org/00j0j_gJ42G0XVKtP_0CI0t2_600x450.jpg"
            alt="Drywall and renovation work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-4 text-forest-300">
            Since 2002
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-4">
            24 Years of{" "}
            <span className="text-stroke">Doing the Work</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Not a franchise. Not a startup. One independent handyman who&apos;s
            been at it since 2002 — and still answers the phone himself.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.craigslist.org/00w0w_2NHyiXOYPtV_0t20CI_600x450.jpg"
                  alt="Completed renovation project"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-600">
                  The Story
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                  24 Years Isn&apos;t a Number — It&apos;s Every House in This County
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Started in 2002. No business cards, no website, no fancy
                    branding — just a truck full of tools and the willingness to
                    show up and do the work right.
                  </p>
                  <p>
                    24 years later, the approach hasn&apos;t changed. It&apos;s
                    still one person who shows up, assesses the job, quotes it
                    honestly, and does the work. Demolition, carpentry, drywall,
                    plumbing, painting, decks, windows, water heaters — all of
                    it, handled by the same two hands.
                  </p>
                  <p>
                    Westchester and Rockland County homeowners don&apos;t need a
                    contractor with a sales team and a fleet of trucks. They need
                    someone who picks up the phone, shows up on Tuesday like they
                    said they would, and leaves the place better than they found
                    it. That&apos;s the whole business model.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-forest-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00g0g_eD3HnJ1BOmK_0t20CI_600x450.jpg')",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-300">
                Standards
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                How the Work Gets Done
              </h2>
              <p className="text-white/60 mt-3 max-w-lg mx-auto text-sm">
                Four principles that have held up for 24 years.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300 group">
                  <div className="w-12 h-12 bg-forest-500/10 text-forest-300 rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest-500/20 transition-colors duration-300">
                    {val.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section
        id="service-area"
        className="py-20 md:py-28 lg:py-32 bg-white"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-600">
                  Where We Work
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                  All of Westchester &amp; Rockland
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  24 years of working these neighborhoods means knowing which
                  houses have plaster walls, which buildings have old plumbing,
                  and which towns have strict inspection schedules. Local
                  knowledge saves time and money.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {company.areasServed.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm rounded-lg border border-neutral-200"
                    >
                      <MapPin className="w-3 h-3 text-forest-600" />
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-forest-600" />
                    <a
                      href={company.phoneLink}
                      className="hover:text-forest-700 transition-colors duration-300"
                    >
                      {company.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-forest-600" />
                    <span>{company.hours}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
                <iframe
                  src={company.mapEmbedUrl}
                  className="w-full h-[350px] lg:h-[400px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NY Handyman service area"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-stone-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00303_5oaxpk75VsB_0t20CI_600x450.jpg')",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              24 Years. Ask Me Anything.
            </h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8 text-lg">
              Whatever the project, it&apos;s probably been done before. Call for
              a straight answer and an honest estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-8 py-4 rounded-lg font-bold text-base tracking-wide transition-all duration-300 hover:shadow-xl group"
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href={company.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 px-8 py-4 rounded-lg font-bold text-base tracking-wide transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
