"use client";

import { processSteps } from "@/data/process";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function Process() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium mb-3 text-forest-600">
              How It Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
              From First Call to Finished Project
            </h2>
            <p className="text-neutral-500 mt-3 max-w-lg mx-auto text-sm">
              Simple, straightforward, no runaround. Here&apos;s how every
              project works.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-neutral-200 lg:-translate-x-px" />

          {processSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                className={`relative flex gap-8 lg:gap-0 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 bg-forest-700 rounded-full flex items-center justify-center z-10 shadow-lg shadow-forest-700/20">
                  <span className="font-heading text-sm font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`ml-16 lg:ml-0 lg:w-[calc(50%-40px)] ${
                    i % 2 === 0
                      ? "lg:pr-0 lg:text-right lg:mr-auto"
                      : "lg:pl-0 lg:text-left lg:ml-auto"
                  }`}
                >
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover-lift">
                    <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
