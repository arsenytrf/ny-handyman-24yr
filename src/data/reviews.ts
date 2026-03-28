export interface Review {
  author: string;
  initial: string;
  rating: number;
  quote: string;
  project: string;
}

export const reviews: Review[] = [
  {
    author: "Mike R.",
    initial: "M",
    rating: 5,
    quote:
      "Had a leak in the bathroom wall that two other guys couldn't figure out. He found it in 20 minutes and fixed the whole thing the same day. 24 years of experience shows.",
    project: "Water Leak Repair — Yonkers",
  },
  {
    author: "Sarah K.",
    initial: "S",
    rating: 5,
    quote:
      "Completely redid our deck — it was rotting and dangerous. New pressure-treated lumber, new railings, new stairs. Looks incredible and he finished ahead of schedule.",
    project: "Deck Rebuild — Nanuet",
  },
  {
    author: "David L.",
    initial: "D",
    rating: 5,
    quote:
      "We needed crown molding, new baseboards, and door casings throughout the first floor. The miters are perfect — you can't find a single gap. Real craftsmanship.",
    project: "Trim Work — White Plains",
  },
  {
    author: "Linda P.",
    initial: "L",
    rating: 5,
    quote:
      "He demolished our old kitchen and rebuilt the whole thing — new cabinets, counters, drywall, painting, everything. One person handling all of it made the project so much smoother.",
    project: "Kitchen Renovation — Tarrytown",
  },
  {
    author: "Tom H.",
    initial: "T",
    rating: 5,
    quote:
      "Installed a tankless water heater for us. Showed up on time, removed the old unit, had the new one running in a few hours. Professional and clean — no mess left behind.",
    project: "Tankless Water Heater — New Rochelle",
  },
  {
    author: "Angela M.",
    initial: "A",
    rating: 5,
    quote:
      "Power washed our entire house exterior, then painted the siding and trim. The house looks brand new. Neighbors keep asking who we used.",
    project: "Exterior Paint — Spring Valley",
  },
  {
    author: "James C.",
    initial: "J",
    rating: 5,
    quote:
      "Added a room over our garage for my son. Framing, drywall, electric, windows, drop ceiling — he did all of it. The quality is as good as any general contractor we've used.",
    project: "Room Addition — Suffern",
  },
  {
    author: "Karen W.",
    initial: "K",
    rating: 5,
    quote:
      "We've been using him for everything around the house for the last 5 years. Drywall patches, door replacements, painting — he's our first call for anything that needs fixing.",
    project: "Ongoing Maintenance — Nyack",
  },
];
