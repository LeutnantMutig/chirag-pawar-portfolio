import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Optional: point this at a real form-handling endpoint (e.g. Formspree, a serverless
// function, EmailJS) via an environment variable to send without opening a mail client.
// Configure VITE_CONTACT_FORM_ENDPOINT in a .env file to enable it.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = 'Please enter your name.';
    if (!formData.email.trim()) next.email = 'Please enter your email.';
    else if (!EMAIL_REGEX.test(formData.email.trim())) next.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) next.message = 'Please enter a message.';
    else if (formData.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return; // prevent duplicate submission

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');

    try {
      if (CONTACT_ENDPOINT) {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus('sent');
      } else {
        // No backend configured: open the visitor's email client with a prefilled
        // message so the form remains genuinely functional without a server.
        const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus('sent');
      }
    } catch {
      setStatus('error');
    }
  };

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  07 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-[2.15rem] sm:text-6xl md:text-7xl tracking-tight uppercase leading-[1] sm:leading-[0.85] break-words select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    {profile.heroHeadline[0]}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    {profile.heroHeadline[1]} {profile.heroHeadline[2]}
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Open to AI Engineer, ML Engineer, and Software Engineer roles. Have a system to build or a role worth discussing? Reach out directly below.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${profile.phone}`}
                  aria-label={`Call Chirag Pawar at +91 ${profile.phone}`}
                  className="group inline-flex items-center gap-3 text-[12px] tracking-[0.1em] text-[#EAD8C7] hover:text-[#F7E7C4] transition-colors w-fit py-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#8C6D4F]/50 group-hover:border-[#D4AF37] transition-colors text-[10px]" aria-hidden="true">
                    ☎
                  </span>
                  +91 {profile.phone}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label={`Email Chirag Pawar at ${profile.email}`}
                  className="group inline-flex items-center gap-3 text-[12px] tracking-[0.1em] text-[#EAD8C7] hover:text-[#F7E7C4] transition-colors w-fit py-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#8C6D4F]/50 group-hover:border-[#D4AF37] transition-colors text-[10px]" aria-hidden="true">
                    ✉
                  </span>
                  {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chirag Pawar's LinkedIn profile (opens in a new tab)"
                  className="group inline-flex items-center gap-3 text-[12px] tracking-[0.1em] text-[#EAD8C7] hover:text-[#F7E7C4] transition-colors w-fit py-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#8C6D4F]/50 group-hover:border-[#D4AF37] transition-colors text-[10px]" aria-hidden="true">
                    in
                  </span>
                  LinkedIn ↗
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chirag Pawar's GitHub profile (opens in a new tab)"
                  className="group inline-flex items-center gap-3 text-[12px] tracking-[0.1em] text-[#EAD8C7] hover:text-[#F7E7C4] transition-colors w-fit py-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#8C6D4F]/50 group-hover:border-[#D4AF37] transition-colors text-[10px]" aria-hidden="true">
                    {'</>'}
                  </span>
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {isSent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {CONTACT_ENDPOINT ? 'MESSAGE SENT' : 'EMAIL CLIENT OPENED'}
                </h3>
                <p className="text-xs text-[#A8988B] font-light max-w-sm mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {CONTACT_ENDPOINT
                    ? 'Your message has been delivered.'
                    : `Your default email app should now be open with this message ready to send to ${profile.email}. If it didn\u2019t open, email directly using the link on the left.`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="text-[11px] tracking-[0.2em] uppercase text-[#8C6D4F] hover:text-[#D4AF37] transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    >
                      NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      disabled={isSending}
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors disabled:opacity-50"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-[10.5px] text-[#D98C6D]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    >
                      EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email"
                      disabled={isSending}
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors disabled:opacity-50"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 text-[10.5px] text-[#D98C6D]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What are you building, or what role are you hiring for?"
                    disabled={isSending}
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none disabled:opacity-50"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1.5 text-[10.5px] text-[#D98C6D]">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p className="text-[11px] text-[#D98C6D]" role="alert">
                    Something went wrong sending that. Please try again, or email {profile.email} directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {isSending ? 'SENDING…' : 'SEND MESSAGE ↗'}
                </button>

                <p className="text-[10px] text-[#8C6D4F] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {CONTACT_ENDPOINT
                    ? 'Messages are delivered directly.'
                    : `This opens your email app with the message pre-filled to ${profile.email}.`}
                </p>
              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            {profile.name.toUpperCase()} — {profile.title.toUpperCase()}
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
