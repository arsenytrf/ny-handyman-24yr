import { CountUp } from "@/components/shared/CountUp";

const stats = [
  { target: 24, suffix: "", label: "Years Experience" },
  { target: 12, suffix: "+", label: "Trades Covered" },
  { target: 8, suffix: "+", label: "Cities Served" },
  { target: 100, suffix: "%", label: "Satisfaction Rate" },
];

export function StatsBand() {
  return (
    <section className="relative bg-forest-800 diagonal-both -mt-1 py-20 md:py-24 overflow-hidden">
      {/* Background photo at low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00f0f_2M2Eo8AQP3K_0t20CI_600x450.jpg')",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              <p className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-forest-300 tracking-tight">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  prefix=""
                />
              </p>
              <p className="text-white/70 text-sm mt-2 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
