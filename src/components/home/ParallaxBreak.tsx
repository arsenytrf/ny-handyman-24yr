"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ParallaxBreak() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.craigslist.org/00w0w_3WCdxjghbWI_0t20CI_600x450.jpg"
          alt="Handyman project in progress"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-950/50" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            &ldquo;If it&apos;s broken, I fix it. If it needs building, I build
            it. If it needs tearing down, I tear it down. Been doing this 24
            years — there&apos;s not much I haven&apos;t seen.&rdquo;
          </p>
          <cite className="text-forest-300 text-lg font-medium not-italic">
            &mdash; The Owner, 24 Years in the Trade
          </cite>
        </blockquote>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-xl group"
          >
            Tell Me What You Need
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
