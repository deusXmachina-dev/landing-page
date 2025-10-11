import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Cpu, Download, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: <Upload className="w-6 h-6" />,
      title: "Share Your Setup",
      description: "Provide your target takt time and existing robot program. We work with digital twins or direct robot configurations."
    },
    {
      step: 2,
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Our optimization tool analyzes your process, identifying opportunities to reduce idle time without impacting throughput."
    },
    {
      step: 3,
      icon: <Download className="w-6 h-6" />,
      title: "Get Optimized Parameters",
      description: "Receive tuned parameters that cut energy use by up to 30% while maintaining your production targets."
    },
    {
      step: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Deploy & Monitor",
      description: "Implementation fits into maintenance windows. Digital twins? We integrate seamlessly. Track savings in real-time."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We've built an optimisation tool that takes the guesswork out of robot tuning
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <Card key={item.step} className="border-0 bg-slate-50 dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow relative">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <CardHeader className="pt-8 pb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Info Box */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  You give it:
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                    Your target takt time
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                    Your existing robot program
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  It gives you:
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Optimised parameters that cut energy use
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    Without slowing production
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

