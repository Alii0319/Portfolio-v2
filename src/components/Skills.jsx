import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Server, Database, Terminal, Cpu, Monitor, Zap, Box, Boxes, 
  Activity, GitBranch, Globe, Settings, Sliders, Table, 
  Binary, Search, Paintbrush, RefreshCw, Route, Brain, TrendingUp, 
  BarChart3, LineChart, Cloud, MessageSquare, Eye 
} from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="text-cyan-glow animate-pulse-slow" size={24} />,
      desc: 'Architecting robust, secure API layers, asynchronous task routing, and scalable services.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'hover:border-cyan-glow/30 hover:bg-cyan-glow/[0.01]',
      accentColor: 'text-cyan-glow',
      pillHoverClass: 'hover:border-cyan-glow/30 hover:bg-cyan-glow/5',
      skills: [
        { name: 'Python', icon: <Code size={20} /> },
        { name: 'Django', icon: <Server size={20} /> },
        { name: 'Django REST (DRF)', icon: <Cpu size={20} /> },
        { name: 'REST APIs', icon: <Globe size={20} /> },
        { name: 'CRUD Systems', icon: <Settings size={20} /> },
        { name: 'Gunicorn', icon: <Zap size={20} /> },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: <Terminal className="text-emerald-400" size={24} />,
      desc: 'Container orchestrations, deployment pipelines, and operational environment automation.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'hover:border-emerald-400/30 hover:bg-emerald-400/[0.01]',
      accentColor: 'text-emerald-400',
      pillHoverClass: 'hover:border-emerald-500/30 hover:bg-emerald-500/5',
      skills: [
        { name: 'Docker', icon: <Box size={20} /> },
        { name: 'Docker Compose', icon: <Boxes size={20} /> },
        { name: 'AWS EC2', icon: <Cloud size={20} /> },
        { name: 'Celery Workers', icon: <Activity size={20} /> },
        { name: 'Render Deploy', icon: <Globe size={20} /> },
        { name: 'Railway Deploy', icon: <Zap size={20} /> },
        { name: 'Git / GitHub', icon: <GitBranch size={20} /> },
        { name: 'Linux Systems', icon: <Terminal size={20} /> },
        { name: 'Vercel Deploy', icon: <Globe size={20} /> },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Caching',
      icon: <Database className="text-indigo-400" size={24} />,
      desc: 'Relational design, high reliability models, query optimization, and fast caching layers.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'hover:border-indigo-400/30 hover:bg-indigo-400/[0.01]',
      accentColor: 'text-indigo-400',
      pillHoverClass: 'hover:border-indigo-400/30 hover:bg-indigo-400/5',
      skills: [
        { name: 'PostgreSQL', icon: <Database size={20} /> },
        { name: 'MySQL', icon: <Database size={20} /> },
        { name: 'Redis Cache', icon: <Zap size={20} /> },
        { name: 'MongoDB', icon: <Database size={20} /> },
        { name: 'SQLite', icon: <Database size={20} /> },
        { name: 'Oracle SQL', icon: <Database size={20} /> },
        { name: 'DB Indexing', icon: <Sliders size={20} /> },
        { name: 'SQL Queries', icon: <Code size={20} /> },
      ],
    },
    {
      id: 'ml',
      title: 'Machine Learning & Data',
      icon: <Cpu className="text-purple-glow" size={24} />,
      desc: 'End-to-end training pipelines, scaling data imbalances, and classification benchmarks.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'hover:border-purple-glow/30 hover:bg-purple-glow/[0.01]',
      accentColor: 'text-purple-glow',
      pillHoverClass: 'hover:border-purple-glow/30 hover:bg-purple-glow/5',
      skills: [
        { name: 'TensorFlow', icon: <Cpu size={20} /> },
        { name: 'scikit-learn', icon: <Brain size={20} /> },
        { name: 'XGBoost', icon: <TrendingUp size={20} /> },
        { name: 'Computer Vision', icon: <Eye size={20} /> },
        { name: 'NLP', icon: <MessageSquare size={20} /> },
        { name: 'SMOTE Resampling', icon: <Sliders size={20} /> },
        { name: 'Model Eval', icon: <BarChart3 size={20} /> },
        { name: 'Feature Eng', icon: <Settings size={20} /> },
        { name: 'pandas', icon: <Table size={20} /> },
        { name: 'NumPy', icon: <Binary size={20} /> },
        { name: 'Matplotlib', icon: <LineChart size={20} /> },
        { name: 'EDA', icon: <Search size={20} /> },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Monitor className="text-indigo-glow" size={24} />,
      desc: 'Responsive user interfaces consuming decoupled API servers and real-time state metrics.',
      gridClass: 'md:col-span-12 lg:col-span-12',
      borderStyle: 'hover:border-indigo-glow/30 hover:bg-indigo-glow/[0.01]',
      accentColor: 'text-indigo-glow',
      pillHoverClass: 'hover:border-indigo-glow/30 hover:bg-indigo-glow/5',
      skills: [
        { name: 'React 19', icon: <Cpu size={20} /> },
        { name: 'Vite Bundler', icon: <Zap size={20} /> },
        { name: 'TailwindCSS', icon: <Paintbrush size={20} /> },
        { name: 'Axios Client', icon: <RefreshCw size={20} /> },
        { name: 'React Router', icon: <Route size={20} /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 my-8">
      
      {/* Section Title */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-indigo-glow uppercase mb-3">&lt;technical_arsenal /&gt;</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Core Technical Skills</h3>
        <p className="text-gray-400 mt-2 max-w-2xl text-base">
          A mathematically aligned, categorized breakdown of my capabilities across backend logic, container deployments, database structures, and client UI.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            className={`glass-card p-6 rounded-2xl border border-white/5 transition-all duration-300 flex flex-col justify-between ${category.gridClass} ${category.borderStyle}`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shadow-inner">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white">{category.title}</h4>
              </div>

              {/* Card Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {category.desc}
              </p>
            </div>

            {/* 2026 Sleek Flex-wrapped Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group/skill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/[0.01] dark:bg-white/[0.02] border border-white/5 transition-all duration-200 cursor-default ${category.pillHoverClass}`}
                >
                  <span className={`text-gray-500 transition-colors duration-200 group-hover/skill:${category.accentColor}`}>
                    {React.cloneElement(skill.icon, { size: 14, className: 'transition-colors' })}
                  </span>
                  <span className="text-xs font-mono text-gray-400 group-hover/skill:text-white transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
