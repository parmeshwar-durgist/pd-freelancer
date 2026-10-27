import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProcessTimeline } from '../components/ui/ProcessTimeline';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, FileText, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand" size="md">
          Collaborative Methodology
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          A Transparent, Milestone-Backed Development Process
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          No black boxes, no radio silence, and no unexpected invoices. Here is how we take your software idea from initial discovery to a rock-solid production deployment.
        </p>
      </div>

      {/* Upfront Transparency Guarantee Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-brand-500/10 border border-brand-500/20 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-glow">
            <Lock className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              The PD Freelancer Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Every timeline, milestone deliverable, fixed pricing rate, and payment schedule is strictly agreed upon in writing before any development begins. You maintain 100% intellectual property ownership of your repository.
            </p>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="max-w-5xl mx-auto">
        <ProcessTimeline />
      </div>

      {/* What Clients Experience During Development */}
      <div className="max-w-5xl mx-auto rounded-3xl glass-card p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight text-center">
          What You Can Expect During Our Collaboration
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>Regular Sprint Updates</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              You receive concise video or written demos showing functioning progress at each milestone.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Interactive Staging Previews</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Test features on private preview URLs from your smartphone or laptop before anything goes live.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
              <FileText className="w-4 h-4 text-accent-cyan" />
              <span>Complete Documentation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Receive clear setup guides, API schemas, and deployment instructions upon final delivery.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="rounded-3xl glass-card p-8 sm:p-12 text-center border border-brand-500/30 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Ready to kick off Stage 01?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
          Submit your project requirements and let’s schedule an initial discovery deep-dive.
        </p>
        <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
          Start Your Project
        </Button>
      </div>
    </div>
  );
};
