import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Target,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Find next project for sequential exploration
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Top Breadcrumb & Back Link */}
      <div className="flex items-center justify-between">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        <Badge variant="glow" size="sm">
          {project.category}
        </Badge>
      </div>

      {/* Case Study Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            {project.client} • {project.year}
          </span>
          {project.isVerified && (
            <Badge variant="success" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              Verified Production Case Study
            </Badge>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Live and GitHub links */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-500 shadow-sm transition-colors"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Review GitHub Repository</span>
            </a>
          )}
          <Button
            to={`/contact?service=${encodeURIComponent(project.title)}`}
            variant="outline"
            size="sm"
          >
            Request Similar Project
          </Button>
        </div>
      </div>

      {/* Full-width Hero Preview Image */}
      <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-950">
        <img
          src={project.previewImage}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Structured Case Study Sections */}
      <div className="space-y-12 text-slate-700 dark:text-slate-300">
        {/* 1. Problem */}
        <div className="p-6 sm:p-8 rounded-3xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-3">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>The Client Problem</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200">
            {project.problem}
          </p>
        </div>

        {/* 2. Project Goals */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-wider">
            <Target className="w-5 h-5 shrink-0" />
            <span>Project Objectives & Requirements</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.goals.map((goal, gIdx) => (
              <div
                key={gIdx}
                className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Engineering Solution */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider">
            <Sparkles className="w-5 h-5 shrink-0" />
            <span>The Engineering Solution</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {project.solution}
          </p>
        </div>

        {/* 4. Key Delivered Features */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Key Architectural Features
          </h3>
          <ul className="space-y-2.5">
            {project.keyFeatures.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Complete Tech Stack Matrix */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <Layers className="w-5 h-5 text-brand-500" />
            <span>Complete Technology Stack</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {project.techStack.frontend && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-2">
                  Frontend
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.frontend.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.backend && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-cyan block mb-2">
                  Backend & APIs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.backend.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.database && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 block mb-2">
                  Database & Storage
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.database.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack.tools && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-2">
                  DevOps & Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.tools.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 6. Technical Challenges */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Engineering Challenges Overcome
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {project.challenges}
          </p>
        </div>

        {/* 7. Tangible Business Outcome */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">
            Tangible Business Outcome
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Case Studies</span>
        </Link>

        {nextProject && (
          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-500"
          >
            <span>Next Project: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Bottom CTA Card */}
      <div className="rounded-3xl glass-card p-8 sm:p-10 text-center border border-brand-500/30">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Want a solution built with similar excellence?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-5">
          Let’s discuss your unique business challenges and formulate the right technical roadmap.
        </p>
        <Button to="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
          Start Your Project
        </Button>
      </div>
    </div>
  );
};
