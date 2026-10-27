import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import {
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Github,
  Phone
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
      <SEO
        title="Contact Parmeshwar Durgist | Hire Full-Stack Developer — PD Freelancer"
        description="Ready to build your web app, e-commerce store, or custom software? Contact Parmeshwar Durgist directly via WhatsApp (+91 9657847967), email (pd.softwaredeveloper@gmail.com), or project inquiry form."
        keywords="Contact Parmeshwar Durgist, Hire Full Stack Developer, Hire Freelance Web Developer, PD Freelancer Contact, Software Consultation WhatsApp"
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand" size="md">
          Start Your Collaboration
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Let’s Discuss Your Next Software Project
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Have an idea for a web application, an e-commerce platform, or need a high-conversion business website? Fill out the brief below to receive an itemized proposal, timeline, and quote.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Information Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Trust & Expectations Card */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              What Happens Next?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Response Within 24 Business Hours
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    I personally review every inquiry and reply with initial thoughts, clarifying questions, or calendar availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Strict Confidentiality (NDA Ready)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Your product ideas, business logic, and company details are kept 100% confidential. I am happy to sign an NDA before deep disclosure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 text-accent-cyan flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Itemized Milestone Proposal
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    You receive a clear breakdown of deliverables, technology choices, timeline estimates, and payment milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Developer Card */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Direct Channels
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Mobile Call / SMS:</span>
                  <a href="tel:9657847967" className="font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors">
                    +91 9657847967
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">WhatsApp Inquiry:</span>
                  <a
                    href="https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I'm%20reaching%20out%20to%20discuss%20a%20software%20project%20with%20PD%20Freelancer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-500 hover:underline"
                  >
                    Chat on WhatsApp (+91 9657847967)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Email Address:</span>
                  <a href="mailto:pd.softwaredeveloper@gmail.com" className="font-semibold select-all text-brand-600 dark:text-brand-400 hover:underline">
                    pd.softwaredeveloper@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Globe className="w-4 h-4 text-brand-500 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Location:</span>
                  <span>India (Serving Global & Domestic Clients)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Github className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href="https://github.com/parmeshwar-durgist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-500 font-semibold"
                >
                  github.com/parmeshwar-durgist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
