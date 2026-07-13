import { Briefcase, GraduationCap, Award, Languages, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Backend Developer Intern',
      company: 'Enigmatix',
      location: 'Bahawalpur, Pakistan',
      duration: '6 Months (On-site)',
      bullets: [
        'Reduced manual processing time by 30% by engineering 5+ Django REST API modules and CRUD systems using Python, SQLite, and Oracle.',
        'Improved database query performance by 25% by designing and optimizing Django ORM models, enhancing backend data reliability and response speed.',
        'Cut post-deployment defects by 20% by leading systematic API debugging and enforcing Git/GitHub version control best practices.',
        'Designed and maintained database models to support scalable backend features and cleaner application logic.'
      ],
      metrics: [
        { label: 'Manual Processing', value: '-30%' },
        { label: 'Query Performance', value: '+25%' },
        { label: 'Post-Deploy Defects', value: '-20%' }
      ]
    }
  ];

  const education = {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'The Islamia University of Bahawalpur',
    semester: '6th Semester',
    cgpa: '3.68 / 4.00',
    focus: [
      'Machine Learning Pipelines',
      'Backend Architecture & design',
      'REST APIs Development',
      'Database Design & ORM',
      'Software Engineering Fundamentals'
    ]
  };

  const certifications = [
    'IBM Machine Learning with Python',
    'IBM Data Analysis with Python',
    'IBM Exploratory Data Analysis for ML',
    'IBM Databases and SQL for Data Science',
    'IBM Statistics for Data Science',
    "DeepLearning.AI's AI For Everyone"
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-indigo-glow uppercase mb-3">&lt;career_pathway /&gt;</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Experience & Education</h3>
        <p className="text-gray-400 mt-2 max-w-xl">
          Timeline mapping my professional experience in backend environments alongside my academic foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side - Professional Experience (8/12 grid) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Briefcase size={20} />
            </div>
            <h4 className="text-xl font-bold text-white">Work Experience</h4>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-y-1 before:left-3.5 before:w-[1px] before:bg-black/10 dark:before:bg-white/10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-10 group">
                
                {/* Timeline node dot */}
                <div className="absolute left-[9px] top-3.5 w-3 h-3 rounded-full bg-indigo-glow border border-midnight group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(99,102,241,0.3)]" />

                {/* Experience Card */}
                <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 hover:border-indigo-glow/20 transition-all duration-300">
                  
                  {/* Header info */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h5 className="text-lg font-bold text-white">{exp.role}</h5>
                      <span className="text-sm text-indigo-glow font-medium">{exp.company}</span>
                    </div>

                    <div className="flex flex-col items-end text-xs font-mono text-gray-500 gap-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-3 bg-black/5 dark:bg-black/20 p-3.5 rounded-xl border border-white/5">
                    {exp.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="block text-lg sm:text-xl font-bold font-mono text-cyan-glow">{metric.value}</span>
                        <span className="text-[10px] text-gray-500 uppercase font-medium">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-4 text-sm text-gray-400">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-cyan-glow shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Education & Certifications (5/12 grid) */}
        <div className="lg:col-span-5 space-y-8 text-left">
          
          {/* Education Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <GraduationCap size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Education</h4>
            </div>

            {/* Education Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 hover:border-purple-glow/20 transition-all duration-300">
              <div>
                <h5 className="text-lg font-bold text-white leading-snug">{education.degree}</h5>
                <span className="text-sm text-purple-glow font-medium">{education.institution}</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> Currently 6th Semester
                </span>
                <span className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/25 text-purple-300 font-bold">
                  CGPA {education.cgpa}
                </span>
              </div>

              <div className="border-t border-white/5 pt-4">
                <span className="text-xs text-gray-500 font-mono block mb-3 uppercase">Academic Focus Areas:</span>
                <div className="flex flex-wrap gap-2">
                  {education.focus.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/20 hover:bg-purple-500/10 text-[11px] text-gray-300 transition-all duration-200 cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Award size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">IBM & AI Certifications</h4>
            </div>

            {/* Certifications Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-3.5 hover:border-amber-400/20 transition-all duration-300">
              <div className="flex flex-col gap-2.5">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-black/[0.01] dark:bg-white/[0.01] hover:bg-amber-500/[0.03] border border-white/5 hover:border-amber-500/20 text-sm text-gray-300 transition-all duration-200 cursor-default group/cert"
                  >
                    <Award size={14} className="text-amber-500 opacity-60 group-hover/cert:opacity-100 transition-opacity shrink-0" />
                    <span className="font-medium leading-tight group-hover/cert:text-white transition-colors">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Languages size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Languages</h4>
            </div>

            {/* Languages Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 flex gap-4 hover:border-cyan-glow/20 transition-all duration-300">
              <div className="flex-1 text-center bg-black/5 dark:bg-black/20 hover:bg-cyan-glow/[0.02] p-3 rounded-xl border border-white/5 hover:border-cyan-glow/20 transition-all duration-350 group/lang cursor-default">
                <span className="text-sm font-mono font-bold text-white block group-hover/lang:text-cyan-glow transition-colors">English</span>
                <span className="text-xs text-gray-500 font-medium">Professional</span>
              </div>
              <div className="flex-1 text-center bg-black/5 dark:bg-black/20 hover:bg-cyan-glow/[0.02] p-3 rounded-xl border border-white/5 hover:border-cyan-glow/20 transition-all duration-350 group/lang cursor-default">
                <span className="text-sm font-mono font-bold text-white block group-hover/lang:text-cyan-glow transition-colors">Urdu</span>
                <span className="text-xs text-gray-500 font-medium">Native / Bilingual</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
