import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/ui/step-card";
import { Terminal, Gift, Key } from "lucide-react";
import { NPM_PACKAGE_NAME } from "@/lib/constants";

export function QuickStartSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Sign Up & Get API Key",
      description: "Get $10 free credits instantly",
      code: "sense-abc123...xyz789",
      codeLabel: "API Key",
      codeColor: "text-slate-300",
      stepColor: "bg-blue-600",
      icon: <Key className="w-4 h-4 text-slate-400" />,
      showCopy: false
    },
    {
      stepNumber: 2,
      title: "Install n8n Node",
      description: "Add SenseFlow to your n8n instance",
      code: `npm install ${NPM_PACKAGE_NAME}`,
      codeLabel: "Terminal",
      codeColor: "text-slate-300",
      stepColor: "bg-blue-600",
      icon: <Terminal className="w-4 h-4 text-slate-400" />,
      showCopy: true
    },
    {
      stepNumber: 3,
      title: "Make Your First Call",
      description: "Simple API call in your workflow",
      code: `{ call: +1234567890 }`,
      codeLabel: "n8n Workflow",
      codeColor: "text-slate-300",
      stepColor: "bg-blue-600",
      icon: <Terminal className="w-4 h-4 text-slate-400" />,
      showCopy: false
    }
  ];

  return (
    <section id="quick-start" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-dashed border-blue-300 dark:border-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Gift className="w-4 h-4" />
              Get Free Credits
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Start in 60 Seconds
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sign up, get your API key, and make your first call
            </p>
          </div>

          {/* Installation Steps */}
          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <StepCard key={step.stepNumber} {...step} />
            ))}
          </div>

          {/* Free Credits CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-950 dark:to-slate-800 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Start with $10 Free Credits
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                No credit card required • Get your API key instantly
              </p>
              <Button size="lg" className="px-8 py-3">
                Sign Up & Get Credits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 