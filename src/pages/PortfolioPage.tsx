import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  ExternalLink,
  Github,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Filter,
  Phone,
  MessageSquare,
  Layers,
  Building2,
  ShoppingBag,
  Factory,
  Hotel,
  Car,
  Briefcase
} from 'lucide-react';

const categories: ProjectCategory[] = ['All', 'Web Apps', 'E-commerce', 'Websites', 'Mobile & APIs'];

const industries = [
  { name: 'Food & Wellness D2C', icon: ShoppingBag, project: 'Manyyata Foods' },
  { name: 'Industrial Equipment', icon: Factory, project: 'ASK Compaire' },
  { name: 'Civil Infrastructure', icon: Building2, project: 'Manisha Infracon' },
  { name: 'Hospitality & Leisure', icon: Hotel, project: 'Karale Club House' },
  { name: 'Automotive & Tyres', icon: Car, project: 'Perfect Tyre' },
  { name: 'Enterprise ERP & POS', icon: Layers, project: 'Manufacturing ERP' }
];

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Live' | 'Concept'>('All');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projectsData.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const liveProjectsCount = useMemo(
    () => projectsData.filter((p) => p.status === 'Live' || p.isVerified).length,
    []
  );

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;

      // Status match
      const isProjectLive = project.status === 'Live' || project.isVerified;
      const matchesStatus =
        statusFilter === 'All' ||
        (statusFilter === 'Live' && isProjectLive) ||
        (statusFilter === 'Concept' && !isProjectLive);

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [activeCategory, statusFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Hero Header Section */}
      <div className="relative text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-wide uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Engineering Portfolio • Parmeshwar Durgist</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Engineered for <span className="gradient-text">Impact</span>.<br />
          Built to Scale.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore genuine production client deployments and software architectures—spanning D2C e-commerce, industrial B2B portals, civil infrastructure, luxury hospitality, and custom enterprise tools.
        </p>

        {/* Live Metrics Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {projectsData.length}+
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Projects</span>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-500/5 text-center">
            <div className="flex items-center justify-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                {liveProjectsCount}
              </span>
            </div>
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Live Client Sites</span>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              100%
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Verified Technical Specs</span>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              &lt; 1s
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Sub-Second Load Times</span>
          </div>
        </div>

        {/* External Links Pill */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-600 dark:text-slate-300">
          <a
            href="https://github.com/parmeshwar-durgist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Github className="w-4 h-4 text-slate-900 dark:text-white" />
            <span>github.com/parmeshwar-durgist</span>
          </a>
          <span className="hidden sm:inline text-slate-400">•</span>
          <a
            href="https://parmeshwar-the-series.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-500/20 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>The Series Developer Showcase</span>
          </a>
        </div>
      </div>

      {/* Industries & Domains Served */}
      <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Diverse Industry Experience
          </h3>
          <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
            B2B • D2C • Industrial • Hospitality
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col items-center text-center gap-1.5 group hover:border-brand-500/40 transition-colors"
              >
                <Icon className="w-4 h-4 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                  {ind.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">{ind.project}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, client, or keyword (e.g. Node, Razorpay, ERP, WordPress)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Filter Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 self-stretch md:self-auto justify-center">
            <button
              onClick={() => setStatusFilter('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === 'All'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Works ({projectsData.length})
            </button>
            <button
              onClick={() => setStatusFilter('Live')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === 'Live'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              Live Sites Only ({liveProjectsCount})
            </button>
            <button
              onClick={() => setStatusFilter('Concept')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === 'Concept'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Blueprints & Concepts
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/90'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
          <Filter className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            No projects matched your criteria
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Try adjusting your search query or reset category filter.
          </p>
          <Button
            onClick={() => {
              setActiveCategory('All');
              setStatusFilter('All');
              setSearchQuery('');
            }}
            variant="outline"
            size="sm"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Authenticity Guarantee Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-500/10 via-brand-500/5 to-transparent border border-brand-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5">
        <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            100% Genuine Technical Authenticity Guarantee
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Every project listed reflects authentic technical engineering, production codebases, and realistic architectural design by <strong>Parmeshwar Durgist</strong>. During discovery calls, complete live staging demos and source walkthroughs are provided upon request.
          </p>
        </div>
      </div>

      {/* Direct Contact & Inquiry Callout */}
      <div className="relative rounded-3xl overflow-hidden glass-card p-8 sm:p-12 text-center border border-brand-500/30 bg-gradient-to-b from-brand-500/5 to-transparent">
        <div className="max-w-2xl mx-auto space-y-4">
          <Badge variant="brand" size="md">
            Direct Developer Collaboration
          </Badge>
          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Have a project you want built with precision?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you need a direct-to-consumer e-commerce storefront, an industrial corporate website, or custom ERP automation, discuss your project directly with Parmeshwar Durgist.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              variant="primary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Chat on WhatsApp (9657847967)
            </Button>
            <Button
              href="tel:+919657847967"
              variant="outline"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Directly
            </Button>
            <Button
              to="/contact"
              variant="ghost"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Send Detailed Brief
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
