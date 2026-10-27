import React from 'react';
import { processSteps } from '../../data/process';
import { CheckCircle2, Clock } from 'lucide-react';
import { Badge } from './Badge';

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Central line on desktop */}
      <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-500 via-accent-cyan to-brand-500/20 -translate-x-1/2 opacity-30" />

      <div className="space-y-8 lg:space-y-12">
        {processSteps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.step}
              className={`relative flex flex-col lg:flex-row items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-brand-500 text-brand-300 items-center justify-center font-bold text-xs shadow-glow z-10">
                {step.step}
              </div>

              {/* Content Card */}
              <div className="w-full lg:w-[calc(50%-2.5rem)]">
                <div className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 hover:shadow-xl dark:hover:shadow-brand-500/10 transition-all duration-300">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="lg:hidden text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">
                      Step {step.step}
                    </span>
                    <Badge variant="neutral" size="sm" icon={<Clock className="w-3 h-3 text-slate-400" />}>
                      {step.timeline}
                    </Badge>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Deliverables
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty placeholder to balance layout on desktop */}
              <div className="hidden lg:block w-[calc(50%-2.5rem)]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
