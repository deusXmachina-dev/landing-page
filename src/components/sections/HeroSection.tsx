import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Settings, Zap, Leaf, TrendingDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                optimize
              </span>{" "}
              your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                robots
              </span>{" "}
              , you{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                save energy
              </span>
            </h1>

            {/* Key Value Proposition */}
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let us help you slash energy use and emissions by up to 30% while easing mechanical stress.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <CTAButton size="lg" className="px-8 py-6 text-lg font-medium">
                Calculate Your Savings
              </CTAButton>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Three Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Lower energy bills
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Save thousands of euros per robot
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Greener operations
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Avoid tonnes of CO₂ emissions
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
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

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-200/20 to-blue-200/20 dark:from-green-800/10 dark:to-blue-800/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
} 