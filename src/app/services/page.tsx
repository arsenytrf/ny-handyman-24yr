import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services — Handyman Services in Westchester County, NY",
  description:
    "12+ trades covered by one experienced handyman: demolition, carpentry, renovations, plumbing, painting, decks, water heaters, and more. Serving Westchester & Rockland County since 2002.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
