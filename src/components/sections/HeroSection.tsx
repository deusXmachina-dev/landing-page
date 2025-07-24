import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { DOCS_URL, SIGNUP_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-dashed border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Bot className="w-4 h-4" />
            For low code folks
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            World's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Simplest API
            </span>{" "}
            for Outbound Calls
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Integrate voice calls into your workflows in{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">1 minute</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-lg font-medium" asChild>
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Get Started - Free Credits</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium" asChild>
              <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">View Documentation</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
} 