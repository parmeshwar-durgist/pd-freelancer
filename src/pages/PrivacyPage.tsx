import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <SEO
        title="Privacy Policy | PD Freelancer — Parmeshwar Durgist"
        description="Privacy policy and data protection practices for PD Freelancer (Parmeshwar Durgist). We treat client data, proposals, and proprietary code with complete confidentiality."
        keywords="Privacy Policy, PD Freelancer Privacy, Data Protection, Parmeshwar Durgist"
      />
      <div className="text-center space-y-3">
        <Badge variant="brand" size="md">
          Legal & Privacy
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last Updated: October 2026 • PD Freelancer (Parmeshwar Durgist)
        </p>
      </div>

      <div className="rounded-3xl glass-card p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Introduction</h2>
          <p>
            PD Freelancer is operated by Parmeshwar Durgist, Freelance Software Engineer. I respect your privacy and am committed to protecting any personal and project information you provide through this website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Information Collected</h2>
          <p>
            When you submit a project inquiry, request a quote, or contact me via email or WhatsApp, I may collect your name, email address, company name, phone number, and project specifications. This information is solely used to evaluate your software requirements and communicate regarding your project.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. How Information Is Used</h2>
          <p>
            Collected information is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Review and respond to your software development inquiries.</li>
            <li>Prepare accurate proposals, technical architectures, and milestone estimates.</li>
            <li>Execute agreed-upon software engineering deliverables and invoicing.</li>
          </ul>
          <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-2">
            I do not sell, rent, trade, or distribute your personal or business data to third parties or marketing lists under any circumstances.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Confidentiality & Non-Disclosure</h2>
          <p>
            All proprietary business information, software workflows, product ideas, and technical documentation shared during discovery or development are treated as strictly confidential. I am glad to review and execute a mutual Non-Disclosure Agreement (NDA) prior to receiving proprietary materials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">5. Cookies & Analytics</h2>
          <p>
            This website uses minimal standard analytics and local storage (for storing your dark/light theme preference). No tracking cookies are used for ad profiling.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">6. Contact Inquiries</h2>
          <p>
            For any questions regarding this Privacy Policy or your data, you can reach me directly at{' '}
            <a href="mailto:durgistparmeshwar@gmail.com" className="text-brand-600 dark:text-brand-400 underline font-semibold">
              durgistparmeshwar@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};
