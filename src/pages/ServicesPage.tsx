import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
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
  PackageCheck,
  Building2,
  Lightbulb,
  Share2
} from 'lucide-react';

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
import { SEO } from '../components/common/SEO';

export const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
      <SEO
        title="Web & Software Development Services | PD Freelancer — Parmeshwar Durgist"
        description="Explore 13 turnkey software services by Parmeshwar Durgist: custom web applications, e-commerce stores, Android/iOS mobile apps, manufacturing ERP, billing POS, MVP development, and cloud REST APIs."
        keywords="Web Development Services, Custom Web Applications, E-Commerce Development, Mobile App Development, Android Java, React Native, REST API Development, ERP Software, POS Billing System, Parmeshwar Durgist, PD Freelancer"
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand" size="md">
          End-to-End Capabilities
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Software & Digital Solutions Tailored To Your Growth
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I provide comprehensive full-stack engineering services under PD Freelancer. Every solution is built for clean code maintainability, high conversion rates, and long-term business scalability.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Code;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 p-6 sm:p-10 lg:p-12 hover:border-brand-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Header Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && <Badge variant="glow">{service.badge}</Badge>}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base font-medium text-brand-600 dark:text-brand-400">
                    {service.shortDesc}
                  </p>

                  {/* Problem Callout Box */}
                  <div className="p-4 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-rose-600 dark:text-rose-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>The Business Problem It Solves</span>
                    </div>
                    <p className="leading-relaxed">{service.clientProblem}</p>
                  </div>

                  {/* Suitable For */}
                  <div className="pt-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Ideal Business Types</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.suitableFor.map((target, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry CTA */}
                  <div className="pt-4">
                    <Button
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Discuss This Service
                    </Button>
                  </div>
                </div>

                {/* Right Details Column: What I Build, Features & Deliverables */}
                <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l border-slate-200 dark:border-slate-800/80">
                  {/* What I Build */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      What I Build & Deliver
                    </h3>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {service.whatIBuild}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Functional Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.keyFeatures.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Deliverables */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                      <PackageCheck className="w-4 h-4" />
                      <span>Guaranteed Tangible Deliverables</span>
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Conversion Prompt */}
      <div className="rounded-3xl glass-card p-8 sm:p-12 text-center border border-brand-500/30">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
          Need a combination of multiple services or a custom scope?
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
          Every business has unique requirements. Let’s evaluate your project scope together and tailor an exact technical roadmap.
        </p>
        <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
          Request A Custom Quote
        </Button>
      </div>
    </div>
  );
};
