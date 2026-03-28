export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "demolition",
    title: "Demolition",
    shortDescription: "Controlled tear-outs for kitchens, bathrooms, and full interiors.",
    description:
      "Whether you're gutting a kitchen, removing a wall, or clearing out an entire room for renovation, demolition is where every project starts. 24 years of knowing what's load-bearing and what isn't — no guesswork, no surprises, no structural damage.",
    icon: "Hammer",
    image: "https://images.craigslist.org/00o0o_lGCMjwnpcmc_0CI0t2_600x450.jpg",
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    shortDescription: "Framing, trim, custom built-ins, and structural work.",
    description:
      "From rough framing to finish carpentry — crown molding, baseboards, door casings, custom shelving, built-in bookcases, and structural repairs. The kind of woodwork that holds up for decades, not just until you sell the house.",
    icon: "Axe",
    image: "https://images.craigslist.org/00808_8ZQ46ldLKTR_0t20CI_600x450.jpg",
  },
  {
    slug: "renovations",
    title: "Renovations & Additions",
    shortDescription: "Room additions, attic conversions, and full home renovations.",
    description:
      "Full-scale home renovations and room additions. Need an extra bedroom, a finished basement, or a complete floor-plan rework? 24 years of turning cramped spaces into functional living areas across Westchester County.",
    icon: "Home",
    image: "https://images.craigslist.org/01212_6DzwY8IOaMB_0t20CI_600x450.jpg",
  },
  {
    slug: "drywall-plaster",
    title: "Drywall & Plaster",
    shortDescription: "Hanging, taping, patching, and smooth finishes.",
    description:
      "New drywall installation, plaster repair, water damage patches, and skim-coating. Whether it's a single hole or an entire room that needs finishing, the walls come out smooth, seamless, and ready for paint every time.",
    icon: "Square",
    image: "https://images.craigslist.org/00j0j_gJ42G0XVKtP_0CI0t2_600x450.jpg",
  },
  {
    slug: "painting-powerwash",
    title: "Power Washing & Painting",
    shortDescription: "Interior, exterior, decks, fences, and pressure cleaning.",
    description:
      "Full prep, prime, and paint — interior walls, exterior siding, decks, fences, trim. Power washing to strip years of grime from driveways, patios, and house exteriors before a fresh coat goes on. Clean work, clean lines.",
    icon: "Paintbrush",
    image: "https://images.craigslist.org/01010_3qxd4z3Ck7T_0t20CI_600x450.jpg",
  },
  {
    slug: "doors-windows",
    title: "Doors & Windows",
    shortDescription: "Installation, replacement, and weatherproofing.",
    description:
      "Interior and exterior door installation, window replacement, storm doors, sliding doors, and French doors. Proper shimming, leveling, insulation, and weatherstripping so nothing sticks, drafts, or rattles. NY winters demand it.",
    icon: "DoorOpen",
    image: "https://images.craigslist.org/00I0I_kOc11Gq1CKD_0t20CI_600x450.jpg",
  },
  {
    slug: "trimming",
    title: "Trim & Molding",
    shortDescription: "Crown molding, baseboards, chair rails, and wainscoting.",
    description:
      "The details that turn a room from 'finished' to 'done right.' Crown molding, baseboards, chair rails, wainscoting, window casings, and door frames — mitered, coped, and installed tight with no visible gaps.",
    icon: "Ruler",
    image: "https://images.craigslist.org/00x0x_5PB0nlNuJZ6_0t20CI_600x450.jpg",
  },
  {
    slug: "decks",
    title: "Deck Construction & Repair",
    shortDescription: "New decks, rebuilds, railings, and refinishing.",
    description:
      "Custom deck builds from pressure-treated lumber, composite decking, railings, stairs, and structural repairs. Westchester homeowners know a solid deck adds living space — we build them to last through every season.",
    icon: "Fence",
    image: "https://images.craigslist.org/00f0f_2M2Eo8AQP3K_0t20CI_600x450.jpg",
  },
  {
    slug: "drop-ceiling",
    title: "Drop Ceiling Installation",
    shortDescription: "Suspended ceilings for basements and commercial spaces.",
    description:
      "Grid systems, acoustic tiles, recessed lighting integration, and clean transitions to existing walls. Drop ceilings are the fastest way to finish a basement ceiling — and when done right, they look sharp, not cheap.",
    icon: "LayoutGrid",
    image: "https://images.craigslist.org/00k0k_4pccraPnAaC_0CI0lM_600x450.jpg",
  },
  {
    slug: "kitchen-work",
    title: "Kitchen Work",
    shortDescription: "Cabinets, countertops, backsplash, and full kitchen updates.",
    description:
      "Cabinet installation, countertop fitting, backsplash tiling, hardware, and full kitchen renovations. Not a kitchen specialist — but 24 years of doing everything means the kitchen gets the same attention as every other room.",
    icon: "ChefHat",
    image: "https://images.craigslist.org/00E0E_c1NseBymfNg_0CI0lM_600x450.jpg",
  },
  {
    slug: "water-heater",
    title: "Water Heater Installation",
    shortDescription: "Gas, electric, and tankless water heaters.",
    description:
      "Standard tank water heaters (gas and electric) and tankless on-demand units. Removal of the old unit, proper connections, venting for gas models, and making sure you have hot water the same day. No waiting on a plumber for two weeks.",
    icon: "Flame",
    image: "https://images.craigslist.org/00I0I_fbYYdRlGN0T_0t20CI_600x450.jpg",
  },
  {
    slug: "plumbing",
    title: "Water Leak Repair & Plumbing",
    shortDescription: "Leak fixes, line replacement, and fixture installation.",
    description:
      "Water leak detection and repair, supply line replacement, fixture swaps, faucet installation, and emergency pipe fixes. When water's coming through the ceiling, you don't have time to wait — call and it gets handled fast.",
    icon: "Droplets",
    image: "https://images.craigslist.org/00u0u_4keTqBQgCZD_0CI0t2_600x450.jpg",
  },
];
