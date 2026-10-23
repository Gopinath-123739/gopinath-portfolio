import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Send, 
  ShoppingBag, 
  DollarSign, 
  PieChart, 
  MessageSquare,
  Sparkles,
  Info,
  Calendar,
  Code
} from 'lucide-react';

export const ProjectModal = ({ project, onClose, onShowToast }) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture' | 'interactive' | 'links'

  // Interactive state for Project 1: Personal Finance Advisor simulation
  const [financeTransactions, setFinanceTransactions] = useState([
    { id: 1, item: "Groceries & Supermarket", amount: 85, category: "Food & Dining" },
    { id: 2, item: "Electric & Water Bill", amount: 120, category: "Utilities" },
    { id: 3, item: "Software Subscription", amount: 25, category: "Entertainment" }
  ]);
  const [newExpenseName, setNewExpenseName] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "Hello! I am your AI Finance Advisor. Ask me about your spending breakdown or savings tips!" }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Interactive state for Project 2: Food Stall Cart simulation
  const [foodCart, setFoodCart] = useState([]);
  const foodItems = [
    { id: 101, name: "Gourmet Veg Burger", price: 6.99, category: "Burgers", rating: "4.8" },
    { id: 102, name: "Margherita Flatbread", price: 8.50, category: "Pizza", rating: "4.9" },
    { id: 103, name: "Crispy Herb Fries", price: 3.99, category: "Sides", rating: "4.7" },
    { id: 104, name: "Iced Berry Cooler", price: 4.25, category: "Beverages", rating: "4.9" }
  ];

  // Close modal on Escape key
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Lock body scroll only when modal is actively displayed
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow || '';
    };
  }, [project]);

  if (!project) return null;

  // Finance advisor helpers
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpenseName || !newExpenseAmount) return;
    const amountNum = parseFloat(newExpenseAmount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    // JavaScript logic categorization rule
    let category = "General";
    const nameLower = newExpenseName.toLowerCase();
    if (nameLower.includes("food") || nameLower.includes("burger") || nameLower.includes("grocery") || nameLower.includes("coffee") || nameLower.includes("dinner")) {
      category = "Food & Dining";
    } else if (nameLower.includes("bill") || nameLower.includes("rent") || nameLower.includes("power") || nameLower.includes("wifi")) {
      category = "Utilities";
    } else if (nameLower.includes("movie") || nameLower.includes("game") || nameLower.includes("netflix") || nameLower.includes("spotify")) {
      category = "Entertainment";
    }

    const newTx = {
      id: Date.now(),
      item: newExpenseName,
      amount: amountNum,
      category
    };

    setFinanceTransactions([newTx, ...financeTransactions]);
    setNewExpenseName('');
    setNewExpenseAmount('');
    if (onShowToast) onShowToast(`Added expense classified as [${category}]!`);
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    // Simulated chatbot rule-matching
    setTimeout(() => {
      const q = userText.toLowerCase();
      let botResponse = "You can track your expenses and manage your balance efficiently. Would you like a breakdown of your highest spending category?";
      
      const totalSpent = financeTransactions.reduce((acc, curr) => acc + curr.amount, 0);

      if (q.includes("spent") || q.includes("total") || q.includes("expense")) {
        botResponse = `Based on your logged transactions, your current logged expense total is $${totalSpent.toFixed(2)}.`;
      } else if (q.includes("savings") || q.includes("save") || q.includes("advice")) {
        botResponse = "Advice: Target the 50/30/20 rule — 50% for necessities, 30% for discretionary spending, and 20% directly into high-yield savings!";
      } else if (q.includes("category") || q.includes("food") || q.includes("bills")) {
        botResponse = "Your transactions are automatically analyzed using JavaScript classification rules to keep your budget balanced.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 450);
  };

  // Food Stall helpers
  const handleAddToCart = (item) => {
    setFoodCart(prev => [...prev, item]);
    if (onShowToast) onShowToast(`Added ${item.name} to order!`);
  };

  const totalFoodPrice = foodCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'bg-[#0d1424] border-slate-700/80 text-slate-100 shadow-black/80' 
            : 'bg-white border-slate-200 text-slate-900 shadow-xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/40">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.year}</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-slate-700/60 bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 sm:px-6 pt-3 border-b border-slate-800 bg-slate-950/20 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-sky-400 text-sky-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Features
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-sky-400 text-sky-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture & Workflow
          </button>

          <button
            onClick={() => setActiveTab('interactive')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'interactive'
                ? 'border-sky-400 text-sky-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Demo</span>
          </button>

          <button
            onClick={() => setActiveTab('links')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'links'
                ? 'border-sky-400 text-sky-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Links & Repository
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                  Project Description
                </h3>
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                  Documented Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Engineering Design & Logical Flow</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clean modular structure separating interface presentation from application state and algorithmic processing.
                </p>
              </div>

              <div className="space-y-3">
                {project.architecture.map((arch, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {arch}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE DEMO */}
          {activeTab === 'interactive' && (
            <div className="space-y-6">
              {project.id === 'personal-finance-advisor' ? (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
                    <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-emerald-400" />
                        <span>Interactive Expense Categorizer</span>
                      </span>
                      <span className="text-xs text-sky-400 font-mono">JavaScript-Powered Logic</span>
                    </h4>

                    {/* Quick input form */}
                    <form onSubmit={handleAddExpense} className="flex flex-col sm:flex-row gap-2 mb-4">
                      <input
                        type="text"
                        placeholder="Expense name (e.g. Supermarket Groceries, Electric Bill)"
                        value={newExpenseName}
                        onChange={(e) => setNewExpenseName(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                      <input
                        type="number"
                        placeholder="Amount ($)"
                        value={newExpenseAmount}
                        onChange={(e) => setNewExpenseAmount(e.target.value)}
                        className="w-full sm:w-28 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs sm:text-sm transition-colors shrink-0"
                      >
                        Add & Categorize
                      </button>
                    </form>

                    {/* Transactions list */}
                    <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                      {financeTransactions.map((tx) => (
                        <div 
                          key={tx.id}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            <span className="font-medium text-slate-200">{tx.item}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                              {tx.category}
                            </span>
                            <span className="font-mono font-semibold text-emerald-400">
                              ${tx.amount.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Chatbot Assistant Sandbox */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
                    <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-sky-400" />
                      <span>Financial Chatbot Interface</span>
                    </h4>

                    {/* Chat Messages */}
                    <div className="space-y-2 h-44 overflow-y-auto p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs mb-3">
                      {chatMessages.map((msg, idx) => (
                        <div 
                          key={idx}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] p-2.5 rounded-xl ${
                              msg.sender === 'user'
                                ? 'bg-sky-600 text-white rounded-br-none'
                                : 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-bl-none'
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat Input */}
                    <form onSubmit={handleSendChat} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Try: 'total spent', 'savings advice', or 'budget tips'..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                      <button
                        type="submit"
                        className="p-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                        title="Send query"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                /* Project 2: Food Stall interactive mockup */
                <div className="space-y-6">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-amber-400" />
                        <span>Food Catalog & Menu Presentation</span>
                      </h4>
                      <span className="text-xs text-emerald-400 font-mono font-bold">
                        Cart: {foodCart.length} item(s) • ${totalFoodPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {foodItems.map((item) => (
                        <div 
                          key={item.id}
                          className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                        >
                          <div>
                            <span className="text-[10px] text-amber-400 font-mono uppercase tracking-wider block">
                              {item.category}
                            </span>
                            <span className="font-semibold text-slate-200 block">
                              {item.name}
                            </span>
                            <span className="text-slate-400 font-mono text-[11px]">
                              ${item.price.toFixed(2)} • ★ {item.rating}
                            </span>
                          </div>

                          <button
                            onClick={() => handleAddToCart(item)}
                            className="px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-[11px] font-semibold transition-colors"
                          >
                            + Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: LINKS & REPOSITORY */}
          {activeTab === 'links' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <Info className="w-4 h-4" />
                  <span>Repository & Deployment Status</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In accordance with the factual guidelines of this portfolio, repository links and live URLs are configurable. If a repository has not been set yet, you can link your GitHub repository anytime in <code className="text-sky-300 bg-slate-950 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* GitHub Action */}
                <div className="p-5 rounded-xl border border-slate-800 bg-slate-900 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-bold text-sm text-slate-200 mb-1">
                      <GithubIcon className="w-4 h-4 text-sky-400" />
                      <span>Source Code Repository</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {project.githubUrl 
                        ? "GitHub repository is linked and verified." 
                        : "Ready to be linked to your GitHub account."}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold"
                      >
                        <span>Open on GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-mono bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800 block text-center">
                        Configurable in portfolioData.js
                      </span>
                    )}
                  </div>
                </div>

                {/* Live Demo Action */}
                <div className="p-5 rounded-xl border border-slate-800 bg-slate-900 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-bold text-sm text-slate-200 mb-1">
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                      <span>Live Deployment</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {project.demoUrl 
                        ? "Live application deployment is active." 
                        : "Ready for your Vercel / GitHub Pages deployment link."}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                      >
                        <span>Open Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-mono bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800 block text-center">
                        Configurable in portfolioData.js
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-t border-slate-800 bg-slate-950/60 text-xs text-slate-400">
          <span className="font-mono">
            Status: <span className="text-emerald-400 font-semibold">{project.status}</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
