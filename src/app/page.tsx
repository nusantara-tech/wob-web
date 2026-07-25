import { AppHeader } from "@/components/layout/AppHeader";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BrowseAreaSection } from "@/components/sections/BrowseAreaSection";
import { DirectorySection } from "@/components/sections/DirectorySection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PromotionSection } from "@/components/sections/PromotionSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function HomePage() {
  return (
    <>
      <AppHeader />
      <main>
        <HeroSection />
        <ScrollReveal distance="sm">
          <FeaturedSection />
        </ScrollReveal>
        <ScrollReveal>
          <DirectorySection />
        </ScrollReveal>
        <ScrollReveal distance="lg">
          <PromotionSection />
        </ScrollReveal>
        <ScrollReveal>
          <BrowseAreaSection />
        </ScrollReveal>
        <ScrollReveal distance="sm">
          <TrustSection />
        </ScrollReveal>
      </main>
    </>
  );
}
