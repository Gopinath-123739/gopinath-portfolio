import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export const Projects = ({ onSelectProject }) => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 ${
                isDark 
                  ? 'bg-[#0d1424] border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/60' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl'
              }`}
            >
              {/* Project Details Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Documented Features List */}
                  <div className="mt-5 space-y-2.5">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                      Resume Documented Features:
                    </span>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges & Actions */}
                <div className="pt-5 border-t border-slate-800/80 space-y-5">
                  {/* Verified Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-md shadow-sky-500/20 active:scale-95"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:border-slate-600 transition-colors"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      ) : null}

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}

                      {/* If neither link is configured yet, show a clean indicator */}
                      {!project.githubUrl && !project.demoUrl && (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="text-xs text-slate-400 hover:text-sky-400 transition-colors font-mono"
                        >
                          Details & Architecture →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
