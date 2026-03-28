"use client";

import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ServiceAreaMap() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <ScrollReveal>
            <div>
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-600">
                Service Area
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                Westchester &amp; Rockland County
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Based in Nanuet, serving every town in Westchester and Rockland
                County. 24 years of working in these neighborhoods means knowing
                the older homes, the common problems, and how to fix them
                properly.
              </p>
              <div className="flex flex-wrap gap-2">
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
            </div>
          </ScrollReveal>

          {/* Right - Map */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
              <iframe
                src={company.mapEmbedUrl}
                className="w-full h-[350px] lg:h-[400px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NY Handyman service area — Westchester &amp; Rockland County, NY"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
