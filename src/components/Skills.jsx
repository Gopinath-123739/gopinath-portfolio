import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Code2, 
  Database, 
  Terminal, 
  Coffee, 
  Layout, 
  Palette, 
  Atom, 
  Layers, 
  Server, 
  Binary,
  Cpu
} from 'lucide-react';

export const Skills = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Icon mapping
  const iconMap = {
    Coffee: Coffee,
    Database: Database,
    Code2: Code2,
    Terminal: Terminal,
    Layout: Layout,
    Palette: Palette,
    Atom: Atom,
    Layers: Layers,
    Server: Server,
    Binary: Binary
  };

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'programming', label: 'Programming Languages' },
    { id: 'web', label: 'Web Development' },
    { id: 'concepts', label: 'Core Computer Science Concepts' }
  ];

  const allSkillsList = [
    ...portfolioData.skills.programmingLanguages.map(s => ({ ...s, category: 'programming', categoryLabel: 'Programming Language' })),
    ...portfolioData.skills.webDevelopment.map(s => ({ ...s, category: 'web', categoryLabel: 'Web Development' })),
    ...portfolioData.skills.coreConcepts.map(s => ({ ...s, category: 'concepts', categoryLabel: 'Core CS Concept' }))
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? allSkillsList 
    : allSkillsList.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? 'bg-sky-500/15 border-sky-500/50 text-sky-400 shadow-sm shadow-sky-500/10 font-semibold'
                  : isDark
                    ? 'border-slate-800 bg-[#0d1424] text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#0d1424] border-slate-800/80 hover:border-sky-500/40 hover:bg-[#111a2e]'
                    : 'bg-white border-slate-200 hover:border-sky-400/50 hover:shadow-lg shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border transition-all ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800 text-sky-400 group-hover:border-sky-500/40' 
                      : 'bg-sky-50 border-sky-200 text-sky-600'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
                    {skill.highlight}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-sky-400/90 font-medium">
                    {skill.categoryLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
