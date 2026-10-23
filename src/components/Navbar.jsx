import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileText, 
  Send,
  Code, 
  ExternalLink, 
  ChevronRight
} from 'lucide-react';

export const Navbar = ({ onOpenResume }) => {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItemsRef = useRef({});
  const navContainerRef = useRef(null);
  const isManualNav = useRef(false);
  const manualNavTimer = useRef(null);
  const [gliderStyle, setGliderStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  // Update gliding pill position based on active section
  const updateGlider = () => {
    const currentTab = navItemsRef.current[activeSection];
    const container = navContainerRef.current;
    if (currentTab && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = currentTab.getBoundingClientRect();
      setGliderStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updateGlider();
    const timer = setTimeout(updateGlider, 60);
    window.addEventListener('resize', updateGlider);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateGlider);
    };
  }, [activeSection]);

  // Scroll detection for sticky navbar background and accurate active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      if (isManualNav.current) return;

      // Bottom of page detection (activates contact even on large screens)
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 70);
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Top of page detection
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // Find section currently in view below the 80px navbar
      const sectionIds = [
        'contact',
        'certifications',
        'education',
        'projects',
        'experience',
        'skills',
        'about',
        'home'
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // 140px threshold gives a natural active trigger below the fixed navbar
          if (rect.top <= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling only while mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow || '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    
    const targetId = href.replace('#', '');
    setActiveSection(targetId);

    // Temporarily prioritize manual click so scroll-spy doesn't fight the glide
    isManualNav.current = true;
    if (manualNavTimer.current) clearTimeout(manualNavTimer.current);
    manualNavTimer.current = setTimeout(() => {
      isManualNav.current = false;
    }, 850);

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.history.pushState) {
        window.history.pushState(null, null, href);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-[#080c16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo / Monogram */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            aria-label="Gopinath S Home"
          >
            {/* Profile Avatar in Logo */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-sky-400 to-blue-600 shadow-sm shadow-sky-500/25 transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center">
              <img
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
              isDark ? 'text-slate-100 group-hover:text-sky-400' : 'text-slate-900 group-hover:text-sky-600'
            }`}>
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Desktop Navigation Links with Smooth Gliding Capsule Dock */}
          <nav 
            ref={navContainerRef}
            className={`hidden lg:flex items-center gap-0.5 xl:gap-1 relative p-1.5 rounded-full border transition-all duration-300 ${
              isDark
                ? 'bg-[#0b1120]/80 border-slate-800/80 shadow-lg shadow-black/40 backdrop-blur-xl'
                : 'bg-white/85 border-slate-200/90 shadow-md backdrop-blur-xl'
            }`} 
            aria-label="Main Navigation"
          >
            {/* Smooth Gliding Active Indicator Capsule */}
            <div
              className={`absolute top-1.5 bottom-1.5 rounded-full pointer-events-none z-0 border transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isDark
                  ? 'border-sky-400 bg-gradient-to-r from-sky-500/25 via-sky-500/15 to-blue-600/20 shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                  : 'border-sky-500 bg-sky-100/90 shadow-[0_0_10px_rgba(14,165,233,0.25)]'
              }`}
              style={{
                transform: `translateX(${gliderStyle.left}px)`,
                width: `${gliderStyle.width}px`,
                opacity: gliderStyle.opacity,
                left: 0
              }}
            />

            {navItems.map((item) => {
              const itemKey = item.href.substring(1);
              const isActive = activeSection === itemKey;
              return (
                <a
                  key={item.href}
                  ref={(el) => (navItemsRef.current[itemKey] = el)}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 relative z-10 ${
                    isActive
                      ? isDark
                        ? 'text-sky-300 font-semibold'
                        : 'text-sky-700 font-semibold'
                      : isDark
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items: Resume & Let's Connect CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white hover:border-slate-600 shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Resume</span>
            </button>

            {/* Let's Connect Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700' 
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-18 sm:top-20 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className={`w-full max-w-sm ml-auto h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l transition-transform duration-300 ${
              isDark 
                ? 'bg-[#0d1424] border-slate-800 text-slate-100' 
                : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">Navigation</span>
                <span className="text-xs text-sky-400 font-mono">Gopinath S • Portfolio</span>
              </div>

              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? isDark
                            ? 'text-sky-400 bg-sky-950/50 border border-sky-800/40'
                            : 'text-sky-600 bg-sky-50 border border-sky-200'
                          : isDark
                            ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-md shadow-sky-500/20 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-slate-200 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 active:scale-98"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View & Download Resume</span>
              </button>

              <a
                href={portfolioData.personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium border ${
                  isDark
                    ? 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                    : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
