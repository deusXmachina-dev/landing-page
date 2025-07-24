import { HeroSection } from "@/components/sections/HeroSection";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickStartSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
