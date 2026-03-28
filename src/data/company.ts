export const basePath = "/ny-handyman-24yr";

export const company = {
  name: "NY Handyman",
  shortName: "NY HANDYMAN",
  subtitle: "24 Years Experience",
  tagline: "24 Years. Every Trade. Done Right.",
  description:
    "Westchester County's most experienced independent handyman — 24 years of carpentry, renovations, plumbing, and everything in between. Serving Nanuet, White Plains, Yonkers, and all of Rockland and Westchester County, NY.",
  phone: "(914) 912-5090",
  phoneLink: "tel:+19149125090",
  contactPerson: "the owner",
  experience: "24",
  foundedYear: 2002,
  hours: "Mon–Sat 7AM–6PM",
  hoursStructured: [
    { days: "Monday–Saturday", open: "7:00 AM", close: "6:00 PM" },
    { days: "Sunday", open: "By Appointment", close: "" },
  ],
  areasServed: [
    "Nanuet",
    "White Plains",
    "Yonkers",
    "New Rochelle",
    "Tarrytown",
    "Nyack",
    "Suffern",
    "Spring Valley",
  ],
  serviceRegion: "Nanuet & All Westchester County, NY",
  delivery: "In Person & Virtual Consultations",
  socials: {
    google: "#",
    yelp: "#",
  },
  formAction: "https://formspree.io/f/placeholder",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96347.5!2d-73.99!3d41.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e7a2e3f3e5e5%3A0x1234567890abcdef!2sNanuet%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
} as const;
