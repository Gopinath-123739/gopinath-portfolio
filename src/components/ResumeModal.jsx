import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { LinkedinIcon } from './Icons';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ExternalLink
} from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose, onShowToast }) => {
  const { isDark } = useTheme();

  // Handle escape key and body scroll lock when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (onShowToast) onShowToast("Downloading Gopinath S Resume (PDF)...");
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[92vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'bg-[#0d1424] border-slate-700 text-slate-100 shadow-black/80' 
            : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Gopinath S — Official Resume
              </h2>
              <span className="text-xs text-slate-400 font-mono">
                Entry-Level Java Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button */}
            <a
              href="/resume.pdf"
              download="Gopinath_S_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-md shadow-sky-500/20"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Print Action */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Preview Document (Printable / Scrollable) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1 bg-white text-slate-900 font-sans leading-normal selection:bg-sky-200">
          
          {/* Document Header */}
          <div className="text-center pb-6 border-b-2 border-slate-800 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-serif">
              GOPINATH S
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>+91 88071 92893</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                <a href="mailto:vishalgopi02@gmail.com" className="hover:underline text-blue-700">
                  vishalgopi02@gmail.com
                </a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-600" />
                <a href="https://www.linkedin.com/in/gopinath-s-bio" target="_blank" rel="noreferrer" className="hover:underline text-blue-700">
                  linkedin.com/in/gopinath-s-bio
                </a>
              </span>
            </div>
          </div>

          {/* Section 1: Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              Computer Science and Engineering graduate (2026) with hands-on experience building full-stack applications with Java. Seeking an entry-level Software Developer role to apply strong fundamentals in Java, SQL, JavaScript, data structures, and OOPs to build reliable, user-focused products.
            </p>
          </div>

          {/* Section 2: Internship */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1">
              Internship
            </h2>
            
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                <span>Full Stack Web Development Intern — Pumo Technovation</span>
                <span className="font-normal text-slate-600 font-mono">Jul 2025 – Aug 2025</span>
              </div>
              <ul className="list-disc pl-5 mt-1.5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Contributed to full-stack web development tasks, gaining hands-on experience with frontend integration.</li>
                <li>Built and tested responsive UI components as part of a collaborative team.</li>
                <li>Improved practical skills in front-end development, UI design, and web development.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1">
              Technical Skills
            </h2>
            
            <div className="text-xs sm:text-sm text-slate-800 space-y-1 pl-1">
              <p>
                <strong className="font-semibold text-slate-950">• Programming Languages:</strong> Java, SQL, JavaScript, Python
              </p>
              <p>
                <strong className="font-semibold text-slate-950">• Web Development:</strong> HTML5, CSS3, React JS
              </p>
              <p>
                <strong className="font-semibold text-slate-950">• Concepts:</strong> Object-Oriented Programming, DBMS, Data Structures
              </p>
            </div>
          </div>

          {/* Section 4: Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1">
              Projects
            </h2>

            {/* Project 1 */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                <span>Personal Finance Advisor Using Chatbot</span>
                <span className="font-normal text-slate-600 font-mono">2026</span>
              </div>
              <ul className="list-disc pl-5 mt-1.5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Developed a web-based AI Personal Finance Advisor to help users track and manage their income, expenses, and savings.</li>
                <li>Implemented automated expense categorization and financial analysis using JavaScript-based logic.</li>
                <li>Designed an interactive dashboard with charts and reports to visualize spending patterns, income, expenses, and savings.</li>
                <li>Added an AI chatbot to provide interactive financial guidance based on user queries and financial information.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
                <span>Online Food Stall — E-Commerce Website</span>
                <span className="font-normal text-slate-600 font-mono">2025</span>
              </div>
              <ul className="list-disc pl-5 mt-1.5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Designed a user-friendly interface to display food items with images, names, prices, and descriptions.</li>
                <li>Implemented interactive features using HTML and CSS.</li>
                <li>Designed navigation and page layouts to improve user experience.</li>
                <li>Improved practical skills in front-end development, UI design, and web development.</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Training */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1">
              Training
            </h2>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-800">
              <span>• Java Full Stack Development Course – Tap Academy</span>
              <span className="font-mono text-slate-600">July 2026 – Ongoing</span>
            </div>
          </div>

          {/* Section 6: Certifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1">
              Certifications
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
              <li>Web Development Internship Certificate – Pumo Technovation</li>
              <li>Cambridge English Preliminary Certificate – Cambridge University</li>
              <li>Full Stack Development Course Certificate – Pumo Technovation</li>
            </ul>
          </div>

          {/* Section 7: Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1">
              Education
            </h2>
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
              <span>Alpha College of Engineering — B.E., Computer Science and Engineering</span>
              <span className="font-normal text-slate-600 font-mono">2022 – 2026 | Chennai</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 pl-1">
              CGPA: <strong className="text-slate-900">8.03 / 10</strong>
            </p>
          </div>

          {/* Section 8: Portfolio URL */}
          <div className="space-y-1 pt-2 border-t border-slate-300">
            <p className="text-xs text-slate-600">
              Live Portfolio: <a href="https://personal-portfolio-ten-mu-19.vercel.app" target="_blank" rel="noreferrer" className="text-blue-700 font-medium hover:underline">personal-portfolio-ten-mu-19.vercel.app</a>
            </p>
          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="flex items-center justify-between p-4 border-t border-slate-800 bg-slate-950/80 text-xs text-slate-400">
          <span>Formatted from verified resume</span>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Gopinath_S_Resume.pdf"
              className="text-sky-400 hover:text-sky-300 font-semibold"
            >
              Direct PDF Download
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
