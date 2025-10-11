import { HeroSection } from "@/components/sections/HeroSection";
import EnergyCalculator from "@/components/EnergyCalculator";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EnergyCalculator />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
