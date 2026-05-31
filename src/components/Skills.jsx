import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Terminal, Cpu, Monitor, ChevronRight } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code className="text-amber-400" size={24} />,
      desc: 'Foundation scripts and core database queries',
      skills: ['Python', 'SQL'],
      gridClass: 'md:col-span-4 lg:col-span-4',
      borderStyle: 'hover:border-amber-400/30 hover:shadow-amber-400/5',
      accentColor: 'text-amber-400',
    },
    {
      id: 'backend',
      title: 'Backend Architecture',
      icon: <Server className="text-cyan-glow" size={24} />,
      desc: 'Architecting robust, secure API layers and scalable systems',
      skills: ['Django', 'Django REST Framework (DRF)', 'REST APIs', 'CRUD systems'],
      gridClass: 'md:col-span-8 lg:col-span-8',
      borderStyle: 'glow-cyan',
      accentColor: 'text-cyan-glow',
    },
    {
      id: 'databases',
      title: 'Databases & Querying',
      icon: <Database className="text-indigo-400" size={24} />,
      desc: 'Relational design, indexing, and high reliability models',
      skills: ['PostgreSQL', 'SQLite', 'Oracle SQL'],
      gridClass: 'md:col-span-6 lg:col-span-5',
      borderStyle: 'hover:border-indigo-400/30 hover:shadow-indigo-400/5',
      accentColor: 'text-indigo-400',
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: <Terminal className="text-cyan-glow" size={24} />,
      desc: 'Container orchestrations and asynchronous backend task routing',
      skills: ['Docker', 'Docker Compose', 'Redis Cache', 'Celery Workers', 'Gunicorn', 'Git / GitHub'],
      gridClass: 'md:col-span-6 lg:col-span-7',
      borderStyle: 'glow-cyan',
      accentColor: 'text-cyan-glow',
    },
    {
      id: 'ml',
      title: 'Machine Learning & Data',
      icon: <Cpu className="text-purple-glow" size={24} />,
      desc: 'End-to-end training pipelines, scaling data imbalances, and classification benchmarks',
      skills: [
        'scikit-learn',
        'XGBoost Classifier',
        'SMOTE Resampling',
        'Model Evaluation',
        'Feature Engineering',
        'pandas',
        'NumPy',
        'Matplotlib',
        'EDA'
      ],
      gridClass: 'md:col-span-8 lg:col-span-8',
      borderStyle: 'glow-purple',
      accentColor: 'text-purple-glow',
    },
    {
      id: 'frontend',
      title: 'Frontend Frameworks',
      icon: <Monitor className="text-indigo-glow" size={24} />,
      desc: 'Responsive user interfaces consuming decoupled API servers',
      skills: ['React 19', 'Vite Bundler', 'TailwindCSS', 'Axios Client', 'React Router'],
      gridClass: 'md:col-span-4 lg:col-span-4',
      borderStyle: 'hover:border-indigo-glow/30 hover:shadow-indigo-glow/5',
      accentColor: 'text-indigo-glow',
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Title */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-indigo-glow uppercase mb-3">&lt;technical_arsenal /&gt;</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Core Technical Skills</h3>
        <p className="text-gray-400 mt-2 max-w-2xl text-base">
          A structured layout of my capabilities in data engineering, container architectures, REST endpoints, and client layouts.
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

            {/* Badges Layout */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 text-xs font-mono text-gray-300 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
