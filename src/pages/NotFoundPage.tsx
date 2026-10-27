import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, Search, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto border border-brand-500/20 shadow-glow">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-5xl font-black text-brand-600 dark:text-brand-400 font-mono">
            404
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The page or resource you requested could not be located on this server. It may have been moved or updated.
          </p>
        </div>

        <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-left text-xs space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-300">Quick Navigation:</p>
          <div className="grid grid-cols-2 gap-2 text-brand-600 dark:text-brand-400 font-medium">
            <Link to="/" className="hover:underline flex items-center gap-1">
              • Home Studio
            </Link>
            <Link to="/services" className="hover:underline flex items-center gap-1">
              • Services
            </Link>
            <Link to="/portfolio" className="hover:underline flex items-center gap-1">
              • Projects
            </Link>
            <Link to="/contact" className="hover:underline flex items-center gap-1">
              • Contact Form
            </Link>
          </div>
        </div>

        <div className="pt-2">
          <Button to="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Return to Studio Home
          </Button>
        </div>
      </div>
    </div>
  );
};
