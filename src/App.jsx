import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Check, Sparkles, X } from 'lucide-react';

function PortfolioContent() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern transition-colors duration-300">
      
      {/* Top Floating Toast Notification */}
      {toast && (
        <div className="fixed top-22 right-4 sm:right-8 z-50 animate-bounce-in">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-sky-500/40 text-slate-100 text-xs sm:text-sm font-medium shadow-xl shadow-black/40">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toast}</span>
            <button 
              onClick={() => setToast(null)}
              className="ml-2 text-slate-400 hover:text-white"
              aria-label="Dismiss toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
          onShowToast={showToast}
        />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          onShowToast={showToast}
        />
      )}

      {/* Interactive Resume View & Download Modal */}
      {resumeModalOpen && (
        <ResumeModal 
          isOpen={resumeModalOpen} 
          onClose={() => setResumeModalOpen(false)} 
          onShowToast={showToast}
        />
      )}

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
