import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Gift } from "lucide-react";
import { PRICE_PER_MINUTE, FREE_CREDITS_AMOUNT, FREE_CREDITS_MINUTES, CONTACT_EMAIL, SIGNUP_URL } from "@/lib/constants";

export function PricingSection() {
  const features = [
    "Outbound calls",
    "Simple n8n/Make integration",
    "Real-time call handling",
    "API key management",
    "Usage analytics"
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Simple, Usage-Based Pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Start free, pay only for what you use
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-blue-200 dark:border-blue-800 relative">
              {/* Free Credits Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  ${FREE_CREDITS_AMOUNT} Free Credits
                </div>
              </div>

              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Pay Per Use
                </CardTitle>
                <CardDescription className="text-lg">
                  No monthly fees or commitments
                </CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">${PRICE_PER_MINUTE.toFixed(2)}</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">per minute</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button size="lg" className="w-full" asChild>
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                    Start with Free Credits
                  </a>
                </Button>

                {/* Additional Info */}
                <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                  No credit card required • Cancel anytime
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-slate-600 dark:text-slate-400">
              <strong>${FREE_CREDITS_AMOUNT} free credits</strong> = up to {FREE_CREDITS_MINUTES} minutes of calls to get started
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Need higher volume? <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">Contact us</a> for custom pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 