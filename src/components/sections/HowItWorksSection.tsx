export function HowItWorksSection() {
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

          {/* Input/Output Visual Flow */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Input Box */}
              <div className="flex-1 w-full">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border-2 border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Input
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white dark:bg-slate-900 rounded px-4 py-3 border border-slate-200 dark:border-slate-700">
                      <p className="text-slate-900 dark:text-slate-100 font-medium">Target takt time</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded px-4 py-3 border border-slate-200 dark:border-slate-700">
                      <p className="text-slate-900 dark:text-slate-100 font-medium">Robot program</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 text-slate-400 dark:text-slate-600 rotate-90 md:rotate-0">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Output Box */}
              <div className="flex-1 w-full">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border-2 border-slate-900 dark:border-slate-100">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Output
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded px-4 py-3 border border-slate-200 dark:border-slate-700">
                    <p className="text-slate-900 dark:text-slate-100 font-medium">Optimised parameters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
