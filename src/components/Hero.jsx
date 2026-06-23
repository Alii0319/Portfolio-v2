import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Download, ArrowRight, Play, Server, Cpu, Database } from 'lucide-react';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('backend'); // 'backend' | 'ml'
  const [terminalOutput, setTerminalOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);

  const roles = [
    'Backend (Django / DRF)',
    'DevOps & Infrastructure',
    'Machine Learning Engineer',
    'Full-Stack Developer'
  ];

  // Typewriter effect
  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before delete
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const backendCode = `from django.core.cache import cache
from rest_framework.views import APIView
from rest_framework.response import Response
from .tasks import process_click_analytics

class URLRedirectView(APIView):
    """
    High-Performance URL Redirector
    Achieving <200ms latency with Redis Caching
    """
    def get(self, request, short_code):
        # 1. Query Cache (O(1))
        target_url = cache.get(f"url:{short_code}")
        
        if not target_url:
            # 2. Fallback to Database
            url_obj = get_object_or_404(Link, code=short_code)
            target_url = url_obj.original_url
            cache.set(f"url:{short_code}", target_url, timeout=3600)
            
        # 3. Offload Analytics async via Celery
        process_click_analytics.delay(
            short_code=short_code,
            ip=request.META.get('REMOTE_ADDR'),
            ua=request.META.get('HTTP_USER_AGENT')
        )
        return Response({"redirect": target_url}, status=302)`;

  const mlCode = `import pandas as pd
from xgboost import XGBClassifier
from imblearn.over_sampling import SMOTE
from sklearn.model_selection import train_test_split

def train_churn_model(data_path):
    df = pd.read_csv(data_path)
    
    # 1. Feature Selection & Target Extraction
    X = df.drop(['CustomerId', 'Exited'], axis=1)
    y = df['Exited']
    
    # 2. Address Imbalance with SMOTE
    smote = SMOTE(random_state=42)
    X_res, y_res = smote.fit_resample(X, y)
    
    # 3. Fit XGBoost with Fine-Tuning
    X_train, X_test, y_train, y_test = train_test_split(
        X_res, y_res, test_size=0.2, random_state=42
    )
    
    model = XGBClassifier(
        n_estimators=1000,
        max_depth=6,
        learning_rate=0.03,
        subsample=0.8
    )
    model.fit(X_train, y_train)
    
    # Test accuracy: 86.71% | Train-Test gap: 1.41%
    return model, model.score(X_test, y_test)`;

  const runSimulation = () => {
    setIsCompiling(true);
    setTerminalOutput('Initializing execution environment...\n');
    
    setTimeout(() => {
      if (activeTab === 'backend') {
        setTerminalOutput(prev => prev + 'Connecting to Redis Cache... OK\n');
        setTimeout(() => {
          setTerminalOutput(prev => prev + 'Celery Broker connected... Running analytics task.\n');
          setTimeout(() => {
            setTerminalOutput(prev => prev + 'Response latency: 142ms. Status code: 302 Redirect\nExecution successful.\n');
            setIsCompiling(false);
          }, 600);
        }, 600);
      } else {
        setTerminalOutput(prev => prev + 'Applying SMOTE preprocessing for class imbalance... OK\n');
        setTimeout(() => {
          setTerminalOutput(prev => prev + 'Training XGBoost Classifier (n_estimators=1000)... \n');
          setTimeout(() => {
            setTerminalOutput(prev => prev + 'Metric evaluation: Test Acc = 86.71%, ROC-AUC = 0.85\nExecution completed.\n');
            setIsCompiling(false);
          }, 800);
        }, 600);
      }
    }, 500);
  };

  useEffect(() => {
    setTerminalOutput('');
  }, [activeTab]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getHighlightedCode = () => {
    const rawCode = activeTab === 'backend' ? backendCode : mlCode;
    
    // Escape standard XML tags
    let html = rawCode
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 1. Docstrings
    html = html.replace(/(&quot;&quot;&quot;[\s\S]*?&quot;&quot;&quot;|"""[\s\S]*?""")/g, '<span class="text-gray-500 italic font-sans">$1</span>');

    // 2. Comments
    html = html.replace(/(#.*)/g, '<span class="text-gray-500 italic">$1</span>');

    // 3. Strings
    html = html.replace(/(?<!class=")(?<!text-)(["\'][^"\'\n]*["\'])/g, '<span class="text-emerald-400 font-sans">$1</span>');

    // 4. Function/Class declarations
    html = html.replace(/\b(def|class)\s+(\w+)/g, '<span class="text-rose-400">$1</span> <span class="text-cyan-glow font-bold">$2</span>');

    // 5. Decorators
    html = html.replace(/(@\w+)/g, '<span class="text-cyan-glow font-medium">$1</span>');

    // 6. Keywords
    const keywords = ['from', 'import', 'return', 'if', 'not', 'in', 'and', 'or', 'as', 'for', 'else', 'try', 'except', 'class', 'def'];
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b(${kw})\\b(?!")`, 'g');
      html = html.replace(regex, '<span class="text-rose-400">$1</span>');
    });

    // 7. Special items
    html = html.replace(/\b(self)\b/g, '<span class="text-amber-400/80 italic">$1</span>');
    html = html.replace(/\b(Response|APIView|XGBClassifier|SMOTE|Link|cache)\b/g, '<span class="text-purple-glow font-semibold">$1</span>');
    
    // 8. Numbers
    html = html.replace(/\b(\d+)\b(?!>)/g, '<span class="text-amber-300">$1</span>');

    return { __html: html };
  };

  return (
    <section id="hero" className="min-h-screen pt-28 flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Left Content - Splitting into Headshot & Bio */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Profile Picture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-4 flex flex-col items-center md:items-start mt-0"
          >
            {/* Stunning glow-border wrapper */}
            <div className="relative group w-[180px] sm:w-[200px] md:w-full aspect-square">
              {/* Pulsing Gradient Glow Behind Card */}
              <div className="absolute inset-[-3px] bg-gradient-to-tr from-indigo-glow via-purple-glow to-cyan-glow rounded-full blur-[8px] opacity-60 group-hover:opacity-100 group-hover:blur-[12px] transition-all duration-500 animate-pulse" />
              
              {/* Inner Card Container */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-slate-dark/30 backdrop-blur-md flex items-center justify-center cursor-pointer"
              >
                {/* Photo Element */}
                <img
                  src="/ali_raza.jpg"
                  alt="Ali Raza"
                  className="w-full h-full object-cover profile-pic"
                />
                
                {/* Glassmorphism Glare/Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                
                {/* Cool Deep-Slate Tint Overlay (blends image into midnight backdrop) */}
                <div className="absolute inset-0 profile-overlay pointer-events-none" />
              </motion.div>
            </div>

            {/* Live Opportunities Status Indicator Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-semibold tracking-wide uppercase mt-4 shadow-lg shadow-emerald-500/5 hover:bg-emerald-500/20 transition-all duration-300 w-max"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Opportunities</span>
            </motion.div>
          </motion.div>

          {/* Bio text column */}
          <div className="md:col-span-8 flex flex-col justify-center text-left">
            {/* Animated Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-glow/20 bg-indigo-glow/5 text-indigo-glow text-sm font-mono font-medium max-w-max mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-glow animate-pulse" />
              <span>Ready for Intern & Entry-Level Roles</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4"
            >
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-indigo-glow to-cyan-400 bg-clip-text text-transparent font-extrabold">Ali Raza</span>
            </motion.h1>

            {/* Subtitle / Typewriter */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-mono text-gray-300 font-semibold mb-6 flex items-center h-8"
            >
              <span className="text-gray-400 mr-2">&gt;</span>
              <span>{currentText}</span>
              <span className="w-[3px] h-6 bg-indigo-glow ml-1.5 animate-pulse" />
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8"
            >
              Architect of high-performance containerized APIs, real-time analytics engines, and robust, balanced machine learning models. Bridging the gap between scalable Python backend codebases and operational container pipelines.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {/* Download Resume - High-visibility Gradient CTA */}
              <a
                href="/Ali_Raza_Backend.pdf"
                download="Ali_Raza_Backend.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-glow to-purple-glow hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-350 hover:scale-[1.02]"
              >
                <Download size={18} />
                Download Resume
              </a>

              {/* Let's Connect - Secondary Outline scroll CTA */}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium border border-white/10 hover:border-white/20 transition-all duration-350 hover:scale-[1.02]"
              >
                Let's Connect
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Dynamic Stats Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 mt-10 max-w-lg"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-glow glow-text-cyan flex items-center gap-1.5">
                  <Server size={18} className="text-cyan-glow" /> 10k+
                </span>
                <span className="text-[10px] text-gray-500 font-medium uppercase mt-1 leading-tight">Concurrency load</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-purple-glow glow-text-purple flex items-center gap-1.5">
                  <Cpu size={18} className="text-purple-glow" /> 86.7%
                </span>
                <span className="text-[10px] text-gray-500 font-medium uppercase mt-1 leading-tight">Model accuracy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-indigo-glow flex items-center gap-1.5" style={{ textShadow: '0 0 10px rgba(99,102,241,0.5)' }}>
                  <Database size={18} className="text-indigo-glow" /> &lt;200ms
                </span>
                <span className="text-[10px] text-gray-500 font-medium uppercase mt-1 leading-tight">API Latency</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Hero Right Content - Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative w-full"
        >
          {/* Accent decoration rings */}
          <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl blur-3xl opacity-30 -z-10" />

          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col w-full h-[480px]">
            {/* Terminal Top Window Bar */}
            <div className="bg-slate-dark/80 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Terminal Code Tab Selectors */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all duration-300 ${
                    activeTab === 'backend'
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  analytics_views.py
                </button>
                <button
                  onClick={() => setActiveTab('ml')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all duration-300 ${
                    activeTab === 'ml'
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  churn_model.py
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <Terminal size={14} />
                <span>bash</span>
              </div>
            </div>

            {/* Terminal File Editor Body */}
            <div className="p-4 flex-1 overflow-auto font-mono text-[11px] leading-[1.4] text-left select-none relative bg-midnight/40">
              <pre className="text-gray-300" dangerouslySetInnerHTML={getHighlightedCode()} />

              {/* Run Terminal Code Execution Area */}
              <AnimatePresence>
                {terminalOutput && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 pt-4 border-t border-white/5 text-gray-400 bg-black/40 p-2.5 rounded-lg border border-white/5 font-mono text-[10px] min-h-[90px]"
                  >
                    <div className="text-[10px] text-indigo-400 mb-1">$ python runner.py</div>
                    <pre className="whitespace-pre-wrap flex items-center flex-wrap">
                      {terminalOutput}
                      {!isCompiling && <span className="inline-block w-1.5 h-3 bg-cyan-glow ml-1 animate-pulse" />}
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Run Button Footer */}
            <div className="bg-slate-dark/70 p-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 font-mono">
                Line Count: {activeTab === 'backend' ? '25' : '32'}
              </span>
              
              <button
                onClick={runSimulation}
                disabled={isCompiling}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
                  activeTab === 'backend'
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20'
                    : 'bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20'
                } disabled:opacity-50`}
              >
                <Play size={12} className={isCompiling ? 'animate-spin' : ''} />
                {isCompiling ? 'Running...' : 'Execute Script'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
