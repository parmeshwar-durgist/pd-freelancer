import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal,
  Copy,
  Check,
  Sparkles,
  FileCode,
  Layers,
  ShieldCheck,
  Smartphone,
  Globe,
  ShoppingCart,
  Bot,
  ChevronUp,
  ChevronDown,
  ArrowDown,
  Play,
  Pause
} from 'lucide-react';

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'solutions' | 'stack' | 'guarantee'>('solutions');
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const codeContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const tabs = [
    { id: 'solutions', name: 'DigitalSolutions.ts', icon: FileCode },
    { id: 'stack', name: 'TechMatrix.ts', icon: Layers },
    { id: 'guarantee', name: 'ClientGuarantee.json', icon: ShieldCheck },
  ];

  const codeSnippets = {
    solutions: `// PD Freelancer — Engineering Excellence
const studio: DigitalSolutions = {
  engineer: "Parmeshwar Durgist",
  brand: "PD Freelancer",
  role: "Freelance Software Engineer",
  mission: "Transforming Ideas into Powerful Digital Solutions",
  
  whatIBuild: [
    "Custom Software & Web Applications",
    "Android & iOS Mobile Apps",
    "AI-Powered Automation & Smart Workflows",
    "Tailored E-Commerce Platforms",
    "High-Security REST API Integrations"
  ],

  businessImpact: {
    process: "Simplify Complex Workflows",
    efficiency: "Improve Operational Efficiency",
    presence: "Strengthen Digital Authority",
    growth: "Scale Revenue & Customer Reach"
  },

  verifiedDeployments: [
    "The Gooseberry Project (Manyyata Foods)",
    "ASK Compaire Industrial Portal",
    "Manisha Infracon Infrastructure",
    "Karale Club House Resort"
  ],

  availability: "Open for select client projects",
  contact: {
    directCall: "+91 9657847967",
    whatsApp: "+91 9657847967",
    email: "pd.softwaredeveloper@gmail.com"
  }
};

export default studio;`,

    stack: `// Core Full-Stack, Cloud & Client Handling Matrix
export const TechMatrix = {
  frontendAndMobile: [
    "React.js", "React Native", "Android Java", "Java", "Tailwind CSS"
  ],
  backendAndAPIs: [
    "Node.js", "Express.js", "RESTful Architecture", "JWT Authentication"
  ],
  databases: [
    "MongoDB (Mongoose)", "MySQL Relational (ACID)"
  ],
  cloudAndDevops: [
    "Docker", "Git & GitHub", "CI/CD Pipeline", "AWS", "Hostinger", "Deployment"
  ],
  clientHandlingAndExperience: [
    "Direct Client Handling & Consulting",
    "End-to-End Project Ownership",
    "Requirement Analysis & MVP Scoping",
    "Agile Milestone Tracking (2-4 Weeks)",
    "Sub-Second Performance Optimization",
    "Zero Middlemen (100% Direct)"
  ]
};`,

    guarantee: `{
  "clientGuarantee": {
    "codeOwnership": "100% Intellectual Property Transferred to Client",
    "ndaConfidentiality": "Strict NDA Signed Before Deep Disclosure",
    "deliveryPillars": "Milestone-Backed Timelines (2 to 4 Weeks)",
    "qualityAssurance": "Cross-Device Responsive & Lighthouse Audited",
    "warrantySupport": "30 Days Free Post-Launch Bug Resolution",
    "communication": "Direct WhatsApp Line & Weekly Staging Previews"
  }
}`
  };

  // Track scroll position & update progress
  const handleScroll = () => {
    const el = codeContainerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    setCanScrollUp(scrollTop > 20);
    setCanScrollDown(scrollTop < maxScroll - 20);
  };

  // Scroll to Top
  const scrollToTop = () => {
    stopAutoScroll();
    codeContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to Bottom
  const scrollToBottom = () => {
    stopAutoScroll();
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTo({
        top: codeContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Auto Scroll logic
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    setIsAutoScrolling(false);
  };

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      setIsAutoScrolling(true);
      const el = codeContainerRef.current;
      if (!el) return;

      // If at bottom, reset to top before scrolling
      if (el.scrollTop >= el.scrollHeight - el.clientHeight - 10) {
        el.scrollTo({ top: 0, behavior: 'auto' });
      }

      autoScrollIntervalRef.current = setInterval(() => {
        if (!codeContainerRef.current) return;
        const container = codeContainerRef.current;
        if (container.scrollTop >= container.scrollHeight - container.clientHeight - 5) {
          stopAutoScroll();
        } else {
          container.scrollTop += 2;
        }
      }, 40);
    }
  };

  // Initial scroll to top on mount
  useEffect(() => {
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = 0;
      handleScroll();
    }
  }, []);

  // Reset scroll and auto-scroll when tab switches
  useEffect(() => {
    stopAutoScroll();
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = 0;
      handleScroll();
    }
  }, [activeTab]);

  // Clean up auto scroll on unmount
  useEffect(() => {
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/70 bg-[#0d1117] shadow-2xl text-left font-mono text-xs sm:text-sm">
      {/* Background glow highlights */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />

      {/* Row 1: Window Titlebar (macOS dots + studio title + action controls) */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#161b22] border-b border-slate-800/90 select-none">
        {/* Left: macOS dots & studio identity */}
        <div className="flex items-center space-x-2.5 shrink-0">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity cursor-pointer shadow-sm" />
          </div>
          <div className="flex items-center gap-1.5 pl-2 sm:pl-3 border-l border-slate-700/60 text-xs text-slate-400 font-sans">
            <Terminal className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span className="font-semibold whitespace-nowrap text-slate-200 tracking-wide text-[11px] sm:text-xs">
              pd-freelancer-studio
            </span>
          </div>
        </div>

        {/* Right: Scroll controls, Auto-Scroll toggle & Copy button */}
        <div className="flex items-center space-x-1 shrink-0">
          {/* Auto Scroll Toggle */}
          <button
            onClick={toggleAutoScroll}
            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all ${
              isAutoScrolling
                ? 'bg-brand-500/25 text-brand-300 border border-brand-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
            title={isAutoScrolling ? 'Pause Auto-Scroll' : 'Auto-Scroll Top to Bottom'}
            aria-label="Toggle Auto Scroll"
          >
            {isAutoScrolling ? (
              <Pause className="w-3 h-3 text-brand-400 animate-pulse" />
            ) : (
              <Play className="w-3 h-3 text-slate-300" />
            )}
            <span className="text-[11px] font-sans hidden sm:inline">
              {isAutoScrolling ? 'Pause' : 'Auto'}
            </span>
          </button>

          <div className="h-3.5 w-[1px] bg-slate-800 mx-0.5" />

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            disabled={!canScrollUp}
            className={`p-1.5 rounded transition-colors ${
              canScrollUp
                ? 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                : 'text-slate-600/60 cursor-not-allowed'
            }`}
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>

          {/* Scroll to Bottom */}
          <button
            onClick={scrollToBottom}
            disabled={!canScrollDown}
            className={`p-1.5 rounded transition-colors ${
              canScrollDown
                ? 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                : 'text-slate-600/60 cursor-not-allowed'
            }`}
            title="Scroll to Bottom"
            aria-label="Scroll to Bottom"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          <div className="h-3.5 w-[1px] bg-slate-800 mx-0.5" />

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 rounded text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors text-xs font-sans"
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-300" />
            )}
            <span className="text-[11px] hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Row 2: IDE Style File Tabs Bar */}
      <div className="flex items-center px-2 bg-[#0d1117] border-b border-slate-800/80 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 border-b-2 text-[11px] sm:text-xs font-mono whitespace-nowrap transition-all ${
                isActive
                  ? 'border-brand-500 text-white bg-[#161b22] font-medium shadow-sm'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-brand-400' : 'text-slate-500'}`} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Scroll Progress Bar */}
      <div className="w-full h-[2px] bg-slate-850">
        <div
          className="h-full bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Code Editor Body with Smooth Top-to-Bottom Scrolling */}
      <div className="relative group">
        <div
          ref={codeContainerRef}
          onScroll={handleScroll}
          className="h-[310px] sm:h-[340px] lg:h-[360px] overflow-y-auto overflow-x-auto p-4 sm:p-5 text-slate-300 leading-relaxed font-mono scroll-smooth select-text [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-thumb]:bg-slate-700 hover:[&::-webkit-scrollbar-thumb]:bg-brand-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-900/60"
        >
          <pre className="text-xs sm:text-sm">
            <code>
              {codeSnippets[activeTab].split('\n').map((line, idx) => (
                <div key={idx} className="table-row hover:bg-slate-800/30 rounded">
                  <span className="table-cell pr-4 text-right text-slate-600 select-none text-[11px] sm:text-xs w-8">
                    {idx + 1}
                  </span>
                  <span className="table-cell whitespace-pre">
                    {line.startsWith('//') ? (
                      <span className="text-slate-500 italic">{line}</span>
                    ) : line.includes('const') || line.includes('export') || line.includes('default') ? (
                      <span>
                        {line.split(/(\b(?:const|export|default)\b)/g).map((part, pIdx) =>
                          ['const', 'export', 'default'].includes(part) ? (
                            <span key={pIdx} className="text-purple-400 font-semibold">{part}</span>
                          ) : (
                            part
                          )
                        )}
                      </span>
                    ) : line.includes(':') && line.includes('"') ? (
                      <span>
                        {line.split(':').map((chunk, cIdx) =>
                          cIdx === 0 ? (
                            <span key={cIdx} className="text-sky-300">{chunk}:</span>
                          ) : (
                            <span key={cIdx} className="text-emerald-300">{chunk}</span>
                          )
                        )}
                      </span>
                    ) : (
                      line
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Floating Scroll-Down Hint Pill (appears when there is content below and user hasn't scrolled far) */}
        {canScrollDown && (
          <button
            onClick={scrollToBottom}
            className="absolute bottom-3 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-brand-600 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl text-[11px] font-sans backdrop-blur transition-all transform hover:scale-105 active:scale-95"
            title="Click to scroll to bottom"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </button>
        )}
      </div>

      {/* Quick Solutions Showcase Strip */}
      <div className="px-3 sm:px-4 py-2 bg-[#161b22]/95 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-2 text-[11px]">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-500/15 text-brand-300 border border-brand-500/25">
            <Globe className="w-3 h-3" />
            <span>Web Apps</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
            <Smartphone className="w-3 h-3" />
            <span>Android & iOS</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/25">
            <Bot className="w-3 h-3" />
            <span>AI Automation</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
            <ShoppingCart className="w-3 h-3" />
            <span>E-Commerce</span>
          </span>
        </div>

        <div className="hidden xs:flex items-center gap-1 text-[10px] text-slate-400 font-sans">
          <span>{Math.round(scrollProgress)}% Scrolled</span>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 bg-[#11161f] border-t border-slate-800/80 text-[11px] text-slate-400 font-sans">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Engineering Engine Active
          </span>
          <span className="hidden sm:inline text-slate-500">TypeScript 5.6</span>
          <span className="hidden sm:inline text-slate-500">React 18</span>
        </div>
        <div className="flex items-center gap-1.5 text-brand-300">
          <Sparkles className="w-3 h-3" />
          <span>Production Ready</span>
        </div>
      </div>
    </div>
  );
};


