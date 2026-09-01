import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { CertificateBook } from './CertificateBook';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/5 w-[30rem] h-[30rem] bg-[#D4AF37]/[0.05] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT: Heading + description */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-4 mb-7"
            >
              <span
                className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                05 / CERTIFICATIONS
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <h2
                className="text-4xl sm:text-5xl lg:text-[2.5rem] xl:text-[3.4rem] tracking-tight uppercase leading-[0.92] break-words select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  CERTIFICATE
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  BOOK.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed max-w-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Each credential is a milestone in my continuous journey of learning, building, and mastering modern technologies. Browse through, one page at a time.
            </motion.p>
          </div>

          {/* RIGHT: The book itself */}
          <div className="lg:col-span-8">
            <CertificateBook certificates={certifications} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
