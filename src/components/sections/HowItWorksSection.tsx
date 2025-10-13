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

          {/* Video */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '62.5%', height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/05a20beab7c24e4db594f289f69bbe1f?sid=5e1c72a5-83ad-4c8d-b1f0-49c6a974bc9a" 
                frameBorder="0" 
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                className="border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
