import { ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons';

const projects = [
  {
    title: 'E-Commerce Scraper Engine',
    category: 'Backend automation',
    description: 'A multi-user price-monitoring platform that renders dynamic storefronts, extracts product prices, stores historical observations, and evaluates user-defined alert thresholds.',
    highlights: ['4-hour scheduling', '6-service Docker stack', '12 backend tests'],
    tech: ['Django REST Framework', 'Playwright', 'Celery', 'Channels', 'PostgreSQL', 'Redis', 'React', 'TypeScript'],
    href: 'https://github.com/Alii0319/Ecommerce-Scraper-Engine',
  },
  {
    title: 'ShortIQ',
    category: 'Backend systems',
    description: 'A containerized URL-shortening API with cache-first redirects and asynchronous click analytics covering device, browser, and geographic data.',
    highlights: ['Redis cache-first reads', 'Celery analytics', 'CSV and PDF exports'],
    tech: ['Django REST Framework', 'Redis', 'Celery', 'PostgreSQL', 'Docker Compose', 'JWT'],
    href: 'https://github.com/Alii0319/ShortIQ',
  },
  {
    title: 'AI Resume Analyzer',
    category: 'Full-stack product',
    description: 'An ATS-oriented resume analysis tool combining deterministic keyword similarity with model-generated improvement suggestions and downloadable reports.',
    highlights: ['TF-IDF similarity', 'Gemini suggestions', 'PDF report export'],
    tech: ['Django REST Framework', 'React', 'PostgreSQL', 'Gemini', 'scikit-learn', 'PyMuPDF'],
    href: 'https://github.com/Alii0319/AI_Resume_Analyzer',
  },
  {
    title: 'Bank Customer Churn Prediction',
    category: 'Machine learning',
    description: 'An end-to-end classification pipeline for customer churn, including preprocessing, class balancing, feature transformation, model tuning, and evaluation.',
    highlights: ['86.71% test accuracy', '0.85 ROC-AUC', '1.41% train/test gap'],
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SMOTE', 'Matplotlib'],
    href: 'https://github.com/Alii0319/Customer-Churn-Prediction',
  },
  {
    title: 'Financial Anomaly Detection',
    category: 'Machine learning',
    description: 'An unsupervised fraud-detection workflow with robust scaling, Isolation Forest inference, dimensionality reduction, and an interactive Streamlit interface.',
    highlights: ['284,807 transactions', '492 fraud cases', 'Unsupervised detection'],
    tech: ['Python', 'scikit-learn', 'Isolation Forest', 'PCA', 'Streamlit', 'pandas'],
    href: 'https://github.com/Alii0319/Real-Time-Anomaly-Detection',
  },
  {
    title: 'Blood Donation Management',
    category: 'Web application',
    description: 'A Django application for managing donor registration, blood-group filtering, inventory, requests, and permission-based administrative workflows.',
    highlights: ['Role-based access', 'Donor filtering', 'Request tracking'],
    tech: ['Django', 'Python', 'Oracle SQL', 'Django ORM', 'HTML'],
    href: 'https://github.com/Alii0319/blood_donation',
  },
];

const serviceRows = [
  { name: 'scraper_worker', status: 'running' },
  { name: 'celery_beat', status: 'scheduled' },
  { name: 'websocket', status: 'connected' },
];

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="scroll-mt-18 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="section-heading">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title">Selected work, built end to end.</h2>
          <p className="section-intro">
            Backend-heavy products that cover architecture, implementation, infrastructure, and the interface needed to make each system usable.
          </p>
        </div>

        <article className="featured-project">
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">Featured project</span>
                <span className="text-sm text-gray-500">Backend automation platform</span>
              </div>

              <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                {featuredProject.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                {featuredProject.description}
              </p>

              <ul className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-3">
                {featuredProject.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((technology) => (
                  <span key={technology} className="tech-tag">{technology}</span>
                ))}
              </div>
            </div>

            <a
              href={featuredProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white hover:text-accent"
              aria-label={`Explore the ${featuredProject.title} repository on GitHub`}
            >
              <Github size={17} />
              Explore the repository
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-preview-wrap">
            <div className="project-window">
              <div className="project-window-bar">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full bg-red-400/80" />
                  <span className="size-2 rounded-full bg-amber-400/80" />
                  <span className="size-2 rounded-full bg-emerald-400/80" />
                </div>
                <span>monitoring / services</span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-gray-500">Architecture preview</p>
                    <p className="mt-1 text-lg font-semibold text-white">Scheduled monitoring stack</p>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-full bg-emerald-400/10">
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                  </span>
                </div>

                <div className="mt-2">
                  {serviceRows.map((service) => (
                    <div key={service.name} className="flex items-center justify-between border-b border-border py-4 font-mono text-xs">
                      <span className="text-gray-300">{service.name}</span>
                      <span className="text-emerald-400">{service.status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4 font-mono text-xs leading-6">
                  <p className="text-gray-500">latest_event</p>
                  <p className="text-gray-300"><span className="text-accent">type:</span> threshold_evaluated</p>
                  <p className="text-gray-300"><span className="text-accent">delivery:</span> websocket</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-white">{project.title}</h3>
                </div>
                <span className="mt-1 h-1 w-8 rounded-full bg-accent/70" aria-hidden="true" />
              </div>

              <p className="mt-5 flex-1 leading-7 text-gray-400">{project.description}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span key={technology} className="tech-tag">{technology}</span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <Github size={16} />
                View source
                <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
