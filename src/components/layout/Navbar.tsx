import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { LOGIN_URL, SIGNUP_URL, DOCS_URL } from "@/lib/constants";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo href="/" />

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#features" 
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:scale-105 relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#quick-start" 
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:scale-105 relative group"
          >
            Quick Start
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#pricing" 
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:scale-105 relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href={DOCS_URL} 
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:scale-105 relative group"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Sign In Button */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">Sign In</a>
          </Button>
          <Button asChild>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
} 