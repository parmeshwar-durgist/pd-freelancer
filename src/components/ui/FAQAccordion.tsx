import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              'rounded-2xl transition-all duration-200 border',
              isOpen
                ? 'glass-card border-brand-500/40 shadow-md'
                : 'bg-white/60 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle
                  className={cn(
                    'w-4 h-4 shrink-0 transition-colors',
                    isOpen ? 'text-brand-500' : 'text-slate-400'
                  )}
                />
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200',
                  isOpen ? 'rotate-180 text-brand-500' : ''
                )}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
