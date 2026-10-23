import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  BookOpen,
  Cpu
} from 'lucide-react';

export const Education = () => {
  const { isDark } = useTheme();

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education & Professional Training
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, index) => {
            const isDegree = edu.type === "Academic Degree";
            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-[#0d1424] border-slate-800 hover:border-slate-700 hover:bg-[#111a2e]' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
                }`}
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {edu.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  {/* Degree / Course Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl border shrink-0 ${
                      isDegree
                        ? 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                        : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                    }`}>
                      {isDegree ? <GraduationCap className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-sky-400 mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Score / Status Highlight */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Official Standing:</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">
                      {edu.score}
                    </span>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                      Program Highlights & Key Focus:
                    </span>
                    <ul className="space-y-2">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Status:</span>
                  <span className="font-semibold text-slate-200">
                    {edu.status}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
