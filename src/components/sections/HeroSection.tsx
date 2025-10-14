import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Zap, Leaf, TrendingDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Optimize your robots, save energy
            </h1>

            {/* Key Value Proposition */}
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Slash energy use and emissions by up to 30% while easing mechanical stress.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <CTAButton size="lg" className="px-8 py-6 text-lg font-medium" href="#calculator">
                Calculate Savings
              </CTAButton>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>

          {/* Three Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 mx-auto mb-4">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Lower energy bills
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Save thousands of euros per robot
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 mx-auto mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Greener operations
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Avoid tonnes of CO₂ emissions
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 mx-auto mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                More reliable lines
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Less wear, less tear, more uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
