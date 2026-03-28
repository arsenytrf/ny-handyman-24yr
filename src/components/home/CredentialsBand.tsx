"use client";

import { Award, Clock, Wrench, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const credentials = [
  {
    icon: <Award className="w-5 h-5" />,
    label: "Experience",
    value: "24 Years",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    label: "Services",
    value: "12+ Trades",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Coverage",
    value: "8+ Cities",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Availability",
    value: "In Person & Virtual",
  },
];

export function CredentialsBand() {
  return (
    <section className="py-6 bg-forest-800 border-y border-forest-700">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
            {credentials.map((cred, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-forest-300">{cred.icon}</div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    {cred.label}
                  </p>
                  <p className="text-sm font-bold text-white">{cred.value}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
