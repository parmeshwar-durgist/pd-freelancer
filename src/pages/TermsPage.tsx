import React from 'react';
import { Badge } from '../components/ui/Badge';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <SEO
        title="Terms of Engagement & Service | PD Freelancer — Parmeshwar Durgist"
        description="Standard terms of engagement for client software projects with PD Freelancer (Parmeshwar Durgist). Milestone delivery, 100% intellectual property ownership, and 30-day bug warranty."
        keywords="Terms of Engagement, Software Contract, Code Ownership Guarantee, PD Freelancer Terms, Parmeshwar Durgist"
      />
      <div className="text-center space-y-3">
        <Badge variant="brand" size="md">
          Client Engagement
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Terms of Engagement
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Professional Software Engineering Standards • PD Freelancer (Parmeshwar Durgist)
        </p>
      </div>

      <div className="rounded-3xl glass-card p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Scope of Work & Proposals</h2>
          <p>
            All freelance software development services are executed pursuant to a formal, written Statement of Work (SOW) or project proposal. The proposal defines deliverables, technical architecture, timeline milestones, acceptance criteria, and cost breakdowns prior to commencing development.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Intellectual Property & Code Ownership</h2>
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>100% Client Ownership:</strong> Upon completion of the final project milestone and receipt of full payment, 100% of all custom source code, documentation, assets, and design files become the exclusive intellectual property of the client.
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Open-source libraries (e.g., React, Node, Tailwind) retain their respective open-source licenses (MIT, Apache, etc.).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Milestone Payments & Invoicing</h2>
          <p>
            Projects are structured into clear phased milestones (e.g., Deposit / Initial Architecture, Staging Prototype, Final Production Deployment). Payments are triggered upon milestone demonstration and review. Invoices are payable via approved bank transfer, UPI, or international wire.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Post-Launch Warranty Support</h2>
          <p>
            All custom builds delivered by PD Freelancer come with an included 14 to 30-day post-launch warranty period. During this window, any defects, bugs, or functional divergences from the agreed specification are resolved promptly without additional charge.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">5. Client Cooperation & Third-Party Services</h2>
          <p>
            Timely delivery requires reasonable client responsiveness for design approvals, access credentials, and content assets. Any third-party costs (domain registration, cloud hosting, SMS/email gateway fees, or payment processor fees) are billed directly by the respective providers to the client.
          </p>
        </section>
      </div>
    </div>
  );
};
