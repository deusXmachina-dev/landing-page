import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, TrendingUp, Wrench, MessageCircle } from "lucide-react";

export function FeaturesSection() {
  const objections = [
    {
      icon: <Settings className="w-6 h-6" />,
      objection: "Robot vendors already handle that.",
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
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Common Objections, Clear Answers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We've heard the concerns – here's how we address them
            </p>
          </div>

          {/* Q&A Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {objections.map((item, index) => (
              <Card key={index} className="border-0 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    <span className="text-red-600 dark:text-red-400 font-medium">"</span>
                    {item.objection}
                    <span className="text-red-600 dark:text-red-400 font-medium">"</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.response}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Your robots are leaving money on the table.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Use our calculator to see how much you could save – within minutes, you'll know if optimisation pays off for your factory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 