import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, FileCode, Layers, ShieldCheck } from 'lucide-react';

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'deliverables'>('profile');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'profile', name: 'DeveloperProfile.ts', icon: FileCode },
    { id: 'stack', name: 'TechMatrix.ts', icon: Layers },
    { id: 'deliverables', name: 'DeliveryGuarantee.json', icon: ShieldCheck },
  ];

  const codeSnippets = {
    profile: `// PD Freelancer - Engineering Excellence
const engineer: FreelanceDeveloper = {
  name: "Parmeshwar Durgist",
  brand: "PD Freelancer",
  title: "Full-Stack Software Engineer",
  experience: "2+ Years Production Software",
  focus: [
    "High-Performance Web Applications",
    "Tailored E-commerce Platforms",
    "Hardened Node.js REST APIs",
    "Clean React & TypeScript Frontends"
  ],
  verifiedProjects: ["The Gooseberry Project (Manyyata Foods)", "ASK Compaire"],
  availability: "Available for select freelance projects",
  contact: {
    mobile: "+91 9657847967",
    email: "durgistparmeshwar@gmail.com"
  }
};

export default engineer;`,
    stack: `// Core Engineering Stack
export const TechMatrix = {
  frontend: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  backend: ["Node.js", "Express.js", "RESTful Endpoints", "Microservices"],
  databases: ["MongoDB (Mongoose)", "MySQL (ACID)", "SQLite / Room"],
  mobile: ["Java (Android SDK)", "React Native"],
  devops: ["Docker", "Git/GitHub CI/CD", "Vercel", "Postman", "SEO Audits"],
  principles: ["Type Safety", "Sub-second Loads", "Zero Vendor Lock-in"]
};`,
    deliverables: `{
  "clientGuarantee": {
    "timeline": "Milestone-backed delivery commitments",
    "codeOwnership": "100% intellectual property transferred",
    "testing": "Cross-device responsive & Lighthouse audited",
    "warranty": "14 to 30 days post-launch bug resolution",
    "communication": "Direct WhatsApp & staging demo links"
  }
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#0d1117] shadow-2xl text-left font-mono text-xs sm:text-sm">
      {/* Glow highlight */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />

      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 cursor-pointer" />
          <span className="ml-2 text-xs text-slate-400 font-sans hidden sm:inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-400" />
            pd-freelancer-studio v2.4
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-xs transition-colors ${
                  isActive
                    ? 'bg-[#1f2937] text-white border border-slate-700 font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? 'text-brand-400' : ''}`} />
                <span className="hidden xs:inline">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto text-slate-300 leading-relaxed font-mono">
        <pre className="text-xs sm:text-sm">
          <code>
            {codeSnippets[activeTab].split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
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

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#11161f] border-t border-slate-800/80 text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Vite Engine Active
          </span>
          <span className="hidden sm:inline text-slate-500">UTF-8</span>
          <span className="hidden sm:inline text-slate-500">TypeScript 5.6</span>
        </div>
        <div className="flex items-center gap-1.5 text-brand-300">
          <Sparkles className="w-3 h-3" />
          <span>Production Ready</span>
        </div>
      </div>
    </div>
  );
};
