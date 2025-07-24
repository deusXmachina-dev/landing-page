"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { ReactNode, useState } from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  code: string;
  codeLabel: string;
  codeColor: string;
  stepColor: string;
  icon: ReactNode;
  showCopy?: boolean;
}

export function StepCard({ 
  stepNumber, 
  title, 
  description, 
  code, 
  codeLabel, 
  codeColor, 
  stepColor,
  icon,
  showCopy = true
}: StepCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Card className="border-2 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className={`w-8 h-8 ${stepColor} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
            {stepNumber}
          </div>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 relative">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <span className="text-slate-400 text-sm">{codeLabel}</span>
          </div>
          <code className={`${codeColor} font-mono text-xs block whitespace-pre-wrap`}>
            {code}
          </code>
          {showCopy && (
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute top-2 right-2 text-slate-400 hover:text-white"
              onClick={handleCopy}
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 