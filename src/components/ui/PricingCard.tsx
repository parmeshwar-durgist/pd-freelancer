import React from 'react';
import { PricingPackage } from '../../types';
import { Button } from './Button';
import { Badge } from './Badge';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface PricingCardProps {
  pkg: PricingPackage;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
        pkg.isPopular
          ? 'glass-card border-brand-500 shadow-xl dark:shadow-2xl dark:shadow-brand-500/20 lg:-translate-y-2'
          : 'glass-card border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {pkg.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="brand" size="md" icon={<Sparkles className="w-3 h-3 text-brand-400" />}>
            Most Popular Choice
          </Badge>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {pkg.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {pkg.tagline}
          </p>
        </div>

        {/* Pricing Note */}
        <div className="my-5 p-4 rounded-2xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-500/20">
          <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block mb-1">
            Investment Structure
          </span>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {pkg.priceNote}
          </p>
          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-brand-500" />
            <span>Turnaround: {pkg.estimatedTimeline}</span>
          </div>
        </div>

        {/* Target Audience Note */}
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-5 italic">
          Best suited for: {pkg.targetAudience}
        </div>

        {/* Feature List */}
        <div className="space-y-2.5 mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Included in Scope</p>
          {pkg.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Button
        to={`/contact?package=${encodeURIComponent(pkg.name)}`}
        variant={pkg.isPopular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
      >
        {pkg.ctaText}
      </Button>
    </div>
  );
};
