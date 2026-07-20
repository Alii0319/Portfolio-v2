const skillGroups = [
  {
    title: 'Backend',
    description: 'API design, authentication, validation, and real-time application features.',
    skills: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'JWT', 'Channels', 'WebSockets'],
  },
  {
    title: 'Frontend',
    description: 'Interfaces for consuming APIs, visualizing data, and managing application state.',
    skills: ['TypeScript', 'React', 'Tailwind CSS', 'React Query', 'Axios', 'Recharts', 'Vite'],
  },
  {
    title: 'Automation & delivery',
    description: 'Scheduled workloads, browser automation, containers, and deployment workflows.',
    skills: ['Playwright', 'BeautifulSoup', 'Celery', 'Celery Beat', 'Docker', 'Docker Compose', 'Nginx'],
  },
  {
    title: 'Databases',
    description: 'Relational and document databases, caching, query optimization, and product analytics.',
    skills: ['PostgreSQL', 'Redis', 'MySQL', 'Oracle SQL', 'SQLite', 'MongoDB', 'Django ORM'],
  },
  {
    title: 'Machine learning',
    description: 'Supervised and unsupervised workflows across structured data, computer vision, and language tasks.',
    skills: ['Supervised ML', 'Unsupervised ML', 'scikit-learn', 'XGBoost', 'OpenCV', 'Computer Vision (CV)', 'NLP', 'pandas', 'NumPy', 'SMOTE', 'Model evaluation'],
  },
  {
    title: 'Engineering practice',
    description: 'Testing, collaboration, API integration, and deployment across modern hosting platforms.',
    skills: ['Git', 'GitHub', 'Pytest', 'Unit testing', 'GitHub Actions', 'Linux', 'OpenAPI', 'Vercel', 'Railway', 'Render', 'Netlify', 'Gemini API'],
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
            Technologies I use across backend systems, interfaces, data workflows, and deployment—grouped by their role in the system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
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
