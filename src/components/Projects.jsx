import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Cpu, Layers } from 'lucide-react';
import { Github } from './BrandIcons';

export default function Projects() {
  const [filter, setFilter] = useState('all'); // 'all' | 'backend' | 'ml'

  const projects = [
    {
      id: 1,
      title: 'ShortIQ',
      subtitle: 'URL Shortener with Real-Time Analytics',
      category: 'backend',
      tech: ['Django DRF', 'Redis', 'Celery', 'PostgreSQL', 'Docker Compose', 'JWT'],
      codebase: 'https://github.com/Alii0319/ShortIQ',
      metrics: 'Latency <200ms | 10k+ Concurrency',
      details: 'Architected a containerized URL shortening platform with JWT-secured REST APIs and Redis caching. Engineered async Celery workers for real-time click analytics (device, browser, geographic breakdowns) with CSV/PDF export. Achieved <200ms API response times and 10k+ concurrent user capacity via Docker Compose orchestration.',
      glowClass: 'glow-cyan',
      icon: <Server className="text-cyan-glow animate-pulse-slow" size={20} />,
      accentColor: 'from-cyan-500/20 to-teal-500/20',
      badgeColor: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400',
    },
    {
      id: 2,
      title: 'AI Resume Analyzer',
      subtitle: 'Full-Stack ATS Optimization SaaS Platform',
      category: 'backend',
      tech: ['Django DRF', 'React 19', 'PostgreSQL', 'Google Gemini AI', 'scikit-learn', 'PyMuPDF', 'Docker'],
      codebase: 'https://github.com/Alii0319/AI_Resume_Analyzer',
      metrics: 'TF-IDF Similarity Match | Google Gemini API',
      details: 'Built a full-stack ATS optimization platform combining TF-IDF cosine similarity scoring with Google Gemini-powered improvement suggestions. Engineered PDF ingestion via PyMuPDF, matched/missing keyword detection, ReportLab report export, and a token-refresh retry queue in React Axios interceptors. Deployed as decoupled Docker containers.',
      glowClass: 'glow-cyan',
      icon: <Layers className="text-emerald-400" size={20} />,
      accentColor: 'from-emerald-500/20 to-cyan-500/20',
      badgeColor: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400',
    },
    {
      id: 3,
      title: 'Bank Customer Churn Prediction',
      subtitle: 'End-to-End Classification ML Pipeline',
      category: 'ml',
      tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SMOTE', 'Matplotlib'],
      codebase: 'https://github.com/Alii0319/Customer-Churn-Prediction',
      metrics: '86.71% Test Acc | 1.41% Overfitting Gap',
      details: 'Built an end-to-end ML pipeline to predict bank customer churn. Applied SMOTE for class imbalance, engineered features with Column Transformer, and tuned an XGBoost classifier achieving 86.71% test accuracy and ROC-AUC of 0.85 with minimal overfitting (1.41% train-test gap).',
      glowClass: 'glow-purple',
      icon: <Cpu className="text-purple-glow" size={20} />,
      accentColor: 'from-purple-500/20 to-pink-500/20',
      badgeColor: 'border-purple-500/20 bg-purple-500/5 text-purple-400',
    },
    {
      id: 4,
      title: 'Real-Time Financial Anomaly Detection',
      subtitle: 'Unsupervised ML Fraud Ingestion Engine',
      category: 'ml',
      tech: ['Python', 'scikit-learn', 'Isolation Forest', 'PCA', 'Streamlit', 'pandas'],
      codebase: 'https://github.com/Alii0319/Real-Time-Anomaly-Detection',
      metrics: 'Unsupervised | 284,807 Transaction Rows',
      details: 'Built an unsupervised ML pipeline to detect fraudulent credit card transactions (492 frauds / 284,807 transactions) using Isolation Forest without labeled training. Applied RobustScaler and PCA for 2D anomaly visualization. Deployed as a real-time Streamlit dashboard for live inference.',
      glowClass: 'glow-purple',
      icon: <Cpu className="text-pink-400" size={20} />,
      accentColor: 'from-pink-500/20 to-purple-500/20',
      badgeColor: 'border-pink-500/20 bg-pink-500/5 text-pink-400',
    },
    {
      id: 5,
      title: 'Blood Donation Management System',
      subtitle: 'Full-Stack Portal with Django ORM',
      category: 'backend',
      tech: ['Django', 'Python', 'HTML', 'Oracle SQL', 'Django ORM'],
      codebase: 'https://github.com/Alii0319/blood_donation',
      metrics: 'Role-Based Access (RBAC) | Donor Filter',
      details: 'Developed a full-stack Django web application for managing blood donors, requests, and inventory. Implemented donor registration, blood group filtering, request tracking, and role-based access control (RBAC). Integrated Django ORM bindings for relational schemas.',
      glowClass: 'glow-cyan',
      icon: <Server className="text-cyan-400" size={20} />,
      accentColor: 'from-blue-500/20 to-indigo-500/20',
      badgeColor: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400',
    },
    {
      id: 6,
      title: 'Heart Failure Prediction Model',
      subtitle: 'Binary Classification Diagnostics Analysis',
      category: 'ml',
      tech: ['Python', 'scikit-learn', 'pandas', 'Classification', 'Feature Engineering'],
      codebase: null, // No link, we will show a localized indicator
      metrics: 'Precision / Recall Benchmarks',
      details: 'Developed binary classification models on structured healthcare data using feature engineering, hyperparameter tuning, and performance benchmarking (precision, recall, F1-score, ROC-AUC) to identify reliable diagnostic signals for clinical environments.',
      glowClass: 'glow-purple',
      icon: <Cpu className="text-purple-400" size={20} />,
      accentColor: 'from-indigo-500/20 to-purple-500/20',
      badgeColor: 'border-purple-500/20 bg-purple-500/5 text-purple-400',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="text-left">
          <h2 className="text-xs font-mono tracking-widest text-indigo-glow uppercase mb-3">&lt;proven_deployments /&gt;</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Projects</h3>
          <p className="text-gray-400 mt-2 max-w-lg">
            Hover over cards to see specific accents: Cyan/Green for Backend & DevOps; Purple/Indigo for Machine Learning.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center self-start md:self-end bg-slate-dark border border-white/5 p-1 rounded-xl">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-gradient-to-r from-indigo-glow to-purple-glow text-neutral-50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              filter === 'backend'
                ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Backend & DevOps
          </button>
          <button
            onClick={() => setFilter('ml')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              filter === 'ml'
                ? 'bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Machine Learning
          </button>
        </div>
      </div>

      {/* Grid container with framer layout transitions */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className={`glass-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 flex flex-col justify-between ${project.glowClass}`}
            >
              {/* Card Banner Background Gradient */}
              <div className="relative h-28 w-full bg-gradient-to-br from-slate-dark to-slate-card border-b border-white/5 flex items-center justify-between px-6">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.accentColor} opacity-[0.15]`} />
                
                {/* Icon Circle */}
                <div className="relative z-10 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                  {project.icon}
                </div>

                {/* Subtitle Accent Badge */}
                <div className={`relative z-10 px-2.5 py-1 rounded-full border text-[10px] font-mono tracking-wide ${project.badgeColor}`}>
                  {project.category === 'backend' ? 'DevOps_Backend' : 'Machine_Learning'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col text-left">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-glow transition-all">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-gray-500 mb-4">{project.subtitle}</p>

                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {project.details}
                </p>

                {/* Metrics Highlight Badge */}
                <div className="mb-6 p-2.5 rounded-lg bg-black/5 dark:bg-black/20 border border-white/5 text-[11px] font-mono text-gray-300 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.category === 'backend' ? 'bg-cyan-glow' : 'bg-purple-glow'}`} />
                  <span>{project.metrics}</span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400 transition-all duration-200 cursor-default ${
                        project.category === 'backend' 
                          ? 'hover:border-cyan-glow/30 hover:bg-cyan-glow/5 hover:text-cyan-glow' 
                          : 'hover:border-purple-glow/30 hover:bg-purple-glow/5 hover:text-purple-glow'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="px-6 py-4 bg-slate-dark/40 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">Source Code:</span>
                
                {project.codebase ? (
                  <a
                    href={project.codebase}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <span>GitHub</span>
                    <Github size={12} />
                  </a>
                ) : (
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-600 cursor-not-allowed select-none">
                    Proprietary
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
