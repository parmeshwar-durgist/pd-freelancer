import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Terminal,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  HeartHandshake,
  Target,
  Sparkles,
  Phone,
  MessageSquare,
  Server,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { skillsData } from '../data/skills';

const coreExpertise = [
  'Full-Stack Development',
  'React.js',
  'Node.js & Express',
  'REST APIs',
  'Database Management (MongoDB & MySQL)',
  'E-commerce Solutions',
  'Android Development (Java)',
  'Cloud Deployment & DevOps'
];

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20 sm:space-y-24">
      {/* ========================================================
          HERO & BIOGRAPHY SECTION
      ======================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Professional Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-accent-cyan rounded-3xl blur-xl opacity-30 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
              {/* Photo Frame with Actual Portrait */}
              <div className="relative w-56 h-56 mx-auto rounded-3xl overflow-hidden bg-slate-900 border-2 border-brand-500/40 flex items-center justify-center mb-6 shadow-2xl group">
                <img
                  src="/parmeshwar-durgist.jpg"
                  alt="Parmeshwar Durgist - Freelance Software Engineer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-2 left-2 right-2 text-[11px] text-white font-mono font-medium drop-shadow-md">
                  Parmeshwar Durgist
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Parmeshwar Durgist
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1">
                Software Engineer & Full-Stack Developer
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Founder, PD Freelancer • India
              </p>

              {/* Status Pill */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Available for Projects & Consulting</span>
              </div>

              {/* Profile Links & Direct Phone */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                <div className="flex justify-center items-center gap-3">
                  <a
                    href="https://github.com/parmeshwar-durgist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-brand-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <span>•</span>
                  <a
                    href="https://parmeshwar-the-series.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:underline transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>The Series Portfolio</span>
                  </a>
                </div>

                <div className="flex justify-center items-center gap-3 pt-1">
                  <a
                    href="tel:+919657847967"
                    className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 9657847967</span>
                  </a>
                  <span>•</span>
                  <a
                    href="https://wa.me/919657847967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Personal Narrative & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile • PD Freelancer</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            I turn ideas into <span className="gradient-text">powerful digital products</span> that create real value.
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I’m <strong className="text-slate-900 dark:text-white">Parmeshwar Durgist</strong>, a Software Engineer and Full-Stack Developer with <strong>2+ years of hands-on experience</strong> in building modern websites, responsive web applications, high-converting e-commerce platforms, and scalable business software solutions.
            </p>
            <p>
              I specialize in developing user-friendly, performant, and scalable digital products using technologies such as <strong>React.js, JavaScript, Node.js, Express.js, MongoDB, MySQL, Java</strong>, and <strong>Android development</strong>. I engineer secure REST APIs, third-party webhook integrations, payment gateways (Razorpay), relational/document database schemas, and cloud deployment pipelines via Git and GitHub.
            </p>
            <p>
              My approach combines technical problem-solving, clean maintainable code, modern UI/UX principles, and an unwavering focus on real business requirements. I enjoy transforming ideas into practical digital solutions that help businesses improve their online presence, streamline day-to-day operations, and deliver superior customer experiences.
            </p>
            
          </div>

          {/* Mission Callout Box */}
          <div className="p-5 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-start gap-3.5">
            <Target className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-0.5">
                My Mission
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                “To turn ideas into powerful digital products that create real value for businesses and their customers.”
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Button
              href="https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
              variant="primary"
              size="md"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Chat on WhatsApp (9657847967)
            </Button>
            <Button to="/portfolio" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Project Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE EXPERTISE PILL MATRIX
      ======================================================== */}
      <section className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            Core Technical Expertise
          </h3>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            End-to-End Full-Stack Development
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {coreExpertise.map((item) => (
            <div
              key={item}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-brand-500/50 transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          DEVELOPMENT PRINCIPLES & VALUES
      ======================================================== */}
      <section className="space-y-8">
        <SectionHeading
          pill="Engineering Principles"
          title="How I Approach Every Software Project"
          subtitle="A set of non-negotiable standards applied to every line of code and client interaction."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-7 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Performance & Sub-Second Speeds
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every website and API is designed for minimal load times, sub-second responses, and optimal Google Core Web Vitals. No bloated templates or unoptimized assets.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Clean Architecture & Maintainability
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Writing structured code, strict type interfaces, and modular components ensures that your system remains scalable, secure, and easy for your team to maintain in the future.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Direct & Honest Collaboration
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              You work directly with me—the engineer writing your code. We agree on scopes, milestones, and timelines upfront, with staging previews provided at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          CATEGORIZED TECHNICAL SKILLS MATRIX
      ======================================================== */}
      <section className="space-y-10">
        <SectionHeading
          pill="Verified Competencies"
          title="Technical Skills & Architecture Matrix"
          subtitle="Accurate, real competencies practiced across production client deployments, business applications, and open-source software."
        />

        <div className="space-y-8">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          LET'S CONNECT CALL TO ACTION
      ======================================================== */}
      <section className="rounded-3xl glass-card p-8 sm:p-12 text-center border border-brand-500/30 bg-gradient-to-b from-brand-500/5 to-transparent">
        <div className="max-w-2xl mx-auto space-y-4">
          <Badge variant="brand" size="md">
            Let's Connect
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Have a project idea or need a reliable software development partner?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From website development and custom web applications to API integrations and ongoing technical support, let's discuss how I can help bring your vision to life.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20connect."
              variant="primary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              WhatsApp: 9657847967
            </Button>
            <Button
              href="tel:+919657847967"
              variant="outline"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Directly
            </Button>
            <Button to="/contact" variant="ghost" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Send Project Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
