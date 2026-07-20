import {
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const focusAreas = ['Django APIs', 'Automation', 'Data systems'];

export default function Hero() {
  return (
    <section id="hero" className="hero-section scroll-mt-18 border-b border-border pt-18">
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-4 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-20 lg:py-24">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="hero-pill">
            <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Backend · Automation · Applied ML
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-gray-400">
            Hi, I’m <span className="text-accent">Ali Raza</span>
          </p>

          <h1 className="mt-3 max-w-3xl text-[2.65rem] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.35rem]">
            Building dependable backend systems for real products.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl sm:leading-9">
            I turn product requirements into <strong className="font-medium text-white">Django APIs</strong>, scheduled data pipelines, and real-time features—then package them into systems people can actually run and maintain.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              Explore my work
              <ArrowRight size={17} />
            </a>
            <a
              href="/Ali_Raza_Backend.pdf"
              download="Ali_Raza_Backend.pdf"
              className="secondary-button"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          <dl className="mt-11 grid max-w-2xl gap-6 border-t border-border pt-7 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-gray-500">Focus</dt>
              <dd className="mt-2 flex flex-wrap gap-x-2 text-sm leading-6 text-white">
                {focusAreas.map((item, index) => (
                  <span key={item}>
                    {item}{index < focusAreas.length - 1 && <span className="ml-2 text-accent">·</span>}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-gray-500">Location</dt>
              <dd className="mt-2 flex items-center gap-2 text-sm text-white">
                <MapPin size={15} className="text-accent" />
                Bahawalpur, Pakistan · Open to remote
              </dd>
            </div>
          </dl>
        </div>

        <aside className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="profile-stage">
            <div className="profile-orbit">
              <div className="profile-ring">
                <img
                  src="/ali_raza.webp"
                  alt="Ali Raza"
                  width="720"
                  height="960"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="profile-status" aria-label="Available for opportunities">
                <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Available
              </span>
            </div>

            <div className="hero-project-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Featured build</p>
                  <h2 className="mt-2 text-lg font-semibold text-white">E-Commerce Scraper Engine</h2>
                </div>
                <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-gray-500">Public</span>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Scheduled storefront monitoring with browser automation, price history, and real-time alerts.
              </p>

              <div className="mt-5 hidden grid-cols-3 gap-2 border-y border-border py-4 text-center sm:grid">
                <div>
                  <p className="text-base font-semibold text-white">6</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">services</p>
                </div>
                <div className="border-x border-border">
                  <p className="text-base font-semibold text-white">4h</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">schedule</p>
                </div>
                <div>
                  <p className="text-base font-semibold text-white">12</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">tests</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Alii0319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label="GitHub profile"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/ali-raza-8a68372aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <a
                  href="https://github.com/Alii0319/Ecommerce-Scraper-Engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-accent"
                >
                  View project <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
