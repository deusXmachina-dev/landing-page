interface SummaryBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function SummaryBox({ children, className = "" }: SummaryBoxProps) {
  return (
    <section className={`mb-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg ${className}`}>
      <p className="text-slate-600 dark:text-slate-400 font-medium">
        {children}
      </p>
    </section>
  );
} 