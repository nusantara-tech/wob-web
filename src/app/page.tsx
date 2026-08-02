import { AppHeader } from "@/components/layout/AppHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { DirectorySection } from "@/components/sections/DirectorySection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestNewsSection } from "@/components/sections/LatestNewsSection";
import { PartnerProgramSection } from "@/components/sections/PartnerProgramSection";
import { PromotionSection } from "@/components/sections/PromotionSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function HomePage() {
  return (
    <>
      <AppHeader />
      <main>
        <HeroSection />
        <ScrollReveal>
          <FeaturedSection />
        </ScrollReveal>
        <ScrollReveal>
          <DirectorySection />
        </ScrollReveal>
        <ScrollReveal>
          <PromotionSection />
        </ScrollReveal>
        <ScrollReveal>
          <LatestNewsSection />
        </ScrollReveal>
        <ScrollReveal>
          <PartnerProgramSection />
        </ScrollReveal>
        <ScrollReveal>
          <TrustSection />
        </ScrollReveal>
      </main>
    </>
  );
}
