import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Mail,
  Github,
  Globe,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { servicesData } from '../../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/70 dark:bg-[#070a10] text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-accent-cyan flex items-center justify-center text-white shadow-md">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                  PD <span className="text-brand-600 dark:text-brand-400">Freelancer</span>
                </span>
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider -mt-0.5">
                  Software Development & Digital Solutions
                </span>
              </div>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm max-w-sm">
              Led by <span className="font-semibold text-slate-900 dark:text-white">Parmeshwar Durgist</span>, a Freelance Full-Stack Software Engineer with 2+ years of production experience building modern web applications, high-conversion e-commerce systems, and robust APIs.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://github.com/parmeshwar-durgist"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-brand-500 hover:border-brand-500 transition-colors shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://parmeshwar-the-series.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-brand-500 hover:border-brand-500 transition-colors shadow-sm"
                title="The Series Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:pd.softwaredeveloper@gmail.com"
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-brand-500 hover:border-brand-500 transition-colors shadow-sm"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Home Studio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  About Parmeshwar
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Software Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Development Process
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Pricing & Quotes
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Client FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors block truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Availability */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                Ready to discuss your software project? Get a personalized proposal and timeline estimate.
              </p>
              <div className="text-xs space-y-1.5 font-medium">
                <a
                  href="mailto:pd.softwaredeveloper@gmail.com"
                  className="text-brand-600 dark:text-brand-400 hover:underline block break-all"
                >
                  pd.softwaredeveloper@gmail.com
                </a>
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-slate-400">Call / WA:</span>
                  <a
                    href="tel:9657847967"
                    className="text-emerald-500 hover:text-emerald-400 font-bold"
                  >
                    +91 9657847967
                  </a>
                </div>
                <span className="block text-slate-500 pt-1">Based in India • Serving Worldwide</span>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I'm%20reaching%20out%20to%20discuss%20a%20software%20development%20project%20with%20PD%20Freelancer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-500 transition-colors"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} PD Freelancer. All rights reserved. Created for Parmeshwar Durgist.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-800 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-800 dark:hover:text-white transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
