import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  Building2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const Certifications = () => {
  const { isDark } = useTheme();

  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#0d1424] border-slate-800 hover:border-slate-700 hover:bg-[#111a2e]' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {cert.year}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                  {cert.type}
                </span>

                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mt-2">
                  <Building2 className="w-3.5 h-3.5 text-sky-500" />
                  <span>{cert.issuer}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mt-4">
                  {cert.description}
                </p>
              </div>

              {/* Verified Status Tag */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Resume Verified</span>
                </span>

                <span className="text-[11px] font-mono text-slate-500">
                  Credential on File
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
