import React from 'react';
import { Service } from '../../types';
import { Badge } from './Badge';
import { Link } from 'react-router-dom';
import {
  Globe,
  Layout,
  ShoppingCart,
  Code,
  Server,
  BarChart3,
  Smartphone,
  CreditCard,
  Wrench,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Share2
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layout,
  ShoppingCart,
  Code,
  Server,
  BarChart3,
  Smartphone,
  CreditCard,
  Wrench,
  Zap,
  Lightbulb,
  Share2,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Code;

  return (
    <div className="group rounded-2xl p-6 sm:p-7 glass-card hover:border-brand-500/40 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between h-full border border-slate-200 dark:border-slate-800">
      <div>
        {/* Top Header with Icon and Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          {service.badge && (
            <Badge variant="glow" size="sm">
              {service.badge}
            </Badge>
          )}
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Client Problem Callout */}
        <div className="p-3.5 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/15 mb-4 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-1.5 font-semibold text-rose-600 dark:text-rose-400 mb-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Challenge It Solves</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-normal">{service.clientProblem}</p>
        </div>

        {/* Key Features List */}
        <div className="space-y-2 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Capabilities</p>
          {service.keyFeatures.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <Link
          to={`/services#${service.slug}`}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          View Details
        </Link>
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group-hover:translate-x-0.5 transition-all"
        >
          Discuss Project
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
