import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HelpCircle, ArrowRight, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

const categories = ['All', 'General', 'Process', 'Pricing & Terms', 'Technical'] as const;

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqsData
      : faqsData.filter((item) => item.category === selectedCategory);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.slice(0, 8).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
      <SEO
        title="Frequently Asked Questions (FAQ) | PD Freelancer — Parmeshwar Durgist"
        description="Find answers to common questions about working with Parmeshwar Durgist: pricing, timelines, source code ownership, tech stack, and post-launch maintenance."
        keywords="Web Development FAQ, Freelance Developer Questions, Code Ownership, Payment Terms, Parmeshwar Durgist, PD Freelancer"
        schema={faqSchema}
      />
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="brand" size="md">
          Client Knowledge Base
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Clear, transparent answers about project scoping, pricing terms, code ownership, technical stacks, and post-launch support.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* FAQ Accordion List */}
      <div>
        <FAQAccordion items={filteredFaqs} />
      </div>

      {/* Unanswered Question Card */}
      <div className="rounded-3xl glass-card p-8 sm:p-10 border border-slate-200 dark:border-slate-800 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Have a specific technical or business question?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          I am happy to explain technical trade-offs, architecture options, or discuss your exact project requirements directly.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Ask A Question
          </Button>
          <a
            href="mailto:durgistparmeshwar@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-500 py-2.5 px-4"
          >
            <Mail className="w-4 h-4" />
            <span>durgistparmeshwar@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};
