import { PeaksSection } from "@/components/peaks-section";
import { JacketFeatureSection } from "@/components/jacket-feature-section";
import { OutfitGridSection } from "@/components/outfit-grid-section";
import { StepOnUpSection } from "@/components/step-on-up-section";
import { ShoeFeatureSection } from "@/components/shoe-feature-section";
import { ShoeGridSection } from "@/components/shoe-grid-section";
import { OutdoorSpiritSection } from "@/components/outdoor-spirit-section";
import { BackpackFeatureSection } from "@/components/backpack-feature-section";
import { BackpackGridSection } from "@/components/backpack-grid-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      {/* First Set of Sections (Jackets) */}
      <PeaksSection />
      <JacketFeatureSection />
      <OutfitGridSection />

      {/* Second Set of Sections (Shoes) */}
      <StepOnUpSection />
      <ShoeFeatureSection />
      <ShoeGridSection />

      {/* Third Set of Sections (Backpacks) */}
      <OutdoorSpiritSection />
      <BackpackFeatureSection />
      <BackpackGridSection />
      
      {/* Global Footer */}
      <Footer />
    </main>
  );
}
