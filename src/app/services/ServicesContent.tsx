"use client";

import Link from "next/link";
import {
  Hammer,
  Home,
  Square,
  Paintbrush,
  LayoutGrid,
  ChefHat,
  Flame,
  Droplets,
  Fence,
  Ruler,
  Axe,
  DoorOpen,
  ArrowRight,
  Phone,
} from "lucide-react";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-7 h-7" />,
  Axe: <Axe className="w-7 h-7" />,
  Home: <Home className="w-7 h-7" />,
  Square: <Square className="w-7 h-7" />,
  Paintbrush: <Paintbrush className="w-7 h-7" />,
  DoorOpen: <DoorOpen className="w-7 h-7" />,
  Ruler: <Ruler className="w-7 h-7" />,
  Fence: <Fence className="w-7 h-7" />,
  LayoutGrid: <LayoutGrid className="w-7 h-7" />,
  ChefHat: <ChefHat className="w-7 h-7" />,
  Flame: <Flame className="w-7 h-7" />,
  Droplets: <Droplets className="w-7 h-7" />,
};

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.craigslist.org/00808_8ZQ46ldLKTR_0t20CI_600x450.jpg"
            alt="Carpentry and renovation work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-4 text-forest-300">
            12+ Trades
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-4">
            Every Service{" "}
            <span className="text-stroke">You Need</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            One experienced handyman covers it all — from demolition to the
            final coat of paint. No subcontractors, no scheduling headaches.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug}>
                <div
                  id={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                  style={i % 2 === 1 ? { direction: "rtl" } : {}}
                >
                  {/* Image */}
                  <div
                    className="rounded-xl overflow-hidden aspect-[4/3]"
                    style={{ direction: "ltr" }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ direction: "ltr" }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-forest-50 text-forest-700 rounded-xl flex items-center justify-center">
                        {iconMap[service.icon] || (
                          <Hammer className="w-7 h-7" />
                        )}
                      </div>
                      <span className="font-heading text-5xl font-bold text-neutral-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-forest-700 hover:text-forest-800 transition-colors duration-300 group"
                    >
                      Get a Quote for This
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-forest-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00e0e_2rcqJlz08AQ_0t20CI_600x450.jpg')",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Don&apos;t See Your Project Listed?
            </h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8 text-lg">
              After 24 years, there&apos;s not much that&apos;s new. Call and
              describe what you need — chances are it&apos;s been done before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-forest-800 hover:bg-neutral-100 px-8 py-4 rounded-lg font-bold text-base tracking-wide transition-all duration-300 hover:shadow-xl group"
              >
                Describe Your Project
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
