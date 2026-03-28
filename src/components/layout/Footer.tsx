import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-forest-800 via-forest-600 to-forest-800" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-14 pb-8">
        {/* Main row — brand left, nav+contact right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                NY HANDYMAN
              </span>
              <span className="text-[9px] tracking-[0.18em] uppercase font-medium text-forest-400">
                24 Years Experience
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs">
              Independent handyman with {company.experience} years of experience.
              Every trade, every room, every project — done right across
              Westchester &amp; Rockland County.
            </p>
          </div>

          {/* Nav + Services + Contact */}
          <div className="flex gap-12 flex-wrap">
            {/* Pages */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
                Pages
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-forest-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                {services.slice(0, 6).map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/services#${svc.slug}`}
                      className="text-sm text-neutral-400 hover:text-forest-400 transition-colors duration-300"
                    >
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <a
                href={company.phoneLink}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-forest-400 transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5 text-forest-500" />
                {company.phone}
              </a>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <MapPin className="h-3.5 w-3.5 text-forest-500 shrink-0" />
                {company.serviceRegion}
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Clock className="h-3.5 w-3.5 text-forest-500" />
                {company.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Service area tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {company.areasServed.map((area) => (
            <span
              key={area}
              className="px-2 py-0.5 text-[11px] text-neutral-500 bg-white/[0.03] border border-white/5 rounded"
            >
              {area}
            </span>
          ))}
          <span className="px-2 py-0.5 text-[11px] text-forest-400 bg-forest-500/5 border border-forest-500/10 rounded">
            24 Years Experience
          </span>
          <span className="px-2 py-0.5 text-[11px] text-forest-400 bg-forest-500/5 border border-forest-500/10 rounded">
            In Person &amp; Virtual
          </span>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>&copy; {year} {company.name}. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://epageusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-forest-400 transition-colors duration-300"
            >
              ePageUSA.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
