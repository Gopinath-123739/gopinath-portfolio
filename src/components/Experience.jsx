import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Internship Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-300 ml-4 sm:ml-6 space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center shadow-md shadow-sky-500/20">
                <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              </div>

              {/* Experience Card */}
              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 group ${
                isDark 
                  ? 'bg-[#0d1424] border-slate-800 hover:border-slate-700 hover:bg-[#111a2e]' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
              }`}>
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1 inline-block">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-base text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                      <Building2 className="w-4 h-4 text-sky-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Metadata Pills */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Verified Responsibilities */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Key Responsibilities & Contributions
                  </h4>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Applied Badges */}
                <div className="pt-6 mt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-2">
                    Technologies Applied:
                  </span>
                  {exp.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
