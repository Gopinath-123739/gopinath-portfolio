import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { LinkedinIcon, GithubIcon } from './Icons';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Code2,
  Sparkles,
  MapPin,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export const Hero = ({ onOpenResume }) => {
  const { isDark } = useTheme();

  // Typewriter effect state for role
  const roles = [
    "Java Developer",
    "Full Stack Developer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 65);
      } else {
        // Pause when role is fully typed out
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-20 w-[420px] h-[320px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Profile Avatar Frame (Above Name) */}
        <div className="relative mb-6 group">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-500 shadow-2xl shadow-sky-500/25 group-hover:shadow-sky-500/40 transition-all duration-300 group-hover:scale-105">
            <img
              src={portfolioData.personal.profileImage}
              alt={`${portfolioData.personal.name} - ${portfolioData.personal.title}`}
              className="w-full h-full object-cover rounded-full bg-slate-900 border-2 border-[#080c16]"
              loading="eager"
            />
          </div>
        </div>

        {/* Main Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 font-black">
            {portfolioData.personal.name}
          </span>
        </h1>

        {/* Status Pill (Small Size Under Name) */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium mb-4 border transition-all duration-200 bg-sky-500/5 border-sky-500/20 text-sky-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="tracking-tight">
            B.E. CSE Graduate 2026 • Tap Academy Trainee
          </span>
        </div>

        {/* Professional Title with Typewriter Effect */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-6 flex items-center justify-center min-h-[36px]">
          <span>{displayText}</span>
        </h2>

        {/* Open to Work (Small Size) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-8 border transition-all duration-200 bg-emerald-500/10 border-emerald-500/25 text-emerald-400 shadow-sm shadow-emerald-500/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="tracking-wide">Open to Work</span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold border transition-all duration-200 ${
              isDark
                ? 'border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:border-slate-600 hover:text-white'
                : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 shadow-sm'
            } hover:-translate-y-0.5 active:translate-y-0`}
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social & Direct Channels */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-800/80 w-full max-w-md">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
            Connect Directly
          </span>

          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm'
              }`}
              aria-label="Gopinath S LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm'
              }`}
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm'
              }`}
              aria-label="Email Gopinath S"
              title={portfolioData.personal.email}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
