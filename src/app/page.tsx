import { PeaksSection } from "@/components/peaks-section";
import { JacketFeatureSection } from "@/components/jacket-feature-section";
import { OutfitGridSection } from "@/components/outfit-grid-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <PeaksSection />
      <JacketFeatureSection />
      <OutfitGridSection />
    </main>
  );
}
