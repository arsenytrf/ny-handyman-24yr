import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — 24 Years of Handyman Experience in Westchester County",
  description:
    "Independent handyman with 24 years of experience serving Westchester and Rockland County, NY. Demolition, carpentry, plumbing, renovations, and everything in between.",
};

export default function AboutPage() {
  return <AboutContent />;
}
