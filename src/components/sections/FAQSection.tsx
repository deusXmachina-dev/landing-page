import { Settings, TrendingUp, Wrench } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      icon: <Settings className="w-6 h-6" />,
      question: "Robot vendors already handle energy efficiency.",
      answer: "Vendors optimise the hardware and motion. We optimise the process. Our tools don't replace theirs – they unlock what's still left on the table."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      question: "The benefits are marginal.",
      answer: "We disagree. Saving €1,000s per robot isn't marginal – it's a start. Add lower maintenance costs and avoided CO₂ emissions, and the value multiplies fast."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      question: "It is hard to deploy.",
      answer: "Got digital twins? Easy – we plug into your simulations. No digital twin? Deployment fits neatly into maintenance windows."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Common questions about our approach
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            {faqs.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800'} ${index !== faqs.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 text-lg">
                    {item.question}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

