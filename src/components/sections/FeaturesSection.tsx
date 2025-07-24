import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Zap, Workflow, MessageSquare } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Outbound Calls",
      description: "Handle outgoing calls to engage with contacts, customers, employees, etc."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Intelligent Voice",
      description: "AI-powered conversations that understand context and provide natural voice responses."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Drop into your existing n8n/Make workflows with zero configuration required."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Setup",
      description: "From signup to first call in under 60 seconds. No complex configuration or setup."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Everything You Need for Voice Workflows
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Simple, powerful features designed specifically for workflow automation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 