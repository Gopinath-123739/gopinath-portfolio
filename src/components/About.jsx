import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Sparkles,
  MapPin,
  Calendar,
  GraduationCap
} from 'lucide-react';

export const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Background & Engineering Focus
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Polished Bio Card */}
        <div className={`p-6 sm:p-10 md:p-12 rounded-3xl border transition-all duration-300 shadow-xl ${
          isDark 
            ? 'bg-[#0d1424] border-slate-800/90 shadow-black/40' 
            : 'bg-white border-slate-200 shadow-slate-200/60'
        }`}>
          <div className="space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              I am a <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Computer Science and Engineering graduate (2026)</strong> from Alpha College of Engineering in Chennai with an academic record of <span className="text-sky-400 font-semibold font-mono">8.03 / 10 CGPA</span>. My educational journey built a strong foundation in core computer science, object-oriented programming, data structures, and database management systems.
            </p>

            <p>
              During my internship at <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Pumo Technovation</strong>, I contributed to full-stack web development tasks, built and tested responsive UI components with clean frontend integration, and worked with collaborative development teams to ensure seamless cross-device performance.
            </p>

            <p>
              To further master enterprise application architecture, I am currently undergoing intensive <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Java Full Stack Development training at Tap Academy</strong>. Seeking an entry-level <strong className="text-sky-400 font-semibold">Software Developer</strong> opportunity to apply strong fundamentals in Java, SQL, JavaScript, React, and data structures to build reliable, user-focused products.
            </p>
          </div>

          {/* Quick Credential Meta Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>B.E. Computer Science • CGPA 8.03 / 10</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chennai, Tamil Nadu • Open to Relocation</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Graduating Batch: 2022–2026</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
