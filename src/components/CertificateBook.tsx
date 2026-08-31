import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Certification } from '../data/certifications';
import phoenixEmblem from '../assets/cp-phoenix.png';
import { profile } from '../data/profile';

interface CertificateBookProps {
  certificates: Certification[];
}

const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 38 : -38,
    opacity: 0,
    x: direction > 0 ? 40 : -40,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -38 : 38,
    opacity: 0,
    x: direction > 0 ? -40 : 40,
  }),
};

/** Left, static title page of the book — cover identity, doesn't change on navigation. */
const CertificateBookCover: React.FC = () => (
  <div
    className="relative w-full lg:w-[42%] shrink-0 flex flex-col items-center justify-center text-center px-6 py-10 sm:py-14 lg:py-0 rounded-t-sm lg:rounded-t-none lg:rounded-l-sm overflow-hidden"
    style={{
      background:
        'radial-gradient(circle at 50% 35%, #1C1712 0%, #100D0A 55%, #0A0806 100%)',
    }}
  >
    {/* Fine gold border frame, inset */}
    <div className="absolute inset-3 border border-[#8C6D4F]/40 rounded-sm pointer-events-none" />
    <div className="absolute inset-4 border border-[#D4AF37]/15 rounded-sm pointer-events-none" />

    <img
      src={phoenixEmblem}
      alt="CP Phoenix emblem, Chirag Pawar's personal brand mark"
      className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-6"
    />

    <h3
      className="text-3xl sm:text-4xl lg:text-[2.6rem] tracking-tight uppercase leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#D4AF37] to-[#8C6D4F]"
      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
    >
      Certificate
      <br />
      Book
    </h3>

    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent my-4" />

    <p
      className="text-xs sm:text-sm tracking-[0.28em] uppercase text-[#C4B29E] font-light"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {profile.name}
    </p>
  </div>
);

