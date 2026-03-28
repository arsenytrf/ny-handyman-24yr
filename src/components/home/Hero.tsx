"use client";

import Link from "next/link";
import { Phone, ArrowRight, Award } from "lucide-react";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.craigslist.org/01212_6DzwY8IOaMB_0t20CI_600x450.jpg"
          alt="Renovation project by NY Handyman"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          {/* Experience badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg mb-6">
            <Award className="w-4 h-4 text-forest-300" />
            <span className="text-sm text-white/90 font-medium">
              24 Years of Hands-On Experience
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6">
            Every Trade.{" "}
            <span className="forest-shimmer">Every Room.</span>
            <br />
            Done Right.
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            From demolition to the final coat of paint — one experienced
            handyman handles everything. Serving Westchester &amp; Rockland
            County since 2002.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-8 py-4 rounded-lg text-base font-bold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-forest-700/20 group"
            >
              Get Your Free Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href={company.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg text-base font-bold tracking-wide transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
          </div>

          {/* Mini stats */}
          <div className="flex gap-8 sm:gap-12">
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-forest-300">24</p>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">Years Experience</p>
            </div>
            <div className="border-l border-white/20 pl-8 sm:pl-12">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-forest-300">12+</p>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">Trades Covered</p>
            </div>
            <div className="border-l border-white/20 pl-8 sm:pl-12">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-forest-300">NY</p>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">Westchester County</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
