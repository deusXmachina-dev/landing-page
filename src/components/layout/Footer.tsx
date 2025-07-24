import { Logo } from "@/components/ui/logo";
import { CONTACT_EMAIL, GITHUB_URL, COMPANY_NAME, CURRENT_YEAR, DOCS_URL } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Logo href="/" className="mb-4" />
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              The world's simplest API for outbound calls. Integrate intelligent voice interactions into your n8n/Make workflows in minutes.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#quick-start" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Quick Start
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href={DOCS_URL} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:translate-x-1 inline-block" target="_blank" rel="noopener noreferrer">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {CURRENT_YEAR} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href={GITHUB_URL}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 