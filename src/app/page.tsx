import { Hero } from "@/components/home/Hero";
import { CredentialsBand } from "@/components/home/CredentialsBand";
import { ServiceRows } from "@/components/home/ServiceRows";
import { StatsBand } from "@/components/home/StatsBand";
import { Gallery } from "@/components/home/Gallery";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ParallaxBreak } from "@/components/home/ParallaxBreak";
import { Process } from "@/components/home/Process";
import { ReviewCarousel } from "@/components/home/ReviewCarousel";
import { ServiceAreaMap } from "@/components/home/ServiceAreaMap";
import { CtaBanner } from "@/components/home/CtaBanner";
import { TrustStrip } from "@/components/home/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialsBand />
      <ServiceRows />
      <StatsBand />
      <Gallery />
      <WhyChooseUs />
      <ParallaxBreak />
      <Process />
      <ReviewCarousel />
      <ServiceAreaMap />
      <CtaBanner />
      <TrustStrip />
    </>
  );
}
