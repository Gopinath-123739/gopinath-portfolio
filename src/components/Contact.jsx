import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { LinkedinIcon, GithubIcon } from './Icons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Sparkles, 
  Info, 
  AlertCircle,
  Loader2,
  CheckCircle2
} from 'lucide-react';

export const Contact = ({ onShowToast }) => {
  const { isDark } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formNotice, setFormNotice] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    if (onShowToast) onShowToast("Phone number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please write your message.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);
    setFormNotice(null);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/vishalgopi02@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          message: formData.message,
          _template: "table"
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormNotice("Thank you! Your message has been sent directly to Gopinath's email inbox (vishalgopi02@gmail.com).");
        if (onShowToast) onShowToast("Message sent directly to Gopinath's inbox!");
      } else {
        throw new Error(data.message || "Failed to deliver message");
      }
    } catch (err) {
      // Graceful fallback to mailto if direct send is offline or blocked
      const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
      const bodyEncoded = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n--\nSent via Gopinath S Portfolio`
      );
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
      setSubmitStatus('error');
      setFormNotice(
        "Direct connection was unavailable, so your message draft was opened in your email application."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact & Opportunities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-4" />
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Channels & Socials (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0d1424] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 hover:text-sky-400 transition-colors break-all"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0d1424] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                      className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 hover:text-emerald-400 transition-colors font-mono"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0d1424] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                    Location & Mobility
                  </span>
                  <span className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0d1424] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-4">
                Professional Profiles
              </span>

              <div className="space-y-3">
                <a
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-sky-500/40 hover:bg-slate-900 transition-all text-sm group"
                >
                  <span className="flex items-center gap-2.5 font-medium text-slate-200 group-hover:text-sky-400">
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
                </a>

                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-sky-500/40 hover:bg-slate-900 transition-all text-sm group"
                >
                  <span className="flex items-center gap-2.5 font-medium text-slate-200 group-hover:text-sky-400">
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span>GitHub Profile</span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0d1424] border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-sky-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill out the form below to deliver your message directly to Gopinath's inbox.
                </p>
              </div>

              {/* Notice banner if submitted */}
              {formNotice && (
                <div className={`mb-6 p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm animate-fade-in ${
                  submitStatus === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : 'border-sky-500/30 bg-sky-500/10 text-sky-300'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  ) : (
                    <Info className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                  )}
                  <p>{formNotice}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins (Recruiter)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                        formErrors.name 
                          ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500' 
                          : isDark
                            ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-sky-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                        formErrors.email 
                          ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500' 
                          : isDark
                            ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-sky-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject / Role Title <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Junior Java Full Stack Developer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                      formErrors.subject 
                        ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500' 
                        : isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-sky-400'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Body */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe the opportunity, interview details, or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none resize-none ${
                      formErrors.message 
                        ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500' 
                        : isDark
                          ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-sky-400'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-md shadow-sky-500/20 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Delivery Notice */}
                <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                  Messages submitted through this form are delivered directly to <strong className="text-slate-300 font-mono">vishalgopi02@gmail.com</strong>.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
