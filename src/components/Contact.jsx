import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_s9cgqan';
const EMAILJS_TEMPLATE_ID = 'template_ewcd56w';
const EMAILJS_PUBLIC_KEY = '1Hl5HiR08BG1hdX6O';

const initialFormData = { name: '', email: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle');

  const handleChange = ({ target }) => {
    setFormData((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          sender_name: formData.name.trim(),
          sender_email: formData.email.trim(),
          message: formData.message.trim(),
          time: new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Karachi',
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        },
        EMAILJS_PUBLIC_KEY,
      );

      setFormData(initialFormData);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-tinted scroll-mt-18">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="section-heading">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Let’s build something useful.</h2>
          <p className="section-intro">
            I’m interested in backend, automation, and data-focused engineering opportunities where thoughtful implementation matters.
          </p>
        </div>

        <div className="contact-panel">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="hero-pill">
              <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Open to opportunities
            </div>

            <h3 className="mt-8 max-w-md text-3xl font-semibold tracking-[-0.03em] text-white">
              Have a backend problem worth solving?
            </h3>
            <p className="mt-5 max-w-md leading-7 text-gray-400">
              Email is the fastest way to reach me. For project context, include the goal, current stack, and where you need help.
            </p>

            <a
              href="mailto:alirazaa0319@gmail.com"
              className="mt-8 inline-flex max-w-full items-center gap-2 break-all text-lg font-semibold text-white hover:text-accent sm:text-xl"
            >
              <Mail size={19} className="shrink-0 text-accent" />
              alirazaa0319@gmail.com
              <ArrowUpRight size={17} className="shrink-0" />
            </a>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href="https://github.com/Alii0319" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub <ArrowUpRight size={14} />
              </a>
              <a href="https://linkedin.com/in/ali-raza-8a68372aa" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="tel:+923136799319" className="contact-link">+92 313 6799319</a>
            </div>

            <p className="mt-10 flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={15} /> Bahawalpur, Punjab, Pakistan
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form-card" aria-label="Contact form">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Send a message</p>
                <p className="mt-1 text-sm text-gray-500">I usually reply by email.</p>
              </div>
              <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-midnight text-gray-400">
                <Send size={17} />
              </span>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength="80"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength="120"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-field"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength="2000"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="form-field resize-y"
                placeholder="Tell me about the project or role."
              />
            </div>

            {status === 'success' && (
              <p className="mt-5 rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-500" role="status" aria-live="polite">
                Message sent. I’ll get back to you shortly.
              </p>
            )}

            {status === 'error' && (
              <p className="mt-5 rounded-lg border border-red-500/25 bg-red-500/5 px-4 py-3 text-sm text-red-400" role="alert">
                The message could not be sent. Please email me directly instead.
              </p>
            )}

            <button type="submit" disabled={status === 'loading'} className="primary-button mt-6 disabled:cursor-not-allowed disabled:opacity-60">
              {status === 'loading' ? 'Sending…' : 'Send message'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
