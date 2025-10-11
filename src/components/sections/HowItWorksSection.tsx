import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, TrendingUp, Wrench } from "lucide-react";

export function HowItWorksSection() {
  const objections = [
    {
      icon: <Settings className="w-6 h-6" />,
      objection: "Robot vendors already handle energy efficiency.",
      response: "Vendors optimise the hardware and motion. We optimise the process. Our tools don't replace theirs – they unlock what's still left on the table."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      objection: "The benefits are marginal.",
      response: "We disagree. Saving €1,000s per robot isn't marginal – it's a start. Add lower maintenance costs and avoided CO₂ emissions, and the value multiplies fast."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      objection: "It is hard to deploy.",
      response: "Got digital twins? Easy – we plug into your simulations. No digital twin? Deployment fits neatly into maintenance windows."
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
              Simple input, powerful output
            </p>
          </div>

          {/* Input/Output Box */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 md:p-12 border border-slate-200 dark:border-slate-700">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                    You give us:
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center text-lg">
                      <span className="text-slate-900 dark:text-slate-100 mr-3">→</span>
                      Target takt time
                    </li>
                    <li className="flex items-center text-lg">
                      <span className="text-slate-900 dark:text-slate-100 mr-3">→</span>
                      Robot program
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                    We give you:
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-center text-lg">
                      <span className="text-slate-900 dark:text-slate-100 mr-3">→</span>
                      Optimised parameters
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Common Objections */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Common Objections
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Hover to see our response
              </p>
            </div>

            <div className="space-y-3">
              {objections.map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="p-4 cursor-default">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-slate-600 dark:text-slate-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {item.objection}
                      </p>
                    </div>
                    <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
                      <p className="text-slate-600 dark:text-slate-400 mt-3 pl-11 leading-relaxed">
                        {item.response}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
