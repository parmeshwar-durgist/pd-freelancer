import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatbotWidget } from '../chat/ChatbotWidget';
import { MessageSquare, ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919657847967';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* AI Assistant Chatbot */}
      <ChatbotWidget />

      {/* Floating Action Elements (WhatsApp + Scroll To Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-brand-500 transition-all opacity-80 hover:opacity-100"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* WhatsApp Floating Contact Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Hi Parmeshwar, I'm reaching out from your PD Freelancer website to discuss a software project."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp"
          className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
