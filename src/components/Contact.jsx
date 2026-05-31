import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ── EmailJS Credentials (confirmed production) ───────────────────────────
const EMAILJS_SERVICE_ID  = 'service_s9cgqan';
const EMAILJS_TEMPLATE_ID = 'template_ewcd56w';
const EMAILJS_PUBLIC_KEY  = '1Hl5HiR08BG1hdX6O';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setIsSuccess(false);

    const templateParams = {
      sender_name:  formData.name,    // → {{sender_name}}
      sender_email: formData.email,   // → {{sender_email}}
      message:      formData.message, // → {{message}}
      time: new Date().toLocaleString('en-US', {
        timeZone:  'Asia/Karachi',
        dateStyle: 'medium',
        timeStyle: 'short',
      }),                             // → {{time}}
    };

    emailjs
      .send(
        'service_s9cgqan',
        'template_ewcd56w',
        templateParams,
        '1Hl5HiR08BG1hdX6O'
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setErrorMessage("Failed to send email. Please try again or email me directly at alirazaa0319@gmail.com.");
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center md:text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-indigo-glow uppercase mb-3">&lt;establish_connection /&gt;</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact Me</h3>
        <p className="text-gray-400 mt-2 max-w-xl">
          Interested in an ML internship, a backend developer position, or collaborating on a project? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left column - Info Details (5/12 grid) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-2">Connect Directly</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Recruiters and developers are welcome to shoot a message via the form, ping my email, or ring my contact line.
            </p>

            <div className="space-y-4">
              
              {/* Email Card */}
              <a
                href="mailto:alirazaa0319@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-dark/50 border border-white/5 hover:border-indigo-glow/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-glow group-hover:bg-indigo-500/20 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-500 uppercase">Email</span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    alirazaa0319@gmail.com
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-gray-600 group-hover:text-white ml-auto transition-colors" />
              </a>

              {/* Phone Card */}
              <a
                href="tel:+923136799319"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-dark/50 border border-white/5 hover:border-cyan-glow/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-glow group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-500 uppercase">Phone</span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    +92 313 6799319
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-gray-600 group-hover:text-white ml-auto transition-colors" />
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-dark/50 border border-white/5">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-glow">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-500 uppercase">Location</span>
                  <span className="text-sm font-semibold text-gray-300">
                    Bahawalpur, Punjab, Pakistan
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* DevOps Accent Codebox decoration */}
          <div className="p-4 rounded-xl bg-black/30 border border-white/5 font-mono text-[10px] text-gray-500 space-y-1 mt-6">
            <div><span className="text-cyan-glow">ali_raza</span> = {"{"}</div>
            <div className="pl-4">"role": "Software Engineer (Backend/ML)",</div>
            <div className="pl-4">"availability": "Internship / Full-time",</div>
            <div className="pl-4">"docker_status": "daemon_running",</div>
            <div className="pl-4">"db_conn": "PostgreSQL_Active"</div>
            <div>{"}"}</div>
          </div>
        </div>

        {/* Right column - Interactive Contact Form (7/12 grid) */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-center text-left">
            <h4 className="text-xl font-bold text-white mb-6">Send an Encrypted Ping</h4>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-gray-500 uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 focus:border-indigo-glow focus:ring-1 focus:ring-indigo-glow text-white text-sm outline-none transition-all font-sans"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-gray-500 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 focus:border-indigo-glow focus:ring-1 focus:ring-indigo-glow text-white text-sm outline-none transition-all font-sans"
                  placeholder="john.doe@company.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-500 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 focus:border-indigo-glow focus:ring-1 focus:ring-indigo-glow text-white text-sm outline-none transition-all font-sans resize-none"
                  placeholder="Hi Ali, we are looking for a backend developer intern..."
                />
              </div>

              {/* Status Notifications */}
              <AnimatePresence mode="wait">
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono flex items-center gap-2.5"
                  >
                    <CheckCircle size={16} className="shrink-0" />
                    <span>Signal dispatched successfully! I will respond shortly.</span>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-mono flex items-center gap-2.5"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-glow to-purple-glow hover:from-indigo-600 hover:to-purple-600 disabled:from-indigo-900 disabled:to-purple-900 text-white rounded-xl font-medium shadow-lg transition-all duration-300 hover:scale-[1.01]"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-white" />
                    <span>Transmitting data...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
