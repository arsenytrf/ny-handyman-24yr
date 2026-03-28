"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function CtaBanner() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-forest-700 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00v0v_68IeH6a81kt_0CI0t2_600x450.jpg')",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Stop Putting Off That Project
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">
            Free estimate, honest quote, work done right. 24 years of doing this
            means no learning curve on your dime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-forest-800 hover:bg-neutral-100 px-8 py-4 rounded-lg font-bold text-base tracking-wide transition-all duration-300 hover:shadow-xl group"
            >
              Get Your Free Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href={company.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-base tracking-wide transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
