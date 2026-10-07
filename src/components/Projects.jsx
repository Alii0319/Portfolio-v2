import { ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons';

const projects = [
  {
    title: 'E-Commerce Scraper Engine',
    category: 'Backend, Real-Time & GitOps',
    description: 'A production-grade price-monitoring platform that tracks dynamic storefronts with Playwright & BeautifulSoup, runs 4-hour Celery Beat scans, and streams user-isolated Django Channels alerts—deployed on Kubernetes via Helm & ArgoCD GitOps with automated GitHub Actions CI/CD and Prometheus/Grafana observability.',
    highlights: ['4-hour Celery Beat cadence', 'K8s & Helm umbrella GitOps', '42 CI/CD tests + Trivy scans'],
    tech: ['Django 5', 'DRF', 'React 19', 'Kubernetes', 'Helm', 'ArgoCD', 'GitHub Actions', 'Prometheus', 'Grafana', 'Trivy', 'Docker', 'Celery', 'Playwright', 'PostgreSQL', 'Redis', 'Channels', 'TypeScript'],
    href: 'https://github.com/Alii0319/Ecommerce-Scraper-Engine',
  },
  {
    title: 'ShortIQ',
    category: 'Backend systems',
    description: 'A containerized URL-shortening API with JWT-secured endpoints, Redis cache-first redirects, 10k+ concurrent-user capacity, and asynchronous Celery click analytics covering device, browser, and geographic data with CSV/PDF exports.',
    highlights: ['Sub-200ms redirects', '10k+ concurrent capacity', 'Redis cache-first reads'],
    tech: ['Django REST Framework', 'Redis', 'Celery', 'PostgreSQL', 'Docker Compose', 'JWT'],
    href: 'https://github.com/Alii0319/ShortIQ',
  },
  {
    title: 'AI Resume Analyzer',
    category: 'Full-stack SaaS',
    description: 'An ATS optimization platform combining TF-IDF cosine similarity scoring with Gemini-powered AI suggestions, PDF ingestion, and a token-refresh retry queue in React Axios interceptors.',
    highlights: ['TF-IDF cosine scoring', 'Gemini AI suggestions', 'Axios token retry queue'],
    tech: ['Django REST Framework', 'React 19', 'PostgreSQL', 'Google Gemini', 'scikit-learn', 'PyMuPDF', 'Docker'],
    href: 'https://github.com/Alii0319/AI_Resume_Analyzer',
  },
  {
    title: 'Bank Customer Churn Prediction',
    category: 'Machine learning',
    description: 'An end-to-end ML classification pipeline with SMOTE class balancing and ColumnTransformer feature engineering, tuning XGBoost to predict customer churn with high generalization fidelity.',
    highlights: ['86.71% test accuracy', '0.85 ROC-AUC score', '1.41% train/test gap'],
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'SMOTE', 'Matplotlib'],
    href: 'https://github.com/Alii0319/Customer-Churn-Prediction',
  },
  {
    title: 'Real-Time Financial Anomaly Detection',
    category: 'Machine learning',
    description: 'An unsupervised fraud-detection workflow across 284,807 transactions (492 fraud cases) with RobustScaler, Isolation Forest inference, PCA dimensionality reduction, and an interactive Streamlit dashboard.',
    highlights: ['284,807 transactions analyzed', 'Isolation Forest inference', 'Interactive Streamlit UI'],
    tech: ['Python', 'scikit-learn', 'Isolation Forest', 'PCA', 'Streamlit', 'pandas'],
    href: 'https://github.com/Alii0319/Real-Time-Anomaly-Detection',
  },
  {
    title: 'Blood Donation Management',
    category: 'Web application',
    description: 'A full-stack Django application for donor registration, blood-group filtering, request lifecycle management, and role-based administrative workflows.',
    highlights: ['Role-based access control', 'Donor & blood filtering', 'Admin oversight'],
    tech: ['Django', 'Python', 'Oracle SQL', 'Django ORM', 'HTML'],
    href: 'https://github.com/Alii0319/blood_donation',
  },
  {
    title: 'Heart Failure Diagnostic Prediction',
    category: 'Machine learning',
    description: 'Binary classification models trained on structured healthcare records with clinical feature engineering and cross-validation to benchmark predictive signals.',
    highlights: ['Clinical feature engineering', 'ROC-AUC & F1 benchmarking', 'Diagnostic signal analysis'],
    tech: ['Python', 'scikit-learn', 'pandas', 'Model Evaluation', 'Matplotlib'],
    href: 'https://github.com/Alii0319/Heart-Failure-Prediction',
  },
];

const serviceRows = [
  { name: 'argocd / helm', status: 'synced · healthy' },
  { name: 'github actions', status: '42 tests + trivy passed' },
  { name: 'web / daphne', status: 'rest + ws live' },
  { name: 'celery beat & worker', status: 'every 4h · active' },
  { name: 'prometheus / grafana', status: 'telemetry active' },
];

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="scroll-mt-18 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Projects with backend &amp; DevOps depth.</h2>
          <p className="section-intro">
            Production-grade systems covering distributed architectures, automated GitOps pipelines, container orchestration, and real-time user interfaces.
          </p>
        </div>

        <article className="featured-project">
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">Featured Project</span>
                <span className="text-sm text-gray-500">Backend &amp; GitOps Infrastructure</span>
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
                <span>k8s-cluster / production-mesh</span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-gray-500">DevOps &amp; Telemetry Preview</p>
                    <p className="mt-1 text-lg font-semibold text-white">GitOps &amp; Monitoring Mesh</p>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-full bg-emerald-400/10">
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                  </span>
                </div>

                <div className="mt-2">
                  {serviceRows.map((service) => (
                    <div key={service.name} className="flex items-center justify-between border-b border-border py-3.5 font-mono text-xs">
                      <span className="text-gray-300">{service.name}</span>
                      <span className="text-emerald-400">{service.status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4 font-mono text-xs leading-6">
                  <p className="text-gray-500">pipeline_telemetry</p>
                  <p className="text-gray-300"><span className="text-accent">gitops:</span> argo-cd sync (helm umbrella)</p>
                  <p className="text-gray-300"><span className="text-accent">security:</span> trivy vulnerability scan clean</p>
                  <p className="text-gray-300"><span className="text-accent">realtime_alert:</span> django channels websocket</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{project.category}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white">{project.title}</h3>
                </div>
                <span className="mt-1 h-1 w-8 rounded-full bg-accent/70" aria-hidden="true" />
              </div>

              <p className="mt-5 flex-1 text-sm leading-6 text-gray-400">{project.description}</p>

              <ul className="mt-5 space-y-2 text-xs text-gray-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((technology) => (
                  <span key={technology} className="tech-tag text-[10px]">{technology}</span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent"
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
