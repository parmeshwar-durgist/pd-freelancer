import React from 'react';
import { pricingPackages } from '../data/pricing';
import { PricingCard } from '../components/ui/PricingCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ShieldCheck, ArrowRight, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

export const PricingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
      <SEO
        title="Transparent Web & Software Pricing | PD Freelancer — Parmeshwar Durgist"
        description="Clear, scope-based project pricing with zero hidden fees. Landing pages, corporate portals, e-commerce stores, and custom web applications with 100% source code ownership."
        keywords="Web Development Pricing, Software Development Cost, Freelance Developer Rates India, Transparent Web Design Packages, Parmeshwar Durgist, PD Freelancer"
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand" size="md">
          Transparent Scope Guidance
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Clear, Scope-Based Project Investment
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I provide honest, transparent project estimates based on exact technical complexity, design needs, and feature integrations. You only pay for what your business actually requires.
        </p>
      </div>

      {/* Honest Pricing Philosophy Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Why I Don’t Use Cookie-Cutter Flat Pricing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Every business application has unique needs: from custom payment workflows to specific database schemas. Instead of overcharging with generic bloated rates, I prepare a transparent, itemized milestone proposal after reviewing your project brief.
            </p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPackages.map((pkg) => (
          <PricingCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      {/* Scope Factors & What Determines Pricing */}
      <div className="rounded-3xl glass-card p-8 sm:p-12 border border-slate-200 dark:border-slate-800 max-w-5xl mx-auto space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-center">
          What Factors Influence Your Project Quote?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block mb-1">
              01. Scope & Features
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              The number of interactive pages, user roles, complex calculations, and specific database entities.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
            <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider block mb-1">
              02. Integrations
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Payment gateways, third-party APIs, SMS/Email webhooks, and external CRM connections.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-1">
              03. UI/UX Customization
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              From clean standard layouts to bespoke editorial design tokens, micro-animations, and custom graphics.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-1">
              04. Delivery Schedule
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Standard turnaround vs. expedited sprint delivery to meet strict external investor or marketing launch dates.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl glass-card p-8 sm:p-12 text-center border border-brand-500/30 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Request An Itemized Custom Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
          Fill out the project inquiry form with your requirements and estimated budget range. I will provide a prompt, realistic feasibility and milestone breakdown.
        </p>
        <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
          Request Your Project Quote
        </Button>
      </div>
    </div>
  );
};
