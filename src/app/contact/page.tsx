import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Get a Free Handyman Estimate",
  description:
    "Request a free estimate for any handyman project in Westchester or Rockland County. Call (914) 912-5090 or fill out the form. 24 years of experience — every trade covered.",
};

export default function ContactPage() {
  return <ContactContent />;
}
