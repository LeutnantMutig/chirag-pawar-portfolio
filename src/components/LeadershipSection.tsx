import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadership } from '../data/leadership';

export const LeadershipSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const imageTriggerRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  const openModal = (trigger: React.RefObject<HTMLButtonElement | null>) => {
    lastTriggerRef.current = trigger.current;
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    (lastTriggerRef.current ?? triggerRef.current)?.focus();
  };

  return (
    <section
      id="leadership"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient glow, warmer/redder tone to distinguish from the cert book's gold glow */}
      <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/[0.07] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-10"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            06 / LEADERSHIP &amp; RECOGNITION
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Asymmetric editorial panel — visually distinct from certificate cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 rounded-sm border border-[#8C6D4F]/40 bg-gradient-to-br from-[#120F0C] via-[#0D0B09] to-black overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60" />

          {/* Left: large title block */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <span
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              LEADERSHIP · RESPONSIBILITY · RECOGNITION
            </span>

            <h2
              className="text-[1.7rem] sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.05] sm:leading-[0.92] break-words mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D7C5] to-[#C99E5D]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {leadership.role}
              <br />
              — {leadership.title}
            </h2>

            <p
              className="text-xs sm:text-sm font-light text-[#BDB0A4] leading-[1.85] tracking-wide max-w-xl mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {leadership.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-8 pt-6 border-t border-[#8C6D4F]/25">
              <div>
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                  INSTITUTION
                </span>
                <span className="text-sm text-[#EAD8C7]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {leadership.organization}
                </span>
              </div>
              <div>
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                  EVENT
                </span>
                <span className="text-sm text-[#EAD8C7]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {leadership.event}
                </span>
              </div>
              <div>
                <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                  DATE
                </span>
                <span className="text-sm text-[#EAD8C7]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {leadership.date}
                </span>
              </div>
            </div>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => openModal(triggerRef)}
              className="self-start inline-flex items-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>VIEW CERTIFICATE</span>
              <span className="text-xs">↗</span>
            </button>
          </div>

          {/* Right: certificate preview panel */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-8 sm:p-10 lg:p-10 bg-gradient-to-b from-[#0E0C0A] to-black border-t lg:border-t-0 lg:border-l border-[#8C6D4F]/25">
            <button
              type="button"
              ref={imageTriggerRef}
              onClick={() => openModal(imageTriggerRef)}
              aria-label={`View full certificate: ${leadership.role} — ${leadership.title}`}
              className="group relative w-full max-w-[380px] rounded-sm border border-[#8C6D4F]/50 hover:border-[#D4AF37] bg-[#0A0806] p-2.5 sm:p-3 shadow-[0_20px_55px_rgba(0,0,0,0.7)] transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

              <div className="relative w-full aspect-[1400/991] overflow-hidden rounded-[2px] bg-[#EDE8DE]">
                <img
                  src={leadership.image}
                  alt={`${leadership.role} — ${leadership.title} certificate preview`}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                <span
                  className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  CERTIFICATE OF APPRECIATION
                </span>
                <span className="text-[#D4AF37] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>
            </button>
          </div>
        </motion.div>

      </div>

      {/* Certificate modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${leadership.role} — ${leadership.title} certificate`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-sm border border-[#8C6D4F]/50 bg-[#0A0806] shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
            >
              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeModal}
                aria-label="Close certificate viewer"
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full border border-[#8C6D4F]/50 bg-black/70 text-[#EAD8C7] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                ✕
              </button>

              <img
                src={leadership.image}
                alt={`${leadership.role} — ${leadership.title} certificate, full view`}
                className="w-full h-auto"
              />

              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl sm:text-2xl text-white mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                >
                  {leadership.role} — {leadership.title}
                </h3>
                <p className="text-xs text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {leadership.organization} • {leadership.event} • {leadership.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LeadershipSection;
