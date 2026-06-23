import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Server, Database, Terminal, Cpu, Monitor, Zap, Box, Boxes, 
  Activity, GitBranch, Globe, Settings, Sliders, Table, 
  Binary, Search, Paintbrush, RefreshCw, Route, Brain, TrendingUp, 
  BarChart3, LineChart, ChevronRight, Cloud, MessageSquare, Eye 
} from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="text-cyan-glow animate-pulse-slow" size={24} />,
      desc: 'Architecting robust, secure API layers, asynchronous task routing, and scalable services.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'glow-cyan',
      accentColor: 'text-cyan-glow',
      skills: [
        { name: 'Python', icon: <Code className="text-indigo-400" size={20} /> },
        { name: 'Django', icon: <Server className="text-emerald-400" size={20} /> },
        { name: 'Django REST (DRF)', icon: <Cpu className="text-cyan-400" size={20} /> },
        { name: 'REST APIs', icon: <Globe className="text-blue-400" size={20} /> },
        { name: 'CRUD Systems', icon: <Settings className="text-purple-400" size={20} /> },
        { name: 'Gunicorn', icon: <Zap className="text-amber-400" size={20} /> },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: <Terminal className="text-emerald-400" size={24} />,
      desc: 'Container orchestrations, deployment pipelines, and operational environment automation.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'hover:border-emerald-400/30 hover:shadow-emerald-400/5',
      accentColor: 'text-emerald-400',
      skills: [
        { name: 'Docker', icon: <Box className="text-blue-400" size={20} /> },
        { name: 'Docker Compose', icon: <Boxes className="text-cyan-400" size={20} /> },
        { name: 'AWS EC2', icon: <Cloud className="text-amber-500" size={20} /> },
        { name: 'Celery Workers', icon: <Activity className="text-emerald-400" size={20} /> },
        { name: 'Render Deploy', icon: <Globe className="text-teal-400" size={20} /> },
        { name: 'Railway Deploy', icon: <Zap className="text-purple-400" size={20} /> },
        { name: 'Git / GitHub', icon: <GitBranch className="text-rose-400" size={20} /> },
        { name: 'Linux Systems', icon: <Terminal className="text-gray-400" size={20} /> },
        { name: 'Vercel Deploy', icon: <Globe className="text-indigo-400" size={20} /> },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Caching',
      icon: <Database className="text-indigo-400" size={24} />,
      desc: 'Relational design, high reliability models, query optimization, and fast caching layers.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'hover:border-indigo-400/30 hover:shadow-indigo-400/5',
      accentColor: 'text-indigo-400',
      skills: [
        { name: 'PostgreSQL', icon: <Database className="text-indigo-400" size={20} /> },
        { name: 'MySQL', icon: <Database className="text-blue-500" size={20} /> },
        { name: 'Redis Cache', icon: <Zap className="text-rose-500" size={20} /> },
        { name: 'MongoDB', icon: <Database className="text-emerald-500" size={20} /> },
        { name: 'SQLite', icon: <Database className="text-blue-300" size={20} /> },
        { name: 'Oracle SQL', icon: <Database className="text-red-400" size={20} /> },
        { name: 'DB Indexing', icon: <Sliders className="text-amber-400" size={20} /> },
        { name: 'SQL Queries', icon: <Code className="text-cyan-400" size={20} /> },
      ],
    },
    {
      id: 'ml',
      title: 'Machine Learning & Data',
      icon: <Cpu className="text-purple-glow" size={24} />,
      desc: 'End-to-end training pipelines, scaling data imbalances, and classification benchmarks.',
      gridClass: 'md:col-span-6 lg:col-span-6',
      borderStyle: 'glow-purple',
      accentColor: 'text-purple-glow',
      skills: [
        { name: 'TensorFlow', icon: <Cpu className="text-orange-500" size={20} /> },
        { name: 'scikit-learn', icon: <Brain className="text-purple-400" size={20} /> },
        { name: 'XGBoost', icon: <TrendingUp className="text-emerald-400" size={20} /> },
        { name: 'Computer Vision', icon: <Eye className="text-indigo-400" size={20} /> },
        { name: 'NLP', icon: <MessageSquare className="text-cyan-400" size={20} /> },
        { name: 'SMOTE Resampling', icon: <Sliders className="text-amber-400" size={20} /> },
        { name: 'Model Eval', icon: <BarChart3 className="text-pink-400" size={20} /> },
        { name: 'Feature Eng', icon: <Settings className="text-blue-400" size={20} /> },
        { name: 'pandas', icon: <Table className="text-cyan-400" size={20} /> },
        { name: 'NumPy', icon: <Binary className="text-indigo-400" size={20} /> },
        { name: 'Matplotlib', icon: <LineChart className="text-purple-400" size={20} /> },
        { name: 'EDA', icon: <Search className="text-teal-400" size={20} /> },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Monitor className="text-indigo-glow" size={24} />,
      desc: 'Responsive user interfaces consuming decoupled API servers and real-time state metrics.',
      gridClass: 'md:col-span-12 lg:col-span-12',
      borderStyle: 'hover:border-indigo-glow/30 hover:shadow-indigo-glow/5',
      accentColor: 'text-indigo-glow',
      skills: [
        { name: 'React 19', icon: <Cpu className="text-cyan-400" size={20} /> },
        { name: 'Vite Bundler', icon: <Zap className="text-yellow-400" size={20} /> },
        { name: 'TailwindCSS', icon: <Paintbrush className="text-teal-400" size={20} /> },
        { name: 'Axios Client', icon: <RefreshCw className="text-indigo-400" size={20} /> },
        { name: 'React Router', icon: <Route className="text-rose-400" size={20} /> },
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
            className={`glass-card p-6 rounded-2xl border border-white/5 transition-all duration-300 flex flex-col justify-start ${category.gridClass} ${category.borderStyle}`}
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

            {/* Structured Tile Grid for Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center w-full mt-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center text-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-200 h-full min-h-[96px]"
                >
                  <div className="mb-2 p-2 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-300 font-semibold leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
