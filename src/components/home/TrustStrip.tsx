"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

const badges = [
  {
    label: "Google",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-auto" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    label: "Yelp",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-auto" fill="#D32323">
        <path d="M12.69 17.14l3.49 2.15a.73.73 0 001.09-.54l.36-4.08a.73.73 0 00-.55-.76l-3.81-1.03a.73.73 0 00-.9.56l-.5 3.09a.73.73 0 00.82.61zm-1.38-5.41l3.81-1.03a.73.73 0 00.55-.76l-.36-4.08a.73.73 0 00-1.09-.54l-3.49 2.15a.73.73 0 00-.32.61l.5 3.09a.73.73 0 00.4.56zM6.81 8.11L10.3 6a.73.73 0 00.32-.61l-.5-3.09a.73.73 0 00-.9-.56L5.41 2.77a.73.73 0 00-.55.76l.36 4.08a.73.73 0 001.59.5z" />
      </svg>
    ),
  },
  {
    label: "HomeAdvisor",
    svg: (
      <svg viewBox="0 0 100 20" className="h-5 w-auto">
        <text x="0" y="15" fontSize="14" fontWeight="700" fill="#F68B1F" fontFamily="system-ui">HomeAdvisor</text>
      </svg>
    ),
  },
  {
    label: "BBB",
    svg: (
      <svg viewBox="0 0 60 24" className="h-6 w-auto">
        <text x="0" y="18" fontSize="16" fontWeight="800" fill="#005A8C" fontFamily="system-ui">BBB</text>
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section className="py-10 bg-neutral-100 border-y border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap opacity-50">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                {badge.svg}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
