import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { LinkedinIcon, GithubIcon } from './Icons';
import { 
  ArrowUp, 
  Mail, 
  Heart,
  Code2
} from 'lucide-react';

export const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark 
        ? 'bg-[#060913] border-slate-800/80 text-slate-400' 
        : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-sky-400 to-blue-600 shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              {portfolioData.personal.title} — Building reliable web applications and responsive user experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-sky-400 hover:border-slate-700' 
                  : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-slate-300'
              }`}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-sky-400 hover:border-slate-700' 
                  : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-slate-300'
              }`}
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-sky-400 hover:border-slate-700' 
                  : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-slate-300'
              }`}
              aria-label="Email"
              title={portfolioData.personal.email}
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={handleScrollToTop}
              className={`p-2.5 rounded-xl border transition-colors ml-2 ${
                isDark 
                  ? 'border-sky-500/30 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20' 
                  : 'border-sky-200 bg-sky-50 text-sky-600 hover:bg-sky-100'
              }`}
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
