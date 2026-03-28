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
} from "lucide-react";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-6 h-6" />,
  Axe: <Axe className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Square: <Square className="w-6 h-6" />,
  Paintbrush: <Paintbrush className="w-6 h-6" />,
  DoorOpen: <DoorOpen className="w-6 h-6" />,
  Ruler: <Ruler className="w-6 h-6" />,
  Fence: <Fence className="w-6 h-6" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6" />,
  ChefHat: <ChefHat className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
};

export function ServiceRows() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-600">
              What We Do
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
              One Call Covers Everything
            </h2>
            <p className="text-neutral-500 mt-3 max-w-lg mx-auto text-sm">
              12 trades, one experienced handyman. No juggling subcontractors,
              no scheduling headaches — just the work, done right.
            </p>
          </div>
        </ScrollReveal>

        {/* Numbered service rows */}
        <div className="divide-y divide-neutral-200">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.03}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex items-center gap-6 py-6 lg:py-8 hover:bg-neutral-50/50 transition-colors duration-300 -mx-4 px-4 rounded-lg"
              >
                {/* Number */}
                <span className="hidden sm:block font-heading text-4xl lg:text-5xl font-bold text-neutral-200 group-hover:text-forest-200 transition-colors duration-300 w-16 shrink-0 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-forest-50 text-forest-700 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-forest-700 group-hover:text-white transition-all duration-300">
                  {iconMap[service.icon] || <Hammer className="w-6 h-6" />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg lg:text-xl font-bold text-neutral-900 group-hover:text-forest-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-0.5 line-clamp-1">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-forest-600 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-900 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
