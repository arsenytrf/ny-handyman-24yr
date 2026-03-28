export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Call or Message",
    description:
      "Tell me what you need done — big or small. Describe the project, send photos if you have them. I'll give you a straight answer on what it takes.",
  },
  {
    number: "02",
    title: "Free On-Site Estimate",
    description:
      "I come out, look at the work in person, and give you an honest quote. No pressure, no upsells, no surprise fees later. What I quote is what you pay.",
  },
  {
    number: "03",
    title: "Schedule the Work",
    description:
      "Pick a start date that works for you. I show up on time, work clean, and keep you in the loop every step of the way. No ghosting, no excuses.",
  },
  {
    number: "04",
    title: "Project Complete",
    description:
      "I don't leave until you're satisfied. Final walkthrough together, everything cleaned up. If something's not right, it gets fixed — period.",
  },
];
