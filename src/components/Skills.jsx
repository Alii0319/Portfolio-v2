const skillGroups = [
  {
    title: 'Backend & Distributed Systems',
    description: 'API architecture, authentication, real-time channels, and background task queues.',
    skills: ['Python', 'Django 5', 'Django REST Framework', 'REST APIs', 'Channels', 'WebSockets', 'JWT', 'Gunicorn', 'Celery', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'DevOps, GitOps & Cloud',
    description: 'Container orchestration, declarative GitOps delivery, security scans, and telemetry.',
    skills: ['Kubernetes', 'Helm', 'ArgoCD', 'GitHub Actions', 'Docker', 'Docker Compose', 'Prometheus', 'Grafana', 'Trivy', 'Nginx', 'Linux'],
  },
  {
    title: 'Automation & Web Scraping',
    description: 'Scheduled pipelines, resilient browser automation, and high-cadence data extraction.',
    skills: ['Playwright', 'BeautifulSoup', 'Celery Beat', 'Distributed Scraping', 'Dynamic DOM Extraction', 'Scheduled Workloads'],
  },
  {
    title: 'Frontend & Interfaces',
    description: 'Responsive client applications, state management, and real-time visualization.',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Axios Interceptors', 'React Router', 'Recharts'],
  },
  {
    title: 'Machine Learning & Data',
    description: 'Supervised and unsupervised models, class balancing, feature engineering, and evaluation.',
    skills: ['scikit-learn', 'XGBoost', 'Isolation Forest', 'SMOTE', 'pandas', 'NumPy', 'Matplotlib', 'EDA', 'Model Evaluation'],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational schemas, memory caching, query optimization, and transaction safety.',
    skills: ['PostgreSQL', 'Redis', 'Oracle SQL', 'SQLite', 'MySQL', 'Django ORM', 'Query Optimization'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-18 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="section-heading">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">The stack behind the work.</h2>
          <p className="section-intro">
            Technologies I use across backend systems, interfaces, data workflows, and deployment, grouped by their role in the system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <div className="flex items-center justify-between">
                <span className="h-1 w-8 rounded-full bg-accent" aria-hidden="true" />
                <span className="size-2 rounded-full bg-accent/60" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 leading-7 text-gray-400">{group.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tech-tag">{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
