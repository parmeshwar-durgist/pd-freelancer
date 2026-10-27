import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-brand-950 text-white text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-brand-500/20 font-medium flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <div className="flex items-center gap-1.5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">Available for freelance projects</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 hidden xs:inline">•</span>
          <span className="text-slate-300">Call / WhatsApp:</span>
          <a
            href="tel:9657847967"
            className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            +91 9657847967
          </a>
          <a
            href="https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I'm%20interested%20in%20discussing%20a%20project%20with%20PD%20Freelancer."
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-300 hover:text-white underline font-semibold ml-1"
          >
            Chat Now
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                PD <span className="text-brand-600 dark:text-brand-400 font-bold">Freelancer</span>
              </span>
              <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider -mt-1">
                Parmeshwar Durgist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10 dark:bg-brand-500/15'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <Button to="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Start Your Project
              </Button>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
            <nav className="flex flex-col space-y-1 mb-5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Start Your Project
              </Button>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <a
                  href="https://github.com/parmeshwar-durgist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-brand-500"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a
                  href="mailto:durgistparmeshwar@gmail.com"
                  className="hover:text-brand-500"
                >
                  durgistparmeshwar@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