/** Right, dynamic page — displays the active certificate with page-turn transition. */
const CertificatePage: React.FC<{
  cert: Certification;
  direction: number;
  index: number;
  total: number;
}> = ({ cert, direction, index, total }) => (
  <div
    className="relative w-full lg:flex-1 min-w-0 flex flex-col rounded-b-sm lg:rounded-b-none lg:rounded-r-sm overflow-hidden bg-[#0A0806] border-t lg:border-t-0 lg:border-l border-[#8C6D4F]/25"
    style={{ perspective: '1600px' }}
  >
    {/* Page counter */}
    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
      <span
        className="inline-block px-2.5 py-1 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] bg-black/70 border border-[#D4AF37]/50 text-[#D4AF37]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>

    <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-10 min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden">
      <AnimatePresence mode="sync" custom={direction} initial={false}>
        <motion.div
          key={cert.id}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center bg-[#EDE8DE] rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-2 sm:p-3">
            <img
              src={cert.image}
              alt={`${cert.title} certificate, issued by ${cert.issuer}${cert.platform ? ` via ${cert.platform}` : ''}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Metadata footer */}
    <div className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-7 pt-1 border-t border-[#8C6D4F]/20">
      <h4
        className="text-base sm:text-lg text-white leading-snug mb-1"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
      >
        {cert.title}
      </h4>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] sm:text-xs text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {cert.issuer}
          {cert.platform ? ` • ${cert.platform}` : ''} • {cert.date}
          {cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}
        </p>
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase text-[#D4AF37] hover:text-[#F7E7C4] transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>VERIFY</span>
            <span className="text-xs">↗</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

export const CertificateBook: React.FC<CertificateBookProps> = ({ certificates }) => {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const [browseOpen, setBrowseOpen] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);
  const total = certificates.length;
  const activeCert = certificates[index];

  const paginate = (newDirection: number) => {
    setPage(([current]) => {
      const next = (current + newDirection + total) % total;
      return [next, newDirection];
    });
  };

  const goTo = (targetIndex: number) => {
    setPage(([current]) => [targetIndex, targetIndex >= current ? 1 : -1]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') paginate(1);
    if (e.key === 'ArrowLeft') paginate(-1);
  };

  useEffect(() => {
    if (!browseOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBrowseOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [browseOpen]);

  return (
    <div className="w-full">
      <div
        ref={bookRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={`Certificate book, showing certificate ${index + 1} of ${total}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative rounded-sm border border-[#8C6D4F]/45 bg-[#0A0806] shadow-[0_30px_90px_rgba(0,0,0,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60"
      >
        <div className="flex flex-col lg:flex-row">
          <CertificateBookCover />
          <CertificatePage cert={activeCert} direction={direction} index={index} total={total} />
        </div>

        {/* Prev button — spine side */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label={`Previous certificate (${index === 0 ? total : index} of ${total})`}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 items-center justify-center rounded-full border border-[#8C6D4F]/60 bg-[#0A0806] text-[#EAD8C7] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] z-20"
        >
          <span className="text-lg leading-none">‹</span>
        </button>

        {/* Next button — outer edge */}
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label={`Next certificate (${index + 2 > total ? 1 : index + 2} of ${total})`}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 items-center justify-center rounded-full border border-[#8C6D4F]/60 bg-[#0A0806] text-[#EAD8C7] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] z-20"
        >
          <span className="text-lg leading-none">›</span>
        </button>
      </div>

      {/* Mobile prev/next row (edge-anchored buttons hidden below sm) */}
      <div className="flex sm:hidden items-center justify-between mt-4">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous certificate"
          className="px-4 py-2 border border-[#8C6D4F]/50 text-[#EAD8C7] text-xs tracking-[0.2em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ‹ PREV
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next certificate"
          className="px-4 py-2 border border-[#8C6D4F]/50 text-[#EAD8C7] text-xs tracking-[0.2em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          NEXT ›
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center flex-wrap gap-2 mt-6" role="tablist" aria-label="Certificate pages">
        {certificates.map((cert, i) => (
          <button
            key={cert.id}
            type="button"
            role="tab"
            onClick={() => goTo(i)}
            aria-label={`Go to certificate ${i + 1} of ${total}: ${cert.title}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
              i === index ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-[#8C6D4F]/40 hover:bg-[#8C6D4F]/70'
            }`}
          />
        ))}
      </div>

      {/* Browse All trigger */}
      <div className="flex justify-center lg:justify-start mt-6">
        <button
          type="button"
          onClick={() => setBrowseOpen(true)}
          className="inline-flex items-center space-x-2 px-6 py-3 border border-[#8C6D4F] hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#F7E7C4] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span>BROWSE ALL</span>
          <span className="text-xs">↘</span>
        </button>
      </div>

      {/* Browse All modal */}
      <AnimatePresence>
        {browseOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Browse all certificates"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setBrowseOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-sm border border-[#8C6D4F]/50 bg-[#0A0806] shadow-[0_30px_90px_rgba(0,0,0,0.9)] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-2xl sm:text-3xl uppercase tracking-tight text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  All Certificates
                </h3>
                <button
                  type="button"
                  onClick={() => setBrowseOpen(false)}
                  aria-label="Close browse all"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#8C6D4F]/50 bg-black/70 text-[#EAD8C7] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((cert, i) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => {
                      goTo(i);
                      setBrowseOpen(false);
                      bookRef.current?.focus();
                    }}
                    className={`text-left flex items-center gap-3 p-3 rounded-sm border transition-colors ${
                      i === index
                        ? 'border-[#D4AF37]/70 bg-[#171008]'
                        : 'border-[#8C6D4F]/25 bg-[#100D0A] hover:border-[#8C6D4F]/60'
                    }`}
                  >
                    <img
                      src={cert.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-14 h-14 object-cover rounded-[2px] flex-shrink-0 bg-[#EDE8DE]"
                    />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-[13px] text-white leading-snug truncate" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {cert.title}
                      </p>
                      <p className="text-[10.5px] text-[#A8988B] font-light mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificateBook;
