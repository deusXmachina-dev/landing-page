import { HeroSection } from "@/components/sections/HeroSection";
import EnergyCalculator from "@/components/EnergyCalculator";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EnergyCalculator />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
