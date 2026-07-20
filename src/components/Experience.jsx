import { Award } from 'lucide-react';

const experienceBullets = [
  'Built and maintained more than five Django REST API modules for internal business workflows.',
  'Improved ORM query performance and strengthened backend data reliability across SQLite and Oracle-backed features.',
  'Debugged API and deployment issues while contributing through a shared Git and GitHub workflow.',
];

const metrics = [
  { value: '30%', label: 'less manual processing' },
  { value: '25%', label: 'faster query performance' },
  { value: '20%', label: 'fewer post-deploy defects' },
];

const certifications = [
  {
    name: 'Machine Learning with Python',
    issuer: 'IBM',
    area: 'Machine learning',
  },
  {
    name: 'Data Analysis with Python',
    issuer: 'IBM',
    area: 'Data analysis',
  },
  {
    name: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'IBM',
    area: 'Machine learning',
  },
  {
    name: 'Databases and SQL for Data Science',
    issuer: 'IBM',
    area: 'Databases',
  },
  {
    name: 'Statistics for Data Science with Python',
    issuer: 'IBM',
    area: 'Statistics',
  },
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    area: 'AI foundations',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-tinted scroll-mt-18 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="section-heading">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Experience grounded in delivery.</h2>
          <p className="section-intro">
            Production backend work, a software engineering degree, and focused technical coursework—all reinforcing the same direction.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="content-card lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">Professional experience</span>
              <span className="text-sm text-gray-500">6 months · On-site</span>
            </div>

            <p className="mt-8 text-sm font-medium text-accent">Enigmatix · Bahawalpur</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white">Backend Developer Intern</h3>

            <ul className="mt-7 space-y-4">
              {experienceBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-7 text-gray-400">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-9 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col bg-surface p-5">
                  <dt className="order-2 mt-1 text-xs leading-5 text-gray-500">{metric.label}</dt>
                  <dd className="order-1 text-2xl font-semibold text-white">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="content-card flex flex-col lg:col-span-4">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-border px-3 py-1 text-xs text-gray-400">Education</span>
              <span className="text-xs text-gray-500">Undergraduate</span>
            </div>

            <p className="mt-8 text-sm leading-6 text-accent">The Islamia University of Bahawalpur</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-white">BS Software Engineering</h3>
            <p className="mt-5 leading-7 text-gray-400">
              Software engineering student focused on backend architecture, databases, REST APIs, and machine-learning pipelines.
            </p>

            <div className="mt-auto pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">Current CGPA</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white">3.68 <span className="text-lg text-gray-500">/ 4.00</span></p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-hover">
                <span className="block h-full w-[92%] rounded-full bg-accent" />
              </div>
            </div>
          </article>

          <article className="content-card lg:col-span-12">
            <div className="flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-gray-400">Credentials</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-white">Selected certifications</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">Focused coursework from IBM and DeepLearning.AI.</p>
              </div>
              <p className="text-sm text-gray-500">6 completed courses</p>
            </div>

            <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((certification) => (
                  <li key={certification.name} className="certification-card">
                    <div className="flex items-start justify-between gap-4">
                      <span className="certification-icon" aria-hidden="true">
                        <Award size={18} />
                      </span>
                      <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                        {certification.issuer}
                      </span>
                    </div>
                    <p className="mt-6 text-base font-semibold leading-6 text-white">{certification.name}</p>
                    <p className="certification-area">{certification.area}</p>
                  </li>
                ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
