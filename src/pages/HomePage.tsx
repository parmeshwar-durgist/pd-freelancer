import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  FileCode,
  Users,
  Compass
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CodeWindow } from '../components/ui/CodeWindow';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ServiceCard } from '../components/ui/ServiceCard';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { projectsData } from '../data/projects';
import { servicesData } from '../data/services';
import { faqsData } from '../data/faqs';

import { SEO } from '../components/common/SEO';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.isFeatured);
  const homeServices = servicesData.slice(0, 6);
  const homeFaqs = faqsData.slice(0, 5);

  return (
    <div className="space-y-24 sm:space-y-32">
      <SEO
        title="Parmeshwar Durgist | PD Freelancer — Freelance Software Engineer & Full-Stack Developer"
        description="I’m Parmeshwar Durgist, a Freelance Software Engineer at PD Freelancer. I build custom software, web applications, Android & iOS apps, and AI-powered automation to help businesses grow with innovative digital solutions."
        keywords="Parmeshwar Durgist, PD Freelancer, Freelance Software Engineer, Full Stack Developer, React.js Developer, Node.js Developer, Android App Developer, React Native, Custom Web Applications, E-Commerce Developer, REST API Developer, Software Engineer India, Hire Freelance Developer"
      />
      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-6 sm:py-8 lg:py-10 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-brand-600/15 via-accent-cyan/15 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col justify-center">
              {/* Profile Intro Pill with Actual Photo */}
              <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm w-fit mx-auto lg:mx-0">
                <img
                  src="/parmeshwar-durgist.jpg"
                  alt="Parmeshwar Durgist"
                  className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-brand-500"
                />
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                    Parmeshwar Durgist
                  </span>
                  <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Select Projects
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.14]">
                Turning Ideas Into{' '}
                <span className="gradient-text">Powerful Digital Products.</span>
              </h1>

              {/* Persona / Value Proposition Subheading */}
              <p className="text-sm sm:text-base lg:text-[1.05rem] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I’m <strong className="font-bold text-slate-900 dark:text-white">Parmeshwar Durgist</strong>, a Freelance Software Engineer at <strong className="font-bold text-brand-600 dark:text-brand-400">PD Freelancer</strong>. I build custom software, web applications, Android & iOS apps, and AI-powered automation to help businesses grow with innovative digital solutions.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-glow"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Your Project
                </Button>
                <Button
                  to="/portfolio"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore My Work
                </Button>
              </div>

              {/* Real Value Pillars (Clean 3-column layout) */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200 dark:border-slate-800 text-left">
                <div>
                  <span className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white block">
                    2+ Years
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight block">
                    Production Experience
                  </span>
                </div>
                <div>
                  <span className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white block">
                    Full-Stack
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight block">
                    React, Node.js & DBs
                  </span>
                </div>
                <div>
                  <span className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white block">
                    100% Direct
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight block">
                    Zero Middlemen
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Hero Element: CodeWindow */}
            <div className="lg:col-span-6 relative w-full flex items-center justify-center">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRUST & VERIFIED STACK BANNER (Tech Stack + Client Handling & Experience)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-6">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
                Engineered With Modern Standards
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Full-Stack Tech Stack & Professional Client Delivery
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 w-fit flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              2+ Years Experience • Direct Client Handling
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Tech Stack & Cloud Infrastructure */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Cpu className="w-3.5 h-3.5 text-brand-500" />
                <span>Core Technologies & Cloud Hosting</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js',
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'MySQL',
                  'Android Java',
                  'Java',
                  'React Native',
                  'Docker',
                  'Git & GitHub',
                  'CI/CD Pipeline',
                  'AWS',
                  'Hostinger',
                  'Deployment'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 transition-all hover:scale-105 hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-400 shadow-sm cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Level & Client Handling Skills */}
            <div className="lg:col-span-5 space-y-2.5 lg:border-l lg:border-slate-200/80 lg:dark:border-slate-800 lg:pl-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Users className="w-3.5 h-3.5 text-emerald-500" />
                <span>Client Handling & Experience Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Direct Client Handling & Consulting',
                  'End-to-End Project Ownership',
                  'Requirement Gathering & MVP Scoping',
                  'Agile Milestone Delivery (2-4 Weeks)',
                  'Sub-Second Performance Optimization',
                  'Clean Architecture & Scalability',
                  'Zero Middlemen (100% Direct)'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 transition-all hover:scale-105 hover:bg-emerald-500/15 shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES PREVIEW SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Software Solutions"
          title="Engineered for Performance and Conversion"
          subtitle="From client-ready marketing websites to complex cloud software architectures, I deliver turnkey solutions tailored to your business model."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homeServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/services" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Explore All 10 Services & Deliverables
          </Button>
        </div>
      </section>

      {/* ========================================================
          FEATURED PROJECTS / CASE STUDIES
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Featured Work"
          title="Real Projects, Proven Execution"
          subtitle="A selection of production systems built to solve real operational bottlenecks, drive inquiries, and power online commerce."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/portfolio" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            View All Projects & Case Studies
          </Button>
          <a
            href="https://github.com/parmeshwar-durgist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-500 py-2.5 px-4"
          >
            Review GitHub Repositories <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ========================================================
          WHY WORK WITH ME (HIGH TRUST & VALUE)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-card p-8 sm:p-12 lg:p-16 border border-slate-200 dark:border-slate-800">
          <SectionHeading
            pill="Direct Collaboration"
            title="Why Work Directly With An Experienced Engineer?"
            subtitle="Working with PD Freelancer gives you direct access to the developer building your software—no agency overhead, no endless account managers, and no broken promises."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                100% Code Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                You own every single line of code, repository, and asset created. No proprietary lock-in, recurring developer licensing, or hostage fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Milestone-Based Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Scope, timeline, and pricing are defined upfront. You test functioning staging builds at every sprint milestone before final sign-off.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Post-Launch Warranty
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Enjoy 14 to 30 days of complimentary bug resolution after launch. You will never be left stranded after deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROCESS SNAPSHOT
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Structured Workflow"
          title="Predictable, Transparent Development"
          subtitle="From initial concept to production launch, here is how we bring your project to life smoothly."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Discovery & Plan', desc: 'Clarifying business goals, user personas, and technical boundaries.' },
            { num: '02', title: 'Fixed Scope & Quote', desc: 'Agreed deliverables, phased milestones, and transparent pricing.' },
            { num: '03', title: 'Architecture & UI', desc: 'Database modeling, API contracts, and responsive layout designs.' },
            { num: '04', title: 'Agile Coding', desc: 'Clean, type-safe development with live staging previews.' },
            { num: '05', title: 'QA & Optimization', desc: 'Cross-device mobile testing, security hardening, and SEO audits.' },
            { num: '06', title: 'Launch & Handover', desc: 'Custom domain deployment, 100% repository transfer, and warranty.' }
          ].map((item) => (
            <div key={item.num} className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              <span className="text-2xl font-black text-brand-600 dark:text-brand-400 block mb-2 font-mono">
                {item.num}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
          >
            Review the detailed step-by-step process & deliverables <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          FAQ TEASER SECTION
      ======================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Common Inquiries"
          title="Frequently Asked Questions"
          subtitle="Answers to common questions regarding timelines, code ownership, communication, and pricing."
        />

        <FAQAccordion items={homeFaqs} />

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
          >
            Have more questions? Read the complete FAQ guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          FINAL HIGH-CONVERSION CTA BANNER
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-900 via-slate-900 to-[#070b14] p-8 sm:p-14 lg:p-20 text-center border border-brand-500/30 shadow-2xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <Badge variant="glow" size="md">
              Start Your Collaboration
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Turn Your Software Idea Into Reality?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need a high-impact corporate website, a customized full-stack web application, or an e-commerce platform, let’s discuss your vision and build something exceptional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-glow"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Your Project
              </Button>
              <Button
                to="/pricing"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-slate-600 hover:bg-slate-800"
              >
                View Pricing Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
