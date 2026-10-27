import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isLive = project.status === 'Live' || project.isVerified;

  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-2xl dark:hover:shadow-brand-500/10 transition-all duration-300 flex flex-col h-full border border-slate-200 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md">
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20 opacity-90 group-hover:opacity-80 transition-opacity" />

        {/* Top Badges Overlay */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-brand-300 border border-brand-500/30 shadow-sm">
            {project.category}
          </span>

          {isLive ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Live Website</span>
            </div>
          ) : (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
              {project.status || 'Concept Architecture'}
            </span>
          )}
        </div>

        {/* Title overlay at base of image */}
        <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-brand-300 tracking-wider uppercase">
              {project.client}
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-[11px] font-medium text-slate-300">{project.year}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-md group-hover:text-brand-300 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 mb-2.5 line-clamp-1">
            {project.subtitle}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 transition-colors hover:border-brand-500/40"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[11px] font-semibold px-2 py-1 rounded-md bg-slate-50 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between gap-3">
          <Link
            to={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors group/btn"
          >
            <span>Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                title="View Code Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-500/25 border border-emerald-200 dark:border-emerald-500/30 transition-all shadow-sm"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
